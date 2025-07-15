'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AlertTriangle, Brain, Users } from 'lucide-react';

export default function OfferNavbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/extensa-offer" className="flex items-center">
                            <img src="/extensa-logo.png" alt="Extensa Logo" className="h-12" />
                            <p className="text-2xl font-bold text-blue-600">Extensa</p>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/extensa-offer/debug-guide" className="text-gray-600 hover:text-red-600 transition duration-300 font-medium">Crisis Management System</Link>
                        <Link href="/extensa-offer/ai-agent" className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium flex items-center gap-1">
                            <Brain className="w-4 h-4" />
                            AI Recovery Agent
                        </Link>
                        <Link href="/extensa-offer/rescue-assessment" className="text-gray-600 hover:text-red-600 transition duration-300 font-medium flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            Emergency Assessment
                        </Link>
                    </nav>
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                    <div className="hidden md:block">
                        <Link href="/extensa-offer/debug-guide"
                            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-red-800 transition duration-300 shadow-md flex items-center gap-2 font-semibold">
                            <AlertTriangle className="w-4 h-4" />
                            Start Crisis Recovery
                        </Link>
                    </div>
                </div>
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                        <Link href="/extensa-offer/debug-guide"
                            onClick={handleMenuItemClick}
                            className="block px-3 py-2 text-gray-600 hover:text-red-600 transition duration-300 font-medium">
                            Crisis Management System (Free)
                        </Link>
                        <Link href="/extensa-offer/ai-agent"
                            onClick={handleMenuItemClick}
                            className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition duration-300 font-medium flex items-center gap-2">
                            <Brain className="w-4 h-4" />
                            AI Recovery Agent ($197)
                        </Link>
                        <Link href="/extensa-offer/rescue-assessment"
                            onClick={handleMenuItemClick}
                            className="block px-3 py-2 text-gray-600 hover:text-red-600 transition duration-300 font-medium flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Emergency Assessment ($2,000)
                        </Link>
                        <div className="border-t border-gray-200 mt-2">
                            <Link href="/extensa-offer/debug-guide"
                                onClick={handleMenuItemClick}
                                className="block px-3 py-3 mt-2 text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition duration-300 text-center rounded-lg mx-2 font-semibold flex items-center justify-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Start Crisis Recovery
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}