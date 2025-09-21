import { Award, Target, Eye, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Rizel Group
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Established in 2020, we're proud to be a registered vendor in PM Surya Ghar Yojana, 
            leading Rajasthan's solar revolution with innovative and sustainable energy solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Registered PM Surya Ghar Yojana Vendor
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Pioneering Solar Excellence Since 2020
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At Rizel Group, we believe in the transformative power of solar energy. 
                Our journey began with a simple mission: to make clean, affordable energy 
                accessible to every home and business across Rajasthan and beyond.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Our Mission</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  To accelerate India's transition to renewable energy by providing 
                  world-class solar solutions with unmatched service quality.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">Our Vision</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  To be the most trusted solar energy partner, powering sustainable 
                  communities across India with innovative technology.
                </p>
              </div>
            </div>
          </div>

          {/* Stats & Achievements */}
          <div className="space-y-6">
            <div className="card-solar">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2020</div>
                  <div className="text-sm text-muted-foreground">Year Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2500+</div>
                  <div className="text-sm text-muted-foreground">Total Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">PMSGY Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Top </div>
                  <div className="text-sm text-muted-foreground">Vendor in Rajasthan</div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Key Achievements
              </h4>
              <div className="space-y-3">
                {[
                  "Registered vendor in PM Surya Ghar Yojana",
                  "Among Top solar vendors in Rajasthan", 
                  "Top vendor in AVVNL network",
                  "900+ successful PMSGY installations",
                  "₹78,000 central government subsidy processing"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
