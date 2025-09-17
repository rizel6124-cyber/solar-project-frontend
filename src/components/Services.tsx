import { Settings, Wrench, HeadphonesIcon, Users, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Complete Installation",
      description: "End-to-end solar system installation with professional project management and quality assurance."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Support",
      description: "Regular maintenance, performance monitoring, and technical support to ensure optimal system performance."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Solar Consultation",
      description: "Expert consultation for system design, subsidy guidance, and energy optimization strategies."
    }
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Certified professionals with 4+ years experience"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Premium components with comprehensive warranties"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Installation",
      description: "Fast, efficient installation with minimal disruption"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solar services from initial consultation to long-term maintenance, 
            ensuring your solar investment delivers maximum returns.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-solar text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Features */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Why Choose Our Services?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg text-white mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Our Installation Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Site Assessment", desc: "Detailed site survey and energy audit" },
              { step: "02", title: "System Design", desc: "Custom solar system design and proposal" },
              { step: "03", title: "Installation", desc: "Professional installation and commissioning" },
              { step: "04", title: "Support", desc: "Ongoing monitoring and maintenance" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;