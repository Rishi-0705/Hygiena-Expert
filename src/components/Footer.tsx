import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">HE</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Hygiena Expert</h3>
                <p className="text-blue-200">Professional Cleaning Services</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed mb-6 max-w-md">
              Your trusted partner for comprehensive cleaning solutions in Rawang and surrounding areas. 
              We bring professional expertise and eco-friendly practices to every job.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/https://api.whatsapp.com/send/?phone=60146360288&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#10b981] p-3 rounded-lg hover:bg-[#059669] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+60146360288"
                className="bg-[#10b981] p-3 rounded-lg hover:bg-[#059669] transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@hygienaexpert.com"
                className="bg-[#10b981] p-3 rounded-lg hover:bg-[#059669] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-blue-200">
              <li><a href="#services" className="hover:text-white transition-colors">Hard Floor Care</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Upholstery Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Window Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Post-Renovation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Sertu Service</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pest Control</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-blue-200">
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p>+60 14-636 0288</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+60 14-636 0288</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>mzzaservices2024@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Service Area</p>
                  <p>Kuala Lumpur, Selangor & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Operating Hours</h4>
            <div className="flex flex-wrap justify-center gap-8 text-blue-200">
              <div>
                <span className="font-medium">Monday - Saturday:</span>
                <span className="ml-2">8:00 AM - 6:00 PM</span>
              </div>
              <div>
                <span className="font-medium">Sunday:</span>
                <span className="ml-2">By Appointment</span>
              </div>
              <div>
                <span className="font-medium text-[#10b981]">Emergency Service:</span>
                <span className="ml-2">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 Hygiena Expert. All rights reserved. | Professional Cleaning Services in Rawang, Selangor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;