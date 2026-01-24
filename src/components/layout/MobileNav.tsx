import { Home, Search, Calendar, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/search', label: 'Search', icon: Search },
    { href: '/bookings', label: 'Bookings', icon: Calendar },
    { href: '/profile', label: 'Profile', icon: User },
];

export function MobileNav() {
    return (
        <nav className="safe-area-bottom fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white md:hidden">
            <div className="flex h-16 items-center justify-around px-2">
                {navItems.map(({ href, label, icon: Icon }) => (
                    <NavLink
                        key={href}
                        to={href}
                        className={({ isActive }) =>
                            cn(
                                'flex flex-col items-center justify-center space-y-1 rounded-md px-3 py-1 text-xs transition-colors',
                                isActive
                                    ? 'text-brand-green font-medium'
                                    : 'text-gray-500 hover:text-gray-900'
                            )
                        }
                    >
                        <Icon className="h-6 w-6" />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
