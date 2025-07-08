import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

interface PrivacyPageProps {
  setCurrentPage?: (page: string) => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ setCurrentPage }) => {
  const handleBackToHome = () => {
    if (setCurrentPage) {
      setCurrentPage('home');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-gray-50 border-b">
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
              <Shield className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
              <p className="text-gray-600 mt-2">Last updated: March 15, 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Privacy Commitment */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Lock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Our Privacy Commitment</h3>
                <p className="text-blue-700">
                  At SAM CREATIVE Solutions, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Contact us through our website forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a quote or consultation</li>
                <li>Engage our services</li>
                <li>Participate in surveys or feedback forms</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Name and contact information (email, phone, address)</li>
                <li>Company information and job title</li>
                <li>Project requirements and preferences</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information about your device and usage patterns:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device identifiers and characteristics</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <UserCheck className="w-6 h-6 text-yellow-600" />
                    <h4 className="font-semibold text-gray-800">Service Delivery</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Provide and maintain our services</li>
                    <li>• Process payments and transactions</li>
                    <li>• Communicate about projects</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Eye className="w-6 h-6 text-yellow-600" />
                    <h4 className="font-semibold text-gray-800">Improvement & Analytics</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Analyze website usage patterns</li>
                    <li>• Improve our services and website</li>
                    <li>• Develop new features</li>
                    <li>• Conduct market research</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Marketing Communications</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                With your consent, we may use your information to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Send newsletters and updates about our services</li>
                <li>Share relevant industry insights and tips</li>
                <li>Notify you about special offers or promotions</li>
                <li>Invite you to events or webinars</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share information with trusted third-party service providers who assist us in:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Payment processing</li>
                <li>Email marketing services</li>
                <li>Website analytics</li>
                <li>Cloud hosting and storage</li>
                <li>Customer support tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose your information if required by law or in response to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Legal processes or government requests</li>
                <li>Protection of our rights and property</li>
                <li>Prevention of fraud or illegal activities</li>
                <li>Protection of user safety</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Security Measures Include:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure cloud storage with encryption</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Access controls and authentication</li>
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Employee training on data protection</li>
                    <li>• Incident response procedures</li>
                    <li>• Regular backups and recovery plans</li>
                    <li>• Compliance with industry standards</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data using industry best practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Access and Portability</h4>
                    <p className="text-sm text-gray-700">Request a copy of your personal data and receive it in a structured format</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Correction</h4>
                    <p className="text-sm text-gray-700">Update or correct inaccurate personal information</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Deletion</h4>
                    <p className="text-sm text-gray-700">Request deletion of your personal data (subject to legal requirements)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Restriction</h4>
                    <p className="text-sm text-gray-700">Limit how we process your personal information</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Objection</h4>
                    <p className="text-sm text-gray-700">Object to processing based on legitimate interests</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Withdraw Consent</h4>
                    <p className="text-sm text-gray-700">Withdraw consent for data processing at any time</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                To exercise any of these rights, please contact us using the information provided at the end of this policy. We will respond to your request within the timeframe required by applicable law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">General Inquiries</h4>
                    <p className="text-gray-700 mb-2"><strong>SAM CREATIVE Solutions</strong></p>
                    <p className="text-gray-700 mb-2">Email: privacy@samcreative-solutions.com</p>
                    <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
                    <p className="text-gray-700">Address: [Your Business Address]</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Data Protection Officer</h4>
                    <p className="text-gray-700 mb-2">Email: dpo@samcreative-solutions.com</p>
                    <p className="text-gray-700 mb-4">For GDPR-related inquiries and data subject requests</p>
                    
                    <h4 className="font-semibold text-gray-800 mb-2">Response Time</h4>
                    <p className="text-sm text-gray-700">We aim to respond to all privacy inquiries within 30 days</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Database className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Your Data, Your Rights</h3>
            </div>
            <p className="text-gray-600 mb-6">
              We're committed to transparency and protecting your privacy. Contact us with any questions or to exercise your data rights.
            </p>
            <button 
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105"
            >
              Contact Privacy Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;