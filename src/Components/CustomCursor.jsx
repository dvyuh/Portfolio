import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import gsap from "gsap";

function CustomCursor() {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);
  const location = useLocation(); // route changes

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = labelRef.current;

    // Shrinks cursor back to default
    const forceReset = () => {
      gsap.killTweensOf(cursor);
      gsap.killTweensOf(label);
      gsap.set(cursor, {
        width: 24,
        height: 24,
        backgroundColor: "#ffffff",
        mixBlendMode: "difference",
      });
      gsap.set(label, { opacity: 0 });
    };

    // Run the reset immediately whenever the route changes
    forceReset();

    const onMove = (e) => {
      gsap.set(cursor, { x: e.clientX, y: e.clientY });
    };

    const onEnter = () => {
      gsap.killTweensOf(cursor);
      gsap.killTweensOf(label);
      gsap.to(cursor, {
        width: 90, height: 90,
        backgroundColor: "#000000",
        mixBlendMode: "normal",
        duration: 0.35, ease: "power3.out",
      });
      gsap.to(label, { opacity: 1, duration: 0.2, delay: 0.15 });
    };

    const onLeave = () => {
      gsap.killTweensOf(cursor);
      gsap.killTweensOf(label);
      gsap.to(cursor, {
        width: 24, height: 24,
        backgroundColor: "#ffffff",
        mixBlendMode: "difference",
        duration: 0.35, ease: "power3.out",
      });
      gsap.to(label, { opacity: 0, duration: 0.15 });
    };

    const onMouseOver = (e) => {
      const target = e.target.closest(
        "a:not([data-no-cursor]), button:not([data-no-cursor]), [data-cursor]"
      );
      if (target) onEnter();
    };

    const onMouseOut = (e) => {
      const target = e.target.closest(
        "a:not([data-no-cursor]), button:not([data-no-cursor]), [data-cursor]"
      );
      if (target) {
        const related = e.relatedTarget;
        if (!target.contains(related)) onLeave();
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [location.pathname]); 

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-99999 rounded-full flex items-center justify-center"
      style={{
        width: 24, height: 24,
        backgroundColor: "#ffffff",
        mixBlendMode: "difference",
        transform: "translate(-50%, -50%)",
        willChange: "transform",
      }}
    >
      <span
        ref={labelRef}
        className="cursor-label text-white text-xs font-medium tracking-widest uppercase"
        style={{ opacity: 0 }}
      >
        View
      </span>
    </div>
  );
}

export default CustomCursor;