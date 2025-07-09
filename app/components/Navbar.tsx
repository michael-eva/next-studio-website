'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const isBlogPage = pathname?.startsWith('/blog');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <img src="/extensa-logo.png" alt="Extensa Logo" className="h-12" />
                            <p className="text-2xl font-bold text-blue-600">Extensa</p>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="/#services" className="text-gray-600 hover:text-gray-900 transition duration-300">Services</a>
                        <a href="/#how-we-work" className="text-gray-600 hover:text-gray-900 transition duration-300">How We Work</a>
                        <a href="/#case-studies" className="text-gray-600 hover:text-gray-900 transition duration-300">About</a>
                        <Link
                            href="/blog"
                            className={`${isBlogPage
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-600'
                                } hover:text-gray-900 transition duration-300 inline-flex items-center gap-1`}
                        >
                            Blog
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
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
                        <a href="/#contact"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Get In Touch
                        </a>
                    </div>
                </div>
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                        <a href="/#services"
                            onClick={handleMenuItemClick}
                            className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition duration-300">
                            Services
                        </a>
                        <a href="/#how-we-work"
                            onClick={handleMenuItemClick}
                            className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition duration-300">
                            How We Work
                        </a>
                        <a href="/#case-studies"
                            onClick={handleMenuItemClick}
                            className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition duration-300">
                            About
                        </a>
                        <Link
                            href="/blog"
                            onClick={handleMenuItemClick}
                            className={`block px-3 py-2 ${isBlogPage
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-600'
                                } hover:text-gray-900 transition duration-300 flex items-center gap-1`}
                        >
                            Blog
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                        <div className="border-t border-gray-200 mt-2">
                            <a href="/#contact"
                                onClick={handleMenuItemClick}
                                className="block px-3 py-3 mt-2 text-white bg-blue-600 hover:bg-blue-700 transition duration-300 text-center rounded-lg mx-2">
                                Book a Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
} 