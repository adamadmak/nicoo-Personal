import { ROLE_TAGS, STATS } from "@/data/constants";

export function HeroSection({ heroLoaded, scrollTo }) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "100px 5% 60px",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 900, width: "100%", textAlign: "center" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 32,
            padding: "8px 20px",
            borderRadius: 50,
            background: "rgba(139,92,246,0.1)",
            border: "1px solid rgba(139,92,246,0.3)",
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontSize: 13,
              color: "#a78bfa",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            Available for freelance work
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontSize: "clamp(42px, 8vw, 96px)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-3px",
            marginBottom: 24,
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.15s",
          }}
        >
          <span style={{ display: "block", color: "#fff" }}>Baganizi</span>
          <span
            style={{
              display: "block",
              background:
                "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 50%, #8B5CF6 100%)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 4s ease infinite",
            }}
          >
            Nicholas
          </span>
        </h1>

        {/* Role tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 28,
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.3s",
          }}
        >
          {ROLE_TAGS.map((role) => (
            <span
              key={role}
              style={{
                padding: "6px 16px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94a3b8",
                letterSpacing: "0.3px",
              }}
            >
              {role}
            </span>
          ))}
        </div>

        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#94a3b8",
            maxWidth: 580,
            margin: "0 auto 40px",
            lineHeight: 1.7,
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.45s",
          }}
        >
          I craft stunning visual identities, motion graphics, and digital
          experiences that make brands impossible to ignore. From pixels to
          print — I bring visions to life.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.6s",
          }}
        >
          <button
            onClick={() => scrollTo("Work")}
            style={{
              padding: "14px 32px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 40px rgba(139,92,246,0.4)",
              transition: "all 0.3s",
            }}
          >
            View My Work →
          </button>
          <button
            onClick={() => scrollTo("Contact")}
            style={{
              padding: "14px 32px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 700,
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            Let's Talk
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            marginTop: 70,
            padding: "0 10%",
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.75s",
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "20px 10px",
                borderLeft: "1px solid rgba(139,92,246,0.15)",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #8B5CF6, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#64748b",
                  marginTop: 4,
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.5,
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: "2px", color: "#64748b" }}>
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, #8B5CF6, transparent)",
            animation: "scrollPulse 2s ease infinite",
          }}
        />
      </div>
    </section>
  );
}
