import { create } from "zustand";
import { supabase, isMockMode } from "../lib/supabase";
import type { Provider, Category } from "../types/index";

// Mock data for development without Supabase
const MOCK_CATEGORIES: Category[] = [
  { id: "1", name: "Plumbing", icon: "Wrench", color: "text-blue-600" },
  { id: "2", name: "Electrical", icon: "Zap", color: "text-amber-600" },
  { id: "3", name: "Cleaning", icon: "Sparkles", color: "text-purple-600" },
  { id: "4", name: "Beauty & Spa", icon: "Heart", color: "text-rose-600" },
  { id: "5", name: "Moving", icon: "Truck", color: "text-emerald-600" },
  { id: "6", name: "Tutoring", icon: "BookOpen", color: "text-indigo-600" },
  { id: "7", name: "Handyman", icon: "Briefcase", color: "text-orange-600" },
];

const MOCK_PROVIDERS: Provider[] = [
  {
    id: "1",
    user_id: null,
    name: "Brian Otieno",
    role: "Master Electrician",
    about:
      "NITA certified electrician with 5 years of experience. Specialist in domestic wiring, socket repairs, and safety inspections.",
    location: "Kilimani, Nairobi",
    image_url:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews_count: 127,
    jobs_count: 312,
    verified: true,
    created_at: new Date().toISOString(),
    services: [
      {
        id: "s1",
        provider_id: "1",
        category_id: "2",
        name: "Socket Repair/Install",
        price: 800,
        duration: "1h",
        created_at: "",
      },
      {
        id: "s2",
        provider_id: "1",
        category_id: "2",
        name: "Full Wiring Audit",
        price: 2500,
        duration: "3h",
        created_at: "",
      },
      {
        id: "s3",
        provider_id: "1",
        category_id: "2",
        name: "Emergency Fix",
        price: 1500,
        duration: "1h",
        created_at: "",
      },
    ],
  },
  {
    id: "2",
    user_id: null,
    name: "Grace Wanjiku",
    role: "Professional Stylist",
    about:
      "Expert hair stylist specializing in braiding, weaves, and natural hair care.",
    location: "Westlands, Nairobi",
    image_url:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews_count: 89,
    jobs_count: 245,
    verified: true,
    created_at: new Date().toISOString(),
    services: [
      {
        id: "s4",
        provider_id: "2",
        category_id: "4",
        name: "Hair Braiding",
        price: 1500,
        duration: "2h",
        created_at: "",
      },
      {
        id: "s5",
        provider_id: "2",
        category_id: "4",
        name: "Weave Installation",
        price: 2000,
        duration: "3h",
        created_at: "",
      },
    ],
  },
  {
    id: "3",
    user_id: null,
    name: "CleanPro Services",
    role: "Home Cleaning",
    about: "Professional cleaning services for homes and offices.",
    location: "Westlands, Nairobi",
    image_url:
      "https://images.unsplash.com/photo-1581578731117-104f2a8060a7?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews_count: 156,
    jobs_count: 520,
    verified: true,
    created_at: new Date().toISOString(),
    services: [
      {
        id: "s6",
        provider_id: "3",
        category_id: "3",
        name: "Home Deep Cleaning",
        price: 3500,
        duration: "4h",
        created_at: "",
      },
      {
        id: "s7",
        provider_id: "3",
        category_id: "3",
        name: "Regular Cleaning",
        price: 2000,
        duration: "2h",
        created_at: "",
      },
    ],
  },
];

interface ProvidersState {
  providers: Provider[];
  categories: Category[];
  currentProvider: Provider | null;
  loading: boolean;
  error: string | null;

  fetchCategories: () => Promise<void>;
  fetchProviders: (category?: string) => Promise<void>;
  fetchProviderById: (id: string) => Promise<void>;
  searchProviders: (query: string, category?: string) => Promise<void>;
}

export const useProvidersStore = create<ProvidersState>((set) => ({
  providers: [],
  categories: [],
  currentProvider: null,
  loading: false,
  error: null,

  fetchCategories: async () => {
    set({ loading: true, error: null });

    if (isMockMode) {
      set({ categories: MOCK_CATEGORIES, loading: false });
      return;
    }

    try {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");

      if (error) throw error;
      set({ categories: data || [], loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  fetchProviders: async (category?: string) => {
    set({ loading: true, error: null });

    if (isMockMode) {
      let filtered = MOCK_PROVIDERS;
      if (category) {
        // Simple mock filter
        filtered = MOCK_PROVIDERS.filter((p) =>
          p.role?.toLowerCase().includes(category.toLowerCase()),
        );
      }
      set({ providers: filtered, loading: false });
      return;
    }

    try {
      let query = supabase
        .from("providers")
        .select(
          `
          *,
          services (*)
        `,
        )
        .order("rating", { ascending: false });

      if (category) {
        // Filter by category through services
        query = supabase
          .from("providers")
          .select(
            `
            *,
            services!inner (
              *,
              category:categories!inner (name)
            )
          `,
          )
          .eq("services.category.name", category)
          .order("rating", { ascending: false });
      }

      const { data, error } = await query;
      if (error) throw error;
      set({ providers: data || [], loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  fetchProviderById: async (id: string) => {
    set({ loading: true, error: null, currentProvider: null });

    if (isMockMode) {
      const provider = MOCK_PROVIDERS.find((p) => p.id === id);
      set({ currentProvider: provider || null, loading: false });
      return;
    }

    try {
      const { data, error } = await supabase
        .from("providers")
        .select(
          `
          *,
          services (*)
        `,
        )
        .eq("id", id)
        .single();

      if (error) throw error;
      set({ currentProvider: data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  searchProviders: async (query: string, _category?: string) => {
    set({ loading: true, error: null });

    if (isMockMode) {
      const filtered = MOCK_PROVIDERS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.role?.toLowerCase().includes(query.toLowerCase()),
      );
      set({ providers: filtered, loading: false });
      return;
    }

    try {
      let dbQuery = supabase
        .from("providers")
        .select(`*, services (*)`)
        .or(`name.ilike.%${query}%,role.ilike.%${query}%`)
        .order("rating", { ascending: false });

      const { data, error } = await dbQuery;
      if (error) throw error;
      set({ providers: data || [], loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
