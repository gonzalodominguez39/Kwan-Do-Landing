import { useState } from "preact/hooks";
import { IoLocationOutline } from "react-icons/io5";
import { createWhatsappUrl } from "../lib/whatsapp";

const initialFormState = {
  name: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (event: Event) => {
    event.preventDefault();

    const message = `Hola, quisiera consultar sobre clases y horarios.\nNombre: ${formData.name || "Sin nombre"}\nMensaje: ${formData.message || "Sin mensaje"}`;
    const whatsappUrl = createWhatsappUrl(message);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 md:py-32 bg-neutral-900" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="text-4xl sm:text-5xl font-black mb-10 sm:mb-12 uppercase italic">Ponte en Contacto</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              className="w-full bg-black border-2 border-white/60 p-4 sm:p-5 text-on-surface focus:border-primary focus:shadow-[0_0_0_3px_rgba(252,209,22,0.2)] focus:ring-0 outline-none font-bold uppercase italic transition-all placeholder:text-zinc-600"
              placeholder="Nombre"
              type="text"
              value={formData.name}
              onInput={(event) => {
                const target = event.currentTarget as HTMLInputElement;
                setFormData((current) => ({ ...current, name: target.value }));
              }}
            />
            <textarea
              className="w-full bg-black border-2 border-white/60 p-4 sm:p-5 text-on-surface focus:border-primary focus:shadow-[0_0_0_3px_rgba(252,209,22,0.2)] focus:ring-0 outline-none font-bold uppercase italic transition-all placeholder:text-zinc-600"
              placeholder="Tu consulta"
              rows={5}
              value={formData.message}
              onInput={(event) => {
                const target = event.currentTarget as HTMLTextAreaElement;
                setFormData((current) => ({ ...current, message: target.value }));
              }}
            ></textarea>
            <button type="submit" className="w-full bg-primary text-black py-6 font-black uppercase tracking-widest hover:bg-white hover:shadow-[8px_8px_0px_#00AEEF] transition-all active:scale-[0.98]">
              Contactar
            </button>
          </form>
        </div>
        <div className="relative min-h-[280px] sm:min-h-[440px] border-4 border-white kinetic-border-blue">
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
