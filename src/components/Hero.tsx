import { motion } from "framer-motion";
import { FaArrowRight, FaClock } from "react-icons/fa";
import disciplineImg from '../assets/discipline.png';
import respectImg from '../assets/respect.png';
import improveImg from '../assets/improvement.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen mt-24 overflow-hidden bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kwanDo-dojang.png')" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

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
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-[5px] opacity-20 z-10 pointer-events-none">
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
      <div className="relative z-10 max-w-7xl mt-10 mx-auto px-6 sm:px-8 lg:px-20 min-h-[80vh] flex items-center">
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
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px, 8vw, 80px)" }}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          >
            <Stat icon={disciplineImg} title="Disciplina" text="Autocontrol y constancia en cada entrenamiento." />
            <Stat icon={respectImg} title="Respeto" text="Valores y compañerismo como base del arte marcial." />
            <Stat icon={improveImg} title="Superación" text="Cada cinturón es un logro ganado con esfuerzo." />
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
};

function Stat({ icon, title, text }: StatProps) {
  return (
    <div
      className="
        group relative overflow-hidden
        bg-white/[0.15]
        border border-white/[0.08]
        rounded-2xl
        p-6
        text-center
        hover:border-yellow-400/35
        transition-all duration-300
        before:absolute before:top-0 before:inset-x-0 before:h-[2px]
        before:bg-yellow-400 before:opacity-0
        before:transition-opacity before:duration-300
        hover:before:opacity-100
      "
    >
      <div className="flex justify-center mb-5">
        <div>
          <img className="w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto" src={icon} alt={title} />
        </div>
      </div>

      <h3 className="font-bold text-sm text-white mb-2 uppercase tracking-widest">
        {title}
      </h3>

      <p className="text-white text-xs leading-relaxed">
        {text}
      </p>
    </div>
  );
}