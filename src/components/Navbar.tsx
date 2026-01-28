import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-serif italic text-[#8B7355]">
              Krins
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#8B7355] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#8B7355] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#8B7355] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-[#8B7355] transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#8B7355] transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#8B7355] transition-colors">
              Contact
            </button>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <a href="tel:+919876543210" className="flex items-center gap-2 bg-[#8B7355] text-white px-6 py-3 hover:bg-[#6d5a43] transition-colors">
              <Phone size={18} />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#8B7355] focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-[#8B7355]">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-[#8B7355]">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-[#8B7355]">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 text-gray-700 hover:text-[#8B7355]">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-gray-700 hover:text-[#8B7355]">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-[#8B7355]">
              Contact
            </button>
            <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-[#8B7355] text-white px-6 py-3 mt-4 hover:bg-[#6d5a43]">
              <Phone size={18} />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
