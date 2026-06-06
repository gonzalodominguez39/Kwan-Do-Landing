import { useState, useEffect } from 'preact/hooks';
import { FaBrain, FaWhatsapp } from 'react-icons/fa';
import { IoShieldOutline, IoFitnessOutline, IoChatbubbleEllipsesOutline, IoLocationOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import logo from '../assets/KwanDo-Logo.png';

export function Navbar() {
  const [activeItem, setActiveItem] = useState('About');

  const navItems = ["About", "Benefits", "Classes", "Schedule", "Gallery"];

  // Simple scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveItem(navItems[index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-white/5">
      <nav className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto font-['Space_Grotesk'] uppercase tracking-tighter">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img src={logo} alt="Logo" className="w-20 h-20 object-contain group-hover:rotate-12 transition-transform duration-300" />
          <div className="text-3xl font-black italic text-yellow-400">
            KWAN-DO
          </div>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center space-x-12 font-bold">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActiveItem(item)}
              className={`
                relative text-base tracking-widest transition-all duration-300 flex items-center group
                ${activeItem === item ? 'text-yellow-400' : 'text-neutral-400 hover:text-white'}
              `}
            >
              <span className="relative z-10">{item}</span>

              {/* Efecto Latigazo (Whip) */}
              <span className={`
                absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-left
                ${activeItem === item ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}
              `} />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <IoChatbubbleEllipsesOutline className="text-2xl text-yellow-400 cursor-pointer hover:scale-125 transition-transform duration-300" />
          <button className="bg-yellow-400 text-black px-8 py-2.5 font-black uppercase tracking-widest text-xs hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[4px_4px_0px_white]">
            Join Now
          </button>
        </div>
      </nav>
    </header>
  );
}

