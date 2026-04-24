import { useEffect } from "react";
import { Navigation } from "@/components/villa/Navigation";
import { Hero } from "@/components/villa/Hero";
import { Story } from "@/components/villa/Story";
import { Experiences } from "@/components/villa/Experiences";
import { Gallery } from "@/components/villa/Gallery";
import { Amenities } from "@/components/villa/Amenities";
import { Testimonials } from "@/components/villa/Testimonials";
import { Booking } from "@/components/villa/Booking";
import { Location } from "@/components/villa/Location";
import { Footer } from "@/components/villa/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Villa Van Resink — A Heritage Retreat Beneath Merapi, Kaliurang";

    const ensureMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    ensureMeta(
      "description",
      "Villa Van Resink — a colonial heritage villa hidden in the misty mountains of Kaliurang, Yogyakarta. A timeless tropical retreat beneath Mount Merapi."
    );
    ensureMeta("og:title", "Villa Van Resink — A Heritage Retreat Beneath Merapi", "property");
    ensureMeta(
      "og:description",
      "Where colonial heritage, mountain mist, and tropical silence create an unforgettable escape in Kaliurang, Yogyakarta.",
      "property"
    );
    ensureMeta("og:type", "website", "property");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + "/";

    // JSON-LD
    const ldId = "ld-lodging";
    let ld = document.getElementById(ldId);
    if (!ld) {
      ld = document.createElement("script");
      ld.id = ldId;
      (ld as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: "Villa Van Resink",
      description:
        "A colonial heritage villa retreat in Kaliurang, Yogyakarta, beneath Mount Merapi.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kaliurang",
        addressRegion: "Yogyakarta",
        addressCountry: "ID",
      },
      geo: { "@type": "GeoCoordinates", latitude: -7.59, longitude: 110.42 },
    });
  }, []);

  return (
    <main className="bg-cream text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <Story />
      <Experiences />
      <Gallery />
      <Amenities />
      <Testimonials />
      <Booking />
      <Location />
      <Footer />
    </main>
  );
};

export default Index;
