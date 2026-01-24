import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronLeft, MapPin, CheckCircle2, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

export default function BookingFlowPage() {
    const navigate = useNavigate();
    // const { providerId } = useParams(); // Unused in mock
    useParams();
    const [searchParams] = useSearchParams();
    const [step, setStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Mock Data
    const services = [
        { id: 's1', name: 'Socket Repair/Install', price: 800 },
        { id: 's2', name: 'Full Wiring Audit', price: 2500 },
        { id: 's3', name: 'Emergency Fix', price: 1500 },
    ];
    const initialService = services.find(s => s.id === searchParams.get('service')) || services[0];
    const [selectedService, setSelectedService] = useState(initialService);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handlePayment = () => {
        setIsProcessing(true);
        // Simulate STK Push
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center animate-in zoom-in duration-300">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-brand-green" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
                <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                    Your request has been sent to Brian Otieno. You'll receive a confirmation shortly.
                </p>
                <Button onClick={() => navigate('/bookings')} className="w-full max-w-sm">
                    View Bookings
                </Button>
                <Button variant="ghost" onClick={() => navigate('/')} className="mt-2 text-gray-500">
                    Back to Home
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-40">
                <div className="flex items-center">
                    <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="-ml-2">
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <div className="ml-2">
                        <h1 className="font-semibold text-lg">Book Service</h1>
                        <p className="text-xs text-gray-500">Step {step} of 3</p>
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="h-1 bg-gray-100 mt-3 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-brand-green transition-all duration-300"
                        style={{ width: `${(step / 3) * 100}%` }}
                    />
                </div>
            </div>

            <div className="p-4 space-y-6">
                {step === 1 && (
                    <div className="space-y-6 animate-in slide-in-from-right duration-300">
                        <section>
                            <h2 className="font-semibold text-gray-900 mb-3">Select Service</h2>
                            <div className="space-y-3">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedService.id === service.id
                                            ? 'border-brand-green bg-green-50'
                                            : 'border-transparent bg-white shadow-sm'
                                            }`}
                                        onClick={() => setSelectedService(service)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium">{service.name}</span>
                                            <span className="font-bold text-brand-green">KSh {service.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="font-semibold text-gray-900 mb-3 block">Date & Time</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-3 rounded-xl border border-gray-200">
                                    <label className="text-xs text-gray-500 mb-1 block">Date</label>
                                    <input
                                        type="date"
                                        className="w-full bg-transparent focus:outline-none text-sm font-medium"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                                <div className="bg-white p-3 rounded-xl border border-gray-200">
                                    <label className="text-xs text-gray-500 mb-1 block">Time</label>
                                    <input
                                        type="time"
                                        className="w-full bg-transparent focus:outline-none text-sm font-medium"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6 animate-in slide-in-from-right duration-300">
                        <section>
                            <h2 className="font-semibold text-gray-900 mb-3">Location</h2>
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-brand-green mt-0.5" />
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-900">Current Location</p>
                                        <p className="text-sm text-gray-500 mt-1">Kilimani, near Yaya Centre</p>
                                        <Button variant="link" className="px-0 h-auto text-xs mt-2 text-brand-green">
                                            Change Address
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="text-sm font-medium mb-1 block">House/Apartment Details</label>
                                <Input placeholder="e.g. Pentagon Heights, House 4B" />
                            </div>
                        </section>

                        <section>
                            <label className="text-sm font-medium mb-1 block">Notes for Provider (Optional)</label>
                            <textarea
                                className="w-full rounded-md border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                                rows={3}
                                placeholder="Describe the issue..."
                            />
                        </section>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-6 animate-in slide-in-from-right duration-300">
                        <Card>
                            <div className="p-4 bg-gray-50 border-b border-gray-100">
                                <h3 className="font-medium text-gray-900">Order Summary</h3>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">{selectedService.name}</span>
                                    <span className="font-medium">KSh {selectedService.price}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Service Fee</span>
                                    <span className="font-medium">KSh 100</span>
                                </div>
                                <div className="border-t border-dashed border-gray-200 my-2 pt-2 flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span className="text-brand-green">KSh {selectedService.price + 100}</span>
                                </div>
                            </div>
                        </Card>

                        <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex gap-3 items-start">
                            <div className="bg-green-100 p-2 rounded-full shrink-0">
                                <CreditCard className="h-5 w-5 text-green-700" />
                            </div>
                            <div>
                                <p className="font-semibold text-green-800 text-sm">M-Pesa Secure Payment</p>
                                <p className="text-xs text-green-700 mt-1">
                                    You will receive an STK prompt on your phone number <span className="font-mono font-bold">0722***456</span> to complete payment.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Actions */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 safe-area-bottom">
                <div className="flex gap-3">
                    {step > 1 && (
                        <Button variant="outline" onClick={() => setStep(s => s - 1)}>
                            Back
                        </Button>
                    )}
                    <Button
                        className="flex-1"
                        onClick={() => step < 3 ? setStep(s => s + 1) : handlePayment()}
                        isLoading={isProcessing}
                    >
                        {step === 3 ? `Pay KSh ${selectedService.price + 100}` : 'Continue'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
