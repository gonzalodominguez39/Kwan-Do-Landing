import { motion } from "framer-motion";
import { FaArrowRight, FaClock } from "react-icons/fa";
import disciplineImg from '../assets/discipline.png';
import respectImg from '../assets/respect.png';
import improveImg from '../assets/improvement.png';

export default function Hero() {
  return (
    <section className="relative min-h-[108vh] md:min-h-[116vh] mt-16 md:mt-24 overflow-hidden bg-neutral-950">
      {/* Background */}
     <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/background.jpeg')",
    backgroundPosition: "center top", 
  }}
/>
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/42 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[34rem] bg-gradient-to-b from-transparent via-neutral-950/55 to-neutral-950" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-yellow-400 z-20" />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-0 w-80 h-80 pointer-events-none z-10"
        style={{
          background: "radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Belt stripes decoration */}
      <div className="hidden md:flex right-8 top-1/2 -translate-y-1/2 flex-col gap-[5px] opacity-20 z-10 pointer-events-none absolute">
        {[
          { color: "#ffffff", h: "32px" },
          { color: "#facc15", h: "20px" },
          { color: "#f97316", h: "24px" },
          { color: "#22c55e", h: "20px" },
          { color: "#3b82f6", h: "20px" },
          { color: "#ef4444", h: "24px" },
          { color: "#1c1917", h: "28px", border: true },
        ].map((belt, i) => (
          <span
            key={i}
            className="block w-1 rounded-sm"
            style={{
              height: belt.h,
              backgroundColor: belt.color,
              border: belt.border ? "1px solid #666" : undefined,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mt-10 sm:px-8 lg:px-10 xl:px-12 min-h-[74vh] sm:min-h-[88vh] md:min-h-[96vh] flex items-start">
        <div className="max-w-3xl w-full">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/40 rounded-full text-yellow-300 text-xs font-medium uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              Escuela Oficial de Taekwondo
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-black uppercase leading-[0.92] tracking-wide"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 8vw, 80px)" }}
          >
            Escuela de
            <br />
            <span className="text-white">Taekwondo</span>
            <br />
            <span className="text-yellow-400">Kwan-Do</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm text-zinc-400 max-w-xl leading-relaxed"
          >
            Formamos personas mediante la disciplina, el respeto y la
            superación constante. Clases para niños, adolescentes y adultos.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button className="flex items-center gap-3 bg-yellow-400 text-black font-bold text-sm px-8 py-3.5 rounded-xl hover:scale-105 transition tracking-wide">
              Comenzar Ahora
              <FaArrowRight />
            </button>

            <button className="flex items-center gap-2 border border-white/15 px-8 py-3.5 rounded-xl text-zinc-300 text-sm hover:border-yellow-400/50 transition">
              <FaClock className="text-yellow-400/70" />
              Ver Horarios
            </button>
          </motion.div>

          {/* Divider */}
          <div className="mt-14 mb-6 h-px bg-white/8" />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0"
          >
            <Stat icon={disciplineImg} title="Disciplina" text="Autocontrol y constancia en cada entrenamiento." />
            <Stat icon={respectImg} title="Respeto" text="Valores y compañerismo como base del arte marcial." hasDivider />
            <Stat icon={improveImg} title="Superación" text="Cada cinturón es un logro ganado con esfuerzo." hasDivider />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

type StatProps = {
  icon: string;
  title: string;
  text: string;
  hasDivider?: boolean;
};

function Stat({ icon, title, text, hasDivider = false }: StatProps) {
  return (
    <div
      className={`relative flex flex-col items-center px-5 text-center sm:px-7 ${
        hasDivider ? "sm:border-l sm:border-white/15" : ""
      }`}
    >
      <div className="relative mb-4 flex h-16 w-16 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-yellow-500/35 shadow-[0_0_18px_rgba(245,197,24,0.18)]" />
        <span className="absolute inset-1 rounded-full border-t-4 border-r-2 border-b-2 border-l-4 border-yellow-500/75 rotate-[-24deg]" />
        <span className="absolute -inset-1 rounded-full border-t-2 border-yellow-700/60 rotate-[28deg]" />
        <img className="relative z-10 h-9 w-9 object-contain brightness-0 invert" src={icon} alt={title} />
      </div>

      <h3 className="mb-2 text-base font-black uppercase tracking-wide text-white">
        {title}
      </h3>

      <p className="max-w-[180px] text-sm leading-snug text-zinc-300">
        {text}
      </p>
    </div>
  );
}
