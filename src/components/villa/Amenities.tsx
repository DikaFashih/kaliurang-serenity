import { useReveal } from "@/hooks/use-reveal";

const amenities = [
  { num: "01", title: "Spring-fed Pool", desc: "Mountain water, stone deck, framed by tropical green." },
  { num: "02", title: "Seven-Hectare Garden", desc: "Heritage trees, fern grottos, and quiet pathways." },
  { num: "03", title: "Mountain Air", desc: "Cool volcanic atmosphere, year-round, never humid." },
  { num: "04", title: "Gathering Hall", desc: "Open colonnade for long dinners and ceremonies." },
  { num: "05", title: "Outdoor Veranda", desc: "Slow mornings beneath the eaves, listening to the forest." },
  { num: "06", title: "Heritage Architecture", desc: "Original 1928 teak, terracotta, and lime-washed walls." },
];

export const Amenities = () => {
  const ref = useReveal();
  return (
    <section id="amenities" ref={ref} className="relative fluid-section-y bg-cream-soft overflow-hidden">
      <div className="container mx-auto fluid-gutter-x">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p data-reveal className="reveal eyebrow mb-6 flex items-center gap-4">
            <span className="editorial-rule" /> Chapter Four — Amenities
          </p>
          <h2 data-reveal className="reveal font-display fluid-display-lg text-forest-deep text-balance">
            Considered, <em className="italic font-light text-olive">never excessive.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-border">
          {amenities.map((a, i) => (
            <div
              key={a.num}
              data-reveal
              data-delay={i * 80}
              className="reveal group relative border-b border-border sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r py-8 md:py-14 px-5 sm:px-7 md:px-10 hover:bg-cream transition-colors duration-700"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display italic text-terracotta text-2xl">{a.num}</span>
                <span className="h-px w-8 bg-border group-hover:w-16 group-hover:bg-terracotta transition-all duration-700" />
              </div>
              <h3 className="font-display fluid-h3 text-forest-deep mb-2 md:mb-3">{a.title}</h3>
              <p className="text-foreground/70 font-light leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
