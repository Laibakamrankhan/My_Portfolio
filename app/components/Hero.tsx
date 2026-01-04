"use client";
import React from 'react';


const Hero = () => {
  const resumeLink = '/Laiba_Khan_Resume.pdf';
  const styles = {
    section: {
      backgroundColor: '#050816', 
      minHeight: '400px',
      display: 'flex',
      alignItems: 'center',
      padding: '40px 10%',
      fontFamily: '"Inter", sans-serif',
      color: '#fff',
    } as React.CSSProperties,
    
    container: {
      display: 'flex',
      flexDirection: 'row' as const,
      gap: '20px',
    },

    // The vertical line with the dot at the top
    lineWrapper: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      marginTop: '15px',
    },
    dot: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: '#915eff', // Purple color
    },
    verticalLine: {
      width: '5px',
      height: '100%',
      background: 'linear-gradient(to bottom, #915eff, rgba(145, 94, 255, 0))',
    },

    // Text Content
    textContainer: {
      display: 'flex',
      flexDirection: 'column' as const,
    },
    heading: {
      fontSize: '64px',
      fontWeight: '900',
      margin: '0',
      lineHeight: '1.2',
    },
    highlight: {
      background: 'linear-gradient(to right, #06b6d4, #3b82f6, #6366f1)', // cyan → blue → indigo
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subHeading: {
      fontSize: '24px',
      fontWeight: '500',
      color: '#dfd9ff',
      marginTop: '10px',
      maxWidth: '500px',
      lineHeight: '1.5',
    },
    buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    gap: '12px', // space between buttons
  },
    button: {
      marginTop: '30px', // enough spacing below text
      padding: '8px 16px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#fff', // text color
      background: 'linear-gradient(to right, #06b6d4, #3b82f6, #6366f1)',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      width: '120px',
      gap: '12px',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left Side: Visual Line Decoration */}
        <div style={styles.lineWrapper}>
          <div style={styles.dot} />
          <div style={styles.verticalLine} />
        </div>

        {/* Right Side: Text Content */}
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>
            Hi, I'm <span style={styles.highlight}>Laiba Kamran</span>
          </h1>
          <p style={styles.subHeading}>
            Full Stack Developer & AI Enthusiast, <br /> crafting seamless web experiences.
          </p>
        
        <div style={styles.buttonContainer}>
          {/* Resume Button */}
         <button
          style={styles.button}
          onClick={() => window.open(resumeLink, '_blank')}
          >
         Resume
         </button>

          {/* Projects Button */}
         <a
           href="#project"  // scrolls to section with id="project"
           style={{ ...styles.button, textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
           >
            My Work
          </a>
          </div>
       </div>
 
      </div>
    </section>
  );
};

export default Hero;
