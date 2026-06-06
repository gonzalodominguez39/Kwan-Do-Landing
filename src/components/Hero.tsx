import { motion } from "framer-motion";
import { FaArrowRight, FaMedal, FaFistRaised } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen mt-25 overflow-hidden bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/kwanDo-dojang.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20 min-h-[80vh] flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="
                inline-block
                px-4 py-2
                bg-yellow-400/20
                border border-yellow-400
                rounded-full
                text-yellow-300
                text-sm
                font-medium
                mb-6
              "
            >
              Escuela Oficial de Taekwondo
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-5xl
              md:text-7xl
              font-black
              uppercase
              leading-none
            "
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
            className="
              mt-8
              text-lg
              text-zinc-300
              max-w-xl
              leading-relaxed
            "
          >
            Formamos personas mediante la disciplina, el respeto y la
            superación constante. Clases para niños, adolescentes y adultos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button
              className="
                flex items-center gap-3
                bg-yellow-400
                text-black
                font-bold
                px-8 py-4
                rounded-xl
                hover:scale-105
                transition
              "
            >
              Comenzar Ahora
              <FaArrowRight />
            </button>

            <button
              className="
                border border-zinc-500
                px-8 py-4
                rounded-xl
                text-white
                hover:border-yellow-400
                transition
              "
            >
              Ver Horarios
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
              mt-16
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
            "
          >
            <Stat
              icon={<FaFistRaised />}
              title="Disciplina"
              text="Autocontrol y constancia."
            />

            <Stat
              icon={<FaMedal />}
              title="Respeto"
              text="Valores y compañerismo."
            />

            <Stat
              icon={<FaArrowRight />}
              title="Superación"
              text="Cada cinturón es un logro."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type StatProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function Stat({ icon, title, text }: StatProps) {
  return (
    <div
      className="
        bg-white/5
        backdrop-blur-md
        border border-white/10
        rounded-2xl
        p-6
      "
    >
      <div className="text-yellow-400 text-3xl mb-4">
        {icon}
      </div>

      <h3 className="font-bold text-xl mb-2">
        {title}
      </h3>

      <p className="text-zinc-400">
        {text}
      </p>
    </div>
  );
}