'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link href="/extensa-offer/debug-guide" className="text-gray-700 hover:text-gray-900 transition duration-300 font-medium">
                            Free Debug Guide
                        </Link>
                        <div className="text-gray-400 text-sm">
                            Still broken?
                        </div>
                        <Link href="/extensa-offer/rescue-assessment" className="text-blue-600 hover:text-blue-700 transition duration-300 font-medium">
                            Get Expert Help
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
                            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition duration-300 shadow-md font-semibold">
                            Fix My App (Free)
                        </Link>
                    </div>
                </div>
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-3 bg-white border-t border-gray-200">
                        <Link href="/extensa-offer/debug-guide"
                            onClick={handleMenuItemClick}
                            className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition duration-300 font-medium">
                            Free Debug Guide
                        </Link>
                        <div className="px-3 py-1 text-gray-400 text-sm border-l-2 border-gray-200">
                            Still broken after trying the free guide?
                        </div>
                        <Link href="/extensa-offer/rescue-assessment"
                            onClick={handleMenuItemClick}
                            className="block px-3 py-2 text-blue-600 hover:text-blue-700 transition duration-300 font-medium">
                            Get Expert Help
                        </Link>
                        <div className="border-t border-gray-200 mt-4 pt-3">
                            <Link href="/extensa-offer/debug-guide"
                                onClick={handleMenuItemClick}
                                className="block px-3 py-3 text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition duration-300 text-center rounded-lg mx-2 font-semibold">
                                Fix My App (Free)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}