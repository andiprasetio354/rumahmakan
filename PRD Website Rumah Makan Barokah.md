# PRD Website Rumah Makan Barokah

**Versi:** 1.0 | **Tanggal:** 7 November 2026 | **Status:** Draft untuk review

## 1. Ringkasan Produk

**Barokah** adalah rumah makan khas Lamongan. Website ini berfungsi sebagai etalase digital: menampilkan menu, suasana, lokasi, dan memudahkan pelanggan memesan atau reservasi. Desain mengikuti referensi gambar: tema **gelap (dark mode) yang mewah dan hangat**, foto makanan besar dan dramatis, aksen **oranye**, dan tipografi heading bergaya script/elegan.

**Catatan referensi:** teks pada gambar tidak terbaca jelas, sehingga seluruh copy pada dokumen ini disusun ulang untuk Barokah. Yang dipertahankan dari gambar adalah tata letak, gaya visual, warna, dan nuansa.

**Tagline usulan:** "Cita Rasa Lamongan, Penuh Berkah di Setiap Suapan."

## 2. Tujuan dan Metrik Keberhasilan

| Tujuan | Metrik | Target (3 bulan) |
| --- | --- | --- |
| Meningkatkan pesanan online | Klik tombol Pesan via WhatsApp / GoFood / GrabFood / ShopeeFood | 500+ klik/bulan |
| Meningkatkan kunjungan ke lokasi | Klik "Petunjuk Arah" (Google Maps) | 300+ klik/bulan |
| Membangun citra premium | Rata-rata durasi sesi | > 1 menit 30 detik |
| Performa teknis | Skor Lighthouse mobile | Performance ≥ 85 |
| Jangkauan lokal | Peringkat pencarian "rumah makan lamongan Makassar" | 10 besar |

## 3. Target Pengguna

1. **Keluarga dan pekerja kantoran** yang mencari makan siang/malam dan ingin melihat menu serta harga dengan cepat.
2. **Pelanggan online** yang ingin memesan lewat WhatsApp atau aplikasi ojol.
3. **Penyelenggara acara kecil** (arisan, syukuran, rapat) yang butuh reservasi atau pesan nasi kotak/prasmanan.

Sebagian besar pengunjung memakai **smartphone**, jadi desain wajib *mobile-first* walaupun referensi berbentuk tampilan desktop.

## 4. Ruang Lingkup

**Termasuk (MVP):** Beranda, Menu, Tentang Kami, Galeri, Reservasi, Kontak/Lokasi, tombol pesan via WhatsApp dan ojol, dasbor admin sederhana untuk mengelola menu.

**Tidak termasuk (fase 2):** pembayaran online, akun pelanggan, program loyalitas, aplikasi mobile, sistem kasir/POS.

## 5. Sistem Desain (UI/UX)

### 5.1 Karakter Visual

Gelap, sinematik, hangat. Latar hitam-arang dengan efek cahaya redup (bokeh lilin/lampu) di belakang foto. Foto makanan dibuat close-up, kontras tinggi, uap/asap, piring hitam. Kesan: *fine dining* rasa warung Lamongan yang naik kelas.

### 5.2 Palet Warna

| Peran | Warna | Hex |
| --- | --- | --- |
| Background utama | Hitam arang | `#0D0D0D` |
| Background section/kartu | Abu gelap | `#1A1A1A` |
| Background kartu terangkat | Abu gelap hangat | `#242120` |
| Aksen utama (tombol, ikon, garis) | Oranye | `#F28C38` |
| Aksen hover | Oranye terang | `#FFA55C` |
| Teks utama | Putih gading | `#F5F0E8` |
| Teks sekunder | Abu hangat | `#A8A29A` |
| Garis/border | Abu gelap | `#333030` |

### 5.3 Tipografi

- **Heading display (script elegan):** *Playfair Display Italic* atau *Cormorant Garamond Italic* untuk judul hero dan judul section. Alternatif bergaya script: *Lobster Two*.
- **Label kecil kapital berspasi lebar:** *Montserrat* 12–14 px, letter-spacing 0.15em (contoh: "MENU UNGGULAN").
- **Body:** *Inter* atau *Poppins* 15–16 px, line-height 1.6.
- Skala heading: Hero 56/40 px (desktop/mobile), H2 40/28 px, H3 22/18 px.

