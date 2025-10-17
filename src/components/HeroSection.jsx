import { Button } from './ui/button';
import { ArrowDown, Sparkles, Code2 } from 'lucide-react';
import ContactDialog from './ContactDialog';

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#06B6D4]" />
              <span className="text-sm font-mono text-[#06B6D4]">Available for opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#F1F5F9] tracking-tight">
                Software
                <br />
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-[#94A3B8] max-w-xl leading-relaxed">
                Building modern web experiences with clean code and creative solutions. 
                Passionate about React, TypeScript, and crafting intuitive user interfaces.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium"
                onClick={() => scrollToSection('portfolio')}
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#3B82F6]/30 text-[#F1F5F9] hover:bg-[#3B82F6]/10 backdrop-blur-sm"
                onClick={() => scrollToSection('contact')}
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold font-mono text-[#06B6D4]">1+</div>
                <div className="text-sm text-[#94A3B8]">Years Exp</div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold font-mono text-[#06B6D4]">15+</div>
                <div className="text-sm text-[#94A3B8]">Projects</div>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="text-center">
                <div className="text-3xl font-bold font-mono text-[#06B6D4]">10+</div>
                <div className="text-sm text-[#94A3B8]">Tech Stack</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center animate-slide-in-right">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-3xl blur-3xl opacity-20 animate-pulse" />

              <div className="relative bg-[#0F172A]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>

                <div className="font-mono text-sm space-y-3">
                  <div className="text-[#94A3B8]">
                    <span className="text-[#C084FC]">const</span>{' '}
                    <span className="text-[#06B6D4]">developer</span> ={' '}
                    <span className="text-[#F59E0B]">{'{'}</span>
                  </div>
                  <div className="pl-6 text-[#94A3B8]">
                    <span className="text-[#06B6D4]">name</span>:{' '}
                    <span className="text-[#A3E635]">'Your Name'</span>,
                  </div>
                  <div className="pl-6 text-[#94A3B8]">
                    <span className="text-[#06B6D4]">role</span>:{' '}
                    <span className="text-[#A3E635]">'Full Stack Developer'</span>,
                  </div>
                  <div className="pl-6 text-[#94A3B8]">
                    <span className="text-[#06B6D4]">skills</span>:{' '}
                    <span className="text-[#F59E0B]">['</span>
                    <span className="text-[#A3E635]">React</span>
                    <span className="text-[#F59E0B]">', '</span>
                    <span className="text-[#A3E635]">TypeScript</span>
                    <span className="text-[#F59E0B]">', '</span>
                    <span className="text-[#A3E635]">Node.js</span>
                    <span className="text-[#F59E0B]">']</span>,
                  </div>
                  <div className="pl-6 text-[#94A3B8]">
                    <span className="text-[#06B6D4]">passion</span>:{' '}
                    <span className="text-[#A3E635]">'Building Amazing Things'</span>
                  </div>
                  <div className="text-[#94A3B8]">
                    <span className="text-[#F59E0B]">{'}'}</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 p-4 bg-[#3B82F6]/20 backdrop-blur-xl border border-[#3B82F6]/30 rounded-xl animate-float">
                  <Code2 className="w-8 h-8 text-[#3B82F6]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#94A3B8] hover:text-[#06B6D4] transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
      <ContactDialog />
    </section>
  );
}