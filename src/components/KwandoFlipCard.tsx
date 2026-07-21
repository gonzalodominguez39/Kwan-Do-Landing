import { useState, useRef } from "preact/hooks";
import { motion } from "framer-motion";

const logoSrc = "/assets/KwanDo-Logo.webp";

interface KwandoFlipCardProps {
  title?: string;
  description?: string;
  location?: string;
}

export default function KwandoFlipCard({
  title = "Kwan-Do",
description = "Forjamos campeones desde adentro. Técnica, disciplina y espíritu ITF en cada entrenamiento.",
  location = "Argentina",
}: KwandoFlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const lastX = useRef<number | null>(null);
  const velocity = useRef(0);
  const rafId = useRef<number | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (lastX.current === null) {
      lastX.current = e.clientX;
      return;
    }

    const delta = e.clientX - lastX.current;
    lastX.current = e.clientX;

    // acumular velocidad con suavizado
    velocity.current = velocity.current * 0.6 + delta * 0.4;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (velocity.current > 2) setFlipped(true);
      else if (velocity.current < -2) setFlipped(false);
    });
  };

  const handleMouseLeave = () => {
    lastX.current = null;
    velocity.current = 0;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setFlipped(false);
  };

  return (
    <div className="flex flex-col items-center gap-6 py-10 w-full max-w-[440px] mx-auto">
      <div
        style={{ perspective: "1200px", width: "clamp(220px, 70vw, 420px)", height: "clamp(220px, 70vw, 420px)" }}
        onMouseEnter={(e) => { lastX.current = (e as MouseEvent).clientX; }}
        onMouseMove={(e) => handleMouseMove(e as MouseEvent)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setFlipped((p) => !p)}
        role="button"
        aria-label={flipped ? "Ver logo" : "Ver información"}
        className="cursor-pointer select-none"
      >
        <motion.div
          style={{
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* FRENTE */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              position: "absolute",
              inset: 0,
              borderRadius: "9999px",
              overflow: "hidden",
            }}
          >
            <img
              src={logoSrc}
              alt={`Logo ${title}`}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "9999px" }}
              draggable={false}
            />
          </div>

          {/* REVERSO */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              inset: 0,
              borderRadius: "9999px",
              background: "#0d0d0d",
              border: "5px solid #F5C31D",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              padding: "40px",
              boxSizing: "border-box",
            }}
          >
            <span style={{ color: "#F5C31D", opacity: 0.7, fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase" }}>
              Taekwon-Do ITF
            </span>
            <h2 style={{ color: "#F5C31D", fontSize: "28px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", textAlign: "center", margin: 0 }}>
              {title}
            </h2>
            <p style={{ color: "#d1d5db", fontSize: "14px", textAlign: "center", lineHeight: 1.7, margin: 0 }}>
              {description}
            </p>
            <span style={{ color: "#F5C31D", opacity: 0.6, fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", marginTop: "4px" }}>
              {location}
            </span>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => setFlipped((p) => !p)}
        style={{
          borderColor: "#F5C31D",
          color: "#F5C31D",
          background: "transparent",
          border: "1px solid #F5C31D",
          borderRadius: "8px",
          padding: "10px 28px",
          fontSize: "15px",
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.04, backgroundColor: "rgba(245,195,29,0.08)" }}
        whileTap={{ scale: 0.97 }}
      >
        {flipped ? "← Ver logo" : "Ver info →"}
      </motion.button>
    </div>
  );
}
