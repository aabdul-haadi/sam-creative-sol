import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "SAM CREATIVE transformed our vision into reality. Their attention to detail and innovative approach exceeded all expectations. The AI automation they implemented saved us 40% in operational costs."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, EcoSolutions",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Working with SAM CREATIVE was a game-changer for our business. Their SEO strategy increased our organic traffic by 300% within 6 months. Simply outstanding!"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director, Fashion Hub",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The e-commerce platform they built for us is incredibly user-friendly and conversion-focused. Sales increased by 250% in the first quarter. Highly recommend their services!"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "CTO, DataFlow Systems",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Their SaaS development expertise is unmatched. They delivered a complex analytics platform that perfectly scales with our growing user base. Professional and reliable team."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-yellow-600">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our work.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-yellow-400/30" />
                      <p className="text-gray-700 text-lg leading-relaxed pl-6">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-yellow-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-black/80 mb-6">
              Let's discuss how we can help transform your business with our proven solutions.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;