import { Trophy, Star, Award, TrendingUp, Users, Zap, CheckCircle, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    {
      icon: <Trophy className="w-10 h-10" />,
      amount: "₹78,000",
      title: "Central Goverment Subsidy",
      subtitle: "Under PM Surya Ghar Yojana",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "from-yellow-500/20 to-yellow-600/10"
    },
    {
      icon: <Star className="w-10 h-10" />,
      amount: "1000+",
      title: "PMSGY Installations",
      subtitle: "Successfully completed projects",
      color: "from-orange-400 to-orange-600",
      bgColor: "from-orange-500/20 to-orange-600/10"
    },
    {
      icon: <Award className="w-10 h-10" />,
      amount: "Among Top",
      title: "Solar Vendors",
      subtitle: "In Rajasthan state",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-500/20 to-purple-600/10"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      amount: "Top Vendor",
      title: "In AVVNL Network",
      subtitle: "Recognized excellence",
      color: "from-green-400 to-green-600",
      bgColor: "from-green-500/20 to-green-600/10"
    },
    {
      icon: <Users className="w-10 h-10" />,
      amount: "2500+",
      title: "Total Installations",
      subtitle: "Across all projects",
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-500/20 to-blue-600/10"
    }
  ];

  const highlights = [
    "Government Registered Vendor",
    "Maximum Subsidy Guarantee",
    "Quality Certified Products",
    "24/7 Customer Support"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-orange-300/10 rounded-full blur-2xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <Trophy className="w-4 h-4" />
            Proven Excellence
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our Achievements &
            <span className="block bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Milestones
            </span>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Proud milestones that reflect our commitment to excellence and our customers' trust in solar innovation.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`group transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Background */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl backdrop-blur-sm"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} rounded-2xl`}></div>
                <div className="absolute inset-0 border border-white/20 rounded-2xl group-hover:border-white/40 transition-colors duration-300"></div>
                
                {/* Card Content */}
                <div className="relative p-6 text-center">
                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  
                  {/* Amount/Number */}
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {achievement.amount}
                  </div>
                  
                  {/* Title */}
                  <div className="font-semibold text-white mb-2 text-sm lg:text-base">
                    {achievement.title}
                  </div>
                  
                  {/* Subtitle */}
                  <div className="text-xs lg:text-sm text-white/80 leading-tight">
                    {achievement.subtitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Info Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Main Info */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 rounded-3xl backdrop-blur-sm"></div>
            <div className="absolute inset-0 border border-white/20 rounded-3xl"></div>
            
            <div className="relative p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Why Rizel Group Stands Out
                </h3>
              </div>
              
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                As a registered vendor in the PM Surya Ghar Yojana, we ensure our customers receive 
                maximum government subsidies while delivering world-class solar installations.
              </p>
              
              <button
  onClick={() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold py-3 px-6 rounded-xl hover:bg-orange-50 transition-colors duration-300 group"
>
  Learn More About Us
  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
</button>

            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Our Key Advantages
            </h4>
            
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:translate-x-2 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statistics Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Happy Customers", value: "2500+" },
            { label: "Mw Installed", value: "25+" },
            { label: "Service Areas", value: "50+" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;