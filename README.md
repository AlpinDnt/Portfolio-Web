# ⚡ Modern Split-Screen Portfolio - Alvi Dinata

Website portofolio pengembang web profesional yang minimalis, modern, dan murni fokus pada tipografi (*photo-free*). Proyek ini dirancang dengan tata letak dua kolom (*Split-Screen*) yang responsif, navigasi vertikal pintar (*Scroll Spy*), serta dukungan **multi-bahasa (ID ⇄ EN)** real-time.

💻 **Demo Live**: [portfolio-web-cyan-seven.vercel.app](https://portfolio-web-cyan-seven.vercel.app/)

---

## 🎨 Layout & Desain System

Website ini mengadopsi estetika dark mode premium bertema *charcoal-dark*:
- **Background Utama**: `#0c0c0e` & Elevated Surface Card `#18181b`
- **Warna Teks**: Putih `#ffffff` & Slate Gray `#a1a1aa` (muted)
- **Warna Aksen**: Glowing Sky Blue `#38bdf8` & Green Emerald `#22c55e` (pulse indicator)
- **Tipografi**: Google Fonts *Plus Jakarta Sans* & *Space Grotesk*

---

## 🛠️ Fitur Utama

1. **Split-Screen Layout**: Layout modern di mana panel kiri tetap diam (*fixed*) di layar besar, sementara panel kanan dapat di-scroll secara halus (*scrollable*).
2. **Interactive Code Terminal**: Simulasi editor teks VS Code teranimasi di panel kanan atas yang menampilkan data sintaksis developer secara real-time.
3. **Scroll Spy Navigation**: Garis menu navigasi di panel kiri otomatis melebar dan bertambah terang menyesuaikan posisi scroll aktif Anda di panel kanan.
4. **Real-time Language Switcher**: Pengalih bahasa instan (Bahasa Indonesia ⇄ English) berbasis **React Context API** yang tersimpan di `localStorage`.
5. **Interactive Project Grid**: Showcase kartu proyek yang dapat difilter secara dinamis (*Web App, Frontend, Landing Page*) lengkap dengan **Modal Quick View**.
6. **Validated Contact Form**: Formulir kontak interaktif dengan validasi input dan umpan balik status terkirim terintegrasi.

---

## 📂 Struktur Proyek

```
src/
├── components/
│   ├── About.jsx       # Cerita latar belakang & statistik koding
│   ├── Contact.jsx     # Formulir kontak & info jaringan sosial
│   ├── Footer.jsx      # Footer minimalis & tombol kembali ke atas
│   ├── Hero.jsx        # Pengantar utama & Terminal Kode teranimasi
│   ├── LanguageToggle.jsx # Tombol pengubah bahasa (ID / EN)
│   ├── Projects.jsx    # Grid kartu proyek & Modal detail
│   ├── Skills.jsx      # Progress bar & visualisasi keahlian
│   └── SocialIcons.jsx # Icon SVG sosial media (GitHub, LinkedIn, Instagram)
├── context/
│   └── LanguageContext.jsx # Pengelola bahasa global & local storage
├── data/
│   └── translations.js # Kamus teks dua bahasa terpusat
├── App.jsx             # Pengatur layout utama (split grid & scroll spy)
├── main.jsx            # Entry point React
└── index.css           # Konfigurasi Tailwind CSS & gaya tema khusus
```

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

Pastikan Anda sudah menginstal **Node.js** di komputer Anda.

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/AlpinDnt/Portfolio-Web.git
   cd Portfolio-Web
   ```

2. **Instal seluruh dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan lokal:**
   ```bash
   npm run dev
   ```
   *Buka browser di alamat [http://localhost:5173](http://localhost:5173).*

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```

---

## 📝 Konfigurasi & Kustomisasi Data Anda

Untuk mengubah isi data portofolio (Nama, Bio, daftar Proyek, Keahlian, dan Link Sosial Media), Anda hanya perlu mengedit file **`src/data/translations.js`**. Semua data tersusun rapi dalam format objek kamus yang berurutan.
