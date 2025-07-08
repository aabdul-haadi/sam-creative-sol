import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, Tag, TrendingUp, Search, Target } from 'lucide-react';
import FAQ from '../components/FAQ';

interface BlogPostProps {
  setCurrentPage?: (page: string) => void;
}

const EcommerceSEOGuide: React.FC<BlogPostProps> = ({ setCurrentPage }) => {
  const blogPost = {
    title: "Complete Guide to E-commerce SEO: Boost Your Online Store Rankings",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "12 min read",
    category: "SEO & Marketing",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1200",
    excerpt: "Learn proven strategies to improve your e-commerce website's search engine rankings and drive more organic traffic to your online store.",
    tags: ['E-commerce SEO', 'Online Store', 'Search Rankings', 'Organic Traffic', 'Product Optimization', 'Conversion Rate']
  };

  const tableOfContents = [
    { id: "introduction", title: "Why E-commerce SEO Matters" },
    { id: "keyword-research", title: "E-commerce Keyword Research Strategy" },
    { id: "product-optimization", title: "Product Page Optimization" },
    { id: "category-pages", title: "Category Page SEO" },
    { id: "technical-seo", title: "Technical SEO for E-commerce" },
    { id: "content-strategy", title: "Content Marketing Strategy" },
    { id: "local-seo", title: "Local SEO for E-commerce" },
    { id: "measuring-success", title: "Measuring SEO Success" }
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why E-commerce SEO Matters</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  E-commerce SEO is the foundation of sustainable online business growth. With over 2.14 billion people expected to buy goods and services online in 2024, the competition for visibility in search results has never been more intense. Unlike traditional retail, where location determines foot traffic, e-commerce success depends entirely on your ability to be found online.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">The E-commerce SEO Advantage</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• 68% of online experiences begin with a search engine</li>
                    <li>• Organic search drives 53% of all website traffic</li>
                    <li>• SEO leads have a 14.6% close rate vs 1.7% for outbound leads</li>
                    <li>• 75% of users never scroll past the first page of search results</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  This comprehensive guide will walk you through proven strategies to optimize your e-commerce website for search engines, increase organic traffic, and ultimately drive more sales.
                </p>
              </section>

              <section id="keyword-research" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">E-commerce Keyword Research Strategy</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Effective keyword research is the cornerstone of successful e-commerce SEO. Unlike content websites, e-commerce sites need to balance informational and transactional keywords to capture users at different stages of the buying journey.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Types of E-commerce Keywords</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Product Keywords</h4>
                    <p className="text-green-700 text-sm mb-3">Direct product searches with high purchase intent</p>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• "iPhone 15 Pro Max"</li>
                      <li>• "Nike Air Jordan 1"</li>
                      <li>• "Samsung 4K TV"</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-yellow-800 mb-3">Category Keywords</h4>
                    <p className="text-yellow-700 text-sm mb-3">Broader searches for product categories</p>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• "running shoes"</li>
                      <li>• "wireless headphones"</li>
                      <li>• "gaming laptops"</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Long-tail Keywords</h4>
                    <p className="text-blue-700 text-sm mb-3">Specific searches with lower competition</p>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• "best wireless earbuds under $100"</li>
                      <li>• "waterproof hiking boots women"</li>
                      <li>• "organic cotton baby clothes"</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Keyword Research Tools and Techniques</h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Essential Tools for E-commerce Keyword Research</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Free Tools</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Google Keyword Planner</li>
                        <li>• Google Search Console</li>
                        <li>• Google Trends</li>
                        <li>• Answer The Public</li>
                        <li>• Ubersuggest (limited free version)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Premium Tools</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• SEMrush</li>
                        <li>• Ahrefs</li>
                        <li>• Moz Keyword Explorer</li>
                        <li>• KWFinder</li>
                        <li>• Serpstat</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="product-optimization" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Page Optimization</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Product pages are the heart of your e-commerce SEO strategy. These pages need to rank well for product-specific keywords while providing an excellent user experience that converts visitors into customers.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Essential Product Page Elements</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Optimized Product Titles</h4>
                    <p className="text-gray-700 mb-3">Your product title should include the primary keyword while remaining natural and descriptive.</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-medium mb-2">Good Example:</p>
                      <p className="text-green-700">"Apple iPhone 15 Pro Max 256GB - Natural Titanium | Unlocked"</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Compelling Product Descriptions</h4>
                    <p className="text-gray-700 mb-3">Write unique, detailed descriptions that include relevant keywords naturally while highlighting benefits and features.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Include primary and secondary keywords</li>
                      <li>• Focus on benefits, not just features</li>
                      <li>• Use bullet points for easy scanning</li>
                      <li>• Include technical specifications</li>
                      <li>• Address common customer questions</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">High-Quality Product Images</h4>
                    <p className="text-gray-700 mb-3">Optimize images for both user experience and search engines.</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Use descriptive file names (e.g., "red-nike-air-max-running-shoes.jpg")</li>
                      <li>• Include alt text with relevant keywords</li>
                      <li>• Compress images for fast loading</li>
                      <li>• Use multiple angles and zoom functionality</li>
                      <li>• Include lifestyle and context images</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Product Schema Markup</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Implement structured data to help search engines understand your products and display rich snippets in search results.
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Essential Schema Properties</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                    <li>• Product name</li>
                    <li>• Price and currency</li>
                    <li>• Availability status</li>
                    <li>• Product images</li>
                    <li>• Brand information</li>
                    <li>• Product reviews and ratings</li>
                    <li>• SKU and product ID</li>
                    <li>• Product description</li>
                  </ul>
                </div>
              </section>

              <section id="category-pages" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Category Page SEO</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Category pages are crucial for capturing broader search terms and helping users navigate your product catalog. Well-optimized category pages can rank for competitive keywords and drive significant organic traffic.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Category Page Optimization Strategies</h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Unique Category Descriptions</h4>
                    <p className="text-blue-700 mb-3">Write compelling, keyword-rich descriptions for each category that provide value to users.</p>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Include primary category keywords</li>
                      <li>• Explain what makes your products unique</li>
                      <li>• Provide buying guides and tips</li>
                      <li>• Include related keywords naturally</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Faceted Navigation Optimization</h4>
                    <p className="text-green-700 mb-3">Implement SEO-friendly filtering and sorting options.</p>
                    <ul className="space-y-1 text-green-700">
                      <li>• Use canonical tags for filtered pages</li>
                      <li>• Implement proper URL structure</li>
                      <li>• Create SEO-friendly filter combinations</li>
                      <li>• Use noindex for thin content pages</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-yellow-800 mb-3">Internal Linking Strategy</h4>
                    <p className="text-yellow-700 mb-3">Create a logical linking structure between categories and products.</p>
                    <ul className="space-y-1 text-yellow-700">
                      <li>• Link to related categories</li>
                      <li>• Feature popular products</li>
                      <li>• Create breadcrumb navigation</li>
                      <li>• Use descriptive anchor text</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="technical-seo" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical SEO for E-commerce</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Technical SEO forms the foundation of your e-commerce site's search performance. Poor technical implementation can prevent even the best content from ranking well.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Core Technical SEO Elements</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2">Site Speed Optimization</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Optimize images and videos</li>
                        <li>• Minimize HTTP requests</li>
                        <li>• Use CDN for global delivery</li>
                        <li>• Enable browser caching</li>
                        <li>• Minify CSS and JavaScript</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Mobile Optimization</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Responsive design implementation</li>
                        <li>• Touch-friendly navigation</li>
                        <li>• Fast mobile loading times</li>
                        <li>• Mobile-specific features</li>
                        <li>• AMP for product pages</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">URL Structure</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Clean, descriptive URLs</li>
                        <li>• Logical hierarchy</li>
                        <li>• Avoid dynamic parameters</li>
                        <li>• Use hyphens for word separation</li>
                        <li>• Include relevant keywords</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">HTTPS and Security</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• SSL certificate implementation</li>
                        <li>• Secure payment processing</li>
                        <li>• Regular security updates</li>
                        <li>• Trust signals and badges</li>
                        <li>• Privacy policy compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">E-commerce Specific Technical Issues</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-4">Common Technical Challenges</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-yellow-800 mb-2">Duplicate Content</h5>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• Product variations creating duplicates</li>
                        <li>• Manufacturer descriptions</li>
                        <li>• Pagination issues</li>
                        <li>• Session IDs in URLs</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-800 mb-2">Solutions</h5>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• Canonical tag implementation</li>
                        <li>• Unique product descriptions</li>
                        <li>• Proper pagination markup</li>
                        <li>• Clean URL parameters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="content-strategy" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Content Marketing Strategy</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Content marketing helps e-commerce sites capture informational search queries and build authority in their niche. A well-executed content strategy can significantly increase organic traffic and support the entire customer journey.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Types of E-commerce Content</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Educational Content</h4>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• How-to guides and tutorials</li>
                        <li>• Product comparison articles</li>
                        <li>• Industry trend analysis</li>
                        <li>• Problem-solving content</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Product-Focused Content</h4>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Detailed product reviews</li>
                        <li>• Unboxing and demo videos</li>
                        <li>• Product use cases</li>
                        <li>• Customer success stories</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Lifestyle Content</h4>
                      <ul className="text-purple-700 text-sm space-y-1">
                        <li>• Brand storytelling</li>
                        <li>• Behind-the-scenes content</li>
                        <li>• User-generated content</li>
                        <li>• Seasonal and trending topics</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-2">Support Content</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• FAQ pages</li>
                        <li>• Troubleshooting guides</li>
                        <li>• Size guides and charts</li>
                        <li>• Return and shipping policies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <blockquote className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 italic text-gray-800">
                  "Content marketing costs 62% less than traditional marketing and generates more than 3 times as many leads. For e-commerce businesses, quality content is the bridge between discovery and purchase."
                </blockquote>
              </section>

              <section id="local-seo" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Local SEO for E-commerce</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Even purely online businesses can benefit from local SEO, especially if they serve specific geographic markets or have physical locations. Local SEO helps capture "near me" searches and builds trust with local customers.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-green-800 mb-4">Local SEO Strategies</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• Create Google My Business profile</li>
                      <li>• Optimize for local keywords</li>
                      <li>• Build local citations</li>
                      <li>• Encourage customer reviews</li>
                      <li>• Create location-specific content</li>
                      <li>• Partner with local businesses</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Local Content Ideas</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Local event sponsorships</li>
                      <li>• Community involvement stories</li>
                      <li>• Local customer spotlights</li>
                      <li>• Regional product preferences</li>
                      <li>• Local shipping and delivery info</li>
                      <li>• Area-specific promotions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="measuring-success" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Measuring SEO Success</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tracking the right metrics is crucial for understanding the impact of your SEO efforts and making data-driven decisions for optimization.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key E-commerce SEO Metrics</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                    <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-blue-800 mb-2">Traffic Metrics</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Organic traffic growth</li>
                      <li>• Keyword rankings</li>
                      <li>• Click-through rates</li>
                      <li>• Impressions and visibility</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-green-800 mb-2">Conversion Metrics</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Organic conversion rate</li>
                      <li>• Revenue from organic traffic</li>
                      <li>• Average order value</li>
                      <li>• Customer lifetime value</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                    <Search className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-purple-800 mb-2">Technical Metrics</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• Page load speed</li>
                      <li>• Core Web Vitals</li>
                      <li>• Crawl errors</li>
                      <li>• Index coverage</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">SEO Success Timeline</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">1-3 Months</div>
                      <h4 className="font-semibold text-gray-800 mb-2">Foundation Building</h4>
                      <p className="text-gray-700 text-sm">Technical fixes, content optimization, initial ranking improvements</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">3-6 Months</div>
                      <h4 className="font-semibold text-gray-800 mb-2">Growth Phase</h4>
                      <p className="text-gray-700 text-sm">Significant traffic increases, better rankings, improved conversions</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">6+ Months</div>
                      <h4 className="font-semibold text-gray-800 mb-2">Optimization</h4>
                      <p className="text-gray-700 text-sm">Sustained growth, competitive rankings, maximum ROI</p>
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
                  src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt={blogPost.author}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{blogPost.author}</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Michael is a digital marketing strategist with over 10 years of experience in e-commerce SEO. 
                    He has helped hundreds of online stores increase their organic traffic and revenue through 
                    data-driven SEO strategies and conversion optimization techniques.
                  </p>
                  <div className="flex space-x-4">
                    <button className="text-yellow-600 hover:text-yellow-700 transition-colors font-medium">
                      Follow on LinkedIn
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-700 transition-colors font-medium">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <FAQ 
                title="E-commerce SEO Frequently Asked Questions"
                subtitle="Common questions about optimizing online stores for search engines"
                items={[
                  {
                    question: "How long does it take to see results from e-commerce SEO?",
                    answer: "E-commerce SEO typically shows initial results in 3-6 months, with significant improvements visible after 6-12 months. The timeline depends on your site's current state, competition level, and the comprehensiveness of your SEO strategy."
                  },
                  {
                    question: "Should I focus on product pages or category pages for SEO?",
                    answer: "Both are important. Category pages should target broader keywords and help with site navigation, while product pages should target specific product keywords. A balanced approach focusing on both will yield the best results."
                  },
                  {
                    question: "How do I handle duplicate content issues with product variations?",
                    answer: "Use canonical tags to point to the main product page, create unique descriptions for each variation, and consider using noindex for thin content pages. Implement proper URL structure and avoid creating separate pages for minor variations."
                  },
                  {
                    question: "What's the most important ranking factor for e-commerce sites?",
                    answer: "While there's no single most important factor, site speed, mobile optimization, and high-quality, unique content are crucial. User experience signals like bounce rate and time on site also significantly impact rankings."
                  },
                  {
                    question: "How can I compete with large e-commerce sites like Amazon?",
                    answer: "Focus on long-tail keywords, niche markets, superior customer service, unique product offerings, and local SEO. Create detailed, helpful content that large sites often overlook, and build strong relationships with your customers."
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

export default EcommerceSEOGuide;