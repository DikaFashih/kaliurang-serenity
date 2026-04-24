import { useEffect, useState } from "react";

const navItems = [
  { label: "The Villa", href: "#story" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-border/60 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        <a href="#top" className={`flex flex-col leading-none transition-colors ${scrolled ? "text-charcoal" : "text-cream"}`}>
          <span className="font-display text-xl md:text-2xl tracking-wide">Villa Van Resink</span>
          <span className="eyebrow mt-1 text-[0.55rem] opacity-80">Kaliurang · Est. 1928</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs uppercase tracking-[0.24em] font-light transition-colors hover:opacity-70 ${
                scrolled ? "text-charcoal" : "text-cream/90"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className={`hidden lg:inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] font-light border px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? "border-forest text-forest hover:bg-forest hover:text-cream"
              : "border-cream/60 text-cream hover:bg-cream hover:text-charcoal"
          }`}
        >
          Reserve <span className="opacity-60">→</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden flex flex-col gap-1.5 ${scrolled ? "text-charcoal" : "text-cream"}`}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-forest-deep transition-all duration-700 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-cream text-3xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] border border-cream/60 text-cream px-7 py-3"
          >
            Reserve Your Stay
          </a>
        </div>
      </div>
    </header>
  );
};
