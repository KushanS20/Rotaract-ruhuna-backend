import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import axios from "axios";

interface SignInProps {
    onSignUp: () => void;
    onAuthenticate: () => void;
}


export function SignIn({ onSignUp, onAuthenticate }: SignInProps) {
    const [formData, setFormData] = useState({
        email : '' , password : ''
    })

    const handleEmailChange = (e) =>{
        setFormData((prev)=>{
            return{
                ...prev,
                email: e.target.value
            }
        })
    }

    const handlePassword = (e) =>{
        setFormData((prev)=>{
            return{
                ...prev,
                password: e.target.value
            }
        })
    }


    const handleSubmit = async(e) =>{
        e.preventDefault();
        let {email,password} = formData;
        try{
            let user = {
                email:email, password: password
            }
            await axios.post('http://localhost:3001/api/v1/admin/sign-up',user)
            //dan podi loading ekak dala thappara 2k wage  idaladashboard eka pennapan, bolt eken gattu ea mage wada krnne ndda koheda ,
            // frontend eka run une nha, mkk hari awlk thynwa, edath zykode site eka run une nha ube eken hdala ewwat apsse,
            // Ara ube kalin thibba code eka mata therum ganna amarui, mn fronet eke api call krnne mehema, wenam function ekaka hadala base url dala nemei mn hdnne,
            //adaala thanata meh wage function eka aaye aaye liynwa
            // Services folder eke thyna js files deka dn one nha, meke error ekak ewi, eka hadagena plyn methanina eha lesi tikak  thynne, mata test krnna bha code eka frontend eka run wenne narthi nisa
            //Guna busa
        }
        catch(err){
            console.log(err);
        }


    }

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
                                onChange={handleEmailChange}
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
                                onChange={handlePassword}
                                className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>

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
