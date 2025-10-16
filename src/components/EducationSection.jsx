import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2020 - 2024',
      gpa: '3.8/4.0',
      description: 'Specialized in software engineering, web development, and data structures. Participated in multiple hackathons and coding competitions.',
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        'Best Final Year Project Award',
        'President of Computer Science Society',
        'Published research paper on Machine Learning',
      ],
      courses: ['Data Structures', 'Web Development', 'Database Systems', 'Software Engineering', 'AI & ML', 'Cloud Computing'],
    },
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: Trophy,
    },
    {
      title: 'React Professional Certification',
      issuer: 'Meta',
      date: '2023',
      icon: Award,
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: '2023',
      icon: BookOpen,
    },
    {
      title: 'TypeScript Advanced Patterns',
      issuer: 'Frontend Masters',
      date: '2024',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9]">
            Education & <span className="text-[#06B6D4]">Certifications</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-8 hover-elevate active-elevate-2"
                data-testid={`card-education-${index}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[#F1F5F9] mb-2">{edu.degree}</h3>
                    <p className="text-[#06B6D4] font-medium mb-1">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-[#94A3B8] font-mono">{edu.period}</span>
                      <span className="text-[#94A3B8]">•</span>
                      <span className="text-[#10B981] font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#94A3B8] leading-relaxed mb-6">{edu.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-[#F1F5F9] mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#94A3B8]">
                          <span className="text-[#06B6D4] mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#F1F5F9] mb-3">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <Badge
                          key={course}
                          variant="secondary"
                          className="bg-[#3B82F6]/10 text-[#06B6D4] border-[#3B82F6]/20"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-6" data-testid="card-certifications">
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-6">Professional Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-[#3B82F6]/10 to-[#06B6D4]/10 border-[#3B82F6]/20 p-4 hover-elevate active-elevate-2"
                    data-testid={`cert-${index}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
                        <cert.icon className="w-5 h-5 text-[#3B82F6]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-[#F1F5F9] mb-1">{cert.title}</h4>
                        <p className="text-xs text-[#94A3B8] mb-1">{cert.issuer}</p>
                        <span className="text-xs font-mono text-[#06B6D4]">{cert.date}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-[#3B82F6]/20 to-[#06B6D4]/20 backdrop-blur-xl border-[#3B82F6]/30 p-6" data-testid="card-learning">
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-4">Currently Learning</h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#F1F5F9]">Advanced React Patterns</span>
                    <span className="text-[#06B6D4] font-mono">85%</span>
                  </div>
                  <div className="h-2 bg-[#0F172A]/60 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#F1F5F9]">System Design</span>
                    <span className="text-[#06B6D4] font-mono">70%</span>
                  </div>
                  <div className="h-2 bg-[#0F172A]/60 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#F1F5F9]">GraphQL & Apollo</span>
                    <span className="text-[#06B6D4] font-mono">60%</span>
                  </div>
                  <div className="h-2 bg-[#0F172A]/60 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
