import { useState, useEffect } from "preact/hooks";
import { motion, AnimatePresence } from "framer-motion";

const logo = "/assets/KwanDo-Logo.webp";

const DURATION = 2.4; 


const beatTimes = [
  0,
  0.04, 0.08,  
  0.12, 0.16,   
  0.5,          
  0.54, 0.58,   
  0.62, 0.66,   
  1
];

const beatScale = [
  1,
  1.2, 1,      
  1.1, 1,       
  1,
  1.2, 1,
  1.1, 1,
  1
];


const TUC_TIMES_MS = [
  0.04 * DURATION * 1000,
  0.12 * DURATION * 1000,
  0.54 * DURATION * 1000,
  0.62 * DURATION * 1000,
];

let waveId = 0;

function Shockwave({ color, size = 6 }: { color: string; size?: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: `${size}px solid ${color}`,
        pointerEvents: "none",
        zIndex: 5,
      }}
      initial={{ scale: 0.6, opacity: 0.8, filter: "blur(1px)" }}
      animate={{
        scale: 6,
        opacity: 0,
        filter: "blur(20px)",
      }}
      transition={{
        duration: 1.6,
        ease: "easeOut",
      }}
    />
  );
}

export function Loader() {
  const [waves, setWaves] = useState<{ id: number; color: string; size: number }[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    function scheduleWaves() {
      TUC_TIMES_MS.forEach((tucMs) => {
        const t = setTimeout(() => {
          const id1 = waveId++;
          const id2 = waveId++;

          setWaves(w => [
            ...w,
            { id: id1, color: "#FCD116", size: 8 }, 
            { id: id2, color: "#ffffff", size: 4 }, 
          ]);

          setTimeout(() => {
            setWaves(w => w.filter(x => x.id !== id1 && x.id !== id2));
          }, 1800);
        }, tucMs);

        timers.push(t);
      });
    }

    scheduleWaves();
    const interval = setInterval(scheduleWaves, DURATION * 1000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[999] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex items-center justify-center">
        <AnimatePresence>
          {waves.map(w => (
            <Shockwave key={w.id} color={w.color} size={w.size} />
          ))}
        </AnimatePresence>

        <motion.div
          className="relative z-10 w-[88vw] max-w-[500px] aspect-square flex items-center justify-center rounded-full overflow-hidden"
          animate={{ scale: beatScale }}
          transition={{
            duration: DURATION,
            ease: "linear", 
            times: beatTimes,
            repeat: Infinity,
          }}
        >
          {/* Div que recorta los bordes blancos de la imagen original */}
          <div className="absolute inset-[2%] rounded-full z-20 pointer-events-none" />
          
          <img
            src={logo}
            alt="Kwan-Do Logo"
            className="w-full h-full object-contain scale-110" // Escala 110% para que el recorte sea efectivo
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
