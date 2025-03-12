import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { toast } from 'react-hot-toast';
import axios from "axios";

export function SignIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;
    const user = {
      email,
      password,
    };
    try {
      const response = await axios.post(
          "http://localhost:3001/api/v1/admin/sign-in",
          user,
          // {
          //   headers: {
          //     "Content-Type": "application/json",
          //   },

      );
      console.log(response.data);
      toast.success('Sign in successful!');

    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response:", error.response.data);
        toast.error(`Sign in failed: ${error.response.data.message || 'Unexpected error'}`);
      } else {
        console.error("Error:", error);
        toast.error('Sign in failed: Unexpected error');
      }
    }
  };


  return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Welcome back</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <button type="submit" className="w-full py-3 px-4 border rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">Sign In <ArrowRight className="ml-2 h-4 w-4" /></button>
          </form>
        </div>
      </div>
  );
}