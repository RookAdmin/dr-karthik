import {
  Footprints,
  Shield,
  Heart,
  Zap,
  Calendar,
  ArrowRight,
  CheckCircle,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";

const PodiatryPage = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const conditions = [
    {
      icon: Footprints,
      title: "Diabetic Foot Ulcers",
      description:
        "Specialized treatment for diabetic foot ulcers with advanced healing protocols",
    },
    {
      icon: Shield,
      title: "Wound Management",
      description:
        "Expert care for foot infections, cuts, and wounds to prevent complications",
    },
    {
      icon: Zap,
      title: "Neuropathy Treatment",
      description:
        "Comprehensive management of diabetic neuropathy causing numbness and pain",
    },
  ];

  const services = [
    "Professional wound debridement and dressing",
    "Advanced ulcer management and healing protocols",
    "Custom footwear recommendations and fitting",
    "Comprehensive preventive foot examinations",
    "Diabetic foot screening and risk assessment",
    "Nail care and ingrown toenail treatment",
    "Callus and corn removal",
    "Foot infection treatment and prevention",
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "11+ Years of Experience",
      description:
        "Extensive expertise in diabetic foot care with proven healing outcomes",
    },
    {
      icon: TrendingUp,
      title: "Advanced Treatments",
      description:
        "Cutting-edge wound healing techniques and preventive strategies",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Compassionate approach focusing on individual foot health needs",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 mx-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Expert <span className="text-[#22578c]">Diabetic Foot</span>{" "}
                Care & Management
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Prevent serious foot complications from diabetes. Our
                specialized podiatry care ensures quick healing, reduces
                infection risks, and maintains your mobility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={scrollToConsultation}
                  className="bg-[#22578c] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Foot Care Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:+1234567890"
                  className="border-2 border-[#22578c] text-[#22578c] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#22578c] hover:text-white transition-all duration-300 text-center"
                >
                  Call for Urgent Care
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-[#22578c]" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">11+ Years</p>
                    <p className="text-sm text-gray-600">Foot Care Expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Advanced</p>
                    <p className="text-sm text-gray-600">Treatments</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Personalized</p>
                    <p className="text-sm text-gray-600">Care Plans</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Diabetic foot care examination"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Comprehensive Foot Care
                    </h3>
                    <p className="text-[#22578c] font-semibold mb-4">
                      Advanced Diabetic Foot Treatment
                    </p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>Wound Healing</span>
                      <span>•</span>
                      <span>Infection Prevention</span>
                      <span>•</span>
                      <span>Mobility Preservation</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-[#22578c] text-white p-4 rounded-full shadow-lg">
                  <Footprints className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Diabetic Foot Care */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content Column */}
              <div className="space-y-8">
                <div>
                  <span className="bg-teal-50 text-[#22578c] text-sm font-semibold px-1 py-2 rounded-full">
                    Understanding Diabetic Foot Care
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  A Holistic Approach to <br />
                  <span className="text-[#22578c]">Foot Health</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Diabetic foot care is more than treating wounds. It's a
                  comprehensive approach that includes prevention, early
                  detection, specialized treatment, and ongoing management to
                  preserve mobility and prevent serious complications.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-[#22578c] mb-2">
                      80%
                    </div>
                    <p className="text-gray-600">
                      of diabetic foot complications can be prevented with
                      proper care
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-[#22578c] mb-2">
                      11+
                    </div>
                    <p className="text-gray-600">
                      years of experience in diabetic foot care and healing
                    </p>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="relative flex justify-center items-center">
                <div className="bg-white rounded-3xl shadow-lg p-1 w-full">
                  <img
                    src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Diabetic foot care examination"
                    className="w-full rounded-2xl object-cover h-[500px]"
                  />
                </div>
                {/* Overlay Card */}
                <div className="absolute -bottom-1 -left-8 bg-white p-6 rounded-2xl shadow-lg max-w-[280px]">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-teal-100 p-3 rounded-xl">
                      <svg
                        className="h-6 w-6 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M8 12l2 2 4-4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Preventive Care
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Customized foot care strategies tailored to individual
                    diabetic needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                What <span className="text-[#22578c]">We Treat</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive diabetic foot care addressing critical conditions
                and preventing serious complications
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {conditions.map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="bg-[#22578c] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {condition.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our <span className="text-[#22578c]">Podiatry Services</span>{" "}
                Include
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive foot care designed to prevent complications and
                maintain mobility
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#22578c] rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose Our <span className="text-[#22578c]">Foot Care</span>
              </h2>
              <p className="text-xl text-gray-600">
                Experience specialized, compassionate diabetic foot care that
                makes a difference
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-10 w-10 text-[#22578c]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ background: "#f7f9fa" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "#22578c" }}
            >
              Ready to Protect Your Foot Health?
            </h2>
            <p
              className="text-xl mb-8 leading-relaxed opacity-90"
              style={{ color: "#000000" }}
            >
              Don't let diabetic foot complications limit your mobility. Take
              the first step towards comprehensive foot care today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center items-center">
              <button
                onClick={scrollToConsultation}
                className="bg-[#22578c] text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 group"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Foot Care Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:+1234567890"
                className="border-2 border-[#22578c] text-[#22578c] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#22578c] hover:text-white transition-all duration-300 text-center"
              >
                Call for Urgent Care
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodiatryPage;
