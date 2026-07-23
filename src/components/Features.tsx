import { motion } from "framer-motion";
import { 
  FaCheckCircle, 
  FaShieldAlt, 
  FaHeartbeat, 
  FaBrain, 
  FaUserShield, 
  FaUsers, 
  FaTrophy 
} from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";

const choosingUsImg = "/assets/choosing-us.webp";
const focusImg = "/assets/focus.webp";

export default function Features() {
  const { t } = useLanguage();

  const reasons = [
    t.features.reasons[0],
    t.features.reasons[1],
    t.features.reasons[2],
    t.features.reasons[3],
    t.features.reasons[4],
    t.features.reasons[5],
  ];

  const benefits = [
    { icon: <FaShieldAlt className="text-3xl" />, title: t.features.benefit1 },
    { icon: <FaHeartbeat className="text-3xl" />, title: t.features.benefit2 },
    { icon: <FaBrain className="text-3xl" />, title: t.features.benefit3 },
    { icon: <FaUserShield className="text-3xl" />, title: t.features.benefit4 },
    { icon: <FaUsers className="text-3xl" />, title: t.features.benefit5 },
    { icon: <FaTrophy className="text-3xl" />, title: t.features.benefit6 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="bg-zinc-950 text-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* SECCIÓN SUPERIOR: Imagen e Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center mb-16">
          
          {/* Lado Izquierdo: Contenedor de la Imagen */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3]  w-full overflow-hidden  bg-zinc-900 border border-zinc-800"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              style={{ backgroundImage: `url(${choosingUsImg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </motion.div>

          {/* Lado Derecho: ¿Por qué elegir? */}
          <div className="ml-10">
            <span className="text-yellow-400 font-black uppercase tracking-widest text-xs block mb-2 italic">
              {t.features.whyLabel}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tight mb-8">
              {t.features.whyTitle}
            </h2>

            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start gap-3 text-zinc-300 font-medium text-base sm:text-lg"
                >
                  <FaCheckCircle className="text-yellow-400 mt-1 flex-shrink-0 text-xl" />
                  <span>{reason}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* SECCIÓN INFERIOR: Beneficios del Taekwondo */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-20 lg:py-36 text-center min-h-[680px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center lg:bg-[center_42%]"
            style={{ backgroundImage: `url(${focusImg})` }}
          />
          <div className="absolute inset-0 bg-black/38" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/75 via-zinc-950/10 to-zinc-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-zinc-950/40" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent" />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <span className="text-yellow-400 font-black uppercase tracking-widest text-xs block mb-3 italic">
              {t.features.benefitsLabel}
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-wider italic mb-4">
              {t.features.benefitsTitle}
            </h3>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-zinc-100 leading-relaxed mb-10">
              {t.features.benefitsSubtitle}
            </p>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-12" />

            {/* Grilla de Beneficios */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="
                    group
                    flex flex-col items-center justify-between
                    bg-black/28
                    backdrop-blur-[2px]
                    border border-white/20
                    p-5 sm:p-6
                    min-h-[155px] sm:min-h-[180px]
                    hover:border-yellow-400/60
                    hover:bg-black/42
                    transition-all
                    duration-300
                  "
                >
                  {/* Icono */}
                  <div className="text-white/80 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300 mb-4">
                    {benefit.icon}
                  </div>

                  {/* Separador sutil */}
                  <div className="w-8 h-[2px] bg-yellow-400/35 group-hover:bg-yellow-400 transition-colors mb-4" />

                  {/* Título del Beneficio */}
                  <h4 className="font-black text-xs sm:text-sm text-zinc-100 group-hover:text-white uppercase tracking-wider leading-tight">
                    {benefit.title}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
