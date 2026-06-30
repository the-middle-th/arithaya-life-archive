# ชีวิตที่ตกผลึก — หอจดหมายเหตุชีวิต (Arithaya Life Archive)

เว็บไซต์ **Interactive Timeline** ที่ร้อยเรียงเรื่องราวชีวิตผ่าน **8 ยุคสมัย** ตั้งแต่ "เด็กชายจากกรุงเทพฯ" จนถึง "ARITHAYA" ออกแบบในธีม *The Crystallized Archive* — สุนทรียะแบบหอจดหมายเหตุระดับสถาบัน (warm parchment, deep ink, aged gold)

🔗 **เว็บไซต์ (GitHub Pages):** https://the-middle-th.github.io/arithaya-life-archive/

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (static build)
- **Tailwind CSS 4** + shadcn/ui
- **Wouter** (client-side routing)

## การพัฒนาในเครื่อง (Local Development)

```bash
pnpm install
pnpm dev
```

เปิดเบราว์เซอร์ที่ `http://localhost:3000/`

## การ Build

```bash
pnpm exec vite build
```

ไฟล์ static จะถูกสร้างที่ `dist/public/`

## การเผยแพร่ (Deployment)

เว็บไซต์เผยแพร่อัตโนมัติผ่าน **GitHub Pages** ด้วย GitHub Actions
ทุกครั้งที่ push ขึ้น branch `main` workflow ใน `.github/workflows/deploy.yml`
จะ build และ deploy ให้โดยอัตโนมัติ

> หมายเหตุ: ไซต์ถูกเสิร์ฟใต้ base path `/arithaya-life-archive/`
> (กำหนดผ่าน env `VITE_BASE` ขณะ build บน CI)

## โครงสร้างหลัก

```
client/
  src/
    pages/Home.tsx          ← หน้าหลัก (timeline 8 ยุคสมัย)
    components/             ← SiteHeader, EraSection ฯลฯ
    data/eras.ts            ← ข้อมูล 8 ยุคสมัย (single source of truth)
    index.css               ← ธีม The Crystallized Archive
  public/images/            ← ภาพประกอบ (hero, logo, era images)
```

---

© โครงการ "ชีวิตที่ตกผลึก — The Making of Arithach Chartariyapong"
