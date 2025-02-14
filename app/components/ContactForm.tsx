'use client';

export default function ContactForm() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                window.location.href = data.redirectUrl;
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xpwqrqyj"
            method="POST"
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg text-left text-black"
        >
            <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300" />
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="_replyto" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300" />
            </div>
            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300" />
            <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md">Send Message</button>
        </form>
    );
} 