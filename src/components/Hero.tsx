import { motion } from "framer-motion";
import { GiHighKick } from "react-icons/gi";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      <div className="absolute inset-0 bg-neutral-950"></div>
      {/* Brute Visual Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-logo-blue/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-logo-red/10 rounded-full blur-[120px]"></div>
      
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <div className="mb-12 inline-block skew-kinetic">
          <div className="w-32 h-32 kinetic-border bg-black flex items-center justify-center">
            <GiHighKick className="text-6xl text-primary font-bold skew-kinetic-reverse" />
          </div>
        </div>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] uppercase italic">
          Taekwondo <br />
          <span className="bg-primary text-black px-4 inline-block skew-kinetic">KWAN-DO</span>
        </h1>
        <p className="text-xl md:text-3xl text-on-surface/90 font-bold mb-12 uppercase tracking-tight italic">
          Disciplina <span className="text-logo-red">/</span> Respeto <span className="text-logo-blue">/</span> Superación
        </p>
        <a href="#contact" className="inline-block bg-white text-black px-16 py-6 text-xl font-black tracking-tighter uppercase kinetic-border hover:bg-primary transition-all active:scale-95">
          Comenzar ahora
        </a>
      </motion.div>
      
      {/* Kinetic Background Text */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 pointer-events-none select-none">
        <span className="text-[20vh] font-black uppercase italic tracking-tighter leading-none">
          THE KINETIC DISCIPLINE THE KINETIC DISCIPLINE THE KINETIC DISCIPLINE
        </span>
      </div>
    </section>
  );
}
