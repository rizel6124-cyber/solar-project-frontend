import { useState } from 'react';
import { Calculator, Phone, Zap } from 'lucide-react';

const SolarCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [calculatedCapacity, setCalculatedCapacity] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateCapacity = () => {
    const bill = parseFloat(monthlyBill);
    if (bill > 0) {
      const dailyUnits = (bill / 9) / 30;
      const capacity = Math.ceil(dailyUnits / 4);
      setCalculatedCapacity(capacity);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || !calculatedCapacity) return;
    
    setIsSubmitting(true);
    
    // Here you would integrate SMTP.js for email sending
    // For now, we'll simulate the submission
    setTimeout(() => {
      alert(`Thank you! Your inquiry has been submitted. We'll contact you at ${phoneNumber} regarding your ${calculatedCapacity}kW solar requirement.`);
      setIsSubmitting(false);
      setMonthlyBill('');
      setPhoneNumber('');
      setCalculatedCapacity(null);
    }, 1000);
  };

  return (
    <section id="calculator" className="section-padding bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Estimate Your Solar Requirement
          </h2>
          <p className="text-lg text-muted-foreground">
            Calculate the perfect solar system size for your home in seconds
          </p>
        </div>

        <div className="card-solar max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Solar Capacity Calculator</h3>
          </div>

          <div className="space-y-6">
            {/* Bill Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Average Monthly Electricity Bill (₹)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">₹</span>
                <input
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(e.target.value)}
                  onBlur={calculateCapacity}
                  placeholder="Enter your monthly bill amount"
                  className="w-full pl-8 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Result Display */}
            {calculatedCapacity && (
              <div className="bg-orange-50 border border-orange-500/20 rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-lg font-semibold text-foreground">
                      You need approximately <span className="text-primary">{calculatedCapacity} kW</span> capacity
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Based on your monthly bill of ₹{monthlyBill}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Phone Input and Submit */}
            {calculatedCapacity && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number for Free Consultation
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your phone number"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Free Consultation'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <p className="text-primary font-medium">
            💡 Get up to ₹78,000 subsidy under PM Surya Ghar Yojana
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            We're a registered vendor and will help you claim maximum benefits
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;