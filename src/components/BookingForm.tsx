import React, { useState } from 'react';
import { Calendar, MapPin, Home, MessageCircle, Send } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    location: 'Rawang, Selangor',
    propertySize: '',
    urgentService: false,
    additionalNotes: ''
  });

  const services = [
    'Hard Floor Care',
    'Upholstery & Fabric Cleaning',
    'Window Glass Cleaning',
    'Post-Renovation Cleaning',
    'Sertu (Ritual Cleansing)',
    'Pest Control'
  ];

  const propertySizes = [
    'Small Apartment',
    'Medium House',
    'Large House'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi Hygiena Expert! I'd like to book a cleaning service:

📋 Booking Details:
• Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Service: ${formData.service}
• Preferred Date: ${formData.preferredDate}
• Location: ${formData.location}
• Property Size: ${formData.propertySize}
• Urgent Service: ${formData.urgentService ? 'Yes' : 'No'}
• Additional Notes: ${formData.additionalNotes || 'None'}

Please confirm availability and pricing. Thank you!`;

    const whatsappUrl = `https://wa.me/60123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Book Your Cleaning Session</h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll contact you to confirm your booking
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#1a365d] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1a365d] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-colors"
                  placeholder="+60 12-345 6789"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1a365d] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Service Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#1a365d] mb-2">
                  Select Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-colors"
                >
                  <option value="">Choose a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-[#1a365d] mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-[#1a365d] mb-2">
                  Service Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-colors"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="propertySize" className="block text-sm font-medium text-[#1a365d] mb-2">
                  Property Size *
                </label>
                <select
                  id="propertySize"
                  name="propertySize"
                  required
                  value={formData.propertySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-colors"
                >
                  <option value="">Select property size</option>
                  {propertySizes.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Urgent Service */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="urgentService"
                name="urgentService"
                checked={formData.urgentService}
                onChange={handleInputChange}
                className="w-5 h-5 text-[#10b981] border-gray-300 rounded focus:ring-[#10b981]"
              />
              <label htmlFor="urgentService" className="text-[#1a365d] font-medium">
                Urgent Service (Same-day/Next-day)
              </label>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-[#1a365d] mb-2">
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={4}
                value={formData.additionalNotes}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-colors resize-none"
                placeholder="Any specific requirements or areas of focus..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center space-x-3 bg-[#10b981] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#059669] transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Submit & WhatsApp Us</span>
              </button>
              <p className="text-sm text-gray-600 mt-4">
                By submitting this form, you'll be redirected to WhatsApp to complete your booking
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;