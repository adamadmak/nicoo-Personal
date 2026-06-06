import { Logo } from "@/components/Navigation/Logo";
import { Navigation } from "@/components/Navigation/Navigation";
import { MobileMenu } from "@/components/Navigation/MobileMenu";

export function Header({
  scrolled,
  activeNav,
  scrollTo,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 5%",
          background: scrolled ? "rgba(8,8,16,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(139,92,246,0.15)" : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <Logo />

        <Navigation activeNav={activeNav} scrollTo={scrollTo} />

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="mailto:baganizinicholas@gmail.com"
            style={{
              padding: "10px 22px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "0.3px",
              display: "none",
            }}
            className="hidden md:block"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block md:hidden"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.3)",
              borderRadius: 8,
              color: "#8B5CF6",
              width: 40,
              height: 40,
              cursor: "pointer",
              fontSize: 18,
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <MobileMenu
        activeNav={activeNav}
        scrollTo={scrollTo}
        menuOpen={menuOpen}
      />
    </>
  );
}
