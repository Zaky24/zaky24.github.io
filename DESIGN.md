# Design Direction: Portofolio Ira Zaky Elmar

## 1. Identitas & Karakter Desain
- **Karakter:** Hangat, teknis, profesional, dan berakar pada identitas lokal Minangkabau modern.
- **Sasaran Utama:** Perekrut software engineer, HRD perusahaan teknologi, dan mitra profesional.
- **Dial Antislop:** **ENERGY 2 / RHYTHM 3 / MOTION 2**
  - **ENERGY 2 (Balanced):** Tidak monoton seperti dokumen pemerintah, namun tidak berisik atau penuh gimik seperti agensi eksperimental.
  - **RHYTHM 3 (Varied & Asymmetric):** Setiap section memiliki komposisi visual berbeda. Menghilangkan pola AI yang selalu mengulang: eyebrow uppercase + judul tengah + subjudul + grid kartu seragam.
  - **MOTION 2 (Smooth & Purposeful):** Transisi hover yang presisi, scroll-reveal halus via IntersectionObserver, dan menghormati `prefers-reduced-motion`.

---

## 2. Palet Warna (Aturan Maksimal 2 Warna Inti + 1 Aksen)
1. **Latar Netral (Charcoal & Zinc - Zero Blue Undertones):**
   - Mode Gelap: Dasar `#121214` (Slate 950), Kartu/Permukaan `#18181b` (Slate 900) dan `#1f1f23` (Slate 850), Border `#27272a` (Slate 800).
   - Mode Terang: Dasar `#fafafa` (Slate 50), Kartu/Permukaan `#ffffff`, Border `#e4e4e7` (Slate 200).
2. **Warna Teks Netral:**
   - Mode Gelap: Teks Utama `#fafafa`, Teks Sekunder `#a1a1aa`, Teks Redup `#71717a`.
   - Mode Terang: Teks Utama `#18181b`, Teks Sekunder `#52525b`, Teks Redup `#71717a`.
3. **Aksen Tunggal (Amber / Gold Warm Yellow):**
   - Kode: `#f59e0b` (Hover: `#d97706`).
   - Aturan Pemakaian: Digunakan hemat untuk 1 aksi utama per layar (Primary CTA), indikator aktif, dan aksen motif garis. Tidak dihamburkan di setiap ikon, garis, kartu, dan teks.

---

## 3. Tipografi
- **Teks Isi & UI:** *Plus Jakarta Sans* (modern, keterbacaan tinggi di berbagai ukuran layar).
- **Aksen Kode & Tag Teknis:** *JetBrains Mono* (presisi teknis untuk tech stack dan periode waktu).
- **Aturan Ukuran:** Minimal 12px untuk teks informasi agar memenuhi standar keterbacaan WCAG AA.

---

## 4. Motif Identitas Visual (Minangkabau Modern)
- Menghapus animasi awan SVG generic yang tidak berhubungan dengan web developer asal Padang.
- Menggunakan pembatas aksen geometris terinspirasi ornamen tradisional Minangkabau (pola *Pucuak Rabuang / Itiak Pulang Patang* yang disederhanakan dalam garis SVG minimalis beraksen amber halus).

---

## 5. Hierarki Bentuk & Sudut (Border Radius)
- Menghindari menyeragamkan semua elemen menjadi `rounded-3xl` atau pill shape.
- **Kartu Proyek & Konten:** Radius tegas terstruktur (`rounded-xl` / 12px).
- **Tombol & Input:** Radius interaktif nyaman (`rounded-lg` / 8px).
- **Badge Status:** Radius proporsional (`rounded-md` / 6px).
- **Modal Popup:** Radius fokus lembut (`rounded-2xl` / 16px).

---

## 6. Alasan Setiap Keputusan (R-31 Antislop)
- *Mengapa palet amber dan zinc?* Karena warna amber melambangkan ketelitian, energi hangat, dan kontras tajam di atas zinc gelap tanpa rasa silau biru-ungu klise template AI.
- *Mengapa hero tanpa awan dan typewriter?* Karena typewriter memperlambat pengunjung menyerap informasi utama dalam 3 detik pertama, dan awan SVG generik membebani rendering ponsel.
- *Mengapa proyek E-Voting ditampilkan besar 2 kolom?* Karena E-Voting adalah bukti koding nyata paling kuat yang membuktikan kompetensi sistem informasi, sehingga berhak mendapatkan hierarki visual tertinggi.
- *Mengapa sertifikasi dan organisasi digabung dalam timeline?* Menghindari kartu-kartu duplikat yang monoton dan memberikan alur cerita rekam jejak yang enak dibaca perekrut.
