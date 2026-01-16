import {
  Settings,
  Wrench,
  Headphones,
  Users,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Zap,
  Home,
  Building2,
  Factory,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Complete Installation",
      description:
        "End-to-end solar system installation with professional project management and quality assurance.",
      features: ["Professional Design", "Quality Components", "Full Commissioning"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Support",
      description:
        "Regular maintenance, performance monitoring, and technical support to ensure optimal system performance.",
      features: ["24/7 Monitoring", "Preventive Care", "Performance Reports"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Solar Consultation",
      description:
        "Expert consultation for system design, subsidy guidance, and energy optimization strategies.",
      features: ["Free Assessment", "Subsidy Guidance", "ROI Analysis"],
      gradient: "from-green-500 to-emerald-500",
    },

    /* ✅ SEO TARGETED SERVICE CARDS */
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Solar Installation",
      description:
        "Rooftop solar installation for homes in Udaipur Rajasthan with PM Surya Ghar subsidy support.",
      features: ["Home Rooftop Solar", "Net Metering", "Subsidy Assistance"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Commercial Solar Installation",
      description:
        "Commercial solar power systems for offices, hotels, schools, and institutions in Udaipur.",
      features: ["Lower Power Bills", "High Efficiency", "Fast ROI"],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial Solar Installation",
      description:
        "Large-scale industrial solar installations for factories and manufacturing units in Udaipur.",
      features: ["High Capacity Plants", "Load Optimization", "Scalable Design"],
      gradient: "from-gray-700 to-gray-900",
    },
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Certified professionals with 4+ years experience",
      count: "50+",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Premium components with comprehensive warranties",
      count: "25Y",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Installation",
      description: "Fast, efficient installation with minimal disruption",
      count: "7D",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Assessment",
      desc: "Detailed site survey and energy audit",
      detail: "Our experts analyze your roof, energy consumption, and local regulations",
    },
    {
      step: "02",
      title: "System Design",
      desc: "Custom solar system design and proposal",
      detail: "Tailored solution with 3D modeling and financial projections",
    },
    {
      step: "03",
      title: "Installation",
      desc: "Professional installation and commissioning",
      detail: "Certified installers with safety protocols and quality checks",
    },
    {
      step: "04",
      title: "Support",
      desc: "Ongoing monitoring and maintenance",
      detail: "Real-time monitoring and proactive maintenance services",
    },
  ];

  return (
    <section
      id="services"
      className="py-10 md:py-20 bg-gradient-to-br from-white via-orange-50 to-orange-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative">

        {/* HEADER */}
        <div className="text-center mb-20">
          <Zap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive solar services from consultation to long-term maintenance.
          </p>
        </div>

        {/* SERVICE CARDS (UNCHANGED GRID) */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100">
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 bg-gradient-to-br ${service.gradient}`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ SEO TEXT BLOCK (NO LAYOUT IMPACT) */}
     <div className="max-w-5xl mx-auto mb-24 space-y-14 text-gray-700">

          <div id="residential-solar-udaipur">
            <h2 className="text-3xl font-bold mb-3">
              Residential Solar Installation in Udaipur Rajasthan
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
  Rizel Group provides reliable residential rooftop solar installation services
  in Udaipur Rajasthan for independent houses, villas, and apartments.
  Our home solar solutions are designed to reduce monthly electricity bills
  while ensuring long-term energy savings and sustainability.
</p>

<p className="mt-3 text-gray-700 leading-relaxed">
  As a registered PM Surya Ghar Yojana vendor, we assist homeowners with
  subsidy processing, net metering approvals, and system commissioning.
  From site survey to installation and after-sales support, our team ensures
  a smooth and hassle-free transition to solar energy.
</p>

<ul className="mt-4 space-y-2 text-gray-700">
  <li>• Rooftop solar systems for homes in Udaipur</li>
  <li>• PM Surya Ghar Yojana subsidy assistance</li>
  <li>• Net metering and DISCOM approvals</li>
</ul>

          </div>

          <div id="commercial-solar-udaipur">
            <h2 className="text-3xl font-bold mb-3">
              Commercial Solar Installation in Udaipur Rajasthan
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
  Our commercial solar installation services in Udaipur Rajasthan are ideal
  for offices, hotels, schools, hospitals, and commercial complexes looking
  to reduce operational electricity costs.
</p>

<p className="mt-3 text-gray-700 leading-relaxed">
  Rizel Group designs customized commercial solar power systems based on
  energy consumption patterns, available rooftop space, and budget.
  These systems help businesses achieve fast ROI while improving their
  sustainability credentials.
</p>

<ul className="mt-4 space-y-2 text-gray-700">
  <li>• Commercial rooftop and on-grid solar systems</li>
  <li>• High-efficiency panels for maximum output</li>
  <li>• Long-term cost savings and quick ROI</li>
</ul>

          </div>

          <div id="industrial-solar-udaipur">
            <h2 className="text-3xl font-bold mb-3">
              Industrial Solar Installation in Udaipur Rajasthan
            </h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
  Rizel Group offers large-scale industrial solar installation services
  in Udaipur Rajasthan for factories, warehouses, and manufacturing units
  with high energy requirements.
</p>

<p className="mt-3 text-gray-700 leading-relaxed">
  Our industrial solar solutions focus on load optimization, high-capacity
  solar plants, and scalable designs that support future expansion.
  With robust components and professional execution, we ensure long-term
  performance and reliable power generation.
</p>

<ul className="mt-4 space-y-2 text-gray-700">
  <li>• High-capacity industrial solar power plants</li>
  <li>• Custom system design for heavy loads</li>
  <li>• Scalable solutions with long-term ROI</li>
</ul>

          </div>

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
      {/* FAQ Section */}
<div className="max-w-5xl mx-auto mt-20 px-4">
  <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-900">
    Frequently Asked Questions – Solar Installation in Rajasthan
  </h2>

  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Who is eligible for PM Surya Ghar Yojana in Rajasthan?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        Homeowners in Rajasthan with an active residential electricity connection are eligible for PM Surya Ghar Yojana. 
        The subsidy amount depends on the solar system capacity and DISCOM approval.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Do you provide PM Surya Ghar subsidy assistance?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        Yes. We provide complete assistance including documentation, subsidy application, and coordination with the 
        local DISCOM to ensure smooth approval.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        What is the cost of residential solar installation in Rajasthan?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        The cost depends on system size, rooftop space, and component quality. After PM Surya Ghar subsidy, 
        residential solar systems become highly affordable with fast return on investment.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        How much electricity can rooftop solar generate in Rajasthan?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        A 1kW rooftop solar system can generate approximately 120–150 units per month in Rajasthan 
        due to excellent solar irradiation.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Do you install commercial and industrial solar systems?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        Yes. We offer commercial and industrial solar installations for offices, factories, hotels, schools, 
        and manufacturing units across Rajasthan.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        How long does solar installation take?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        Residential installations typically take 5–7 days. Commercial and industrial projects may vary 
        depending on system size and approvals.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        What maintenance is required for solar panels?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        Solar systems require minimal maintenance, mainly periodic panel cleaning and basic system checks 
        to maintain optimal performance.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        What is the lifespan of a solar power system?
      </h3>
      <p className="mt-2 text-gray-700 leading-relaxed">
        Solar panels typically last 25 years or more, while inverters usually last 8–12 years 
        depending on usage and quality.
      </p>
    </div>
  </div>
</div>

    </section>
  );
};

export default Services;
