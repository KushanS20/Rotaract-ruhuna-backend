import React, { useState } from 'react';
import { Mail, Lock, User, Hash, BookUser } from 'lucide-react';
import { toast } from 'react-hot-toast';
import type { Admin } from '../types';



export function SignUp() {
  const [formData, setFormData] = useState<Partial<Admin>>({
    fName: '',
    lName: '',
    clubIdNumber: '',
    StudentNumber: '',
    email: '',
    password: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      setLoading(true);
      toast.success('Account created successfully!');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Create Admin Account</h2>
          <p className="text-gray-600 mt-2">Join the administrative team</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="fName"
                  value={formData.fName}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="First name"
                  required
                  disabled={loading}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="lName"
                  value={formData.lName}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Last name"
                  required
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Club ID Number</label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Hash className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="clubIdNumber"
                value={formData.clubIdNumber}
                onChange={handleChange}
                className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter club ID number"
                required
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Student Number</label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BookUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="StudentNumber"
                value={formData.StudentNumber}
                onChange={handleChange}
                className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter student number"
                required
                disabled={loading}
              />
            </div>
          </div>

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
                disabled={loading}
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
                placeholder="Create a password"
                required
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirm your password"
                required
                disabled={loading}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create Admin Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button

              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}