### 5.3 Komponen Utama

- **Tombol primer:** latar oranye solid, teks gelap, sudut tajam atau radius 2–4 px, huruf kapital kecil.
- **Tombol sekunder:** outline oranye 1 px, teks oranye/putih, hover terisi oranye.
- **Ornamen pemisah:** garis tipis dengan ikon kecil di tengah (sendok-garpu atau daun), dipakai di bawah judul kartu dan section.
- **Judul section:** diapit garis dekoratif, misalnya "—  MENU UNGGULAN  —", dengan subjudul script di bawahnya.
- **Kartu menu:** latar `#1A1A1A`, ikon bernomor dalam lingkaran outline oranye, judul, deskripsi singkat, ornamen, foto, lalu daftar harga.
- **Efek:** vignette gelap di tepi foto hero, gradasi turun ke hitam agar menyatu dengan section berikutnya, hover zoom lembut pada foto (scale 1.05, 400 ms).

## 6. Struktur Halaman dan Wireframe Section

### 6.1 Beranda (mengikuti urutan pada gambar)

**A. Top Bar (strip tipis di paling atas)**

- Kiri: jam buka, alamat singkat, nomor telepon.
- Kanan: tombol oranye "Pesan Sekarang" (WhatsApp) dan ikon sosial media.

**B. Navigasi (header)**

- Kiri: logo "Barokah" (tulisan script oranye + subteks "Khas Lamongan").
- Kanan: Beranda · Menu · Tentang · Galeri · Reservasi · Kontak.
- Sticky saat scroll, latar menjadi hitam semi-transparan dengan blur. Mobile: hamburger menu.

**C. Hero**

- Foto penuh lebar: hidangan utama, ide: *Bebek Goreng Barokah* atau *Pecel Lele* di piring hitam dengan sambal, di atas permukaan gelap bertekstur, latar bokeh lampu.
- Kiri atas foto: label kecil kapital "SELAMAT DATANG DI", judul besar script "Rumah Makan Barokah", paragraf 2–3 baris, tombol oranye "Lihat Menu".
- Tinggi 90–100 vh di desktop; mobile: teks di bawah foto dengan overlay gradasi.

**D. Section "Menu Unggulan"**

- Judul ornamen: "— MENU UNGGULAN —", subjudul script: "Racikan Lamongan Asli, Sambal Menggigit".
- **3 kartu kolom** (di mobile jadi carousel/stack). Tiap kartu: nomor/ikon dalam lingkaran oranye, nama kategori, deskripsi 1–2 baris, ornamen, foto hidangan, lalu **3 baris daftar menu + harga**.
  - Kartu 1 **Lauk Goreng & Bakar**: foto ayam/bebek goreng.
  - Kartu 2 **Seafood & Ikan**: foto lele/cumi goreng.
  - Kartu 3 **Sup & Nasi Spesial**: foto soto Lamongan atau nasi boranan.
- Di bawah kartu: tombol outline "Lihat Semua Menu".

**E. Section Cerita & Spesial**

- Judul script: "Spesial dari Dapur Barokah".
- Layout 3 kolom: **kartu teks kiri** (judul "Cerita Kami", paragraf tentang resep turun-temurun Lamongan, tombol outline "Baca Selengkapnya") + **2 kartu foto besar** di kanan (misalnya "Paket Keluarga" dan "Paket Nasi Kotak") dengan judul di atas foto dan tombol outline "Pesan" di bawah.

**F. Footer (5 kolom)**

1. Logo dan deskripsi singkat + ikon sosial media.
2. Tautan cepat.
3. Jam operasional.
4. Kontak dan alamat.
5. Newsletter/promo (input email + tombol oranye "Berlangganan") atau peta mini.

- Baris paling bawah: hak cipta © 2026 Rumah Makan Barokah.

### 6.2 Halaman Lain

