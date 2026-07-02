import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import myPhoto from "../assets/logo-hero.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#b0b0b0]"
      style={{ height: "100svh", minHeight: "600px", marginLeft: 0, marginRight: 0 }}
    >
      {/* ── Photo (grayscale, centered, covers full height) ── */}
      <div className="absolute inset-0 flex justify-center">
        <img 
          src={myPhoto}
          alt="Cahya Yoga Ariyanto"
          className="h-full w-full object-cover object-top"
          style={{ filter: "grayscale(100%)" }}
        />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)",
        }}
      />
	  <div className="absolute top-10 left-14 right-14 z-20 flex justify-between items-start">

        <h2 className="text-white text-xl font-semibold font-light tracking-wide">
          Cahya Yoga Ariyanto
        </h2>

        <p className="text-white/80 text-right max-w-md leading-relaxed">
          Passionate Frontend Developer dedicated to building responsive,
          user-friendly, and high-performance web applications with modern
          technologies and clean, maintainable code.
        </p>

      </div>

      {/* ── Center-right: Arrow button ── */}
      {/* <div className="absolute right-20 top-1/2 -translate-y-1/2 z-20"> */}
	  <div className="absolute left-[68%] top-1/2 -translate-y-1/2 z-20">
        <button
          aria-label="View work"
          className="
            w-16 h-16 rounded-full
            border border-white/50
            flex items-center justify-center
            text-white
            hover:bg-white hover:text-black
            transition-colors duration-300
          "
        >
          <ArrowUpRight size={28} />
        </button>
      </div>

      {/* ── Bottom: Giant title ── */}
      <div
        className="absolute bottom-20 left-0 right-0 z-20 overflow-hidden"
        style={{ lineHeight: 1 }}
      >
        <h1
          className="
            text-white font-bold tracking-tight select-none
            whitespace-nowrap
          "
          style={{
            fontSize: "clamp(60px, 12vw, 165px)",
            lineHeight: 1,
            paddingLeft: "0.15em",
          }}
        >
          Frontend Developer
        </h1>
      </div>

    </section>
  );
};

export default HeroSection;
