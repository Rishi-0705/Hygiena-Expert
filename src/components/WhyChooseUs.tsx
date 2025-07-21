import React from 'react';
import { 
  Shield, 
  Leaf, 
  Users, 
  Clock, 
  CheckCircle,
  Award
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted by Homeowners",
      description: "Over 500 satisfied customers in Rawang and surrounding areas"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Friendly & Trained Team",
      description: "Our experts are highly skilled and always approach every job with a smile and professionalism"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Team",
      description: "Trained professionals with years of cleaning expertise"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Book at your convenience, including weekends and emergency services"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee or we'll make it right"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Transparent Pricing",
      description: "No hidden fees! You'll receive clear and upfront quotes for all our services."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Why Choose Hygiena Expert?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering exceptional cleaning services that exceed your expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#10b981] bg-opacity-10 rounded-full mb-6 group-hover:bg-[#10b981] transition-colors">
                <div className="text-[#10b981] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;