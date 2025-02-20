# Blog Post Creation Guide

## Directory Structure

```
app/blog/
└── your-post-slug/
    ├── metadata.json
    └── page.tsx

public/blog/
└── your-post-slug/
    └── images/
        └── your-image.png
```

## 1. Metadata File

Create `metadata.json`:

```json
{
  "title": "Your Post Title",
  "description": "Your Post Description",
  "category": "Your Post Category",
  "date": "DD-MM-YYYY",
  "author": "Your Name",
  "image": "/blog/your-post-slug/your-image.png" // Path relative to public/
}
```

## 2. Content File

Create `page.tsx`:

```tsx
import Layout from "../components/Layout";

export default function BlogPost() {
  return (
    <Layout
      title="Your Post Title"
      description="Your meta description for SEO"
      keywords={["relevant", "keywords"]}
    >
      <article className="prose prose-blue max-w-none">
        <p>Your content here...</p>
      </article>
    </Layout>
  );
}
```

## 3. Images

- Place blog images in `public/blog/your-post-slug/`
- Reference them in metadata as `/blog/your-post-slug/image-name.png`
- Images will appear in the blog index cards and can be used in posts

## Features

- Auto-calculated reading time
- Automatic navigation between posts
- SEO optimization
- Posts sorted by date (DD-MM-YYYY format)
- Automatic blog index and sitemap updates
