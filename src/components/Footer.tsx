import React from 'react';
import { 
  Mail, 
  Phone, 
   
  Facebook, 
 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  setCurrentPage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const footerLinks = {
    services: [
      'Web Development',
      'E-commerce Solutions',
      'SaaS Applications',
      'Graphic Designing',
      '2D/3D Animation',
      '3D Modeling'
    ],
    company: [
      'About Us',
      // 'Our Team',
      // 'Careers',
      { name: 'Portfolio', page: 'portfolio' },
  
      { name: 'Contact', page: 'contact' }
    ],
    resources: [
      { name: 'Blog', page: 'blog' },
  
      { name: 'Privacy Policy', page: 'privacy' },
      { name: 'Terms of Service', page: 'terms' }
    ],
    legal: [
      { name: 'Privacy Policy', page: 'privacy' },
      { name: 'Terms of Service', page: 'terms' },
      { name: 'FAQ', page: 'faq' },
      'Cookie Policy',
      'Refund Policy',
      'Disclaimer'
    ]
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' }
  ];

  const handleLinkClick = (item: any) => {
    if (typeof item === 'object' && item.page && setCurrentPage) {
      setCurrentPage(item.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
             <div className="w-14 h-16 rounded-full overflow-hidden">
  <img
    src="/logo.png"
    alt="SAM CREATIVE Logo"
    className="w-full h-full object-cover"
  />
</div>

              <div className="flex flex-col">
                <span className="text-2xl font-bold">SAM CREATIVE</span>
                <span className="text-sm text-yellow-400 font-medium -mt-1 tracking-[0.2em]">solutions</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We create premium digital experiences that captivate audiences and drive results. 
              From AI-powered solutions to stunning designs, we're your partner in digital transformation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
<a href="mailto:samcreativeofficials@gmail.com">
  <span className="text-gray-300">samcreativeofficials@gmail.com</span>
</a>
              </div>
              <div className="flex flex-col space-y-2">
  <div className="flex items-center space-x-3">
    <Phone className="w-5 h-5 text-yellow-400" />
    <a 
      href="https://wa.me/923263778850" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-300 hover:underline"
    >
      +92 326 3778850
    </a>
  </div>
  <div className="flex items-center space-x-3">
    <Phone className="w-5 h-5 text-yellow-400" />
    <a 
      href="https://wa.me/923138372573" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-300 hover:underline"
    >
      +92 313 8372573
    </a>
  </div>
</div>

              {/* <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">New York, NY 10001</span>
              </div> */}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {typeof link === 'object' ? (
                    <button 
                      onClick={() => handleLinkClick(link)}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {typeof link === 'object' ? (
                    <button 
                      onClick={() => handleLinkClick(link)}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-r-full hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6 text-sm">
                {footerLinks.legal.slice(0, 3).map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleLinkClick(link)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {typeof link === 'object' ? link.name : link}
                  </button>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                © 2025 SAM CREATIVE Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-black font-semibold">
            Ready to start your next project? 
            <a href="#" className="underline ml-2 hover:no-underline">
              Get a free consultation today!
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;