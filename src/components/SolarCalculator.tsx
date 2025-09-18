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

    // check fields
    if (!monthlyBill || !phoneNumber || !calculatedCapacity) {
      setStatus("❌ Please enter a valid bill and phone number.");
      setIsSubmitting(false);
      return;
    }

    try {
      setButtonText("Sending...");
      const res = await fetch( `${import.meta.env.VITE_API_URL}/api/send-inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phoneNumber,
          monthlyBill: monthlyBill,
          calculatedCapacity: calculatedCapacity,
        }),
      });

      if (res.ok) {
        setStatus("✅ Your request has been sent! We'll contact you soon.");
        setButtonText("Sent!");
        setMonthlyBill("");
        setPhoneNumber("");
        setCalculatedCapacity(null);

        // reset button text after 3 sec
        setTimeout(() => setButtonText("Get Free Consultation"), 3000);
      } else {
        const errorData = await res.json();
        setStatus("❌ " + errorData.error);
        setButtonText("Get Free Consultation");
      }
    } catch (err) {
      setStatus("❌ Failed to send request. Please try again later.");
      setButtonText("Get Free Consultation");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Save Money",
      desc: "Reduce bills by up to 90%",
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
    <section id="calculator">
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full blur-2xl opacity-40"></div>
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Calculator */}
            <div className="relative order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>

                <div className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-3xl p-8 border border-orange-200 shadow-2xl backdrop-blur-sm">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="relative inline-block mb-4">
                      <div className="absolute inset-0 bg-orange-500/30 blur-xl rounded-full"></div>
                      <Sun
                        className="relative w-16 h-16 text-orange-400 mx-auto animate-spin"
                        style={{ animationDuration: "8s" }}
                      />
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent mb-2">
                      Calculate Your Solar Needs
                    </h2>
                    <p className="text-gray-300 text-lg">
                      Get instant solar capacity recommendations
                    </p>
                  </div>

                  {/* Calculator Form */}
                  <div className="space-y-6">
                    {/* Monthly Bill */}
                    <div>
                      <label className="block text-orange-300 font-semibold mb-3 text-lg flex items-center">
                        <Calculator className="w-5 h-5 mr-2" />
                        Monthly Electricity Bill
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 font-bold text-xl">
                          ₹
                        </span>
                        <input
                          type="number"
                          value={monthlyBill}
                          onChange={handleBillChange}
                          placeholder="Enter your monthly bill"
                          className="w-full pl-10 pr-4 py-4 bg-gray-800/50 border-2 border-orange-500/30 rounded-2xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 text-lg backdrop-blur-sm hover:border-orange-400/50"
                          required
                        />
                      </div>
                    </div>

                    {/* Capacity */}
                    {calculatedCapacity && (
                      <div
                        className={`bg-gradient-to-r from-orange-500/20 to-orange-400/10 border-2 border-orange-400/30 rounded-2xl p-6 backdrop-blur-sm transform transition-all duration-500 ${
                          isAnimating
                            ? "scale-95 opacity-50"
                            : "scale-100 opacity-100"
                        }`}
                      >
                        <div className="flex items-center justify-center space-x-4">
                          <Zap className="w-8 h-8 text-orange-400 animate-pulse" />
                          <div className="text-center">
                            <p className="text-orange-300 font-semibold text-lg mb-1">
                              Recommended Capacity
                            </p>
                            <p className="text-3xl font-bold text-white">
                              {calculatedCapacity} kW
                            </p>
                          </div>
                          <Sparkles className="w-8 h-8 text-orange-400 animate-pulse delay-150" />
                        </div>
                      </div>
                    )}

                    {/* Phone Input */}
                    <div>
                      <label className="block text-orange-300 font-semibold mb-3 text-lg flex items-center">
                        <Phone className="w-5 h-5 mr-2" />
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 font-bold">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Enter your phone number"
                          className="w-full pl-16 pr-4 py-4 bg-gray-800/50 border-2 border-orange-500/30 rounded-2xl text-white placeholder-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 text-lg backdrop-blur-sm hover:border-orange-400/50"
                          pattern="[0-9]{10}"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl transition-transform duration-300 group-hover:scale-105"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-white/20 to-orange-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 text-lg group-hover:shadow-2xl group-hover:shadow-orange-500/25">
                        <span>{buttonText}</span>
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </button>

                    {/* Status */}
                    {status && (
                      <p className="text-center text-sm mt-4 text-gray-300">
                        {status}
                      </p>
                    )}

                    <div className="text-center mt-6">
                      <p className="text-gray-400 text-sm">
                        ✨ Personalized solutions • Zero down payment • 25-year
                        warranty
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                {benefits.map((benefit, idx) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={idx} className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-200 to-orange-300 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-300 blur-sm"></div>
                      <div className="relative bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-8 hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100/50">
                        <div className="flex items-start space-x-6">
                          <div
                            className={`p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-lg`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {benefit.title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {benefit.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      5000+
                    </div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      25
                    </div>
                    <div className="text-sm text-gray-600">Year Warranty</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      90%
                    </div>
                    <div className="text-sm text-gray-600">Bill Reduction</div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Right */}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SolarCalculator;
