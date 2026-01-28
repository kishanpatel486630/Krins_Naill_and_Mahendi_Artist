import { Instagram, Phone, Mail, Heart } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2a2a2a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif italic text-[#C9A58E] mb-4">Krins</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Premium nails & mehendi artistry services brought to your doorstep. 
              Making your special moments more beautiful.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/krins_artistry" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A58E] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="tel:+919876543210" className="hover:text-[#C9A58E] transition-colors">
                <Phone size={20} />
              </a>
              <a href="mailto:krins@example.com" className="hover:text-[#C9A58E] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-[#C9A58E] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#C9A58E] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#C9A58E] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#C9A58E] transition-colors">
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Bridal Mehendi</li>
              <li>Function Mehendi</li>
              <li>Luxury Nail Art</li>
              <li>Bridal Package</li>
              <li>Home Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>krins@example.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={16} className="mt-1 flex-shrink-0" />
                <span>@krins_artistry</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Krins Nails & Mehendi Artist. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-[#C9A58E]" /> for beautiful moments
          </p>
        </div>
      </div>
    </footer>
  );
}
