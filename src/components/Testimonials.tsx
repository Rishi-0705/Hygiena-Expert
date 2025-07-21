import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Ahmad",
      location: "Rawang",
      rating: 5,
      text: "Hygiena Expert transformed our marble floors! They look brand new. The team was professional and punctual. Highly recommended!",
      service: "Hard Floor Care"
    },
    {
      name: "David Lim",
      location: "Bukit Beruntung",
      rating: 5,
      text: "Amazing post-renovation cleaning service. They removed all the dust and debris perfectly. Our new home was move-in ready!",
      service: "Post-Renovation Cleaning"
    },
    {
      name: "Fatimah Hassan",
      location: "Kundang",
      rating: 5,
      text: "Professional sertu service with great respect for our religious requirements. Very satisfied with their attention to detail.",
      service: "Sertu (Ritual Cleansing)"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Real feedback from satisfied customers across Rawang and Selangor
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-[#10b981] mb-4 opacity-50" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-[#1a365d]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#10b981]">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#1a365d] to-[#10b981] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Previous Clients</h3>
          <p className="text-lg mb-6 opacity-90">
            Professional cleaning that transforms your space
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="space-y-2">
              <h4 className="font-semibold">Hajji Bakery</h4>
              <img
                src="https://i.postimg.cc/c4S7JMHp/image.png"
                alt=""
                className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">⁠Suai Development Group</h4>
              <img
                src="https://i.postimg.cc/Qd6cS2bD/image.png"
                alt=""
                className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              />
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">⁠TWI Technology (S.E.ASIA) Sdn. Bhd ⁠</h4>
              <img
                src="https://i.postimg.cc/Pf2fLdrd/image.png"
                alt=""
                className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;