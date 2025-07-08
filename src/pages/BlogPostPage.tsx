import React from 'react';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, Tag } from 'lucide-react';
import FAQ from '../components/FAQ';

const BlogPostPage: React.FC = () => {
  const blogPost = {
    title: "The Future of AI in Web Development: Trends to Watch in 2024",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: `
      <p>Artificial Intelligence is revolutionizing the web development landscape at an unprecedented pace. As we move through 2024, developers and businesses alike are witnessing transformative changes that are reshaping how we build, deploy, and maintain web applications.</p>

      <h2>The Current State of AI in Web Development</h2>
      <p>Today's web development ecosystem is increasingly powered by AI tools that enhance productivity, improve code quality, and streamline the development process. From intelligent code completion to automated testing, AI is becoming an indispensable part of the developer's toolkit.</p>

      <h3>Key Areas of AI Integration</h3>
      <ul>
        <li><strong>Code Generation:</strong> AI-powered tools like GitHub Copilot and ChatGPT are helping developers write code faster and more efficiently.</li>
        <li><strong>Automated Testing:</strong> Machine learning algorithms can predict potential bugs and generate comprehensive test cases.</li>
        <li><strong>Performance Optimization:</strong> AI analyzes user behavior patterns to optimize website performance automatically.</li>
        <li><strong>Content Management:</strong> Intelligent content management systems that can categorize, tag, and optimize content automatically.</li>
      </ul>

      <h2>Emerging Trends for 2024</h2>
      <p>Several exciting trends are emerging that will define the future of AI in web development:</p>

      <h3>1. AI-Powered Design Systems</h3>
      <p>Design systems are becoming more intelligent, with AI helping to maintain consistency across large-scale applications. These systems can automatically suggest design improvements, detect accessibility issues, and ensure brand compliance.</p>

      <h3>2. Intelligent User Experience Personalization</h3>
      <p>AI is enabling unprecedented levels of personalization. Websites can now adapt their layout, content, and functionality in real-time based on user behavior, preferences, and context.</p>

      <h3>3. Automated Accessibility Compliance</h3>
      <p>AI tools are becoming sophisticated enough to automatically detect and fix accessibility issues, ensuring that websites are inclusive and compliant with WCAG guidelines.</p>

      <h3>4. Smart Content Generation</h3>
      <p>Beyond simple text generation, AI is now capable of creating contextually relevant content that aligns with brand voice and user intent.</p>

      <h2>The Impact on Developer Workflows</h2>
      <p>The integration of AI into web development workflows is fundamentally changing how developers approach their work:</p>

      <blockquote>
        "AI is not replacing developers; it's amplifying their capabilities and allowing them to focus on higher-level problem-solving and creative tasks."
      </blockquote>

      <h3>Enhanced Productivity</h3>
      <p>Developers are reporting significant productivity gains when using AI-powered tools. Routine tasks like boilerplate code generation, documentation writing, and basic debugging are being automated, freeing up time for more complex and creative work.</p>

      <h3>Improved Code Quality</h3>
      <p>AI tools are helping maintain higher code quality standards by:</p>
      <ul>
        <li>Suggesting best practices and design patterns</li>
        <li>Identifying potential security vulnerabilities</li>
        <li>Optimizing performance bottlenecks</li>
        <li>Ensuring consistent coding standards across teams</li>
      </ul>

      <h2>Challenges and Considerations</h2>
      <p>While AI brings numerous benefits, there are important challenges to consider:</p>

      <h3>Ethical AI Development</h3>
      <p>As AI becomes more prevalent in web development, ensuring ethical use becomes crucial. This includes addressing bias in AI algorithms, protecting user privacy, and maintaining transparency in AI-driven decisions.</p>

      <h3>Skill Evolution</h3>
      <p>Developers need to adapt their skills to work effectively with AI tools. This includes understanding AI capabilities and limitations, learning to prompt AI systems effectively, and maintaining critical thinking skills.</p>

      <h2>Looking Ahead: Predictions for the Future</h2>
      <p>Based on current trends and technological advancements, here are some predictions for the future of AI in web development:</p>

      <h3>Near-term (2024-2025)</h3>
      <ul>
        <li>AI-powered IDEs will become the standard development environment</li>
        <li>Automated code review and optimization will be integrated into CI/CD pipelines</li>
        <li>AI assistants will handle routine maintenance tasks automatically</li>
      </ul>

      <h3>Medium-term (2025-2027)</h3>
      <ul>
        <li>Natural language programming will become more sophisticated</li>
        <li>AI will enable real-time website adaptation based on user behavior</li>
        <li>Automated A/B testing and optimization will become standard</li>
      </ul>

      <h3>Long-term (2027+)</h3>
      <ul>
        <li>AI will enable fully autonomous website creation and maintenance</li>
        <li>Predictive development will anticipate user needs before they're expressed</li>
        <li>AI-driven architecture decisions will optimize for performance and scalability automatically</li>
      </ul>

      <h2>Preparing for the AI-Driven Future</h2>
      <p>To stay competitive in this evolving landscape, developers and businesses should:</p>

      <ol>
        <li><strong>Embrace AI Tools:</strong> Start experimenting with AI-powered development tools and integrate them into your workflow.</li>
        <li><strong>Continuous Learning:</strong> Stay updated with the latest AI developments and their applications in web development.</li>
        <li><strong>Focus on Human Skills:</strong> Develop skills that complement AI, such as creative problem-solving, strategic thinking, and user empathy.</li>
        <li><strong>Ethical Considerations:</strong> Understand the ethical implications of AI and implement responsible AI practices.</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The future of AI in web development is bright and full of possibilities. As we continue through 2024 and beyond, AI will become an increasingly integral part of how we build and maintain web applications. By embracing these technologies while maintaining focus on human-centered design and ethical considerations, we can create more efficient, accessible, and user-friendly web experiences.</p>

      <p>The key to success in this AI-driven future is not to fear the technology, but to understand it, embrace it, and use it as a tool to enhance our capabilities as developers and creators.</p>
    `
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Complete Guide to E-commerce SEO: Boost Your Online Store Rankings",
      image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "SEO & Marketing"
    },
    {
      id: 5,
      title: "Implementing AI Chatbots: A Step-by-Step Business Guide",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "AI & Technology"
    },
    {
      id: 3,
      title: "Building Scalable SaaS Applications: Best Practices and Architecture",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Development"
    }
  ];

  const tableOfContents = [
    { id: "current-state", title: "The Current State of AI in Web Development" },
    { id: "emerging-trends", title: "Emerging Trends for 2024" },
    { id: "developer-workflows", title: "The Impact on Developer Workflows" },
    { id: "challenges", title: "Challenges and Considerations" },
    { id: "future-predictions", title: "Looking Ahead: Predictions for the Future" },
    { id: "preparing", title: "Preparing for the AI-Driven Future" },
    { id: "conclusion", title: "Conclusion" }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-8">
          <button className="flex items-center text-gray-600 hover:text-yellow-600 transition-colors mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </button>
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                {blogPost.category}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">{blogPost.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-yellow-600 transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Social Share */}
              <div className="bg-white rounded-xl p-6 mt-6 shadow-sm border">
                <h4 className="font-bold text-gray-800 mb-4">Share this article</h4>
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
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                className="text-gray-700 leading-relaxed"
              />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-6">
                <Tag className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 font-medium">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Web Development', 'Machine Learning', 'Future Tech', 'Automation'].map((tag) => (
                  <span 
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-yellow-100 hover:text-yellow-800 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt={blogPost.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{blogPost.author}</h4>
                  <p className="text-gray-600 mb-4">
                    Sarah is a senior web developer and AI enthusiast with over 8 years of experience in building 
                    scalable web applications. She specializes in integrating AI technologies into modern web 
                    development workflows and is passionate about the future of human-AI collaboration.
                  </p>
                  <div className="flex space-x-3">
                    <button className="text-yellow-600 hover:text-yellow-700 transition-colors">
                      Follow on Twitter
                    </button>
                    <button className="text-yellow-600 hover:text-yellow-700 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <span className="text-xs text-yellow-600 font-medium">{post.category}</span>
                      <h4 className="font-bold text-gray-800 mt-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <FAQ 
                title="Frequently Asked Questions about AI in Web Development"
                subtitle="Common questions about implementing AI in web development projects"
                items={[
                  {
                    question: "How can AI improve my web development workflow?",
                    answer: "AI can enhance your workflow through automated code generation, intelligent debugging, performance optimization, and automated testing. Tools like GitHub Copilot can help write code faster, while AI-powered testing tools can identify bugs and security vulnerabilities automatically."
                  },
                  {
                    question: "What are the best AI tools for web developers in 2024?",
                    answer: "Some of the top AI tools include GitHub Copilot for code generation, ChatGPT for problem-solving and documentation, Tabnine for intelligent code completion, and various AI-powered testing frameworks like Testim and Applitools for automated testing."
                  },
                  {
                    question: "Will AI replace web developers?",
                    answer: "AI will not replace web developers but will augment their capabilities. While AI can automate routine tasks and assist with code generation, human creativity, problem-solving skills, and understanding of business requirements remain essential for successful web development projects."
                  },
                  {
                    question: "How do I get started with AI in web development?",
                    answer: "Start by experimenting with AI-powered code editors and tools like GitHub Copilot or Tabnine. Learn to write effective prompts for AI assistants, and gradually integrate AI tools into your existing workflow. Focus on understanding AI capabilities and limitations."
                  },
                  {
                    question: "What are the ethical considerations when using AI in web development?",
                    answer: "Key ethical considerations include ensuring AI-generated code is secure and unbiased, respecting intellectual property rights, maintaining transparency about AI usage, protecting user privacy, and ensuring accessibility in AI-driven features."
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;