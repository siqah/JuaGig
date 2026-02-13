import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Share2, Star, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { MOCK_PROVIDER } from '../data/providers';

export default function ProviderProfilePage() {
    const { providerId } = useParams();
    const navigate = useNavigate();

    // Mock data - normally fetched by ID
    const provider = { ...MOCK_PROVIDER, id: providerId || MOCK_PROVIDER.id };

    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Header Image */}
            <div className="relative h-56 sm:h-72 bg-gray-200">
                <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 p-4 pt-14 flex justify-between items-start">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20 rounded-full backdrop-blur-sm"
                        onClick={() => navigate(-1)}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20 rounded-full backdrop-blur-sm"
                    >
                        <Share2 className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* Profile Info */}
            <div className="px-5 -mt-16 relative z-10">
                <Card className="shadow-xl border-none ring-1 ring-black/5">
                    <div className="p-5">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{provider.name}</h1>
                                <p className="text-brand-green font-medium mt-0.5">{provider.role}</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="flex items-center text-sm font-bold text-brand-gold-dark bg-brand-gold-light/50 px-2.5 py-1 rounded-lg border border-brand-gold-light">
                                    <Star className="h-3.5 w-3.5 text-brand-gold fill-current mr-1.5" />
                                    {provider.rating}
                                </div>
                                <span className="text-xs text-gray-500 mt-1.5 font-medium">{provider.reviews} reviews</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-5 text-sm text-gray-600">
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1.5 text-gray-400" />
                                {provider.location}
                            </div>
                            {provider.verified && (
                                <div className="flex items-center text-brand-dark font-medium bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                    <ShieldCheck className="h-3.5 w-3.5 mr-1.5" />
                                    Verified
                                </div>
                            )}
                        </div>
                    </div>
                </Card>

                {/* About */}
                <div className="mt-6">
                    <h2 className="font-semibold text-lg mb-2">About</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{provider.about}</p>
                </div>

                {/* Services */}
                <div className="mt-6">
                    <h2 className="font-semibold text-lg mb-3">Services</h2>
                    <div className="space-y-3">
                        {provider.services.map((service) => (
                            <div
                                key={service.id}
                                className="flex items-center justify-between p-3 border border-gray-100 rounded-lg bg-gray-50 active:bg-gray-100 transition-colors"
                                onClick={() => navigate(`/book/${provider.id}?service=${service.id}`)}
                            >
                                <div>
                                    <h3 className="font-medium text-gray-900">{service.name}</h3>
                                    <div className="flex items-center text-xs text-gray-500 mt-1">
                                        <Clock className="h-3 w-3 mr-1" />
                                        {service.duration}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-semibold text-brand-green">{service.price}</span>
                                    <Button size="sm" variant="secondary" className="h-8">Book</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery */}
                <div className="mt-6">
                    <h2 className="font-semibold text-lg mb-3">Recent Work</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {provider.gallery.map((img, i) => (
                            <img key={i} src={img} alt="Work" className="rounded-lg h-32 w-full object-cover bg-gray-100" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 safe-area-bottom z-50">
                <Button
                    className="w-full text-lg h-12 shadow-lg shadow-brand-green/20"
                    onClick={() => navigate(`/book/${provider.id}`)}
                >
                    Book Appointment
                </Button>
            </div>
        </div>
    );
}
