
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Twitter, Heart, MapPin, Phone, Sparkles } from 'lucide-react';
import ContactDialog from './ContactDialog';
import { useQuery } from "@tanstack/react-query";
import { api } from '../lib/api';

export default function FooterSection() {
  const { data: contact } = useQuery({
    queryKey: ['contact'],
    queryFn: api.getContact
  });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-20 px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-50" />
                <div className="relative h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </h3>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              {contact?.tagline || 'Building scalable solutions with modern technologies'}
            </p>
            {contact?.location && (
              <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{contact.location}</span>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#F1F5F9] flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Dashboard', 'Portfolio', 'Experience'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="group flex items-center gap-2 text-[#94A3B8] hover:text-[#06B6D4] transition-colors text-sm"
                    data-testid={`link-footer-${item.toLowerCase()}`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#F1F5F9] flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
              Connect
            </h4>
            <div className="flex flex-col gap-4">
              {contact?.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-center gap-3 text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
                  data-testid="button-footer-email"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm">{contact.email}</span>
                </a>
              )}
              {contact?.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  className="group flex items-center gap-3 text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
                  data-testid="button-footer-phone"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm">{contact.phone}</span>
                </a>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#F1F5F9] flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full" />
              Get in Touch
            </h4>
            <p className="text-[#94A3B8] text-sm">
              Interested in collaborating? Let's create something amazing together!
            </p>
            <ContactDialog
              trigger={
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
                  data-testid="button-contact"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              }
            />
          </div>
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#94A3B8] text-sm text-center md:text-left">
              © {new Date().getFullYear()} Developer Portfolio. Built with{' '}
              <Heart className="w-4 h-4 inline text-rose-500 fill-current animate-pulse" /> and React
            </p>
            
            <div className="flex items-center gap-3">
              {contact?.github && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/5 transition-all duration-300"
                  onClick={() => window.open(contact.github, '_blank')}
                  data-testid="button-social-github"
                >
                  <Github className="w-5 h-5" />
                </Button>
              )}
              {contact?.linkedin && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/5 transition-all duration-300"
                  onClick={() => window.open(contact.linkedin, '_blank')}
                  data-testid="button-social-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              )}
              {contact?.twitter && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/5 transition-all duration-300"
                  onClick={() => window.open(contact.twitter, '_blank')}
                  data-testid="button-social-twitter"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              )}
              {contact?.email && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/5 transition-all duration-300"
                  onClick={() => window.open(`mailto:${contact.email}`, '_blank')}
                  data-testid="button-social-email"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
