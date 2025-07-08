import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Globe, Bot } from 'lucide-react';

const Stats: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: 150,
      label: "Projects Completed",
      suffix: "+"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: 98,
      label: "Satisfied Clients",
      suffix: "%"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: 25,
      label: "Industries Served",
      suffix: "+"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      number: 50,
      label: "AI Workflows Built",
      suffix: "+"
    }
  ];

  const AnimatedCounter: React.FC<{ target: number; duration: number }> = ({ target, duration }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!hasAnimated) return;

      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCurrent(target);
          clearInterval(timer);
        } else {
          setCurrent(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [hasAnimated, target, duration]);

    return <span>{current}</span>;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            The Numbers <span className="text-yellow-400">Speak</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our track record of success speaks for itself
          </p>
        </div>

        <div ref={statsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-yellow-400/30 transition-all duration-300 transform group-hover:scale-110">
                <div className="text-black">{stat.icon}</div>
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                <AnimatedCounter target={stat.number} duration={2000} />
                <span className="text-yellow-400">{stat.suffix}</span>
              </div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-2xl p-8 max-w-4xl mx-auto border border-yellow-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's create something extraordinary together. Your vision, our expertise.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;