# Rumah Makan Barokah

Landing page restoran khas Lamongan dengan tema dark premium dan fokus pada WhatsApp ordering serta reservasi.

## Struktur project

- `index.html` — halaman utama
- `menu.html` — halaman menu
- `about.html` — halaman tentang kami
- `gallery.html` — halaman galeri
- `reservation.html` — halaman reservasi
- `contact.html` — halaman kontak
- `assets/css/` — file stylesheet
- `assets/js/` — script aplikasi
- `assets/js/data/site-data.js` — data menu dan informasi bisnis

## Cara jalankan

Buka file HTML langsung di browser, atau jalankan server lokal:

```bash
python -m http.server 8000
```

Lalu buka:

```text
http://localhost:8000
```

## Catatan

- Tombol order dan reservasi diarahkan ke WhatsApp.
- Data menu dapat diubah di `assets/js/data/site-data.js`.
- Styling utama diatur di `assets/css/`.
