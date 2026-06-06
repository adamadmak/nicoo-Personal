import { useState } from "react";
import { SERVICES, CONTACT_INFO } from "@/data/constants";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{ padding: "100px 5%", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              color: "#8B5CF6",
              fontWeight: 600,
            }}
          >
            CONTACT
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
            Let's Create Something
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Extraordinary
            </span>
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: 15,
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Ready to elevate your brand? Let's talk about your project.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 48,
            alignItems: "start",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Contact info */}
          <div>
            <div style={{ marginBottom: 32 }}>
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                    padding: "16px 20px",
                    borderRadius: 12,
                    marginBottom: 12,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(139,92,246,0.1)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#64748b",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        marginBottom: 2,
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        style={{
                          fontSize: 14,
                          color: "#a78bfa",
                          textDecoration: "none",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontSize: 14,
                          color: "#94a3b8",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div
              style={{
                padding: "16px 20px",
                borderRadius: 12,
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.2)",
                display: "flex",
                gap: 12,
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 20 }}>⚡</span>
              <div>
                <div
                  style={{ fontSize: 13, fontWeight: 700, color: "#22c55e" }}
                >
                  Fast Response
                </div>
                <div style={{ fontSize: 12, color: "#64748b" }}>
                  Usually replies within 24 hours
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 20,
              padding: "32px",
            }}
          >
            {formSent && (
              <div
                style={{
                  marginBottom: 20,
                  padding: "14px 20px",
                  borderRadius: 10,
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  color: "#22c55e",
                  fontSize: 14,
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 16,
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: 12,
                    color: "#64748b",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  NAME
                </label>
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    fontSize: 14,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: 12,
                    color: "#64748b",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  EMAIL
                </label>
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    fontSize: 14,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  fontSize: 12,
                  color: "#64748b",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                SERVICE NEEDED
              </label>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: formData.service ? "#fff" : "#64748b",
                  fontSize: 14,
                  outline: "none",
                }}
              >
                <option value="" style={{ background: "#080810" }}>
                  Select a service...
                </option>
                {SERVICES.map((s) => (
                  <option
                    key={s.title}
                    value={s.title}
                    style={{ background: "#080810" }}
                  >
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label
                style={{
                  fontSize: 12,
                  color: "#64748b",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                MESSAGE
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                placeholder="Tell me about your project..."
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  fontSize: 14,
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 30px rgba(139,92,246,0.3)",
              }}
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
