"use client";

import React from 'react';

interface ProjectTag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
  live_demo_link: string;
}

const Projects: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      backgroundColor: '#050816',
      color: '#ffffff',
      padding: '80px 40px',
      fontFamily: 'sans-serif',
    },
    container: {
      maxWidth: '1200px',
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
    subText: {
      fontSize: '17px',
      lineHeight: '30px',
      color: '#aaa6c3',
      maxWidth: '800px',
      marginBottom: '50px',
    },
    projectGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '28px',
      justifyContent: 'center',
    },
    projectCard: {
      backgroundColor: '#1d1836',
      padding: '20px',
      borderRadius: '20px',
      width: '100%',
      maxWidth: '360px',
      display: 'flex',
      flexDirection: 'column',
    },
    imageContainer: {
      width: '100%',
      height: '230px',
      position: 'relative',
      marginBottom: '20px',
    },
    projectImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '15px',
      backgroundColor: '#333',
    },
    projectTitle: {
      fontSize: '24px',
      fontWeight: '700',
      margin: '0 0 10px 0',
    },
    projectDesc: {
      fontSize: '14px',
      color: '#aaa6c3',
      lineHeight: '24px',
      margin: '0 0 20px 0',
      flexGrow: 1,
    },
    tagContainer: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    },
    projectButtons: {
      display: 'flex',
      gap: '10px',
      marginTop: '20px',
    },
    demoButton: {
      flex: 1,
      padding: '10px 14px',
      borderRadius: '10px',
      background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
      color: '#ffffff',
      textDecoration: 'none',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: '600',
      transition: '0.3s',
    },
    sourceButton: {
      flex: 1,
      padding: '10px 14px',
      borderRadius: '10px',
      backgroundColor: '#050816',
      color: '#ffffff',
      textDecoration: 'none',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: '600',
      border: '1px solid #3b82f6',
      transition: '0.3s',
    },
  };

  const getTagStyle = (color: string): React.CSSProperties => ({
    fontSize: '14px',
    fontWeight: 'bold',
    color: color,
  });

  const projects: Project[] = [
    {
      name: "Physical AI & Humanoid Robotics Course Book with RAG Chatbot",
      description:
        "An AI-native, interactive textbook designed for the Physical AI and Humanoid Robotics course. This platform combines high-quality educational content with an intelligent RAG (Retrieval-Augmented Generation) chatbot to provide a personalized learning experience.",
      tags: [
        { name: "Fastapi", color: "#60a5fa" },
        { name: "Docosurus", color: "#34d399" },
        { name: "RAG", color: "#f87171" },
      ],
      image: "/Image/book.png",
      live_demo_link:
        "https://physical-ai-humanoid-robotics-cours-chi.vercel.app/",

      
      source_code_link: "https://github.com/Laibakamrankhan/Physical_AI_Humanoid_Robotics_Course_Book_with_Rag_Chatbot",
    },

    {
      name: "In-Memory Python CLI Todo Application",
      description:
        "A feature-rich command-line interface (CLI) todo application built with Python, Typer, and Rich. The app provides an interactive menu system with persistent storage for managing your tasks efficiently.",
      tags: [
        { name: "Python", color: "#60a5fa" },
        { name: "Typer", color: "#34d399" },
        { name: "Rich", color: "#f87171" },
      ],
      image: "/Image/memorytodo.png",
      live_demo_link: "https://youtu.be/X8u748DI_TU?si=o6V-3tOL2H16wcUl",
      source_code_link:
        "https://github.com/Laibakamrankhan/In-Memory-Python-CLI-Todo-Application",
    },

    {
      name: "Casa Craft - AI-Powered Interior Design Platform",
      description:
        "Casa-Craft is a full-stack e-commerce web application built with Next.js and TypeScript.",
      tags: [
        { name: "TypeScript", color: "#60a5fa" },
        { name: "Next.js", color: "#34d399" },
        { name: "Tailwind CSS", color: "#f87171" },
      ],
      image: "/Image/casacraft.png",

      live_demo_link:
        "https://casa-craft.vercel.app/",
      source_code_link: "https://github.com/Laibakamrankhan/Casa-Craft",
    },

    {
      name: "AI Study Platform - Full-Stack AI Learning App",
      description:
        "Casa-Craft is a full-stack e-commerce web application built with Next.js and TypeScript.",
      tags: [
        { name: "FastAPI & Python", color: "#60a5fa" },
        { name: "Next.js", color: "#34d399" },
        { name: "PostgreSQL", color: "#f87171" },
      ],
      image: "/Image/study.png",
      live_demo_link: "https://youtu.be/Y3umM5oT5VU?si=DOw6ZWaLfH1CADLC",
      source_code_link:
        "https://github.com/Laibakamrankhan/Ai-Study-Platform",
    },
    {
      name: "AI Study Platform - Full-Stack AI Learning App",
      description:
        "Casa-Craft is a full-stack e-commerce web application built with Next.js and TypeScript.",
      tags: [
        { name: "FastAPI & Python", color: "#60a5fa" },
        { name: "Next.js", color: "#34d399" },
        { name: "PostgreSQL", color: "#f87171" },
      ],
      image: "/Image/resume.png",
      live_demo_link: "https://youtu.be/Y3umM5oT5VU?si=DOw6ZWaLfH1CADLC",
      source_code_link:
        "https://github.com/Laibakamrankhan/Ai-Study-Platform",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>

        <p style={styles.introText}>
          My work
        </p>

        <h2 style={styles.heading}>
          Projects.
        </h2>

        <p style={styles.subText}>
          Below are my real-world projects. Explore the live demo or view
          the source code to learn more about each project.
        </p>

        <div style={styles.projectGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={styles.projectCard}
            >

              {/* PROJECT IMAGE */}
              <div style={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.name}
                  style={styles.projectImage}
                />
              </div>

              {/* PROJECT TITLE */}
              <h3 style={styles.projectTitle}>
                {project.name}
              </h3>

              {/* PROJECT DESCRIPTION */}
              <p style={styles.projectDesc}>
                {project.description}
              </p>

              {/* PROJECT TAGS */}
              <div style={styles.tagContainer}>
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    style={getTagStyle(tag.color)}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              {/* PROJECT LINKS */}
              <div style={styles.projectButtons}>

                {/* LIVE DEMO */}
                {project.live_demo_link && (
                  <a
                    href={project.live_demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.demoButton}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = 'scale(1.05)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = 'scale(1)')
                    }
                  >
                    Live Demo
                  </a>
                )}

                {/* SOURCE CODE */}
                {project.source_code_link && (
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.sourceButton}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = 'scale(1.05)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = 'scale(1)')
                    }
                  >
                    Source Code
                  </a>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
