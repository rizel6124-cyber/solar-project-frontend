import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Instagram, MessageCircle, Clock, User, Calendar, CheckCircle, Star, Zap, ArrowRight, Globe, Award, Sun, Shield, Users, TrendingUp, X, Menu } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    roofArea: '',
    monthlyBill: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('quote');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '', email: '', phone: '', location: '',
        projectType: '', roofArea: '', monthlyBill: '', message: ''
      });
      
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: ["+91 89555 56986", "+91 96725 25744"],
      action: "Call Now",
      color: "from-orange-500 to-orange-600",
      href: "tel:+918955556986"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: ["rizelgroup@gmail.com"],
      action: "Send Email",
      color: "from-orange-400 to-orange-500",
      href: "mailto:rizelgroup@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      details: ["Near SBI Regional Office", "Parshuram Chauraha", "Udaipur, Rajasthan - 313002"],
      action: "Get Directions",
      color: "from-orange-600 to-orange-700",
      href: "#map"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      action: "Visit Us",
      color: "from-orange-500 to-orange-600",
      href: "#"
    }
  ];

  const services = [
    { name: "Free Site Survey & Consultation", icon: <Globe className="w-4 h-4" /> },
    { name: "Custom Solar System Design", icon: <Sun className="w-4 h-4" /> },
    { name: "Government Subsidy Processing", icon: <Award className="w-4 h-4" /> },
    { name: "Professional Installation", icon: <Shield className="w-4 h-4" /> },
    { name: "Maintenance & Support", icon: <Users className="w-4 h-4" /> },
    { name: "Net Metering Setup", icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "PMSGY Registered Vendor",
      description: "Maximum government subsidy up to ₹78,000",
      highlight: "Up to ₹78,000 Subsidy"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Top 10 Vendor in Rajasthan",
      description: "Recognized for quality and service excellence",
      highlight: "Top 10 Vendor"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "2500+ Successful Installations",
      description: "Proven track record across all sectors",
      highlight: "2500+ Happy Customers"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "24/7 Customer Support",
      description: "Always available for your solar needs",
      highlight: "24/7 Support"
    }
  ];

  const quickQuestions = [
    "What is the cost of solar panels?",
    "How much subsidy can I get?",
    "What is the installation timeline?",
    "Do you provide maintenance?"
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Enhanced Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Sun className="w-4 h-4 animate-spin" />
              Solar Energy Experts
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Contact
              <span className="block bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                Rizel Group
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Ready to harness the power of the sun? Get in touch with our solar experts for a
              free consultation and customized solar solution for your property.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 flex items-center gap-2"
              >
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                href="tel:+918955556986"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-right duration-300">
          <CheckCircle className="w-6 h-6" />
          <div>
            <p className="font-semibold">Thank you for your interest!</p>
            <p className="text-sm text-green-100">We'll contact you within 24 hours.</p>
          </div>
          <button 
            onClick={() => setShowSuccess(false)}
            className="ml-2 hover:bg-green-600 rounded-lg p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Enhanced Quick Contact Info */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400">Multiple ways to reach our solar experts</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.href} className="group block">
                <div className="relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-10 rounded-2xl group-hover:opacity-20 transition-all duration-300`}></div>
                  <div className="relative p-6 border border-gray-800 rounded-2xl group-hover:border-orange-500/50 transition-all duration-300 h-full transform group-hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-400 text-sm leading-relaxed">{detail}</p>
                      ))}
                    </div>
                    <div className="flex items-center text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors duration-300">
                      {info.action} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Main Contact Section */}
      <section className="py-20 bg-black" id="contact-form">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Enhanced Contact Form */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-3xl"></div>
                <div className="relative p-8 lg:p-12 border border-gray-800 rounded-3xl backdrop-blur-sm">
                  {/* Tab Navigation */}
                  <div className="flex mb-8 bg-gray-900 rounded-xl p-1">
                    <button
                      onClick={() => setActiveTab('quote')}
                      className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === 'quote' 
                          ? 'bg-orange-500 text-white shadow-lg' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Get Quote
                    </button>
                    <button
                      onClick={() => setActiveTab('support')}
                      className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeTab === 'support' 
                          ? 'bg-orange-500 text-white shadow-lg' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Support
                    </button>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {activeTab === 'quote' ? 'Get Your Free Solar Quote' : 'Technical Support'}
                    </h2>
                    <p className="text-gray-400 text-lg">
                      {activeTab === 'quote' 
                        ? 'Fill out the form below and our solar experts will contact you within 24 hours with a personalized quote and consultation.'
                        : 'Need help with your existing solar system? Our technical team is here to assist you.'
                      }
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-white">
                          Your Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
                          placeholder="e.g., Udaipur, Rajasthan"
                        />
                      </div>
                    </div>

                    {/* Project Information - Only for Quote tab */}
                    {activeTab === 'quote' && (
                      <div>
                        <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center gap-2">
                          <Sun className="w-5 h-5 text-orange-500" />
                          Project Details
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-white">
                              Project Type
                            </label>
                            <select
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleChange}
                              className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 appearance-none cursor-pointer"
                            >
                              <option value="">Select a type</option>
                              <option value="Residential">🏠 Residential</option>
                              <option value="Commercial">🏢 Commercial</option>
                              <option value="Industrial">🏭 Industrial</option>
                              <option value="Agricultural">🌾 Agricultural</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-white">
                              Roof Area (sq. ft.)
                            </label>
                            <input
                              type="number"
                              name="roofArea"
                              value={formData.roofArea}
                              onChange={handleChange}
                              className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
                              placeholder="e.g., 500"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-white">
                              Monthly Bill (₹)
                            </label>
                            <input
                              type="number"
                              name="monthlyBill"
                              value={formData.monthlyBill}
                              onChange={handleChange}
                              className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-600"
                              placeholder="e.g., 2500"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-white">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 hover:border-gray-600 resize-none"
                        placeholder={activeTab === 'quote' ? "Tell us about your project or ask any questions." : "Describe the technical issue you're facing."}
                      ></textarea>
                    </div>

                    {/* Quick Questions */}
                    {activeTab === 'quote' && (
                      <div>
                        <p className="text-sm font-medium text-white mb-3">Quick questions you might add:</p>
                        <div className="flex flex-wrap gap-2">
                          {quickQuestions.map((question, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setFormData({...formData, message: formData.message + (formData.message ? '\n' : '') + question})}
                              className="text-xs px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                            >
                              + {question}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Enhanced Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl" />
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            {activeTab === 'quote' ? 'Get My Free Quote' : 'Submit Support Request'}
                          </>
                        )}
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-orange-500" />
                  Why Choose Us
                </h3>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-start gap-4 p-6 bg-gray-900 rounded-2xl border border-gray-800 group-hover:border-orange-500/30 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-lg font-bold text-white">{item.title}</h4>
                            <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                              {item.highlight}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Services List */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-orange-500" />
                  Our Services
                </h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300 group">
                      <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                        {service.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-orange-100 mb-4 text-sm">Our solar experts are standing by to assist you.</p>
                <div className="space-y-3">
                  <a href="tel:+918955556986" className="flex items-center gap-3 bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">Call Now</p>
                      <p className="text-sm text-orange-100">+91 89555 56986</p>
                    </div>
                  </a>
                  <a href="https://wa.me/918955556986" className="flex items-center gap-3 bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-all duration-300">
                    <MessageCircle className="w-5 h-5" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-orange-100">Quick responses</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Social Media & Map */}
      <section className="py-20 bg-gray-900" id="map">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Visit Our Office</h2>
            <p className="text-gray-400 text-lg">Connect with us online and find our physical location</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden aspect-video shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.412497880991!2d73.70889981440268!3d24.57790898421831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39634e56d7f0b543%3A0x629524b07c87c24a!2sRizel%20Group!5e0!3m2!1sen!2sin!4v1628177402868!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Follow Us Online</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 group">
                    <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="#" className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 group">
                    <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                  <a href="https://wa.me/918955556986" className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 group">
                    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-white mb-3">Office Address</h4>
                <div className="space-y-2 text-gray-400">
                  <p>Near SBI Regional Office</p>
                  <p>Parshuram Chauraha</p>
                  <p>Udaipur, Rajasthan - 313002</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;