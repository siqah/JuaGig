import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green text-white font-bold text-lg">
                        J
                    </div>
                    <span className="text-lg font-bold text-gray-900">JuaGig</span>
                </Link>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-brand-green" />
                    <span>Nairobi</span>
                </div>
            </div>
        </header>
    );
}
