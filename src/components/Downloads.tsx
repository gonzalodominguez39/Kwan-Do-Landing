import { motion } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import { IoBookOutline, IoSchoolOutline } from "react-icons/io5";

const docs = [
  {
    id: "cartilla-escuelas",
    title: "Cartilla de Escuelas KWAN-DO",
    description:
      "Cartilla oficial con información de todas las escuelas que conforman la organización KWAN-DO.",
    file: "/docs/KWAN-DO ESCUELAS CARTILLA.pdf",
    filename: "KWAN-DO ESCUELAS CARTILLA.pdf",
    icon: <IoSchoolOutline className="text-4xl" />,
    accent: "logo-blue",      // blue
    accentHex: "#00AEEF",
    badge: "Escuelas",
  },
  {
    id: "teoria-tkd",
    title: "Teoría del Taekwon-Do",
    description:
      "Material teórico oficial del Taekwon-Do ITF. Fundamentos, historia, filosofía y principios del arte marcial.",
    file: "/docs/TeoriaTKD.pdf",
    filename: "TeoriaTKD.pdf",
    icon: <IoBookOutline className="text-4xl" />,
    accent: "primary",        // gold
    accentHex: "#FCD116",
    badge: "Teoría",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Downloads() {
  return (
    <section
      id="downloads"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-28 md:py-36 border-y border-white/10"
    >
      {/* Background texture */}
      <div className="absolute inset-0 grainy-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(252,209,22,0.07),transparent)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 text-primary font-black tracking-[0.25em] uppercase text-xs mb-5">
            <FaFilePdf className="text-base" />
            Material oficial
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase italic leading-none mb-5">
            Descargá la<br />
            <span className="text-primary">Teoría</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base leading-relaxed">
            Accedé de forma gratuita al material teórico oficial de KWAN-DO
            para complementar tu entrenamiento.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {docs.map((doc) => (
            <motion.div
              key={doc.id}
              variants={cardVariants}
              className="downloads-card group"
              style={{ "--accent": doc.accentHex } as React.CSSProperties}
            >
              {/* Top accent bar */}
              <div
                className="downloads-card-bar"
                style={{ background: doc.accentHex }}
              />

              {/* Badge */}
              <div className="downloads-card-inner">
                <span
                  className="downloads-badge"
                  style={{ color: doc.accentHex, borderColor: `${doc.accentHex}40`, background: `${doc.accentHex}12` }}
                >
                  {doc.badge}
                </span>

                {/* Icon */}
                <div
                  className="downloads-icon"
                  style={{ color: doc.accentHex }}
                >
                  {doc.icon}
                </div>

                {/* Text */}
                <h3 className="downloads-title">{doc.title}</h3>
                <p className="downloads-description">{doc.description}</p>

                {/* Download button */}
                <a
                  href={doc.file}
                  download={doc.filename}
                  className="downloads-btn"
                  style={{
                    background: doc.accentHex,
                    boxShadow: `4px 4px 0px ${doc.accentHex}60`,
                  }}
                  id={`download-${doc.id}`}
                >
                  <FaDownload className="downloads-btn-icon" />
                  Descargar PDF
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-xs font-bold text-zinc-600 uppercase tracking-widest"
        >
          Material de uso libre para alumnos y escuelas KWAN-DO
        </motion.p>
      </div>
    </section>
  );
}
