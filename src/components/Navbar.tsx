import { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';

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
    // { label: 'Home', id: 'hero' },
    
    { label: 'Products', id: 'products' },
    { label: 'Services', id: 'services' },
    { label: 'Calculator', id: 'calculator' },
    // { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
    { label: 'About-Us', id: 'about' },
  ];

  return (
    <>
      {/* Backdrop blur overlay */}
      <div className="fixed top-0 left-0 right-0 z-40 h-20 bg-gradient-to-b from-white via-white to-white pointer-events-none" />
      
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Main navbar with glass effect */}
        <div className="relative">
         
          
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo Section */}
              <div className="flex items-center space-x-3 group">
                
                
                
                
                <div className=" sm:block">
                  {/* <div className="text-3xl font-bold bg-gradient-to-r from-[#f97217] to-[#f97217] bg-clip-text text-transparent">
                    R I Z E L
                  </div>
                  <div className="text-xs text-black font-bold -mt-1">
                    G R O U P
                  </div> */}
                  <img className='h-28 w-32 ' src='logo.png'></img>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative group px-4 py-2 text-gray-800/90 hover:text-black font-medium transition-all duration-300 rounded-xl"
                  >
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Active indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-8 transition-all duration-300" />
                    
                    <span className="relative z-10">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* CTA Button (Desktop) */}
              <div className="hidden lg:flex">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/20 to-orange-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                    Get Quote
                  </div>
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="relative p-2 text-gray-800/90 hover:text-black transition-colors duration-200 group"
                >
                  <div className="absolute inset-0 bg-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {isOpen ? 
                    <X className="w-6 h-6 relative z-10 transform group-hover:rotate-90 transition-transform duration-300" /> : 
                    <Menu className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  }
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <div className="relative mx-4 sm:mx-6 mt-2">
            {/* Mobile menu background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-100/95 to-white/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-orange-500/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 rounded-2xl" />
            
            <div className="relative px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group w-full text-left relative"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-400/10 rounded-xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-200" />
                  <div className="relative px-4 py-3 text-gray-800/90 group-hover:text-black font-medium transition-colors duration-200 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.label}
                  </div>
                </button>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-orange-500/20">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl" />
                  <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                    Get Free Consultation
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;