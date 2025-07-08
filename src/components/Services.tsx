import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  ShoppingCart, 
  Layers, 
  Palette, 
  Video, 
  Box
} from 'lucide-react';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "API Development"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Ecommerce Solutions",
      description: "Complete online stores with payment integration and inventory management",
      features: ["Shopify & WooCommerce", "Payment Gateways", "Inventory Systems", "Mobile Apps"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "SaaS Applications",
      description: "Scalable software solutions for business automation and productivity",
      features: ["Cloud Architecture", "User Management", "Analytics Dashboard", "API Integration"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Designing",
      description: "Visual identity and brand design that captivates your audience",
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Assets"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "2D/3D Animation",
      description: "Engaging animations and motion graphics for digital experiences",
      features: ["Motion Graphics", "3D Modeling", "Video Editing", "Interactive Media"]
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "3D Modeling",
      description: "Professional 3D models and visualizations for any industry",
      features: ["Product Visualization", "Architectural Renders", "Character Design", "VR/AR Assets"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-yellow-600">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business to new heights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6 text-gray-600 group-hover:text-yellow-600 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;