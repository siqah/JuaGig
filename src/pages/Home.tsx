import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Search, MapPin, Star, Wrench, Zap, Sparkles,
    Truck, BookOpen, Heart, Clock, ChevronRight,
    Briefcase, Building2, ShieldCheck
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

// --- Mock Data ---
const CATEGORIES = [
    { id: '1', name: 'Plumbing', icon: Wrench, openings: 12, color: 'text-blue-600' },
    { id: '2', name: 'Electrical', icon: Zap, openings: 8, color: 'text-amber-600' },
    { id: '3', name: 'Cleaning', icon: Sparkles, openings: 15, color: 'text-purple-600' },
    { id: '4', name: 'Beauty & Spa', icon: Heart, openings: 6, color: 'text-rose-600' },
    { id: '5', name: 'Moving', icon: Truck, openings: 4, color: 'text-emerald-600' },
    { id: '6', name: 'Tutoring', icon: BookOpen, openings: 9, color: 'text-indigo-600' },
    { id: '7', name: 'Handyman', icon: Briefcase, openings: 11, color: 'text-orange-600' },
];

const FEATURED_SERVICES = [
    {
        id: '1',
        type: 'Full-time',
        postedAgo: '2 days ago',
        title: 'Home Deep Cleaning',
        priceRange: 'Ksh 2,500 - 4,000',
        location: 'Westlands',
        category: 'Cleaning',
        providerImage: 'https://images.unsplash.com/photo-1581578731117-104f2a8060a7?w=100&q=80',
        providerColor: 'bg-purple-100',
    },
    {
        id: '2',
        type: 'Contract',
        postedAgo: '1 day ago',
        title: 'Electrical Repairs',
        priceRange: 'Ksh 1,500 - 3,000',
        location: 'Kilimani',
        category: 'Electrical',
        providerImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&q=80',
        providerColor: 'bg-amber-100',
    },
    {
        id: '3',
        type: 'One-time',
        postedAgo: '3 hours ago',
        title: 'Plumbing Services',
        priceRange: 'Ksh 1,000 - 2,500',
        location: 'Karen',
        category: 'Plumbing',
        providerImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=100&q=80',
        providerColor: 'bg-blue-100',
    },
];

const TOP_PROVIDERS = [
    {
        id: '1',
        name: 'CleanPro Services',
        type: 'Full-time',
        role: 'Home Cleaning',
        location: 'Westlands, Nairobi',
        rating: 4.9,
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop',
        bgColor: 'bg-emerald-50',
    },
    {
        id: '2',
        name: 'TechFix Kenya',
        type: 'Contract',
        role: 'IT Support',
        location: 'CBD, Nairobi',
        rating: 4.8,
        logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=100&h=100&fit=crop',
        bgColor: 'bg-rose-50',
    },
    {
        id: '3',
        name: 'SparkElectric',
        type: 'Full-time',
        role: 'Electrical Work',
        location: 'Kilimani, Nairobi',
        rating: 4.7,
        logo: 'https://images.unsplash.com/photo-1572021335469-31706a17ber7?w=100&h=100&fit=crop',
        bgColor: 'bg-amber-50',
    },
    {
        id: '4',
        name: 'MoveIt Movers',
        type: 'Contract',
        role: 'Moving Services',
        location: 'Industrial Area',
        rating: 4.6,
        logo: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=100&h=100&fit=crop',
        bgColor: 'bg-blue-50',
    },
];

