import React from 'react';
import { Stethoscope, Heart, Shield, Clock, Calendar, ArrowRight, CheckCircle, AlertTriangle, Award, Activity } from 'lucide-react';

const GeneralHealthcarePage = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const conditions = [
    {
      icon: Stethoscope,
      title: "Common Illnesses",
      description: "Treatment for fever, flu, infections, and other acute medical conditions"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Health Issues",
      description: "Urgent care for non-life-threatening emergencies and acute health problems"
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Comprehensive wellness checkups and health screening programs"
    },
    {
      icon: Heart,
      title: "Chronic Conditions",
      description: "Ongoing management of hypertension, arthritis, and other chronic diseases"
    }
  ];

  const services = [
    "Comprehensive physical examinations",
    "Acute illness diagnosis and treatment",
    "Chronic disease management and monitoring",
    "Preventive health screenings",
    "Vaccination and immunization services",
    "Health risk assessments",
    "Laboratory test coordination",
    "Specialist referrals when needed",
    "Health education and counseling",
    "Emergency consultation services"
  ];

  const whyTrustUs = [
    {
      icon: Clock,
      title: "Quick & Accurate Diagnosis",
      description: "Efficient evaluation and treatment to get you back to optimal health quickly"
    },
    {
      icon: Stethoscope,
      title: "11 Years of Experience",
      description: "Extensive experience in handling diverse health issues across all age groups"
    },
    {
      icon: Heart,
      title: "Long-term Health Focus",
      description: "Emphasis on sustainable health improvement and preventive care strategies"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Comprehensive <span className="text-green-600">General</span> Healthcare <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From routine checkups to emergency care, Dr. Karthick offers dependable general medical services for your entire family's health and wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={scrollToConsultation}
                  className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book General Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="tel:+1234567890"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 text-center"
                >
                  Call for Urgent Care
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">11+ Years</p>
                    <p className="text-sm text-gray-600">Medical Experience</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Preventive</p>
                    <p className="text-sm text-gray-600">Healthcare Focus</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Family</p>
                    <p className="text-sm text-gray-600">Healthcare</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="General healthcare consultation"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Complete Healthcare Solutions</h3>
                    <p className="text-green-600 font-semibold mb-4">General Medicine & Family Care</p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>Preventive Care</span>
                      <span>•</span>
                      <span>Emergency Care</span>
                      <span>•</span>
                      <span>Health Screenings</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-full shadow-lg">
                  <Stethoscope className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Conditions We Treat</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive medical care for a wide range of health conditions and concerns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {conditions.map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-green-600" />
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
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Healthcare Services</h2>
              <p className="text-xl text-gray-600">
                Complete medical care designed to keep you and your family healthy
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-600 rounded-full p-1 mt-1 flex-shrink-0">
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

      {/* Preventive Care Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Focus on Preventive Care</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Prevention is always better than cure. Our comprehensive preventive care programs help you stay healthy and catch potential issues early.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Regular Health Screenings</h3>
                      <p className="text-gray-600">Comprehensive checkups to detect health issues before they become serious problems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Lifestyle Counseling</h3>
                      <p className="text-gray-600">Personalized guidance on diet, exercise, and lifestyle modifications for optimal health</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                      <Stethoscope className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Early Intervention</h3>
                      <p className="text-gray-600">Prompt treatment of health concerns to prevent complications and ensure better outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Preventive healthcare"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Patients Trust Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Patients Trust Our Care</h2>
              <p className="text-xl text-gray-600">
                Experience healthcare that puts your needs first with personalized, compassionate medical care
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyTrustUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Care Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-3">Emergency Care Available</h3>
                  <p className="text-red-700 leading-relaxed mb-4">
                    We provide urgent care for non-life-threatening emergencies. For severe emergencies, 
                    please call 911 or visit your nearest emergency room immediately.
                  </p>
                  <p className="text-red-600 font-semibold">
                    Call us at <a href="tel:+1234567890" className="underline">+1 (234) 567-8900</a> for urgent medical concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Stay Healthy with Expert Support</h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Your health is your most valuable asset. Partner with us for comprehensive medical care that keeps you feeling your best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Your General Consultation Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 text-center"
              >
                Call for Urgent Care
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralHealthcarePage;