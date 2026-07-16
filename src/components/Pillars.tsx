import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cortesiaImg from "../assets/cortesia.jpg";
import integridadImg from "../assets/integridad.png";
import perseveranciaImg from "../assets/perseverancia.png";
import autocontrolImg from "../assets/autocontrol.png";
import espirituImg from "../assets/espiritu.jpg";
const pillars = [
  {
    num: "01",
    name: "Cortesía",
    korean: "Ye-Ui",
    hanja: "禮義",
    description:
      "El respeto hacia el instructor, los compañeros y uno mismo es la puerta de entrada al camino marcial. Sin cortesía no hay aprendizaje verdadero.",
    photo: cortesiaImg,
  },
  {
    num: "02",
    name: "Integridad",
    korean: "Yom-Chi",
    hanja: "廉恥",
    description:
      "Actuar con honestidad dentro y fuera del dojang. La integridad es la diferencia entre saber pelear y ser un verdadero artista marcial.",
    photo: integridadImg,
  },
  {
    num: "03",
    name: "Perseverancia",
    korean: "In-Nae",
    hanja: "忍耐",
    description:
      "Cada caída es parte del entrenamiento. Levantarse siempre, superar los límites y nunca abandonar ante la adversidad.",
    photo: perseveranciaImg,
  },
  {
    num: "04",
    name: "Autocontrol",
    korean: "Guk-Gi",
    hanja: "克己",
    description:
      "La fuerza más difícil de dominar es la propia. El autocontrol en el combate y en la vida define al verdadero practicante.",
    photo: autocontrolImg,
  },
  {
    num: "05",
    name: "Espíritu Indomable",
    korean: "Baekjul-Boolgool",
    hanja: "百折不屈",
    description:
      "Un espíritu que no puede ser doblegado. Frente a la injusticia, la duda o el dolor, el verdadero guerrero permanece de pie.",
    photo: espirituImg,
  },
];

