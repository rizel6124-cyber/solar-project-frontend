import { Zap, Battery, Tractor, Building, Home, Factory, ArrowRight, CheckCircle } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "On-Grid Solar System",
      description: "Connect to the grid and sell excess power back. Perfect for urban areas with stable grid connectivity.",
      features: ["Grid tie inverter", "Net metering", "Maximum ROI", "Maintenance free"],
      badge: "Most Popular"
    },
    {
      icon: <Battery className="w-10 h-10" />,
      title: "Off-Grid Solar System", 
      description: "Complete energy independence with battery backup. Ideal for remote locations and power backup needs.",
      features: ["Battery backup", "Power independence", "Hybrid options", "24x7 power"],
      badge: "Complete Solution"
    },
    {
      icon: <Tractor className="w-10 h-10" />,
      title: "Agricultural Solar Systems",
      description: "Solar water pumping and farming solutions. Reduce operational costs and increase productivity.",
      features: ["Solar water pumps", "Irrigation systems", "Subsidy eligible", "Low maintenance"],
      badge: "Eco-Friendly"
    }
  ];

  const applications = [
    {
      icon: <Home className="w-7 h-7" />,
      title: "Residential Projects",
      description: "Home rooftop installations",
      stats: "1500+ Homes Powered"
    },
    {
      icon: <Building className="w-7 h-7" />,
      title: "Commercial Projects", 
      description: "Office & retail establishments",
      stats: "200+ Businesses"
    },
    {
      icon: <Factory className="w-7 h-7" />,
      title: "Industrial Projects",
      description: "Large-scale manufacturing units",
      stats: "50+ Industries"
    }
  ];

  return (
    <section id="products" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-300"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Premium Solar Solutions
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Power Your Future with
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Clean Energy
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From residential rooftops to large-scale industrial installations, 
            we provide comprehensive solar solutions tailored to your energy needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <div key={index} className="group relative">
              {/* Card Background with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 rounded-2xl"></div>
              
              {/* Card Content */}
              <div className="relative p-8 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Badge */}
                <div className="absolute -top-3 left-6">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {product.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-4 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                
                {/* <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Applications Section */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Project Applications
            </h3>
            <p className="text-gray-400">
              Trusted by hundreds of clients across different sectors
            </p>
          </div>
          
          {/* Applications Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="group relative">
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-xl"></div>
                
                {/* Card Content */}
                <div className="relative p-6 border border-gray-800 rounded-xl hover:border-orange-500/30 transition-all duration-300 group-hover:transform group-hover:translate-y-[-2px]">
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-lg flex items-center justify-center text-orange-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {app.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                        {app.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        {app.description}
                      </p>
                      <div className="text-orange-400 text-xs font-medium">
                        {app.stats}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
            
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Products;