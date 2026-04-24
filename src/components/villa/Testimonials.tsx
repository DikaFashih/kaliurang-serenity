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
    <section ref={ref} className="relative py-28 md:py-40 bg-forest-deep text-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-2xl mb-20">
          <p data-reveal className="reveal eyebrow !text-cream/60 mb-6 flex items-center gap-4">
            <span className="editorial-rule" /> Voices of the House
          </p>
          <h2 data-reveal className="reveal font-display text-5xl md:text-6xl leading-[1.02] text-balance">
            What guests <em className="italic font-light text-terracotta-soft">remember.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {quotes.map((q, i) => (
            <figure
              key={q.author}
              data-reveal
              data-delay={i * 150}
              className="reveal flex flex-col"
            >
              <span className="font-display italic text-terracotta-soft text-7xl leading-none mb-6">"</span>
              <blockquote className="font-display text-2xl md:text-[1.65rem] leading-[1.4] text-cream/90 text-pretty">
                {q.text}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-cream/15">
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
