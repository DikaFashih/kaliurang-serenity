import { useReveal } from "@/hooks/use-reveal";
import bedroom from "@/assets/villa-bedroom.jpg";
import garden from "@/assets/villa-garden.jpg";
import dining from "@/assets/villa-dining.jpg";
import mountain from "@/assets/mountain-mist.jpg";
import pool from "@/assets/villa-pool.jpg";
import detail from "@/assets/villa-detail.jpg";

const experiences = [
  { num: "I", title: "Heritage Stay", desc: "Sleep within walls that have held a century of stories. Teak four-posters, linen, candlelight.", img: bedroom },
  { num: "II", title: "Mountain Escape", desc: "Wake to volcanic air. Walk paths where the forest meets the clouds of Merapi.", img: mountain },
  { num: "III", title: "Nature Retreat", desc: "Seven hectares of mossy gardens, ancient trees, and the quiet music of running water.", img: garden },
  { num: "IV", title: "Gatherings & Events", desc: "Long candlelit tables beneath the colonnade. Weddings, retreats, intimate celebrations.", img: dining },
  { num: "V", title: "Cultural Atmosphere", desc: "Javanese craft, gamelan evenings, and the slow rituals of the highland villages.", img: detail },
  { num: "VI", title: "Slow Living", desc: "Days measured in mist, tea, and birdsong. Nothing to do — and all the time to do it.", img: pool },
];

export const Experiences = () => {
  const ref = useReveal();
  return (
    <section id="experiences" ref={ref} className="relative py-28 md:py-40 bg-forest-deep text-cream overflow-hidden">
      {/* Atmospheric texture */}
      <div className="absolute inset-0 opacity-30 animate-fog" style={{
        background: "radial-gradient(ellipse at 70% 20%, hsl(var(--moss) / 0.4), transparent 60%)"
      }} />

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mb-20 md:mb-28">
          <p data-reveal className="reveal eyebrow !text-cream/60 mb-6 flex items-center gap-4">
            <span className="editorial-rule" /> Chapter Two — Experiences
          </p>
          <h2 data-reveal className="reveal font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Six ways to <em className="italic font-light text-terracotta-soft">disappear</em> into the mountain.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
          {experiences.map((exp, i) => (
            <article
              key={exp.title}
              data-reveal
              data-delay={i * 100}
              className="reveal group cursor-pointer"
            >
              <div className="img-cinematic aspect-[4/5] mb-6 overflow-hidden">
                <img
                  src={exp.img}
                  alt={exp.title}
                  loading="lazy"
                  width={1080}
                  height={1350}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-1000"
                />
              </div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-display italic text-terracotta-soft text-xl">{exp.num}</span>
                <span className="h-px flex-1 bg-cream/20" />
              </div>
              <h3 className="font-display text-3xl mb-3 group-hover:text-terracotta-soft transition-colors duration-700">
                {exp.title}
              </h3>
              <p className="text-cream/70 font-light leading-relaxed text-pretty">{exp.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
