import { SKILLS } from "@/data/constants";

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{ padding: "100px 5%", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              color: "#8B5CF6",
              fontWeight: 600,
            }}
          >
            EXPERTISE
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-1.5px",
              marginTop: 12,
              marginBottom: 16,
            }}
          >
            Tools of the Trade
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: 15,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Mastering industry-leading tools to deliver pixel-perfect results
            every time
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 14,
                padding: "20px 24px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid rgba(139,92,246,0.4)";
                e.currentTarget.style.background = "rgba(139,92,246,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.06)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>{skill.icon}</span>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#e2e8f0",
                      }}
                    >
                      {skill.name}
                    </div>
                    <div style={{ fontSize: 11, color: "#64748b" }}>
                      {skill.category}
                    </div>
                  </div>
                </div>
                <span
                  style={{ fontSize: 13, fontWeight: 700, color: "#8B5CF6" }}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 50,
                  height: 4,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: 50,
                    background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                    width: `${skill.level}%`,
                    transition: "width 1.5s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
