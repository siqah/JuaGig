export type Role = "customer" | "provider" | "admin";

export interface Profile {
  id: string;
  phone: string | null;
  full_name: string | null;
  avatar_url: string | null;
  role: Role;
  is_admin: boolean;
  created_at: string;
  updated_at?: string;
}

export interface UpdateProfileInput {
  full_name?: string;
  phone?: string;
  avatar_url?: string;
  email?: string;
}

export interface SignUpInput {
  email: string;
  password?: string;
  phone?: string;
  full_name?: string;
  role: Role;
}

export interface SignInInput {
  email: string;
  password?: string;
  phone?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string | any;
  color: string;
  openings?: number;
}

export interface Service {
  id: string;
  provider_id: string;
  category_id?: string;
  name: string;
  price: number | string; // Handle both number and string ("KSh 800")
  duration: string;
  created_at?: string;
}

export interface Provider {
  id: string;
  user_id: string | null;
  name: string;
  role: string;
  about: string | null;
  location: string;
  image_url?: string;
  image?: string; // Handle both
  rating: number;
  reviews_count?: number; // Store property
  reviews?: number; // Component property
  jobs_count?: number; // Store property
  jobs?: number; // Component property
  verified: boolean;
  created_at?: string;
  services?: Service[];
  gallery?: string[];
  logo?: string; // For Home.tsx provider
  bgColor?: string; // For Home.tsx provider
  type?: string; // For Home.tsx provider
}

export interface Booking {
  id: string;
  user_id: string;
  provider_id: string;
  service_id: string;
  scheduled_date: string;
  location: string;
  notes: string | null;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  total_price: number;
  created_at: string;
  provider?: Provider;
  service?: Service;
}

export interface CreateBookingInput {
  provider_id: string;
  service_id: string;
  scheduled_date: string;
  location: string;
  notes?: string;
  total_price: number;
}
