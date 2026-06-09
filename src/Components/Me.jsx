import { Link } from "react-router-dom";

function Me(){
    return (
    <section className="snap-start min-h-screen w-full h-screen flex justify-between items-center bg-neutral-100 gap-20 px-25 py-30 font-sans" id="me">
      {/* LEFT IMAGE */}
      <div className="flex-1 flex flex-col items-center gap-8">
        <div className="w-105 h-140 rounded-xl bg-black " />
        <Link to="/resume"
        className="text-xl tracking-widest uppercase text-neutral-800 hover:text-black transition-colors border-b border-neutral-400 hover:border-black pb-0.5 "
        >résumé</Link>

      </div>

      {/* RIGHT TEXT */}

      <div className=" flex-2 flex flex-col gap-10">
        <p className="text-3xl leading-[1.6] text-[#111] max-w-250">
          I am a computer science student and digital designer focused on where
          layout structure and logical systems meet. I spend my time breaking
          away from generic corporate UI templates to design clean, high-intent
          interfaces in Figma and build functional software that works exactly
          as intended.
        </p>

        <p className="text-3xl leading-[1.6] text-[#111] max-w-250">
          In my free time I experiment with tactile graphic design, moving
          pixels around in Affinity, and making motion-heavy layouts. When I am
          not staring at code or organizing design files, I am deep into
          contemporary hip-hop, and analyzing album concepts.
        </p>
      </div>
    </section>
  );


}

export default Me