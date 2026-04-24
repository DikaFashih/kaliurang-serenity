import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import villaPool from "@/assets/villa-pool.jpg";

type Platform = {
  name: string;
  tagline: string;
  href: string;
  accent: string; // tailwind text color class for the dot
};

const platforms: Platform[] = [
  {
    name: "Airbnb",
    tagline: "Reserve instantly with verified reviews",
    href: "https://www.airbnb.com/",
    accent: "bg-terracotta",
  },
  {
    name: "Booking.com",
    tagline: "Flexible cancellation & best-rate guarantee",
    href: "https://www.booking.com/",
    accent: "bg-gold",
  },
  {
    name: "Agoda",
    tagline: "Member-only pricing for Asia-Pacific",
    href: "https://www.agoda.com/",
    accent: "bg-olive",
  },
  {
    name: "Traveloka",
    tagline: "Pembayaran lokal & cicilan tersedia",
    href: "https://www.traveloka.com/",
    accent: "bg-wood-light",
  },
];

export const Booking = () => {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", dates: "", guests: "2", message: "" });

  const whatsappLink = () => {
    const text = encodeURIComponent(
      `Halo Villa Van Resink,\n\nSaya ${form.name || "[name]"} ingin reservasi.\nTanggal: ${form.dates || "[dates]"}\nTamu: ${form.guests}\nCatatan: ${form.message || "—"}`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  };

  return (
    <section id="booking" ref={ref} className="relative overflow-hidden">
      {/* Image side */}
      <div className="absolute inset-0 lg:left-1/2">
        <img src={villaPool} alt="Villa Van Resink at golden hour" loading="lazy" width={1080} height={1600} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/30 lg:bg-transparent" />
      </div>

      <div className="relative grid lg:grid-cols-2">
        <div className="bg-cream py-24 md:py-32 px-6 md:px-16 lg:px-24">
          <p data-reveal className="reveal eyebrow mb-6 flex items-center gap-4">
            <span className="editorial-rule" /> Reservations
          </p>
          <h2 data-reveal className="reveal font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-forest-deep text-balance">
            Begin your <em className="italic font-light text-terracotta">Kaliurang</em> escape.
          </h2>
          <p data-reveal className="reveal mt-8 text-foreground/70 font-light leading-relaxed max-w-md text-pretty">
            Reservations are personal. Choose your preferred online travel
            platform, or write to us directly on WhatsApp for a quiet,
            tailored welcome.
          </p>

          {/* Online booking platforms */}
          <div data-reveal className="reveal mt-14 max-w-md">
            <p className="eyebrow mb-5 flex items-center gap-4">
              <span className="editorial-rule" /> Book Online
            </p>
            <div className="stagger grid grid-cols-1 sm:grid-cols-2 gap-3">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book Villa Van Resink on ${p.name}`}
                  className="platform-card group flex items-start justify-between gap-3 border border-border/70 bg-cream-soft/40 hover:bg-cream-soft px-5 py-4"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span className={`mt-2 inline-block w-1.5 h-1.5 rounded-full ${p.accent} animate-float-soft`} />
                    <div className="min-w-0">
                      <p className="font-display text-xl text-forest-deep leading-none truncate">
                        {p.name}
                      </p>
                      <p className="mt-1.5 text-[0.72rem] leading-snug text-foreground/60 font-light">
                        {p.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="platform-arrow text-forest-deep/70 text-sm shrink-0 mt-1" aria-hidden>
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* WhatsApp direct */}
          <div data-reveal className="reveal mt-14 max-w-md">
            <p className="eyebrow mb-5 flex items-center gap-4">
              <span className="editorial-rule" /> Reserve Directly via WhatsApp
            </p>

            <form
              onSubmit={(e) => { e.preventDefault(); window.open(whatsappLink(), "_blank"); }}
              className="space-y-7"
            >
              <div>
                <label className="eyebrow block mb-2">Your Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-forest outline-none py-3 font-light text-foreground placeholder:text-stone transition-colors"
                  placeholder="As it should appear on the welcome note"
                />
              </div>
              <div>
                <label className="eyebrow block mb-2">Dates of Stay</label>
                <input
                  value={form.dates}
                  onChange={(e) => setForm({ ...form, dates: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-forest outline-none py-3 font-light text-foreground placeholder:text-stone transition-colors"
                  placeholder="e.g. 12 — 15 June"
                />
              </div>
              <div>
                <label className="eyebrow block mb-2">Guests</label>
                <input
                  type="number" min="1" max="20"
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-forest outline-none py-3 font-light text-foreground transition-colors"
                />
              </div>
              <div>
                <label className="eyebrow block mb-2">A Note</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border focus:border-forest outline-none py-3 font-light text-foreground placeholder:text-stone transition-colors resize-none"
                  placeholder="Anything we should know about your stay"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 bg-forest-deep text-cream px-8 py-4 text-xs uppercase tracking-[0.28em] font-light hover:bg-terracotta transition-colors duration-700"
                >
                  Reserve via WhatsApp
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </button>
                <a
                  href="mailto:reservations@villavanresink.com"
                  className="inline-flex items-center justify-center text-xs uppercase tracking-[0.28em] font-light text-foreground/70 hover:text-forest transition-colors"
                >
                  Or write to us
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Right side spacer that holds the image */}
        <div className="hidden lg:block min-h-[700px]" />
      </div>
    </section>
  );
};
