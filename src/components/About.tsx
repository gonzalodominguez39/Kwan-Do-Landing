import { motion } from "framer-motion";
import KwandoFlipCard from "./KwandoFlipCard";


export function About() {
  return (
    <section className="py-24 md:py-32 bg-neutral-950" id="about">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/35 rounded-full px-4 py-1.5 text-[10px] font-semibold text-yellow-400 uppercase tracking-[0.12em] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              ITF Philosophy
            </span>

            <h2
              className="text-[42px] sm:text-[52px] md:text-[56px] leading-[0.92] uppercase mb-6 tracking-wide"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              La filosofía
              <br />
              <span className="text-yellow-400">Kwan-Do</span>
            </h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-[3px] border-yellow-400 pl-5">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  En Kwan-Do no solo enseñamos una técnica de combate; forjamos el carácter.
                  Nuestra base en el Taekwondo ITF se centra en cinco pilares fundamentales.
                </p>
              </div>
              <div className="border-l-[3px] border-red-500 pl-5">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Cada movimiento es una expresión de disciplina y crecimiento.
                  El arte marcial como camino de vida.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <KwandoFlipCard />
          </motion.div>
        </div>

   
        
      </div>
    </section>
  );
}