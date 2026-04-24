import { useEffect, useRef } from "react";

export const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
            targets.forEach((t, i) => {
              const delay = Number(t.dataset.delay ?? i * 120);
              setTimeout(() => t.classList.add("in"), delay);
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
};
