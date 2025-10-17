
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useQuery } from "@tanstack/react-query";
import { api } from '../lib/api';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { data: contact } = useQuery({
    queryKey: ['contact'],
    queryFn: api.getContact
  });

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

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-blue-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="group relative hover-elevate active-elevate-2 px-3 py-2 rounded-xl transition-all duration-300"
            data-testid="link-logo"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <img 
                  src="/src/assets/logo.png" 
                  alt="Logo" 
                  className="relative h-12 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="relative hidden items-center justify-center h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-4 py-2 text-sm font-medium text-[#94A3B8] hover:text-[#F1F5F9] transition-all duration-300 group"
                data-testid={`link-${link.id}`}
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {contact?.github && (
              <Button
                variant="ghost"
                size="icon"
                className="text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/5 transition-all duration-300"
                data-testid="button-github"
                onClick={() => window.open(contact.github, '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
            )}
            {contact?.linkedin && (
              <Button
                variant="ghost"
                size="icon"
                className="text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/5 transition-all duration-300"
                data-testid="button-linkedin"
                onClick={() => window.open(contact.linkedin, '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            )}
            {contact?.email && (
              <Button
                variant="ghost"
                size="icon"
                className="text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/5 transition-all duration-300"
                data-testid="button-email"
                onClick={() => window.open(`mailto:${contact.email}`, '_blank')}
              >
                <Mail className="w-5 h-5" />
              </Button>
            )}
            {contact?.resume && (
              <Button
                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
                data-testid="button-resume"
                onClick={() => window.open(contact.resume, '_blank')}
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </Button>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#F1F5F9] hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0F172A]/98 backdrop-blur-2xl border-t border-white/10 py-6 space-y-2 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/5 rounded-lg transition-all duration-200"
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-3 px-4 pt-4 border-t border-white/10 mt-4">
              {contact?.github && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-[#94A3B8] hover:text-[#F1F5F9]"
                  onClick={() => window.open(contact.github, '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
              )}
              {contact?.linkedin && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-[#94A3B8] hover:text-[#F1F5F9]"
                  onClick={() => window.open(contact.linkedin, '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              )}
              {contact?.resume && (
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white flex-1"
                  onClick={() => window.open(contact.resume, '_blank')}
                >
                  Resume
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
