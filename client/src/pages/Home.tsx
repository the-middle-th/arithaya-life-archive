// ====================================================================
// Design Philosophy: The Crystallized Archive
// Institutional life-archive landing page. Vertical-spine timeline of
// 8 eras, warm parchment + deep ink + aged gold. Asymmetric editorial.
// ====================================================================
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SiteHeader from "@/components/SiteHeader";
import EraSection from "@/components/EraSection";
import { eras, introQuote } from "@/data/eras";
import { BookOpen, FileText, Image as ImageIcon, Film, Network } from "lucide-react";

const HERO = `${import.meta.env.BASE_URL}images/hero_archive_986289e8.png`;

const books = [
  {
    no: "เล่มที่ ๑",
    title: "ชีวิตที่ตกผลึก",
    en: "The Life That Crystallized",
    desc: "บันทึกเรื่องราวชีวิตในรูปแบบนิยายสารคดี ร้อยเรียงผ่าน 8 ยุคสมัย จากเด็กชายผู้ตั้งคำถาม สู่ผู้สร้างคุณค่าให้สังคม",
    status: "ฉบับสมบูรณ์",
  },
  {
    no: "เล่มที่ ๒",
    title: "ARITHAYA",
    en: "A Set of Ideas",
    desc: "ชุดความคิด หลักการ และปรัชญาเบื้องหลังการสร้างนวัตกรรม การผสาน AI กับปัญญาของมนุษย์ และการมองเห็นโอกาสของประเทศไทย",
    status: "กำลังเรียบเรียง",
  },
  {
    no: "เล่มที่ ๓",
    title: "Building Human Intelligence",
    en: "Systems & Lessons",
    desc: "แนวคิด ระบบ และบทเรียนเชิงกลยุทธ์จากการทำงานข้ามภาคธุรกิจ ภาครัฐ และเทคโนโลยี เพื่อเป็นคู่มือของผู้สร้างการเปลี่ยนแปลง",
    status: "กำลังเรียบเรียง",
  },
];

const archiveCategories = [
  { icon: ImageIcon, label: "ภาพถ่าย", desc: "บันทึกภาพในแต่ละช่วงชีวิต" },
  { icon: FileText, label: "เอกสาร", desc: "บทความ รายงาน และเอกสารสำคัญ" },
  { icon: Film, label: "คลิป & บทสัมภาษณ์", desc: "วิดีโอกิจกรรมและบทสนทนา" },
  { icon: Network, label: "โครงการ", desc: "รายละเอียดงานในแต่ละยุคสมัย" },
];