| Halaman | Isi utama |
| --- | --- |
| **Menu** | Tab kategori (Semua, Lauk, Seafood, Sup, Nasi, Pelengkap, Minuman), kartu menu bergambar dengan nama, deskripsi, harga, label (Favorit, Pedas, Baru). Filter dan pencarian. Tombol "Pesan via WhatsApp" per item atau keranjang pesan ringkas. |
| **Tentang Kami** | Cerita Barokah, nilai (halal, bahan segar, sambal buatan sendiri), foto dapur dan tim. |
| **Galeri** | Grid foto masonry dengan lightbox. |
| **Reservasi** | Form: nama, WhatsApp, tanggal, jam, jumlah orang, catatan. Hasil dikirim ke WhatsApp pemilik dan email. |
| **Kontak** | Alamat, jam buka, Google Maps embed, tombol petunjuk arah, form pesan, tautan GoFood/GrabFood/ShopeeFood. |

## 7. Daftar Menu (Konsep Rumah Makan Lamongan)

Harga bersifat **contoh** dan dapat disesuaikan pemilik. Seluruh menu sudah termasuk nasi hangat, lalapan, dan sambal kecuali disebutkan lain.

### Lauk Goreng & Bakar

| Menu | Deskripsi | Harga |
| --- | --- | --- |
| Bebek Goreng Barokah | Bebek empuk bumbu rempah, digoreng kering, sambal terasi | Rp 38.000 |
| Ayam Goreng Lamongan | Ayam kampung bumbu kuning, serundeng gurih | Rp 25.000 |
| Ayam Penyet | Ayam goreng dipenyet sambal bawang pedas | Rp 24.000 |
| Ayam Bakar Madu | Ayam bakar bumbu manis gurih | Rp 26.000 |
| Tahu & Tempe Penyet (porsi) | Tahu tempe goreng, sambal penyet | Rp 12.000 |

### Seafood & Ikan

| Menu | Deskripsi | Harga |
| --- | --- | --- |
| Pecel Lele | Lele goreng garing, lalapan, sambal terasi | Rp 20.000 |
| Lele Penyet | Lele goreng dipenyet sambal bawang | Rp 22.000 |
| Cumi Goreng Tepung | Cumi renyah, saus sambal | Rp 32.000 |
| Udang Goreng Tepung | Udang jumbo goreng krispi | Rp 35.000 |
| Nila Bakar | Ikan nila bakar bumbu kecap, sambal mangga | Rp 35.000 |
| Ikan Kakap Goreng | Kakap goreng utuh sambal matah | Rp 45.000 |

### Sup & Nasi Spesial

| Menu | Deskripsi | Harga |
| --- | --- | --- |
| Soto Lamongan | Kuah kuning bening, ayam suwir, koya gurih | Rp 22.000 |
| Nasi Boranan | Nasi dengan lauk pilihan khas Lamongan | Rp 25.000 |
| Rawon Daging | Kuah hitam kluwek, daging empuk, tauge pendek | Rp 28.000 |
| Nasi Tahu Campur | Nasi dengan tahu, sayur, kuah pedas | Rp 20.000 |
| Nasi Putih | Porsi tambahan | Rp 5.000 |

### Pelengkap & Sambal

| Menu | Harga |
| --- | --- |
| Terong Penyet | Rp 8.000 |
| Tempe Mendoan | Rp 8.000 |
| Kerupuk Udang | Rp 5.000 |
| Sambal Terasi / Sambal Bajak / Sambal Mangga (ekstra) | Rp 3.000 |

### Minuman

| Menu | Harga |
| --- | --- |
| Es Teh Manis | Rp 5.000 |
| Teh Hangat | Rp 4.000 |
| Es Jeruk | Rp 8.000 |
| Es Degan (kelapa muda) | Rp 12.000 |
| Wedang Jahe | Rp 8.000 |
| Air Mineral | Rp 4.000 |

### Paket Spesial

- **Paket Keluarga (4 orang):** 1 bebek goreng, 2 ayam goreng, 2 lele, nasi 4, es teh 4 — Rp 165.000
- **Paket Nasi Kotak:** ayam goreng/bakar, tahu tempe, lalapan, sambal — mulai Rp 28.000 (minimal 20 kotak)

## 8. Kebutuhan Fungsional

