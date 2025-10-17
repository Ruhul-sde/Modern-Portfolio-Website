import { Button } from './ui/button';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';
import ContactDialog from './ContactDialog';

export default function FooterSection() {
  return (
    <footer id="contact" className="relative py-16 px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-mono text-[#F1F5F9]">&lt;Ruhul Amin/&gt;</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Software Developer from West Bengal, India. Building scalable solutions with Java, Python, and JavaScript. Let's create something amazing together.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F1F5F9]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors text-sm"
                  data-testid="link-footer-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors text-sm"
                  data-testid="link-footer-dashboard"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors text-sm"
                  data-testid="link-footer-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors text-sm"
                  data-testid="link-footer-experience"
                >
                  Experience
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F1F5F9]">Connect</h4>
            <div className="flex flex-col gap-3">
              <Button
                variant="ghost"
                className="justify-start text-[#94A3B8] hover:text-[#06B6D4] p-0 h-auto"
                data-testid="button-footer-email"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">dev@example.com</span>
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-[#94A3B8] hover:text-[#06B6D4] p-0 h-auto"
                data-testid="button-footer-github"
              >
                <Github className="w-4 h-4 mr-2" />
                <span className="text-sm">@developer</span>
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-[#94A3B8] hover:text-[#06B6D4] p-0 h-auto"
                data-testid="button-footer-linkedin"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                <span className="text-sm">linkedin.com/in/dev</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F1F5F9]">Get in Touch</h4>
            <p className="text-[#94A3B8] text-sm mb-4">
              Interested in collaborating? Send me a message!
            </p>
            <ContactDialog
              trigger={
                <Button
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white"
                  data-testid="button-contact"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              }
            />
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94A3B8] text-sm text-center md:text-left">
              © {new Date().getFullYear()} Developer Portfolio. Built with{' '}
              <Heart className="w-4 h-4 inline text-[#EF4444] fill-current" /> and React
            </p>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#94A3B8] hover:text-[#06B6D4]"
                data-testid="button-social-github"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#94A3B8] hover:text-[#06B6D4]"
                data-testid="button-social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#94A3B8] hover:text-[#06B6D4]"
                data-testid="button-social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#94A3B8] hover:text-[#06B6D4]"
                data-testid="button-social-email"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
