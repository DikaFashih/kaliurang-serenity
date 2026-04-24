import heroImg from "@/assets/hero-villa.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden grain">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Villa Van Resink at dawn beneath Mount Merapi shrouded in tropical mist"
          className="w-full h-full object-cover animate-slow-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--grad-hero-overlay)" }} />
        <div className="absolute inset-0" style={{ background: "var(--grad-vignette)" }} />
        {/* Drifting fog layer */}
        <div className="absolute inset-0 animate-fog" style={{
          background: "radial-gradient(ellipse at 30% 70%, hsl(var(--fog) / 0.35), transparent 60%)"
        }} />
      </div>

      {/* Editorial frame marks */}
      <div className="absolute top-28 left-6 lg:left-12 z-10 hidden md:block">
        <div className="flex items-center gap-3 text-cream/70">
          <span className="w-8 h-px bg-cream/50" />
          <span className="eyebrow !text-cream/70">N° 01 — Heritage Estate</span>
        </div>
      </div>

      <div className="absolute top-28 right-6 lg:right-12 z-10 hidden md:flex flex-col items-end text-cream/70">
        <span className="eyebrow !text-cream/70">7°35′S — 110°25′E</span>
        <span className="text-xs font-light tracking-widest mt-1">Kaliurang · Yogyakarta</span>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-24 px-6 lg:px-16">
        <div className="max-w-5xl">
          <p className="eyebrow !text-cream/80 mb-6 reveal in" style={{ animationDelay: "0.4s" }}>
            A Colonial Heritage Retreat
          </p>
          <h1 className="font-display text-cream text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight text-balance">
            A Timeless Retreat
            <br />
            <em className="font-light italic">Beneath Merapi</em>
          </h1>
          <p className="mt-8 max-w-xl text-cream/85 text-base md:text-lg font-light leading-relaxed text-pretty">
            Where colonial heritage, mountain mist, and tropical silence
            create an unforgettable escape.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-3 bg-cream text-charcoal px-8 py-4 text-xs uppercase tracking-[0.28em] font-light hover:bg-terracotta hover:text-cream transition-all duration-700"
            >
              Book Your Stay
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#story"
              className="group inline-flex items-center justify-center gap-3 border border-cream/60 text-cream px-8 py-4 text-xs uppercase tracking-[0.28em] font-light hover:bg-cream/10 transition-all duration-700"
            >
              Explore The Villa
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-cream/60">
        <span className="text-[0.6rem] uppercase tracking-[0.4em]">Scroll</span>
        <span className="w-px h-12 bg-cream/40 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/2 bg-cream animate-[fog_2s_ease-in-out_infinite]" />
        </span>
      </div>
    </section>
  );
};
