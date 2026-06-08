import { useEffect, useState } from "preact/hooks";
import { IoChatbubbleEllipsesOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/KwanDo-Logo.png';

export function Navbar() {
  const [activeItem, setActiveItem] = useState('About');
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú móvil

  const navItems = ["About", "Benefits", "Classes", "Schedule", "Gallery"];

  // Lógica de Scroll Spy
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

  // Bloquear scroll cuando el menú móvil esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/90 backdrop-blur-xl border-b border-white/5">
      <nav className="flex justify-between items-center px-6 md:px-8 py-4 md:py-5 max-w-7xl mx-auto uppercase tracking-tighter">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img src={logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:rotate-12 transition-transform duration-300" />
          <div className="text-2xl md:text-3xl font-black text-yellow-400 italic">
            KWAN-DO
          </div>
        </div>

        {/* LINKS (Desktop) */}
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

        {/* CTA & ACCIONES (Desktop & Mobile Trigger) */}
        <div className="flex items-center gap-4 md:gap-6">
          <IoChatbubbleEllipsesOutline className="text-2xl text-yellow-400 cursor-pointer hover:scale-125 transition-transform duration-300" />
          
          <button className="hidden sm:block bg-yellow-400 text-black px-6 md:px-8 py-2.5 font-black uppercase tracking-widest text-xs hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[4px_4px_0px_white]">
            Join Now
          </button>

          {/* Botón de Menú Móvil */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl focus:outline-none z-50 p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <IoCloseOutline className="text-yellow-400" /> : <IoMenuOutline />}
          </button>
        </div>
      </nav>

      {/* MENÚ MÓVIL (Full Screen Overlay con AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 h-screen w-screen bg-neutral-950 flex flex-col justify-center items-center md:hidden z-40"
          >
            <div className="flex flex-col items-center space-y-8 font-black uppercase tracking-wider text-2xl italic">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActiveItem(item);
                    setIsOpen(false); // Cierra el menú al hacer click
                  }}
                  className={`
                    relative transition-colors duration-300
                    ${activeItem === item ? 'text-yellow-400 scale-105' : 'text-neutral-400'}
                  `}
                >
                  {item}
                </motion.a>
              ))}

              {/* CTA dentro del menú móvil para pantallas muy chicas */}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="sm:hidden mt-8 bg-yellow-400 text-black px-10 py-4 font-black uppercase tracking-widest text-sm shadow-[4px_4px_0px_white]"
              >
                Join Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}