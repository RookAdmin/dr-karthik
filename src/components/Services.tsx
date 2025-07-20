import React from 'react';
import { Activity, Footprints, Sparkles, Shield, Home } from 'lucide-react';

interface ServicesProps {
  setCurrentPage?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const services = [
    {
      icon: Activity,
      title: "Diabetes Management",
      description: "Comprehensive care for uncontrolled diabetes, including personalized treatment plans and ongoing monitoring.",
      features: [
        "Blood sugar monitoring and control",
        "Diabetic foot ulcer treatment",
        "Medication management",
        "Lifestyle counseling",
        "Preventive care planning"
      ],
      color: "blue",
      page: "diabetes-management"
    },
    {
      icon: Footprints,
      title: "Podiatry Services",
      description: "Specialized foot care focusing on diabetic complications and general foot health.",
      features: [
        "Diabetic foot examinations",
        "Wound healing treatments",
        "Foot ulcer prevention",
        "Nail care and treatment",
        "Custom foot care plans"
      ],
      color: "navy",
      page: "podiatry"
    },
    {
      icon: Sparkles,
      title: "Skin Care Treatments",
      description: "Advanced dermatological treatments for various skin conditions and cosmetic concerns.",
      features: [
        "Skin problem diagnosis",
        "Acne and pigmentation treatment",
        "Skin whitening procedures",
        "Anti-aging treatments",
        "Scar reduction therapy"
      ],
      color: "gray",
      page: "skin-care"
    },
    {
      icon: Shield,
      title: "General Healthcare",
      description: "Comprehensive medical consultations and preventive care services.",
      features: [
        "Routine health check-ups",
        "Emergency consultations",
        "Preventive health screening",
        "Health risk assessments",
        "Chronic disease management"
      ],
      color: "lightblue",
      page: "general-healthcare"
    },
    {
      icon: Home,
      title: "Home Visit Care",
      description: "Get medical care from the comfort of your home. Dr. Karthick and our qualified nurses provide home visits for treatments, diabetic care, wound dressing, and personalized nurse assistance for ongoing care.",
      features: [
        "Doctor home visits for consultations",
        "Nursing services for post-surgery care",
        "Wound cleaning and dressing at home",
        "Diabetic monitoring and care",
        "Elderly and bedridden patient support"
      ],
      color: "navy",
      page: "home-visit-care"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:border-blue-300",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      navy: {
        bg: "bg-gray-100",
        text: "text-gray-700", 
        border: "border-gray-200",
        hover: "hover:border-gray-300",
        button: "bg-gray-700 hover:bg-gray-800"
      },
      gray: {
        bg: "bg-gray-50",
        text: "text-gray-600",
        border: "border-gray-200", 
        hover: "hover:border-gray-300",
        button: "bg-gray-600 hover:bg-gray-700"
      },
      lightblue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-100",
        hover: "hover:border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const navigateToService = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions tailored to your individual needs with advanced medical techniques and compassionate care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {services.slice(0, 4).map((service, index) => {
            const colors = getColorClasses(service.color);
            const IconComponent = service.icon;
            
            return (
              <div 
                key={index}
                className={`bg-white rounded-lg p-8 shadow-md border ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`${colors.bg} p-4 rounded-lg`}>
                    <IconComponent className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Services Include:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => navigateToService(service.page)}
                  className={`w-full ${colors.button} text-white py-3 px-6 rounded-lg font-semibold transition-colors`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Home Visit Care - Featured Service */}
        <div className="max-w-4xl mx-auto">
          {(() => {
            const service = services[4]; // Home Visit Care
            const colors = getColorClasses(service.color);
            const IconComponent = service.icon;
            
            return (
              <div className={`bg-gray-50 rounded-lg p-8 shadow-md border ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg`}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`${colors.bg} p-4 rounded-lg`}>
                        <IconComponent className={`h-10 w-10 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
                        <p className="text-gray-600 font-semibold">Comfort of Your Home</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Our Home Services Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button 
                      onClick={() => navigateToService(service.page)}
                      className={`${colors.button} text-white py-4 px-8 rounded-lg font-semibold transition-colors text-lg flex items-center space-x-2`}
                    >
                      <span>Schedule a Home Visit</span>
                      <span>→</span>
                    </button>
                  </div>
                  <div>
                    <img 
                      src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Home visit medical care"
                      className="w-full h-80 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.getElementById('consultation');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Your Consultation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;