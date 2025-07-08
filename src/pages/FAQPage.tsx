import React from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import FAQ from '../components/FAQ';

interface FAQPageProps {
  setCurrentPage?: (page: string) => void;
}

const FAQPage: React.FC<FAQPageProps> = ({ setCurrentPage }) => {
  const handleBackToHome = () => {
    if (setCurrentPage) {
      setCurrentPage('home');
    }
  };

  const faqCategories = [
    {
      title: "General Services",
      items: [
        {
          question: "What services does SAM CREATIVE Solutions offer?",
          answer: "We offer a comprehensive range of digital services including web development, e-commerce solutions, SaaS applications, graphic design, 2D/3D animation, 3D modeling, and cutting-edge AI solutions including business automation, chatbot development, and custom AI integrations."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications or AI solutions can take 8-16 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
        },
        {
          question: "Do you work with businesses of all sizes?",
          answer: "Yes, we work with startups, small businesses, and large enterprises. Our solutions are scalable and can be tailored to fit any budget and business requirement. We believe every business deserves access to premium digital solutions."
        },
        {
          question: "What is your pricing structure?",
          answer: "Our pricing is project-based and depends on the scope and complexity of your requirements. We provide detailed quotes after understanding your specific needs during our free consultation. We offer flexible payment plans to accommodate different budgets."
        }
      ]
    },
    {
      title: "Web Development",
      items: [
        {
          question: "What technologies do you use for web development?",
          answer: "We use modern, cutting-edge technologies including React, Next.js, Node.js, Python, and various databases. We choose the best technology stack based on your project requirements, scalability needs, and long-term goals."
        },
        {
          question: "Will my website be mobile-responsive?",
          answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices - smartphones, tablets, and desktops. We test extensively across different screen sizes and browsers."
        },
        {
          question: "Do you provide website maintenance and support?",
          answer: "Yes, we offer comprehensive maintenance and support packages including regular updates, security monitoring, performance optimization, content updates, and technical support to ensure your website runs smoothly."
        },
        {
          question: "Can you redesign my existing website?",
          answer: "Certainly! We can redesign your existing website to improve its appearance, functionality, and performance. We'll analyze your current site, understand your goals, and create a modern, user-friendly design that drives results."
        }
      ]
    },
    {
      title: "AI Solutions",
      items: [
        {
          question: "What makes your AI solutions different from others?",
          answer: "Our AI solutions are custom-trained for your specific business needs. We don't use generic chatbots - we create intelligent assistants that understand your industry, products, and customer service requirements. Each solution is tailored to your unique business processes."
        },
        {
          question: "How long does it take to implement an AI chatbot?",
          answer: "AI chatbot implementation typically takes 2-6 weeks depending on complexity. This includes understanding your business needs, training the AI model, integration with your systems, testing, and deployment. We provide training and ongoing support."
        },
        {
          question: "Can AI solutions integrate with our existing systems?",
          answer: "Yes, our AI solutions are designed to integrate seamlessly with your existing CRM, databases, websites, and other business systems. We ensure minimal disruption to your current operations while maximizing the benefits of AI automation."
        },
        {
          question: "What kind of ROI can we expect from AI implementation?",
          answer: "Most clients see significant ROI within 3-6 months through reduced operational costs, improved customer service efficiency, increased lead generation, and automated processes. We provide detailed analytics to track and measure the impact of AI on your business."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <button 
            onClick={handleBackToHome}
            className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
              <p className="text-gray-600 mt-2">Find answers to common questions about our services and processes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Quick Contact */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help! Get in touch with us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage && setCurrentPage('contact')}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* FAQ Categories */}
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-yellow-400">
                {category.title}
              </h2>
              <FAQ 
                title=""
                subtitle=""
                items={category.items}
              />
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Contact our team for personalized assistance with your project.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Live Chat</h4>
                <p className="text-sm text-gray-600">Get instant answers to your questions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Email Support</h4>
                <p className="text-sm text-gray-600">hello@samcreative-solutions.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Phone Support</h4>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;