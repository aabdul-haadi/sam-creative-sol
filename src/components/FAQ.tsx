import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ 
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our services",
  items 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const defaultFAQs: FAQItem[] = [
    {
      question: "How long does it take to complete a web development project?",
      answer: "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications can take 8-16 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security monitoring, performance optimization, and technical support to ensure your website runs smoothly."
    },
    {
      question: "Can you help improve my website's search engine rankings?",
      answer: "Absolutely! Our SEO services include keyword research, on-page optimization, technical SEO, content strategy, and ongoing monitoring to improve your search engine rankings and organic traffic."
    },
    {
      question: "What makes your AI solutions different from others?",
      answer: "Our AI solutions are custom-trained for your specific business needs. We don't use generic chatbots - we create intelligent assistants that understand your industry, products, and customer service requirements."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with startups, small businesses, and large enterprises. Our solutions are scalable and can be tailored to fit any budget and business requirement."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the scope and complexity of your requirements. We provide detailed quotes after understanding your specific needs during our free consultation."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in seamless integrations with existing systems, CRMs, databases, and third-party services. We ensure minimal disruption to your current operations."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, we provide comprehensive training and documentation for all our solutions. We ensure your team is comfortable using and managing the systems we develop."
    }
  ];

  const faqItems = items || defaultFAQs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqItems.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-yellow-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;