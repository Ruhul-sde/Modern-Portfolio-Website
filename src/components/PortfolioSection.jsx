import { Card } from '../components/ui/card';
import { Button } from './ui/button';
import { Badge } from '../components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack online shopping platform with real-time inventory, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'from-[#3B82F6] to-[#06B6D4]',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop, and team collaboration.',
    tech: ['TypeScript', 'React', 'Firebase', 'TailwindCSS'],
    gradient: 'from-[#06B6D4] to-[#10B981]',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with forecasts, interactive maps, and location-based alerts.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    gradient: 'from-[#C084FC] to-[#3B82F6]',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media metrics with data visualization and export features.',
    tech: ['Next.js', 'PostgreSQL', 'Recharts', 'Prisma'],
    gradient: 'from-[#10B981] to-[#06B6D4]',
  },
  {
    id: 5,
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot with natural language processing and context-aware responses.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'WebSockets'],
    gradient: 'from-[#F59E0B] to-[#EF4444]',
  },
  {
    id: 6,
    title: 'Portfolio CMS',
    description: 'Content management system for developers to showcase their work with markdown support.',
    tech: ['Vue.js', 'Express', 'SQLite', 'Markdown'],
    gradient: 'from-[#3B82F6] to-[#C084FC]',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9]">
            Featured <span className="text-[#06B6D4]">Projects</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            A selection of projects showcasing my skills in modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-[#0F172A]/60 backdrop-blur-xl border-white/10 overflow-hidden hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-project-${project.id}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[#020617]/40 group-hover:bg-[#020617]/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity gap-3">
                  <Button
                    size="icon"
                    variant="default"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/20"
                    data-testid={`button-demo-${project.id}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="default"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/20"
                    data-testid={`button-github-${project.id}`}
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-[#F1F5F9]">{project.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-[#3B82F6]/10 text-[#06B6D4] border-[#3B82F6]/20 font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#3B82F6]/30 text-[#F1F5F9] hover:bg-[#3B82F6]/10"
            data-testid="button-view-all"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
