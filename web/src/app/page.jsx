"use client";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "Brand Identity Refresh",
    description: "A modern visual system for a digital-first brand, including logo, website mood, and motion guidelines.",
    category: "Branding",
    year: "2024",
  },
  {
    title: "Product Landing Page",
    description: "Responsive landing page design with interactive features and conversion-focused layout.",
    category: "UI/UX",
    year: "2024",
  },
  {
    title: "Creative Campaign",
    description: "Marketing campaign assets and motion content for social media and display advertising.",
    category: "Motion Graphics",
    year: "2023",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "UI Design",
  "Animation",
  "Brand Strategy",
];

const socialLinks = [
  { label: "GitHub", url: "https://github.com/adamadmak" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/baganizi-nicholas-59abaa216/" },
  { label: "Email", url: "mailto:hello@adamadmak.com" },
];

const sectionStyle = {
  padding: "80px 24px",
  maxWidth: 1160,
  margin: "0 auto",
};

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 24,
  padding: 24,
  boxShadow: "0 28px 80px rgba(0,0,0,0.15)",
};

function SectionHeading({ title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 32 }}>
      <p style={{ color: "#8b5cf6", letterSpacing: "3px", fontSize: 12, fontWeight: 700, margin: 0 }}>
        {title.toUpperCase()}
      </p>
      <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", margin: "16px 0 0", lineHeight: 1.05 }}>
        {subtitle}
      </h2>
    </div>
  );
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "#05050c", color: "#ffffff", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(18px)",
          background: "rgba(5,5,12,0.85)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ fontWeight: 800, letterSpacing: "0.08em" }}>Portfolio</div>
          <nav style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#d1d5db",
                  cursor: "pointer",
                  fontSize: 14,
                  padding: "10px 14px",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" style={{ ...sectionStyle, paddingTop: 120, paddingBottom: 120 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
            <div style={{ maxWidth: 680 }}>
              <p style={{ color: "#8b5cf6", fontWeight: 700, letterSpacing: "0.25em", marginBottom: 24 }}>
                HELLO, I’M ADAM
              </p>
              <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1.05, margin: 0, maxWidth: 700 }}>
                Building modern digital experiences with thoughtful design and React.
              </h1>
              <p style={{ color: "#cbd5e1", marginTop: 24, fontSize: 17, lineHeight: 1.8, maxWidth: 640 }}>
                I create clean, responsive portfolio websites, product interfaces, and brand systems that feel polished from first interaction to final delivery.
              </p>
              <button
                onClick={() => scrollTo("work")}
                style={{
                  marginTop: 32,
                  border: "1px solid #8b5cf6",
                  background: "rgba(139,92,246,0.1)",
                  color: "#f8fafc",
                  borderRadius: 999,
                  padding: "14px 24px",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                See my work
              </button>
            </div>
          </div>
        </section>

        <section id="about" style={sectionStyle}>
          <SectionHeading title="About" subtitle="A quick intro" />
          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr", maxWidth: 920 }}>
            <div style={cardStyle}>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: 16 }}>
                I design and build portfolio sites, landing pages, and digital identities using React, TypeScript, and modern CSS. My work focuses on clean layouts, accessible interfaces, and subtle motion that improves the experience without distracting from the message.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" style={sectionStyle}>
          <SectionHeading title="Skills" subtitle="What I do best" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 18, marginTop: 24 }}>
            {skills.map((skill) => (
              <div key={skill} style={{ ...cardStyle, background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.06)" }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>{skill}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" style={sectionStyle}>
          <SectionHeading title="Work" subtitle="Selected projects" />
          <div style={{ display: "grid", gap: 24, marginTop: 24 }}>
            {projects.map((project) => (
              <div key={project.title} style={cardStyle}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 16 }}>
                  <div>
                    <p style={{ color: "#8b5cf6", margin: 0, fontSize: 13, fontWeight: 700 }}>{project.category}</p>
                    <h3 style={{ margin: "8px 0 0", fontSize: 22 }}>{project.title}</h3>
                  </div>
                  <span style={{ color: "#94a3b8", fontSize: 13, fontWeight: 600 }}>{project.year}</span>
                </div>
                <p style={{ color: "#cbd5e1", lineHeight: 1.75, margin: 0 }}>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ ...sectionStyle, paddingBottom: 120 }}>
          <SectionHeading title="Contact" subtitle="Let’s work together" />
          <div style={{ display: "grid", gap: 24, maxWidth: 720, margin: "0 auto" }}>
            <div style={cardStyle}>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                Interested in collaborating on a portfolio site, brand refresh, or product interface? Send a quick message and I’ll reply as soon as possible.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#f8fafc",
                      textDecoration: "none",
                      background: "rgba(139,92,246,0.15)",
                      padding: "12px 18px",
                      borderRadius: 14,
                      fontWeight: 700,
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
