import { NAV_LINKS } from "@/data/constants";

export function MobileMenu({ activeNav, scrollTo, menuOpen }) {
  if (!menuOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 72,
        left: 0,
        right: 0,
        zIndex: 99,
        background: "rgba(8,8,16,0.98)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(139,92,246,0.2)",
        padding: "20px 5%",
      }}
    >
      {NAV_LINKS.map((link) => (
        <button
          key={link}
          onClick={() => scrollTo(link)}
          style={{
            display: "block",
            width: "100%",
            textAlign: "left",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "14px 16px",
            borderRadius: 8,
            marginBottom: 4,
            color: activeNav === link ? "#8B5CF6" : "#94a3b8",
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          {link}
        </button>
      ))}
    </div>
  );
}
