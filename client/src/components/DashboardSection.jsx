import { Card } from '../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';
import { TrendingUp, Code, GitBranch, Award } from 'lucide-react';

const skillsData = [
  { skill: 'React', proficiency: 90 },
  { skill: 'TypeScript', proficiency: 85 },
  { skill: 'Node.js', proficiency: 80 },
  { skill: 'Python', proficiency: 75 },
  { skill: 'SQL', proficiency: 70 },
  { skill: 'AWS', proficiency: 65 },
];

const radarData = [
  { subject: 'Frontend', A: 90 },
  { subject: 'Backend', A: 75 },
  { subject: 'DevOps', A: 65 },
  { subject: 'Database', A: 70 },
  { subject: 'Design', A: 80 },
  { subject: 'Testing', A: 75 },
];

const contributionData = [
  { month: 'Jan', commits: 45 },
  { month: 'Feb', commits: 52 },
  { month: 'Mar', commits: 61 },
  { month: 'Apr', commits: 58 },
  { month: 'May', commits: 70 },
  { month: 'Jun', commits: 65 },
];

export default function DashboardSection() {
  return (
    <section id="dashboard" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#F1F5F9]">
            Developer <span className="text-[#06B6D4]">Dashboard</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Real-time insights into my development journey, skills, and project statistics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-6 hover-elevate active-elevate-2" data-testid="card-projects">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#94A3B8] mb-1">Total Projects</p>
                <p className="text-3xl font-bold font-mono text-[#06B6D4]">15</p>
              </div>
              <div className="p-3 bg-[#3B82F6]/20 rounded-lg">
                <Code className="w-6 h-6 text-[#3B82F6]" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="w-4 h-4 text-[#10B981]" />
              <span className="text-sm text-[#10B981]">+3 this month</span>
            </div>
          </Card>

          <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-6 hover-elevate active-elevate-2" data-testid="card-commits">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#94A3B8] mb-1">Commits</p>
                <p className="text-3xl font-bold font-mono text-[#06B6D4]">351</p>
              </div>
              <div className="p-3 bg-[#06B6D4]/20 rounded-lg">
                <GitBranch className="w-6 h-6 text-[#06B6D4]" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="w-4 h-4 text-[#10B981]" />
              <span className="text-sm text-[#10B981]">+65 this month</span>
            </div>
          </Card>

          <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-6 hover-elevate active-elevate-2" data-testid="card-technologies">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#94A3B8] mb-1">Technologies</p>
                <p className="text-3xl font-bold font-mono text-[#06B6D4]">12+</p>
              </div>
              <div className="p-3 bg-[#C084FC]/20 rounded-lg">
                <Award className="w-6 h-6 text-[#C084FC]" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm text-[#94A3B8]">Full Stack</span>
            </div>
          </Card>

          <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-6 hover-elevate active-elevate-2" data-testid="card-experience">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#94A3B8] mb-1">Experience</p>
                <p className="text-3xl font-bold font-mono text-[#06B6D4]">1+ Yrs</p>
              </div>
              <div className="p-3 bg-[#10B981]/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-[#10B981]" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm text-[#94A3B8]">Growing Fast</span>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-6" data-testid="card-skills-chart">
            <h3 className="text-xl font-semibold text-[#F1F5F9] mb-6">Skills Proficiency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis dataKey="skill" stroke="#94A3B8" style={{ fontSize: '12px' }} />
                <YAxis stroke="#94A3B8" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0F172A',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#F1F5F9',
                  }}
                />
                <Bar dataKey="proficiency" fill="#3B82F6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-6" data-testid="card-radar-chart">
            <h3 className="text-xl font-semibold text-[#F1F5F9] mb-6">Technical Expertise</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#1E293B" />
                <PolarAngleAxis dataKey="subject" stroke="#94A3B8" style={{ fontSize: '12px' }} />
                <PolarRadiusAxis stroke="#94A3B8" />
                <Radar name="Skills" dataKey="A" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="bg-[#0F172A]/60 backdrop-blur-xl border-white/10 p-6 lg:col-span-2" data-testid="card-activity-chart">
            <h3 className="text-xl font-semibold text-[#F1F5F9] mb-6">GitHub Activity</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={contributionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis dataKey="month" stroke="#94A3B8" style={{ fontSize: '12px' }} />
                <YAxis stroke="#94A3B8" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0F172A',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#F1F5F9',
                  }}
                />
                <Line type="monotone" dataKey="commits" stroke="#06B6D4" strokeWidth={3} dot={{ fill: '#06B6D4', r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </section>
  );
}