| ID | Kebutuhan | Prioritas |
| --- | --- | --- |
| F-01 | Halaman Beranda sesuai section A–F di bagian 6.1 | Must |
| F-02 | Halaman Menu dengan kategori, filter, pencarian, dan label menu | Must |
| F-03 | Tombol "Pesan via WhatsApp" dengan pesan otomatis berisi nama menu | Must |
| F-04 | Tautan ke GoFood, GrabFood, ShopeeFood | Should |
| F-05 | Form reservasi dengan validasi dan pengiriman ke WhatsApp/email | Must |
| F-06 | Google Maps embed dan tombol petunjuk arah | Must |
| F-07 | Galeri foto dengan lightbox | Should |
| F-08 | Keranjang pesan sederhana (pilih menu, jumlah, kirim ke WhatsApp) | Should |
| F-09 | Dasbor admin: tambah/ubah/hapus menu, harga, foto, status stok (habis/tersedia) | Must |
| F-10 | Status buka/tutup otomatis berdasarkan jam operasional | Could |
| F-11 | Newsletter/promo (kumpulkan email) | Could |
| F-12 | Multi bahasa (ID/EN) | Could |

## 9. Kebutuhan Non-Fungsional

- **Responsif:** mobile-first; breakpoint 360, 768, 1024, 1440 px.
- **Performa:** gambar WebP/AVIF, lazy loading, LCP < 2,5 detik pada 4G, ukuran hero < 250 KB.
- **SEO:** meta tag, Open Graph, schema.org `Restaurant` (menu, jam, alamat), sitemap, Google Business Profile ditautkan.
- **Aksesibilitas:** kontras teks minimal WCAG AA (teks putih gading di atas hitam sudah memenuhi; pastikan teks oranye pada tombol memakai teks gelap), alt text pada semua foto, navigasi keyboard.
- **Keamanan:** HTTPS, proteksi spam pada form (honeypot/reCAPTCHA), sanitasi input.
- **Kompatibilitas:** Chrome, Safari, Firefox, Edge dua versi terakhir.

## 10. Rekomendasi Teknologi

- **Opsi cepat:** WordPress + tema kustom/Elementor + plugin menu restoran.
- **Opsi kustom:** Next.js + Tailwind CSS, konten menu dikelola lewat CMS ringan (Sanity/Strapi) atau Supabase; hosting Vercel/Netlify.
- Analitik: Google Analytics 4 dan pelacakan klik tombol pesan.

## 11. Kebutuhan Konten dan Aset

- Logo Barokah (versi script oranye di latar gelap).
- Foto profesional: minimal 15 foto hidangan (close-up, latar gelap, pencahayaan hangat), 5 foto interior/eksterior, 3 foto tim/dapur.
- Teks: cerita Barokah, deskripsi tiap menu, jam operasional, alamat lengkap, nomor WhatsApp.
- Ikon: sendok-garpu, api, ikan, mangkuk, dalam gaya garis tipis oranye.

## 12. Rencana Pengerjaan

| Fase | Durasi | Hasil |
| --- | --- | --- |
| 1. Discovery & konten | 1 minggu | PRD final, daftar menu dan harga, foto |
| 2. Desain UI | 1–2 minggu | Wireframe, desain high-fidelity desktop dan mobile |
| 3. Pengembangan | 2–3 minggu | Website fungsional dan dasbor admin |
| 4. Uji & revisi | 1 minggu | QA lintas perangkat, perbaikan |
| 5. Peluncuran | 2–3 hari | Domain, hosting, SEO dasar, Google Business Profile |

## 13. Risiko dan Mitigasi

| Risiko | Mitigasi |
| --- | --- |
| Foto makanan kurang berkualitas sehingga kesan gelap-mewah gagal | Jadwalkan sesi foto profesional, atau gunakan foto stok sementara |
| Tema gelap membuat teks sulit dibaca | Uji kontras, hindari teks abu terlalu redup |
| Harga/menu sering berubah | Dasbor admin agar pemilik bisa update sendiri |
| Halaman berat karena banyak foto | Kompres gambar, CDN, lazy loading |

## 14. Pertanyaan Terbuka

1. Alamat, jam operasional, dan nomor WhatsApp resmi Barokah?
2. Apakah harga pada bagian 7 sudah sesuai, dan apakah ada menu khas lain?
3. Apakah pemesanan cukup lewat WhatsApp, atau perlu sistem pesan-antar sendiri?
4. Apakah sudah punya logo dan foto, atau perlu dibuatkan?
5. Apakah perlu bahasa Inggris untuk wisatawan?
