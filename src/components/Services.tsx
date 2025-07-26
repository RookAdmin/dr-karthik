import React from 'react';
import { Activity, Footprints, Sparkles, Shield, Home, Info, Stethoscope, MapPin, Phone } from 'lucide-react';

interface ServicesProps {
  setCurrentPage?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const quickAccessCards = [
    {
      icon: Info,
      title: "PATIENT INFORMATION",
      description: "View all information for patients and follow all terms & conditions.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      page: "patient-resources"
    },
    {
      icon: Stethoscope,
      title: "FIND A DOCTOR",
      description: "View all information about our doctors and follow all terms & conditions.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      page: "about-page"
    },
    {
      icon: MapPin,
      title: "OUR LOCATIONS",
      description: "View all information about our locations and follow all terms & conditions.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      page: "contact-us"
    },
    {
      icon: Phone,
      title: "CONNECT WITH US",
      description: "View all information about connecting with us and follow all terms & conditions.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      page: "contact-us"
    }
  ];

  const services = [
    {
      icon: Activity,
      title: "Diabetes Management",
      description: "20+ Doctors are available under this department who serve.",
      color: "blue",
      page: "diabetes-management"
    },
    {
      icon: Footprints,
      title: "Podiatry Services",
      description: "20+ Doctors are available under this department who serve.",
      color: "teal",
      page: "podiatry"
    },
    {
      icon: Sparkles,
      title: "Skin Care Treatments",
      description: "20+ Doctors are available under this department who serve.",
      color: "purple",
      page: "skin-care"
    },
    {
      icon: Shield,
      title: "General Healthcare",
      description: "25+ Doctors are available under this department who serve.",
      color: "green",
      page: "general-healthcare"
    },
    {
      icon: Home,
      title: "Home Visit Care",
      description: "20+ Doctors are available under this department who serve.",
      color: "orange",
      page: "home-visit-care"
    },
    {
      icon: Stethoscope,
      title: "Emergency Care",
      description: "20+ Doctors are available under this department who serve.",
      color: "red",
      page: "general-healthcare"
    },
    {
      icon: Activity,
      title: "Cardiology",
      description: "20+ Doctors are available under this department who serve.",
      color: "blue",
      page: "general-healthcare"
    },
    {
      icon: Shield,
      title: "Medicine & Nephrology",
      description: "20+ Doctors are available under this department who serve.",
      color: "indigo",
      page: "general-healthcare"
    }
  ];

  const navigateToPage = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Quick Access Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {quickAccessCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={index}
                  onClick={() => navigateToPage(card.page)}
                  className={`${card.bgColor} rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="mb-6">
                    <IconComponent className={`h-8 w-8 ${card.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center space-x-1">
                    <span>Learn More</span>
                    <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">OUR SERVICES</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              We Serve In Different <span className="text-blue-600">Areas For</span><br />
              <span className="text-gray-900">Our Patients</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div 
                  key={index}
                  onClick={() => navigateToPage(service.page)}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="mb-6">
                    <IconComponent className="h-12 w-12 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center space-x-1 group-hover:translate-x-1">
                    <span>Read More</span>
                    <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;