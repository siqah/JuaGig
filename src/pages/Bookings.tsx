import { Calendar, Clock, MoreVertical } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const MOCK_BOOKINGS = [
    {
        id: 'b1',
        provider: 'Brian Otieno',
        service: 'Socket Installation',
        date: 'Today, 2:00 PM',
        status: 'Confirmed',
        price: 'KSh 880',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop',
    },
    {
        id: 'b2',
        provider: 'Grace Wanjiku',
        service: 'Hair Braiding',
        date: 'Mon, 27 Jan',
        status: 'Pending',
        price: 'KSh 1,500',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    },
    {
        id: 'b3',
        provider: 'Quick Moves',
        service: 'Local Move',
        date: '12 Jan 2026',
        status: 'Completed',
        price: 'KSh 4,500',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=200&h=200&fit=crop',
    },
];

export default function BookingsPage() {
    return (
        <div className="pb-24">
            <div className="px-4 py-6 bg-white border-b border-gray-100">
                <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
            </div>

            <div className="p-4 space-y-4">
                {/* Active Bookings */}
                <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wider">Upcoming</h2>
                {MOCK_BOOKINGS.filter(b => b.status !== 'Completed').map((booking) => (
                    <Card key={booking.id} className="overflow-hidden">
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex gap-3">
                                    <img
                                        src={booking.image}
                                        alt={booking.provider}
                                        className="h-12 w-12 rounded-full object-cover bg-gray-100"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{booking.provider}</h3>
                                        <p className="text-sm text-gray-500">{booking.service}</p>
                                    </div>
                                </div>
                                <Badge
                                    variant={booking.status === 'Confirmed' ? 'success' : 'warning'}
                                >
                                    {booking.status}
                                </Badge>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-1.5 text-gray-400" />
                                    {booking.date}
                                </div>
                                <div className="font-medium text-gray-900 ml-auto">
                                    {booking.price}
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1">Reschedule</Button>
                                <Button size="sm" className="flex-1">Message</Button>
                            </div>
                        </div>
                    </Card>
                ))}

                {/* Past Bookings */}
                <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wider mt-6">Past</h2>
                {MOCK_BOOKINGS.filter(b => b.status === 'Completed').map((booking) => (
                    <Card key={booking.id} className="opacity-80">
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <img
                                    src={booking.image}
                                    alt={booking.provider}
                                    className="h-10 w-10 rounded-full object-cover bg-gray-100 grayscale"
                                />
                                <div>
                                    <h3 className="font-medium text-gray-900">{booking.provider}</h3>
                                    <div className="flex items-center text-xs text-gray-500">
                                        <Clock className="h-3 w-3 mr-1" />
                                        {booking.date}
                                    </div>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
