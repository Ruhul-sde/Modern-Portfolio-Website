
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      stats: { stars: 234, forks: 45, views: '12.5k' },
      status: 'Live',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot powered by OpenAI with context-aware responses and multi-language support.',
      tech: ['Next.js', 'OpenAI', 'TailwindCSS', 'Vercel'],
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      stats: { stars: 456, forks: 89, views: '28.3k' },
      status: 'Live',
      category: 'AI/ML'
    },
    {
      id: 3,
      title: 'Portfolio Dashboard',
      description: 'Interactive analytics dashboard with real-time data visualization and custom reporting.',
      tech: ['React', 'D3.js', 'TypeScript', 'Firebase'],
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      stats: { stars: 178, forks: 32, views: '9.2k' },
      status: 'Beta',
      category: 'Dashboard'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Real-time social platform with live messaging, posts, and user interactions.',
      tech: ['React Native', 'Socket.io', 'Express', 'PostgreSQL'],
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      stats: { stars: 312, forks: 67, views: '15.7k' },
      status: 'Live',
      category: 'Mobile'
    },
    {
      id: 5,
      title: 'Task Management Tool',
      description: 'Collaborative project management platform with Kanban boards and team analytics.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      stats: { stars: 289, forks: 54, views: '11.4k' },
      status: 'Live',
      category: 'Productivity'
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with hourly forecasts and location-based alerts.',
      tech: ['Svelte', 'OpenWeather API', 'TailwindCSS'],
      gradient: 'from-sky-500 via-blue-500 to-indigo-500',
      stats: { stars: 145, forks: 28, views: '7.8k' },
      status: 'Live',
      category: 'Web App'
    },
  ];

  return (
    <section id="portfolio" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <Badge className="bg-[#3B82F6]/20 text-[#3B82F6] border-[#3B82F6]/30 mb-4">
              Portfolio
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#F1F5F9]">
            Featured <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{ 
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 100}ms`,
                opacity: 0
              }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500`} />
              
              <Card className="relative bg-[#0F172A]/80 backdrop-blur-xl border-white/10 overflow-hidden h-full hover:border-white/20 transition-all duration-300">
                {/* Header with Gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#020617]/50 backdrop-blur-[2px]" />
                  
                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }} />
                    <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-8 left-12 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    } backdrop-blur-sm`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                        project.status === 'Live' ? 'bg-green-400' : 'bg-yellow-400'
                      } animate-pulse`} />
                      {project.status}
                    </Badge>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Action Buttons - Show on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-white/30 shadow-xl transform hover:scale-110 transition-transform"
                      data-testid={`button-demo-${project.id}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-white/30 shadow-xl transform hover:scale-110 transition-transform"
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#F1F5F9] group-hover:text-[#06B6D4] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-[#94A3B8] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-500" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[#06B6D4]" />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-[#3B82F6]/10 text-[#06B6D4] border-[#3B82F6]/20 font-mono text-xs hover:bg-[#3B82F6]/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bottom Border Accent */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-[#3B82F6]/30 text-[#F1F5F9] hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]/50 group"
            data-testid="button-view-all"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
