import { create } from "zustand";
import { supabase, isMockMode } from "../lib/supabase";
import type { Booking, CreateBookingInput } from "../types";

// Mock bookings data
const MOCK_BOOKINGS: Booking[] = [
  {
    id: "b1",
    user_id: "mock-user-123",
    provider_id: "1",
    service_id: "s1",
    scheduled_date: new Date().toISOString(),
    location: "Kilimani, Nairobi",
    notes: null,
    status: "confirmed",
    total_price: 880,
    created_at: new Date().toISOString(),
    provider: {
      id: "1",
      user_id: null,
      name: "Brian Otieno",
      role: "Electrician",
      about: null,
      location: "Kilimani, Nairobi",
      image_url:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop",
      rating: 4.8,
      reviews_count: 127,
      jobs_count: 312,
      verified: true,
      created_at: "",
    },
    service: {
      id: "s1",
      provider_id: "1",
      category_id: "2",
      name: "Socket Installation",
      price: 800,
      duration: "1h",
      created_at: "",
    },
  },
  {
    id: "b2",
    user_id: "mock-user-123",
    provider_id: "2",
    service_id: "s4",
    scheduled_date: new Date(
      Date.now() + 3 * 24 * 60 * 60 * 1000,
    ).toISOString(),
    location: "Westlands, Nairobi",
    notes: null,
    status: "pending",
    total_price: 1600,
    created_at: new Date().toISOString(),
    provider: {
      id: "2",
      user_id: null,
      name: "Grace Wanjiku",
      role: "Professional Stylist",
      about: null,
      location: "Westlands, Nairobi",
      image_url:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      rating: 4.8,
      reviews_count: 89,
      jobs_count: 245,
      verified: true,
      created_at: "",
    },
    service: {
      id: "s4",
      provider_id: "2",
      category_id: "4",
      name: "Hair Braiding",
      price: 1500,
      duration: "2h",
      created_at: "",
    },
  },
];

interface BookingsState {
  bookings: Booking[];
  loading: boolean;
  error: string | null;

  fetchUserBookings: () => Promise<void>;
  createBooking: (
    input: CreateBookingInput,
  ) => Promise<{ error: any; data?: Booking }>;
  updateBookingStatus: (
    id: string,
    status: Booking["status"],
  ) => Promise<{ error: any }>;
}

export const useBookingsStore = create<BookingsState>((set, get) => ({
  bookings: [],
  loading: false,
  error: null,

  fetchUserBookings: async () => {
    set({ loading: true, error: null });

    if (isMockMode) {
      set({ bookings: MOCK_BOOKINGS, loading: false });
      return;
    }

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        set({ bookings: [], loading: false });
        return;
      }

      const { data, error } = await supabase
        .from("bookings")
        .select(
          `
          *,
          provider:providers (*),
          service:services (*)
        `,
        )
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      set({ bookings: data || [], loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  createBooking: async (input: CreateBookingInput) => {
    set({ loading: true, error: null });

    if (isMockMode) {
      const newBooking: Booking = {
        id: `b${Date.now()}`,
        user_id: "mock-user-123",
        provider_id: input.provider_id,
        service_id: input.service_id,
        scheduled_date: input.scheduled_date,
        location: input.location,
        notes: input.notes || null,
        status: "pending",
        total_price: input.total_price,
        created_at: new Date().toISOString(),
      };

      const currentBookings = get().bookings;
      set({ bookings: [newBooking, ...currentBookings], loading: false });
      return { error: null, data: newBooking };
    }

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("User not authenticated");
      }

      const { data, error } = await supabase
        .from("bookings")
        .insert({
          user_id: user.id,
          ...input,
          status: "pending",
        })
        .select(
          `
          *,
          provider:providers (*),
          service:services (*)
        `,
        )
        .single();

      if (error) throw error;

      const currentBookings = get().bookings;
      set({ bookings: [data, ...currentBookings], loading: false });
      return { error: null, data };
    } catch (err: any) {
      set({ error: err.message, loading: false });
      return { error: err };
    }
  },

  updateBookingStatus: async (id: string, status: Booking["status"]) => {
    set({ loading: true, error: null });

    if (isMockMode) {
      const bookings = get().bookings.map((b) =>
        b.id === id ? { ...b, status } : b,
      );
      set({ bookings, loading: false });
      return { error: null };
    }

    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      const bookings = get().bookings.map((b) =>
        b.id === id ? { ...b, status } : b,
      );
      set({ bookings, loading: false });
      return { error: null };
    } catch (err: any) {
      set({ error: err.message, loading: false });
      return { error: err };
    }
  },
}));
