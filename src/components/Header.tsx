import React, { useState } from 'react';
import { Stethoscope, Menu, X, Phone, ChevronDown, Calendar } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Diabetes Management', page: 'diabetes-management' },
    { name: 'Podiatry Services', page: 'podiatry' },
    { name: 'Skin Care Treatments', page: 'skin-care' },
    { name: 'General Healthcare', page: 'general-healthcare' },
    { name: 'Home Visit Care', page: 'home-visit-care' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigateToPage('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="bg-teal-600 p-2 rounded-full">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Dr. Karthick Palanisamy</h1>
              <p className="text-sm text-teal-600">Diabetes Care & Podiatry Expert</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateToPage('home')}
              className={`transition-colors ${currentPage === 'home' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateToPage('about-page')}
              className={`transition-colors ${currentPage === 'about-page' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
            >
              About Dr. Karthick
            </button>
            
            {/* Services Dropdown with Hover */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors border-b border-gray-100"
                  >
                    <div className="font-semibold">All Services</div>
                    <div className="text-sm text-gray-500">View complete service overview</div>
                  </button>
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => navigateToPage(service.page)}
                      className={`w-full text-left px-4 py-3 transition-colors ${
                        currentPage === service.page 
                          ? 'bg-teal-50 text-teal-600 font-semibold' 
                          : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                      }`}
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              onClick={() => navigateToPage('patient-resources')}
              className={`transition-colors ${currentPage === 'patient-resources' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Patient Resources
            </button>
            <button 
              onClick={() => navigateToPage('contact-us')}
              className={`transition-colors ${currentPage === 'contact-us' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
            >
              Contact Us
            </button>
            <button 
              onClick={() => navigateToPage('book-appointment')}
              className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors flex items-center space-x-2"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => navigateToPage('home')}
                className={`transition-colors text-left ${currentPage === 'home' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
              >
                Home
              </button>
              <button 
                onClick={() => navigateToPage('about-page')}
                className={`transition-colors text-left ${currentPage === 'about-page' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
              >
                About Dr. Karthick
              </button>
              
              {/* Mobile Services Section */}
              <div className="border-l-2 border-teal-200 pl-4">
                <div className="text-gray-800 font-semibold mb-2">Services</div>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-gray-600 hover:text-teal-600 transition-colors text-left mb-2 text-sm"
                >
                  All Services Overview
                </button>
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => navigateToPage(service.page)}
                    className={`block transition-colors text-left mb-2 text-sm ${
                      currentPage === service.page 
                        ? 'text-teal-600 font-semibold' 
                        : 'text-gray-600 hover:text-teal-600'
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={() => navigateToPage('patient-resources')}
                className={`transition-colors text-left ${currentPage === 'patient-resources' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
              >
                Patient Resources
              </button>
              <button 
                onClick={() => navigateToPage('contact-us')}
                className={`transition-colors text-left ${currentPage === 'contact-us' ? 'text-teal-600 font-semibold' : 'text-gray-700 hover:text-teal-600'}`}
              >
                Contact Us
              </button>
              <button 
                onClick={() => navigateToPage('book-appointment')}
                className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
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