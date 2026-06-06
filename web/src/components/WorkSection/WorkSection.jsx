import { useState } from "react";
import { PROJECTS, PROJECT_FILTERS } from "@/data/constants";

export function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      style={{ padding: "100px 5%", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              color: "#8B5CF6",
              fontWeight: 600,
            }}
          >
            PORTFOLIO
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
            Selected Work
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: 15,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            A curated showcase of projects that define my craft and creative
            vision
          </p>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                border: "1px solid",
                borderColor:
                  activeFilter === f
                    ? "rgba(139,92,246,0.6)"
                    : "rgba(255,255,255,0.08)",
                background:
                  activeFilter === f ? "rgba(139,92,246,0.15)" : "transparent",
                color: activeFilter === f ? "#a78bfa" : "#64748b",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {filtered.map((project, i) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                background:
                  hoveredProject === i
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(255,255,255,0.02)",
                border: `1px solid ${hoveredProject === i ? project.color + "60" : "rgba(255,255,255,0.06)"}`,
                borderRadius: 18,
                overflow: "hidden",
                transition: "all 0.4s ease",
                transform:
                  hoveredProject === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow:
                  hoveredProject === i
                    ? `0 20px 60px ${project.color}20`
                    : "none",
              }}
            >
              {/* Project image/visual */}
              <div
                style={{
                  height: 200,
                  position: "relative",
                  overflow: "hidden",
                  background: `linear-gradient(135deg, ${project.color}20, ${project.accent}10)`,
                }}
              >
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 14,
                        background: `linear-gradient(135deg, ${project.color}, ${project.accent})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 24,
                        boxShadow: `0 0 30px ${project.color}60`,
                      }}
                    >
                      {project.category === "Branding"
                        ? "◈"
                        : project.category === "Motion Graphics"
                          ? "▶"
                          : project.category === "UI/UX"
                            ? "⊡"
                            : project.category === "Print Design"
                              ? "⊞"
                              : "◉"}
                    </div>
                  </div>
                )}

                {/* Year badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    padding: "4px 10px",
                    borderRadius: 6,
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(10px)",
                    fontSize: 11,
                    color: "#94a3b8",
                    fontWeight: 600,
                  }}
                >
                  {project.year}
                </div>

                {/* Category badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    padding: "4px 10px",
                    borderRadius: 6,
                    background: `${project.color}30`,
                    border: `1px solid ${project.color}50`,
                    fontSize: 11,
                    color: project.accent,
                    fontWeight: 600,
                  }}
                >
                  {project.category}
                </div>
              </div>

              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    marginBottom: 10,
                    letterSpacing: "-0.5px",
                    color: "#f1f5f9",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: 14,
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  {project.desc}
                </p>

                {/* Tools */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      style={{
                        fontSize: 11,
                        padding: "3px 10px",
                        borderRadius: 4,
                        fontWeight: 600,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#94a3b8",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
