import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="bg-black py-24 px-10 border-b border-dark-gray overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-dark-gray">
          {/* Left panel */}
          <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-dark-gray flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-ted-red mb-6 block font-extrabold">About the Event</span>
              <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-white mb-8">
                Embrace the <span className="text-ted-red">Flux</span>
              </h2>
              <p className="text-text-muted text-[15px] font-medium leading-relaxed mb-6">
                TEDxCUSAT is an independently organized TED event hosted by Cochin University of Science and Technology. We aim to bring together the brightest minds to spark conversation and connection in a community that values curiosity and innovation.
              </p>
              <p className="text-text-muted text-[15px] font-medium leading-relaxed">
                This year's theme explores the state of constant change, uncovering the opportunities hidden within chaos. It celebrates the spectrum of possibilities that emerge when diverse ideas converge and refract.
              </p>
            </motion.div>
          </div>
          
          {/* Right panel (Stats + Image) */}
          <div className="flex flex-col">
            <motion.div 
              initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
              whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="h-72 relative overflow-hidden border-b border-dark-gray filter grayscale hover:grayscale-0 transition-all duration-700"
            >
               <motion.img 
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                src="/images/about-stage.jpg" 
                  alt="TEDx Event Stage" 
                  className="w-full h-full object-cover" 
               />
               <div className="absolute inset-0 bg-ted-red/20 mix-blend-multiply" />
            </motion.div>
            
            <div className="grid grid-cols-2 flex-grow">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="p-10 border-r border-dark-gray flex flex-col justify-center items-center text-center bg-dark-gray/30"
               >
                  <span className="text-5xl md:text-7xl font-display text-white mb-2 leading-none tracking-tighter">20+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-ted-red">Visionaries</span>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="p-10 flex flex-col justify-center items-center text-center bg-dark-gray/30"
               >
                  <span className="text-5xl md:text-7xl font-display text-white mb-2 leading-none tracking-tighter">5K+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-ted-red">Attendees</span>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
