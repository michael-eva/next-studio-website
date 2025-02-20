'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const isBlogPage = pathname?.startsWith('/blog');

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
                        <a href="/#approach" className="text-gray-600 hover:text-gray-900 transition duration-300">Our Approach</a>
                        <a href="/#industries" className="text-gray-600 hover:text-gray-900 transition duration-300">Industries</a>
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
                    <div>
                        <a href="/#contact"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
} 