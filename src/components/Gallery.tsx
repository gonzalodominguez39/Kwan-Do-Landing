import { useEffect, useState } from "preact/hooks";
import { AnimatePresence, motion } from "framer-motion";
import gallery01 from "../assets/kwando-galeria/IMG_3860.webp";
import gallery02 from "../assets/kwando-galeria/IMG_9474.webp";
import gallery03 from "../assets/kwando-galeria/IMG_7170.webp";
import gallery04 from "../assets/kwando-galeria/IMG_3955.webp";
import gallery05 from "../assets/kwando-galeria/IMG_4343.webp";
import gallery06 from "../assets/kwando-galeria/IMG_7178.webp";
import gallery07 from "../assets/kwando-galeria/IMG_0635.webp";
import gallery08 from "../assets/kwando-galeria/IMG_4649.webp";
import gallery09 from "../assets/kwando-galeria/IMG_7173.webp";
import gallery10 from "../assets/kwando-galeria/IMG_9473.webp";
import { useLanguage } from "../i18n/LanguageContext";

const galleryImages = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
  gallery09,
  gallery10,
];

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-zinc-950 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block text-xs font-black uppercase italic tracking-widest text-yellow-400">
              {t.gallery.badge}
            </span>
            <h2 className="text-4xl font-black uppercase italic leading-none tracking-wide text-white sm:text-5xl">
              {t.gallery.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm font-medium leading-relaxed text-zinc-400">
            {t.gallery.subtitle}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-4 lg:auto-rows-[220px]"
        >
          {galleryImages.map((image, index) => {
            const featured = index === 0 || index === 7;

            return (
              <motion.figure
                key={image}
                variants={itemVariants}
                className={`group relative overflow-hidden bg-zinc-900 ${
                  featured ? "col-span-2 row-span-2" : ""
                }`}
              >
                <button
                  type="button"
                  className="relative block h-full w-full cursor-zoom-in overflow-hidden text-left"
                  onClick={() => setSelectedImage(image)}
                  aria-label={t.gallery.ariaZoom}
                >
                  <img
                    src={image}
                    alt="Galería Kwan-Do"
                    loading={index < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-35" />
                </button>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/88 px-4 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              type="button"
              className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/50 text-2xl leading-none text-white transition-colors hover:border-yellow-400 hover:text-yellow-400"
              aria-label={t.gallery.ariaClose}
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              ×
            </motion.button>

            <motion.img
              src={selectedImage}
              alt="Galería Kwan-Do ampliada"
              className="max-h-[88vh] max-w-[92vw] object-contain shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
