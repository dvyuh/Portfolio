import NavBar from '../Components/Navbar';


function Resume() {
  return (<>
    <NavBar/>

    <div className="min-h-screen w-full bg-neutral-100 text-black flex items-start justify-center py-14 px-4">
      <div className="snap-start  w-full max-w-7xl bg-neutral-100 text-black border-neutral-200 rounded-xl p-12" style={{ fontFamily: "'DM Sans', sans-serif" }} >
        {/* ── Header ── */}
        <div className="flex justify-between items-start pb-6 border-b border-neutral-800 text-black"> 
          <div>
            <h1 
              className="text-4xl font-medium tracking-tight text-black">
              Divya Tyagi
            </h1>
            <p className="text-sm text-neutral-500 mt-1 font-light">
              UI/UX Design · Frontend Development · AI Engineering
            </p>
          </div>
          <div className="text-right text-sm text-neutral-800 leading-7"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            <div><a href="mailto:divya.tyagi.7106@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">divya.tyagi.7106@gmail.com</a></div>
            <div className="space-x-2">
              <a href="https://linkedin.com/in/divya-tyagi-774a8740a" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
              <span>·</span>
              <a href="https://github.com/dvyuh" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
              <span>·</span>
              <a href="https://www.behance.net/divyatyagi9" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">Behance</a>
              <span>·</span>
              <a href="https://www.instagram.com/designsandstuf?igsh=MWVlZTZwcHJvNDQ2cg%3D%3D&utm_source=qr" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">Instagram</a>
            </div>
            <a
              href="images/final_resume.pdf"
              download
              className="inline-flex items-center gap-1.5 mt-1.5 px-3 py-1 border border-neutral-300 rounded-lg text-sm text-black hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
              ↓ Download PDF
            </a>
          </div>
        </div>

        {/* ── Body: 2-col grid ── */}
        <div className="grid mt-6" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>

          {/* LEFT */}
          <div className="pr-6 border-r border-neutral-800 dark:border-neutral-800 space-y-6">

            {/* Education */}
            <Section label="Education">
              <EduRow title="BTech Computer Science" sub="VIT Vellore · 2025–2029" grade="CGPA 8.0" />
              <EduRow title="Class XII · CBSE" sub="Khyati World School, Ahmedabad" grade="75%" />
              <EduRow title="Class X · CBSE" sub="Srs. Gnayan Dham, Vapi" grade="93%" />
            </Section>

            {/* Skills */}
            <Section label="Skills">
              <div className="flex flex-wrap gap-1.5">
                {["Figma","Adobe XD","Photoshop","Premiere Pro","Affinity","Python",
                  "JavaScript","React","HTML/CSS","C / C++","LangChain","Ollama"].map(s => (
                  <span key={s}
                    className="text-xs px-2.5 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-500"
                    style={{ fontFamily: "'DM Mono', monospace" }}>
                    {s}
                  </span>
                ))}
              </div>
            </Section>

            {/* Certification */}
            <Section label="Certification">
              <EduRow
                title="Google UX Design"
                sub="Coursera Professional Certificate"
                grade="7-course · Figma · Research · Prototyping"
                gradeClass="text-sm text-neutral-800 font-sans"
              />
            </Section>

            {/* Achievements */}
            <Section label="Achievements">
              {[
                "Intl. 9th Rank — SOF English Olympiad",
                "Competitive Debating — multi-school tournaments",
                "Full-stack & local LLM orchestration (Python/JS)",
              ].map(a => (
                <p key={a} className="text-sm text-neutral-800 leading-relaxed pl-3 relative before:content-['—'] before:absolute before:left-0">
                  {a}
                </p>
              ))}
            </Section>
          </div>

          {/* Middle */}
          <div className="pl-6 pr-6 border-r border-neutral-800 dark:border-neutral-800 space-y-5">

            {/* Experience */}
            <Section label="Experience">
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-medium">UI/UX Design Intern</span>
                  <span className="text-xs text-neutral-400" style={{ fontFamily: "'DM Mono', monospace" }}>May 2026 – Present</span>
                </div>
                <p className="text-xs text-neutral-400 mb-1">Valscotech</p>
                <ul className="list-disc pl-3 space-y-0.5">
                  {[
                    "Designing wireframes, user flows, and hi-fi prototypes for web & mobile.",
                    "Collaborating cross-functionally to ensure design consistency and feasibility.",
                    "Building scalable design systems to streamline the product lifecycle.",
                  ].map(b => <li key={b} className="text-sm text-neutral-500 leading-relaxed">{b}</li>)}
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-medium">UI/UX Design Intern</span>
                  <span className="text-xs text-neutral-400" style={{ fontFamily: "'DM Mono', monospace" }}>June 2026 – Present</span>
                </div>
                <p className="text-xs text-neutral-400 mb-1">Ai Aiden Technology</p>
                <ul className="list-disc pl-3 space-y-0.5">
                  {[
                    "Developed interactive user flows and UI designs in Figma for web and mobile platforms.",
                    "Partnered with engineering teams to translate complex requirements into pixel-perfect, scalable design systems.",
                    "Refined existing interfaces based on feedback to eliminate friction and simplify complex user actions.",
                  ].map(b => <li key={b} className="text-sm text-neutral-500 leading-relaxed">{b}</li>)}
                </ul>
              </div>
              
            </Section>


          </div>
          {/*Right*/}
            <div className="pl-6 space-y-5">
            {/* Projects */}
            <Section label="Projects">
              <div className="grid grid-cols-2 gap-2">
                {projects.map(p => (
                  <div key={p.name}
                    className={`border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 ${p.full ? "col-span-2" : ""}`}>
                    <p className="text-sm font-medium mb-0.5">{p.name}</p>
                    <p className="text-xs text-neutral-400 mb-1"
                      style={{ fontFamily: "'DM Mono', monospace" }}>{p.stack}</p>
                    <p className="text-sm text-neutral-500 leading-snug">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Section>
            </div>
          
        </div>
        
      </div>
      
    </div>
    </>
  );
}

/* ── Sub-components ── */
function Section({ label, children }) {
  return (
    <div>
      <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-2"
        style={{ fontFamily: "'DM Mono', monospace" }}>{label}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function EduRow({ title, sub, grade, gradeClass }) {
  return (
    <div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-neutral-400">{sub}</p>
      <p className={gradeClass ?? "text-xs font-mono text-neutral-700 dark:text-neutral-300"}>{grade}</p>
    </div>
  );
}

const projects = [
  { name: "Sublevel", stack: "Figma · Variables · State Machine",
    desc: "Sub-Level is a counter-culture social platform built to decentralize the discovery of micro-events, underground gigs, and DIY community gatherings." },
  { name: "AI Interrogation Room", stack: "Python · LangChain · Ollama",
    desc: "Adversarial agent sim using local Mistral 7B; streaming CLI responses with multi-turn context tracking." },
  { name: "Swiss Weather UI", stack: "Figma · Smart Animate",
    desc: "Minimalist weather app in International Typographic Style; modular grid and hi-fi prototypes with transitions." },
  { name: "Roguelike Dungeon Crawler", stack: "Python · tcod · ECS",
    desc: "Terminal RPG with procedural generation, ECS architecture, and FOV-optimised grid rendering." },
  { name: "Visual Design Portfolio", stack: "Adobe Photoshop · Brutalist / Neo-Grunge",
    desc: "Mixed-media compositions for music/film; raw textures, distressed typography, distinct visual identities.", full: true },
];

export default Resume;