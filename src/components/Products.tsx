import { Zap, Battery, Tractor, Building, Home, Factory } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "On-Grid Solar System",
      description: "Connect to the grid and sell excess power back. Perfect for urban areas with stable grid connectivity.",
      features: ["Grid tie inverter", "Net metering", "Maximum ROI", "Maintenance free"]
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Off-Grid Solar System", 
      description: "Complete energy independence with battery backup. Ideal for remote locations and power backup needs.",
      features: ["Battery backup", "Power independence", "Hybrid options", "24x7 power"]
    },
    {
      icon: <Tractor className="w-8 h-8" />,
      title: "Agricultural Solar Systems",
      description: "Solar water pumping and farming solutions. Reduce operational costs and increase productivity.",
      features: ["Solar water pumps", "Irrigation systems", "Subsidy eligible", "Low maintenance"]
    }
  ];

  const applications = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Residential Projects",
      description: "Home rooftop installations"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Commercial Projects", 
      description: "Office & retail establishments"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Industrial Projects",
      description: "Large-scale manufacturing units"
    }
  ];

  return (
    <section id="products" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Solar Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From residential rooftops to large-scale industrial installations, 
            we provide comprehensive solar solutions tailored to your energy needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="card-solar group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="space-y-2">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="btn-outline w-full mt-6">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Project Applications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-xl border border-border hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {app.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{app.title}</h4>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;