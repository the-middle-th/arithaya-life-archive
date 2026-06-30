// Design Philosophy: The Crystallized Archive
// Header — quiet, institutional. Transparent over hero, opaque on scroll.
import { useEffect, useState } from "react";

const LOGO = `${import.meta.env.BASE_URL}images/logo_crystal_208d1c95.png`;

const navItems = [
  { label: "ปฐมบท", href: "#intro" },
  { label: "เส้นเวลา", href: "#timeline" },
  { label: "หอจดหมายเหตุ", href: "#archive" },
  { label: "หนังสือ", href: "#books" },
  { label: "แนวคิด", href: "#making" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={LOGO}
            alt="Arithaya"
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-tight">
            <div className="font-display text-xl font-semibold text-foreground">
              ชีวิตที่ตกผลึก
            </div>
            <div className="font-mono-label text-[0.6rem] text-gold">
              THE LIFE ARCHIVE
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono-label text-[0.7rem] text-muted-foreground hover:text-gold transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
