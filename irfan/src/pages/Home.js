import React from 'react';
import './Home.css'; // nanti buat file ini juga

const Home = () => {
  return (
    <div className="home-container">
      <img src="/image/banner-hukum.jpg" alt="Berita Hukum" className="home-banner" />

      <h1>Selamat datang di Literasi Hukum</h1>
      <p>
        Dapatkan informasi terkini mengenai perkembangan hukum di Indonesia. Kami menyajikan berita, opini,
        dan pengetahuan hukum yang mudah dipahami oleh semua kalangan.
      </p>

      <div className="berita-section">
        <h2>Berita Hukum Terbaru</h2>
        <div className="berita-card">
          <h3>📌 Mahkamah Agung Perkuat Aturan Peradilan Elektronik</h3>
          <p>Putusan terbaru memperluas penggunaan e-court dalam kasus perdata dan tata usaha negara.</p>
        </div>
        <div className="berita-card">
          <h3>📌 RUU KUHP Baru Disahkan, Ini Dampaknya</h3>
          <p>Kontroversi muncul atas beberapa pasal yang dianggap membatasi kebebasan sipil.</p>
        </div>
        <div className="berita-card">
          <h3>📌 Komisi Yudisial Umumkan 10 Nama Hakim Terbaik 2025</h3>
          <p>Langkah ini dinilai sebagai bentuk transparansi dalam dunia peradilan.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
