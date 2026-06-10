import { useState, useEffect } from "react";


function SidequestCarouselPage() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // Tracks "next" or "prev"
  const [, setLoading] = useState(true);

  // Fetch project data
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}JSONs/sidequest.JSON`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load project data from ${import.meta.env.BASE_URL}JSONs/sidequest.JSON`);
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

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

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
    <div className="snap-start min-h-svh w-full bg-neutral-100 flex flex-col justify-between px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-20 relative overflow-visible lg:overflow-hidden font-sans" id="sidequests">

      
      {/* MAIN SPLIT CONTENT AREA */}
      <div className="flex-1 w-full flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-10 lg:gap-20 relative">
      
      <div className="w-full lg:flex-1 lg:max-w-124 relative min-h-96 sm:min-h-112 lg:min-h-112">
      <h1 className="text-base sm:text-lg lg:text-xl font-light text-neutral-400 tracking-[0.35em] sm:tracking-[0.5em] mb-4 lg:mb-0">SIDE QUESTS</h1>
        
        {/* LEFT SIDE: TEXT SLIDER */}
        <div className="relative w-full min-h-88 sm:min-h-104 lg:min-h-128">
          {projects.map((project, index) => {
            const positionClass = getPositionClass(index);

            return (
              <div
                key={project.id || index}
                className={`absolute inset-0 flex flex-col justify-start lg:justify-center transition-all duration-700 ease-in-out transform ${positionClass}`}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-medium mb-3 sm:mb-4 lg:mb-5">{project.title}</h2>
                <p className="max-w-2xl text-sm sm:text-base text-[#555] leading-[1.6] mb-6 sm:mb-8 lg:mb-10">
                  {project.description}
                </p>

                <div className="border-t-[#ddd] border-t border-solid">
                  <div className="flex justify-between gap-4 px-0 py-3 sm:py-4 border-b-[#ddd] border-b border-solid">
                    <span className="text-[#888] text-xs sm:text-sm">Year</span>
                    <span className="text-[#111] text-sm sm:text-[15px] max-w-[70%] text-right">{project.year}</span>
                  </div>
                  <div className="flex justify-between gap-4 px-0 py-3 sm:py-4 border-b-[#ddd] border-b border-solid">
                    <span className="text-[#888] text-xs sm:text-sm">Role</span>
                    <span className="text-[#111] text-sm sm:text-[15px] max-w-[70%] text-right">{project.role}</span>
                  </div>
                  <div className="flex justify-between gap-4 px-0 py-3 sm:py-4 border-b-[#ddd] border-b border-solid">
                    <span className="text-[#888] text-xs sm:text-sm">Scope</span>
                    <span className="text-[#111] text-sm sm:text-[15px] max-w-[70%] text-right">{project.scope}</span>
                  </div>
                  <div className="flex justify-between gap-4 px-0 py-3 sm:py-4 border-b-[#ddd] border-b border-solid">
                    <span className="text-[#888] text-xs sm:text-sm">Status</span>
                    <span className="text-[#111] text-sm sm:text-[15px] max-w-[70%] text-right">{project.status}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>

        {/* RIGHT SIDE: IMAGES SLIDER */}
        <div className="w-full lg:flex-[1.2] relative h-104 sm:h-128 lg:h-160 overflow-hidden rounded-2xl">
          {projects.map((project, index) => {
            const positionClass = getPositionClass(index);
            const isActive = index === currentIndex;
            const hasLink = project.link && project.link.trim() !== "";
            const cursorClass = hasLink ? "cursor-pointer" : "cursor-default";

const innergrid = (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 sm:gap-3 auto-rows-[12rem] sm:auto-rows-[14rem] md:auto-rows-[20rem] w-full h-full content-start md:content-center">
                {project.boxes?.map((box, boxIndex) => (
                  <div
                    key={boxIndex}
                    className={`${box.rowspan || 'md:row-span-1'} ${box.colspan || 'md:col-span-1'} ${box.color || 'bg-neutral-100'} rounded-xl overflow-hidden`}
                  >
                    {box.image && (
                      <img
                        src={`${import.meta.env.BASE_URL}${box.image}`}
                        alt={box.alt || 'Box image'}
                        className="w-full h-full rounded-2xl object-cover sm:object-center"
                      />  
                    )}
                  </div>
                ))}
              </div>
            );


            const baseClasses = `absolute inset-0 block transition-all duration-700 ease-in-out transform ${positionClass}`;

            if (hasLink) {
              return (
                <a 
                  href={project.link} 
                  key={project.id || index}
                  target="_blank"
                  className={`${baseClasses} ${cursorClass}`}
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  {innergrid}
                </a>
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
      <div className="w-full flex justify-center pt-6 lg:pt-0 pb-0 lg:pb-4">
        <div className="flex items-center gap-4 sm:gap-6 bg-white border border-neutral-200/60 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm z-10">
          
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
          <span className="text-xs sm:text-sm font-medium tracking-wide text-neutral-800 min-w-10 text-center select-none">
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

export default SidequestCarouselPage;