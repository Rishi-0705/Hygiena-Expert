import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#1a365d] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">HE</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1a365d]">Hygiena Expert</h1>
              <p className="text-xs text-gray-600">Professional Cleaning</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#1a365d] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-gray-700 hover:text-[#1a365d] transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('areas')}
              className="text-gray-700 hover:text-[#1a365d] transition-colors"
            >
              Areas
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-[#10b981] text-white px-6 py-2 rounded-lg hover:bg-[#059669] transition-colors"
            >
              Book Now
            </button>
            <a 
              href="tel:+60123456789"
              className="flex items-center space-x-2 text-[#1a365d] hover:text-[#10b981] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Us</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-[#1a365d] transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="text-left text-gray-700 hover:text-[#1a365d] transition-colors"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('areas')}
                className="text-left text-gray-700 hover:text-[#1a365d] transition-colors"
              >
                Areas
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="text-left bg-[#10b981] text-white px-6 py-2 rounded-lg hover:bg-[#059669] transition-colors w-fit"
              >
                Book Now
              </button>
              <a 
                href="tel:+60123456789"
                className="flex items-center space-x-2 text-[#1a365d] hover:text-[#10b981] transition-colors w-fit"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Us</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;