import { Instagram, Twitter, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-10 border-t border-dark-gray">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center mb-8">
              <img 
                src="https://tedxcusat.in/logo-white.png" 
                alt="TEDxCUSAT Logo" 
                className="object-contain h-[40px] md:h-[48px]" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-text-muted text-[15px] max-w-sm mb-10 leading-relaxed">
              Independently organized TED event. Dedicated to bringing big ideas to the local community in Kochi.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-ted-red mb-8">Navigation</h4>
            <ul className="space-y-4 text-text-muted text-[13px] font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#tickets" className="hover:text-white transition-colors">Tickets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-ted-red mb-8">Location</h4>
            <ul className="space-y-6 text-text-muted text-[13px] font-medium">
              <li className="flex items-start gap-4 uppercase font-bold text-white tracking-widest">
                CUSAT, Kochi, Kerala
              </li>
              <li>
                <a href="mailto:info@tedxcusat.in" className="hover:text-white transition-colors">info@tedxcusat.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-gray pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-[10px] font-medium uppercase tracking-[0.2em]">
            &copy; 2026 TEDxCUSAT. Independently organized under license from TED.
          </p>
        </div>
      </div>
    </footer>
  );
}
