import React from 'react';
import { Sparkles, Star, Zap, Shield, Calendar, ArrowRight, CheckCircle, Heart, Award, Palette } from 'lucide-react';

const SkinCarePage = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const conditions = [
    {
      icon: Sparkles,
      title: "Skin Discoloration",
      description: "Treatment for uneven skin tone, dark spots, and pigmentation issues"
    },
    {
      icon: Zap,
      title: "Acne & Infections",
      description: "Comprehensive care for acne, rashes, and various skin infections"
    },
    {
      icon: Star,
      title: "Hyperpigmentation",
      description: "Advanced treatments for melasma, age spots, and skin dullness"
    },
    {
      icon: Shield,
      title: "Diabetic Skin Issues",
      description: "Specialized care for skin problems related to diabetes and circulation"
    }
  ];

  const whiteningServices = [
    "Safe and proven medical-grade whitening treatments",
    "Customized brightening solutions for face, hands, and neck",
    "Long-term maintenance and care plans",
    "Combination therapy for optimal results",
    "Post-treatment care and monitoring",
    "Skin health assessment and preparation"
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Medical-Grade Treatments",
      description: "Only FDA-approved, clinically proven treatments for safe and effective results"
    },
    {
      icon: Heart,
      title: "Personalized Approach",
      description: "Tailored skincare plans based on your unique skin type and medical history"
    },
    {
      icon: Star,
      title: "Results-Driven Care",
      description: "Focused on achieving visible improvements with ongoing support and monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Advanced <span className="text-purple-600">Skin Care</span> & <span className="text-pink-600">Whitening</span> Treatments
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your skin with expert care. We provide targeted treatments for common skin concerns and advanced whitening solutions for radiant, healthy skin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={scrollToConsultation}
                  className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Skin Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="tel:+1234567890"
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
                >
                  Call for Consultation
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Medical-Grade</p>
                    <p className="text-sm text-gray-600">Treatments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Sparkles className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Safe</p>
                    <p className="text-sm text-gray-600">Whitening</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Personalized</p>
                    <p className="text-sm text-gray-600">Care Plans</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Skin care treatment"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional Skin Care</h3>
                    <p className="text-purple-600 font-semibold mb-4">Advanced Dermatological Treatments</p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>Skin Whitening</span>
                      <span>•</span>
                      <span>Acne Treatment</span>
                      <span>•</span>
                      <span>Anti-Aging</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg">
                  <Sparkles className="h-8 w-8" />
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
                Comprehensive skin care solutions for a wide range of dermatological concerns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {conditions.map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-purple-600" />
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

      {/* Skin Whitening Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Professional Skin Whitening Services</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Achieve the radiant, even-toned skin you've always wanted with our safe, medical-grade whitening treatments.
                </p>
                
                <div className="space-y-4">
                  {whiteningServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-purple-600 rounded-full p-1 mt-1 flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Skin whitening treatment"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Treatment Process</h2>
              <p className="text-xl text-gray-600">
                A systematic approach to achieving your skin goals safely and effectively
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Consultation</h3>
                <p className="text-gray-600 text-sm">Comprehensive skin assessment and treatment planning</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Preparation</h3>
                <p className="text-gray-600 text-sm">Skin preparation and pre-treatment care instructions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Treatment</h3>
                <p className="text-gray-600 text-sm">Professional application of medical-grade treatments</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Follow-up</h3>
                <p className="text-gray-600 text-sm">Ongoing monitoring and maintenance care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Skin Care Services</h2>
              <p className="text-xl text-gray-600">
                Experience the difference that medical expertise makes in achieving beautiful, healthy skin
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-10 w-10 text-purple-600" />
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Glow with Confidence</h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Transform your skin with our expert care. Book your personalized skin consultation and discover the treatments that are right for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Your Skin Consultation Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-center"
              >
                Call for Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkinCarePage;