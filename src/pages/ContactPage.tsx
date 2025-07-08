import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Award } from 'lucide-react';
import { submitContactForm } from '../lib/supabase';

interface ContactPageProps {
  setCurrentPage?: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          // Reset form
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            service: '',
            budget: '',
            message: '',
            timeline: ''
          });
        }, 3000);
      } else {
        setError(result.error || 'Failed to submit contact form');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToHome = () => {
    if (setCurrentPage) {
      setCurrentPage('home');
    }
  };

  const services = [
    'Web Development',
    'E-commerce Solutions',
    'SaaS Applications',
    'AI Solutions',
    'Graphic Design',
    '2D/3D Animation',
    'SEO & Marketing',
    'Other'
  ];

  const budgetRanges = [
    'Below $1000',
    '$1000 - $5000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const timelines = [
    'ASAP',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={handleBackToHome}
            className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Create Something <span className="text-yellow-400">Amazing</span> Together
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to transform your digital presence? We're here to turn your vision into reality 
              with cutting-edge technology and creative excellence.
            </p>
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">24-48h</div>
                <p className="text-gray-300">Response Time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">150+</div>
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">98%</div>
                <p className="text-gray-300">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-xl border p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Start Your Project</h2>
              <p className="text-gray-600 mb-8">
                Tell us about your project and we'll get back to you with a detailed proposal.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to you within 24-48 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-6">
                    <p className="text-sm text-gray-500">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm border">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                      <p className="text-gray-600 mb-2">samcreativeofficials@gmail.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                      <p className="text-gray-600 mb-2">+92 326 3778850</p>
                         <p className="text-gray-600 mb-2">+92 313 8372573</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                   <div>
  <h4 className="font-semibold text-gray-900 mb-1">Get an Appointment</h4>
  <p className="text-sm text-gray-500 mb-2">We're available by appointment only.</p>
  <a 
    href="https://wa.me/923263778850" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-sm text-blue-600 hover:underline"
  >
    Book via WhatsApp
  </a>
</div>

                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose SAM CREATIVE?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-sm text-gray-700">Skilled professionals with years of experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Custom Solutions</h4>
                      <p className="text-sm text-gray-700">Tailored to your specific business needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proven Results</h4>
                      <p className="text-sm text-gray-700">150+ successful projects delivered</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                      <p className="text-sm text-gray-700">Continuous support and maintenance</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <span className="text-sm font-bold">f</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                    <span className="text-sm font-bold">𝕏</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <span className="text-sm font-bold">in</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <span className="text-sm font-bold">ig</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How long does a typical project take?</h4>
                <p className="text-gray-600 text-sm">Project timelines vary from 2-16 weeks depending on complexity and scope.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h4>
                <p className="text-gray-600 text-sm">Yes, we offer comprehensive support and maintenance packages.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can you work with our existing team?</h4>
                <p className="text-gray-600 text-sm">Absolutely! We collaborate seamlessly with in-house teams.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What's included in the project cost?</h4>
                <p className="text-gray-600 text-sm">All development, design, testing, and initial support are included.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you offer payment plans?</h4>
                <p className="text-gray-600 text-sm">Yes, we offer flexible payment schedules for larger projects.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can you help with hosting and deployment?</h4>
                <p className="text-gray-600 text-sm">Yes, we handle all technical aspects including hosting setup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;