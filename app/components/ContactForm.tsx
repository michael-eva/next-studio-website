'use client';

import { useState } from 'react';
import { FiSend, FiLoader } from 'react-icons/fi';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                window.location.href = data.redirectUrl;
            } else {
                setError('Something went wrong. Please try again.');
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Failed to send message. Please try again or email us directly.');
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xpwqrqyj"
            method="POST"
            className="space-y-4 sm:space-y-6 text-left"
        >
            <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="_replyto"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
            </div>

            <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Subject *
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                ></textarea>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <FiLoader className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <FiSend className="w-5 h-5" />
                        Send Message
                    </>
                )}
            </button>
        </form>
    );
} 