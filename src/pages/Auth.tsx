import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useState } from 'react';

export default function AuthPage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login
        setTimeout(() => {
            setLoading(false);
            navigate('/');
        }, 1000);
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

            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            +254
                        </span>
                        <Input
                            type="tel"
                            placeholder="712 345 678"
                            className="rounded-l-none"
                            autoFocus
                        />
                    </div>
                </div>

                <Button type="submit" className="w-full h-12 text-base" isLoading={loading}>
                    Continue
                </Button>
            </form>

            <p className="mt-8 text-center text-xs text-gray-400">
                By continuing, you agree to our Terms & Privacy Policy.
            </p>
        </div>
    );
}