export default function Home() {
  useScrollReveal();

  return (
    <div id="top" className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-paper/30" />
        </div>

        <div className="container relative z-10 pt-24">
          <div className="max-w-2xl">
            <p className="font-mono-label text-[0.72rem] text-gold mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
              หอจดหมายเหตุชีวิต · THE LIFE ARCHIVE
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-700 text-foreground leading-[1.05] mb-4">
              ชีวิตที่ตกผลึก
            </h1>
            <p className="font-display italic text-2xl md:text-3xl text-archival-green mb-3">
              The Making of Arithach Chartariyapong
            </p>
            <div className="gold-rule w-32 my-7" />
            <p className="text-lg leading-relaxed text-foreground/85 mb-3">
              ไม่ใช่เรื่องของคนคนหนึ่ง แต่เป็นเรื่องของ
              <span className="text-gold font-medium"> การสร้างคนคนหนึ่ง</span>
            </p>
            <p className="text-[0.97rem] leading-relaxed text-foreground/70 mb-9 max-w-xl">
              บันทึกการเดินทางผ่าน 8 ยุคสมัย จากวิศวกรผู้เชื่อว่าทุกปัญหามีคำตอบ
              สู่นักเรียนของชีวิตผู้แสวงหาการสร้างคุณค่าให้สังคม
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#timeline"
                className="px-7 py-3.5 bg-gold text-primary-foreground font-medium rounded-sm transition-all duration-200 hover:brightness-105 active:scale-[0.97]"
                style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
              >
                เริ่มการเดินทาง
              </a>
              <a
                href="#books"
                className="px-7 py-3.5 border border-foreground/25 text-foreground font-medium rounded-sm transition-all duration-200 hover:border-gold hover:text-gold active:scale-[0.97]"
              >
                สำรวจหนังสือ
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <span className="font-mono-label text-[0.6rem] text-muted-foreground">
            เลื่อนลงเพื่ออ่าน
          </span>
        </div>
      </section>

      {/* ============ INTRO QUOTE ============ */}
      <section id="intro" className="py-24 md:py-32 scroll-mt-20 bg-paper-dark relative">
        <div className="container max-w-3xl text-center reveal">
          <p className="font-display text-3xl md:text-4xl italic text-foreground/60 mb-8">
            “{introQuote.question}”
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 mb-8">
            {introQuote.body}
          </p>
          <div className="gold-rule w-24 mx-auto mb-8" />
          <p className="font-display text-3xl md:text-5xl font-600 text-gold mb-6">
            {introQuote.answer}
          </p>
          <p className="font-serif text-lg italic text-foreground/70">
            {introQuote.closing}
          </p>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section id="timeline" className="relative scroll-mt-20 py-16">
        <div className="container text-center mb-8 reveal">
          <p className="font-mono-label text-[0.7rem] text-gold mb-3">
            เส้นเวลาแห่งชีวิต · 8 ERAS
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-foreground">
            แปดยุคสมัยแห่งการตกผลึก
          </h2>
        </div>

        {/* Vertical spine */}
        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent"
            aria-hidden
          />
          {eras.map((era, i) => (
            <div key={era.id} className="relative">
              <div
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 items-center justify-center"
                aria-hidden
              >
                <span className="w-3.5 h-3.5 rounded-full bg-gold ring-4 ring-paper shadow-[0_0_12px_rgba(180,130,50,0.5)]" />
              </div>
              <EraSection era={era} align={i % 2 === 0 ? "left" : "right"} />
            </div>
          ))}
        </div>
      </section>

      {/* ============ ARCHIVE ============ */}
      <section id="archive" className="py-24 scroll-mt-20 bg-paper-dark relative">
        <div className="container">
          <div className="max-w-2xl mb-14 reveal">
            <p className="font-mono-label text-[0.7rem] text-gold mb-3">
              คลังจดหมายเหตุ · THE ARCHIVE
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-700 text-foreground mb-5">
              บันทึกที่ตรวจสอบได้
            </h2>
            <p className="text-[0.97rem] leading-relaxed text-foreground/75">
              หอจดหมายเหตุนี้รวบรวมภาพ เอกสาร คลิป และรายละเอียดโครงการ
              พร้อมระบุวันที่ สถานที่ บทบาท และบริบทอย่างครบถ้วน
              เพื่อให้เป็นคลังความรู้ที่คนรุ่นหลังสามารถค้นคว้าและเรียนรู้จากประสบการณ์จริงได้
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {archiveCategories.map((cat) => (
              <div
                key={cat.label}
                className="reveal group bg-card border border-border rounded-sm p-6 transition-all duration-300 hover:border-gold hover:shadow-[0_8px_30px_rgba(60,40,20,0.1)]"
                style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
              >
                <cat.icon className="w-7 h-7 text-gold mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-display text-xl font-600 text-foreground mb-1.5">
                  {cat.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="font-mono-label text-[0.6rem] text-muted-foreground mt-8 text-center">
            * คลังจดหมายเหตุอยู่ระหว่างการรวบรวมและจัดระบบข้อมูล
          </p>
        </div>
      </section>

      {/* ============ BOOKS ============ */}
      <section id="books" className="py-24 scroll-mt-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="font-mono-label text-[0.7rem] text-gold mb-3">
              หนังสือชุด · THE TRILOGY
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-700 text-foreground mb-4">
              The Making of Arithach Chartariyapong
            </h2>
            <p className="text-[0.97rem] text-foreground/75">
              หนังสือสามเล่มที่ร้อยเรียงเรื่องราว แนวคิด และระบบ เข้าด้วยกัน
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {books.map((book) => (
              <article
                key={book.title}
                className="reveal group relative bg-card border border-border rounded-sm p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(60,40,20,0.14)]"
                style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
              >
                <BookOpen className="w-8 h-8 text-gold mb-5" />
                <span className="font-mono-label text-[0.6rem] text-gold mb-2">
                  {book.no}
                </span>
                <h3 className="font-display text-2xl font-700 text-foreground mb-1">
                  {book.title}
                </h3>
                <p className="font-display italic text-base text-archival-green mb-4">
                  {book.en}
                </p>
                <p className="text-sm leading-relaxed text-foreground/75 mb-6 flex-1">
                  {book.desc}
                </p>
                <span className="font-mono-label text-[0.58rem] text-muted-foreground border-t border-border pt-4">
                  {book.status}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THE MAKING OF ============ */}
      <section id="making" className="py-24 scroll-mt-20 bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={HERO} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 max-w-3xl reveal">
          <p className="font-mono-label text-[0.7rem] text-gold-soft mb-4">
            แนวคิดเบื้องหลัง · THE MAKING OF
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-paper mb-7">
            ทำไมต้องบันทึกชีวิต
          </h2>
          <div className="space-y-5 text-[1.02rem] leading-relaxed text-paper/85">
            <p>
              โครงการนี้ไม่ได้เกิดขึ้นเพื่อยกย่องบุคคล หากแต่เกิดขึ้นจากความเชื่อว่า
              ประสบการณ์จริงของคนคนหนึ่ง เมื่อถูกจัดระบบและบันทึกอย่างซื่อตรง
              จะกลายเป็นคลังความรู้ที่มีคุณค่าต่อผู้อื่น
            </p>
            <p>
              เราจัดเก็บภาพและเอกสารจำนวนมาก ทั้งจากการศึกษา การทำงาน การเมือง
              ภาครัฐ ธุรกิจ และชีวิตส่วนตัว เมื่อจัดระบบพร้อมระบุวันที่ สถานที่ บทบาท
              และบริบทอย่างครบถ้วน มันจะไม่ใช่เพียงหนังสือที่อ่านจบแล้ววางไว้บนชั้น
              แต่เป็นคลังความรู้ที่คนรุ่นหลังสามารถค้นคว้า อ้างอิง และเรียนรู้ได้ต่อไป
            </p>
            <blockquote className="border-l-2 border-gold-soft pl-5 py-1 my-7">
              <p className="font-display text-2xl italic text-gold-soft leading-snug">
                “ชีวิตของคนเรา ไม่ได้ถูกกำหนดจากวันที่ประสบความสำเร็จ
                หากแต่ถูกกำหนดจากวันที่เราล้มลง และเลือกจะลุกขึ้นอีกครั้ง”
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="py-14 bg-paper-dark border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}images/logo_crystal_208d1c95.png`}
                alt="Arithaya"
                className="h-8 w-8 object-contain"
              />
              <div>
                <div className="font-display text-lg font-600 text-foreground">
                  ชีวิตที่ตกผลึก
                </div>
                <div className="font-mono-label text-[0.55rem] text-gold">
                  THE LIFE ARCHIVE
                </div>
              </div>
            </div>
            <p className="font-mono text-[0.65rem] text-muted-foreground text-center">
              The Making of Arithach Chartariyapong · หอจดหมายเหตุชีวิต
            </p>
          </div>
          <div className="gold-rule w-full mt-8 opacity-40" />
          <p className="text-center font-mono-label text-[0.55rem] text-muted-foreground mt-6">
            บันทึกของนักเรียนของชีวิต ที่ยังเรียนรู้ไม่จบ
          </p>
        </div>
      </footer>
    </div>
  );
}
