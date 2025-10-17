import { Card } from '../components/ui/card';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Trainee Engineer',
    company: 'Akshay Software Technologies',
    period: 'Ongoing',
    description: 'Collaborating with cross-functional teams to develop and implement scalable web applications using the MERN stack. Playing a key role in designing responsive user interfaces and facilitating seamless integration of RESTful APIs.',
    achievements: [
      'Developed scalable web applications using MERN stack',
      'Designed responsive user interfaces for enhanced UX',
      'Integrated RESTful APIs to enhance functionality',
      'Managed debugging and optimized application performance',
      'Partnered with senior developers on project milestones'
    ],
  },
];

const certifications = [
  'Full-Stack Development (MERN)',
  'React.js Development',
  'Java & Spring Boot',
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9]">
            Work <span className="text-[#06B6D4]">Experience</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-[#F1F5F9] flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-[#3B82F6]" />
              Professional Experience
            </h3>
            
            <div className="relative pl-8 space-y-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-transparent" />
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative" data-testid={`experience-${index}`}>
                  <div className="absolute -left-[33px] top-2 w-4 h-4 rounded-full bg-[#3B82F6] border-4 border-[#020617]" />
                  
                  <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-6 hover-elevate active-elevate-2">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-[#F1F5F9]">{exp.title}</h4>
                        <p className="text-[#06B6D4] font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm font-mono text-[#94A3B8] bg-[#3B82F6]/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-[#94A3B8] mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                          <span className="text-[#06B6D4] mt-1">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-6" data-testid="card-certifications">
              <h3 className="text-xl font-semibold text-[#F1F5F9] flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-[#3B82F6]" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-[#3B82F6]/5 border border-[#3B82F6]/20 rounded-lg hover-elevate active-elevate-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#06B6D4] mt-2" />
                    <span className="text-[#F1F5F9] text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/20 backdrop-blur-xl border-[#3B82F6]/30 p-6" data-testid="card-skills-summary">
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Spring Boot', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#0F172A]/60 border border-white/10 rounded-full text-sm text-[#F1F5F9] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
