import { GraduationCap, Award, Users, Heart, Microscope, BookOpen, Calendar, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const qualifications = [
    {
      icon: GraduationCap,
      title: "General Medicine",
      description: "Comprehensive primary care with focus on preventive medicine and chronic disease management"
    },
    {
      icon: Heart,
      title: "Diabetes Management",
      description: "Specialized care for uncontrolled diabetes, including advanced monitoring and personalized treatment protocols"
    },
    {
      icon: Users,
      title: "Podiatry",
      description: "Expert treatment of diabetic foot ulcers, wound care, and comprehensive foot health management"
    },
    {
      icon: Award,
      title: "Skin Treatments",
      description: "Advanced dermatological care including skin whitening treatments and cosmetic procedures"
    }
  ];

  const researchAreas = [
    "Advanced methods in diabetes control and glucose monitoring",
    "Innovative faster recovery methods for diabetic foot ulcers",
    "Wound healing acceleration techniques",
    "Preventive care strategies for diabetic complications"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">About Dr. Karthick Palanisamy</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              General Physician, Diabetologist & Podiatrist
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <img 
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dr. Karthick Palanisamy"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="text-center mt-6">
                  <div className="bg-teal-50 rounded-xl p-4">
                    <p className="text-teal-800 font-semibold text-lg">11+ Years of Experience</p>
                    <p className="text-teal-600">Serving patients with dedication and expertise</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">A Compassionate Approach to Healthcare</h2>
              <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl mb-8">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "With over a decade of experience, I've helped countless patients lead healthier lives by offering precise, compassionate care tailored to their unique needs."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-0.5 bg-teal-600"></div>
                  <p className="ml-4 text-teal-800 font-semibold">Dr. Karthick Palanisamy</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                As a dedicated healthcare professional, I believe that every patient deserves personalized attention and care that addresses not just their immediate concerns, but their long-term health and well-being. My practice is built on the foundation of combining cutting-edge medical science with genuine empathy and understanding.
              </p>
              
              <div className="flex items-center space-x-4 text-teal-600">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Board Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">1000+ Patients Treated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Background</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized expertise across multiple medical disciplines, ensuring comprehensive care for all your health needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {qualifications.map((qual, index) => {
                const IconComponent = qual.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-teal-100 p-4 rounded-2xl flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{qual.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{qual.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Beliefs & Approach to Care</h2>
              <p className="text-xl text-gray-600">
                My philosophy centers on treating each patient as a whole person, not just a condition
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Personalized Care</h3>
                <p className="text-gray-600">Every treatment plan is tailored to your unique health profile, lifestyle, and goals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Microscope className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Scientific Excellence</h3>
                <p className="text-gray-600">Combining the latest medical research with proven treatment methodologies</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Preventive Focus</h3>
                <p className="text-gray-600">Emphasizing long-term health solutions and preventive care strategies</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">My Commitment to You</h3>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                  I believe in building lasting relationships with my patients based on trust, open communication, and mutual respect. 
                  Your health journey is unique, and I'm here to guide you every step of the way with expertise, compassion, and unwavering support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Research & Innovation</h2>
              <p className="text-xl text-gray-600">
                Continuously advancing medical knowledge to provide better patient outcomes
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-start space-x-6 mb-8">
                <div className="bg-purple-100 p-4 rounded-2xl flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Current Research Focus</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    My ongoing research contributes to advancing treatment methodologies and improving patient care standards 
                    in diabetes management and wound healing.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-teal-600 w-2 h-2 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Health Journey?</h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Whether you're struggling with uncontrolled diabetes or seeking advanced skin treatments, 
              I'm here to help. Let's take the first step toward better health together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToConsultation}
                className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule a Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="tel:+1234567890"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 text-center"
              >
                Call Now
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-0.5 bg-white/30"></div>
                <p className="text-lg font-semibold">Dr. Karthick Palanisamy</p>
                <div className="w-16 h-0.5 bg-white/30"></div>
              </div>
              <p className="text-white/80 mt-2">Your Partner in Health & Wellness</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;