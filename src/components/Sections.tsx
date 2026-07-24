
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

const sabonimImages = [
  '/assets/Sabonim.webp',
  '/assets/Sabonim1.webp',
  '/assets/Sabonim2.webp',
  '/assets/Sabonim3.webp',
];

export function Benefits() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? sabonimImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === sabonimImages.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Variantes para la transición suntuosa/profesional estilo portada editorial
  const slideVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir * 40,
      scale: 1.05,
      filter: "blur(4px)",
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring" as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.45, ease: "easeOut" as const },
        scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
        filter: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir * -40,
      scale: 0.96,
      filter: "blur(4px)",
      transition: {
        x: { duration: 0.35, ease: "easeIn" as const },
        opacity: { duration: 0.3, ease: "easeIn" as const },
        scale: { duration: 0.35 },
        filter: { duration: 0.3 },
      },
    }),
  };

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
          
          {/* Foto del Sabonim y Galería */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Contenedor principal de la foto */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/40 shadow-[0_0_50px_rgba(252,209,22,0.15)] bg-neutral-900 group h-[450px] sm:h-[500px]">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.img
                  key={sabonimImages[currentIndex]}
                  src={sabonimImages[currentIndex]}
                  custom={direction}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  alt="Sabonim Esteban Gabriel Contardi - VI Dan Taekwondo ITF"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -40) {
                      handleNext();
                    } else if (info.offset.x > 40) {
                      handlePrev();
                    }
                  }}
                  className="w-full h-full object-cover select-none cursor-grab active:cursor-grabbing"
                />
              </AnimatePresence>
              
              {/* Overlay de gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />

              {/* Botón Anterior */}
              <button
                onClick={handlePrev}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 z-10 shadow-lg"
              >
                <FaChevronLeft className="text-sm" />
              </button>

              {/* Botón Siguiente */}
              <button
                onClick={handleNext}
                aria-label="Siguiente foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 z-10 shadow-lg"
              >
                <FaChevronRight className="text-sm" />
              </button>
              
              {/* Badge de Grado sobre la imagen */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-black/85 backdrop-blur-md border border-white/10 p-4 rounded-xl pointer-events-none z-10">
                <div>
                  <p className="text-yellow-400 font-black uppercase text-xs tracking-widest">{t.sabonim.badgeWorldChamp}</p>
                  <p className="text-white font-bold text-sm tracking-wide">{t.sabonim.badgeRank}</p>
                </div>
                <span className="text-2xl font-black text-yellow-400" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  ITF
                </span>
              </div>
            </div>

            {/* Miniaturas de fotos */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {sabonimImages.map((imgSrc, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 h-20 bg-neutral-900 ${
                    currentIndex === idx
                      ? 'border-yellow-400 scale-105 shadow-[0_0_15px_rgba(252,209,22,0.4)]'
                      : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                  }`}
                >
                  <img
                    src={imgSrc}
                    alt={`Sabonim foto ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
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
              {t.sabonim.technicalDirection}
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase italic leading-[0.95] tracking-wide text-white mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {t.sabonim.titleFirstName} <br />
              <span className="text-yellow-400">{t.sabonim.titleLastName}</span>
            </h2>

            <p className="text-yellow-400/90 font-bold uppercase tracking-widest text-xs sm:text-sm mb-6">
              {t.sabonim.subtitle}
            </p>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
              <p className="border-l-2 border-yellow-400 pl-4">
                {t.sabonim.bio1}
              </p>
              <p className="border-l-2 border-white/20 pl-4 text-zinc-400">
                {t.sabonim.bio2}
              </p>
            </div>

            {/* Ficha técnica de credenciales */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">{t.sabonim.labelPosition}</p>
                <p className="text-xs sm:text-sm font-black text-white uppercase italic mt-1">{t.sabonim.valPosition}</p>
              </div>
              <div className="bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">{t.sabonim.labelCategory}</p>
                <p className="text-xs sm:text-sm font-black text-yellow-400 uppercase italic mt-1">{t.sabonim.valCategory}</p>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">{t.sabonim.labelDiscipline}</p>
                <p className="text-xs sm:text-sm font-black text-white uppercase italic mt-1">{t.sabonim.valDiscipline}</p>
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
