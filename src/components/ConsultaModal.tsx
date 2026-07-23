import { useEffect, useRef, useState } from "preact/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { createWhatsappUrl } from "../lib/whatsapp";
import { useLanguage } from "../i18n/LanguageContext";

interface ConsultaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialState = { name: "", message: "" };

export function ConsultaModal({ isOpen, onClose }: ConsultaModalProps) {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialState);
  const nameRef = useRef<HTMLInputElement>(null);

  // Focus primer campo al abrir
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => nameRef.current?.focus(), 80);
    } else {
      setForm(initialState);
    }
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Bloquear scroll del body
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const text = `${t.modal.whatsappIntro} ${form.name || t.modal.whatsappDefault}.\n${form.message || t.modal.whatsappDefaultMsg}`;
    window.open(createWhatsappUrl(text), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="consulta-backdrop"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="consulta-title"
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="consulta-modal"
          >
            {/* Franja dorada superior */}
            <div className="consulta-modal-bar" />

            {/* Header */}
            <div className="consulta-modal-header">
              <div>
                <p className="consulta-modal-eyebrow">{t.modal.eyebrow}</p>
                <h2 id="consulta-title" className="consulta-modal-title">
                  {t.modal.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label={t.modal.ariaClose}
                className="consulta-close-btn"
              >
                <IoCloseOutline />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="consulta-modal-body">
              <div className="consulta-field-group">
                <label htmlFor="consulta-name" className="consulta-label">
                  {t.modal.nameLabel}
                </label>
                <input
                  id="consulta-name"
                  ref={nameRef}
                  type="text"
                  placeholder={t.modal.namePlaceholder}
                  value={form.name}
                  onInput={(e) => {
                    const t2 = e.currentTarget as HTMLInputElement;
                    setForm((f) => ({ ...f, name: t2.value }));
                  }}
                  className="consulta-input"
                />
              </div>

              <div className="consulta-field-group">
                <label htmlFor="consulta-msg" className="consulta-label">
                  {t.modal.messageLabel}
                </label>
                <textarea
                  id="consulta-msg"
                  rows={4}
                  placeholder={t.modal.messagePlaceholder}
                  value={form.message}
                  onInput={(e) => {
                    const t2 = e.currentTarget as HTMLTextAreaElement;
                    setForm((f) => ({ ...f, message: t2.value }));
                  }}
                  className="consulta-input consulta-textarea"
                />
              </div>

              <button type="submit" className="consulta-submit-btn">
                <FaWhatsapp className="consulta-submit-icon" />
                {t.modal.submitBtn}
              </button>

              <p className="consulta-hint">
                {t.modal.hint}
              </p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
