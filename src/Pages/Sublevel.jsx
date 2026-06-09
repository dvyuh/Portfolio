
function Sublevel() {

  return (
<div className="w-full h-screen  bg-neutral-100 p-10 md:px-15 md:py-10 flex flex-col font-sans text-black select-none">
      
      {/* Top Pagination Line */}
      <div className="text-xl font-normal pb-4 border-b border-black mb-10">
        1/8
      </div>

      {/* Main 3-Column Layout */}
      <div className="flex flex-col md:flex-row flex-1 gap-10">
        
        {/* About Column */}
        <div className="flex-1 md:flex-[1.2] md:border-r border-gray-200 md:pr-10 flex flex-col">
          <h2 className="text-3xl font-medium uppercase tracking-tight mb-5 leading-tight">
            ABOUT
          </h2>
          <p className="text-xl leading-snug text-neutral-900">
Sublevel is an intuitive hierarchical productivity tool designed to help professionals break complex tasks down into infinite nested sub-tasks. By eliminating organizational clutter, Sublevel allows teams to deep-dive into deep workflows without losing sight of the macro project goals.          </p>
        </div>

        {/* Problem Statement Column */}
        <div className="flex-1 md:flex-[1.5] md:border-r border-gray-200 md:pr-10 flex flex-col">
          <h2 className="text-3xl font-medium tracking-tight mb-5 leading-tight">
            Problem Statement
          </h2>
          <p className="text-base leading-relaxed text-neutral-800">
Traditional task managers fail when projects grow in complexity, forcing users into flat, rigid lists or messy multi-window views. Users struggle to visualize multi-layered dependencies, leading to broken tracking flows, cognitive overload, and a complete lack of clarity on how micro-tasks connect to the bigger picture.          </p>
        </div>

        {/* Solution Column */}
        <div className="flex-1 md:flex-[1.8] flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight mb-5 leading-tight">
            Solution
          </h2>
          <p className="text-xl leading-snug text-neutral-900">
We engineered a seamless, infinite-nesting interface that treats every task as its own workspace. Sublevel introduces context-aware side panels, keyboard-driven navigation, and dynamic progress inheritance. This allows users to drill down infinitely into technical sub-layers while keeping parent goals cleanly in focus.          </p>
        </div>

      </div>
    </div>

  );
}
export default Sublevel;