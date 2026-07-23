import { useState, useEffect, useRef } from "preact/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function TaekwondoKickScroll() {
  const { t } = useLanguage();
  const PHASES = t.kickScroll.phases;

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const [preloadProgress, setPreloadProgress] = useState(0);

  const totalFrames = 30;

  const PHASE_RANGES = [
    [0.0, 0.08, 0.18, 0.23],
    [0.26, 0.32, 0.43, 0.48],
    [0.51, 0.57, 0.68, 0.73],
    [0.76, 0.82, 1.0],
  ] as const;

  // Preload images to prevent blank screens or flickering on scroll
  useEffect(() => {
    let loaded = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i);
      img.src = `/frames_sinfondo/frame-${frameNum}.webp`;

      const handleImageLoad = () => {
        loaded++;
        setPreloadProgress(Math.round((loaded / totalFrames) * 100));
        if (loaded === totalFrames) {
          setImagesPreloaded(true);
        }
      };

      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Orden invertido: scroll 0 -> frame 30 (primer movimiento), scroll 1 -> frame 1 (extensión final)
      const frame = Math.max(
        1,
        Math.min(totalFrames, totalFrames - Math.round(latest * (totalFrames - 1)))
      );
      setCurrentFrame(frame);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const textStyles = PHASE_RANGES.map((range) => {
    const values = range.length === 4 ? [0, 1, 1, 0] : [0, 1, 1];
    return {
      opacity: useTransform(scrollYProgress, [...range], values),
      y: useTransform(
        scrollYProgress,
        [...range],
        range.length === 4 ? [16, 0, 0, -16] : [16, 0, 0]
      ),
    };
  });

  const activePhase = useTransform(scrollYProgress, (v) => {
    if (v < 0.245) return 0;
    if (v < 0.495) return 1;
    if (v < 0.745) return 2;
    return 3;
  });
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  useEffect(() => {
    const unsubscribe = activePhase.on("change", (v) => setActivePhaseIndex(v));
    return () => unsubscribe();
  }, [activePhase]);

  const scrollBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-[#0B0B0C] select-none"
      id="kick-animation"
    >
      {/* Sticky container that pins the scene during the scroll duration */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0B0B0C]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/entretiempo.webp')" }}
        />
        <div className="absolute inset-0 bg-black/38" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/78 via-[#0B0B0C]/22 to-[#0B0B0C]/55" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C]/72 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/72 to-transparent" />

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/18 via-transparent to-black/28 z-0" />

        {/* Loader */}
        {!imagesPreloaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B0B0C] z-50 gap-5">
            <div className="w-40 h-[2px] bg-white/10 overflow-hidden">
              <div
                className="h-full bg-[#C81E3A] transition-all duration-200 ease-out"
                style={{ width: `${preloadProgress}%` }}
              />
            </div>
            <p className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase font-medium">
              {t.kickScroll.loading} · {preloadProgress}%
            </p>
          </div>
        )}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-[85vh] grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">

          {/* Column 1: Narrative + phase ladder */}
          <div className="flex items-center gap-6 order-2 md:order-1 h-[260px] md:h-[400px]">

            {/* Vertical phase ladder */}
            <div className="hidden sm:flex flex-col items-center gap-0 h-full py-1 shrink-0">
              {PHASES.map((phase, i) => (
                <div key={phase.label} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-[7px] h-[7px] rounded-full transition-colors duration-300 ${
                      activePhaseIndex === i ? "bg-[#C81E3A]" : "bg-white/15"
                    }`}
                  />
                  {i < PHASES.length - 1 && (
                    <div className="w-px flex-1 bg-white/10 mt-2 mb-2" />
                  )}
                </div>
              ))}
            </div>

            <div className="relative flex-1 h-full flex items-center">
              {PHASES.map((phase, i) => (
                <motion.div
                  key={phase.label}
                  style={{ opacity: textStyles[i].opacity, y: textStyles[i].y }}
                  className="absolute inset-0 flex flex-col justify-center pointer-events-none"
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-[#C81E3A] text-[11px] font-semibold tracking-[0.25em] uppercase">
                      {phase.eyebrow}
                    </span>
                    <span className="text-zinc-600 text-[11px] tracking-[0.2em] uppercase">
                      {phase.label}
                    </span>
                  </div>
                  <h3 className="text-4xl sm:text-5xl lg:text-[3.4rem] text-[#F5F3EF] uppercase leading-[0.98] mb-4 tracking-tight font-bold">
                    {phase.title[0]} <br />
                    <span className="text-zinc-400 font-medium">{phase.title[1]}</span>
                  </h3>
                  <p className="text-zinc-500 text-[15px] max-w-md leading-relaxed">
                    {phase.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Image Sequence Viewer */}
          <div className="relative w-full h-[400px] sm:h-[550px] lg:h-[720px] flex items-center justify-center order-1 md:order-2">

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[300px] sm:w-[440px] lg:w-[560px] aspect-square rounded-full border border-white/[0.06]" />
              <div className="absolute h-[70%] w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
            </div>

            {/* Stacked Image Container */}
            <div className="relative w-full h-full max-w-[400px] sm:max-w-[540px] lg:max-w-[680px] flex items-center justify-center">
              {Array.from({ length: totalFrames }, (_, idx) => {
                const frameNum = String(idx + 1);
                const src = `/frames_sinfondo/frame-${frameNum}.webp`;
                const isActive = currentFrame === idx + 1;

                return (
                  <img
                    key={idx}
                    src={src}
                    alt={`Frame ${frameNum}`}
                    loading="eager"
                    className={`absolute max-h-full max-w-full object-contain filter drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-opacity duration-75 ${
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  />
                );
              })}
            </div>

            {/* Quiet caption */}
            <div className="absolute bottom-1 inset-x-0 hidden sm:flex items-center justify-center gap-2 text-[10px] text-zinc-600 tracking-[0.2em] uppercase z-20">
              <span>Yop Chagi</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>
                {String(currentFrame).padStart(2, "0")} / {totalFrames}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar indicator */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/[0.06] z-30">
          <motion.div className="h-full bg-[#C81E3A]" style={{ width: scrollBarWidth }} />
        </div>
      </div>
    </section>
  );
}
