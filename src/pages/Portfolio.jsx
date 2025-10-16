import Sky3DBackground from '../components/Sky3DBackground';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import DashboardSection from '../components/DashboardSection';
import PortfolioSection from '../components/PortfolioSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import FooterSection from '../components/FooterSection';

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Sky3DBackground />
      <Navigation />
      
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <DashboardSection />
        <PortfolioSection />
        <EducationSection />
        <ExperienceSection />
        <FooterSection />
      </main>
    </div>
  );
}
