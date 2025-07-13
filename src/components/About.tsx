import React from 'react';
import { GraduationCap, Award, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Dr. Karthick Palanisamy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare with over a decade of experience in diabetes management, podiatry, and skin care
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Dr. Karthick in clinic"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Expertise & Experience</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 11 years of dedicated practice, Dr. Karthick Palanisamy has established himself as a leading expert in diabetes care and podiatry. His comprehensive approach combines cutting-edge medical techniques with compassionate patient care.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Educational Background</h4>
                  <p className="text-gray-600">Advanced medical degree with specialized training in endocrinology and podiatric medicine</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Areas of Specialization</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Diabetes Management & Prevention</li>
                    <li>• Diabetic Foot Care & Ulcer Treatment</li>
                    <li>• Comprehensive Wound Healing</li>
                    <li>• Advanced Skin Care Treatments</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Research Interests</h4>
                  <p className="text-gray-600">Focused on innovative diabetes treatment protocols and advanced foot ulcer care methodologies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Patient Philosophy</h4>
                  <p className="text-gray-600">Believes in treating each patient as an individual, providing personalized care plans tailored to their specific needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;