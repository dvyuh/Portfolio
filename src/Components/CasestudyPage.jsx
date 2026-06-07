import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CasestudyCarouselPage() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // Tracks "next" or "prev"
  const [, setLoading] = useState(true);

  // Fetch project data
  useEffect(() => {
    fetch("/Portfolio/JSONs/casestudy.JSON") 
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load project data from /Portfolio/JSONs/casestudy.JSON");//what happens when you dont find json
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching JSON data:", err);
        setLoading(false);
      });
  }, []);

  const totalSlides = projects.length;

  //handles previous
  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  //handles next
  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Helper function to calculate clean, continuous directional transforms
  const getPositionClass = (index) => {
    if (index === currentIndex) return "translate-x-0 z-10 opacity-100";
    
    if (direction === "next") {
      // If going forward, past elements slide out left, new elements slide in from right
      return index < currentIndex ? "-translate-x-full opacity-0 z-0" : "translate-x-full opacity-0 z-0";
    } else {
      // If going backward, past elements slide out right, new elements slide in from left
      return index > currentIndex ? "translate-x-full opacity-0 z-0" : "-translate-x-full opacity-0 z-0";
    }
  };

  return (
    <div className="snap-start min-h-screen w-full h-screen bg-neutral-100 flex flex-col justify-between p-20 relative overflow-hidden font-sans" id="casestudies">
      <h1 className="text-xl font-light text-neutral-400 tracking-[0.5em] translate-y-35">CASE STUDY</h1>
      
      {/* MAIN SPLIT CONTENT AREA */}
      <div className="flex-1 w-full flex justify-between items-center gap-20 relative">
        
        {/* LEFT SIDE: TEXT SLIDER */}
        <div className="flex-1 max-w-125 relative h-112.5 overflow-hidden">
          {projects.map((project, index) => {
            const positionClass = getPositionClass(index);

            return (
              <div
                key={project.id || index}
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out transform ${positionClass}`}
              >
                <h2 className="text-[42px] font-medium mb-5">{project.title}</h2>
                <p className="text-base text-[#555] leading-[1.6] mb-10">
                  {project.description}
                </p>

                <div className="border-t-[#ddd] border-t border-solid">
                  <div className="flex justify-between px-0 py-4 border-b-[#ddd] border-b border-solid">
                    <span className="text-[#888] text-sm">Year</span>
                    <span className="text-[#111] text-[15px] max-w-[70%] text-right">{project.year}</span>
                  </div>
                  <div className="flex justify-between px-0 py-4 border-b-[#ddd] border-b border-solid">
                    <span className="text-[#888] text-sm">Role</span>
                    <span className="text-[#111] text-[15px] max-w-[70%] text-right">{project.role}</span>
                  </div>
                  <div className="flex justify-between px-0 py-4 border-b-[#ddd] border-b border-solid">
                    <span className="text-[#888] text-sm">Scope</span>
                    <span className="text-[#111] text-[15px] max-w-[70%] text-right">{project.scope}</span>
                  </div>
                  <div className="flex justify-between px-0 py-4 border-b-[#ddd] border-b border-solid">
                    <span className="text-[#888] text-sm">Status</span>
                    <span className="text-[#111] text-[15px] max-w-[70%] text-right">{project.status}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE: IMAGES SLIDER */}
        <div className="w-full flex-[1.2] relative h-162.5 overflow-hidden">
          {projects.map((project, index) => {
            const positionClass = getPositionClass(index);
            const isActive = index === currentIndex;
            const hasLink = project.link && project.link.trim() !== "";
            const cursorClass = hasLink ? "cursor-pointer" : "cursor-default";

            const innergrid = (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-[320px] w-full h-full content-center">
              <div className={` ${project.rowspan?.[0] || 'md:row-span-1'} ${project.colspan?.[0] || 'md:col-span-1'} rounded-xl ${project.colors?.[0] || 'bg-neutral-300'}`} />
              <div className={` ${project.rowspan?.[1] || 'md:row-span-1'} ${project.colspan?.[1] || 'md:col-span-1'} rounded-xl ${project.colors?.[1] || 'bg-neutral-300'}`} />
                
              </div>
            );

            const baseClasses = `absolute inset-0 block transition-all duration-700 ease-in-out transform ${positionClass}`;

            if (hasLink) {
              return (
                <Link 
                  to={project.link} 
                  key={project.id || index}
                  className={`${baseClasses} ${cursorClass}`}
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  {innergrid}
                </Link>
              );
            }
            return (
              <div 
                key={project.id || index}
                className={`${baseClasses} ${cursorClass}`}
              >
                {innergrid}
              </div>
            );
          })}
        </div>

      </div>

      {/* CONTROLS AREA */}
      <div className="w-full flex justify-center pb-4">
        <div className="flex items-center gap-6 bg-white border border-neutral-200/60 px-6 py-3 rounded-full shadow-sm z-10">
          
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="text-neutral-500 hover:text-neutral-950 transition-colors p-1"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Slide Counter */}
          <span className="text-sm font-medium tracking-wide text-neutral-800 min-w-10 text-center select-none">
            {currentIndex + 1} / {totalSlides}
          </span>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="text-neutral-500 hover:text-neutral-950 transition-colors p-1"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
        </div>
      </div>

    </div>
  );
}

export default CasestudyCarouselPage;