import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { ProjectModal } from './components/ProjectModal';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ProjectItem } from './config/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWorks = () => {
    const worksElement = document.getElementById('works');
    if (worksElement) {
      worksElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-neutral-100 selection:bg-[#00f59b] selection:text-black">
      <CustomCursor />

      <Navbar onContactClick={scrollToContact} />

      <main>
        <Hero
          onContactClick={scrollToContact}
          onViewWorkClick={scrollToWorks}
        />

        <SelectedWorks
          onSelectProject={(project) => setSelectedProject(project)}
          onContactClick={scrollToContact}
        />

        <About />

        <Services onContactClick={scrollToContact} />

        <Contact />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
