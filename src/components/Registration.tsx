import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Ticket, Star, CheckCircle, X } from "lucide-react";

export default function Registration() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleRegister = (tierName: string) => {
    setSelectedTier(tierName);
    setShowModal(true);
  };

  const tiers = [
    {
      name: "Early Bird",
      price: "₹499",
      features: ["Full Event Access", "Delegate Kit", "Lunch & Snacks", "Certificate"],
      recommended: false,
    },
    {
      name: "Standard",
      price: "₹799",
      features: ["Full Event Access", "Premium Delegate Kit", "Lunch & Snacks", "Certificate", "Official Merchandise"],
      recommended: true,
    },
    {
      name: "VIP",
      price: "₹1499",
      features: ["Front Row Seating", "Speaker Meet & Greet", "Exclusive Hoodie", "Lunch & High Tea", "Digital Access"],
      recommended: false,
    },
  ];

  return (
    <section id="tickets" className="relative py-24 bg-black px-10 border-t border-dark-gray">
      <div className="container mx-auto">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display uppercase mb-6 tracking-tighter"
          >
            Get <span className="text-ted-red">Tickets</span>
          </motion.h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className={`relative p-12 border transition-all duration-300 ${
                tier.recommended 
                  ? "border-ted-red bg-dark-gray shadow-[8px_8px_0_0_#eb0028] -translate-y-2 lg:-translate-y-4" 
                  : "border-dark-gray bg-black hover:bg-dark-gray/30"
              }`}
            >
              <h3 className="text-2xl font-display uppercase tracking-tight mb-4">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold">{tier.price}</span>
                <span className="text-xs text-text-muted uppercase tracking-widest font-medium">/ person</span>
              </div>

              <ul className="space-y-4 mb-12">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[13px] font-medium text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-ted-red mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleRegister(tier.name)}
                className={`w-full py-5 text-[12px] font-black uppercase tracking-[0.2em] transition-all ${
                  tier.recommended
                    ? "bg-ted-red text-white hover:bg-white hover:text-black"
                    : "bg-white text-black hover:bg-ted-red hover:text-white"
                }`}
              >
                Register Now
              </button>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm font-medium">
            For group registrations (10+ people), please contact us at <span className="text-ted-red hover:underline cursor-pointer">registrations@tedxcusat.in</span>
          </p>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-dark-gray border border-ted-red p-10 md:p-16 max-w-lg w-full text-center"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-text-muted hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full border-2 border-ted-red flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-ted-red" />
                </div>
              </div>

              <h3 className="text-4xl font-display uppercase tracking-tight text-white mb-4">
                Registration Successful
              </h3>
              <p className="text-text-muted text-lg mb-10 leading-relaxed">
                Thank you for registering for <span className="text-white font-bold">TEDxCUSAT 2026</span> as a <span className="text-ted-red font-bold">{selectedTier}</span> delegate. 
                A confirmation email with your ticket details has been sent to your inbox.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-ted-red text-white py-5 text-[12px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                Great, See You There!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
