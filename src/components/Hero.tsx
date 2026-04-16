import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const xParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 1], [0.3, 0]);

  const lineVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Countdown Timer Logic
  const EVENT_DATE = new Date("2026-10-15T09:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = EVENT_DATE - now;

      if (distance < 0) {
        return false;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
      return true;
    };

    calculateTimeLeft(); // Calculate immediately
    const interval = setInterval(() => {
      if (!calculateTimeLeft()) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex flex-col justify-center bg-black pt-32 pb-20 overflow-hidden border-b border-dark-gray">
      {/* Giant X background with slight scroll parallax */}
      <motion.div 
        style={{ y: xParallax, opacity: opacityFade, x: "-50%" }}
        className="absolute top-[30%] left-1/2 md:left-3/4 text-[80vw] md:text-[60vw] font-display text-dark-gray z-0 leading-none pointer-events-none select-none"
      >
        X
      </motion.div>

      <div className="container mx-auto px-5 sm:px-10 relative z-10 w-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
            }}
          >
            <div className="overflow-hidden pb-2 mb-[-6px] md:mb-[-12px]">
              <motion.h1 variants={lineVariants} className="hero-title text-white uppercase block">
                IDEAS WORTH
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.h1 variants={lineVariants} className="hero-title text-white uppercase block">
                SPREADING
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border-l-[3px] border-ted-red pl-6 sm:pl-8 mb-4 md:mb-10 w-full overflow-visible"
          >
            <p className="text-ted-red text-xl sm:text-2xl font-light mb-6 leading-tight uppercase tracking-tight">
              Breaking Barriers.<br />
              Redefining the Future.
            </p>
            <p className="text-white text-[10px] font-extrabold uppercase tracking-[0.2em] mb-3">
              T-Minus Until Event
            </p>
            <div className="flex items-center gap-2 sm:gap-4 overflow-visible">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-display tracking-tight text-white">{timeLeft.days.toString().padStart(2, '0')}</span>
                <span className="text-[9px] sm:text-[10px] text-ted-red font-bold uppercase tracking-widest mt-1">Days</span>
              </div>
              <span className="text-2xl sm:text-3xl font-display text-dark-gray pb-4 sm:pb-5">:</span>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-display tracking-tight text-white">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="text-[9px] sm:text-[10px] text-ted-red font-bold uppercase tracking-widest mt-1">Hrs</span>
              </div>
              <span className="text-2xl sm:text-3xl font-display text-dark-gray pb-4 sm:pb-5">:</span>
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-display tracking-tight text-white">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="text-[9px] sm:text-[10px] text-ted-red font-bold uppercase tracking-widest mt-1">Min</span>
              </div>
              <span className="text-2xl sm:text-3xl font-display text-dark-gray pb-4 sm:pb-5">:</span>
              <div className="flex flex-col items-center flex-none min-w-[32px] sm:min-w-[40px]">
                <span className="text-3xl sm:text-4xl font-display tracking-tight text-white">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="text-[9px] sm:text-[10px] text-ted-red font-bold uppercase tracking-widest mt-1">Sec</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          className="mt-16 md:mt-24"
        >
          <a
            href="#tickets"
            className="inline-block bg-ted-red text-white text-[11px] sm:text-[13px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] px-8 sm:px-14 py-4 sm:py-6 hover:bg-white hover:text-black transition-all"
          >
            Get Your Tickets Now
          </a>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-ted-red py-3 border-t border-dark-gray z-20 flex overflow-hidden">
        <div className="marquee-track gap-8">
          {[...Array(12)].map((_, i) => (
             <span key={i} className="text-white text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap">
               IDEAS WORTH SPREADING • TEDxCUSAT 2026 • 
             </span>
          ))}
        </div>
      </div>
    </section>
  );
}
