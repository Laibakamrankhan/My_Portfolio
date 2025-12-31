"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Laibakamrankhan",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/laiba-kamran-khan-357ba32b5/",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/923422637985?text=Hello%20Laiba!%20I%20want%20to%20connect%20with%20you.",
      label: "WhatsApp",
    },
  ];

  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      backgroundColor: "#050816",
      color: "#aaa6c3",
      padding: "40px 20px",
      fontFamily: "sans-serif",
      textAlign: "center",
      borderTop: "1px solid #1d1836",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#ffffff",
      cursor: "pointer",
    },
    socialContainer: {
      display: "flex",
      gap: "20px",
    },
    link: {
      color: "#aaa6c3",
      textDecoration: "none",
      fontSize: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    copyright: {
      fontSize: "14px",
      marginTop: "10px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo */}
        <div
          style={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MyPortfolio<span style={{ color: "#915eff" }}>.</span>
        </div>

        {/* Social Icons */}
        <div style={styles.socialContainer}>
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
                aria-label={link.label}
                whileHover={{ scale: 1.2, color: "#915eff" }} // Purple hover
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon size={28} />
              </motion.a>
            );
          })}
        </div>

        {/* Copyright */}
        <p style={styles.copyright}>
          &copy; {currentYear} All rights reserved. Laiba Kamran ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
