"use client";
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      backgroundColor: '#050816',
      padding: '80px 40px',
      fontFamily: 'sans-serif',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
      backgroundColor: '#100d25', // Darker card background for the form
      padding: '40px',
      borderRadius: '20px',
      width: '100%',
      maxWidth: '800px',
    },
    introText: {
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#aaa6c3',
      marginBottom: '10px',
      margin: 0,
    },
    heading: {
      fontSize: '60px',
      fontWeight: '900',
      margin: '0 0 40px 0',
      background: 'linear-gradient(to right, #06b6d4, #3b82f6, #6366f1)', // cyan → blue → indigo
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    },
    labelGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    labelText: {
      fontWeight: '500',
      fontSize: '16px',
    },
    input: {
      backgroundColor: '#1d1836',
      padding: '16px 24px',
      borderRadius: '8px',
      border: 'none',
      outline: 'none',
      color: '#ffffff',
      fontSize: '16px',
      fontFamily: 'inherit',
    },
    textarea: {
      backgroundColor: '#1d1836',
      padding: '16px 24px',
      borderRadius: '8px',
      border: 'none',
      outline: 'none',
      color: '#ffffff',
      fontSize: '16px',
      minHeight: '200px',
      resize: 'none',
      fontFamily: 'inherit',
    },
    button: {
      backgroundColor: '#1d1836',
      padding: '12px 32px',
      borderRadius: '12px',
      border: 'none',
      color: '#ffffff',
      fontSize: '18px',
      fontWeight: 'bold',
      width: 'fit-content',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      marginTop: '10px',
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. I will get back to you as soon as possible.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <p style={styles.introText}>Get in touch</p>
        <h2 style={styles.heading}>Contact.</h2>

        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.labelGroup}>
            <span style={styles.labelText}>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              style={styles.input}
              required
            />
          </label>

          <label style={styles.labelGroup}>
            <span style={styles.labelText}>Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              style={styles.input}
              required
            />
          </label>

          <label style={styles.labelGroup}>
            <span style={styles.labelText}>Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              style={styles.textarea}
              required
            />
          </label>

          <button 
            type="submit" 
            style={styles.button}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#151030')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1d1836')}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;