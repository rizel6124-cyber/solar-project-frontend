import { Settings, Wrench, Headphones, Users, Shield, Clock, CheckCircle, Star, Zap, Home, Building2, Factory } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Complete Installation",
      description: "End-to-end solar system installation with professional project management and quality assurance.",
      features: ["Professional Design", "Quality Components", "Full Commissioning"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Support", 
      description: "Regular maintenance, performance monitoring, and technical support to ensure optimal system performance.",
      features: ["24/7 Monitoring", "Preventive Care", "Performance Reports"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Solar Consultation",
      description: "Expert consultation for system design, subsidy guidance, and energy optimization strategies.",
      features: ["Free Assessment", "Subsidy Guidance", "ROI Analysis"],
      gradient: "from-green-500 to-emerald-500"
    }
  /* NEW SEO SERVICE CARDS */
  {
    icon: <Home className="w-8 h-8" />,
    title: "Residential Solar Installation",
    description: "Rooftop solar solutions for homes designed to reduce electricity bills and maximize PM Surya Ghar subsidy benefits.",
    features: ["Home Rooftop Solar", "Subsidy Assistance", "Net Metering"],
    gradient: "from-yellow-500 to-orange-500",
    link: "#residential-solar-udaipur"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Commercial Solar Installation",
    description: "Customized commercial solar systems for offices, hotels, schools, and institutions in Udaipur.",
    features: ["Cost Reduction", "High Efficiency", "Quick ROI"],
    gradient: "from-purple-500 to-indigo-500",
    link: "#commercial-solar-udaipur"
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Industrial Solar Installation",
    description: "High-capacity solar installations for factories and manufacturing units with long-term ROI.",
    features: ["Large Scale Systems", "Load Optimization", "Scalable Design"],
    gradient: "from-gray-700 to-gray-900",
    link: "#industrial-solar-udaipur"
  }
    
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Certified professionals with 4+ years experience",
      count: "50+"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Premium components with comprehensive warranties",
      count: "25Y"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Installation",
      description: "Fast, efficient installation with minimal disruption",
      count: "7D"
    }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Site Assessment", 
      desc: "Detailed site survey and energy audit",
      detail: "Our experts analyze your roof, energy consumption, and local regulations"
    },
    { 
      step: "02", 
      title: "System Design", 
      desc: "Custom solar system design and proposal",
      detail: "Tailored solution with 3D modeling and financial projections"
    },
    { 
      step: "03", 
      title: "Installation", 
      desc: "Professional installation and commissioning",
      detail: "Certified installers with safety protocols and quality checks"
    },
    { 
      step: "04", 
      title: "Support", 
      desc: "Ongoing monitoring and maintenance",
      detail: "Real-time monitoring and proactive maintenance services"
    }
  ];

  return (
    <section id="services" className="py-10 md:py-20 bg-gradient-to-br from-white via-orange-50 to-orange-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-orange-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-orange-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-400/20 blur-xl rounded-full animate-pulse"></div>
              <Zap className="relative w-16 h-16 text-orange-500 mx-auto animate-bounce" />
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solar services from initial consultation to long-term maintenance, 
            ensuring your solar investment delivers maximum returns.
          </p>
        </div>

        {/* Main Services Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12 md:mb-24">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:-translate-y-2 border border-orange-100">
                {/* Floating icon with gradient background */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${idx * 100}ms`}}>
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="relative mb-12 md:mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 rounded-3xl"></div>
          
          <div className="relative p-12 lg:p-16 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h3>
            <p className="text-orange-200 text-lg mb-12 max-w-2xl mx-auto">
              Experience the difference with our proven track record and commitment to excellence
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-6">
                    {/* Animated counter background */}
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    
                    {/* Counter badge */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                      {feature.count}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-orange-100 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Installation Process */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Installation <span className="text-orange-500">Process</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach that ensures quality, efficiency, and your complete satisfaction
          </p>
        </div>

        <div className="relative">
          {/* Process connection line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full mx-20"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {processSteps.map((process, index) => (
              <div key={index} className="relative group text-center">
                {/* Process card */}
                <div className="relative rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 rounded-2xl"></div>
                  <div className="relative">
                  {/* Step number with animated background */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 scale-150"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                      {process.step}
                    </div>
                  </div>

                  <h4 className="font-bold text-xl text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                    {process.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {process.desc}
                  </p>

                  {/* Expandable detail on hover */}
                  <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-20">
                    <p className="text-sm text-orange-400 font-medium leading-relaxed pt-2 border-t border-orange-500/30">
                      {process.detail}
                    </p>
                  </div>
                  </div>
                </div>

                {/* Step connector for mobile */}
                <div className="md:hidden w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-400 mx-auto mt-4"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-orange-400 hover:to-orange-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer group">
            <Star className="w-5 h-5 group-hover:animate-spin" />
            <span className="font-semibold text-lg">Start Your Solar Journey Today</span>
            <Star className="w-5 h-5 group-hover:animate-spin" style={{animationDirection: 'reverse'}} />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
