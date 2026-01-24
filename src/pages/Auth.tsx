import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { ChevronRight, Smartphone, LockKeyhole } from 'lucide-react';

export default function AuthPage() {
    const navigate = useNavigate();
    const { signInWithPhone, verifyOtp, loading } = useAuthStore();

    const [step, setStep] = useState<'phone' | 'otp'>('phone');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handlePhoneSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!phoneNumber || phoneNumber.length < 9) {
            setError('Please enter a valid phone number');
            return;
        }

        // Format phone number: Ensure it starts with +254
        const formattedPhone = phoneNumber.startsWith('0')
            ? `+254${phoneNumber.slice(1)}`
            : phoneNumber.startsWith('254')
                ? `+${phoneNumber}`
                : `+254${phoneNumber}`;

        const { error } = await signInWithPhone(formattedPhone);

        if (error) {
            setError(error.message || 'Failed to send OTP. Try again.');
        } else {
            setStep('otp');
        }
    };

    const handleOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!otp || otp.length < 6) {
            setError('Please enter the 6-digit code');
            return;
        }

        // Format phone number again for verification
        const formattedPhone = phoneNumber.startsWith('0')
            ? `+254${phoneNumber.slice(1)}`
            : phoneNumber.startsWith('254')
                ? `+${phoneNumber}`
                : `+254${phoneNumber}`;

        const { error } = await verifyOtp(formattedPhone, otp);

        if (error) {
            setError(error.message || 'Invalid code. Please try again.');
        } else {
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen bg-white p-6 flex flex-col justify-center">
            <div className="mb-8 text-center">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-dark text-white font-bold text-4xl mb-6 shadow-xl shadow-brand-green/20">
                    J
                </div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome to JuaGig</h1>
                <p className="text-gray-500 mt-3 text-lg">Kenya's #1 marketplace for <br /> skilled local professionals.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-1">
                {step === 'phone' ? (
                    <form onSubmit={handlePhoneSubmit} className="space-y-4 p-4">
                        <div className="text-center mb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Sign in</h2>
                            <p className="text-sm text-gray-400">Enter your phone number to continue</p>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl border border-red-100 text-center">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 pl-1">Phone Number</label>
                            <div className="flex relative">
                                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 font-medium">
                                    <Smartphone className="h-4 w-4 mr-2" />
                                    +254
                                </span>
                                <Input
                                    type="tel"
                                    placeholder="712 345 678"
                                    className="rounded-l-none h-12 text-lg"
                                    autoFocus
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 text-base rounded-xl font-semibold mt-4 bg-brand-green hover:bg-brand-dark"
                            isLoading={loading}
                        >
                            Continue <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                ) : (
                    <form onSubmit={handleOtpSubmit} className="space-y-4 p-4">
                        <div className="text-center mb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Verify Number</h2>
                            <p className="text-sm text-gray-400">Enter the code sent to +254 {phoneNumber}</p>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl border border-red-100 text-center">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 pl-1">One-Time Password</label>
                            <div className="relative">
                                <LockKeyhole className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="000 000"
                                    maxLength={6}
                                    className="h-12 text-center text-2xl tracking-widest pl-10"
                                    autoFocus
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 text-base rounded-xl font-semibold mt-4 bg-brand-green hover:bg-brand-dark"
                            isLoading={loading}
                        >
                            Verify & Sign In
                        </Button>

                        <button
                            type="button"
                            onClick={() => setStep('phone')}
                            className="w-full text-sm text-gray-500 hover:text-gray-900 py-2"
                        >
                            Change Phone Number
                        </button>
                    </form>
                )}
            </div>

            <p className="mt-8 text-center text-xs text-gray-400 max-w-xs mx-auto">
                By continuing, you agree to our Terms & Privacy Policy.
                Standard message rates may apply.
            </p>
        </div>
    );
}
