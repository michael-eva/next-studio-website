'use client'
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FAQSection() {
  const [showFAQ, setShowFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setShowFAQ(showFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How is this different from your free crisis management system?",
      answer: "The free system helps you fix issues yourself. This is professional codebase analysis for projects that are structurally broken. I personally review your code, identify what's salvageable, and create a strategic recovery plan."
    },
    {
      question: "What if my code is proprietary or confidential?",
      answer: "I sign NDAs and have strict confidentiality protocols. Your code and business information remain completely private. I can also work with sanitized versions of your codebase if needed."
    },
    {
      question: "How long does the assessment take?",
      answer: "Most assessments are completed within 3-5 business days. Rush assessments (24-48 hours) are available for critical situations at an additional fee."
    },
    {
      question: "What if you determine the project can't be saved?",
      answer: "I'll give you an honest assessment. If the project truly can't be salvaged, I'll explain why and provide recommendations for starting fresh with minimal loss."
    },
    {
      question: "Do you actually fix the issues or just tell me what's wrong?",
      answer: "This assessment provides diagnosis and strategic recommendations. Implementation services are available separately if you need hands-on fixing."
    },
    {
      question: "What platforms and technologies do you cover?",
      answer: "I specialize in AI-generated apps across all major platforms: Bolt.new, Lovable, Replit, Bubble, FlutterFlow, Adalo, Glide, and more. If you're unsure, just ask."
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <ArrowRight className={`w-5 h-5 text-gray-500 transition-transform ${showFAQ === index ? 'rotate-90' : ''}`} />
            </button>
            {showFAQ === index && (
              <div className="px-4 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}