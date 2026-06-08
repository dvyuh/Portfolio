import { useState, forwardRef } from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const NavBar = forwardRef(({}, ref) => {

  const [showToast, setShowToast] = useState(false); // message popup

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("divya.tyagi.7106@gmail.com");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
    
  };

  return (
    <>
      {/* Right button */}
      <nav ref={ref} className="flex justify-between items-center bg-neutral-100 text-black sticky p-10 top-0 z-50">
        <div className="navbar-left">
          <HashLink to="/#hero" className="text-2xl font-sans text-black no-underline">
            DIVYA TYAGI
          </HashLink>
        </div>

        {/* Menu button */}
        <div className="navbar-center">
          <ul className="list-none text-xl gap-16 flex m-0 p-0 mr-4">
            <li>
              <HashLink smooth to="/#projects" className="cursor-pointer">Projects</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#casestudies" className="cursor-pointer">Case Studies</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#sidequests" className="cursor-pointer">Side Quests</HashLink>
            </li>
            <li>
              <HashLink smooth to="/#me" className="cursor-pointer">Me</HashLink>
            </li>
          </ul>
        </div>

        {/* contact button */}
        <div className="relative group flex items-center">

          <span className="text-black text-2xl cursor-pointer ml-4">
            CONTACT
          </span>

        {/* CONTACT DROPDOWN */}
          <div className="absolute right-0 top-full pt-2 hidden group-hover:flex flex-col bg-neutral-100 border border-neutral-300 shadow-md min-w-40 z-50">
            <a
              href="https://linkedin.com/in/divya-tyagi-774a8740a"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-sm text-black hover:bg-neutral-200 no-underline transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dvyuh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-sm text-black hover:bg-neutral-200 no-underline transition-colors border-t border-neutral-200"
            >
              GitHub
            </a>
            <button
              onClick={handleEmailCopy}
              className="px-5 py-3 text-sm text-black hover:bg-neutral-200 text-left transition-colors border-t border-neutral-200 cursor-pointer"
            >
              Email
            </button>
          </div>
        </div>
      </nav>

      {/* FIXED TOAST NOTIFICATION */}
      <div 
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs tracking-wider font-medium px-6 py-3.5 rounded-full shadow-lg 
        transition-all duration-300 ease-in-out z-100 pointer-events-none flex items-center gap-2.5 border border-neutral-800 ${
          showToast 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-4"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-emerald-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <span>EMAIL COPIED TO CLIPBOARD</span>
      </div>
    </>
  );
});

export default NavBar;