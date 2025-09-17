import { ArrowDown } from 'lucide-react';
import heroImage from '../assets/hero-solar.jpg';

const Hero = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator');
    if (calculator) {
      calculator.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Power Your Future with 
              <span className="block text-primary">Solar Energy</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
              Join the solar revolution with Rizel Group. We're transforming how India powers 
              its homes and businesses with clean, affordable, and sustainable energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={scrollToCalculator}
                className="btn-primary inline-flex items-center gap-2"
              >
                Get Free Consultation
                <ArrowDown className="w-5 h-5" />
              </button>
              <button className="btn-outline">
                View Our Projects
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">2500+</div>
                <div className="text-sm text-muted-foreground">Installations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">900+</div>
                <div className="text-sm text-muted-foreground">PMSGY Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">₹78K</div>
                <div className="text-sm text-muted-foreground">Max Subsidy</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="fade-in-delay">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Modern solar panel installation on rooftop" 
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-orange max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">₹</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Save up to 90%</div>
                    <div className="text-sm text-muted-foreground">on electricity bills</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;