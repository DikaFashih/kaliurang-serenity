import { useReveal } from "@/hooks/use-reveal";

export const Location = () => {
  const ref = useReveal();
  return (
    <section id="location" ref={ref} className="relative fluid-section-y bg-cream-soft overflow-hidden">
      <div className="container mx-auto fluid-gutter-x">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p data-reveal className="reveal eyebrow mb-6 flex items-center gap-4">
            <span className="editorial-rule" /> The Place
          </p>
          <h2 data-reveal className="reveal font-display fluid-display-md text-forest-deep text-balance">
            Kaliurang, <em className="italic font-light text-terracotta">in the shadow of Merapi.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-start">
          <div data-reveal className="reveal lg:col-span-7 img-cinematic aspect-[4/3] md:aspect-[16/10] border border-border w-full">
            <iframe
              title="Villa Van Resink Location"
              src="https://maps.google.com/maps?q=Kaliurang%20Yogyakarta&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full grayscale-[0.4] contrast-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div data-reveal data-delay="200" className="reveal lg:col-span-5 space-y-8 md:space-y-10">
            <div>
              <p className="eyebrow mb-3">Coordinates</p>
              <p className="font-display text-2xl sm:text-3xl text-forest-deep">7°35′S — 110°25′E</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Elevation</p>
              <p className="font-display text-2xl sm:text-3xl text-forest-deep">~ 900 m above sea level</p>
              <p className="text-foreground/65 font-light mt-2">Cool, breathable mountain air — year round.</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Distances</p>
              <ul className="space-y-3 font-light text-foreground/80">
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span>Yogyakarta City</span><span className="text-forest text-right">28 km · 50 min</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span>Mount Merapi viewpoint</span><span className="text-forest text-right">4 km</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-border pb-3">
                  <span>Borobudur Temple</span><span className="text-forest text-right">52 km</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Adisutjipto Airport</span><span className="text-forest text-right">32 km</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
