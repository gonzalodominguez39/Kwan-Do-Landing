import { FaBrain } from 'react-icons/fa';
import { IoShieldOutline, IoFitnessOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';


export function Benefits() {
  const { t } = useLanguage();

  return (
    <section
      className="py-24 sm:py-28 md:py-36 bg-neutral-950 relative overflow-hidden border-y border-white/10"
      id="training-benefits"
    >
      {/* Resplandor radial de fondo */}
      <div className="absolute inset-0 grainy-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Foto del Sabonim */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/40 shadow-[0_0_50px_rgba(252,209,22,0.15)] bg-neutral-900 group">
              <img
                src="/assets/Sabonim.webp"
                alt="Sabonim Esteban Gabriel Contardi - VI Dan Taekwondo ITF"
                className="w-full h-auto object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              
              {/* Badge de Grado sobre la imagen */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-black/85 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <div>
                  <p className="text-yellow-400 font-black uppercase text-xs tracking-widest">Bicampeón Mundial</p>
                  <p className="text-white font-bold text-sm tracking-wide">VI Dan Internacional</p>
                </div>
                <span className="text-2xl font-black text-yellow-400" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  ITF
                </span>
              </div>
            </div>
          </motion.div>

          {/* Información del Presidente e Instructor */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 text-[10px] font-semibold text-yellow-400 uppercase tracking-[0.2em] mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Dirección Técnica
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic leading-[0.95] tracking-wide text-white mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Sabonim Esteban <br />
              <span className="text-yellow-400">Gabriel Contardi</span>
            </h2>

            <p className="text-yellow-400/90 font-bold uppercase tracking-widest text-xs sm:text-sm mb-6">
              Presidente e Instructor de Kwan-Do · VI Dan Taekwondo ITF
            </p>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
              <p className="border-l-2 border-yellow-400 pl-4">
                Referente de la organización Kwan-Do. Dedicado a la formación marcial integral y a la preservación de los principios éticos del Taekwondo ITF.
              </p>
              <p className="border-l-2 border-white/20 pl-4 text-zinc-400">
                Con décadas de trayectoria en la enseñanza, preparación competitiva y transmisión de valores, impulsa el crecimiento continuo de instructores y alumnos en cada una de las escuelas de la asociación.
              </p>
            </div>

            {/* Ficha técnica de credenciales */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Cargo</p>
                <p className="text-xs sm:text-sm font-black text-white uppercase italic mt-1">Presidente Kwan-Do</p>
              </div>
              <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Categoría</p>
                <p className="text-xs sm:text-sm font-black text-yellow-400 uppercase italic mt-1">VI Dan ITF</p>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Disciplina</p>
                <p className="text-xs sm:text-sm font-black text-white uppercase italic mt-1">Taekwon-Do ITF</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function Schedule() {
  const { t } = useLanguage();

  const scheduleData = [
    {
      hora: "18:30 - 20:00",
      dias: t.schedule.schedule1Days,
      clase: t.schedule.schedule1Class,
      color: "text-logo-blue",
      bgColor: "bg-logo-blue/10",
      borderColor: "border-l-logo-blue",
    },
    {
      hora: "20:30 - 22:00",
      dias: t.schedule.schedule2Days,
      clase: t.schedule.schedule2Class,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-l-primary",
    },
  ];

  return (
    <section
      className="py-20 sm:py-24 md:py-32 bg-black border-y-2 border-white/10"
      id="schedule"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <p className="text-primary font-black tracking-[0.25em] uppercase text-sm mb-4">
            {t.schedule.label}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic mb-4">
            {t.schedule.title}
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto skew-kinetic" />
          <p className="text-on-surface/60 mt-6 max-w-2xl mx-auto">
            {t.schedule.subtitle}
          </p>
        </div>

        {/* Versión móvil - Cards */}
        <div className="md:hidden space-y-4">
          {scheduleData.map((item) => (
            <motion.div
              key={item.hora}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={`border-l-8 ${item.borderColor} border border-white/10 bg-neutral-900/50 backdrop-blur-sm p-6`}
            >
              <div className={`${item.color} font-black text-4xl mb-4`}>
                {item.hora}
              </div>

              <div className="space-y-3 uppercase font-bold">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-white/40 text-sm">{t.schedule.dayLabel}</span>
                  <span className="text-white text-right">{item.dias}</span>
                </div>
                <div className="flex justify-between items-start gap-4 pt-2 border-t border-white/10">
                  <span className="text-white/40 text-sm">{t.schedule.classLabel}</span>
                  <span className={`${item.color} font-black text-right`}>{item.clase}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Versión desktop - Tabla mejorada */}
        <div className="hidden md:block">
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-neutral-900/30 backdrop-blur-sm">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-5 text-white/40 font-bold uppercase text-sm tracking-wider">
                    {t.schedule.colTime}
                  </th>
                  <th className="text-left p-5 text-white/40 font-bold uppercase text-sm tracking-wider">
                    {t.schedule.colDays}
                  </th>
                  <th className="text-left p-5 text-white/40 font-bold uppercase text-sm tracking-wider">
                    {t.schedule.colClass}
                  </th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item, idx) => (
                  <motion.tr
                    key={item.hora}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`border-b border-white/5 hover:${item.bgColor} transition-colors duration-300`}
                  >
                    <td className="p-5">
                      <span className={`${item.color} font-black text-2xl`}>
                        {item.hora}
                      </span>
                    </td>
                    <td className="p-5 text-white font-medium">
                      {item.dias}
                    </td>
                    <td className="p-5">
                      <span className={`${item.color} font-black`}>
                        {item.clase}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Leyenda adicional */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-logo-blue rounded-full" />
              <span className="text-white/60">{t.schedule.legend1}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-white/60">{t.schedule.legend2}</span>
            </div>
          </div>
        </div>

        {/* Nota adicional */}
        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            {t.schedule.note}
          </p>
        </div>
      </div>
    </section>
  );
}
