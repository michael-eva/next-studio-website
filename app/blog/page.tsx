import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Clock, User, Tag } from 'lucide-react';
import { getAllBlogPosts } from '../utils/blog-utils';

export default function Blog() {
    const posts = getAllBlogPosts();
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block h-full"
                        >
                            <article className="h-full bg-gradient-to-br from-white to-blue-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-200 hover:scale-[1.02] transition-all duration-300">
                                {post.image && (
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-gray-900 hover:text-blue-600 mb-4">
                                        {post.title}
                                    </h2>

                                    {post.description && (
                                        <p className="text-gray-600 mb-6 line-clamp-2">
                                            {post.description}
                                        </p>
                                    )}

                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <div className="flex items-center gap-2 text-blue-600">
                                            <CalendarDays className="w-4 h-4" />
                                            <span>{new Date(post.date.split('-').reverse().join('-')).toLocaleDateString('en-GB')}</span>
                                        </div>

                                        {post.author && (
                                            <div className="flex items-center gap-2 text-purple-600">
                                                <User className="w-4 h-4" />
                                                <span>{post.author}</span>
                                            </div>
                                        )}

                                        {post.readingTime && (
                                            <div className="flex items-center gap-2 text-green-600">
                                                <Clock className="w-4 h-4" />
                                                <span>{post.readingTime}</span>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-2 text-orange-600">
                                            <Tag className="w-4 h-4" />
                                            <span>{post.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}