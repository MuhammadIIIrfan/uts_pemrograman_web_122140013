import React from 'react';
import hukum1 from '../assets/hukum1.png';
import hukum2 from '../assets/hukum2.png';
import hukum3 from '../assets/hukum3.png';

const articles = [
  {
    id: 1,
    title: "Putusan MK Terkait UU ITE",
    image: hukum1,
    excerpt: "Mahkamah Konstitusi memutuskan bahwa pasal dalam UU ITE dinyatakan bertentangan dengan UUD 1945...",
  },
  {
    id: 2,
    title: "KPK Tahan Pejabat Kementerian",
    image: hukum2,
    excerpt: "Komisi Pemberantasan Korupsi (KPK) menahan seorang pejabat tinggi karena dugaan korupsi proyek pengadaan...",
  },
  {
    id: 3,
    title: "RUU Perlindungan Data Pribadi",
    image: hukum3,
    excerpt: "RUU ini akan memberikan perlindungan yang lebih kuat terhadap data pribadi warga negara di dunia digital...",
  },
];

const Articles = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Berita Hukum Terbaru</h2>
      <div style={styles.grid}>
        {articles.map((article) => (
          <div key={article.id} style={styles.card}>
            <img src={article.image} alt={article.title} style={styles.image} />
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <button style={styles.button}>Baca Selengkapnya</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#2c2f33",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Articles;
