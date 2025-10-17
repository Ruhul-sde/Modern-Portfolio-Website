import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover-elevate active-elevate-2 px-2 py-2 rounded-md transition-transform"
            data-testid="link-logo"
          >
            <img 
              src="/src/assets/logo.png" 
              alt="Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline';
              }}
            />
            <span className="text-xl font-bold font-mono text-[#F1F5F9] hidden">
              &lt;Dev/&gt;
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors text-sm font-medium"
              data-testid="link-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors text-sm font-medium"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('dashboard')}
              className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors text-sm font-medium"
              data-testid="link-dashboard"
            >
              Dashboard
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors text-sm font-medium"
              data-testid="link-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors text-sm font-medium"
              data-testid="link-education"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors text-sm font-medium"
              data-testid="link-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#F1F5F9] hover:text-[#06B6D4] transition-colors text-sm font-medium"
              data-testid="link-contact"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-[#F1F5F9] hover:text-[#06B6D4]"
              data-testid="button-github"
              onClick={() => window.open('https://github.com/ruhulamin', '_blank')}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#F1F5F9] hover:text-[#06B6D4]"
              data-testid="button-linkedin"
              onClick={() => window.open('mailto:contact@ruhulamin.org', '_blank')}
            >
              <Mail className="w-5 h-5" />
            </Button>
            <Button
              variant="default"
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white"
              data-testid="button-resume"
              onClick={() => window.open('/src/assets/resume.pdf', '_blank')}
            >
              Resume
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#F1F5F9]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 text-[#F1F5F9] hover:text-[#06B6D4] transition-colors"
              data-testid="link-mobile-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-[#F1F5F9] hover:text-[#06B6D4] transition-colors"
              data-testid="link-mobile-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('dashboard')}
              className="block w-full text-left px-4 py-2 text-[#F1F5F9] hover:text-[#06B6D4] transition-colors"
              data-testid="link-mobile-dashboard"
            >
              Dashboard
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-4 py-2 text-[#F1F5F9] hover:text-[#06B6D4] transition-colors"
              data-testid="link-mobile-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left px-4 py-2 text-[#F1F5F9] hover:text-[#06B6D4] transition-colors"
              data-testid="link-mobile-education"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left px-4 py-2 text-[#F1F5F9] hover:text-[#06B6D4] transition-colors"
              data-testid="link-mobile-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-[#F1F5F9] hover:text-[#06B6D4] transition-colors"
              data-testid="link-mobile-contact"
            >
              Contact
            </button>
            <div className="flex items-center gap-3 px-4 pt-2">
              <Button variant="ghost" size="icon" className="text-[#F1F5F9]">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-[#F1F5F9]">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="default" 
                className="bg-[#3B82F6] text-white flex-1"
                onClick={() => window.open('/src/assets/resume.pdf', '_blank')}
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
