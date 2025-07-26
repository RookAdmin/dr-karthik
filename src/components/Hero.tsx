import React from 'react';
import { Calendar, Award, Heart, ArrowRight, MapPin, Play } from 'lucide-react';

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
    <section id="home" className="relative bg-white overflow-hidden">
      {/* Background with soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-blue-100/80"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                  Transforming Lives,<br />
                  <span className="text-blue-600">Restoring Your Health</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Embrace a world of comprehensive healthcare where your well-being takes center stage. 
                  At our clinic, we're dedicated to providing you with personalized and compassionate medical services.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToConsultation}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Play className="h-5 w-5" />
                  <span>Learn More</span>
                </button>
              </div>

              {/* Location finder card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">FIND A LOCATION NEARBY</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Our medical center operates with multiple locations. Find the nearest clinic to you.
                    </p>
                    <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Medical Team Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical team - Dr. Karthick Palanisamy and healthcare professionals"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
              <div className="absolute top-20 -right-4 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              <div className="absolute bottom-20 -left-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;