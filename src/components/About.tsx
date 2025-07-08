import React, { useEffect, useRef } from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    const elements = document.querySelectorAll('.about-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Tailored Solutions",
      description: "Every project is unique. We craft bespoke solutions that perfectly align with your business goals and vision."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Creative Precision",
      description: "Where artistry meets technology. Our designs are not just beautiful—they're strategically crafted for maximum impact."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Scalable Code",
      description: "Built to grow with you. Our development approach ensures your digital assets can evolve with your business."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "Your deadlines are our priorities. We deliver exceptional results on time, every time."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="about-item">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Creating Digital Excellence Since <span className="text-yellow-600">2020</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a premium digital agency specializing in creating extraordinary digital experiences. 
              Our passion lies in transforming ideas into powerful, scalable solutions that drive real business results.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From startups to Fortune 500 companies, we've helped businesses across industries establish 
              their digital presence and achieve sustainable growth through innovative technology and creative excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                Our Story
              </button>
              <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
                Meet The Team
              </button>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="about-item relative">
            <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses with cutting-edge digital solutions that not only meet today's challenges 
                  but anticipate tomorrow's opportunities.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">Our Vision</h3>
                <p className="text-gray-300">
                  To be the global leader in digital innovation, setting new standards for design, 
                  development, and digital strategy.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">150+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">98%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose <span className="text-yellow-600">SAM CREATIVE</span></h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="about-item text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-yellow-400/30 transition-all duration-300">
                  <div className="text-black">{value.icon}</div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;