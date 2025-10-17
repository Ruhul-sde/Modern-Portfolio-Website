
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, Star, GitFork, Eye, ArrowRight } from 'lucide-react';
import { useQuery } from "@tanstack/react-query";

export default function PortfolioSection() {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/api/projects');
      if (!response.ok) throw new Error('Failed to fetch projects');
      return response.json();
    }
  });

  if (isLoading) {
    return <div className="text-center py-24 text-[#94A3B8]">Loading projects...</div>;
  }

  return (
    <section id="portfolio" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block relative">
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30 mb-4 backdrop-blur-sm">
              <Star className="w-3 h-3 mr-1" />
              Featured Work
            </Badge>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-[#F1F5F9] via-blue-100 to-[#F1F5F9] bg-clip-text text-transparent">
              Selected{' '}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            Explore my latest work showcasing modern web development, creative solutions, and innovative approaches to complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{ 
                animation: 'fadeInUp 0.8s ease-out forwards',
                animationDelay: `${index * 150}ms`,
                opacity: 0
              }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700`} />

              <Card className="relative bg-[#0F172A]/90 backdrop-blur-2xl border-white/10 overflow-hidden h-full hover:border-white/30 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }} />
                    <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.7s' }} />
                    <div className="absolute bottom-8 left-12 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '1.4s' }} />
                  </div>

                  {/* Status & Category Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className={`${
                      project.status === 'Live' 
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                        : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    } backdrop-blur-xl`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                        project.status === 'Live' ? 'bg-emerald-400' : 'bg-amber-400'
                      } animate-pulse`} />
                      {project.status}
                    </Badge>
                    <Badge className="bg-white/10 text-white border-white/30 backdrop-blur-xl">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {project.links?.live && (
                      <Button
                        size="icon"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-xl text-white border-white/40 shadow-2xl transform hover:scale-110 transition-all duration-300"
                        onClick={() => window.open(project.links.live, '_blank')}
                        data-testid={`button-demo-${project.id}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    )}
                    {project.links?.github && (
                      <Button
                        size="icon"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-xl text-white border-white/40 shadow-2xl transform hover:scale-110 transition-all duration-300"
                        onClick={() => window.open(project.links.github, '_blank')}
                        data-testid={`button-github-${project.id}`}
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-5">
                  <h3 className="text-2xl font-bold text-[#F1F5F9] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-xs">
                    <div className="flex items-center gap-2 text-[#94A3B8]">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#94A3B8]">
                      <GitFork className="w-4 h-4 text-blue-400" />
                      <span className="font-medium">{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#94A3B8]">
                      <Eye className="w-4 h-4 text-purple-400" />
                      <span className="font-medium">{project.stats.views}</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-300 border-blue-500/20 font-mono text-xs hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="bg-white/5 text-[#94A3B8] border-white/10 font-mono text-xs"
                      >
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button
            variant="outline"
            size="lg"
            className="group border-blue-500/30 text-[#F1F5F9] hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-500/50 transition-all duration-300"
            data-testid="button-view-all"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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
