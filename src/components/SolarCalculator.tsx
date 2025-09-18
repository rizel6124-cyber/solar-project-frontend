import React, { useState } from "react";
import {
  Calculator,
  Zap,
  Phone,
  Sun,
  ArrowRight,
  Sparkles,
  DollarSign,
  Leaf,
  Shield,
} from "lucide-react";

const SolarCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [calculatedCapacity, setCalculatedCapacity] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonText, setButtonText] = useState("Get Free Consultation");

  const calculateCapacity = (bill) => {
    const dailyUnits = bill / 9 / 30;
    const capacity = Math.ceil(dailyUnits / 4);
    return capacity;
  };

  const handleBillChange = (e) => {
    const bill = e.target.value;
    setMonthlyBill(bill);

    if (bill && !isNaN(bill) && bill > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        const capacity = calculateCapacity(parseFloat(bill));
        setCalculatedCapacity(capacity);
        setIsAnimating(false);
      }, 300);
    } else {
      setCalculatedCapacity(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    if (!monthlyBill || !phoneNumber || !calculatedCapacity) {
      setStatus("Please enter a valid bill and phone number.");
      setIsSubmitting(false);
      return;
    }

    try {
      setButtonText("Sending...");
      // Simulated API call - replace with your actual API
      setTimeout(() => {
        setStatus("Your request has been sent! We'll contact you soon.");
        setButtonText("Sent!");
        setMonthlyBill("");
        setPhoneNumber("");
        setCalculatedCapacity(null);
        setTimeout(() => setButtonText("Get Free Consultation"), 3000);
        setIsSubmitting(false);
      }, 1500);
    } catch (err) {
      setStatus("Failed to send request. Please try again later.");
      setButtonText("Get Free Consultation");
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Save Money",
      desc: "Reduce bills by 100%",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Leaf,
      title: "Go Green",
      desc: "Clean renewable energy",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Shield,
      title: "Reliable Power",
      desc: "25-year performance warranty",
      gradient: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <section id="calculator" className="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/60 to-orange-300/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-orange-100/50 to-orange-200/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-300/40 to-orange-400/40 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-300/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Calculator */}
            <div className="order-2 lg:order-1">
              <div className="relative group max-w-lg mx-auto">
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-200/60 via-orange-100/40 to-orange-200/60 rounded-3xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                {/* Main Calculator Card */}
                <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-8 border border-orange-500/30 shadow-2xl backdrop-blur-sm">
                  
                  {/* Header Section */}
                  <div className="text-center mb-8">
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-orange-500/30 blur-2xl rounded-full scale-150"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                        <Sun className="w-8 h-8 text-white animate-spin" style={{ animationDuration: "8s" }} />
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent mb-3">
                      Calculate Solar Needs
                    </h2>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Get instant capacity recommendations
                    </p>
                  </div>

                  {/* Form Container with Fixed Height */}
                  <div className="space-y-6">
                    
                    {/* Monthly Bill Input */}
                    <div>
                      <label className="block text-orange-300 font-semibold mb-3 text-base flex items-center">
                        <Calculator className="w-5 h-5 mr-3" />
                        Monthly Electricity Bill
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 font-bold text-lg pointer-events-none z-10">
                          ₹
                        </span>
                        <input
                          type="number"
                          value={monthlyBill}
                          onChange={handleBillChange}
                          placeholder="Enter your monthly bill"
                          className="w-full pl-10 pr-4 py-4 bg-gray-800/60 border-2 border-orange-500/30 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 text-base backdrop-blur-sm hover:border-orange-400/50 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Fixed Height Container for Capacity Result */}
                    <div className="h-24 flex items-center justify-center">
                      {calculatedCapacity ? (
                        <div className={`w-full bg-gradient-to-r from-orange-500/20 to-orange-400/10 border-2 border-orange-400/40 rounded-xl p-4 backdrop-blur-sm transition-all duration-500 ${
                          isAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100"
                        }`}>
                          <div className="flex items-center justify-center space-x-4">
                            <Zap className="w-6 h-6 text-orange-400 animate-pulse flex-shrink-0" />
                            <div className="text-center flex-1">
                              <p className="text-orange-300 font-semibold text-sm mb-1">
                                Recommended Capacity
                              </p>
                              <p className="text-2xl font-bold text-white">
                                {calculatedCapacity} kW
                              </p>
                            </div>
                            <Sparkles className="w-6 h-6 text-orange-400 animate-pulse delay-150 flex-shrink-0" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-gray-500 text-sm italic">
                            Enter your monthly bill to see capacity
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Phone Number Input */}
                    <div>
                      <label className="block text-orange-300 font-semibold mb-3 text-base flex items-center">
                        <Phone className="w-5 h-5 mr-3" />
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 font-bold text-sm pointer-events-none z-10">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Enter your phone number"
                          className="w-full pl-14 pr-4 py-4 bg-gray-800/60 border-2 border-orange-500/30 rounded-xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 text-base backdrop-blur-sm hover:border-orange-400/50 focus:outline-none"
                          pattern="[0-9]{10}"
                          maxLength="10"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl group-hover:scale-105 transition-transform duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/20 to-orange-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 text-base group-hover:shadow-xl group-hover:shadow-orange-500/25">
                        <span className="truncate">{buttonText}</span>
                        {!isSubmitting && <ArrowRight className="w-5 h-5 flex-shrink-0" />}
                        {isSubmitting && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin flex-shrink-0"></div>}
                      </div>
                    </button>

                    {/* Status Message */}
                    <div className="h-8 flex items-center justify-center">
                      {status && (
                        <p className="text-center text-sm text-gray-300 animate-fade-in">
                          {status}
                        </p>
                      )}
                    </div>

                    {/* Trust Indicators */}
                    {/* <div className="text-center pt-4 border-t border-gray-700/50">
                      <p className="text-gray-400 text-xs leading-relaxed">
                        ✨ Personalized solutions • Zero down payment • 25-year warranty
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Benefits Cards */}
              <div className="space-y-6">
                {benefits.map((benefit, idx) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={idx} className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-200/40 to-orange-300/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      <div className="relative bg-white/90 backdrop-blur-sm border border-orange-100 rounded-2xl p-6 hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100/50 group-hover:transform group-hover:scale-105">
                        <div className="flex items-start space-x-5">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                              {benefit.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                              {benefit.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100/80 rounded-2xl p-6 border border-orange-200/60 shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-orange-600">5000+</div>
                    <div className="text-xs text-gray-600 leading-tight">Happy Customers</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-orange-600">25</div>
                    <div className="text-xs text-gray-600 leading-tight">Year Warranty</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-orange-600">upto 100%</div>
                    <div className="text-xs text-gray-600 leading-tight">Bill Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
    </section>
  );
};

export default SolarCalculator;