import { useState, useEffect, useRef } from "preact/hooks";
import { motion, useScroll, useTransform } from "framer-motion";

export function TaekwondoKickScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const [preloadProgress, setPreloadProgress] = useState(0);

  const totalFrames = 30;

  // Preload images to prevent blank screens or flickering on scroll
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/frames_sinfondo/frame-${frameNum}.png`;

      const handleImageLoad = () => {
        loaded++;
        setPreloadProgress(Math.round((loaded / totalFrames) * 100));
        if (loaded === totalFrames) {
          setImagesPreloaded(true);
        }
      };

      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Count as loaded even on error to prevent freezing
      images.push(img);
    }
  }, []);

  // Track scroll position in the section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Subscribe to scroll progress updates to change frames
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Orden invertido: scroll=0 → frame 30 (inicio de la patada), scroll=1 → frame 1 (posición final)
      const frame = Math.max(
        1,
        Math.min(totalFrames, totalFrames - Math.round(latest * (totalFrames - 1)))
      );
      setCurrentFrame(frame);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Framer Motion transforms to animate side text elements on scroll
  // 30 frames divididos en 4 fases de ~7-8 frames cada una.
  // Cada frase desaparece ANTES de que la siguiente aparezca → sin superposición.
  //
  // Fase 1: frames  1–7   → scroll 0.00 – 0.23
  // Fase 2: frames  8–15  → scroll 0.23 – 0.50
  // Fase 3: frames 16–22  → scroll 0.50 – 0.73
  // Fase 4: frames 23–30  → scroll 0.73 – 1.00

  // Texto 1: aparece desde el inicio, desaparece en 0.18 → fuera antes del 0.23
  const opacityText1 = useTransform(scrollYProgress, [0.0, 0.06, 0.15, 0.21], [0, 1, 1, 0]);
  const yText1 = useTransform(scrollYProgress, [0.0, 0.06, 0.15, 0.21], [20, 0, 0, -20]);

  // Texto 2: aparece en 0.25 (bien después del 0.21), desaparece en 0.46 → fuera antes del 0.50
  const opacityText2 = useTransform(scrollYProgress, [0.25, 0.31, 0.43, 0.49], [0, 1, 1, 0]);
  const yText2 = useTransform(scrollYProgress, [0.25, 0.31, 0.43, 0.49], [20, 0, 0, -20]);

  // Texto 3: aparece en 0.52 (bien después del 0.49), desaparece en 0.69 → fuera antes del 0.73
  const opacityText3 = useTransform(scrollYProgress, [0.52, 0.58, 0.67, 0.73], [0, 1, 1, 0]);
  const yText3 = useTransform(scrollYProgress, [0.52, 0.58, 0.67, 0.73], [20, 0, 0, -20]);

  // Texto 4: aparece en 0.76 (bien después del 0.73), permanece hasta el final
  const opacityText4 = useTransform(scrollYProgress, [0.76, 0.82, 1.0], [0, 1, 1]);
  const yText4 = useTransform(scrollYProgress, [0.76, 0.82, 1.0], [20, 0, 0]);

  // Transform for bottom scroll bar width
  const scrollBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-black select-none border-t border-b border-white/5"
      id="kick-animation"
    >
      {/* Sticky container that pins the scene during the scroll duration */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-neutral-950">
        
        {/* Glow Effects for premium background aesthetics */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] bg-[#FCD116]/5 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Loader Fallback Screen while images preload */}
        {!imagesPreloaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 z-50">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 border-[3px] border-[#FCD116]/10 border-t-[#FCD116] rounded-full animate-spin" />
              <span className="text-[#FCD116] text-xl font-black tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {preloadProgress}%
              </span>
            </div>
            <p className="mt-6 text-zinc-400 text-[10px] tracking-[0.25em] uppercase font-semibold">
              PRECARGANDO SECUENCIA YOP CHAGI
            </p>
          </div>
        )}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-[85vh] grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          
          {/* Column 1: Narrative (Left on Desktop, Bottom on Mobile) */}
          <div className="relative h-[220px] md:h-[400px] flex items-center order-2 md:order-1">
            
            {/* Step 1: Preparación */}
            <motion.div
              style={{ opacity: opacityText1, y: yText1 }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <span className="text-[#FCD116] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                Fase 01 // Concentración & Carga
              </span>
              <h3
                className="text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-[0.95] mb-4 tracking-wide font-black"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                La fase de <br />
                <span className="text-[#FCD116]">Preparación</span>
              </h3>
              <p className="text-zinc-400 text-sm max-w-md leading-relaxed font-sans">
                El taekwondista inicia la flexión de rodilla elevando la pierna de ataque. La mirada firme en el objetivo establece la línea de fuerza y el equilibrio inicial.
              </p>
            </motion.div>

            {/* Step 2: Pivoteo de Cadera */}
            <motion.div
              style={{ opacity: opacityText2, y: yText2 }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <span className="text-[#FCD116] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                Fase 02 // Alineación & Fuerza
              </span>
              <h3
                className="text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-[0.95] mb-4 tracking-wide font-black"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Pivoteo de <br />
                <span className="text-[#FCD116]">Base & Cadera</span>
              </h3>
              <p className="text-zinc-400 text-sm max-w-md leading-relaxed font-sans">
                El pie de apoyo rota 180 grados. Esta rotación transfiere la energía desde el suelo hasta el torso superior, alineando mecánicamente la cadera para la máxima potencia.
              </p>
            </motion.div>

            {/* Step 3: Extensión / Impacto */}
            <motion.div
              style={{ opacity: opacityText3, y: yText3 }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <span className="text-[#FCD116] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                Fase 03 // Punto de Impacto
              </span>
              <h3
                className="text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-[0.95] mb-4 tracking-wide font-black"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Yop Chagi <br />
                <span className="text-[#FCD116]">Línea Perfecta</span>
              </h3>
              <p className="text-zinc-400 text-sm max-w-md leading-relaxed font-sans">
                Extensión total. El impacto se proyecta a través del "balkal" (borde externo del pie). Hombro, cadera y talón forman una línea recta perfecta de transferencia de energía cinética.
              </p>
            </motion.div>

            {/* Step 4: Extensión Total / Patada Final */}
            <motion.div
              style={{ opacity: opacityText4, y: yText4 }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <span className="text-[#FCD116] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                Fase 04 // Extensión Total
              </span>
              <h3
                className="text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-[0.95] mb-4 tracking-wide font-black"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Patada <br />
                <span className="text-[#FCD116]">Completada</span>
              </h3>
              <p className="text-zinc-400 text-sm max-w-md leading-relaxed font-sans">
                La pierna alcanza su máxima extensión. El impacto se libera con toda la cadena cinética: cadera, torso y pierna en una sola línea de fuerza perfectamente proyectada hacia el objetivo.
              </p>
            </motion.div>

          </div>

          {/* Column 2: Image Sequence Viewer (Right on Desktop, Top on Mobile) */}
          <div className="relative w-full h-[400px] sm:h-[550px] lg:h-[720px] flex items-center justify-center order-1 md:order-2">
            
            {/* Tech Graphics for background visual interest */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] sm:w-[480px] lg:w-[620px] aspect-square rounded-full border border-dashed border-white/10 animate-[spin_100s_linear_infinite]" />
              <div className="absolute w-[290px] sm:w-[410px] lg:w-[540px] aspect-square rounded-full border border-white/5" />
              <div className="absolute w-[220px] sm:w-[320px] lg:w-[420px] aspect-square rounded-full border border-[#FCD116]/5" />
              <div className="absolute h-[80%] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
              <div className="absolute w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>

            {/* Stacked Image Container to avoid DOM flashes/flicker */}
            <div className="relative w-full h-full max-w-[400px] sm:max-w-[540px] lg:max-w-[680px] flex items-center justify-center">
              {Array.from({ length: totalFrames }, (_, idx) => {
                const frameNum = String(idx + 1);
                const src = `/frames_sinfondo/frame-${frameNum}.png`;
                const isActive = currentFrame === idx + 1;

                return (
                  <img
                    key={idx}
                    src={src}
                    alt={`Frame ${frameNum}`}
                    loading="eager"
                    className={`absolute max-h-full max-w-full object-contain filter drop-shadow-[0_0_25px_rgba(252,209,22,0.18)] transition-all duration-75 ${
                      isActive
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-95 z-0 pointer-events-none"
                    }`}
                  />
                );
              })}
            </div>

            {/* HUD Status Elements */}
            <div className="absolute bottom-0 right-2 hidden sm:block font-mono text-[9px] text-zinc-500 uppercase tracking-widest z-20">
              <span className="text-zinc-600">CUADRO:</span> {String(currentFrame).padStart(2, "0")}/{totalFrames}
            </div>

            <div className="absolute bottom-0 left-2 hidden sm:block font-mono text-[9px] text-zinc-500 uppercase tracking-widest z-20">
              <span className="text-zinc-600">SCROLL:</span> {(scrollYProgress.get() * 100).toFixed(0)}%
            </div>

          </div>

        </div>

        {/* Scroll Progress Bar indicator */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-30">
          <motion.div
            className="h-full bg-[#FCD116] shadow-[0_0_8px_#FCD116]"
            style={{ width: scrollBarWidth }}
          />
        </div>

      </div>
    </section>
  );
}