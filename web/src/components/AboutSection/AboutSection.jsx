import { AVATAR_URL } from "@/data/constants";

export function AboutSection({ scrollTo }) {
  return (
    <section
      id="about"
      style={{ padding: "100px 5%", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left - Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                paddingBottom: "110%",
                borderRadius: 20,
                position: "relative",
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.1))",
                border: "1px solid rgba(139,92,246,0.2)",
              }}
            >
              <img
                src={AVATAR_URL}
                alt="Baganizi Nicholas - Graphics Designer"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* Decorative corner accents */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  width: 30,
                  height: 30,
                  borderTop: "2px solid #8B5CF6",
                  borderLeft: "2px solid #8B5CF6",
                  borderRadius: "4px 0 0 0",
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  width: 30,
                  height: 30,
                  borderBottom: "2px solid #06B6D4",
                  borderRight: "2px solid #06B6D4",
                  borderRadius: "0 0 4px 0",
                  zIndex: 2,
                }}
              />
            </div>
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                right: -20,
                background: "rgba(8,8,16,0.9)",
                border: "1px solid rgba(139,92,246,0.3)",
                borderRadius: 12,
                padding: "14px 20px",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 900, color: "#8B5CF6" }}>
                5+
              </div>
              <div style={{ fontSize: 11, color: "#64748b" }}>
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: "3px",
                  color: "#8B5CF6",
                  fontWeight: 600,
                }}
              >
                ABOUT ME
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
                marginBottom: 24,
              }}
            >
              Turning ideas into
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                visual masterpieces
              </span>
            </h2>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.8,
                marginBottom: 20,
                fontSize: 15,
              }}
            >
              I'm a passionate Graphics Designer and Visual Expert based in
              Africa, with over 5 years of experience crafting compelling visual
              narratives for brands worldwide. My work lives at the intersection
              of art and strategy — where beautiful design meets measurable
              results.
            </p>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 1.8,
                marginBottom: 32,
                fontSize: 15,
              }}
            >
              From building brand identities from scratch to producing
              scroll-stopping social media content, motion graphics, and print
              materials — I bring the same obsessive attention to detail and
              creative excellence to every project.
            </p>

            {/* Terminal-style info card */}
            <div
              style={{
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(139,92,246,0.2)",
                borderRadius: 12,
                padding: "20px 24px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: 13,
                marginBottom: 28,
              }}
            >
              <div style={{ color: "#64748b", marginBottom: 8 }}>
                // profile.json
              </div>
              <div style={{ color: "#94a3b8" }}>{"{"}</div>
              <div style={{ paddingLeft: 16, color: "#a78bfa" }}>
                "name":{" "}
                <span style={{ color: "#34d399" }}>"Baganizi Nicholas"</span>,
              </div>
              <div style={{ paddingLeft: 16, color: "#a78bfa" }}>
                "role":{" "}
                <span style={{ color: "#34d399" }}>
                  "Graphics Designer & Expert"
                </span>
                ,
              </div>
              <div style={{ paddingLeft: 16, color: "#a78bfa" }}>
                "experience": <span style={{ color: "#f59e0b" }}>5</span>,
              </div>
              <div style={{ paddingLeft: 16, color: "#a78bfa" }}>
                "available": <span style={{ color: "#22c55e" }}>true</span>,
              </div>
              <div style={{ paddingLeft: 16, color: "#a78bfa" }}>
                "passion":{" "}
                <span style={{ color: "#34d399" }}>
                  "Creating visual excellence"
                </span>
              </div>
              <div style={{ color: "#94a3b8" }}>{"}"}</div>
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                onClick={() => scrollTo("Work")}
                style={{
                  padding: "12px 28px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                See My Work
              </button>
              <a
                href="mailto:baganizinicholas@gmail.com"
                style={{
                  padding: "12px 28px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 700,
                  background: "transparent",
                  color: "#8B5CF6",
                  border: "1px solid rgba(139,92,246,0.4)",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
