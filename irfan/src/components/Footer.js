import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.left}>
        <p>© 2025 Literasi Hukum</p>
        <p>Kontak: <a href="https://wa.me/6285173077182" style={styles.link}>+62 851 7307 7182</a></p>
        <p>Instagram: <a href="https://instagram.com/mirfenzz" style={styles.link}>@mirfenzz</a></p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c2f33',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'left',
  },
  left: {
    marginLeft: '20px',
    fontSize: '14px',
    lineHeight: '1.6',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'underline',
  }
};

export default Footer;
