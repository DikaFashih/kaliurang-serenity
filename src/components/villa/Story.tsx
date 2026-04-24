import { useReveal } from "@/hooks/use-reveal";
import interior from "@/assets/villa-interior.jpg";
import detail from "@/assets/villa-detail.jpg";

export const Story = () => {
  const ref = useReveal();
  return (
    <section id="story" ref={ref} className="relative py-28 md:py-44 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left — editorial heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p data-reveal className="reveal eyebrow mb-8 flex items-center gap-4">
              <span className="editorial-rule" /> Chapter One — The Estate
            </p>
            <h2 data-reveal className="reveal font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-forest-deep text-balance">
              A century of silence,<br />
              <em className="font-light italic text-olive">held in the mountains.</em>
            </h2>

            <div data-reveal className="reveal mt-10 img-cinematic aspect-[4/5] max-w-md">
              <img
                src={detail}
                alt="Detail of teak wooden shutters and climbing vines on the heritage villa"
                loading="lazy"
                width={1080}
                height={1600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — text columns */}
          <div className="lg:col-span-7 lg:pl-8">
            <div data-reveal className="reveal img-cinematic aspect-[4/5] max-w-lg ml-auto mb-16 lg:-mt-12">
              <img
                src={interior}
                alt="Candlelit interior of Villa Van Resink with arched window opening to the misty garden"
                loading="lazy"
                width={1080}
                height={1600}
                className="w-full h-full object-cover"
              />
            </div>

            <div data-reveal className="reveal space-y-8 max-w-xl text-foreground/85 text-lg font-light leading-[1.85] text-pretty">
              <p>
                <span className="font-display text-5xl text-terracotta float-left mr-3 mt-1 leading-none">B</span>
                uilt in the early decades of the twentieth century by a Dutch
                planter family, Villa Van Resink rests in the cool highlands of
                Kaliurang — a place where Java's volcanic spine meets her
                oldest forests. Time here moves at the pace of the mist.
              </p>
              <p>
                Hand-cut teak shutters open onto gardens of fern and frangipani.
                Lime-washed walls hold the warmth of a hundred mornings.
                Mount Merapi watches in the distance, half-hidden, half-revealed —
                the way the mountain has always been.
              </p>
              <p className="text-olive">
                This is not a hotel. It is a house with a memory. A retreat
                for those who understand that luxury, at its most refined,
                is simply the gift of stillness.
              </p>
            </div>

            <div data-reveal className="reveal mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-border pt-10">
              <div>
                <p className="font-display text-4xl text-forest-deep">1928</p>
                <p className="eyebrow mt-2">Established</p>
              </div>
              <div>
                <p className="font-display text-4xl text-forest-deep">900<span className="text-xl">m</span></p>
                <p className="eyebrow mt-2">Above sea</p>
              </div>
              <div>
                <p className="font-display text-4xl text-forest-deep">7<span className="text-xl">ha</span></p>
                <p className="eyebrow mt-2">Forest grounds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
