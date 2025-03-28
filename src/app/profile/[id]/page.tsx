"use client";

import Link from "next/link";
import { useParams } from "next/navigation";


export default function ProfilePage() {
    const params = useParams();
    const id = params.id;
    console.log(id);    
    // Static user data
    const user = {
        username: "JohnDoe",
        email: "john.doe@example.com"
    };

    return (
        <div className="min-h-screen bg-gray-900 py-10 px-4 sm:px-6">
            <div className="mx-auto max-w-2xl">
                <div className="bg-gray-800 shadow rounded-lg overflow-hidden">
                    {/* Header/Banner */}
                    <div className="h-24 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                    
                    {/* Profile Info */}
                    <div className="relative px-6 pb-8">
                        {/* Avatar */}
                        <div className="absolute -top-12 left-6">
                            <div className="h-24 w-24 rounded-full bg-gray-700 border-4 border-gray-800 flex items-center justify-center text-3xl text-white font-bold">
                                {user.username.charAt(0)}
                            </div>
                        </div>
                        
                        {/* User Details */}
                        <div className="pt-16 px-2">
                            <h1 className="text-2xl font-bold text-white mb-4">{user.username}</h1>
                            
                            <div className="text-gray-400 mb-6">
                                <div className="flex items-center mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>{user.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Back button */}
                <div className="mt-6">
                    <Link href="/" className="text-indigo-400 hover:text-indigo-300">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}