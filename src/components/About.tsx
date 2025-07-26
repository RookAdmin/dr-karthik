import React from 'react';
import { GraduationCap, Award, Users, Heart, Star, Quote } from 'lucide-react';

const About = () => {
  return (
    <>
      {/* Testimonials and Ratings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* Left side - Images and Rating */}
            <div className="lg:col-span-7 space-y-6">
              {/* Top image */}
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Medical consultation"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
              
              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-6">
                {/* Testimonial card */}
                <div className="bg-purple-100 rounded-2xl p-6">
                  <Quote className="h-8 w-8 text-purple-600 mb-4" />
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    "I had a great experience at this healthcare clinic. I was seen quickly, 
                    and the doctor was able to diagnose and treat my condition very patiently."
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Walter White"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Walter White</p>
                      <p className="text-gray-600 text-xs">Head of Cardiology Department</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-1">
                      <button className="w-2 h-2 bg-gray-400 rounded-full"></button>
                      <button className="w-2 h-2 bg-purple-600 rounded-full"></button>
                    </div>
                  </div>
                </div>
                
                {/* Rating and compliance cards */}
                <div className="space-y-4">
                  {/* Google Rating */}
                  <div className="bg-green-100 rounded-2xl p-6 text-center">
                    <p className="text-gray-600 text-xs uppercase tracking-wide mb-2">AVERAGE GOOGLE RATINGS</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="h-6 w-6 text-green-600 fill-current" />
                      <span className="text-3xl font-bold text-gray-900">4.9</span>
                    </div>
                  </div>
                  
                  {/* Compliance card */}
                  <div className="bg-gray-100 rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-blue-600 p-2 rounded-lg">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600 text-xs uppercase tracking-wide">HIPAA COMPLIANT</p>
                        <p className="font-semibold text-gray-900 text-sm">We provide award-winning quality care</p>
                      </div>
                    </div>
                    <button className="text-blue-600 text-xs font-semibold hover:text-blue-700 transition-colors">
                      → Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Large medical image */}
            <div className="lg:col-span-5">
              <img 
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Medical team in surgery"
                className="w-full h-full object-cover rounded-2xl min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">WHY CHOOSE US</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              We Are Different To <span className="text-blue-600">Protect</span><br />
              <span className="text-gray-900">Your Health</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Not Just Better Care, But A Better Experience
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At our medical center, we believe in providing not just better care but a better experience overall. 
                We understand that your journey to health matters.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-1 mx-auto">
                <span>Learn More</span>
                <span>→</span>
              </button>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Serving All People Through Exemplary Care
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At our medical center, we believe in providing not just better care but a better experience overall. 
                We understand that your journey to health matters.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-1 mx-auto">
                <span>Learn More</span>
                <span>→</span>
              </button>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Specialty Medicine with Compassion and Care
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At our medical center, we believe in providing not just better care but a better experience overall. 
                We understand that your journey to health matters.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-1 mx-auto">
                <span>Learn More</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;