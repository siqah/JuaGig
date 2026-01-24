import { useNavigate } from 'react-router-dom';
import {
    Search, MapPin, Star, Wrench, Zap, Sparkles,
    Truck, BookOpen, Bell, ChevronRight, ShieldCheck, Heart
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';


// --- Mock Data ---
const CATEGORIES = [
    { id: '1', name: 'Plumbing', icon: Wrench, color: 'bg-blue-50 text-blue-600' },
    { id: '2', name: 'Electrical', icon: Zap, color: 'bg-amber-50 text-amber-600' },
    { id: '3', name: 'Cleaning', icon: Sparkles, color: 'bg-purple-50 text-purple-600' },
    { id: '4', name: 'Beauty', icon: Heart, color: 'bg-rose-50 text-rose-600' },
    { id: '5', name: 'Moving', icon: Truck, color: 'bg-emerald-50 text-emerald-600' },
    { id: '6', name: 'Tutoring', icon: BookOpen, color: 'bg-indigo-50 text-indigo-600' },
];

const POPULAR_SERVICES = [
    { id: '101', title: 'Home Cleaning', price: 'Ksh 1,500', image: 'https://images.unsplash.com/photo-1581578731117-104f2a8060a7?w=500&q=80' },
    { id: '102', title: 'Sofa Repair', price: 'Ksh 2,000', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&q=80' },
    { id: '103', title: 'Laptop Fix', price: 'Ksh 1,000', image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&q=80' },
];

const TOP_PROVIDERS = [
    {
        id: '1',
        name: 'Brian Otieno',
        role: 'Master Electrician',
        rating: 4.9,
        reviews: 127,
        rate: 'Ksh 500/hr',
        location: 'Kilimani, Nairobi',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
        verified: true,
    },
    {
        id: '2',
        name: 'Grace Wanjiku',
        role: 'Professional Stylist',
        rating: 4.8,
        reviews: 89,
        rate: 'Ksh 800/cut',
        location: 'Westlands, Nairobi',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        verified: true,
    },
];

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50/50 pb-24 font-sans text-slate-900">

            {/* --- Header & Hero Section --- */}
            <div className="relative bg-slate-900 text-white rounded-b-[2.5rem] overflow-hidden shadow-xl">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
                    <div className="absolute top-20 -left-10 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
                </div>

                <div className="relative px-6 pt-12 pb-20">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex flex-col">
                            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Current Location</span>
                            <div className="flex items-center text-emerald-400 font-semibold text-sm cursor-pointer">
                                <MapPin className="h-4 w-4 mr-1" />
                                Kilimani, Nairobi
                                <ChevronRight className="h-4 w-4 ml-1 opacity-70" />
                            </div>
                        </div>
                        <div className="p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/5 cursor-pointer hover:bg-white/20 transition">
                            <Bell className="h-5 w-5 text-white" />
                            <span className="absolute top-2 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-slate-900"></span>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl font-bold leading-tight mb-2">
                        Find the perfect <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                            Fundi for the job.
                        </span>
                    </h1>
                    <p className="text-slate-400 text-sm mb-4">Plumbers, Electricians, Cleaners & more.</p>
                </div>
            </div>

            {/* --- Floating Search Bar --- */}
            <div className="px-6 -mt-7 relative z-10">
                <div
                    className="bg-white p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center border border-gray-100"
                    onClick={() => navigate('/search')}
                >
                    <div className="pl-3">
                        <Search className="h-5 w-5 text-emerald-600" />
                    </div>
                    <Input
                        placeholder="What service do you need?"
                        className="border-0 focus-visible:ring-0 text-base placeholder:text-gray-400 h-10"
                        readOnly
                    />
                    <div className="bg-emerald-600 p-2.5 rounded-xl text-white shadow-md active:scale-95 transition-transform">
                        <ChevronRight className="h-5 w-5" />
                    </div>
                </div>
            </div>

            {/* --- Categories Grid --- */}
            <section className="mt-8 px-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-900">Categories</h2>
                    <span className="text-xs font-semibold text-emerald-600 cursor-pointer">View All</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {CATEGORIES.map((cat) => (
                        <div
                            key={cat.id}
                            className="group flex flex-col items-center justify-center p-3 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-emerald-100 active:scale-95 cursor-pointer"
                            onClick={() => navigate(`/search?category=${cat.name}`)}
                        >
                            <div className={`p-3 rounded-full mb-2 transition-colors group-hover:bg-emerald-100 ${cat.color} bg-opacity-20`}>
                                <cat.icon className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-medium text-slate-700">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Trending / Horizontal Scroll (New Feature) --- */}
            <section className="mt-8">
                <div className="px-6 mb-4">
                    <h2 className="text-lg font-bold text-slate-900">Trending in Nairobi</h2>
                </div>
                <div className="flex overflow-x-auto px-6 gap-4 pb-4 no-scrollbar snap-x">
                    {POPULAR_SERVICES.map((service) => (
                        <div key={service.id} className="min-w-[160px] snap-center">
                            <div className="relative h-24 rounded-t-2xl overflow-hidden">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <span className="absolute bottom-2 left-3 text-white text-xs font-bold bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-lg">
                                    {service.price}
                                </span>
                            </div>
                            <div className="bg-white p-3 rounded-b-2xl border-x border-b border-gray-100 shadow-sm">
                                <h3 className="text-sm font-semibold text-slate-800">{service.title}</h3>
                                <p className="text-xs text-slate-500 mt-1">Book Now</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Top Professionals --- */}
            <section className="mt-4 px-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Top Rated "Kazi" Pros</h2>
                <div className="space-y-4">
                    {TOP_PROVIDERS.map((provider) => (
                        <Card
                            key={provider.id}
                            className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer rounded-2xl overflow-hidden"
                            onClick={() => navigate(`/provider/${provider.id}`)}
                        >
                            <CardContent className="p-4 flex gap-4">
                                {/* Image Section */}
                                <div className="relative">
                                    <img
                                        src={provider.image}
                                        alt={provider.name}
                                        className="h-20 w-20 rounded-xl object-cover"
                                    />
                                    {provider.verified && (
                                        <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
                                            <ShieldCheck className="h-5 w-5 text-blue-500 fill-blue-50" />
                                        </div>
                                    )}
                                </div>

                                {/* Details Section */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-base">{provider.name}</h3>
                                            <p className="text-sm text-slate-500 font-medium">{provider.role}</p>
                                        </div>
                                        <div className="flex items-center bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
                                            <Star className="h-3.5 w-3.5 text-emerald-600 fill-emerald-600 mr-1" />
                                            <span className="text-xs font-bold text-emerald-800">{provider.rating}</span>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex items-center justify-between">
                                        <div className="text-xs text-slate-400">
                                            <span className="font-medium text-slate-700">{provider.reviews}</span> reviews
                                        </div>
                                        <span className="text-sm font-bold text-slate-900">{provider.rate}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}