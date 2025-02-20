To enter a blog post, you need to create a new directory under `app/blog/` with your post's slug name:

app/blog/
└── your-post-slug/
├── metadata.json
├── page.tsx
└── (images)/ # Optional: for post images

the metadata.json file should contain the following fields:

```json
{
  "title": "Your Post Title",
  "description": "Your Post Description",
  "category": "Your Post Category",
  "date": "2024-01-01",
  "author": "Your Name"
}
```

The page.tsx file should contain the actual content of the post.

There is a component called `Layout.tsx` that is used to wrap the post content. It contains the navigation links at the bottom of the post.
The Layout props are:

Title: The title of the post
Description: The description of the post
Keywords: The keywords of the post - used for SEO

Your blog should start with the <article> tag for SEO reasons.

The images directory is optional and can be used to store images for the post.

The time taken to read is automatically calculated based on the word count of the post.

The post is automatically added to the blog page and the sitemap.

The order of the posts is determined by the date of the post - earliest first.
