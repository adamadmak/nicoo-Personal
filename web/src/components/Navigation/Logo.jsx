export function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          fontWeight: 800,
        }}
      >
        N
      </div>
      <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.5px" }}>
        Nicholas<span style={{ color: "#8B5CF6" }}>.</span>
      </span>
    </div>
  );
}
