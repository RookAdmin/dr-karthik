import React from 'react';
import { HelpCircle, BookOpen, Calendar, ArrowRight, User, Clock, Tag, ChevronRight, MessageCircle, Phone, Award, Shield, Heart } from 'lucide-react';

const PatientResourcesPage = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "What is the best way to manage uncontrolled diabetes?",
      answer: "A personalized plan involving medication, lifestyle changes, and regular monitoring can help control blood sugar levels effectively. This includes proper diet management, regular exercise, consistent medication schedules, and frequent blood glucose monitoring. Our comprehensive diabetes management program addresses all these aspects with individualized care plans."
    },
    {
      question: "How do I know if I have a diabetic foot ulcer?",
      answer: "Look for signs like wounds that don't heal, discoloration, swelling, or numbness. Early detection and treatment are crucial. Other warning signs include persistent pain, warmth around the wound, unusual drainage, or changes in skin temperature. If you notice any of these symptoms, schedule an immediate consultation for proper evaluation and treatment."
    },
    {
      question: "Are the skin whitening treatments safe?",
      answer: "Yes, all our treatments are medically supervised and tailored to your skin type and history to ensure safety and results. We use only FDA-approved, medical-grade treatments and conduct thorough skin assessments before beginning any procedure. Our approach prioritizes your safety while delivering effective, long-lasting results."
    },
    {
      question: "Can I get treatment at home?",
      answer: "Yes, we offer home visits for doctor consultations and nurse care. Perfect for elderly or immobile patients. Our home visit services include comprehensive medical consultations, wound care, diabetic monitoring, post-operative care, and nursing assistance. We bring the same quality of care to your home with all necessary medical equipment."
    },
    {
      question: "Do I need an appointment or can I walk in?",
      answer: "Appointments are preferred for smooth scheduling, but emergency consultations are available. We recommend booking appointments in advance to ensure adequate time for your consultation and to minimize waiting times. However, we understand medical emergencies can't wait, so we accommodate urgent cases and provide emergency consultation services."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring your medical history, current medications list, insurance information, and any recent test results. Also bring a list of your current symptoms and questions you'd like to discuss. This helps us provide the most comprehensive and efficient care during your visit."
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Control Uncontrolled Diabetes Naturally",
      category: "Diabetes",
      excerpt: "Learn effective lifestyle tips and habits that support long-term diabetes control and improve your overall health.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Karthick Palanisamy",
      date: "March 15, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How to Spot and Treat a Diabetic Foot Ulcer Early",
      category: "Podiatry",
      excerpt: "Early signs of foot ulcers can be subtle—learn how to catch them before they become serious complications.",
      image: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Karthick Palanisamy",
      date: "March 12, 2025",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Is Skin Whitening Safe? Myths vs Medical Facts",
      category: "Skincare",
      excerpt: "Bust the myths and understand how medically approved treatments actually work for safe, effective results.",
      image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Karthick Palanisamy",
      date: "March 10, 2025",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Benefits of Home Healthcare for Elderly Patients",
      category: "Home Care",
      excerpt: "Discover why home visit care is becoming the preferred choice for elderly patients and their families.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Karthick Palanisamy",
      date: "March 8, 2025",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Preventive Healthcare: Your First Line of Defense",
      category: "General Health",
      excerpt: "Learn how regular checkups and preventive care can help you avoid serious health complications.",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Karthick Palanisamy",
      date: "March 5, 2025",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Understanding Blood Sugar Levels: A Complete Guide",
      category: "Diabetes",
      excerpt: "Everything you need to know about monitoring and maintaining healthy blood glucose levels.",
      image: "https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Dr. Karthick Palanisamy",
      date: "March 3, 2025",
      readTime: "10 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Diabetes': 'bg-teal-100 text-teal-800',
      'Podiatry': 'bg-blue-100 text-blue-800',
      'Skincare': 'bg-purple-100 text-purple-800',
      'Home Care': 'bg-orange-100 text-orange-800',
      'General Health': 'bg-green-100 text-green-800'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Your <span className="text-blue-600">Health</span> Resource <span className="text-teal-600">Center</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Access expert medical guidance, educational content, and answers to your health questions. Your comprehensive resource for better health decisions and wellness support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={scrollToConsultation}
                  className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Ask a Question</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="tel:+1234567890"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 text-center"
                >
                  Call for Guidance
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <HelpCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Expert</p>
                    <p className="text-sm text-gray-600">Medical Answers</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Educational</p>
                    <p className="text-sm text-gray-600">Health Content</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Trusted</p>
                    <p className="text-sm text-gray-600">Medical Guidance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Patient resources and medical guidance"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Comprehensive Health Resources</h3>
                    <p className="text-teal-600 font-semibold mb-4">Expert Medical Information & Support</p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>FAQs</span>
                      <span>•</span>
                      <span>Health Articles</span>
                      <span>•</span>
                      <span>Medical Guidance</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-teal-600 text-white p-4 rounded-full shadow-lg">
                  <BookOpen className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <HelpCircle className="h-8 w-8 text-teal-600" />
                <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
              </div>
              <p className="text-xl text-gray-600">
                Have questions? Here are answers to some of the most common concerns our patients have.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-2 rounded-full flex-shrink-0 mt-1">
                      <span className="text-teal-600 font-bold text-sm">Q{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-teal-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h3>
                <p className="text-gray-600 mb-6">
                  Can't find the answer you're looking for? Our medical team is here to help with personalized guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={scrollToConsultation}
                    className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Ask a Question</span>
                  </button>
                  <a 
                    href="tel:+1234567890"
                    className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-800">Educational Blog</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with the latest health insights, tips, and medical knowledge from Dr. Karthick Palanisamy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>
                    
                    <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors flex items-center justify-center space-x-2 group">
                      <span>Read More</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mx-auto">
                <BookOpen className="h-5 w-5" />
                <span>View All Articles</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated with Health Tips</h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to our newsletter for the latest health insights, tips, and updates from Dr. Karthick Palanisamy
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm mt-4 opacity-75">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Have More Questions?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Contact us or book a consultation—we're here to help with personalized medical guidance and support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Call for Immediate Help
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientResourcesPage;