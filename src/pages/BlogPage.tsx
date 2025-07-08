import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';

interface BlogPageProps {
  setCurrentPage?: (page: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Web Development: Trends to Watch in 2025",
      excerpt: "Discover how artificial intelligence is revolutionizing web development and what trends will shape the industry in 2025.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "AI & Technology",
      readTime: "8 min read",
      featured: true,
      slug: "future-ai-web-development-2025"
    },
    {
      id: 2,
      title: "Complete Guide to E-commerce SEO: Boost Your Online Store Rankings",
      excerpt: "Learn proven strategies to improve your e-commerce website's search engine rankings and drive more organic traffic.",
      image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Chen",
      date: "March 12, 2024",
      category: "SEO & Marketing",
      readTime: "12 min read",
      featured: true,
      slug: "ecommerce-seo-guide"
    },
    {
      id: 3,
      title: "Building Scalable SaaS Applications: Best Practices and Architecture",
      excerpt: "Essential guidelines for developing robust, scalable SaaS applications that can grow with your business.",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "David Rodriguez",
      date: "March 10, 2024",
      category: "Development",
      readTime: "10 min read",
      featured: false,
      slug: "scalable-saas-applications"
    },
    {
      id: 4,
      title: "UI/UX Design Trends That Will Dominate 2025",
      excerpt: "Explore the latest design trends and how to implement them in your next project for maximum user engagement.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Emily Watson",
      date: "March 8, 2024",
      category: "Design",
      readTime: "6 min read",
      featured: false,
      slug: "ui-ux-design-trends-2025"
    },
    {
      id: 5,
      title: "Implementing AI Chatbots: A Step-by-Step Business Guide",
      excerpt: "Everything you need to know about implementing AI chatbots to improve customer service and reduce operational costs.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Alex Thompson",
      date: "March 5, 2024",
      category: "AI & Technology",
      readTime: "9 min read",
      featured: true,
      slug: "implementing-ai-chatbots"
    },
    {
      id: 6,
      title: "Mobile-First Design: Why It's Critical for Modern Websites",
      excerpt: "Understanding the importance of mobile-first design and how to implement it effectively for better user experience.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Lisa Park",
      date: "March 3, 2024",
      category: "Development",
      readTime: "7 min read",
      featured: true,
      slug: "mobile-first-design"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'AI & Technology', label: 'AI & Technology', count: blogPosts.filter(post => post.category === 'AI & Technology').length },
    { id: 'Development', label: 'Development', count: blogPosts.filter(post => post.category === 'Development').length },
    { id: 'Design', label: 'Design', count: blogPosts.filter(post => post.category === 'Design').length },
    { id: 'SEO & Marketing', label: 'SEO & Marketing', count: blogPosts.filter(post => post.category === 'SEO & Marketing').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handlePostClick = (slug: string) => {
    if (setCurrentPage) {
      setCurrentPage(slug);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
       <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Insights & <span className="text-yellow-400">Expertise</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Stay ahead with the latest trends, insights, and expert knowledge in web development, 
            AI technology, and digital innovation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, topics, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-lg text-white placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </section>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category.label}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {featuredPosts.slice(0, 2).map((post) => (
                <article 
                  key={post.id}
                  className="group cursor-pointer"
                  onClick={() => handlePostClick(post.slug)}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-6 right-6">
                      <div className="flex items-center space-x-2 text-white">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700 transition-colors">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...featuredPosts.slice(2), ...regularPosts].map((post) => (
              <article 
                key={post.id}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => handlePostClick(post.slug)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center text-yellow-600 font-medium text-sm group-hover:text-yellow-700 transition-colors">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 mb-6">
              <Search className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">No articles found</h3>
            <p className="text-gray-500 mb-8">Try adjusting your search terms or category filter</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <section className="mt-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Latest Insights
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest articles, industry insights, and expert tips delivered directly to your inbox. 
            Join thousands of professionals who trust our content.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border border-gray-200 rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-r-full font-semibold hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;