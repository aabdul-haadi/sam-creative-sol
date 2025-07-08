import React, { useEffect, useRef } from 'react';
import { 
  TrendingDown, 
  Users, 
  AlertTriangle, 
  Search, 
  Target, 
  BarChart3, 
  Link, 
  FileText,
  Eye,
  Zap,
  CheckCircle,
  ArrowUp,
  TrendingUp
} from 'lucide-react';

const SEOSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.seo-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Worried about low rankings?",
      description: "Your amazing products and services are buried on page 10 of Google results"
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Getting beaten by competitors?",
      description: "Your competition is stealing your potential customers with better SEO strategies"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Not seeing ROI from content?",
      description: "You're creating content but it's not driving traffic or conversions"
    }
  ];

  const solutions = [
    {
      icon: <Search className="w-8 h-8 text-yellow-600" />,
      title: "Keyword Research",
      description: "We identify high-converting keywords your competitors are missing, giving you the edge in search rankings."
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-600" />,
      title: "Technical SEO",
      description: "Core Web Vitals optimization, site speed improvement, mobile optimization, and structured data implementation."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-600" />,
      title: "On-Page Optimization",
      description: "Complete website optimization including meta tags, headers, content structure, and technical SEO elements."
    },
    {
      icon: <FileText className="w-8 h-8 text-yellow-600" />,
      title: "Content Writing & Strategy",
      description: "Data-driven content creation that answers your audience's questions and ranks for valuable keywords."
    },
    {
      icon: <Eye className="w-8 h-8 text-yellow-600" />,
      title: "Blog Optimization",
      description: "Engaging, SEO-optimized blog content that converts readers into customers while improving search rankings."
    },
    {
      icon: <Link className="w-8 h-8 text-yellow-600" />,
      title: "Competitor Analysis",
      description: "In-depth analysis of your competitors' strategies to identify opportunities and stay ahead."
    }
  ];

  const results = [
    { metric: "300%", label: "Organic Traffic Increase", icon: <ArrowUp className="w-6 h-6" /> },
    { metric: "150%", label: "Conversion Rate Boost", icon: <CheckCircle className="w-6 h-6" /> },
    { metric: "85%", label: "First Page Rankings", icon: <Target className="w-6 h-6" /> },
    { metric: "60%", label: "Cost Per Lead Reduction", icon: <TrendingDown className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Problems Section */}
        <div className="text-center mb-16">

     <h2 className="text-4xl md:text-5xl font-bold mb-4">
             SEO & Content <span className="text-yellow-600">Strategy</span>
          </h2>
  
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Are these problems keeping you up at night? You're not alone. Here's what most businesses struggle with:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <div key={index} className="seo-item bg-red-50 p-8 rounded-xl border border-red-100 text-center">
                <div className="flex justify-center mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Our <span className="text-yellow-600">Proven Solutions</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped hundreds of businesses dominate their market with these strategic SEO services:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="seo-item bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{solution.title}</h4>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Real Results for Real Businesses
            </h3>
            <p className="text-xl text-gray-600">
              Here's what our clients typically see within 6 months:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {results.map((result, index) => (
              <div key={index} className="seo-item text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">{result.icon}</div>
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{result.metric}</div>
                <p className="text-gray-600">{result.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4 text-gray-800">
              Ready to <span className="text-yellow-600">Dominate</span> Your Market?
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's create a custom SEO strategy that drives real results for your business. 
              Get your free SEO audit and consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105">
                Get Free SEO Audit
              </button>
              <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOSection;