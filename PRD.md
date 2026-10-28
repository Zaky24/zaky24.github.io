# PRD: Portofolio Ira Zaky Elmar (v1.1 Launch Fast, lalu Polish)

> Dokumen ini ditulis untuk dieksekusi oleh model AI coding (Gemini 3.8 Flash). Baca seluruhnya sebelum mengubah file apa pun. Kerjakan berurutan per fase. Jangan loncat fase.

## 0. Aturan Main Untuk Eksekutor

1. **Tanpa backend.** Situs statis murni: HTML, Tailwind CSS, JavaScript vanilla. Deploy ke GitHub Pages (`https://zaky24.github.io/`).
2. **Tailwind wajib**, tapi bukan lewat CDN (lihat Fase 1).
3. **Patuhi antislop** (`.agents/skills/antislop`). Poin yang paling sering dilanggar proyek ini ada di bagian 3.
4. **Dilarang mengarang konten.** Angka, klaim, testimoni, nama, dan hasil proyek harus datang dari pemilik. Kalau data belum ada, tulis penanda `[ISI DATA ASLI]` di file `TODO-KONTEN.md`, jangan di UI.
5. **Dilarang em dash** (karakter panjang) di teks apa pun. Pakai koma, titik, titik dua, atau tanda kurung.
6. Jangan hapus komentar yang tidak berhubungan dengan perubahan. Jangan ubah nomor WhatsApp, email, dan link sosial.
7. Setelah tiap fase: jalankan situs, cek console, klik semua tombol, tes mobile 360px dan desktop 1440px, mode terang dan gelap. Laporkan hasilnya per elemen.

## 1. Konteks & Tujuan

**Pemilik:** Ira Zaky Elmar, mahasiswa Manajemen Informatika Politeknik LP3I Padang, belum lulus.
**Kebutuhan nyata:** harus segera terlihat publik karena butuh kerja, proyek freelance, dan klien asistensi tugas akhir.
**Tujuan situs:** dalam 10 detik pengunjung paham (a) siapa dia, (b) bisa bikin apa, (c) bukti yang bisa dicek, (d) cara menghubungi.

**Tujuan utama pemilik (jawaban langsung dari pemilik):** diterima kerja sebelum wisuda, lalu punya pekerjaan tetap setelah wisuda, di perusahaan pembuat aplikasi/website/software yang punya engineer senior untuk belajar. Saat ini pemilik sedang **magang** dan akan memakai pengalaman magang sebagai laporan kuliah. Persaingan lulusan IT dan tekanan AI membuat pemilik butuh bukti nyata, bukan klaim.

**Target pengunjung, berurutan prioritas:**
1. **Perekrut, HRD, dan engineer/tech lead di perusahaan software** (utama, menentukan seluruh keputusan desain dan konten).
2. Pembimbing dan pihak tempat magang, dosen, relasi organisasi.
3. Klien freelance kecil (UMKM, desain logo) sebagai tujuan sekunder.
4. Asistensi mahasiswa: turunkan ke paling bawah, jangan jadi sorotan (lihat C6).

**Akibat untuk situs:** hero dan struktur harus menjawab pertanyaan perekrut software: "bisa koding apa, mana buktinya (GitHub, demo), pernah kerja dalam tim atau magang?". Layanan freelance tidak boleh menutupi pesan "siap bekerja sebagai Junior Web/Software Developer".

## 1b. Keputusan Pemilik (sudah final)

| # | Keputusan | Tindakan |
|---|-----------|----------|
| K1 | Layanan skripsi diubah jadi bimbingan belajar | Terapkan C6 |
| K2 | Logo huruf "Z" boleh diganti logo buatan pemilik sendiri | Minta file logo (SVG/PNG) di Fase 3. Sebelum ada, pakai nama teks "Ira Zaky Elmar" sebagai penanda sementara, bukan kotak "Z" |
| K3 | Arah desain diserahkan ke agen, pemilik belum punya filosofi | Pakai arah clean-profesional di Bagian 3. Tulis ke `DESIGN.md` agar tercatat. Hasil akhir direview Claude setelah Fase dijalankan model Flash |
| K4 | Motif Minangkabau disetujui | Boleh dibuat dalam bentuk sederhana (garis pembatas section). Tampilkan 2 opsi motif ke pemilik sebelum dipasang permanen |
| K5 | Ada proyek di GitHub, LinkedIn sudah terdaftar tapi belum dirapikan | Tambah tugas merapikan LinkedIn (Fase 2b) |

**Status magang:** tanyakan nama perusahaan, posisi, periode, dan apa yang dikerjakan. Boleh dicantumkan hanya jika diizinkan tempat magang. Tulis tugas yang dikerjakan, bukan klaim hasil.

**Metrik sukses (tanpa angka karangan):**
- Situs live dan terindeks Google.
- Klik tombol WhatsApp bisa dilacak (opsional, lihat Fase 4).
- Lighthouse Performance, Accessibility, SEO, Best Practices: target 90 ke atas di mobile. Ini target, bukan klaim di situs.

## 2. Hasil Analisis Kondisi Sekarang

### 2.1 Yang sudah bagus (pertahankan)
- Struktur file rapi: `index.html`, `script.js`, `style.css`, `cv/`, `image/`.
- SEO dasar lengkap: title, meta, Open Graph, Twitter Card, JSON-LD (`Person`, `ProfessionalService`), `sitemap.xml`, `robots.txt`.
- Dark/light toggle berfungsi, preferensi disimpan di `localStorage`.
- Aksesibilitas dasar ada: `:focus-visible`, `aria-label`, tombol menu mobile, Escape menutup menu dan modal.
- Palet amber + zinc konsisten, tanpa biru-ungu klise.
- Tombol WhatsApp dengan pesan terisi otomatis per layanan. Ini bagus untuk konversi.
- Modal detail proyek dan filter proyek berfungsi.
- Konten berbasis fakta yang bisa dicek: sertifikasi BNSP, Meta, buku ber-ISBN, jabatan organisasi.

### 2.2 Verdict tampilan
**Layak deploy sekarang, tapi belum punya identitas.** Rapi, bersih, bisa dipakai. Masalahnya: terlihat seperti template portofolio AI umum. Kalau logo dan nama diganti, orang tidak akan bisa membedakannya dari portofolio lain.

Masalah spesifik:

| # | Temuan | Dampak |
|---|--------|--------|
| V1 | Setiap section punya komposisi sama: lencana eyebrow uppercase + judul tengah + subjudul + grid kartu. Muncul di Keahlian, Layanan, Proyek, Sertifikasi, Kontak. | Monoton, tidak ada titik fokus (antislop R-05, R-14) |
| V2 | Lencana eyebrow uppercase tracking lebar di atas hampir semua H2 ("Keahlian Teknis", "Solusi & Penawaran Jasa", "Karya & Pengalaman"). | Pola slop klasik, isinya mengulang judul |
| V3 | Hero: lag awan SVG berlapis, glow amber, teks gradien, typewriter, 2 floating badge, bentuk blob morphing sekaligus. | Terlalu banyak dekorasi tanpa tujuan (R-13, R-19). Berat di HP |
| V4 | Hampir semua elemen memakai `rounded-xl`/`2xl`/`3xl` + `shadow` + `card-hover-fx` yang sama. | Tidak ada hierarki (R-11, R-12) |
| V5 | Grid 12 kartu skill dengan ikon seragam dan label "Tingkat Mahir". | Kartu copy-paste, label level tidak punya bukti (R-14) |
| V6 | Bootstrap Icons dipakai untuk semua hal, termasuk ikon yang kurang relevan (`bi-fire` untuk CodeIgniter, `bi-wind` untuk Tailwind, `bi-layers-fill` untuk Laravel). | Ikon tidak bermakna (R-04) |
| V7 | Section "Alur Kerja" 4 kartu bernomor, tanpa judul section utama yang punya `id`. | Template "How it works" (R-05) |
| V8 | Badge "Rekomendasi" di kartu layanan tengah. | Pola "Most Popular" (R-09), dan tidak ada dasar |
| V9 | Hero tag "Tersedia untuk Pekerjaan, Proyek Klien & Asistensi IT" dengan titik berdenyut. | Lencana kapsul dengan status yang tidak nyata (tidak ada mekanisme ketersediaan) |
| V10 | `backdrop-blur` dipakai di navbar, floating badge, dan label gambar proyek. | Melebihi batas dosis glassmorphism (R-10) |
| V11 | Tab filter skill dan proyek dibuat dengan `classList` manual, `text-slate-900` di JS tapi `text-slate-950` di HTML. | Inkonsisten, state aktif bisa beda tampilan |
| V12 | Tidak ada `aria-pressed`/`role="tablist"` di filter. | Aksesibilitas keyboard/screen reader kurang |
| V13 | Foto `profil.jpeg` 787 KB, dimuat langsung di hero dan sebagai favicon. | LCP lambat di jaringan seluler |
| V14 | Tailwind lewat `cdn.tailwindcss.com` + config inline. | Dilarang untuk produksi oleh Tailwind sendiri: lambat, flash gaya, bisa hilang |
| V15 | Peta Google Maps iframe di section Tentang. | Berat, tidak relevan jadi elemen utama. Cukup teks lokasi |

### 2.3 Verdict konten
**Konten kuat sebagai bahan mentah, tapi terlalu panjang, terlalu menjual, dan ada beberapa klaim yang berisiko merugikan kamu.**

Yang bermasalah:

| # | Temuan | Alasan | Perbaikan |
|---|--------|--------|-----------|
| C1 | "Membantu **puluhan** mahasiswa ... sukses mempertahankan tugas akhirnya" (`script.js`, `projectData.akademik`) | Angka tanpa sumber. Bisa dipertanyakan, dan menyangkut etika (jual skripsi) | Hapus angka. Lihat C6 |
| C2 | "dengan tingkat partisipasi tinggi **tanpa downtime**" (E-Voting) | Klaim performa tanpa bukti | Hapus. Ganti dengan fakta yang kamu tahu pasti (kapan dipakai, untuk acara apa) |
| C3 | "Spesialis Sistem Informasi" di title, JSON-LD, dan hero | Mahasiswa belum lulus. "Spesialis" terlalu besar dan mudah dijatuhkan perekrut senior | Ganti "Web Developer (PHP & Laravel), Mahasiswa Manajemen Informatika" |
| C4 | Label "Tingkat Mahir" pada PHP, CodeIgniter, HTML & CSS | Penilaian diri tanpa bukti | Hapus label level. Ganti dengan "dipakai di proyek X" |
| C5 | "Garansi Revisi", "Komitmen Tanggung Jawab", "Garansi pendampingan revisi sampai selesai" | Janji hukum tanpa syarat tertulis | Ganti: "Revisi disepakati di awal" atau tulis batas jelas |
| C6 | Layanan "Asistensi Tugas Akhir & Skripsi" dengan "pengerjaan aplikasi", "siap sidang", "serah terima source code" | Terbaca sebagai joki skripsi. Berisiko ke nama baik dan kampus, apalagi kamu belum lulus dan menjabat di BEM | Ubah jadi **bimbingan belajar & konsultasi teknis** (ERD, DFD, Laravel, debugging). Hilangkan kata "pengerjaan" dan "siap sidang". **Konfirmasi ke pemilik sebelum diubah** |
| C7 | Proyek hanya 3 kartu, dua di antaranya (Buku, Desain) bukan proyek web. Tidak ada link demo atau repo | Pengunjung perekrut tidak bisa menguji kemampuan koding | Tambah link GitHub / demo untuk tiap proyek web. Kalau E-Voting tidak bisa dipublik, tampilkan screenshot + tulis alasan (data kampus) |
| C8 | Gambar proyek `website.jpeg`, `design.jpeg` tidak diverifikasi isinya | Mungkin placeholder atau tidak mewakili hasil nyata | Pemilik cek. Ganti dengan screenshot asli |
| C9 | Teks tentang diri berulang di hero, Tentang, JSON-LD, dan modal | Pengunjung membaca hal yang sama 3 kali | Satu versi pendek di hero, satu versi cerita di Tentang |
| C10 | Tidak ada proofreading menyeluruh. Kalimat panjang berulang ("Konsisten berprestasi peringkat 3 besar ..." terbaca janggal) | Ejaan atau kalimat janggal memberi kesan kurang teliti | Baca ulang semua teks, pecah kalimat panjang |
| C11 | Frasa promosi: "elegan, cepat", "andal", "profesional", "teruji", "Kode bersih" | Klaim tanpa bukti | Ganti dengan fakta: stack yang dipakai, hasil yang bisa dilihat |
| C12 | Kontak: nomor WA ditulis terbuka di HTML dan di JSON-LD | Rentan spam bot. Namun untuk kebutuhan kamu (cari kerja), ini masih bisa diterima | Pertahankan, tapi sebut di README sebagai keputusan sadar |
| C13 | Tidak ada link LinkedIn / GitHub di bagian kontak yang jelas | Perekrut mengecek ini dulu | Tambahkan GitHub (`Zaky24`), LinkedIn jika ada |
| C14 | Raimuna Nasional 2024 ditaruh di kolom "Sertifikasi Profesional" | Salah kategori | Pindahkan ke "Pengalaman" atau "Penghargaan" |
| C15 | Meta Front-End: nama sertifikat dan "Meta Certified Developer Program" | Pastikan sesuai nama di sertifikat asli (Meta Front-End Developer Professional Certificate di Coursera) | Samakan dengan sertifikat asli. Tambah link verifikasi |

**Kesimpulan konten:** ceritanya benar, yaitu mahasiswa MI yang aktif organisasi, punya sertifikasi, dan sudah membangun sistem nyata. Itu cukup kuat. Yang merusak adalah gaya "agensi besar". Ubah nada jadi jujur dan spesifik: **mahasiswa yang sudah membangun sistem yang benar-benar dipakai**.

## 3. Arah Desain (Direction)

> Catatan antislop R-37: arah di bawah ini usulan agen. Pemilik harus konfirmasi atau menimpa lewat `DESIGN.md`. Sebelum Fase 3, tanyakan ke pemilik: **"Mau terasa clean-profesional untuk HRD, atau lebih ekspresif ala portofolio kreatif?"** Default usulan: clean-profesional dengan satu sentuhan karakter.

**Design Read:** Portofolio personal untuk perekrut dan klien lokal, gaya hangat-teknis dengan palet amber + charcoal yang sudah ada. Dial **ENERGY 2 / RHYTHM 3 / MOTION 2**.

**Alasan keputusan:**

| Keputusan | Alasan satu baris |
|-----------|-------------------|
| Pertahankan amber + zinc | Sudah jadi identitas, kontras bagus, tidak klise biru-ungu |
| Amber hanya untuk 1 aksi utama per layar | Aksen di mana-mana = slop (R-29) |
| Font heading: ganti ke satu display font berkarakter (mis. Bricolage Grotesque atau Fraunces) dan tetap Plus Jakarta Sans untuk isi | Pemilik perlu suara tipografi sendiri. Tulis alasan pilihan di `DESIGN.md` |
| Hapus awan SVG dan blob morph, ganti satu motif identitas | Awan tidak berhubungan dengan web developer dari Padang |
| Motif identitas: usulkan **pola songket / ukiran Minangkabau yang disederhanakan** sebagai garis pembatas section, **hanya jika pemilik setuju** (R-23: jangan buat aset tanpa konfirmasi). Alternatif: motif kode `{ }` atau potongan ERD | Memberi identitas lokal yang spesifik, bukan template |
| Bentuk: kartu proyek persegi (radius kecil), tombol radius sedang, bukan semua `rounded-3xl` | Variasi radius = hierarki (R-11) |
| Hero: foto + nama + 1 kalimat + 2 tombol. Tanpa gradient teks, tanpa floating badge | Satu titik fokus per layar |
| Typewriter: hapus atau ganti teks statis | Tidak ada fungsi UX, memperlambat bacaan |

### Logo
Logo saat ini huruf "Z" di kotak amber, dibuat agen sebelumnya tanpa konfirmasi. Tanyakan ke pemilik: pakai ini, pakai inisial "IZE", atau pakai logo buatan sendiri (dia desainer logo, jadi **seharusnya pakai logo sendiri**). Itu juga jadi bukti portofolio.

## 4. Struktur Halaman Baru (Rhythm 3)

Urutan mengikuti cerita pengunjung, bukan template.

1. **Hero.** Foto, nama, satu kalimat posisi yang menyebut target (contoh: "Junior Web Developer. Mahasiswa Manajemen Informatika yang sedang magang", sesuaikan dengan fakta magang), tombol "Lihat proyek" sebagai aksi utama amber, lalu "Unduh CV", GitHub, LinkedIn. WhatsApp turun jadi aksi kedua di Kontak. Perekrut software lebih sering memakai email dan LinkedIn. Satu fakta di bawah: "Mahasiswa Manajemen Informatika, Politeknik LP3I Padang".
2. **Proyek (naik ke posisi 2).** Bukti dulu. Layout tidak seragam: proyek utama (E-Voting) tampil besar, split dua kolom dengan screenshot, masalah, solusi, stack, link. Proyek lain lebih kecil.
3. **Tentang.** Cerita pendek 2 paragraf, foto kedua opsional, lokasi sebagai teks (hapus iframe peta).
4. **Stack.** Bukan grid kartu. Pakai daftar teks dikelompokkan per kategori (Backend, Frontend, Desain, Tools), tiap item dengan keterangan "dipakai di: E-Voting" bila benar. Hapus level kemahiran.
5. **Layanan.** Tiga jenis jasa, tapi **tidak tiga kartu sama**. Bentuk daftar vertikal dengan harga/mulai-dari hanya jika pemilik memberi angka. Hapus badge "Rekomendasi".
6. **Rekam jejak.** Satu timeline gabungan: sertifikasi, organisasi, penghargaan, buku. Urut tahun. Link verifikasi tiap sertifikat jika ada.
7. **Kontak.** WhatsApp, Email, GitHub, LinkedIn. Tombol salin nomor tetap ada.
8. **Footer.** Satu baris: nama, tahun, link CV.

Hapus section "Alur Kerja" 4 kartu, atau gabungkan jadi satu paragraf di Layanan. Menu navbar harus sama persis dengan section yang ada (R-24).

## 5. Fase Eksekusi

### Fase 0: Siapkan dan rilis cepat (target: hari ini)
Tujuan: situs live dulu, sempurna belakangan.

- [ ] Pastikan repo GitHub bernama `Zaky24.github.io`, branch `main`, GitHub Pages aktif dari root.
- [ ] Hapus klaim berisiko saja (C1, C2, C3, C4, C5). Jangan ubah desain di fase ini.
- [ ] Perbaiki typo (C10) dan pindahkan Raimuna (C14).
- [ ] Kompres `image/profil.jpeg` jadi WebP lebar maks 900px, di bawah 150 KB. Sisanya juga di bawah 150 KB. Ganti referensi di HTML, JS, JSON-LD, dan meta OG.
- [ ] Buat favicon terpisah (`favicon.png` 64x64), jangan pakai foto profil 787 KB.
- [ ] Buat gambar OG 1200x630 untuk preview WhatsApp/LinkedIn. **Tanya pemilik dulu** soal isi gambar.
- [ ] Commit, push, buka URL live, cek tombol WhatsApp.

**Kriteria selesai:** URL live, tidak ada klaim tak berdasar, gambar ringan.

### Fase 1: Tailwind dengan benar
- [ ] Inisialisasi proyek build: `npm init -y`, pasang `tailwindcss` (tanyakan ke pemilik versi yang dipakai, v3 atau v4) dan CLI.
- [ ] Pindahkan konfigurasi warna dan font dari `<script>` inline ke `tailwind.config.js` (v3) atau `@theme` di CSS (v4).
- [ ] Hasilkan `dist/output.css` yang sudah di-minify. Hapus tag `cdn.tailwindcss.com`.
- [ ] Tambah skrip: `npm run dev` (watch) dan `npm run build`.
- [ ] Pindahkan token di `style.css` ke satu sumber saja. Hindari menduplikasi warna di CSS dan Tailwind.
- [ ] Tambah `.gitignore` (`node_modules`). **Commit `dist/output.css`** supaya GitHub Pages bisa langsung melayani tanpa langkah build. Alternatif: GitHub Actions, jelaskan di README.
- [ ] Ganti Bootstrap Icons CDN dengan SVG inline untuk ikon yang dipakai saja (maks 15 ikon), atau Phosphor/Tabler yang di-tree-shake. Pilih ikon yang relevan dengan isi (R-04).

**Kriteria selesai:** tidak ada request ke `cdn.tailwindcss.com`, tampilan identik dengan sebelumnya, ukuran CSS di bawah 40 KB.

### Fase 2: Konten (butuh input pemilik)
Buat `TODO-KONTEN.md` berisi pertanyaan, lalu minta pemilik menjawab. **Jangan menebak.**

Pertanyaan wajib (pemilik sudah menjawab sebagian, lihat Bagian 1b):
0. **Magang saat ini:** nama tempat, posisi, tanggal mulai dan selesai, teknologi yang dipakai, tugas nyata yang dikerjakan, dan apakah boleh dicantumkan di situs. Ini bukti terkuat untuk perekrut.
1. E-Voting: dipakai kapan? Untuk pemilihan apa? Berapa pemilih (hanya jika punya data)? Ada screenshot asli, repo, atau demo?
2. Proyek web lain selain E-Voting? Tugas kuliah, latihan, Flutter, dll. Minimal 3 proyek web dengan link.
3. Layanan asistensi: apakah dalam bentuk bimbingan belajar? Setuju mengganti kata "pengerjaan"? (C6)
4. Harga atau "mulai dari"? Atau "hubungi untuk penawaran"?
5. LinkedIn ada? Link verifikasi sertifikat BNSP dan Meta?
6. Gambar `website.jpeg`, `design.jpeg`: asli? Ada hasil logo lain untuk galeri?
7. Boleh mencantumkan IPK 3.79? Tulis semester terakhir (misal "IPK 3.79 sampai semester X") supaya tidak menyesatkan.
8. Bahasa: hanya Indonesia, atau tambah English untuk perekrut luar?

Lalu tulis ulang:
- Headline hero: spesifik, tanpa kata "spesialis", tanpa "solusi".
- Tentang: 2 paragraf, orang pertama, nada jujur.
- Deskripsi proyek: struktur **Masalah, Peran saya, Stack, Hasil (hanya fakta), Link**.
- Hapus kata buzzword: "elegan", "andal", "teruji", "profesional", "seamless", "powerful", "solusi".
- Hapus semua em dash.

**Kriteria selesai:** tiap klaim dapat dibuktikan pemilik dalam satu kalimat.

### Fase 2b: Bukti untuk perekrut (GitHub dan LinkedIn)

Perekrut software mengecek GitHub dan LinkedIn sebelum menghubungi. Kerjakan ini bersama pemilik.

- [ ] **Link verifikasi sertifikat** adalah URL resmi dari penerbit sertifikat yang membuktikan sertifikat itu asli, misalnya halaman "Share certificate" di Coursera untuk Meta Front-End, atau halaman cek sertifikat BNSP/LSP. Perekrut klik link itu untuk memastikan sertifikat tidak palsu. Pemilik cukup membuka akun Coursera dan menyalin link sertifikat, dan menanyakan ke LSP soal nomor/QR verifikasi BNSP. Jika belum ada, tampilkan nama sertifikat saja tanpa link, jangan mengarang.
- [ ] **GitHub:** pilih 3 sampai 4 repo terbaik, pin di profil, tulis `README.md` tiap repo (apa itu, stack, cara jalan, screenshot). Hapus atau private-kan repo yang berantakan. Isi bio dan foto profil GitHub.
- [ ] **LinkedIn:** foto profil jelas, headline "Mahasiswa Manajemen Informatika | Junior Web Developer (PHP, Laravel)", bagian About 3 kalimat, tambahkan pengalaman magang dan organisasi, sertifikat BNSP dan Meta di bagian Licenses, tautkan situs portofolio. Aktifkan "Open to work" untuk perekrut saja.
- [ ] Tambah tombol GitHub dan LinkedIn di hero dan kontak.
- [ ] Siapkan `CV` versi sama dengan situs (satu halaman, bahasa konsisten).

### Fase 3: Redesign sesuai Bagian 3 dan 4
- [ ] Buat `DESIGN.md` dengan identitas, palet (maks 2 warna inti + 1 aksen), font + alasan, radius, dial.
- [ ] Bangun ulang hero tanpa awan, blob, typewriter, floating badge.
- [ ] Urutkan section sesuai Bagian 4. Setiap section punya komposisi berbeda.
- [ ] Hapus eyebrow uppercase. Judul section langsung.
- [ ] Variasikan radius dan bayangan. Bayangan hanya pada elemen yang melayang (modal, dropdown).
- [ ] Batasi `backdrop-blur` ke navbar saja.
- [ ] Gerak (MOTION 2): fade-in saat scroll ringan dengan `IntersectionObserver`, hover pada tombol dan kartu proyek. Hormati `prefers-reduced-motion`.
- [ ] Satu tombol utama amber per layar.

**Kriteria selesai:** jika logo dan nama diganti, situs masih terasa milik orang ini.

### Fase 4: Fungsi, aksesibilitas, performa
- [ ] Filter proyek: gunakan `<button aria-pressed>` dan satu fungsi `setActive()` bersama. Hapus duplikasi kelas aktif di `script.js`.
- [ ] Modal: pakai elemen `<dialog>` atau tambahkan `role="dialog"`, `aria-modal`, `aria-labelledby`, fokus pindah ke modal saat buka, kembali ke tombol saat tutup, tab tidak keluar dari modal.
- [ ] Menu mobile: kunci scroll, tutup dengan Escape (sudah ada), fokus kembali ke tombol.
- [ ] Tombol tema: update `aria-label` sesuai mode. Cegah flash tema dengan skrip kecil di `<head>` yang membaca `localStorage` sebelum render.
- [ ] Cek kontras tiap teks (R-25) di kedua mode, terutama `text-amber-400` di atas latar terang dan teks `text-[10px]`. **Ukuran minimal 12px** untuk teks isi.
- [ ] Target tap minimal 44px.
- [ ] `loading="lazy"` untuk gambar di bawah lipatan, `width`/`height` eksplisit, `fetchpriority="high"` untuk foto hero.
- [ ] State kosong/error: jika gambar gagal dimuat, tampil placeholder teks. Jika clipboard gagal, tampilkan pesan "Salin manual: nomor".
- [ ] Opsional analitik tanpa cookie: **tanyakan pemilik** (Plausible, Umami, atau GoatCounter). Jangan pasang tanpa izin.
- [ ] Perbarui `sitemap.xml` (`lastmod`) dan pastikan `robots.txt` menunjuk ke sitemap yang benar.

**Kriteria selesai:** semua elemen interaktif bisa dipakai dengan keyboard saja. Tidak ada error console. Lighthouse mobile 90 ke atas.

### Fase 5: Uji akhir dan Delivery Gate
Jalankan daftar antislop Delivery Gate dan laporkan PASS/FAIL per item dengan bukti. Tambahkan:

- [ ] Uji di Chrome, Firefox, dan satu HP nyata (atau emulasi 360, 390, 768 px). Tanpa scroll horizontal.
- [ ] Cek preview link di WhatsApp dan LinkedIn Post Inspector.
- [ ] Cek `site:zaky24.github.io` di Google setelah beberapa hari, kirim sitemap di Google Search Console.
- [ ] Uji tombol: Unduh CV, WhatsApp (4 titik), email, salin nomor, filter skill, filter proyek, modal, menu mobile, tema.
- [ ] Pastikan CV (`cv/My-CV.pdf`) versi terbaru dan isinya cocok dengan situs.

## 6. Deliverable

- Situs live di `https://zaky24.github.io/`.
- Source: `index.html`, `src/input.css`, `dist/output.css`, `script.js`, `DESIGN.md`, `TODO-KONTEN.md`, `README.md` (cara jalan dan deploy).
- Laporan klik-tembus per elemen, plus laporan Delivery Gate.

## 7. Di Luar Cakupan (Jangan Dikerjakan)

- Backend, database, login, form kirim ke server.
- Blog, CMS, multi-bahasa (kecuali pemilik minta di Fase 2).
- Testimoni, statistik pengunjung, logo klien, atau angka apa pun tanpa data asli.
- Chatbot, widget AI, animasi 3D.

## 8. Risiko

| Risiko | Mitigasi |
|--------|----------|
| Waktu pemilik terbatas | Fase 0 selesai dulu dan langsung rilis. Fase lain bisa menyusul |
| Konten belum lengkap | Pakai `TODO-KONTEN.md`, tampilkan hanya yang pasti |
| Layanan asistensi disalahartikan sebagai joki | Ubah kata (C6), konfirmasi ke pemilik |
| Gambar proyek tidak mewakili | Ganti dengan screenshot asli |
| Model eksekutor mengarang konten | Aturan 0.4. Tanya, jangan menebak |
