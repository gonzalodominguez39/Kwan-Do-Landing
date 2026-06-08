import { motion } from "framer-motion";

const pillars = [
  { num: "01", name: "Cortesía", korean: "Ye-Ui" },
  { num: "02", name: "Integridad", korean: "Yom-Chi" },
  { num: "03", name: "Perseverancia", korean: "In-Nae" },
  { num: "04", name: "Autocontrol", korean: "Guk-Gi" },
  { num: "05", name: "Espíritu Indomable", korean: "Baekjul-Boolgool", full: true },
];

export function About() {
  return (
    <section className="py-24 md:py-32 bg-neutral-950" id="about">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
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

          <div className="h-px bg-white/7 mb-6" />

          <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600 font-semibold mb-4">
            Los 5 pilares
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {pillars.map((p) => (
              <div
                key={p.num}
                className={`
                  group flex items-center gap-3
                  bg-white/[0.03] border border-white/[0.07]
                  rounded-xl px-4 py-3
                  hover:border-yellow-400/30 transition-colors
                  ${p.full ? "col-span-2" : ""}
                `}
              >
                <span
                  className="text-yellow-400 leading-none min-w-[28px]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px" }}
                >
                  {p.num}
                </span>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-[0.08em]">
                    {p.name}
                  </p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">{p.korean}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          {/* Big card */}
          <div className="relative overflow-hidden bg-yellow-400/[0.06] border border-yellow-400/20 rounded-2xl p-8 aspect-square flex flex-col justify-end">
            <span
              className="absolute top-4 right-5 text-yellow-400/15 leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "80px" }}
            >
              01
            </span>
            <h3
              className="text-white uppercase tracking-wide"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "36px" }}
            >
              Disciplina
            </h3>
            <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed">
              La base de todo progreso. Sin disciplina, no hay cinturón que valga.
            </p>
          </div>

          {/* Small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { num: "02", title: "Respeto", text: "Valores y compañerismo en el dojang." },
              { num: "03", title: "Superación", text: "Cada cinturón es un logro ganado." },
            ].map((c) => (
              <div
                key={c.num}
                className="relative overflow-hidden bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 hover:border-yellow-400/25 transition-colors"
              >
                <span
                  className="absolute top-2 right-3 text-white/[0.06] leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "40px" }}
                >
                  {c.num}
                </span>
                <h4
                  className="text-white uppercase tracking-wide"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "20px" }}
                >
                  {c.title}
                </h4>
                <p className="text-zinc-500 text-[10px] mt-1 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}