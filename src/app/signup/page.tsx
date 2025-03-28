"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignUp = async () => {
        // Logic will be implemented later
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900">
            <div className="w-full max-w-md space-y-8 rounded-lg bg-gray-800 p-8 shadow-md">
                <div>
                    <h1 className="text-center text-3xl font-bold text-white">Create an account</h1>
                    <p className="mt-2 text-center text-sm text-gray-400">Join our platform today</p>
                </div>
                
                <form className="mt-8 space-y-6">
                    <div className="space-y-4 rounded-md">
                        <div>
                            <label htmlFor="username" className="text-sm font-medium text-gray-300">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={user.username}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 p-3 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Username"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={user.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 p-3 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Email address"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={user.password}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 p-3 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={handleSignUp}
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign up
                        </button>
                    </div>
                    
                    <div className="text-center">
                        <p className="text-sm text-gray-400">
                            Already have an account?{" "}
                            <Link href="/login" className="font-medium text-indigo-400 hover:text-indigo-300">
                                Log in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}