export function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: #080810; }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #080810; }
      ::-webkit-scrollbar-thumb { background: #7C3AED; border-radius: 2px; }
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.5; transform: scale(0.8); }
      }
      @keyframes scrollPulse {
        0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
        50% { opacity: 1; transform: scaleY(1); }
        100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; }
      }
      input::placeholder { color: #334155; }
      textarea::placeholder { color: #334155; }
      @media (max-width: 768px) {
        .hidden.md\\:flex { display: none !important; }
        .hidden.md\\:block { display: none !important; }
        .block.md\\:hidden { display: block !important; }
        .grid-cols-1.md\\:grid-cols-2 { grid-template-columns: 1fr !important; }
        .grid-cols-2.md\\:grid-cols-4 { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (min-width: 769px) {
        .block.md\\:hidden { display: none !important; }
        .hidden.md\\:flex { display: flex !important; }
        .hidden.md\\:block { display: inline-block !important; }
      }
    `}</style>
  );
}
