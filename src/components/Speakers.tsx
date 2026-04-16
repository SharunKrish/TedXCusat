import { motion } from "motion/react";
import { SPEAKERS } from "../constants";

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-black text-white px-10 border-b border-dark-gray">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-ted-red mb-4 block font-extrabold">Featured Speakers</span>
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight">The Lineup</h2>
          </motion.div>
        </div>

        {/* Gapless brutalist grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-dark-gray text-white"
        >
          {SPEAKERS.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="group relative bg-dark-gray/30 aspect-square overflow-hidden speaker-x flex items-end p-8 border-r border-b border-dark-gray"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:opacity-80 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-all duration-500" />
              
              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                <div className="w-8 h-[2px] bg-ted-red mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <h4 className="text-[20px] font-bold uppercase tracking-tight mb-1 text-white">
                  {speaker.name}
                </h4>
                <p className="text-ted-red text-[11px] font-extrabold uppercase tracking-widest">
                  {speaker.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
