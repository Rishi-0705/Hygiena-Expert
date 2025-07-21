import React from 'react';
import { 
  Home, 
  Sofa, 
  Eye, 
  Hammer, 
  Heart, 
  Bug,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Hard Floor Care",
      description: "Revitalise your marble, granite, and terrazzo floors with expert polishing.",
      image: "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Upholstery & Fabric Cleaning",
      description: "Deep clean sofas, mattresses, carpets – removing stains and allergens.",
      image: "https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Window Glass Cleaning",
      description: "Streak-free, crystal-clear windows for brighter spaces.",
      image: "https://images.pexels.com/photos/4239090/pexels-photo-4239090.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Post-Renovation Cleaning",
      description: "Dust-free after-reno cleaning for spotless transformation.",
      image: "https://images.pexels.com/photos/4239151/pexels-photo-4239151.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sertu (Ritual Cleansing)",
      description: "Traditional Islamic purification done with care and respect.",
      image: "https://images.pexels.com/photos/4239074/pexels-photo-4239074.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Pest Control",
      description: "Effective protection against ants, roaches, rats & termites.",
      image: "https://images.pexels.com/photos/4239128/pexels-photo-4239128.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cleaning solutions for every need in your home or office
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#10b981]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                  <div className="text-[#1a365d] group-hover:text-[#10b981] transition-colors">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover:text-[#10b981] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button className="flex items-center space-x-2 text-[#10b981] font-semibold hover:text-[#059669] transition-colors">
                  <span></span>
                  
                  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;