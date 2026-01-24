import { create } from "zustand";
import { supabase, isMockMode } from "../lib/supabase";

// Use 'any' for Supabase types to avoid import issues with different library versions
type SupabaseUser = any;
type SupabaseSession = any;

interface AuthState {
  user: SupabaseUser | null;
  session: SupabaseSession | null;
  loading: boolean;
  initialize: () => Promise<void>;
  signInWithPhone: (phone: string) => Promise<{ error: any }>;
  verifyOtp: (
    phone: string,
    token: string,
  ) => Promise<{ error: any; data?: any }>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: true,

  initialize: async () => {
    if (isMockMode) {
      set({ loading: false });
      return;
    }

    try {
      // Get initial session
      const {
        data: { session },
      } = await supabase.auth.getSession();
      set({ session, user: session?.user ?? null, loading: false });

      // Listen for changes
      supabase.auth.onAuthStateChange((_event, session) => {
        set({ session, user: session?.user ?? null, loading: false });
      });
    } catch (error) {
      console.error("Auth initialization error:", error);
      set({ loading: false });
    }
  },

  signInWithPhone: async (phone: string) => {
    set({ loading: true });

    if (isMockMode) {
      // Mock successful OTP sending
      console.log(`[Mock] OTP sent to ${phone}`);
      setTimeout(() => set({ loading: false }), 1000);
      return { error: null };
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: phone,
      });
      return { error };
    } catch (err) {
      return { error: err };
    } finally {
      set({ loading: false });
    }
  },

  verifyOtp: async (phone: string, token: string) => {
    set({ loading: true });

    if (isMockMode) {
      // Mock successful verification
      console.log(`[Mock] Verifying OTP ${token} for ${phone}`);
      const mockUser = {
        id: "mock-user-123",
        email: "user@example.com",
      };
      const mockSession = {
        user: mockUser,
        access_token: "mock-token",
      };

      setTimeout(() => {
        set({ user: mockUser, session: mockSession, loading: false });
      }, 1000);
      return { error: null, data: { session: mockSession, user: mockUser } };
    }

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        phone,
        token,
        type: "sms",
      });

      if (data.session) {
        set({ session: data.session, user: data.user });
      }

      return { data, error };
    } catch (err) {
      return { error: err };
    } finally {
      set({ loading: false });
    }
  },

  signOut: async () => {
    if (isMockMode) {
      set({ user: null, session: null });
      return;
    }
    await supabase.auth.signOut();
    set({ user: null, session: null });
  },
}));
