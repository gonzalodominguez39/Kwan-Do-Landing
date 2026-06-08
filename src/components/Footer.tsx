export function Footer() {
  return (
    <footer className="bg-neutral-950 w-full border-t-0">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 md:py-16 w-full max-w-screen-2xl mx-auto gap-8">
        <div className="text-xl font-black text-yellow-400">KWAN-DO</div>
        <p className="text-xs tracking-widest uppercase text-neutral-500 text-center md:text-left">
            © 2024 KWAN-DO MARTIAL ARTS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-xs tracking-widest uppercase">
          <a className="text-neutral-500 hover:text-yellow-400 underline decoration-2 underline-offset-4 opacity-80 transition-all" href="#">Privacy Policy</a>
          <a className="text-neutral-500 hover:text-yellow-400 underline decoration-2 underline-offset-4 opacity-80 transition-all" href="#">Terms of Service</a>
          <a className="text-neutral-500 hover:text-yellow-400 underline decoration-2 underline-offset-4 opacity-80 transition-all" href="#">WhatsApp Support</a>
        </div>
      </div>
    </footer>
  );
}
