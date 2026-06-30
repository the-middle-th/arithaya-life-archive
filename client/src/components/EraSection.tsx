// Design Philosophy: The Crystallized Archive
// EraSection — alternating asymmetric editorial layout along the vertical spine.
import type { Era } from "@/data/eras";

interface Props {
  era: Era;
  align: "left" | "right";
}

export default function EraSection({ era, align }: Props) {
  const isLeft = align === "left";

  return (
    <section
      id={`era-${era.id}`}
      className="relative scroll-mt-24 py-14 md:py-20"
    >
      <div className="container">
        <div
          className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
            isLeft ? "" : "md:[direction:rtl]"
          }`}
        >
          {/* Text block */}
          <div className={`reveal ${isLeft ? "md:text-right" : "md:text-left"} [direction:ltr]`}>
            <div
              className={`flex items-baseline gap-4 mb-3 ${
                isLeft ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <span className="font-display text-6xl md:text-7xl font-700 text-gold/30 leading-none">
                {era.numeral}
              </span>
              <span className="font-mono-label text-[0.7rem] text-gold">
                {era.yearRange}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
              {era.title}
            </h2>
            <p className="font-display italic text-xl text-archival-green mb-5">
              {era.subtitle}
            </p>
            <p className="text-[0.97rem] leading-relaxed text-foreground/85 mb-5">
              {era.narrative}
            </p>

            <div
              className={`border-l-2 border-gold pl-4 py-1 mb-5 ${
                isLeft ? "md:border-l-0 md:border-r-2 md:pr-4 md:pl-0" : ""
              }`}
            >
              <span className="font-mono-label text-[0.6rem] text-gold block mb-1">
                บทเรียนที่ตกผลึก
              </span>
              <p className="font-serif text-[1.02rem] leading-relaxed text-foreground/90">
                {era.lesson}
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-2 ${
                isLeft ? "md:justify-end" : "md:justify-start"
              }`}
            >
              {era.keywords.map((kw) => (
                <span
                  key={kw}
                  className="font-mono text-[0.65rem] px-2.5 py-1 border border-border rounded-sm text-muted-foreground bg-card"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Image / document block */}
          <div className="reveal [direction:ltr]">
            <figure className="group relative">
              <div className="absolute -inset-2 bg-gold/5 rounded-sm rotate-1 transition-transform duration-300 group-hover:rotate-2" />
              <div className="relative overflow-hidden rounded-sm border border-border shadow-[0_8px_30px_rgba(60,40,20,0.12)]">
                <img
                  src={era.image}
                  alt={era.title}
                  loading="lazy"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent pointer-events-none" />
              </div>
              <figcaption className="font-mono-label text-[0.6rem] text-muted-foreground mt-3 text-center">
                ยุคที่ {era.numeral} — {era.title}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
