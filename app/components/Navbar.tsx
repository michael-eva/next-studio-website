'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Mail } from 'lucide-react';

const HOME_SECTIONS = ['services', 'case-studies', 'how-we-work', 'contact'];

export default function Navbar() {
    const pathname = usePathname();
    const isBlogPage = pathname?.startsWith('/blog');
    const isHomePage = pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const visibleSectionsRef = useRef<Set<string>>(new Set());

    useEffect(() => {
        if (!isHomePage) {
            setActiveSection('');
            return;
        }

        setActiveSection('');
        visibleSectionsRef.current = new Set();

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const sectionId = entry.target.id;
                if (!sectionId) return;

                if (entry.isIntersecting) {
                    visibleSectionsRef.current.add(sectionId);
                } else {
                    visibleSectionsRef.current.delete(sectionId);
                }
            });

            const nextActive = HOME_SECTIONS.find((sectionId) => (
                visibleSectionsRef.current.has(sectionId)
            )) || '';
            setActiveSection(nextActive);
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        HOME_SECTIONS.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            HOME_SECTIONS.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [isHomePage]);

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        setIsMenuOpen(false);

        // Only intercept for smooth scroll when on home page; otherwise let the link navigate
        if (isHomePage) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = 64; // h-16 = 64px
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setIsMenuOpen(false);
        setActiveSection('');

        if (isHomePage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const isActive = (sectionId: string) => {
        return isHomePage && activeSection === sectionId;
    };

    return (
        <header className="bg-[--paper]/95 backdrop-blur border-b border-[--line] fixed w-full z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" onClick={handleLogoClick} className="flex items-center">
                            <img src="/extensa-logo.png" alt="Extensa Logo" className="h-12" />
                            <p className="text-2xl font-bold text-[--ink]">Extensa</p>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="/#services"
                            onClick={(e) => handleSmoothScroll(e, '#services')}
                            className={`${isActive('services')
                                ? 'text-[--accent-deep] font-semibold'
                                : 'text-gray-600'
                                } hover:text-[--accent-deep] transition duration-300 cursor-pointer`}
                        >
                            What I fix
                        </a>
                        <a
                            href="/#how-we-work"
                            onClick={(e) => handleSmoothScroll(e, '#how-we-work')}
                            className={`${isActive('how-we-work')
                                ? 'text-[--accent-deep] font-semibold'
                                : 'text-gray-600'
                                } hover:text-[--accent-deep] transition duration-300 cursor-pointer`}
                        >
                            Process
                        </a>
                        <a
                            href="/#case-studies"
                            onClick={(e) => handleSmoothScroll(e, '#case-studies')}
                            className={`${isActive('case-studies')
                                ? 'text-[--accent-deep] font-semibold'
                                : 'text-gray-600'
                                } hover:text-[--accent-deep] transition duration-300 cursor-pointer`}
                        >
                            Work
                        </a>
                        <Link
                            href="/financial-services"
                            className={`${pathname === '/financial-services' ? 'text-[--accent-deep] font-semibold' : 'text-gray-600'} hover:text-[--accent-deep] transition duration-300`}
                        >
                            Financial services
                        </Link>
                        <Link
                            href="/blog"
                            className={`${isBlogPage
                                ? 'text-[--accent-deep] font-semibold'
                                : 'text-gray-600'
                                } hover:text-[--accent-deep] transition duration-300 inline-flex items-center gap-1`}
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
                        <a
                            href="/#contact"
                            onClick={(e) => handleSmoothScroll(e, '#contact')}
                            className="bg-[--signal] text-[--ink] px-4 py-2 rounded-md hover:bg-[--signal-deep] transition duration-300 font-semibold flex items-center gap-2 cursor-pointer">
                            <Mail className="w-4 h-4" />
                            Book a call
                        </a>
                    </div>
                </div>
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                        <a
                            href="/#services"
                            onClick={(e) => handleSmoothScroll(e, '#services')}
                            className={`block px-3 py-2 ${isActive('services')
                                ? 'text-[--accent-deep] font-semibold bg-[--accent-soft]'
                                : 'text-gray-600'
                                } hover:text-[--accent-deep] hover:bg-[--accent-soft] transition duration-300 cursor-pointer rounded-lg`}>
                            Services
                        </a>
                        <a
                            href="/#how-we-work"
                            onClick={(e) => handleSmoothScroll(e, '#how-we-work')}
                            className={`block px-3 py-2 ${isActive('how-we-work')
                                ? 'text-[--accent-deep] font-semibold bg-[--accent-soft]'
                                : 'text-gray-600'
                                } hover:text-[--accent-deep] hover:bg-[--accent-soft] transition duration-300 cursor-pointer rounded-lg`}>
                            What I fix
                        </a>
                        <a
                            href="/#case-studies"
                            onClick={(e) => handleSmoothScroll(e, '#case-studies')}
                            className={`block px-3 py-2 ${isActive('case-studies')
                                ? 'text-[--accent-deep] font-semibold bg-[--accent-soft]'
                                : 'text-gray-600'
                                } hover:text-[--accent-deep] hover:bg-[--accent-soft] transition duration-300 cursor-pointer rounded-lg`}>
                            Work
                        </a>
                        <Link
                            href="/blog"
                            onClick={handleMenuItemClick}
                            className={`block px-3 py-2 ${isBlogPage
                                ? 'text-[--accent-deep] font-semibold bg-[--accent-soft]'
                                : 'text-gray-600'
                                } hover:text-[--accent-deep] hover:bg-[--accent-soft] transition duration-300 flex items-center gap-1 rounded-lg`}
                        >
                            Blog
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                        <div className="border-t border-gray-200 mt-2">
                            <a
                                href="/#contact"
                                onClick={(e) => handleSmoothScroll(e, '#contact')}
                                className="block px-3 py-3 mt-2 text-[--ink] bg-[--signal] hover:bg-[--signal-deep] transition duration-300 text-center rounded-lg mx-2 cursor-pointer font-semibold">
                                Book a call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
} 
