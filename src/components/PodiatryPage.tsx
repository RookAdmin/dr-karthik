import React from 'react';
import { Footprints, Shield, Heart, Zap, Calendar, ArrowRight, CheckCircle, AlertCircle, Award, Activity } from 'lucide-react';

const PodiatryPage = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const conditions = [
    {
      icon: AlertCircle,
      title: "Foot Ulcers",
      description: "Specialized treatment for diabetic and non-diabetic foot ulcers with advanced healing protocols"
    },
    {
      icon: Shield,
      title: "Infections and Wounds",
      description: "Expert care for foot infections, cuts, and wounds to prevent complications"
    },
    {
      icon: Zap,
      title: "Numbness & Tingling",
      description: "Treatment for diabetic neuropathy causing burning, numbness, or tingling sensations"
    },
    {
      icon: Heart,
      title: "Poor Circulation",
      description: "Management of circulation issues and swelling that affect foot health"
    }
  ];

  const services = [
    "Professional wound debridement and dressing",
    "Advanced ulcer management and healing protocols",
    "Custom footwear recommendations and fitting",
    "Comprehensive preventive foot examinations",
    "Diabetic foot screening and risk assessment",
    "Nail care and ingrown toenail treatment",
    "Callus and corn removal",
    "Foot infection treatment and prevention"
  ];

  const whyItMatters = [
    {
      title: "Prevents Serious Complications",
      description: "Early intervention reduces the risk of severe infections that could lead to amputation"
    },
    {
      title: "Faster Healing",
      description: "Specialized diabetic foot treatments promote quicker recovery and better outcomes"
    },
    {
      title: "Improved Quality of Life",
      description: "Proper foot care maintains mobility and independence for years to come"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Expert <span className="text-teal-600">Diabetic Foot</span> Care & <span className="text-blue-600">Podiatry</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Prevent serious complications from diabetic foot issues. Our specialized podiatry care ensures quick healing and better mobility for life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={scrollToConsultation}
                  className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Foot Care Appointment</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="tel:+1234567890"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 text-center"
                >
                  Call for Urgent Foot Care
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Specialized</p>
                    <p className="text-sm text-gray-600">Diabetic Care</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Advanced</p>
                    <p className="text-sm text-gray-600">Wound Healing</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Preventive</p>
                    <p className="text-sm text-gray-600">Approach</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Foot care examination"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional Foot Care</h3>
                    <p className="text-teal-600 font-semibold mb-4">Diabetic Foot Specialist</p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>Ulcer Treatment</span>
                      <span>•</span>
                      <span>Wound Healing</span>
                      <span>•</span>
                      <span>Prevention Care</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-teal-600 text-white p-4 rounded-full shadow-lg">
                  <Footprints className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Conditions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Common Conditions We Treat</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive foot care addressing the unique challenges faced by diabetic patients
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {conditions.map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                    <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">{condition.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{condition.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Podiatry Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive foot care services designed to maintain your mobility and prevent complications
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-teal-600 rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Diabetic Foot Care Matters</h2>
              <p className="text-xl text-gray-600">
                Understanding the critical importance of specialized foot care for diabetic patients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyItMatters.map((reason, index) => (
                <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 text-center">
                  <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-3">Important: Don't Wait for Problems to Worsen</h3>
                  <p className="text-red-700 leading-relaxed">
                    Diabetic foot complications can develop rapidly and become serious quickly. Early detection and treatment 
                    are crucial for preventing infections, ulcers, and other complications that could affect your mobility and quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Protect Your Feet, Protect Your Health</h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Don't let foot problems limit your mobility. Schedule your specialized foot care appointment and take the first step towards healthier feet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Your Foot Care Appointment Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 text-center"
              >
                Call for Urgent Foot Care
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodiatryPage;