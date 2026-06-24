import { motion } from 'framer-motion';

export default function MobileHomeHeader() {
  // 2 new unique projects added alongside your original Notes App
  const projects = [
    {
      id: 1,
      title: 'Notes App',
      description: 'A voice-first clinical intake application built in Python that uses a local Ollama Mistral instance to instantly transcribe spoken patient data and automatically populate structured electronic medical forms.',
      year: '2026',
      role: 'Developer and Designer',
      scope: 'UI/UX Design, Interaction Design, Figma Prototyping',
      status: 'Concept Design',
    },
    {
      id: 2,
      title: 'Solace Space',
      description: 'An AI-powered behavioral health dashboard built with Next.js and Tailwind CSS that translates biometric patterns from wearable devices into actionable stress-management micro-interventions.',
      year: '2026',
      role: 'Lead Full-Stack Developer',
      scope: 'Frontend Architecture, API Integration, Component Library Design',
      status: 'In Development',
    },
    {
      id: 3,
      title: 'OmniBrowse',
      description: 'A spatial multi-window browser extension optimizing research workflows by contextually mapping active tabs into 3D mind-maps using WebGL and vector embedding relationships.',
      year: '2025',
      role: 'Interaction Engineer',
      scope: 'Spatial UI Systems, WebGL Canvas Optimization, Extension Architecture',
      status: 'Shipped v1.2',
    }
  ];

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#F8F8F8', color: 'black', fontFamily: "'Host Grotesk', sans-serif", paddingBottom: '100px' }}>
      
      {/* HEADER SECTION */}
      <header style={{ maxWidth: '1200px', margin: '0 auto', padding: '71px 32px 0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: '400', letterSpacing: '-0.02em', margin: 0 }}>DIVYA TYAGI</h1>
        <a href="#contact" style={{ fontSize: '40px', fontWeight: '400', letterSpacing: '-0.02em', textDecoration: 'none', color: 'black' }}>CONTACT</a>
      </header>

      {/* NAVIGATION SECTION */}
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '90px 32px 0 32px' }}>
        <div style={{ display: 'flex', gap: '54px', flexWrap: 'wrap' }}>
          <a href="#projects" style={{ fontSize: '24px', fontWeight: '400', textDecoration: 'none', color: 'black' }}>Projects</a>
          <a href="#case-studies" style={{ fontSize: '24px', fontWeight: '400', textDecoration: 'none', color: 'black' }}>Case Studies</a>
          <a href="#side-quests" style={{ fontSize: '24px', fontWeight: '400', textDecoration: 'none', color: 'black' }}>Side quests</a>
          <a href="#me" style={{ fontSize: '24px', fontWeight: '400', textDecoration: 'none', color: 'black' }}>ME</a>
        </div>
      </nav>

      {/* HERO HERO SECTION */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '318px 32px 329px 32px' }}>
        <p style={{ fontSize: '40px', fontWeight: '400', lineHeight: '46px', maxWidth: '800px', margin: 0 }}>
          Staring at code, moving pixels,<br />
          and making things work.<br />
          Currently figuring out the rest.
        </p>
      </main>

      {/* PROJECTS SECTION HEAD */}
      <section id="projects" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ width: '100%', height: '1px', backgroundColor: '#777777', marginBottom: '37px' }} />
        <h2 style={{ fontSize: '36px', fontWeight: '300', margin: '0 0 123px 0', letterSpacing: '0.05em' }}>PROJECTS</h2>
      </section>

      {/* DRAGGABLE CAROUSEL SECTION */}
      <div style={{ overflow: 'hidden', width: '100%', paddingLeft: '32px', cursor: 'grab' }}>
        <motion.div 
          drag="x" 
          dragConstraints={{ left: -600, right: 0 }} 
          style={{ display: 'flex', gap: '114px', width: 'max-content' }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {projects.map((project) => (
            <article key={project.id} style={{ width: '340px', flexShrink: 0 }}>
              <h3 style={{ fontSize: '24px', fontWeight: '400', margin: '0 0 42px 0' }}>{project.title}</h3>
              <p style={{ fontSize: '16px', fontWeight: '400', lineHeight: '22px', margin: '0 0 120px 0', minHeight: '110px' }}>
                {project.description}
              </p>
              
              {/* METADATA TABLES */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#777777' }} />
                
                <div>
                  <span style={{ color: '#777777', fontSize: '20px', display: 'block', marginBottom: '8px' }}>Year</span>
                  <span style={{ color: 'black', fontSize: '16px' }}>{project.year}</span>
                </div>
                
                <div style={{ width: '100%', height: '1px', backgroundColor: '#777777' }} />
                
                <div>
                  <span style={{ color: '#777777', fontSize: '20px', display: 'block', marginBottom: '8px' }}>Role</span>
                  <span style={{ color: 'black', fontSize: '16px' }}>{project.role}</span>
                </div>
                
                <div>
                  <span style={{ color: '#777777', fontSize: '20px', display: 'block', marginBottom: '8px' }}>Scope</span>
                  <span style={{ color: 'black', fontSize: '16px', lineHeight: '22px', display: 'block' }}>{project.scope}</span>
                </div>
                
                <div style={{ width: '100%', height: '1px', backgroundColor: '#777777' }} />
                
                <div>
                  <span style={{ color: '#777777', fontSize: '20px', display: 'block', marginBottom: '8px' }}>Status</span>
                  <span style={{ color: 'black', fontSize: '16px' }}>{project.status}</span>
                </div>
                
                <div style={{ width: '100%', height: '1px', backgroundColor: '#777777' }} />
              </div>
            </article>
          ))}
        </motion.div>
      </div>

    </div>
  );
}