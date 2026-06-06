import { NAV_LINKS } from "@/data/constants";

export function Navigation({ activeNav, scrollTo }) {
  return (
    <div className="hidden md:flex" style={{ gap: 8 }}>
      {NAV_LINKS.map((link) => (
        <button
          key={link}
          onClick={() => scrollTo(link)}
          style={{
            border: "none",
            cursor: "pointer",
            padding: "8px 16px",
            borderRadius: 8,
            color: activeNav === link ? "#8B5CF6" : "#94a3b8",
            fontSize: 14,
            fontWeight: 500,
            transition: "all 0.2s",
            background:
              activeNav === link ? "rgba(139,92,246,0.1)" : "transparent",
          }}
        >
          {link}
        </button>
      ))}
    </div>
  );
}
