import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Blog() {
    // Get all subdirectories in the blog folder
    const blogPath = path.join(process.cwd(), 'app/blog');
    const items = fs.readdirSync(blogPath, { withFileTypes: true });
    const directories = items
        .filter(item => item.isDirectory())
        .filter(item => item.name !== 'api') // Exclude api folder if exists
        .map(item => item.name);

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
                <ul className="space-y-4">
                    {directories.map((dir) => (
                        <li key={dir}>
                            <Link href={`/blog/${dir}`} className="text-gray-600 hover:text-gray-900 transition duration-300">
                                {dir}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
