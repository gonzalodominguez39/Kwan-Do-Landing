import { motion, AnimatePresence } from "framer-motion";
import { useState } from "preact/hooks";
import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/translations";

const LANGS: { code: Language; label: string; flag: string }[] = [
  { code: "es", label: "ES", flag: "fi fi-es" },
  { code: "en", label: "EN", flag: "fi fi-us" },
  { code: "pt", label: "PT", flag: "fi fi-br" },
];


export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div className="relative select-none z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:border-yellow-400/50 hover:bg-yellow-400/8 transition-all duration-200 text-xs font-black uppercase tracking-widest text-zinc-300 hover:text-yellow-400"
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={current.flag}></span>
        <span>{current.label}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[10px] opacity-60"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop to close on outside click */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />

            <motion.ul
              role="listbox"
              aria-label="Language options"
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              className="absolute right-0 mt-2 w-28 rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden z-50"
            >
              {LANGS.map((l) => (
                <li key={l.code}>
                  <button
                    role="option"
                    aria-selected={lang === l.code}
                    onClick={() => {
                      setLang(l.code);
                      setOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-2.5 px-3.5 py-2.5 text-xs font-black uppercase tracking-widest transition-all duration-150
                      ${lang === l.code
                        ? "bg-yellow-400/12 text-yellow-400"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <span className={l.flag}></span>
                    <span>{l.label}</span>
                    {lang === l.code && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    )}
                  </button>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
