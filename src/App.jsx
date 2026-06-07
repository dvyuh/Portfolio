// App.jsx

import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom'


import NavBar from './Components/Navbar';
import Hero from './Components/Hero';
import Me from './Components/Me';
import CustomCursor from './Components/CustomCursor';
import CasestudyCarouselPage from './Components/CasestudyPage.jsx';
import SidequestCarouselPage from './Components/SidequestPage.jsx';
import ProjectCarouselPage from './Components/ProjectPage.jsx';

import Resume from './Pages/resume';
import Sublevel from './Pages/Sublevel';

import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const containerRef = useRef(null);

  const scrollTo = (id) => {
    gsap.to(containerRef.current, {
      duration: 0.8,
      scrollTo: `#${id}`,
      ease: "power2.inOut"
    });
  };

  return (
    <>
    <CustomCursor/>
    <div ref={containerRef} className="w-full h-screen overflow-y-scroll snap-y snap-mandatory" style={{ scrollbarWidth: 'none' }}>
      <NavBar
        scrollToWork={() => scrollTo('work')}
        scrollToSidequest={() => scrollTo('sidequest')}
        scrollToMe={() => scrollTo('me')}
      />
      <Routes>
      
      <Route path="/resume" element={<Resume/>} />
      <Route path="/sublevel" element={<Sublevel/>} />

      <Route path="/" element={<>
          <Hero />

          <ProjectCarouselPage/>
          <CasestudyCarouselPage/>
          <SidequestCarouselPage/>

          <Me />

        </>
        } />
      </Routes>
    </div>
  </>
  );
}
export default App;