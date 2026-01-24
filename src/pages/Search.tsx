import { useState } from 'react';
import { Search as SearchIcon, Filter, Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const MOCK_RESULTS = [
    {
        id: '1',
        name: 'Brian Otieno',
        role: 'Electrician',
        rating: 4.8,
        reviews: 127,
        price: 'KSh 800 - 2,500',
        location: 'Kilimani, Nairobi (2.3 km)',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
        tags: ['Wiring', 'Installation', 'Repair'],
        verified: true,
    },
    {
        id: '3',
        name: 'John Kamau',
        role: 'Electrician',
        rating: 4.5,
        reviews: 42,
        price: 'KSh 500 - 1,500',
        location: 'Kwangware, Nairobi (4.1 km)',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
        tags: ['Lighting', 'Sockets'],
        verified: false,
    },
    {
        id: '4',
        name: 'Alice Wambui',
        role: 'Electrician',
        rating: 4.9,
        reviews: 215,
        price: 'KSh 1,000 - 5,000',
        location: 'Lavington, Nairobi (1.5 km)',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
        tags: ['Full Wiring', 'Inspection', 'Commercial'],
        verified: true,
    },
];

export default function SearchPage() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Sticky Header */}
            <div className="sticky top-14 z-40 bg-white border-b border-gray-200 px-4 py-3">
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <Input
                            placeholder="Search providers..."
                            className="pl-9 h-10 bg-gray-50"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <Button variant="outline" size="icon" className="shrink-0">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>

                {/* Filter Chips */}
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
                    <Badge variant="default" className="whitespace-nowrap bg-gray-900 text-white border-gray-900 shadow-md">All</Badge>
                    <Badge variant="outline" className="whitespace-nowrap bg-white hover:bg-gray-50 text-gray-700 shadow-sm">Price: Low to High</Badge>
                    <Badge variant="outline" className="whitespace-nowrap bg-white hover:bg-gray-50 text-gray-700 shadow-sm">Rating 4.5+</Badge>
                    <Badge variant="outline" className="whitespace-nowrap bg-white hover:bg-gray-50 text-gray-700 shadow-sm">Verified Only</Badge>
                </div>
            </div>

            {/* Results */}
            <div className="p-4 space-y-4">
                <p className="text-sm text-gray-500 font-medium">3 Electricians near you</p>

                {MOCK_RESULTS.map((provider) => (
                    <Card
                        key={provider.id}
                        className="overflow-hidden active:ring-2 ring-brand-green/20 transition-all cursor-pointer"
                        onClick={() => navigate(`/provider/${provider.id}`)}
                    >
                        <div className="flex p-4 gap-4">
                            <img
                                src={provider.image}
                                alt={provider.name}
                                className="h-20 w-20 rounded-lg object-cover bg-gray-100 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 line-clamp-1">{provider.name}</h3>
                                        <p className="text-sm text-gray-500">{provider.role}</p>
                                    </div>
                                    <div className="flex items-center bg-white border border-gray-200 shadow-sm px-1.5 py-0.5 rounded text-xs font-bold text-gray-900">
                                        <Star className="h-3 w-3 mr-0.5 text-yellow-400 fill-current" />
                                        {provider.rating}
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-xs text-gray-500">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {provider.location}
                                </div>

                                <div className="flex flex-wrap gap-1 mt-3">
                                    {provider.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="px-1.5 py-0.5 bg-gray-100 rounded text-[10px] text-gray-600">
                                            {tag}
                                        </span>
                                    ))}
                                    {provider.verified && (
                                        <span className="px-1.5 py-0.5 bg-green-50 text-green-700 rounded text-[10px] font-medium border border-green-100">
                                            Verified
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
