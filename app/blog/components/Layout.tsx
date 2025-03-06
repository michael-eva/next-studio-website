'use client'
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import type { BlogMetadata, LayoutProps } from '@/app/types/blogType';
import { Tag } from 'lucide-react';


const Layout: React.FC<LayoutProps> = ({
    title,
    children,
    description,
    keywords,
}) => {
    const pathname = usePathname();
    const slug = pathname?.split('/').pop() || '';
    const [metadata, setMetadata] = useState<BlogMetadata | null>(null);

    useEffect(() => {
        async function fetchMetadata() {
            try {
                const response = await fetch(`/api/blog/metadata?slug=${slug}`);
                const data = await response.json();
                setMetadata(data);
            } catch (error) {
                console.error('Error fetching metadata:', error);
            }
        }

        if (slug) {
            fetchMetadata();
        }
    }, [slug]);
    console.log(metadata);
    return (
        <>
            <Head>
                <title>{title} | Your Site Name</title>
                {description && <meta name="description" content={description} />}
                {keywords && <meta name="keywords" content={keywords.join(', ')} />}
                <meta property="og:title" content={title} />
                {description && <meta property="og:description" content={description} />}
            </Head>
            <main className="min-h-screen bg-gray-50">
                <div className="min-h-screen bg-white">
                    <div className="max-w-4xl mx-auto px-4 py-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-6">
                            {title}
                        </h1>
                        {metadata && (
                            <div className="my-8 border-t border-gray-200 pt-6">
                                <div className="text-gray-600 text-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="font-medium">By {metadata.author}</span>
                                        <span className="text-gray-400">•</span>
                                        <span>{metadata.date}</span>
                                        <span className="text-gray-400">•</span>
                                        <span className='flex items-center gap-1.5'>
                                            <Tag size={14} className="text-gray-500" />
                                            {metadata.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                        {children}

                        {metadata?.navigation && (
                            <nav className="mt-12 border-t border-gray-200 pt-8">
                                <div className="flex justify-between items-center">
                                    {metadata.navigation.prev ? (
                                        <Link
                                            href={`/blog/${metadata.navigation.prev.slug}`}
                                            className="group flex items-center text-blue-600 hover:text-blue-800"
                                        >
                                            <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                            <div>
                                                <div className="text-sm text-gray-500">Previous</div>
                                                <div className="font-medium">{metadata.navigation.prev.title}</div>
                                            </div>
                                        </Link>
                                    ) : <div />}

                                    {metadata.navigation.next && (
                                        <Link
                                            href={`/blog/${metadata.navigation.next.slug}`}
                                            className="group flex items-center text-right text-blue-600 hover:text-blue-800"
                                        >
                                            <div>
                                                <div className="text-sm text-gray-500">Next</div>
                                                <div className="font-medium">{metadata.navigation.next.title}</div>
                                            </div>
                                            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            </nav>
                        )}
                    </div>
                </div>

                <footer className="bg-blue-500 text-white py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <div className="text-sm mb-4 sm:mb-0">
                                © 2025 Extensa Studio. All rights reserved.
                            </div>
                            <nav className="flex gap-6">
                                <Link
                                    href="/"
                                    className="text-white hover:text-blue-100 transition"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/#contact"
                                    className="text-white hover:text-blue-100 transition"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/blog"
                                    className="text-white hover:text-blue-100 transition"
                                >
                                    Blog
                                </Link>
                            </nav>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
};

export default Layout;
