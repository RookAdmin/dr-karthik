import React from 'react';
import { Heart, Users, Microscope, Clock } from 'lucide-react';

const Approach = () => {
  const approaches = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to your unique needs, lifestyle, and health goals.",
      color: "red"
    },
    {
      icon: Users,
      title: "Compassionate Treatment",
      description: "We believe in treating patients with empathy, respect, and understanding throughout their journey.",
      color: "blue"
    },
    {
      icon: Microscope,
      title: "Modern Medical Techniques",
      description: "Utilizing the latest medical advances and evidence-based treatments for optimal outcomes.",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Comprehensive Follow-up",
      description: "Continuous monitoring and support to ensure long-term health and treatment success.",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: { bg: "bg-red-100", text: "text-red-600" },
      blue: { bg: "bg-blue-100", text: "text-blue-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600" },
      teal: { bg: "bg-teal-100", text: "text-teal-600" }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine modern medical expertise with compassionate care to deliver personalized treatment plans that address your individual health needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {approaches.map((approach, index) => {
            const colors = getColorClasses(approach.color);
            const IconComponent = approach.icon;
            
            return (
              <div key={index} className="text-center group">
                <div className={`${colors.bg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-10 w-10 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Care?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Personalized Treatment Plans:</strong> Every patient receives a customized approach based on their specific condition and lifestyle.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Evidence-Based Medicine:</strong> All treatments are backed by the latest medical research and proven methodologies.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Holistic Health Focus:</strong> We address not just symptoms but overall health and wellness for long-term success.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700"><strong>Ongoing Support:</strong> Continuous care and monitoring to ensure optimal health outcomes.</p>
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