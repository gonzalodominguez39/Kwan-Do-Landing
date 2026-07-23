import { useEffect, useRef, useState } from "preact/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";

interface VideoBannerProps {
  onComplete: () => void;
  videoSrc?: string;
}

export function VideoBanner({
  onComplete,
  videoSrc = "/videos/saludoKwando.mp4",
}: VideoBannerProps) {
  const [visible, setVisible] = useState(true);
  const [duration, setDuration] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleDismiss = () => {
    setVisible(false);
    // Esperamos 1.2s para que se ejecute la animación de difuminado/fade out (backdrop-blur + opacity)
    setTimeout(onComplete, 1200);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(30px)", scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[998] bg-black flex items-center justify-center overflow-hidden backdrop-blur-3xl"
        >
          {/* Fondo o fallback mientras carga/si no hay video */}
          <div className="absolute inset-0 bg-neutral-950" />

          {/* Video Fullscreen */}
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            playsInline
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleDismiss}
            onError={(e) => {
              console.error("Error al cargar el video:", e);
              handleDismiss();
            }}
            className="relative z-10 w-full h-full object-cover"
          />

          {/* Overlay de degradado estético */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40 z-20 pointer-events-none" />

          {/* Botón Omitir / Saltar */}
          <button
            onClick={handleDismiss}
            className="absolute top-8 right-8 z-30 flex items-center gap-2 bg-black/60 hover:bg-yellow-400 hover:text-black text-white px-5 py-2.5 rounded-full border border-white/20 hover:border-yellow-400 text-xs font-black uppercase tracking-widest backdrop-blur-md transition-all duration-300 shadow-lg"
          >
            <span>Saltar</span>
            <IoCloseOutline className="text-lg" />
          </button>

          {/* Barra de progreso inferior según duración real del video */}
          {duration > 0 && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: duration, ease: "linear" }}
                className="h-full bg-yellow-400"
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
