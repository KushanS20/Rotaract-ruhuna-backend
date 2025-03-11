import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import  authService  from '../Services/authService.ts';
import toast from "react-hot-toast";// Ensure the correct import

interface SignInProps {
    onSignUp: () => void;
    onAuthenticate: () => void; // ✅ Add this prop
}
const initialState = {
    email: "",
    password: "",
};

export function SignIn({ onSignUp, onAuthenticate }: SignInProps) { // ✅ Accept `onAuthenticate`
    const [formData, setFormData] = useState(initialState);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', formData);
        if (!formData.email.trim()) {
            toast.error("User email is required");
            return;
        }

        if (!formData.password.trim()) {
            toast.error("User password is required");
            return;
        }
        try {
            const response = await authService.signin(formData.email, formData.password);
            if (response.success) {
                onAuthenticate(); // Call the onAuthenticate function on success
            }
        } catch (error: any) { // Specify 'any' if you want to use the error object
            setErrorMessage('Invalid email or password');
            console.error('Error:', error); // You can log the error to the console
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
                    <p className="text-gray-600 mt-2">Sign in to your admin account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="mt-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="mt-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>

                    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 block text-sm text-gray-700">Remember me</label>
                        </div>
                        <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign In
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Need an admin account?{' '}
                        <button
                            onClick={onSignUp}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Sign up now
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
