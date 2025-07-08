import React from 'react';
import { ArrowLeft, FileText, AlertCircle } from 'lucide-react';

interface TermsPageProps {
  setCurrentPage?: (page: string) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ setCurrentPage }) => {
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
              <FileText className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Terms of Service</h1>
              <p className="text-gray-600 mt-2">Last updated: March 15, 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700">
                  Please read these Terms of Service carefully before using our services. By accessing or using our services, you agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using SAM CREATIVE Solutions' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") govern your use of our website located at samcreative-solutions.com (the "Service") operated by SAM CREATIVE Solutions ("us", "we", or "our").
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on SAM CREATIVE Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>attempt to decompile or reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Service Terms</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Project Scope and Deliverables</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All projects will be clearly defined in a separate project agreement or statement of work. The scope, timeline, and deliverables will be mutually agreed upon before project commencement.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Payment Terms</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Payment schedules will be outlined in individual project agreements</li>
                <li>Late payments may incur additional fees as specified in the project agreement</li>
                <li>All prices are subject to applicable taxes</li>
                <li>Refunds are handled on a case-by-case basis as outlined in our refund policy</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Client Responsibilities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients are responsible for providing necessary materials, feedback, and approvals in a timely manner. Delays caused by client non-responsiveness may result in project timeline adjustments and additional costs.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon full payment, clients will own the rights to the final deliverables as specified in the project agreement. SAM CREATIVE Solutions retains the right to showcase completed work in our portfolio unless otherwise agreed upon.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any pre-existing intellectual property, tools, or methodologies used by SAM CREATIVE Solutions remain our property. Third-party assets used in projects are subject to their respective licenses.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Privacy and Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to protecting your privacy and personal data. Our data handling practices are detailed in our Privacy Policy, which forms an integral part of these Terms of Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our systems.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall SAM CREATIVE Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate services with written notice as specified in individual project agreements. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>All outstanding payments become immediately due</li>
                <li>Work completed to date will be delivered upon payment</li>
                <li>Confidential information must be returned or destroyed</li>
                <li>Both parties are released from future obligations under the agreement</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                SAM CREATIVE Solutions reserves the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We will notify users of any material changes to these terms through our website or via email to registered users.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>SAM CREATIVE Solutions</strong></p>
                <p className="text-gray-700 mb-2">Email: legal@samcreative-solutions.com</p>
                <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-700">Address: [Your Business Address]</p>
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions About Our Terms?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help clarify any questions you may have about our terms of service.
            </p>
            <button 
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105"
            >
              Contact Legal Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;