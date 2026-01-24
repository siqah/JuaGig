import { User, Settings, CreditCard, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export default function ProfilePage() {
    const MENU_ITEMS = [
        { icon: User, label: 'Edit Profile' },
        { icon: CreditCard, label: 'Payment Methods' },
        { icon: Bell, label: 'Notifications' },
        { icon: Shield, label: 'Privacy & Security' },
        { icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="pb-24">
            {/* Header */}
            <div className="bg-white px-4 py-8 border-b border-gray-100 flex flex-col items-center text-center">
                <div className="h-24 w-24 bg-brand-green/10 rounded-full flex items-center justify-center mb-4 text-3xl font-bold text-brand-green">
                    JM
                </div>
                <h1 className="text-xl font-bold text-gray-900">John Mwangi</h1>
                <p className="text-gray-500 text-sm">+254 712 345 678</p>
                <Badge variant="secondary" className="mt-2">Core Member</Badge>
            </div>

            {/* Provider Mode Banner */}
            <div className="p-4">
                <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-none">
                    <div className="p-4 flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">Become a Provider</h3>
                            <p className="text-xs text-gray-300 mt-1">Earn money with your skills</p>
                        </div>
                        <Button size="sm" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                            Apply Now
                        </Button>
                    </div>
                </Card>
            </div>

            {/* Menu */}
            <div className="px-4 space-y-2">
                {MENU_ITEMS.map((item) => (
                    <button
                        key={item.label}
                        className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                                <item.icon className="h-5 w-5" />
                            </div>
                            <span className="font-medium text-gray-700">{item.label}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-300" />
                    </button>
                ))}

                <button className="w-full flex items-center gap-3 p-4 text-red-600 font-medium hover:bg-red-50 rounded-xl transition-colors mt-6">
                    <div className="p-2 bg-red-50 rounded-lg">
                        <LogOut className="h-5 w-5" />
                    </div>
                    Log Out
                </button>
            </div>

            <div className="p-6 text-center text-xs text-gray-400">
                v1.0.0 (Build 2026.1)
            </div>
        </div>
    );
}