export function About() {
  return (
    <section className="py-32 bg-neutral-950" id="about">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
          <div className="mb-6 inline-block bg-logo-blue text-black px-4 py-1 font-bold text-sm tracking-widest uppercase">ITF PHILOSOPHY</div>
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none uppercase italic">LA FILOSOFÍA <br/><span className="text-primary">KWAN-DO</span></h2>
          <div className="space-y-6 text-on-surface/80 leading-tight text-xl font-medium">
            <p className="border-l-4 border-logo-red pl-6">En Kwan-Do, no solo enseñamos una técnica de combate; forjamos el carácter. Nuestra base en el Taekwondo ITF se centra en los cinco pilares.</p>
            <p className="border-l-4 border-logo-blue pl-6">Cortesía, Integridad, Perseverancia, Autocontrol y Espíritu Indomable. Cada movimiento es una expresión de disciplina y crecimiento.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-6 skew-kinetic">
          <div className="bg-neutral-900 border-2 border-white p-10 flex flex-col justify-end aspect-square hover:bg-primary hover:text-black transition-all group">
            <span className="text-5xl font-black mb-4 group-hover:text-black">01</span>
            <h4 className="text-2xl font-black uppercase italic">Disciplina</h4>
          </div>
          <div className="bg-neutral-800 border-2 border-white p-10 flex flex-col justify-end aspect-square translate-y-12 hover:bg-logo-blue hover:text-black transition-all group">
            <span className="text-5xl font-black mb-4 group-hover:text-black">02</span>
            <h4 className="text-2xl font-black uppercase italic">Respeto</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="py-32 bg-neutral-900 border-y-8 border-primary/20" id="benefits">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <p className="text-primary font-black tracking-widest uppercase text-sm mb-4">POTENCIAL ILIMITADO</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic">Beneficios del Entrenamiento</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.02 }} className="kinetic-border bg-black p-12 group transition-transform">
            <IoShieldOutline className="text-primary text-5xl mb-8" />
            <h3 className="text-3xl font-black mb-6 uppercase">Defensa Personal</h3>
            <p className="text-on-surface/60 text-lg">Técnicas efectivas y realistas para situaciones críticas, aumentando tu seguridad.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="kinetic-border-blue bg-black p-12 group transition-transform">
            <FaBrain className="text-logo-blue text-5xl mb-8" />
            <h3 className="text-3xl font-black mb-6 uppercase">Confianza</h3>
            <p className="text-on-surface/60 text-lg">Supera tus límites y desarrolla una mentalidad de ganador inquebrantable.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="kinetic-border-red bg-black p-12 group transition-transform">
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
    <section className="py-32 bg-neutral-950" id="classes">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-24 uppercase italic text-center lg:text-left">
          PROGRAMAS <br/><span className="text-primary">KWAN-DO</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
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
    <section className="py-32 bg-black border-y-2 border-white/10" id="schedule">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-black uppercase italic mb-4">Horarios Semanales</h2>
          <div className="w-32 h-2 bg-primary mx-auto skew-kinetic"></div>
        </div>
        <div className="overflow-x-auto border-4 border-white p-2">
          <table className="w-full text-left border-collapse bg-neutral-900">
            <thead>
              <tr className="bg-primary text-black font-black uppercase tracking-tighter italic text-xl">
                <th className="py-6 px-6 border-b-4 border-black">Hora</th>
                <th className="py-6 px-6 border-b-4 border-black">Lunes / Mié</th>
                <th className="py-6 px-6 border-b-4 border-black">Mar / Jue</th>
                <th className="py-6 px-6 border-b-4 border-black">Viernes</th>
              </tr>
            </thead>
            <tbody className="font-bold uppercase italic tracking-tight">
              <tr className="border-b-2 border-white/10 hover:bg-neutral-800 transition-colors">
                <td className="py-6 px-6 font-black text-primary">17:00</td>
                <td className="py-6 px-6">Infantiles A</td>
                <td className="py-6 px-6">Infantiles B</td>
                <td className="py-6 px-6 text-logo-blue">Técnica Especial</td>
              </tr>
              <tr className="border-b-2 border-white/10 hover:bg-neutral-800 transition-colors">
                <td className="py-6 px-6 font-black text-primary">18:30</td>
                <td className="py-6 px-6">Juveniles</td>
                <td className="py-6 px-6">Juveniles</td>
                <td className="py-6 px-6 text-logo-red">Combate</td>
              </tr>
              <tr className="hover:bg-neutral-800 transition-colors">
                <td className="py-6 px-6 font-black text-primary">20:00</td>
                <td className="py-6 px-6">Adultos</td>
                <td className="py-6 px-6">Adultos</td>
                <td className="py-6 px-6 text-primary">Cinto Negro</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="py-32 bg-neutral-900" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-5xl font-black mb-12 uppercase italic">Ponte en Contacto</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input className="w-full bg-black border-2 border-white p-5 text-on-surface focus:border-primary focus:ring-0 outline-none font-bold uppercase italic transition-all" placeholder="Nombre" type="text"/>
              <input className="w-full bg-black border-2 border-white p-5 text-on-surface focus:border-primary focus:ring-0 outline-none font-bold uppercase italic transition-all" placeholder="Email" type="email"/>
            </div>
            <input className="w-full bg-black border-2 border-white p-5 text-on-surface focus:border-primary focus:ring-0 outline-none font-bold uppercase italic transition-all" placeholder="Asunto" type="text"/>
            <textarea className="w-full bg-black border-2 border-white p-5 text-on-surface focus:border-primary focus:ring-0 outline-none font-bold uppercase italic transition-all" placeholder="Mensaje" rows={5}></textarea>
            <button className="w-full bg-primary text-black py-6 font-black uppercase tracking-widest hover:bg-white hover:shadow-[8px_8px_0px_#00AEEF] transition-all active:scale-[0.98]">Enviar Mensaje</button>
          </form>
          <div className="mt-12 flex items-center gap-6">
            <a className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-black uppercase italic hover:scale-105 transition-transform skew-kinetic" href="#">
              <FaWhatsapp className="text-2xl skew-kinetic-reverse" />
              <span className="skew-kinetic-reverse">WhatsApp Support</span>
            </a>
          </div>
        </div>
        <div className="relative min-h-[500px] border-4 border-white kinetic-border-blue">
          <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center z-10">
            <div className="text-center">
              <IoLocationOutline className="text-primary text-7xl mb-6 mx-auto" />
              <p className="text-3xl font-black uppercase italic">Nuestra Sede</p>
              <p className="text-on-surface/60 font-bold mt-2">Av. Marcial 1234, CABA</p>
            </div>
          </div>
          <img className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale contrast-150 absolute inset-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhYzyVdwHxdLHL9U-zJ3eGxKfOsh6KFsnTaCNFDwevnlva8pAfROvsqEYSAEJvEyZSfXWMFpec996iRacJT_1wdy0lfdH7BYzbjcTrxwgnoLS_XEFnZC1XTLZ7zDzGZ3jAdmnoCrrlJszgF7X9HbuZCLYdnnU8lqxuw4zqb9mEZq10cOFPOTywlxm5-pdqMchJJGkAbW56yJRtYjGMkKQrfEs8UPPUPs1HOGDaZeCeGGwEL3StWPgb_qcSb88PQu2p2BtkVNRW9q6m"/>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-950 w-full border-t-0">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto gap-8">
        <div className="text-xl font-black text-yellow-400 font-['Space_Grotesk']">KWAN-DO</div>
        <p className="font-['Space_Grotesk'] text-xs tracking-widest uppercase text-neutral-500 text-center md:text-left">
            © 2024 KWAN-DO MARTIAL ARTS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex flex-wrap justify-center gap-8 font-['Space_Grotesk'] text-xs tracking-widest uppercase">
          <a className="text-neutral-500 hover:text-yellow-400 underline decoration-2 underline-offset-4 opacity-80 transition-all" href="#">Privacy Policy</a>
          <a className="text-neutral-500 hover:text-yellow-400 underline decoration-2 underline-offset-4 opacity-80 transition-all" href="#">Terms of Service</a>
          <a className="text-neutral-500 hover:text-yellow-400 underline decoration-2 underline-offset-4 opacity-80 transition-all" href="#">WhatsApp Support</a>
        </div>
      </div>
    </footer>
  );
}
