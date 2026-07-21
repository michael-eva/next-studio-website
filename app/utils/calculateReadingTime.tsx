export function calculateReadingTime(content: string): string {
    // Average reading speed (words per minute)
    const WORDS_PER_MINUTE = 200;

    // Remove HTML tags if present
    const cleanText = content.replace(/<[^>]*>/g, '');

    // Count words (split by whitespace)
    const wordCount = cleanText.trim().split(/\s+/).length;

    // Calculate reading time in minutes
    const readingTimeMinutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

    // Format the output
    if (readingTimeMinutes === 1) {
        return '1 min read';
    }
    return `${readingTimeMinutes} min read`;
}
