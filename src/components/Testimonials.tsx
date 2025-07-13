import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 45,
      condition: "Diabetes Management",
      rating: 5,
      text: "Dr. Karthick transformed my diabetes management completely. His personalized approach and continuous monitoring helped me achieve better blood sugar control than I've had in years. Highly recommended!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Chen",
      age: 52,
      condition: "Diabetic Foot Care",
      rating: 5,
      text: "I was struggling with diabetic foot ulcers for months. Dr. Karthick's expert care and advanced treatment methods healed my condition completely. His knowledge in podiatry is exceptional.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Priya Sharma",
      age: 38,
      condition: "Skin Treatment",
      rating: 5,
      text: "The skin whitening treatment I received exceeded my expectations. Dr. Karthick explained every step of the process and the results were amazing. Very professional and caring doctor.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Robert Williams",
      age: 60,
      condition: "General Healthcare",
      rating: 5,
      text: "Dr. Karthick provides comprehensive care that goes beyond just treating symptoms. He takes time to understand your lifestyle and creates treatment plans that actually work. Excellent doctor!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Patient Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our patients about their experience with Dr. Karthick Palanisamy's compassionate and expert medical care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">Age {testimonial.age}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-4">
                <Quote className="h-6 w-6 text-teal-600 opacity-50 absolute -top-2 -left-1" />
                <p className="text-gray-700 text-sm leading-relaxed pl-6">{testimonial.text}</p>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs text-teal-600 font-semibold uppercase tracking-wide">
                  {testimonial.condition}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-teal-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Satisfied Patients</h3>
            <p className="text-gray-600 mb-6">
              Experience the difference that personalized, compassionate medical care can make in your health journey.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('consultation');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors"
            >
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;