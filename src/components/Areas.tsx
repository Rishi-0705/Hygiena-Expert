import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

const Areas = () => {
  const areas = [
    "Kuala Lumpur",
    "Rawang", 
    "Putrajaya",
    "Cyberjaya",
    "Shah Alam",
    "Nilai"
  ];

  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Areas We Serve</h2>
          <p className="text-xl text-gray-600">
            Professional cleaning services across all of Kuala Lumpur and Selangor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Areas List */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-[#10b981] flex-shrink-0" />
                  <span className="text-[#1a365d] font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#10b981] bg-opacity-10 p-6 rounded-xl border border-[#10b981] border-opacity-20">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-[#10b981] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1a365d] mb-2">Service Coverage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We proudly serve Kuala Lumpur and the greater Selangor area. If your location isn't listed, 
                    contact us to check availability. We're always expanding our service areas to help more families.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">Don't see your area listed?</p>
              <a
                href="https://api.whatsapp.com/send/?phone=60146360288&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#1a365d] text-white px-6 py-3 rounded-lg hover:bg-[#2d4a6b] transition-colors"
              >
                <MapPin className="w-5 h-5" />
                <span>Check Service Availability</span>
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-center space-y-4">
                <MapPin className="w-16 h-16 text-[#10b981] mx-auto" />
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d] mb-2">Rawang & Surrounding Areas</h3>
                  <p className="text-gray-600">Professional cleaning services across Selangor</p>
                </div>
              </div>
              
              {/* Decorative pins */}
              <div className="absolute top-8 left-12 w-4 h-4 bg-[#10b981] rounded-full animate-pulse"></div>
              <div className="absolute top-16 right-16 w-4 h-4 bg-[#1a365d] rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-12 left-20 w-4 h-4 bg-[#10b981] rounded-full animate-pulse delay-700"></div>
              <div className="absolute bottom-20 right-12 w-4 h-4 bg-[#1a365d] rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;