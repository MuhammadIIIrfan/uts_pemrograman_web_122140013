import React, { useState } from 'react';

const Ask = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pertanyaan berhasil dikirim! Terima kasih telah bertanya.');
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ajukan Pertanyaan Hukum</h2>
      <p style={styles.subtitle}>Punya pertanyaan tentang hukum? Isi formulir di bawah dan kami akan mencoba membantu menjawabnya.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Nama:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Pertanyaan:</label>
        <textarea
          name="question"
          value={formData.question}
          onChange={handleChange}
          required
          rows="5"
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>Kirim Pertanyaan</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#2c2f33',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default Ask;
