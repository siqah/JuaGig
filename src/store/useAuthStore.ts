import { create } from "zustand";
import { supabase, isMockMode } from "../lib/supabase";
import type {
  Profile,
  UpdateProfileInput,
  SignUpInput,
  SignInInput,
} from "../types";

interface AuthState {
  user: any | null;
  session: any | null;
  profile: Profile | null;
  loading: boolean;

  initialize: () => Promise<void>;
  signInWithPhone: (phone: string) => Promise<{ error: any }>;
  verifyOtp: (
    phone: string,
    token: string,
  ) => Promise<{ error: any; data?: any }>;
  signUpWithEmail: (input: SignUpInput) => Promise<{ error: any; data?: any }>;
  signInWithEmail: (input: SignInInput) => Promise<{ error: any; data?: any }>;
  signOut: () => Promise<void>;
  fetchProfile: () => Promise<void>;
  updateProfile: (input: UpdateProfileInput) => Promise<{ error: any }>;
}

// Mock profile for development
const MOCK_PROFILE: Profile = {
  id: "mock-user-123",
  phone: "+254712345678",
  full_name: "John Mwangi",
  avatar_url: null,
  role: "customer",
  is_admin: false,
  created_at: new Date().toISOString(),
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  session: null,
  profile: null,
  loading: true,

  initialize: async () => {
    if (isMockMode) {
      console.warn("⚠️ Auth store initialized in MOCK mode");
      set({ loading: false });
      return;
    }

    try {
      console.log("🔐 Initializing auth store...");
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("❌ Error getting session:", sessionError);
        set({ loading: false });
        return;
      }

      if (session?.user) {
        console.log(
          "✅ Session found, user:",
          session.user.email || session.user.id,
        );
        set({ session, user: session.user, loading: false });
        // Fetch profile if logged in
        await get().fetchProfile();
      } else {
        console.log("ℹ️ No active session");
        set({ session: null, user: null, profile: null, loading: false });
      }

      // Listen for auth state changes
      supabase.auth.onAuthStateChange((event: string, session: any) => {
        console.log(
          "🔄 Auth state changed:",
          event,
          session?.user?.email || session?.user?.id || "no user",
        );
        set({ session, user: session?.user ?? null, loading: false });
        if (session?.user) {
          get().fetchProfile();
        } else {
          set({ profile: null });
        }
      });
    } catch (error) {
      console.error("❌ Auth initialization error:", error);
      set({ loading: false });
    }
  },

  signInWithPhone: async (phone: string) => {
    set({ loading: true });

    if (isMockMode) {
      console.log(`[Mock] OTP sent to ${phone}`);
      setTimeout(() => set({ loading: false }), 1000);
      return { error: null };
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({ phone });
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
      console.log(`[Mock] Verifying OTP ${token} for ${phone}`);
      const mockUser = { id: "mock-user-123", phone };
      const mockSession = { user: mockUser, access_token: "mock-token" };

      setTimeout(() => {
        set({
          user: mockUser,
          session: mockSession,
          profile: { ...MOCK_PROFILE, phone },
          loading: false,
        });
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
        // Fetch or create profile
        get().fetchProfile();
      }

      return { data, error };
    } catch (err) {
      return { error: err };
    } finally {
      set({ loading: false });
    }
  },

  signUpWithEmail: async (input: SignUpInput) => {
    set({ loading: true });

    if (isMockMode) {
      console.log(`[Mock] Signing up ${input.email} as ${input.role}`);
      const mockUser = {
        id: "mock-user-123",
        email: input.email,
        phone: input.phone,
      };
      const mockSession = { user: mockUser, access_token: "mock-token" };

      setTimeout(() => {
        set({
          user: mockUser,
          session: mockSession,
          profile: {
            ...MOCK_PROFILE,
            phone: input.phone || null,
            full_name: input.full_name || null,
            role: input.role,
          },
          loading: false,
        });
      }, 1000);
      return { error: null, data: { session: mockSession, user: mockUser } };
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: input.email,
        password: input.password,
        phone: input.phone,
        options: {
          data: {
            role: input.role,
            full_name: input.full_name,
          },
          emailRedirectTo: `${window.location.origin}/auth`,
        },
      });

      if (error) {
        return { data: null, error };
      }

      // If session exists, user is logged in (email confirmation disabled)
      if (data.session) {
        set({ session: data.session, user: data.user });
        // Fetch profile (should be created by trigger)
        await get().fetchProfile();
        return { data, error: null };
      }

      // If no session, email confirmation is required
      // Return success but indicate confirmation needed
      return {
        data: {
          user: data.user,
          session: null,
          needsConfirmation: true,
        },
        error: null,
      };
    } catch (err: any) {
      return { data: null, error: err };
    } finally {
      set({ loading: false });
    }
  },

  signInWithEmail: async (input: SignInInput) => {
    set({ loading: true });

    if (isMockMode) {
      console.log(`[Mock] Signing in ${input.email}`);
      const mockUser = { id: "mock-user-123", email: input.email };
      const mockSession = { user: mockUser, access_token: "mock-token" };

      setTimeout(() => {
        set({
          user: mockUser,
          session: mockSession,
          profile: MOCK_PROFILE,
          loading: false,
        });
      }, 1000);
      return { error: null, data: { session: mockSession, user: mockUser } };
    }

    try {
      console.log("🔐 Attempting to sign in with email:", input.email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: input.email,
        password: input.password,
      });

      if (error) {
        console.error("❌ Sign in error:", error);
        return { data: null, error };
      }

      if (data.session) {
        console.log("✅ Sign in successful, user ID:", data.user?.id);
        set({ session: data.session, user: data.user });
        // Fetch profile
        await get().fetchProfile();
        return { data, error: null };
      }

      // This shouldn't happen, but handle it
      console.error("❌ No session returned after sign in");
      return {
        data: null,
        error: new Error("No session returned. Please try again."),
      };
    } catch (err: any) {
      console.error("❌ Sign in exception:", err);
      return { data: null, error: err };
    } finally {
      set({ loading: false });
    }
  },

  signOut: async () => {
    if (isMockMode) {
      set({ user: null, session: null, profile: null });
      return;
    }
    await supabase.auth.signOut();
    set({ user: null, session: null, profile: null });
  },

  fetchProfile: async () => {
    // Check if we have a real session - if so, always use Supabase, not mock
    const currentSession = get().session;
    const hasRealSession =
      currentSession &&
      currentSession.user &&
      currentSession.user.id !== "mock-user-123";

    if (isMockMode && !hasRealSession) {
      console.warn(
        "⚠️ fetchProfile called in mock mode with no real session - skipping",
      );
      return;
    }

    // If we're in mock mode but have a real session, something is wrong with env vars
    if (isMockMode && hasRealSession) {
      console.error(
        "❌ ERROR: Real session detected but Supabase is in mock mode!",
      );
      console.error(
        "This means environment variables are not loaded. Check your .env file.",
      );
      return;
    }

    try {
      console.log("🔍 Fetching profile from Supabase...");
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        console.error("❌ Error getting user:", userError);
        return;
      }

      if (!user) {
        console.warn("⚠️ No user found, cannot fetch profile");
        set({ profile: null });
        return;
      }

      // Safety check: never use mock profile if we have a real user
      if (user.id === "mock-user-123") {
        console.error(
          "❌ ERROR: Mock user ID detected but should be using real Supabase!",
        );
        return;
      }

      console.log("👤 User found:", user.id, user.email);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        // If profile doesn't exist, create one with default role
        if (error.code === "PGRST116" || error.code === "42P01") {
          console.log("📝 Profile doesn't exist, creating new profile...");
          // Get role from user metadata if available
          const userRole =
            (user.user_metadata?.role as "customer" | "provider") || "customer";

          const { data: newProfile, error: insertError } = await supabase
            .from("profiles")
            .insert({
              id: user.id,
              phone: user.phone || null,
              role: userRole,
              is_admin: false, // Default to false, can be set manually
            })
            .select()
            .single();

          if (insertError) {
            console.error("❌ Error creating profile:", insertError);
            return;
          }

          if (newProfile) {
            console.log("✅ Profile created:", newProfile);
            set({ profile: newProfile });
          }
        } else {
          console.error("❌ Error fetching profile:", error);
        }
        return;
      }

      if (data) {
        // Final safety check: never set mock profile data
        if (data.id === "mock-user-123" || data.full_name === "John Mwangi") {
          console.error(
            "❌ ERROR: Attempted to set mock profile data! This should never happen.",
          );
          return;
        }
        console.log(
          "✅ Profile fetched:",
          data.full_name || data.email || data.id,
        );
        set({ profile: data });
      } else {
        console.warn("⚠️ No profile data returned");
      }
    } catch (err) {
      console.error("❌ Error fetching profile:", err);
    }
  },

  updateProfile: async (input: UpdateProfileInput) => {
    if (isMockMode) {
      const currentProfile = get().profile;
      set({ profile: { ...currentProfile!, ...input } });
      return { error: null };
    }

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        return { error: new Error("Not authenticated") };
      }

      const { error } = await supabase
        .from("profiles")
        .update(input)
        .eq("id", user.id);

      if (error) throw error;

      // Refresh profile
      get().fetchProfile();
      return { error: null };
    } catch (err) {
      return { error: err };
    }
  },
}));
