import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, MessageCircle, Send, CheckCircle, User, Calendar, ArrowRight } from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-3xl p-12 shadow-xl">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
                <p className="text-gray-600 mb-6">
                  We'll get back to you shortly. Your message has been received and we appreciate you reaching out to us.
                </p>
                <div className="bg-teal-50 rounded-xl p-6">
                  <p className="text-teal-800 font-semibold">
                    For urgent matters, please call us directly at <a href="tel:+91-XXXXXXXXXX" className="underline">+91-XXXXXXXXXX</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Get in <span className="text-blue-600">Touch</span> with <span className="text-teal-600">Us</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Have questions or want to schedule an appointment? We're here to help. Reach out to us via the form below or contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={scrollToConsultation}
                  className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Appointment</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="tel:+91-XXXXXXXXXX"
                  className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 text-center"
                >
                  Call Now
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Quick</p>
                    <p className="text-sm text-gray-600">Response</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">24/7</p>
                    <p className="text-sm text-gray-600">Support</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Easy</p>
                    <p className="text-sm text-gray-600">Location</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Contact Dr. Karthick Palanisamy"
                    className="w-full h-80 object-cover rounded-2xl mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to Help You</h3>
                    <p className="text-teal-600 font-semibold mb-4">Professional Medical Support</p>
                    <div className="flex justify-center space-x-4 text-sm text-gray-600">
                      <span>Expert Care</span>
                      <span>•</span>
                      <span>Quick Response</span>
                      <span>•</span>
                      <span>Personalized Service</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-teal-600 text-white p-4 rounded-full shadow-lg">
                  <MessageCircle className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Send className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="inline h-4 w-4 mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MessageCircle className="inline h-4 w-4 mr-1" />
                    Message / Query *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your health concerns or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information and Map */}
            <div className="space-y-8">
              {/* Clinic Address */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Clinic Address</h3>
                </div>
                <div className="space-y-2 text-gray-700 mb-6">
                  <p className="font-semibold">Dr. Karthick Palanisamy</p>
                  <p>123 Medical Center Drive</p>
                  <p>Healthcare District</p>
                  <p>Chennai, Tamil Nadu 600001</p>
                  <p>India</p>
                </div>
                
                {/* Google Map Placeholder */}
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8663676067547!2d80.24565731482226!3d13.044262990816842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526650e0b6c595%3A0x4f74ddbff946af6b!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1647875234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Karthick Palanisamy Clinic Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Phone</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-teal-600" />
                        <a href="tel:+91-XXXXXXXXXX" className="text-teal-600 hover:underline">+91-XXXXXXXXXX</a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">WhatsApp: </span>
                        <a href="https://wa.me/91XXXXXXXXXX" className="text-green-600 hover:underline">+91-XXXXXXXXXX</a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Email</h4>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <a href="mailto:drkarthick@example.com" className="text-blue-600 hover:underline">drkarthick@example.com</a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Clinic Hours</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-purple-600" />
                        <div className="flex justify-between w-full">
                          <span>Monday - Friday</span>
                          <span className="font-semibold">9:00 AM - 6:00 PM</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-purple-600" />
                        <div className="flex justify-between w-full">
                          <span>Saturday</span>
                          <span className="font-semibold">9:00 AM - 2:00 PM</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-purple-600" />
                        <div className="flex justify-between w-full">
                          <span>Sunday</span>
                          <span className="font-semibold">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Connect with Us</h2>
            <p className="text-xl text-gray-600 mb-8">
              Follow us on social media for health tips, updates, and medical insights
            </p>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://facebook.com/drkarthick" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors group"
              >
                <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://instagram.com/drkarthick" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition-colors group"
              >
                <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/drkarthick" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-800 text-white p-4 rounded-full hover:bg-blue-900 transition-colors group"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Immediate Medical Attention?</h3>
              <p className="text-gray-600 mb-6">
                For medical emergencies, please call 911 immediately or visit your nearest emergency room. 
                For urgent but non-emergency medical concerns, contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+91-XXXXXXXXXX"
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call for Urgent Care</span>
                </a>
                <a 
                  href="https://wa.me/91XXXXXXXXXX"
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;