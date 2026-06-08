
import { FaBrain } from 'react-icons/fa';
import { IoShieldOutline, IoFitnessOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';





export function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-neutral-900 border-y-8 border-primary/20" id="benefits">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-primary font-black tracking-widest uppercase text-sm mb-4">POTENCIAL ILIMITADO</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic">Beneficios del Entrenamiento</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.02 }} className="kinetic-border bg-black p-8 sm:p-10 group transition-transform">
            <IoShieldOutline className="text-primary text-5xl mb-8" />
            <h3 className="text-3xl font-black mb-6 uppercase">Defensa Personal</h3>
            <p className="text-on-surface/60 text-lg">Técnicas efectivas y realistas para situaciones críticas, aumentando tu seguridad.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="kinetic-border-blue bg-black p-8 sm:p-10 group transition-transform">
            <FaBrain className="text-logo-blue text-5xl mb-8" />
            <h3 className="text-3xl font-black mb-6 uppercase">Confianza</h3>
            <p className="text-on-surface/60 text-lg">Supera tus límites y desarrolla una mentalidad de ganador inquebrantable.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="kinetic-border-red bg-black p-8 sm:p-10 group transition-transform">
            <IoFitnessOutline className="text-logo-red text-5xl mb-8" />
            <h3 className="text-3xl font-black mb-6 uppercase">Estado Físico</h3>
            <p className="text-on-surface/60 text-lg">Mejora fuerza, flexibilidad y resistencia cardiovascular de alto nivel.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Classes() {
  return (
    <section className="py-24 md:py-32 bg-neutral-950" id="classes">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-20 sm:mb-24 uppercase italic text-center lg:text-left">
          PROGRAMAS <br/><span className="text-primary">KWAN-DO</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Niños */}
          <div className="group">
            <div className="kinetic-border-blue mb-8 overflow-hidden bg-black aspect-[4/5]">
              <img alt="Kids martial arts" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNEPLv3qX-ld0kFzj9XQGw7BzksbESIZmr-Qq47oRDYFCivnlT5QcbRzhjvxgdc5YSKNcjMLU-uqdXl4SWLFB68jx7TVb46KdELJyH7agcRPDBj2-3PDjXclwn7wBcvEYJQNL9sjwCWuCBwgY0Ol7TpZP9IuWzypr4kp2oVP9QoUP375eW_oAj1I8qtpOWhnMM68-hLNI27QrfW58Wl9tZ6Qg5jx7Fh21qtLTZAhAM1YY9EQ4qj2eEM4GHBJ8129vmcl_PHZw7X3zD"/>
            </div>
            <h3 className="text-4xl font-black mb-4 uppercase italic">Niños</h3>
            <div className="h-1 bg-neutral-800 w-full mb-6"><div className="h-full bg-logo-blue w-1/3"></div></div>
            <p className="text-on-surface/60 font-medium text-lg">Psicomotricidad y valores fundamentales desde temprana edad.</p>
          </div>
          {/* Jóvenes */}
          <div className="group md:-mt-12">
            <div className="kinetic-border-red mb-8 overflow-hidden bg-black aspect-[4/5]">
              <img alt="Teen training" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNOgnfjUn_QutdiebWdCAbGI2Z37Mk4T8S89fgFWJLpQnH3eSZZnAoa1xhnBPxPXrZ1y1pM3oFeVHJjxqHjSTllEPc9NYQ3Sm9ncKQA80Rhlp3PvH_Ot05UnCqPX3qzknUJGrOS4FQ_U7rCA7PE7rSAzodko-cU_XVb7JrL2h7m9BSWJ5rYJaJ68F-n3oErPX8lT1_Fv0Dt8mfjzyfxUY4_lOzUEqFN1OkTVt3A_j2TVeJuLlL8bP8RUT_hAGtkv-VdZQ5d7PQ1gVV"/>
            </div>
            <h3 className="text-4xl font-black mb-4 uppercase italic">Jóvenes</h3>
            <div className="h-1 bg-neutral-800 w-full mb-6"><div className="h-full bg-logo-red w-2/3"></div></div>
            <p className="text-on-surface/60 font-medium text-lg">Desarrollo físico explosivo y enfoque mental competitivo.</p>
          </div>
          {/* Adultos */}
          <div className="group">
            <div className="kinetic-border mb-8 overflow-hidden bg-black aspect-[4/5]">
              <img alt="Adult sparring" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8HCxJLHo1mO83-5I5DRZ94ajbESIzlm4PwFKF5Y2pRaHAow6N0idD0RlnbD8Xk5e0Bc93Kf10YBmx3_RERWtFYi4dSPLLNpnkAM2r9RKmMKVJoTsa2e2SNAiaOCZ9FjRoarRY8watWr1ErALxF7ud6j5OKTy66-4fnd5AMiNp2D3KdSlpWKmhy0docUEW3UoNLTtGRLpjSs2_ZJh6rDQBSje292kzj38nzpEz_EWgYhcxbP9sssYqCPxhvg_xSgKL6EZoJ8ac4bjR"/>
            </div>
            <h3 className="text-4xl font-black mb-4 uppercase italic">Adultos</h3>
            <div className="h-1 bg-neutral-800 w-full mb-6"><div className="h-full bg-primary w-full"></div></div>
            <p className="text-on-surface/60 font-medium text-lg">Manejo de estrés y defensa personal de alto nivel.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Schedule() {
  return (
    <section className="py-24 md:py-32 bg-black border-y-2 border-white/10" id="schedule">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic mb-4">Horarios Semanales</h2>
          <div className="w-32 h-2 bg-primary mx-auto skew-kinetic"></div>
        </div>
        <div className="overflow-x-auto border-4 border-white p-2">
          <table className="w-full text-left border-collapse bg-neutral-900">
            <thead>
              <tr className="bg-primary text-black font-black uppercase tracking-tighter italic text-xl">
                <th className="py-4 sm:py-6 px-4 sm:px-6 border-b-4 border-black">Hora</th>
                <th className="py-4 sm:py-6 px-4 sm:px-6 border-b-4 border-black">Lunes / Mié</th>
                <th className="py-4 sm:py-6 px-4 sm:px-6 border-b-4 border-black">Mar / Jue</th>
                <th className="py-4 sm:py-6 px-4 sm:px-6 border-b-4 border-black">Viernes</th>
              </tr>
            </thead>
            <tbody className="font-bold uppercase italic tracking-tight">
              <tr className="border-b-2 border-white/10 hover:bg-neutral-800 transition-colors">
                <td className="py-4 sm:py-6 px-4 sm:px-6 font-black text-primary">17:00</td>
                <td className="py-4 sm:py-6 px-4 sm:px-6">Infantiles A</td>
                <td className="py-4 sm:py-6 px-4 sm:px-6">Infantiles B</td>
                <td className="py-4 sm:py-6 px-4 sm:px-6 text-logo-blue">Técnica Especial</td>
              </tr>
              <tr className="border-b-2 border-white/10 hover:bg-neutral-800 transition-colors">
                <td className="py-4 sm:py-6 px-4 sm:px-6 font-black text-primary">18:30</td>
                <td className="py-4 sm:py-6 px-4 sm:px-6">Juveniles</td>
                <td className="py-4 sm:py-6 px-4 sm:px-6">Juveniles</td>
                <td className="py-4 sm:py-6 px-4 sm:px-6 text-logo-red">Combate</td>
              </tr>
              <tr className="hover:bg-neutral-800 transition-colors">
                <td className="py-4 sm:py-6 px-4 sm:px-6 font-black text-primary">20:00</td>
                <td className="py-4 sm:py-6 px-4 sm:px-6">Adultos</td>
                <td className="py-4 sm:py-6 px-4 sm:px-6">Adultos</td>
                <td className="py-4 sm:py-6 px-4 sm:px-6 text-primary">Cinto Negro</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
