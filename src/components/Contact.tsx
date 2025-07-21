import React from 'react';
import { Phone, MessageCircle, Mail, Clock, AlertCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100">
            Ready to book or have questions? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* WhatsApp */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#10b981] rounded-full mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
            <a 
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-colors"
            >
              +60 14-636 0288
            </a>
            <p className="text-sm text-blue-200 mt-1">Instant Response</p>
          </div>

          {/* Phone */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#10b981] rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <a 
              href="tel:+60123456789"
              className="text-blue-200 hover:text-white transition-colors"
            >
              +60 14-636 0288
            </a>
            <p className="text-sm text-blue-200 mt-1">Call Directly</p>
          </div>

          {/* Email */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#10b981] rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a 
              href="mailto:info@hygienaexpert.com"
              className="text-blue-200 hover:text-white transition-colors"
            >
              mzzaservices2024@gmail.com
            </a>
            <p className="text-sm text-blue-200 mt-1">Send Inquiry</p>
          </div>

          {/* Hours */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#10b981] rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Operating Hours</h3>
            <p className="text-blue-200">Mon - Sat</p>
            <p className="text-blue-200">8:00 AM - 6:00 PM</p>
            <p className="text-sm text-blue-200 mt-1">Sunday: By Appointment</p>
          </div>
        </div>

        {/* Emergency Service */}
        <div className="mt-16 bg-[#10b981] bg-opacity-20 p-8 rounded-xl text-center border border-[#10b981] border-opacity-30">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertCircle className="w-8 h-8 text-[#10b981]" />
            <h3 className="text-2xl font-bold">Emergency Service Available</h3>
          </div>
          <p className="text-lg text-blue-100 mb-6">
            Need urgent cleaning? We offer same-day and next-day emergency services for critical situations.
          </p>
          <a
            href="https://wa.me/60123456789?text=Hi! I need emergency cleaning service. Please contact me ASAP."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#10b981] text-white px-6 py-3 rounded-lg hover:bg-[#059669] transition-colors font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Request Emergency Service</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;