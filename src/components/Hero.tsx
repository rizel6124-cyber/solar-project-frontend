import { useState, useEffect } from "react";
import {
  ArrowDown,
  Zap,
  Shield,
  Award,
  TrendingUp,
  Sun,
  Users,
  DollarSign,
} from "lucide-react";
import styles from "./Hero.module.css";
// Rolling number animation hook
const useCountUp = (end, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const startAnimation = () => {
      if (hasStarted) return;
      setHasStarted(true);

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(end * easeOutCubic));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector("#stats-section");
    if (element) observer.observe(element);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end, duration, delay, hasStarted]);

  return count;
};

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", city: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const scrollToCalculator = () => {
    const calculator = document.getElementById("calculator");
    if (calculator) {
      calculator.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/send-inquiry`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Inquiry sent successfully!");
        setFormData({ name: "", phone: "", city: "" });
      } else {
        setStatus("❌ " + data.error);
      }
    } catch (err) {
      setStatus("❌ Something went wrong!");
    }

    setLoading(false);
  };

  const installations = useCountUp(2500, 2500, 0);
  const projects = useCountUp(1000, 2000, 300);
  const subsidy = useCountUp(78, 1800, 600);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-orange-950"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient orbs */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-20 items-start py-16 min-h-[80vh]">
          {/* Left Content Column */}
          <div className="relative z-10 space-y-8 pt-12 ">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full backdrop-blur-sm">
              <Award className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">
                Among Top Solar Provider in India
              </span>
            </div>

            {/* Main Headlines with staggered animation */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <div
                  className={`block text-white opacity-0 ${styles.slideInUp}`}
                >
                  Power Your
                </div>
                <div
                  className={`block text-white opacity-0 ${styles.slideInUp}`}
                  style={{ animationDelay: "0.4s" }}
                >
                  Future with
                </div>
                <div
                  className={`block bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent opacity-0 ${styles.slideInUp}`}
                  style={{ animationDelay: "0.6s" }}
                >
                  Solar Energy
                </div>
              </h1>
            </div>

            {/* Description */}
            <p
              className={`text-xl text-gray-300 leading-relaxed max-w-lg opacity-0 ${styles.fadeInUp}`}
              style={{ animationDelay: "0.8s" }}
            >
              Transform your energy future with India's most trusted solar
              solutions. Experience the perfect blend of{" "}
              <span className="text-orange-400 font-semibold">
                cutting-edge technology
              </span>{" "}
              and
              <span className="text-orange-400 font-semibold">
                {" "}
                sustainable innovation
              </span>
              .
            </p>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 opacity-0 ${styles.fadeInUp}`}
              style={{ animationDelay: "1s" }}
            >
              <button
                onClick={() => setShowPopup(true)}
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/20 to-orange-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span>Get Free Consultation</span>
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </div>
              </button>

              <button
                onClick={() => {
                  const calculator = document.getElementById("calculator");
                  if (calculator)
                    calculator.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative overflow-hidden bg-transparent border-2 border-orange-500/50 hover:border-orange-400 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-orange-500/10 backdrop-blur-sm"
              >
                <div className="relative flex items-center justify-center gap-3">
                  <span className="font-extrabold text-xl">Solar Calculator</span>
                  <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap gap-0 pt-0 opacity-0 ${styles.fadeInUp}`}
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300 font-medium">
                  30-Year Warranty
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative pt-0  md:pt-8 lg:pt-8 ">
            {/* Main Image Container */}
            <div className="relative group mb-16">
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
                <img
                  // src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  src="https://5.imimg.com/data5/SELLER/Default/2024/4/409497815/YH/MA/TR/185429433/adani-solar-panel-500x500.jpg"
                  alt="Modern solar panel installation"
                  className={`w-full h-[480px] object-cover transition-all duration-1000 ${
                    imageLoaded
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-orange-500/10"></div>
              </div>
            </div>

            {/* Floating Cards - Properly Spaced Below Image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  -mt-8">
              {/* Clean Energy Card */}
              <div className="bg-gradient-to-br from-white/95 to-white/90 p-6  backdrop-blur-sm  rounded-2xl shadow-xl border border-white/20 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 ">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">
                      100% Clean
                    </div>
                    <div className="text-sm text-gray-600">
                      Renewable Energy
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Card */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">Save upto 100%</div>
                    <div className="text-sm text-orange-100">
                      on electricity bills
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Properly Separated */}
        <div id="stats-section" className="mt-2 mb-10">
          <div className="bg-gradient-to-r from-black/70 via-gray-900/80 to-black/70 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-orange-500/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {/* Stat 1 - Happy Customers */}
              <div className="group space-y-4">
                <div className="relative mx-auto w-fit">
                  <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent mb-2">
                    {installations.toLocaleString()}+
                  </div>
                  <div className="text-gray-400 font-medium text-lg">
                    Happy Customers
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Successful Installations
                  </div>
                </div>
              </div>

              {/* Stat 2 - PMKSY Projects */}
              <div className="group space-y-4">
                <div className="relative mx-auto w-fit">
                  <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent mb-2">
                    {projects}+
                  </div>
                  <div className="text-gray-400 font-medium text-lg">
                    PMSGY Projects
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Government Certified
                  </div>
                </div>
              </div>

              {/* Stat 3 - Maximum Subsidy */}
              <div className="group space-y-4">
                <div className="relative mx-auto w-fit">
                  <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent mb-2">
                    ₹{subsidy}K
                  </div>
                  <div className="text-gray-400 font-medium text-lg">
                    Central Government
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Subsidy Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
                   {" "}
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-2xl relative">
                       {" "}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
                            ✖            {" "}
            </button>
                       {" "}
            <h2 className="text-xl font-bold mb-4">Free Consultation</h2>       
               {" "}
            <form onSubmit={handleSubmit} className="space-y-4">
                           {" "}
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border rounded-lg p-3"
              />
                           {" "}
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full border rounded-lg p-3"
              />
                           {" "}
              <input
                type="text"
                placeholder="City"
                required
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full border rounded-lg p-3"
              />
                           {" "}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600"
              >
                                {loading ? "Sending..." : "Submit"}             {" "}
              </button>
                         {" "}
            </form>
                        {status && <p className="mt-3 text-center">{status}</p>}
                     {" "}
          </div>
                 {" "}
        </div>
      )}
      {/* Enhanced Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400/60 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
