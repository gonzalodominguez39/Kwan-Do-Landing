import { useState, useEffect } from 'preact/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader } from './components/Loader';
import { Hero } from './components/Hero';
import { Navbar, About, Benefits, Classes, Schedule, Contact, Footer } from './components/Sections';
import './app.css';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Total approx 4s (3.5s animation + 0.5s fade out)
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="fixed inset-0 grainy-bg z-[100]"></div>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Benefits />
            <Classes />
            <Schedule />
            <Contact />
          </main>
          <Footer />

          {/* Floating WhatsApp Button */}
          <a
            href="#"
            className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-[4px_4px_0px_#FFF] hover:scale-110 active:scale-95 transition-all"
            aria-label="WhatsApp Support"
          >
             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-23.2-115-65.1-157zM223.9 413.2c-33.2 0-66-8.9-94.8-25.8l-6.8-4-70.5 18.5 18.8-68.7-4.4-7c-18.5-29.6-28.2-64-28.2-99.6 0-103.5 83.8-187.3 187.3-187.3 55.4 0 107.6 21.6 146.7 60.8 39.1 39.1 60.8 91.3 60.8 146.7 0 103.5-83.8 187.3-187.3 187.3zM322 291c-5.4-2.7-31.9-15.8-36.9-17.6-5-1.8-8.6-2.7-12.2 2.7-3.6 5.4-14 17.6-17.2 21.3-3.2 3.6-6.3 4.1-11.8 1.4-5.4-2.7-22.8-8.4-43.5-23.9-16.1-12.1-26.9-27.1-30.5-32.5-3.6-5.4-.4-8.3 2.3-11 2.7-2.7 5.4-6.3 8.1-9.5 2.7-3.2 3.6-5.4 5.4-9.1 1.8-3.6.9-6.8-.4-9.5-1.4-2.7-12.2-29.4-16.7-40.3-4.4-10.6-8.9-9.2-12.2-9.4-3.2-.2-6.8-.2-10.4-.2-3.6 0-9.5 1.4-14.5 6.8-5 5.4-19 18.5-19 45.3 0 26.7 19.5 52.6 22.2 56.2 2.7 3.6 38.3 58.5 92.8 81.9 13.1 5.6 23.3 8.9 31.3 11.4 13.2 4.1 25.1 3.6 34.6 2.2 10.6-1.6 31.9-13.1 36.4-25.8 4.5-12.6 4.5-23.4 3.2-25.8-1.3-2.7-5-4.1-10.4-6.8z"></path></svg>
          </a>
        </motion.div>
      )}
    </>
  );
}
