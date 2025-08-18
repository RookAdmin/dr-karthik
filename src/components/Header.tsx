import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Heart,
  Footprints,
} from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    // Simulate navigation logic
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const serviceCategories = {
    general: {
      title: "General Treatments",
      icon: Heart,
      description: "",
      services: [
        {
          name: "General Health Check-ups",
          page: "general-services/general-healthcare",
        },
        {
          name: "Chronic Disease Management",
          page: "general-services/chronic-disease-management",
        },
        { name: "Wound Care", page: "general-services/wound-care"  },
        { name: "Preventive Care", page: "general-services/preventive-care" },
        {
          name: "Diabetes Management",
          page: "general-services/diabetes-management",
        },
      ],
    },
    diabeticFoot: {
      title: "Diabetic Foot Treatments",
      icon: Footprints,
      description: "",
      services: [
        { name: "Foot Ulcer Care", page: "diabetic-foot/foot-ulcer-care" },
        {
          name: "Infection Management",
          page: "diabetic-foot/infection-management",
        },
        {
          name: "Neuropathy Management",
          page: "diabetic-foot/neuropathy-management",
        },
        {
          name: "Foot Deformity Treatment",
          page: "diabetic-foot/deformity-treatment",
        },
        {
          name: "Amputation Prevention",
          page: "diabetic-foot/amputation-prevention",
        },
      ],
    },
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
             <button
            onClick={() => navigateToPage("home")}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo.png" // replace with your actual logo path
              alt="Clinic Logo"
              className="h-14 w-auto" // adjust height/width as needed
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1">
            <div className="flex-1 flex items-center justify-center space-x-8">
              <button
                onClick={() => navigateToPage("home")}
                className={`transition-colors font-medium ${
                  currentPage === "home"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </button>

              <button
                onClick={() => navigateToPage("about-page")}
                className={`transition-colors font-medium ${
                  currentPage === "about-page"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About Dr. Karthick
              </button>

              {/* Enhanced Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                  <span className="font-medium">Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-xl shadow-lg border border-gray-200 py-6 z-50">
                    {/* All Services Overview */}
                    <button
                      onClick={() => scrollToSection("services")}
                      className="w-full text-left px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 mb-4"
                    >
                      <div className="font-semibold">All Services Overview</div>
                      <div className="text-sm text-gray-500">
                        View complete service overview
                      </div>
                    </button>

                    {/* Two-Column Service Categories */}
                    <div className="grid grid-cols-2 gap-6 px-6">
                      {Object.entries(serviceCategories).map(
                        ([key, category]) => {
                          const IconComponent = category.icon;
                          return (
                            <div key={key} className="space-y-3">
                              {/* Category Header */}
                              <div className="flex items-center space-x-2 pb-2 border-b border-gray-100">
                                <IconComponent className="h-5 w-5 text-blue-600" />
                                <div>
                                  <div className="font-semibold text-gray-800">
                                    {category.title}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {category.description}
                                  </div>
                                </div>
                              </div>

                              {/* Category Services */}
                              <div className="space-y-1">
                                {category.services.map(
                                  (service, serviceIndex) => (
                                    <button
                                      key={serviceIndex}
                                      onClick={() =>
                                        navigateToPage(service.page)
                                      }
                                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                        currentPage === service.page
                                          ? "bg-blue-100 text-blue-700 font-semibold"
                                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                      }`}
                                    >
                                      {service.name}
                                    </button>
                                  )
                                )}
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigateToPage("patient-resources")}
                className={`transition-colors font-medium ${
                  currentPage === "patient-resources"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Patient Resources
              </button>

              <button
                onClick={() => navigateToPage("contact-us")}
                className={`transition-colors font-medium ${
                  currentPage === "contact-us"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* Move Book Appointment button outside the centered div */}
            <button
              onClick={() => navigateToPage("book-appointment")}
              className="bg-[#22578c] text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium shadow-md hover:shadow-lg"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden p-2">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => navigateToPage("home")}
                className={`transition-colors text-left ${
                  currentPage === "home"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </button>

              <button
                onClick={() => navigateToPage("about-page")}
                className={`transition-colors text-left ${
                  currentPage === "about-page"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About Dr. Karthick
              </button>

              {/* Mobile Services Section */}
              <div className="space-y-3">
                <div className="font-semibold text-gray-800">Services</div>

                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-600 hover:text-blue-600 transition-colors text-left mb-3 text-sm pl-4 py-2 border-l-2 border-blue-200"
                >
                  All Services Overview
                </button>

                {/* Mobile Service Categories */}
                {Object.entries(serviceCategories).map(([key, category]) => {
                  const IconComponent = category.icon;
                  return (
                    <div
                      key={key}
                      className="border-l-2 border-gray-200 pl-4 space-y-2"
                    >
                      <div className="flex items-center space-x-2 py-1">
                        <IconComponent className="h-4 w-4 text-blue-600" />
                        <span className="font-semibold text-gray-700 text-sm">
                          {category.title}
                        </span>
                      </div>
                      <div className="space-y-1 ml-6">
                        {category.services.map((service, serviceIndex) => (
                          <button
                            key={serviceIndex}
                            onClick={() => navigateToPage(service.page)}
                            className={`block transition-colors text-left text-sm py-1 ${
                              currentPage === service.page
                                ? "text-blue-600 font-semibold"
                                : "text-gray-600 hover:text-blue-600"
                            }`}
                          >
                            {service.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => navigateToPage("patient-resources")}
                className={`transition-colors text-left ${
                  currentPage === "patient-resources"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Patient Resources
              </button>

              <button
                onClick={() => navigateToPage("contact-us")}
                className={`transition-colors text-left ${
                  currentPage === "contact-us"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact Us
              </button>

              <button
                onClick={() => navigateToPage("book-appointment")}
                className="bg-[#22578c] text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
