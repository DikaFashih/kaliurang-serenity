import { useReveal } from "@/hooks/use-reveal";
import bedroom from "@/assets/villa-bedroom.jpg";
import interior from "@/assets/villa-interior.jpg";
import garden from "@/assets/villa-garden.jpg";
import pool from "@/assets/villa-pool.jpg";
import detail from "@/assets/villa-detail.jpg";
import dining from "@/assets/villa-dining.jpg";
import mountain from "@/assets/mountain-mist.jpg";

export const Gallery = () => {
  const ref = useReveal();
  return (
    <section id="gallery" ref={ref} className="relative fluid-section-y bg-cream overflow-hidden">
      <div className="container mx-auto fluid-gutter-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <p data-reveal className="reveal eyebrow mb-6 flex items-center gap-4">
              <span className="editorial-rule" /> Chapter Three — The Estate, In Frames
            </p>
            <h2 data-reveal className="reveal font-display fluid-display-lg text-forest-deep text-balance">
              A visual <em className="italic font-light text-terracotta">journal.</em>
            </h2>
          </div>
          <p data-reveal className="reveal max-w-xs text-foreground/70 font-light leading-relaxed">
            Captured across mornings of mist and evenings of candlelight — a sequence
            of quiet moments at Villa Van Resink.
          </p>
        </div>

        {/* Editorial masonry */}
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <figure data-reveal className="reveal img-cinematic col-span-12 md:col-span-7 aspect-[4/3]">
            <img src={mountain} alt="Mount Merapi shrouded in mist seen from the villa grounds" loading="lazy" width={1920} height={1440} className="w-full h-full object-cover" />
          </figure>
          <figure data-reveal data-delay="100" className="reveal img-cinematic col-span-12 sm:col-span-6 md:col-span-5 aspect-[4/5]">
            <img src={bedroom} alt="Heritage four-poster bedroom with mosquito netting" loading="lazy" width={1080} height={1350} className="w-full h-full object-cover" />
          </figure>
          <figure data-reveal data-delay="200" className="reveal img-cinematic col-span-6 md:col-span-3 aspect-square">
            <img src={detail} alt="Wooden shutters detail" loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
          </figure>
          <figure data-reveal data-delay="300" className="reveal img-cinematic col-span-6 sm:col-span-12 md:col-span-5 aspect-[4/3]">
            <img src={pool} alt="Swimming pool surrounded by tropical foliage in the morning fog" loading="lazy" width={1280} height={960} className="w-full h-full object-cover" />
          </figure>
          <figure data-reveal data-delay="400" className="reveal img-cinematic col-span-12 sm:col-span-6 md:col-span-4 aspect-[4/5]">
            <img src={garden} alt="Garden pathway leading to the colonial villa entrance" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
          </figure>
          <figure data-reveal data-delay="100" className="reveal img-cinematic col-span-12 md:col-span-8 aspect-[16/9]">
            <img src={dining} alt="Outdoor dining table set with vintage porcelain at dusk" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
          </figure>
          <figure data-reveal data-delay="200" className="reveal img-cinematic col-span-12 sm:col-span-6 md:col-span-4 aspect-[4/5]">
            <img src={interior} alt="Candlelit colonial interior with arched window" loading="lazy" width={1080} height={1350} className="w-full h-full object-cover" />
          </figure>
        </div>
      </div>
    </section>
  );
};
