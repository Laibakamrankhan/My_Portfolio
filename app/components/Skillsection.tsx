"use client";
import React from "react";
import { FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiFastapi, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: FaPython, name: "Python", color: "#3776AB" },
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
  { icon: SiFastapi, name: "FastAPI", color: "#009688" },

];

const SkillsSection: React.FC = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#050816",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "50px",
          fontWeight: "900",
          marginBottom: "40px",
          background: "linear-gradient(to right, #06b6d4, #3b82f6, #6366f1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Skills
      </h2>

      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <motion.div
          style={{ display: "inline-flex", gap: "60px" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {skills.concat(skills).map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "50px",
                  minWidth: "100px",
                  color: skill.color, // use original brand color
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
              >
                <Icon />
                <span style={{ fontSize: "14px", marginTop: "8px", color: "#fff" }}>
                  {skill.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
