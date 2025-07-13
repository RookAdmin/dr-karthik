import React from 'react';
import { Activity, Heart, Target, TrendingUp, Calendar, ArrowRight, CheckCircle, AlertTriangle, Award, Stethoscope } from 'lucide-react';

const DiabetesManagementPage = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const conditions = [
    {
      icon: Activity,
      title: "Type 1 & Type 2 Diabetes",
      description: "Comprehensive management for both insulin-dependent and non-insulin-dependent diabetes"
    },
    {
      icon: TrendingUp,
      title: "Uncontrolled Blood Sugar Levels",
      description: "Specialized care for patients struggling with glucose control and HbA1c management"
    },
    {
      icon: AlertTriangle,
      title: "Diabetes-Related Complications",
      description: "Prevention and treatment of vision, kidney, nerve, and cardiovascular complications"
    }
  ];

  const services = [
    "Personalized diabetes treatment plans tailored to your lifestyle",
    "Comprehensive medication and insulin management",
    "Nutritional counseling and diet planning",
    "Blood glucose monitoring and HbA1c tracking",
    "Lifestyle modification guidance",
    "Routine monitoring and follow-up appointments",
    "Diabetic foot screening and care",
    "Complication prevention strategies"
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "11+ Years of Experience",
      description: "Extensive expertise in managing complex diabetes cases with proven results"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Consistent success in stabilizing blood sugar levels and preventing complications"
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Compassionate approach focusing on your individual needs and health goals"
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
                Expert <span className="text-teal-600">Diabetes</span> Management & Care
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Take control of your diabetes with personalized treatment plans. Our comprehensive approach helps you achieve optimal blood sugar control and prevent complications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={scrollToConsultation}
                  className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Diabetes Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="tel:+1234567890"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 text-center"
                >
                  Call for Urgent Care
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">11+ Years</p>
                    <p className="text-sm text-gray-600">Diabetes Expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Proven</p>
                    <p className="text-sm text-gray-600">Results</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Personalized</p>
                    <p className="text-sm text-gray-600">Treatment Plans</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Diabetes management consultation"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Comprehensive Diabetes Care</h3>
                    <p className="text-teal-600 font-semibold mb-4">Advanced Treatment & Monitoring</p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>Blood Sugar Control</span>
                      <span>•</span>
                      <span>Lifestyle Guidance</span>
                      <span>•</span>
                      <span>Complication Prevention</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-teal-600 text-white p-4 rounded-full shadow-lg">
                  <Activity className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Treat</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive diabetes care addressing all aspects of the condition and its complications
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {conditions.map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{condition.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{condition.description}</p>
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
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Diabetes Services Include</h2>
              <p className="text-xl text-gray-600">
                Comprehensive care designed to help you achieve optimal blood sugar control and prevent complications
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

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Diabetes Care</h2>
              <p className="text-xl text-gray-600">
                Experience the difference that specialized, compassionate diabetes management can make
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-10 w-10 text-blue-600" />
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Manage Your Diabetes Effectively?</h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Don't let diabetes control your life. Take the first step towards better health with our expert diabetes management program.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Your Consultation Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 text-center"
              >
                Call Now for Urgent Care
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiabetesManagementPage;