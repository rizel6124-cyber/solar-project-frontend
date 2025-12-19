import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Products', id: 'products' },
    { label: 'Services', id: 'services' },
    { label: 'Calculator', id: 'calculator' },
    { label: 'Contact', id: 'contact' },
    { label: 'About Us', id: 'about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              className="h-[80px] w-auto"
              src="logo.png"
              alt="Rizel Group Logo"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="relative group px-4 py-2 text-gray-800/90 hover:text-black font-medium transition-all duration-300 rounded-xl"
              >
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-6 py-2.5 rounded-xl transition-all hover:from-orange-400 hover:to-orange-300"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              title={isOpen ? 'Close menu' : 'Open menu'}
              className="p-2 text-gray-800/90 hover:text-black"
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          className="lg:hidden bg-white/95 backdrop-blur-xl shadow-xl px-6 py-6 space-y-2"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-3 text-gray-800/90 hover:text-black font-medium rounded-xl hover:bg-orange-100"
            >
              {item.label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold py-3 px-4 rounded-xl"
          >
            Get Free Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
