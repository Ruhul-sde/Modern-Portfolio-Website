import { Card } from '../components/ui/card';
import { Code2, Rocket, Lightbulb, Users } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code is my priority.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Always exploring new technologies and pushing the boundaries of what\'s possible.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Passionate about tackling complex challenges with creative solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Believe in the power of teamwork and knowledge sharing to achieve great results.',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9]">
            About <span className="text-[#06B6D4]">Me</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Passionate software developer with a love for creating elegant solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#F1F5F9]">Hi, I'm Ruhul Amin</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                I'm a passionate Software Developer with expertise in full-stack development using Java, Python, and JavaScript. 
                Skilled in creating scalable solutions with React.js and Node.js, and experienced in delivering high-quality 
                projects like AI-powered apps and collaborative code editor.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                I specialize in full-stack development with the MERN stack. I believe in writing clean, maintainable code 
                and staying up-to-date with the latest industry trends. Currently working as a Trainee Engineer at Akshay 
                Software Technologies, where I collaborate with cross-functional teams to develop scalable web applications.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                My approach to development is user-centered and detail-oriented. I'm eager to leverage my technical skills 
                and problem-solving abilities in a dynamic, agile environment. Every project is an opportunity to learn 
                something new and push my skills further.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-sm text-[#F1F5F9]">Available for freelance</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-lg">
                <span className="text-sm text-[#F1F5F9]">Open to opportunities</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-3xl blur-3xl opacity-20" />
            <Card className="relative bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-[#94A3B8] text-sm">Current Focus</span>
                  <span className="text-[#06B6D4] font-mono text-sm">2024</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-[#3B82F6] rounded-full" />
                    <div>
                      <p className="text-[#F1F5F9] font-medium">Full Stack Development</p>
                      <p className="text-[#94A3B8] text-sm">React, Node.js, TypeScript</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-[#06B6D4] rounded-full" />
                    <div>
                      <p className="text-[#F1F5F9] font-medium">UI/UX Design</p>
                      <p className="text-[#94A3B8] text-sm">TailwindCSS, Figma</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-[#C084FC] rounded-full" />
                    <div>
                      <p className="text-[#F1F5F9] font-medium">Cloud & DevOps</p>
                      <p className="text-[#94A3B8] text-sm">AWS, Docker, CI/CD</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-[#94A3B8] text-sm mb-3">Weekly Activity</p>
                  <div className="flex gap-2">
                    {[65, 80, 45, 90, 70, 55, 85].map((height, i) => (
                      <div key={i} className="flex-1 bg-[#1E293B] rounded-t-md overflow-hidden" style={{ height: '60px' }}>
                        <div 
                          className="bg-gradient-to-t from-[#3B82F6] to-[#06B6D4] rounded-t-md transition-all"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-6 hover-elevate active-elevate-2 transition-all"
              data-testid={`card-value-${index}`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#F1F5F9] mb-2">{value.title}</h4>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{value.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
