import { SERVICES } from "@/data/constants";

export function ServicesSection() {
  return (
    <section
      id="services"
      style={{ padding: "100px 5%", position: "relative", zIndex: 1 }}
    >
      {/* Section background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent, rgba(139,92,246,0.03) 50%, transparent)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              color: "#8B5CF6",
              fontWeight: 600,
            }}
          >
            SERVICES
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
            What I Offer
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: 15,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            End-to-end creative solutions tailored to your brand's unique needs
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 18,
                padding: "32px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(139,92,246,0.35)";
                e.currentTarget.style.background = "rgba(139,92,246,0.05)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(255,255,255,0.06)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(139,92,246,0.15)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 20,
                  color: "#8B5CF6",
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  marginBottom: 12,
                  letterSpacing: "-0.3px",
                  color: "#f1f5f9",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: 14,
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {service.desc}
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      padding: "4px 10px",
                      borderRadius: 4,
                      fontWeight: 600,
                      background: "rgba(139,92,246,0.1)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      color: "#a78bfa",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
