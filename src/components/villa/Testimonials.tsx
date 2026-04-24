import { useReveal } from "@/hooks/use-reveal";

const quotes = [
  {
    text: "We arrived as guests and left as keepers of a memory. The mist, the candlelight, the silence — utterly cinematic.",
    author: "Adrienne L.",
    place: "Paris",
  },
  {
    text: "A piece of old Java preserved with such care. Every corner is a photograph. Every meal, a slow ceremony.",
    author: "Hiroshi K.",
    place: "Kyoto",
  },
  {
    text: "It does not feel like a hotel — it feels like inheriting, briefly, a beautiful family house in the mountains.",
    author: "Ines M.",
    place: "Lisbon",
  },
];

export const Testimonials = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative fluid-section-y bg-forest-deep text-cream overflow-hidden">
      <div className="container mx-auto fluid-gutter-x">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p data-reveal className="reveal eyebrow !text-cream/60 mb-6 flex items-center gap-4">
            <span className="editorial-rule" /> Voices of the House
          </p>
          <h2 data-reveal className="reveal font-display fluid-display-md text-balance">
            What guests <em className="italic font-light text-terracotta-soft">remember.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14">
          {quotes.map((q, i) => (
            <figure
              key={q.author}
              data-reveal
              data-delay={i * 150}
              className="reveal flex flex-col"
            >
              <span className="font-display italic text-terracotta-soft text-6xl md:text-7xl leading-none mb-4 md:mb-6">"</span>
              <blockquote className="font-display text-xl md:text-[1.65rem] leading-[1.4] text-cream/90 text-pretty">
                {q.text}
              </blockquote>
              <figcaption className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-cream/15">
                <p className="text-sm tracking-wider">{q.author}</p>
                <p className="eyebrow !text-cream/50 mt-1">{q.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
