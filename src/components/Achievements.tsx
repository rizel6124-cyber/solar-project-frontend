import { Trophy, Star, Award, TrendingUp, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      amount: "₹78,000",
      title: "Maximum Subsidy",
      subtitle: "Under PM Surya Ghar Yojana"
    },
    {
      icon: <Star className="w-8 h-8" />,
      amount: "900+",
      title: "PMSGY Installations", 
      subtitle: "Successfully completed projects"
    },
    {
      icon: <Award className="w-8 h-8" />,
      amount: "Top 10",
      title: "Solar Vendors",
      subtitle: "In Rajasthan state"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      amount: "Top Vendor",
      title: "In AVVNL Network",
      subtitle: "Recognized excellence"
    },
    {
      icon: <Users className="w-8 h-8" />,
      amount: "2500+",
      title: "Total Installations",
      subtitle: "Across all projects"
    }
  ];

  return (
    <section className="section-orange section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Achievements & Highlights
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Proud milestones that reflect our commitment to excellence and our customers' trust in solar innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {achievement.amount}
                </div>
                <div className="font-semibold text-white mb-1">
                  {achievement.title}
                </div>
                <div className="text-sm text-white/80">
                  {achievement.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              🏆 Why Rizel Group Stands Out
            </h3>
            <p className="text-white/90 leading-relaxed">
              As a registered vendor in the PM Surya Ghar Yojana, we ensure our customers receive 
              maximum government subsidies while delivering world-class solar installations. Our track 
              record speaks for itself with thousands of satisfied customers across Rajasthan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;