export function Pillars() {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setActive((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-24 md:py-32 bg-neutral-950" id="pillars">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 text-[10px] font-semibold text-yellow-400 uppercase tracking-[0.14em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Filosofía ITF
            </span>
            <h2
              className="text-[44px] sm:text-[58px] leading-[0.9] uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Los 5 Principios
              <br />
              <span className="text-yellow-400">del Taekwondo</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
            Seleccioná un principio para conocer su significado y su lugar en el camino del Kwan-Do.
          </p>
        </div>

        <div className="h-px bg-white/[0.06] mb-10" aria-hidden="true" />

        {/* ── MOBILE: accordion vertical ── */}
        <div className="flex flex-col gap-3 md:hidden">
          {pillars.map((p, idx) => {
            const isActive = active === idx;
            return (
              <div
                key={p.num}
                className="relative overflow-hidden rounded-2xl cursor-pointer border border-white/[0.07] hover:border-yellow-400/30 transition-colors"
                onClick={() => handleClick(idx)}
              >
                {/* Row header */}
                <div className="flex items-center gap-4 px-5 py-4">
                  <span
                    className="text-yellow-400 leading-none shrink-0"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "32px" }}
                  >
                    {p.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm uppercase tracking-[0.08em] leading-tight">
                      {p.name}
                    </p>
                    <p className="text-yellow-400/70 text-[10px] uppercase tracking-widest mt-0.5">
                      {p.korean}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-yellow-400 text-xl shrink-0 font-light"
                  >
                    +
                  </motion.span>
                </div>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="relative h-48 w-full">
                        <img
                          src={p.photo}
                          alt={p.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/40 to-transparent" />
                        <div
                          className="absolute left-0 top-0 bottom-0 w-[3px]"
                          style={{ background: "#FACC15" }}
                        />
                        {/* Hanja decorativo */}
                        <span
                          className="absolute top-3 right-4 select-none"
                          style={{
                            fontFamily: "serif",
                            fontSize: "52px",
                            lineHeight: 1,
                            color: "rgba(255,255,255,0.07)",
                          }}
                        >
                          {p.hanja}
                        </span>
                      </div>
                      <div className="px-5 py-5 bg-neutral-950">
                        <p className="text-zinc-300 text-sm leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP: accordion horizontal ── */}
        <div className="hidden md:flex gap-2 h-[520px]">
          {pillars.map((p, idx) => {
            const isActive = active === idx;
            const isDimmed = active !== null && !isActive;

            return (
              <motion.div
                key={p.num}
                className="relative overflow-hidden rounded-2xl cursor-pointer flex-shrink-0"
                onClick={() => handleClick(idx)}
                animate={{
                  flex: isActive ? "0 0 58%" : "0 0 10.5%",
                  opacity: isDimmed ? 0.45 : 1,
                }}
                transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                style={{ minWidth: 0 }}
              >
                {/* Foto */}
                <motion.img
                  src={p.photo}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ scale: isActive ? 1.04 : 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Overlay base */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Overlay gradiente al abrir */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.1) 100%)",
                  }}
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Borde acento izquierdo al activar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                  style={{ background: "#FACC15" }}
                  animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0.4 }}
                  transition={{ duration: 0.35 }}
                />

                {/* === ESTADO CERRADO: número + nombre vertical === */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      key="closed"
                      className="absolute inset-0 flex flex-col items-center justify-end pb-6 gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <span
                        className="text-yellow-400/80 text-center"
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: "15px",
                          letterSpacing: "0.05em",
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {p.name}
                      </span>
                      <span
                        className="text-white/20"
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: "13px",
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {p.num}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* === ESTADO ABIERTO: contenido completo === */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="open"
                      className="absolute inset-0 flex flex-col justify-between p-8 md:p-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      {/* Top: hanja + badge */}
                      <div className="flex items-start justify-between">
                        <span
                          className="text-white/8 leading-none select-none"
                          style={{
                            fontFamily: "serif",
                            fontSize: "96px",
                            lineHeight: 1,
                            color: "rgba(255,255,255,0.06)",
                          }}
                        >
                          {p.hanja}
                        </span>
                        <span
                          className="text-[9px] uppercase tracking-[0.14em] font-semibold border-0 inline-flex items-center rounded-full px-2 py-1"
                          style={{ background: "rgba(250,204,21,0.12)", color: "#FACC21" }}
                        >
                          {p.num} / 05
                        </span>
                      </div>

                      {/* Bottom: info */}
                      <div>
                        <motion.p
                          className="text-yellow-400 text-[11px] uppercase tracking-[0.18em] font-semibold mb-2"
                          initial={{ y: 12, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.35 }}
                        >
                          {p.korean}
                        </motion.p>

                        <motion.h3
                          className="text-white uppercase leading-[0.88] mb-5"
                          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "52px" }}
                          initial={{ y: 16, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.24, duration: 0.38 }}
                        >
                          {p.name}
                        </motion.h3>

                        <div className="h-px bg-white/10 mb-5" aria-hidden="true" />

                        <motion.p
                          className="text-zinc-300 text-sm leading-relaxed max-w-sm"
                          initial={{ y: 12, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.4 }}
                        >
                          {p.description}
                        </motion.p>

                        {/* Cerrar hint */}
                        <motion.button
                          className="mt-6 flex items-center gap-2 text-zinc-600 hover:text-zinc-400 text-[10px] uppercase tracking-widest transition-colors"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.45 }}
                          onClick={(e) => { e.stopPropagation(); setActive(null); }}
                        >
                          <span className="w-4 h-px bg-current" />
                          Cerrar
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Footer leyenda */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className="w-6 h-px bg-white/10" />
          <p className="text-zinc-700 text-[9px] uppercase tracking-[0.2em] hidden md:block">
            Seleccioná un principio para expandirlo
          </p>
          <p className="text-zinc-700 text-[9px] uppercase tracking-[0.2em] md:hidden">
            Tocá un principio para expandirlo
          </p>
          <span className="w-6 h-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}