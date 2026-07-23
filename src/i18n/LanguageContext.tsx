import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";
import { type Language, translations } from "./translations";

// Use the Spanish type as the canonical type shape for all languages
export type T = typeof translations.es;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: T;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  t: translations.es,
});

export function LanguageProvider({ children }: { children: preact.ComponentChildren }) {
  const [lang, setLangState] = useState<Language>(() => {
    // Try to restore from localStorage
    const stored = localStorage.getItem("kwan-lang") as Language | null;
    if (stored && ["es", "en", "pt"].includes(stored)) return stored;
    // Browser preference
    const nav = navigator.language.slice(0, 2).toLowerCase();
    if (nav === "en") return "en";
    if (nav === "pt") return "pt";
    return "es";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("kwan-lang", newLang);
  };

  // Cast to T since all language objects share the same shape
  const t = translations[lang] as unknown as T;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
