import React from 'react';
import { Heart, Users, Microscope, Clock } from 'lucide-react';

const Approach = () => {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">OUR APPROACH</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Medical <span className="text-blue-600">Approach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine modern medical expertise with compassionate care to deliver personalized treatment plans that address your individual health needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="bg-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
              <Heart className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Patient-Centered Care</h3>
            <p className="text-gray-600 leading-relaxed">Every treatment plan is tailored to your unique needs, lifestyle, and health goals.</p>
          </div>

          <div className="text-center group">
            <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <Users className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Compassionate Treatment</h3>
            <p className="text-gray-600 leading-relaxed">We believe in treating patients with empathy, respect, and understanding throughout their journey.</p>
          </div>

          <div className="text-center group">
            <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <Microscope className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Medical Techniques</h3>
            <p className="text-gray-600 leading-relaxed">Utilizing the latest medical advances and evidence-based treatments for optimal outcomes.</p>
          </div>

          <div className="text-center group">
            <div className="bg-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
              <Clock className="h-10 w-10 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Follow-up</h3>
            <p className="text-gray-600 leading-relaxed">Continuous monitoring and support to ensure long-term health and treatment success.</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Care?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed"><strong>Personalized Treatment Plans:</strong> Every patient receives a customized approach based on their specific condition and lifestyle.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed"><strong>Evidence-Based Medicine:</strong> All treatments are backed by the latest medical research and proven methodologies.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed"><strong>Holistic Health Focus:</strong> We address not just symptoms but overall health and wellness for long-term success.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed"><strong>Ongoing Support:</strong> Continuous care and monitoring to ensure optimal health outcomes.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern medical consultation"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;