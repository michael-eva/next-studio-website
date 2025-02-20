import fs from 'fs';
import path from 'path';
import { BlogMetadata } from '../types/blogType';
import { calculateReadingTime } from './calculateReadingTime';

export function getBlogMetadata(slug: string): BlogMetadata {
    const filePath = path.join(process.cwd(), 'app/blog', slug);

    try {
        // Read metadata
        const metadataPath = path.join(filePath, 'metadata.json');
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

        const contentPath = path.join(filePath, 'page.tsx');
        const content = fs.readFileSync(contentPath, 'utf8');

        // Calculate reading time
        const readingTime = calculateReadingTime(content);

        return {
            ...metadata,
            readingTime
        };
    } catch (error) {
        return {
            title: formatSlug(slug),
            description: '',
            category: 'Uncategorized',
            date: new Date().toISOString(),
            author: 'Anonymous',
            readingTime: '1 min read'
        };
    }
}

function formatSlug(slug: string): string {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function getAllBlogPosts() {
    const blogPath = path.join(process.cwd(), 'app/blog');
    const items = fs.readdirSync(blogPath, { withFileTypes: true });

    const posts = items
        .filter(item => item.isDirectory())
        .filter(item => item.name !== 'components')
        .map(item => {
            const metadata = getBlogMetadata(item.name);
            return {
                slug: item.name,
                ...metadata
            };
        })
        .sort((a, b) => new Date(a.date.split('-').reverse().join('-')).getTime() - new Date(b.date.split('-').reverse().join('-')).getTime());

    return posts;
}