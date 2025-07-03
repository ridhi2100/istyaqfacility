import React from 'react';
import { Target, Award, Users, Lightbulb } from 'lucide-react';
import './Main.css'
const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'We never compromise on the quality of materials and craftsmanship'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Bringing modern design concepts and latest construction techniques'
    },
    {
      icon: Users,
      title: 'Client Satisfaction',
      description: 'Your satisfaction is our top priority in every project we undertake'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for perfection in every detail of our work'
    }
  ];

  return (
    <section id="about" className="mt-8 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <div className="w-24 h-1  mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className=" font-playfair text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Building Dreams, Crafting Spaces
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Istyaq Facility Interior & Constructs is a professional construction & interior design 
              company offering end-to-end solutions for residential and commercial spaces. We transform 
              your vision into reality with our expertise, dedication, and attention to detail.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With years of experience in the industry, we have built a reputation for delivering 
              exceptional results that exceed our clients' expectations. From concept to completion, 
              we ensure every project reflects our commitment to quality and innovation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of skilled professionals brings together creativity, technical expertise, and 
              project management excellence to deliver spaces that are not just beautiful, but also 
              functional and sustainable.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="About Istyaq Facility"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className=" button-gold-border button-gold-border:hover .border-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <value.icon className="h-8 w-8 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;