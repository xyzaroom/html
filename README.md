# XYZAROOM

**XYZAROOM** adalah proyek frontend eksperimental yang menggabungkan **musik, teknologi, dan eksplorasi digital**.  
Nama **XYZAROOM** diambil dari ide *eksplorasi gen XYZA* — simbol masa depan, inovasi, dan ruang virtual bagi artis independen untuk berkarya.

---

## 🎧 Tujuan & Misi

> “To explore the fusion of art, data, and sound.”

Proyek ini bertujuan untuk:
- Membangun **identitas digital** bagi artis independen dan label kecil.  
- Menyediakan **sistem navigasi interaktif** dengan gaya futuristik tanpa ketergantungan framework berat.  
- Menyatukan **data artis dan album** dengan cara sinkron dan efisien.

---

## 🚀 Fitur Utama

- **Dynamic Artist–Album Sync**  
  Sistem yang menghubungkan halaman *Artists*, *Albums*, dan *Biodata* secara otomatis, memungkinkan pembaruan cepat tanpa duplikasi data.

- **Futuristic UI (Black–Neon Green Theme)**  
  Desain monokrom dengan efek neon hijau dan animasi loading bertema *CD-ROM spin*, mencerminkan identitas visual label musik modern.

- **Code Language Representation**  
  Setiap halaman menampilkan ornamen atau snippet dari 7 bahasa pemrograman (C++, Go, Java, JavaScript, PHP, Python, Ruby) sebagai simbol teknologi lintas platform.

- **Lightweight & Fast**  
  Dibangun hanya dengan **HTML, CSS, dan JavaScript vanilla**, tanpa framework, memaksimalkan efisiensi dan kompatibilitas browser.

---

## 🧩 Struktur Halaman

| Halaman | Deskripsi |
|----------|------------|
| `index.html` | Homepage dengan animasi *typewriter* dan efek CD-ROM loading. |
| `about.html` | Penjelasan visi dan misi label. |
| `artists.html` | Daftar artis dan tautan ke biodata masing-masing. |
| `albums.html` | Koleksi album dengan filter per artis dan navigasi otomatis ke biodata. |
| `event.html` | Jadwal acara dan rilis mendatang. |
| `contact.html` | Form kontak dan informasi label. |
| `biodata.html` | Halaman dinamis yang menampilkan profil artis berdasarkan query parameter. |

---

## ⚙️ Prasyarat & Dependensi

Tidak memerlukan dependensi eksternal, namun disarankan:

- **Node.js (opsional):** v14+ untuk menjalankan server lokal.  
- **Git:** v2+ untuk version control.  
- **Browser Modern:** Chrome, Firefox, Edge, Safari.

---

## 🛠️ Instalasi & Menjalankan Secara Lokal

```bash
# 1. Clone repository
git clone https://github.com/xyzaroom/xyzaroom.github.io.git
cd xyzaroom.github.io

# 2. Jalankan server lokal (opsional)
npx serve .   # atau gunakan ekstensi Live Server di VSCode
