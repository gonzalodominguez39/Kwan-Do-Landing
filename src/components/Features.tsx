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

export default function Features() {
  // Datos de la sección superior (¿Por qué elegir?)
  const reasons = [
    "Clases para niños desde los 4 años",
    "Clases para adolescentes y adultos",
    "Instructores certificados",
    "Preparación para competencias",
    "Exámenes de graduación",
    "Ambiente familiar y profesional"
  ];

  // Datos de la sección inferior (Beneficios)
  const benefits = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Defensa Personal",
    },
    {
      icon: <FaHeartbeat className="text-3xl" />,
      title: "Condición Física",
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Concentración y Enfoque",
    },
    {
      icon: <FaUserShield className="text-3xl" />,
      title: "Confianza y Autoestima",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Compañerismo y Respeto",
    },
    {
      icon: <FaTrophy className="text-3xl" />,
      title: "Competencia Deportiva",
    },
  ];

  // Variantes de animación para Framer Motion
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
    <section className="bg-zinc-950 text-white py-20 px-6 sm:px-12 lg:px-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* SECCIÓN SUPERIOR: Imagen e Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Lado Izquierdo: Contenedor de la Imagen */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border border-zinc-800"
          >
            {/* Aquí va la foto del Sabonim / Instructor con el logo de fondo */}
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              style={{ backgroundImage: "url('/instructor-kwan-do.jpg')" }} // Reemplazar con tu ruta de imagen
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </motion.div>

          {/* Lado Derecho: ¿Por qué elegir? */}
          <div>
            <span className="text-yellow-400 font-black uppercase tracking-widest text-xs block mb-2 italic">
              ¿POR QUÉ ELEGIR
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tight mb-8">
              KWAN-DO?
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
        <div className="border-t border-zinc-900 pt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider italic mb-4">
            BENEFICIOS DEL TAEKWONDO
          </h3>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-16" />

          {/* Grilla de Beneficios */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="
                  group
                  flex flex-col items-center justify-between
                  bg-zinc-900/20
                  border border-zinc-900
                  p-6
                  min-h-[130px] sm:min-h-[160px]
                  hover:border-yellow-400/40
                  hover:bg-zinc-900/40
                  transition-all
                  duration-300
                "
              >
                {/* Icono */}
                <div className="text-zinc-400 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300 mb-4">
                  {benefit.icon}
                </div>

                {/* Separador sutil */}
                <div className="w-6 h-[2px] bg-zinc-800 group-hover:bg-yellow-400/50 transition-colors mb-4" />

                {/* Título del Beneficio */}
                <h4 className="font-black text-xs sm:text-sm text-zinc-400 group-hover:text-white uppercase tracking-wider leading-tight">
                  {benefit.title}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}