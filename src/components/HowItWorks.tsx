import React from 'react';
import { Pencil, Ruler, Hammer } from 'lucide-react'
import './index.css';
const steps = [
  {
    icon: <Pencil className="w-6 h-6" />,
    title: 'Consultation',
    description: 'We begin by understanding your needs and vision to create a personalized plan.'
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: 'Design & Planning',
    description: 'Our experts design and plan every detail with precision and style.'
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: 'Execution & Delivery',
    description: 'We bring your vision to life with quality craftsmanship and timely delivery.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 maintheme font-playfair">How It Works</h2>
          <p className="text-xl maintheme max-w-2xl mx-auto">
            Our simple, three-step process ensures a smooth and satisfying experience from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gold rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-8 text-center">
                <div className="w-12 h-12 border border-gold text-black rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold maintheme mb-2">{step.title}</h3>
                <p className="maintheme">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="button-gold-border px-8 py-3 rounded-lg font-semibold">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
