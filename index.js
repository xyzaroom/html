// Data artis
const artists = [
  {
    name: "Artist 1",
    image: "https://www.dropbox.com/s/XXXXXXX/artist1.jpg?raw=1",
    bio: "Artist 1 adalah penyanyi terkenal dari Indonesia yang memiliki banyak hits dan penghargaan.",
    text: "Ini adalah tulisan terkait Artist 1 yang menjelaskan perjalanan dan karya mereka.",
    release: "Album terbaru: 'Cinta Abadi' dirilis tahun 2023."
  },
  {
    name: "Artist 2",
    image: "https://www.dropbox.com/s/YYYYYYY/artist2.jpg?raw=1",
    bio: "Artist 2 adalah pelukis terkenal yang karya-karyanya mendunia dan penuh makna.",
    text: "Karya Artist 2 banyak dipamerkan di galeri besar dan memiliki gaya unik.",
    release: "Pameran terbaru: 'Ekspresi Warna' di Jakarta, 2023."
  },
  {
    name: "Artist 3",
    image: "https://www.dropbox.com/s/ZZZZZZZ/artist3.jpg?raw=1",
    bio: "Artist 3 adalah penulis dan penyair yang terkenal dengan karya-karya mendalam.",
    text: "Karya-karya Artist 3 sering mengangkat tema kehidupan dan spiritualitas.",
    release: "Buku terbaru: 'Harmoni Jiwa', terbit 2023."
  }
];

const container = document.getElementById('artistsContainer');

// Generate gambar artis
artists.forEach((artist) =&gt; {
  const img = document.createElement('img');
  img.src = artist.image;
  img.alt = artist.name;
  img.onclick = () =&gt; showBio(artist);
  container.appendChild(img);
});

// Fungsi tampilkan biodata
function showBio(artist) {
  document.getElementById('artistName').textContent = artist.name;
  document.getElementById('bioImage').src = artist.image;
  document.getElementById('artistBio').textContent = artist.bio;
  document.getElementById('artistText').textContent = artist.text;
  document.getElementById('artistRelease').textContent = artist.release;
  document.getElementById('bioOverlay').style.display = 'flex';
}

// Fungsi tutup overlay
function closeBio() {
  document.getElementById('bioOverlay').style.display = 'none';
}
