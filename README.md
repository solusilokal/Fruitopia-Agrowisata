# Fruitopia Agrowisata - Mini Website Petik Buah

Website promosi interaktif agrowisata petik buah segar Fruitopia, dirancang responsif dengan tampilan modern berbasis mobile-first.

---

## 🚀 Cara Preview / Menjalankan Website

Anda memiliki 2 cara mudah untuk melihat preview website ini:

### Opsi 1: Preview Instan (Paling Mudah)
- **Klik dua kali file `start-preview.bat`**: Ini akan otomatis menyalakan server lokal dan membuka browser di `http://localhost:5173/`.
- Atau **Klik dua kali file `standalone-preview.html`**: File ini dapat langsung dibuka di browser apa pun (Google Chrome, Microsoft Edge, dll.) tanpa perlu menginstal atau menjalankan server sama sekali.

### Opsi 2: Melalui Terminal / Command Prompt
1. Buka folder ini di Terminal atau PowerShell / VS Code.
2. Jalankan perintah:
   ```bash
   npm run dev
   ```
   *(Catatan untuk Windows PowerShell jika muncul script policy: gunakan `npm.cmd run dev`)*
3. Buka browser dan kunjungi:
   ```
   http://localhost:5173/
   ```

---

## 📁 Struktur File & Direktori

```
wisata petik buah/
├── fruitopia_agrowisata.tsx    # Komponen utama React TypeScript
├── start-preview.bat           # Script 1-klik untuk menjalankan preview di Windows
├── standalone-preview.html     # File HTML mandiri (bisa dibuka langsung tanpa server)
├── index.html                  # File entry point HTML untuk Vite
├── package.json                # Konfigurasi dependensi dan script npm
├── vite.config.ts              # Konfigurasi Vite bundler
├── tailwind.config.js          # Konfigurasi styling Tailwind CSS
├── postcss.config.js           # Konfigurasi PostCSS & Autoprefixer
├── tsconfig.json               # Konfigurasi TypeScript
└── src/
    ├── main.tsx                # Entry point mounting React ke DOM
    ├── App.tsx                 # Bridge component ke fruitopia_agrowisata.tsx
    └── index.css               # Styling global & utilitas Tailwind
```

---

## ✨ Fitur-Fitur Utama Website
1. **Hero & Profil Agrowisata**: Header menarik dengan foto kebun, badge sertifikasi buah organik, dan link sosial media (Instagram, TikTok, Google Maps).
2. **Katalog Buah Segar**: Tampilan kartu interaktif (scroll horizontal) berisi foto buah, status panen, deskripsi, dan harga per kg.
3. **Daftar Tarif & Tiket**: Informasi tiket masuk, paket edukasi anak, dan sewa keranjang petik.
4. **Galeri & Lightbox Foto**: Foto kebun yang bisa diklik untuk memperbesar gambar (lightbox slider).
5. **Formulir Reservasi WhatsApp**: Pengunjung dapat mengisi nama, tanggal, dan jumlah orang, lalu langsung diarahkan ke chat WhatsApp pengelola dengan pesan otomatis terisi rapi.
6. **Floating Sticky Button**: Tombol CTA "Reservasi Kunjungan Sekarang" yang otomatis muncul saat halaman digeser ke bawah.
7. **Bagikan (Share Modal)**: Memudahkan pengunjung membagikan halaman ke WhatsApp atau menyalin tautan.
