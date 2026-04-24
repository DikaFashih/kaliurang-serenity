export const Footer = () => {
  return (
    <footer className="relative bg-forest-deep text-cream pt-24 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-cream/15">
          <div className="lg:col-span-5">
            <p className="font-display italic text-terracotta-soft mb-4">Est. 1928</p>
            <h3 className="font-display text-5xl md:text-6xl leading-[1.02] mb-6">
              Villa Van Resink
            </h3>
            <p className="text-cream/65 font-light max-w-md leading-relaxed">
              A heritage colonial villa, hidden in the mountains of Kaliurang.
              A retreat for the slow, the quiet, and the curious.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow !text-cream/60 mb-5">Visit</p>
            <p className="font-light leading-relaxed text-cream/85">
              Jl. Astomulyo, Kaliurang<br />
              Sleman, Yogyakarta<br />
              Indonesia 55582
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow !text-cream/60 mb-5">Contact</p>
            <ul className="space-y-2 font-light text-cream/85">
              <li><a href="https://wa.me/6281234567890" className="hover:text-terracotta-soft transition-colors">WhatsApp</a></li>
              <li><a href="mailto:reservations@villavanresink.com" className="hover:text-terracotta-soft transition-colors">Email</a></li>
              <li><a href="tel:+6281234567890" className="hover:text-terracotta-soft transition-colors">+62 812 3456 7890</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow !text-cream/60 mb-5">Follow</p>
            <ul className="space-y-2 font-light text-cream/85">
              <li><a href="#" className="hover:text-terracotta-soft transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-terracotta-soft transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-terracotta-soft transition-colors">Journal</a></li>
            </ul>
          </div>
        </div>

        {/* Big editorial wordmark */}
        <div className="py-16 overflow-hidden">
          <p className="font-display italic text-cream/10 text-[18vw] leading-none whitespace-nowrap text-center select-none">
            Van Resink
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50 font-light">
          <p>© {new Date().getFullYear()} Villa Van Resink. A heritage of silence.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms</a>
            <a href="#booking" className="hover:text-cream transition-colors">Reservations</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
