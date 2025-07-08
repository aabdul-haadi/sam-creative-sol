import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, Tag, Smartphone, Monitor, Tablet, Zap, TrendingUp, Users } from 'lucide-react';
import FAQ from '../components/FAQ';

interface BlogPostProps {
  setCurrentPage?: (page: string) => void;
}

const MobileFirstDesign: React.FC<BlogPostProps> = ({ setCurrentPage }) => {
  const blogPost = {
    title: "Mobile-First Design: Why It's Critical for Modern Websites",
    author: "Lisa Park",
    date: "March 3, 2024",
    readTime: "7 min read",
    category: "Development",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "Understanding the importance of mobile-first design and how to implement it effectively for better user experience and search rankings.",
    tags: ['Mobile Design', 'Responsive Web Design', 'User Experience', 'Web Development', 'SEO', 'Performance']
  };

  const tableOfContents = [
    { id: "introduction", title: "The Mobile Revolution" },
    { id: "what-is-mobile-first", title: "What is Mobile-First Design?" },
    { id: "why-mobile-first", title: "Why Mobile-First is Critical" },
    { id: "benefits", title: "Key Benefits of Mobile-First Approach" },
    { id: "implementation", title: "How to Implement Mobile-First Design" },
    { id: "best-practices", title: "Mobile-First Best Practices" },
    { id: "common-mistakes", title: "Common Mistakes to Avoid" },
    { id: "tools-frameworks", title: "Tools and Frameworks" },
    { id: "future", title: "The Future of Mobile-First Design" }
  ];

  const handleBackToBlog = () => {
    if (setCurrentPage) {
      setCurrentPage('blog');
    }
  };

  return (
    <article className="min-h-screen bg-white pt-20">
      <header className="bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="container mx-auto px-4 py-12">
          <button 
            onClick={handleBackToBlog}
            className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold">
                {blogPost.category}
              </span>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{blogPost.date}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-3">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-yellow-600 transition-colors py-1 border-l-2 border-transparent hover:border-yellow-400 pl-3"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border">
                <h4 className="font-bold text-gray-900 mb-4">Share this article</h4>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <div className="mb-12">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Mobile Revolution</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We're living in a mobile-first world. With over 6.8 billion smartphone users globally and mobile devices accounting for more than 54% of all web traffic, the way we approach web design has fundamentally changed. Gone are the days when mobile was an afterthought—today, it's the primary consideration.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Mobile Usage Statistics</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-blue-700">
                      <li>• 54.8% of global web traffic comes from mobile devices</li>
                      <li>• 92.3% of internet users access the web via mobile</li>
                      <li>• Mobile commerce accounts for 72.9% of e-commerce sales</li>
                    </ul>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Users spend 88% of mobile time in apps</li>
                      <li>• 53% of users abandon sites that take over 3 seconds to load</li>
                      <li>• Google uses mobile-first indexing for all websites</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  This shift isn't just about numbers—it represents a fundamental change in user behavior and expectations. Users expect websites to work flawlessly on their mobile devices, and businesses that fail to deliver risk losing customers, search rankings, and revenue.
                </p>
              </section>

              <section id="what-is-mobile-first" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Mobile-First Design?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Mobile-first design is a design philosophy that prioritizes the mobile experience during the website development process. Instead of designing for desktop and then adapting for mobile (responsive design), mobile-first design starts with the smallest screen and progressively enhances the experience for larger screens.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mobile-First vs. Responsive Design</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-red-800 mb-3">Traditional Responsive Design</h4>
                    <div className="flex items-center space-x-3 mb-3">
                      <Monitor className="w-6 h-6 text-red-600" />
                      <span className="text-red-700 font-medium">Desktop First</span>
                    </div>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li>• Design starts with desktop layout</li>
                      <li>• Mobile is an adaptation/reduction</li>
                      <li>• Often results in compromised mobile UX</li>
                      <li>• Larger file sizes for mobile users</li>
                      <li>• Performance issues on mobile devices</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Mobile-First Design</h4>
                    <div className="flex items-center space-x-3 mb-3">
                      <Smartphone className="w-6 h-6 text-green-600" />
                      <span className="text-green-700 font-medium">Mobile First</span>
                    </div>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li>• Design starts with mobile constraints</li>
                      <li>• Desktop is an enhancement</li>
                      <li>• Optimized mobile experience</li>
                      <li>• Faster loading on mobile devices</li>
                      <li>• Better performance across all devices</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Progressive Enhancement Approach</h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-center space-x-8 mb-6">
                    <div className="text-center">
                      <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-800">Mobile</div>
                      <div className="text-xs text-gray-600">Core Experience</div>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="text-center">
                      <Tablet className="w-12 h-12 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-800">Tablet</div>
                      <div className="text-xs text-gray-600">Enhanced Features</div>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="text-center">
                      <Monitor className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-medium text-gray-800">Desktop</div>
                      <div className="text-xs text-gray-600">Full Experience</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-center">
                    Start with essential functionality for mobile, then progressively add features and enhancements for larger screens.
                  </p>
                </div>
              </section>

              <section id="why-mobile-first" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Mobile-First is Critical</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The importance of mobile-first design extends far beyond user preferences. It impacts search rankings, business performance, and long-term success in the digital marketplace.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Google's Mobile-First Indexing</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-3">What This Means for Your Website</h4>
                  <p className="text-yellow-700 mb-4">
                    Since 2021, Google primarily uses the mobile version of your website for indexing and ranking. This means:
                  </p>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Google crawls your mobile site first</li>
                    <li>• Mobile content determines your search rankings</li>
                    <li>• Poor mobile experience = poor search visibility</li>
                    <li>• Mobile page speed directly affects SEO</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Impact</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                    <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-blue-800 mb-2">Conversion Rates</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">+64%</div>
                    <p className="text-blue-700 text-sm">Higher conversion rates on mobile-optimized sites</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <Zap className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-green-800 mb-2">Page Speed</h4>
                    <div className="text-2xl font-bold text-green-600 mb-2">2x</div>
                    <p className="text-green-700 text-sm">Faster loading times with mobile-first approach</p>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
                    <Users className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-purple-800 mb-2">User Engagement</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-2">+40%</div>
                    <p className="text-purple-700 text-sm">Increase in time spent on mobile-optimized sites</p>
                  </div>
                </div>

                <blockquote className="bg-gray-50 border-l-4 border-yellow-400 p-6 my-8 italic text-gray-800">
                  "A 1-second delay in mobile page load time can impact conversion rates by up to 20%. Mobile-first design isn't just about user experience—it's about business survival."
                </blockquote>
              </section>

              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits of Mobile-First Approach</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Adopting a mobile-first design strategy delivers tangible benefits across multiple dimensions of web development and business performance.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Performance</h3>
                    <p className="text-gray-700 mb-3">Mobile-first design naturally leads to better performance across all devices.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Smaller file sizes and optimized assets</li>
                      <li>• Faster loading times on all devices</li>
                      <li>• Reduced bandwidth usage</li>
                      <li>• Better Core Web Vitals scores</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-400 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Improved User Experience</h3>
                    <p className="text-gray-700 mb-3">Users get a consistent, optimized experience regardless of their device.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Touch-friendly interface design</li>
                      <li>• Intuitive navigation patterns</li>
                      <li>• Readable typography on small screens</li>
                      <li>• Accessible design by default</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Better SEO Performance</h3>
                    <p className="text-gray-700 mb-3">Mobile-first design aligns with Google's ranking factors and indexing preferences.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Higher search engine rankings</li>
                      <li>• Improved mobile usability scores</li>
                      <li>• Better page experience signals</li>
                      <li>• Increased organic traffic</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost-Effective Development</h3>
                    <p className="text-gray-700 mb-3">Starting mobile-first often results in more efficient development processes.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Reduced development time</li>
                      <li>• Lower maintenance costs</li>
                      <li>• Fewer cross-device compatibility issues</li>
                      <li>• Streamlined testing processes</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="implementation" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Implement Mobile-First Design</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Implementing mobile-first design requires a strategic approach that considers content hierarchy, user interactions, and technical constraints from the smallest screen up.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Implementation Process</h3>
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <h4 className="text-xl font-semibold text-blue-800">Content Strategy and Prioritization</h4>
                    </div>
                    <p className="text-blue-700 mb-4">Start by identifying the most critical content and functionality for mobile users.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-blue-800 mb-2">Content Audit</h5>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Identify essential vs. nice-to-have content</li>
                          <li>• Prioritize based on user goals</li>
                          <li>• Consider mobile context of use</li>
                          <li>• Simplify complex information</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-800 mb-2">Functionality Focus</h5>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Core user tasks and flows</li>
                          <li>• Essential interactive elements</li>
                          <li>• Critical conversion points</li>
                          <li>• Emergency or urgent actions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <h4 className="text-xl font-semibold text-green-800">Design for Touch and Small Screens</h4>
                    </div>
                    <p className="text-green-700 mb-4">Create interfaces optimized for touch interaction and limited screen real estate.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-green-800 mb-2">Touch Targets</h5>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Minimum 44px touch target size</li>
                          <li>• Adequate spacing between elements</li>
                          <li>• Thumb-friendly navigation placement</li>
                          <li>• Clear visual feedback for interactions</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-800 mb-2">Visual Design</h5>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Large, readable typography (16px minimum)</li>
                          <li>• High contrast for readability</li>
                          <li>• Simplified navigation patterns</li>
                          <li>• Generous white space usage</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <h4 className="text-xl font-semibold text-purple-800">Progressive Enhancement with CSS</h4>
                    </div>
                    <p className="text-purple-700 mb-4">Use CSS media queries to enhance the experience for larger screens.</p>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <pre className="text-green-400 text-sm overflow-x-auto">
{`/* Mobile-first CSS approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet enhancement */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
  }
}

/* Desktop enhancement */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 2rem;
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              <section id="best-practices" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Mobile-First Best Practices</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Follow these proven best practices to ensure your mobile-first design delivers optimal results across all devices and use cases.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-4">Performance Optimization</h3>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li>• Optimize images with WebP format and lazy loading</li>
                        <li>• Minimize HTTP requests and file sizes</li>
                        <li>• Use critical CSS for above-the-fold content</li>
                        <li>• Implement service workers for offline functionality</li>
                        <li>• Compress and minify all assets</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-4">Navigation Design</h3>
                      <ul className="space-y-2 text-green-700 text-sm">
                        <li>• Use hamburger menus judiciously</li>
                        <li>• Implement bottom navigation for key actions</li>
                        <li>• Provide clear breadcrumbs and back buttons</li>
                        <li>• Use sticky navigation for important elements</li>
                        <li>• Design for one-handed use</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-purple-800 mb-4">Content Strategy</h3>
                      <ul className="space-y-2 text-purple-700 text-sm">
                        <li>• Write concise, scannable content</li>
                        <li>• Use progressive disclosure for complex information</li>
                        <li>• Prioritize above-the-fold content</li>
                        <li>• Implement expandable sections for details</li>
                        <li>• Use bullet points and short paragraphs</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-yellow-800 mb-4">Form Design</h3>
                      <ul className="space-y-2 text-yellow-700 text-sm">
                        <li>• Use appropriate input types for mobile keyboards</li>
                        <li>• Implement autofill and autocomplete</li>
                        <li>• Minimize required fields</li>
                        <li>• Provide clear error messages and validation</li>
                        <li>• Use large, touch-friendly form controls</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Testing and Validation</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Device Testing</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Test on real devices</li>
                        <li>• Use browser dev tools</li>
                        <li>• Check various screen sizes</li>
                        <li>• Test different orientations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Performance Testing</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Google PageSpeed Insights</li>
                        <li>• Lighthouse audits</li>
                        <li>• WebPageTest analysis</li>
                        <li>• Core Web Vitals monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Usability Testing</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• User testing sessions</li>
                        <li>• A/B testing variations</li>
                        <li>• Analytics review</li>
                        <li>• Accessibility audits</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="common-mistakes" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Learn from common pitfalls that can undermine your mobile-first design efforts and negatively impact user experience.
                </p>

                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Hiding Important Content on Mobile</h3>
                    <p className="text-red-700 mb-3">
                      Don't hide crucial information or functionality just because you're on a smaller screen. Users expect access to the same core features regardless of device.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Better Approach:</h4>
                      <p className="text-red-700 text-sm">Use progressive disclosure, collapsible sections, or tabbed interfaces to organize content without hiding it completely.</p>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Ignoring Touch Target Sizes</h3>
                    <p className="text-red-700 mb-3">
                      Small buttons and links that are difficult to tap accurately create frustration and accessibility issues.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Better Approach:</h4>
                      <p className="text-red-700 text-sm">Ensure all interactive elements are at least 44px in size with adequate spacing between them.</p>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Overusing Hamburger Menus</h3>
                    <p className="text-red-700 mb-3">
                      While hamburger menus save space, they can hide important navigation and reduce discoverability of key features.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Better Approach:</h4>
                      <p className="text-red-700 text-sm">Use bottom navigation bars for primary actions and reserve hamburger menus for secondary navigation.</p>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Neglecting Performance on Mobile</h3>
                    <p className="text-red-700 mb-3">
                      Loading large images and heavy scripts can severely impact mobile performance, especially on slower connections.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Better Approach:</h4>
                      <p className="text-red-700 text-sm">Implement responsive images, lazy loading, and progressive enhancement to optimize performance.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="tools-frameworks" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools and Frameworks</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Leverage these tools and frameworks to streamline your mobile-first development process and ensure consistent results.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">CSS Frameworks</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">Tailwind CSS</h4>
                        <p className="text-blue-700 text-sm">Utility-first framework with mobile-first responsive design built-in</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">Bootstrap</h4>
                        <p className="text-blue-700 text-sm">Mobile-first grid system and responsive components</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-1">Bulma</h4>
                        <p className="text-blue-700 text-sm">Modern CSS framework based on Flexbox with mobile-first approach</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-4">Testing Tools</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">Chrome DevTools</h4>
                        <p className="text-green-700 text-sm">Device simulation and responsive design testing</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">BrowserStack</h4>
                        <p className="text-green-700 text-sm">Real device testing across multiple platforms</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">Lighthouse</h4>
                        <p className="text-green-700 text-sm">Performance and mobile usability auditing</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Development Workflow</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                      <h4 className="font-semibold text-gray-800 mb-2">Design</h4>
                      <p className="text-gray-600 text-sm">Start with mobile wireframes and prototypes</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                      <h4 className="font-semibold text-gray-800 mb-2">Develop</h4>
                      <p className="text-gray-600 text-sm">Code mobile styles first, then enhance</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                      <h4 className="font-semibold text-gray-800 mb-2">Test</h4>
                      <p className="text-gray-600 text-sm">Validate on real devices and various screen sizes</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                      <h4 className="font-semibold text-gray-800 mb-2">Optimize</h4>
                      <p className="text-gray-600 text-sm">Monitor performance and iterate based on data</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="future" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Future of Mobile-First Design</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  As technology continues to evolve, mobile-first design principles are adapting to new devices, interaction methods, and user expectations.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Emerging Trends</h3>
                <div className="space-y-6 mb-8">
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Voice and Gesture Interfaces</h4>
                    <p className="text-gray-700 mb-3">Integration of voice commands and gesture controls in mobile-first designs.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Voice navigation and search capabilities</li>
                      <li>• Gesture-based interactions for accessibility</li>
                      <li>• Hands-free operation modes</li>
                      <li>• Multi-modal interaction design</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Foldable and Flexible Displays</h4>
                    <p className="text-gray-700 mb-3">Adapting mobile-first principles for new form factors and screen technologies.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Responsive design for foldable screens</li>
                      <li>• Adaptive layouts for changing screen sizes</li>
                      <li>• Multi-screen continuity experiences</li>
                      <li>• Flexible content presentation</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Personalization</h4>
                    <p className="text-gray-700 mb-3">Using artificial intelligence to create truly personalized mobile experiences.</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Adaptive interfaces based on usage patterns</li>
                      <li>• Predictive content loading</li>
                      <li>• Contextual feature recommendations</li>
                      <li>• Intelligent performance optimization</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900 text-white rounded-xl p-8">
                  <h4 className="text-2xl font-bold mb-4 text-yellow-400">Preparing for the Future</h4>
                  <p className="text-gray-300 mb-6">
                    The principles of mobile-first design—prioritizing performance, accessibility, and user-centered design—will remain relevant as technology evolves. The key is to stay flexible and continue putting user needs first.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-yellow-400 mb-2">Stay Current</h5>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Follow web standards and best practices</li>
                        <li>• Monitor emerging technologies</li>
                        <li>• Test on new devices and browsers</li>
                        <li>• Participate in design communities</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-400 mb-2">Focus on Fundamentals</h5>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Prioritize performance and accessibility</li>
                        <li>• Design for diverse users and contexts</li>
                        <li>• Maintain progressive enhancement approach</li>
                        <li>• Measure and optimize continuously</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-6">
                <Tag className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 font-medium">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {blogPost.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-yellow-100 hover:text-yellow-800 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt={blogPost.author}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{blogPost.author}</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Lisa is a senior UX/UI designer and front-end developer with over 8 years of experience creating mobile-first digital experiences. She specializes in responsive design, performance optimization, and accessibility, helping businesses create websites that work beautifully across all devices.
                  </p>
                  <div className="flex space-x-4">
                    <button className="text-yellow-600 hover:text-yellow-700 transition-colors font-medium">
                      Follow on Twitter
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-700 transition-colors font-medium">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <FAQ 
                title="Mobile-First Design FAQ"
                subtitle="Common questions about implementing mobile-first design strategies"
                items={[
                  {
                    question: "What's the difference between mobile-first and responsive design?",
                    answer: "Mobile-first design starts with the mobile experience and progressively enhances for larger screens, while traditional responsive design starts with desktop and adapts down. Mobile-first typically results in better performance and user experience on mobile devices."
                  },
                  {
                    question: "How do I convince stakeholders to adopt mobile-first design?",
                    answer: "Present data showing mobile traffic percentages, Google's mobile-first indexing impact on SEO, and case studies demonstrating improved conversion rates and user engagement from mobile-optimized sites."
                  },
                  {
                    question: "Should I hide content on mobile to save space?",
                    answer: "Generally no. Instead of hiding content, use progressive disclosure techniques like collapsible sections, tabs, or accordion interfaces to organize information without completely removing access to it."
                  },
                  {
                    question: "How do I test mobile-first designs effectively?",
                    answer: "Use a combination of browser developer tools, real device testing, and automated testing tools. Test on various screen sizes, different network conditions, and with actual users to validate your design decisions."
                  },
                  {
                    question: "What are the most important mobile-first design principles?",
                    answer: "Key principles include: content prioritization, touch-friendly interface design, performance optimization, progressive enhancement, and ensuring accessibility across all devices and interaction methods."
                  }
                ]}
              />
            </div>
          </main>
        </div>
      </div>
    </article>
  );
};

export default MobileFirstDesign;