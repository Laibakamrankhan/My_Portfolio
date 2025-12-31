import React from 'react';

const Overview = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      backgroundColor: '#050816', // Deep dark blue/black background
      color: '#ffffff',
      padding: '80px 40px',
      fontFamily: 'sans-serif',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
    },
    introText: {
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#aaa6c3',
      marginBottom: '10px',
    },
    heading: {
      fontSize: '60px',
      fontWeight: '900',
      margin: '0 0 20px 0',
      background: 'linear-gradient(to right, #06b6d4, #3b82f6, #6366f1)', 
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
},

    description: {
      fontSize: '17px',
      lineHeight: '30px',
      color: '#aaa6c3',
      maxWidth: '800px',
      marginBottom: '50px',
    },
    cardContainer: {
      display: 'flex',
      gap: '30px',
      flexWrap: 'wrap',
    },
    cardGradient: {
      padding: '1px', // Border thickness
      borderRadius: '20px',
      background: 'linear-gradient(to bottom right, #00cea8, #bf61ff)', // Gradient border effect
      width: '240px',
    },
    cardInner: {
      backgroundColor: '#151030', // Card background color
      borderRadius: '20px',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: '280px',
    },
    iconBox: {
      width: '60px',
      height: '60px',
      borderRadius: '12px',
      background: 'linear-gradient(to bottom right, #00cea8, #bf61ff)',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '26px',
    }
  };

  const services = [
    { title: "Full Stack  Developer" },
    { title: "React Native Developer" },
    { title: "AI Enthusiast" },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <p style={styles.introText}>Introduction</p>
        <h2 style={styles.heading}>Overview.</h2>
        
        <p style={styles.description}>
        Hi, I’m Laiba Kamran  a Full Stack Developer and AI Enthusiast. 
        I build scalable web applications using Next.js, React, TypeScript, and Node.js, 
        while also creating intelligent AI-powered automation solutions with Python, FastAPI.
        My focus is on combining modern frameworks with AI integration to deliver cutting-edge, 
        efficient, and smart applications. !
        </p>

        <div style={styles.cardContainer}>
          {services.map((service, index) => (
            <div key={index} style={styles.cardGradient}>
              <div style={styles.cardInner}>
                {/* Placeholder for the icon */}
                <div style={styles.iconBox} />
                <h3 style={styles.cardTitle}>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;