export default function HomePage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'latest' | 'premium'>('latest');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleSearch = () => {
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-24 font-sans text-slate-900">

            {/* --- Hero Section --- */}
            <section className="relative bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pt-8 pb-16 px-4 sm:px-6 lg:px-8">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-56 h-56 bg-brand-gold/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                        Find the perfect{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-brand-green">Fundi for the job</span>
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-brand-green/20 -skew-x-3 rounded"></span>
                        </span>
                        {' '}in Nairobi
                    </h1>
                    <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mb-8">
                        Connect with skilled professionals for all your home and business needs.
                        Plumbers, electricians, cleaners, and more at your fingertips.
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white p-2 sm:p-3 rounded-full shadow-lg shadow-slate-200/60 border border-slate-100 flex items-center gap-2 max-w-2xl mx-auto">
                        <div className="flex items-center flex-1 pl-3 sm:pl-4">
                            <Search className="h-5 w-5 text-slate-400 shrink-0" />
                            <Input
                                type="text"
                                placeholder="Service or keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                className="border-0 focus-visible:ring-0 text-sm sm:text-base placeholder:text-slate-400 h-10 bg-transparent"
                            />
                        </div>
                        <div className="hidden sm:flex items-center gap-2 px-4 border-l border-slate-200">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            <span className="text-sm text-slate-600">Nairobi</span>
                        </div>
                        <Button
                            onClick={handleSearch}
                            className="rounded-full h-10 px-6 bg-brand-green hover:bg-brand-dark text-white shadow-md"
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </section>

            {/* --- Recommended Services Section --- */}
            <section className="px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Recommended Services</h2>
                            <p className="text-sm text-slate-500 mt-1">Explore suggested service providers</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setActiveTab('latest')}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === 'latest'
                                        ? 'bg-brand-green text-white shadow-sm'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                Latest
                            </button>
                            <button
                                onClick={() => setActiveTab('premium')}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === 'premium'
                                        ? 'bg-brand-green text-white shadow-sm'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                Premium
                            </button>
                        </div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Categories Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                                <h3 className="font-semibold text-slate-900 mb-4">Service Categories</h3>
                                <div className="space-y-1">
                                    {CATEGORIES.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setSelectedCategory(selectedCategory === category.id ? null : category.id);
                                                navigate(`/search?category=${category.name}`);
                                            }}
                                            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${selectedCategory === category.id
                                                    ? 'bg-brand-light border border-brand-green/20'
                                                    : 'hover:bg-slate-50'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <category.icon className={`h-5 w-5 ${category.color}`} />
                                                <span className="text-sm font-medium text-slate-700">{category.name}</span>
                                            </div>
                                            <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                                                {category.openings} Open
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Service Cards */}
                        <div className="lg:col-span-8 space-y-4">
                            {FEATURED_SERVICES.map((service) => (
                                <Card
                                    key={service.id}
                                    className="border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all cursor-pointer rounded-2xl overflow-hidden"
                                    onClick={() => navigate(`/search?q=${service.title}`)}
                                >
                                    <CardContent className="p-5">
                                        <div className="flex gap-4">
                                            {/* Provider Image */}
                                            <div className={`shrink-0 w-14 h-14 rounded-xl ${service.providerColor} flex items-center justify-center overflow-hidden`}>
                                                <img
                                                    src={service.providerImage}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs font-medium text-slate-500">
                                                        Type: <span className="text-slate-700">{service.type}</span>
                                                    </span>
                                                    <span className="text-slate-300">•</span>
                                                    <span className="text-xs text-slate-400 flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        {service.postedAgo}
                                                    </span>
                                                </div>

                                                <h3 className="font-semibold text-slate-900 mb-1">{service.title}</h3>
                                                <p className="text-sm text-slate-500 mb-3">{service.priceRange}</p>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                                                            <MapPin className="h-3 w-3" />
                                                            {service.location}
                                                        </span>
                                                        <span className="inline-flex items-center gap-1 text-xs text-brand-green bg-brand-light px-2 py-1 rounded-full">
                                                            {service.category}
                                                        </span>
                                                    </div>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="rounded-full text-xs border-brand-green text-brand-green hover:bg-brand-light"
                                                    >
                                                        Book Now
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* Heart Icon */}
                                            <button className="shrink-0 p-2 hover:bg-slate-50 rounded-full self-start transition-colors">
                                                <Heart className="h-5 w-5 text-slate-300 hover:text-rose-400" />
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Top Providers Section --- */}
            <section className="px-4 sm:px-6 lg:px-8 py-10 bg-slate-50/50">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Top Providers</h2>
                            <p className="text-sm text-slate-500 mt-1">Find trusted professionals for quality services</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button
                                onClick={() => navigate('/search')}
                                className="rounded-full bg-brand-green hover:bg-brand-dark text-white"
                            >
                                Browse All
                            </Button>
                            <button
                                onClick={() => navigate('/search')}
                                className="text-sm font-medium text-slate-600 hover:text-brand-green transition-colors flex items-center gap-1"
                            >
                                See All
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Provider Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {TOP_PROVIDERS.map((provider) => (
                            <Card
                                key={provider.id}
                                className="border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all cursor-pointer rounded-2xl overflow-hidden group"
                                onClick={() => navigate(`/provider/${provider.id}`)}
                            >
                                <CardContent className="p-5">
                                    {/* Type Badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${provider.type === 'Full-time'
                                                ? 'bg-emerald-100 text-emerald-700'
                                                : 'bg-amber-100 text-amber-700'
                                            }`}>
                                            {provider.type}
                                        </span>
                                        <button className="p-1.5 hover:bg-slate-100 rounded-full transition-colors">
                                            <Heart className="h-4 w-4 text-slate-300 group-hover:text-rose-400" />
                                        </button>
                                    </div>

                                    {/* Logo */}
                                    <div className={`w-16 h-16 ${provider.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto overflow-hidden`}>
                                        <Building2 className="h-8 w-8 text-slate-400" />
                                    </div>

                                    {/* Info */}
                                    <h3 className="font-semibold text-slate-900 text-center mb-1">{provider.name}</h3>
                                    <p className="text-sm text-slate-500 text-center mb-2">{provider.role}</p>

                                    <div className="flex items-center justify-center gap-1 text-xs text-slate-400 mb-3">
                                        <MapPin className="h-3 w-3" />
                                        {provider.location}
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center justify-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < Math.floor(provider.rating)
                                                        ? 'text-amber-400 fill-amber-400'
                                                        : 'text-slate-200'
                                                    }`}
                                            />
                                        ))}
                                        <span className="text-xs text-slate-500 ml-1">{provider.rating}</span>
                                    </div>

                                    {/* Verified Badge */}
                                    <div className="flex items-center justify-center gap-1 mt-3 text-xs text-brand-green">
                                        <ShieldCheck className="h-4 w-4" />
                                        <span>Verified</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-brand-green to-emerald-700 rounded-3xl p-8 sm:p-12 shadow-xl shadow-brand-green/20">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Ready to find your perfect Fundi?
                        </h2>
                        <p className="text-emerald-100 mb-6 max-w-xl mx-auto">
                            Join thousands of satisfied customers who have found reliable professionals through JuaGig.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                onClick={() => navigate('/search')}
                                className="bg-white text-brand-green hover:bg-slate-100 rounded-full px-8 py-3 font-semibold shadow-lg"
                            >
                                Find Services
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => navigate('/auth')}
                                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-3"
                            >
                                Become a Provider
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}