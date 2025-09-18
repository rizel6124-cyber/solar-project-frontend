import { Sun, Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About Us', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Services', id: 'services' },
    { label: 'Calculator', id: 'calculator' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-orange rounded-lg flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Rizel Group</h3>
                <p className="text-sm text-white/70">Redefining Excellence</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Leading solar energy solutions provider in Rajasthan. Registered vendor in 
              PM Surya Ghar Yojana with 2500+ successful installations across residential, 
              commercial, and agricultural sectors.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4" />
                <span>+91 89555 56986 / +91 96725 25744</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span>rizelgroup@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-white/80 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <div className="space-y-2 text-white/80">
              <div>On-Grid Solar Systems</div>
              <div>Off-Grid Solar Systems</div>
              <div>Agricultural Solar</div>
              <div>Installation Services</div>
              <div>Maintenance & Support</div>
              <div>Solar Consultation</div>
            </div>
          </div>
        </div>

        {/* Achievements Banner */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">₹78K</div>
              <div className="text-sm text-white/70">Central Subsidy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">900+</div>
              <div className="text-sm text-white/70">PMSGY Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Among Top </div>
              <div className="text-sm text-white/70">Vendor in Rajasthan</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">2500+</div>
              <div className="text-sm text-white/70">Total Installations</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm">
            © 2024 Rizel Group. All rights reserved. | Registered PM Surya Ghar Yojana Vendor
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="#" 
              className="w-8 h-8 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;