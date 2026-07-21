import { useRef } from "react";
import { FaFistRaised, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { defaultWhatsappUrl, whatsappDisplayNumber } from "../lib/whatsapp";

const logo = "/assets/KwanDo-Logo.webp";

const schoolLogos = [
  { name: "AC Taekwondo",       src: "/assets/AC TAEKWONDO_20260224_005347_0000.png" },
  { name: "AL Taekwondo",       src: "/assets/AL TAEKWONDO_20260224_005150_0000.png" },
  { name: "GS",                 src: "/assets/GS_20260224_004514_0000.png" },
  { name: "HH",                 src: "/assets/HH_20260224_004355_0000.png" },
  { name: "Loto Team",          src: "/assets/LOTO TEAM_20260224_005315_0000.png" },
  { name: "MB",                 src: "/assets/MB BLANCO_20260224_005459_0000.png" },
  { name: "MT",                 src: "/assets/MT_20260224_004601_0000.png" },
  { name: "Team Llanos",        src: "/assets/TEAM LLANOS_20260224_004643_0000.png" },
  { name: "Team Salvatierra",   src: "/assets/TEAM SALVATIERRA_20260224_004803_0000.png" },
  { name: "Team Yocca",         src: "/assets/TEAM YOCCA_20260224_004213_0000.png" },
  { name: "Tim Didot",          src: "/assets/TIM DIDOT_20260224_004733_0000.png" },
];

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Nosotros", href: "#about" },
  { label: "Principios", href: "#pillars" },
  { label: "Galería", href: "#gallery" },
  { label: "Horarios", href: "#schedule" },
  { label: "Contacto", href: "#contact" },
];

const usefulLinks = [
  { label: "Preguntas frecuentes", href: "#contact" },
  { label: "Técnica Yop Chagi", href: "#kick-animation" },
  { label: "Beneficios del entrenamiento", href: "#training-benefits" },
  { label: "Consultar horarios", href: "#schedule" },
  { label: "Únete ahora", href: "#contact" },
];

function FooterTitle({ children }: { children: string }) {
  return (
    <div className="mb-8">
      <h3 className="text-primary text-xl font-black uppercase tracking-tight">{children}</h3>
      <span className="mt-4 block h-1 w-10 bg-primary" />
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a className="group flex items-center gap-4 text-sm sm:text-base font-black uppercase text-zinc-200 transition-colors hover:text-primary" href={href}>
      <span className="text-primary transition-transform group-hover:translate-x-1">›</span>
      {label}
    </a>
  );
}

/** Infinite auto-scrolling marquee of school logos */
function SchoolLogosMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  // duplicate list so the marquee loops seamlessly
  const doubled = [...schoolLogos, ...schoolLogos];

  return (
    <div
      className="school-marquee-wrapper"
      onMouseEnter={() => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused"; }}
      onMouseLeave={() => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; }}
    >
      <div ref={trackRef} className="school-marquee-track">
        {doubled.map((school, i) => (
          <div key={i} className="school-logo-card" title={school.name}>
            <img
              src={school.src}
              alt={school.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white">
      <div className="absolute inset-0 grainy-bg opacity-40" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_30%,rgba(252,209,22,0.08),transparent_28%),linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.035)_25%,rgba(255,255,255,0.035)_26%,transparent_26%)] opacity-60" />
      <div className="relative h-1 bg-primary" />

      <div className="relative mx-auto max-w-screen-2xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1.05fr] lg:gap-16">
          <div>
            <img className="h-40 w-40 object-contain sm:h-48 sm:w-48" src={logo} alt="KWAN-DO Taekwon-Do ITF Argentina" />
            <p className="mt-8 max-w-xs text-base font-medium leading-8 text-zinc-400">
              Formamos personas íntegras a través del Taekwon-Do ITF, promoviendo disciplina, respeto y superación.
            </p>
          </div>

          <nav aria-label="Navegación del footer">
            <FooterTitle>Navegación</FooterTitle>
            <div className="space-y-6">
              {navLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </nav>

          <nav aria-label="Enlaces útiles">
            <FooterTitle>Enlaces útiles</FooterTitle>
            <div className="space-y-6">
              {usefulLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </nav>

          <div>
            <FooterTitle>Síguenos</FooterTitle>
            <div className="space-y-5">
              <a className="flex items-center gap-5 border-b border-white/15 pb-5 transition-colors hover:text-primary" href="https://www.instagram.com/kwandoitf/" target="_blank" rel="noopener noreferrer">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-primary text-3xl text-white">
                  <FaInstagram />
                </span>
                <span>
                  <span className="block text-lg font-black uppercase">Instagram</span>
                  <span className="block text-sm font-medium text-zinc-400">@kwando.itf</span>
                </span>
              </a>

              <a className="flex items-center gap-5 transition-colors hover:text-primary" href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-primary text-3xl text-white">
                  <FaWhatsapp />
                </span>
                <span>
                  <span className="block text-lg font-black uppercase">WhatsApp</span>
                  <span className="block text-sm font-medium text-zinc-400">{whatsappDisplayNumber}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Escuelas que conforman KWAN-DO ── */}
        <div className="mt-20 border-t border-white/10 pt-14">
          <div className="mb-10 text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">Escuelas que conforman</p>
            <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-primary sm:text-3xl">KWAN-DO</h3>
          </div>
          <SchoolLogosMarquee />
        </div>

        <div className="mt-16 border-t border-white/15 pt-9">
          <div className="flex flex-wrap items-center gap-5 text-sm font-black uppercase tracking-wide text-zinc-100">
            <FaFistRaised className="text-4xl text-primary" />
            <span className="hidden h-12 w-px bg-white/25 sm:block" />
            <span>Disciplina</span>
            <span className="text-primary">•</span>
            <span>Respeto</span>
            <span className="text-primary">•</span>
            <span>Integridad</span>
            <span className="text-primary">•</span>
            <span>Perseverancia</span>
            <span className="text-primary">•</span>
            <span>Autocontrol</span>
            <span className="text-primary">•</span>
            <span>Espíritu indomable</span>
          </div>
        </div>
      </div>

      <div className="relative bg-white/[0.06] px-6 py-6 backdrop-blur-sm sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 text-center text-xs font-black uppercase tracking-[0.16em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© 2024 KWAN-DO Martial Arts. Todos los derechos reservados.</p>
          <p>
            <span className="text-primary">KWAN-DO</span>
            <span className="mx-4 text-zinc-600">|</span>
            Taekwon-Do ITF Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
