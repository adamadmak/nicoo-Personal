export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 5%",
        position: "relative",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 800,
          }}
        >
          N
        </div>
        <span style={{ fontWeight: 700, fontSize: 15, color: "#e2e8f0" }}>
          Baganizi Nicholas
        </span>
      </div>
      <p style={{ color: "#334155", fontSize: 13 }}>
        © 2024 Baganizi Nicholas · Graphics Designer & Visual Expert
      </p>
      <div style={{ display: "flex", gap: 16 }}>
        <a
          href="mailto:baganizinicholas@gmail.com"
          style={{
            color: "#64748b",
            textDecoration: "none",
            fontSize: 13,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#8B5CF6")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/baganizi-nicholas-59abaa216/"
          target="_blank"
          style={{
            color: "#64748b",
            textDecoration: "none",
            fontSize: 13,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#8B5CF6")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
