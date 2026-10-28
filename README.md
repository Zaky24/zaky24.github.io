# Portofolio Resmi Ira Zaky Elmar

Website portofolio resmi **Ira Zaky Elmar**, Web Developer (PHP, Laravel, CodeIgniter, MySQL) & Desainer Logo, mahasiswa Manajemen Informatika di Politeknik LP3I Padang.

Situs live dapat diakses di: **[https://zaky24.github.io/](https://zaky24.github.io/)**

---

## 🛠️ Teknologi & Arsitektur
- **Struktur:** HTML5 Semantik murni (tanpa framework runtime/backend)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) dikompilasi ke `dist/output.css` (< 30 KB)
- **Logika & Interaktivitas:** Vanilla JavaScript (tanpa dependensi berat)
- **Tipografi:** Plus Jakarta Sans & JetBrains Mono (Google Fonts)
- **Aset & Gambar:** Format WebP terkompresi (< 150 KB) dengan WebP profile image dan SVG atmosphere
- **SEO & Validasi:** Schema JSON-LD (`Person`, `ProfessionalService`), Open Graph, Twitter Cards, `robots.txt`, dan `sitemap.xml`

---

## 🚀 Cara Menjalankan Secara Lokal

### 1. Prasyarat
- [Node.js](https://nodejs.org/) (v18 ke atas) & npm

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Mode Pengembangan (Watch CSS)
```bash
npm run dev
```

### 4. Build untuk Produksi
```bash
npm run build
```

### 5. Menjalankan Server Lokal
Gunakan ekstensi Live Server di VS Code / IDE, atau perintah Python bawaan:
```bash
python -m http.server 3000
```
Buka browser di `http://localhost:3000/`.

---

## 📦 Deployment ke GitHub Pages

Repositori ini siap di-deploy langsung ke **GitHub Pages**:
1. Pastikan repositori bernama `Zaky24.github.io`.
2. Masuk ke tab **Settings** di GitHub > **Pages**.
3. Pada bagian **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
4. Klik **Save**. Dalam beberapa menit, website akan otomatis tayang di `https://zaky24.github.io/`.

---

## 📋 Struktur File
```
.
├── dist/
│   └── output.css           # CSS hasil kompilasi Tailwind + Custom Tokens (< 30 KB)
├── src/
│   └── input.css            # Source CSS (Tailwind directives + Tokens)
├── image/                   # Aset gambar WebP, Favicon, OG Banner, SVG
├── cv/
│   └── My-CV.pdf            # Berkas CV resmi
├── index.html               # Halaman utama portofolio
├── script.js                # Interaktivitas (Theme, Modal, Filter, Clipboard)
├── tailwind.config.js       # Konfigurasi palet Amber & Charcoal Zinc
├── TODO-KONTEN.md           # Lembar inventarisasi data riil pemilik
├── PRD.md                   # Dokumen Product Requirements & Rencana Fase
├── sitemap.xml              # Peta situs untuk Google Search Console
├── robots.txt               # Panduan perayapan bot mesin pencari
└── package.json             # Skrip build & dependensi dev
```

---

## 📄 Lisensi
Hak Cipta © 2026 Ira Zaky Elmar. Seluruh hak cipta dilindungi undang-undang.
