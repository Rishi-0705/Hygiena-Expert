import React from 'react';
import { Star, MessageCircle, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a365d] leading-tight">
                Professional Cleaning Services in 
                <span className="text-[#10b981]"> Rawang</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From floors to fabrics, Hygiena Expert brings a fresh shine to your space.
              </p>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm w-fit">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-[#1a365d] font-semibold">Trusted by 500+ Homes in Rawang</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToBooking}
                className="bg-[#10b981] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#059669] transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Book a Cleaning Now
              </button>
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white text-[#1a365d] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#1a365d] hover:bg-[#1a365d] hover:text-white transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaning service"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-[#10b981] text-white p-4 rounded-full shadow-lg animate-bounce">
              <span className="text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#1a365d] text-white p-4 rounded-full shadow-lg">
              <span className="text-2xl">🏠</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToBooking()}
            className="animate-bounce text-[#1a365d] hover:text-[#10b981] transition-colors"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;