import { motion, type Variants } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import { IoBookOutline, IoSchoolOutline } from "react-icons/io5";
import { useLanguage } from "../i18n/LanguageContext";
import type { ReactNode } from "react";

interface DocItem {
  id: string;
  title: string;
  description: string;
  file: string;
  filename: string;
  icon: ReactNode;
  accent: string;
  accentHex: string;
  badge: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function Downloads() {
  const { t } = useLanguage();

  const docs: DocItem[] = [
    {
      id: "cartilla-escuelas",
      title: t.downloads.doc1Title,
      description: t.downloads.doc1Desc,
      file: "/docs/KWAN-DO ESCUELAS CARTILLA.pdf",
      filename: "KWAN-DO ESCUELAS CARTILLA.pdf",
      icon: <IoSchoolOutline className="text-4xl" />,
      accent: "logo-blue",
      accentHex: "#00AEEF",
      badge: t.downloads.doc1Badge,
    },
    {
      id: "teoria-tkd",
      title: t.downloads.doc2Title,
      description: t.downloads.doc2Desc,
      file: "/docs/TeoriaTKD.pdf",
      filename: "TeoriaTKD.pdf",
      icon: <IoBookOutline className="text-4xl" />,
      accent: "primary",
      accentHex: "#FCD116",
      badge: t.downloads.doc2Badge,
    },
  ];

  return (
    <section
      id="downloads"
      className="relative overflow-hidden bg-zinc-950 py-24 sm:py-28 md:py-36"
    >
      {/* Background Image: lucha.webp */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-35"
        style={{ backgroundImage: "url('/assets/lucha.webp')" }}
      />

      {/* Gradient Overlays para transición suave sin cortes arriba ni abajo */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent" />
      <div className="absolute inset-0 grainy-bg opacity-20 pointer-events-none" />

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
            {t.downloads.label}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase italic leading-none mb-5">
            {t.downloads.title1}<br />
            <span className="text-primary">{t.downloads.title2}</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base leading-relaxed">
            {t.downloads.subtitle}
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
              style={{ "--accent": doc.accentHex } as any}
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
                  {t.downloads.downloadBtn}
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
          {t.downloads.footerNote}
        </motion.p>
      </div>
    </section>
  );
}
