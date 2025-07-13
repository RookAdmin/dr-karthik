import React from 'react';
import { Calendar, Award, Heart, ArrowRight } from 'lucide-react';

interface HeroProps {
  setCurrentPage?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Expert in <span className="text-teal-600">Diabetes Care</span> & <span className="text-blue-600">Podiatry</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Providing compassionate, personalized healthcare with 11+ years of experience in diabetes management, foot care, and skin treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToConsultation}
                className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule a Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:+1234567890"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 text-center"
              >
                Call Now
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">11+ Years</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Personalized</p>
                  <p className="text-sm text-gray-600">Care</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Compassionate</p>
                  <p className="text-sm text-gray-600">Treatment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Dr. Karthick Palanisamy"
                  className="w-full h-80 object-cover rounded-2xl mb-4"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Karthick Palanisamy</h3>
                  <p className="text-teal-600 font-semibold mb-4">MD, Diabetes & Podiatry Specialist</p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-600">
                    <span>Diabetes Care</span>
                    <span>•</span>
                    <span>Podiatry</span>
                    <span>•</span>
                    <span>Skin Treatments</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-teal-600 text-white p-4 rounded-full shadow-lg">
                <Award className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;