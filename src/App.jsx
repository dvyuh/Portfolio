// App.jsx

import { useRef, useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'


import NavBar from './Components/Navbar';
import Hero from './Components/Hero';
import Me from './Components/Me';
import CustomCursor from './Components/CustomCursor';
import CasestudyCarouselPage from './Components/CasestudyPage.jsx';
import SidequestCarouselPage from './Components/SidequestPage.jsx';
import ProjectCarouselPage from './Components/ProjectPage.jsx';

import MobileHomeHeader from './MobileView/MobileHome.jsx';


import Resume from './Pages/resume';


import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);

function App() {
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  {/* desktop view function  */}
  const DesktopHome = (
    <div ref={containerRef} className="w-full h-screen overflow-y-scroll snap-y snap-mandatory" style={{ scrollbarWidth: 'none' }}>
      <NavBar/>
      <Hero />
      <ProjectCarouselPage/>
      <CasestudyCarouselPage/>
      <SidequestCarouselPage/>
      <Me />
    </div>
  );


{/* mobile view function  */}
  const MobileHome =(
    <div>
      <MobileHomeHeader/>
    </div>
  );


  return (
<>
      <CustomCursor />
      <Routes>
      <Route path="/resume" element={<Resume />} />

        {/* this chages the view if mobile or home  */}
      <Route path="/" element={isMobile ? MobileHome : DesktopHome} />
      </Routes>
    </>
  );
}
export default App;