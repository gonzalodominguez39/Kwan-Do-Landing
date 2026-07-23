import { FaBrain } from 'react-icons/fa';
import { IoShieldOutline, IoFitnessOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';


export function Benefits() {
  const { t } = useLanguage();

  return (
    <section
      className="py-20 sm:py-24 md:py-32 bg-neutral-900 border-y-4 border-primary/40"
      id="training-benefits"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-20">
          <p className="text-primary font-black tracking-[0.25em] uppercase text-sm mb-4">
            {t.benefits.label}
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic leading-none">
            {t.benefits.title1}
            <br />
            {t.benefits.title2}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="kinetic-border bg-black p-6 sm:p-8 lg:p-10 min-h-[320px] flex flex-col"
          >
            <IoShieldOutline className="text-primary text-5xl mb-8" />

            <h3 className="text-3xl font-black uppercase mb-4">
              {t.benefits.card1Title}
            </h3>

            <p className="text-on-surface/60 text-lg mt-auto">
              {t.benefits.card1Text}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="kinetic-border-blue bg-black p-6 sm:p-8 lg:p-10 min-h-[320px] flex flex-col"
          >
            <FaBrain className="text-logo-blue text-5xl mb-8" />

            <h3 className="text-3xl font-black uppercase mb-4">
              {t.benefits.card2Title}
            </h3>

            <p className="text-on-surface/60 text-lg mt-auto">
              {t.benefits.card2Text}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="kinetic-border-red bg-black p-6 sm:p-8 lg:p-10 min-h-[320px] flex flex-col"
          >
            <IoFitnessOutline className="text-logo-red text-5xl mb-8" />

            <h3 className="text-3xl font-black uppercase mb-4">
              {t.benefits.card3Title}
            </h3>

            <p className="text-on-surface/60 text-lg mt-auto">
              {t.benefits.card3Text}
            </p>
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
