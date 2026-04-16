import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Tickets", href: "#tickets" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-dark-gray" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/images/logo-white.png" 
            alt="TEDxCUSAT Logo" 
            className="object-contain h-[32px] md:h-[40px]"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[12px] font-bold uppercase tracking-widest text-white transition-colors group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-ted-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#tickets"
            className="bg-ted-red text-white px-8 py-3 text-[12px] font-extrabold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Register
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-ted-black" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-ted-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-8 flex flex-col items-center gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-ted-black text-xl font-bold uppercase tracking-wider hover:text-ted-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#tickets"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-ted-red text-white w-2/3 py-4 rounded-full text-center text-lg font-bold uppercase tracking-widest"
            >
              Get Tickets
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
