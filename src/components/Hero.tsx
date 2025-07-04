import React from 'react';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-amber-25 to-orange-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                #1 Interior & Construction Company
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
              Transform Your Space with
              <span className="text-amber-700 block">Expert Craftsmanship</span>
            </h1>

            <p className="text-xl text-amber-800 mb-8 leading-relaxed max-w-2xl">
              Professional construction and interior design services. From concept to completion, 
              we create beautiful, functional spaces that reflect your vision and lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToServices}
                className="group bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white hover:bg-amber-50 text-amber-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border-2 border-amber-200 hover:border-amber-300 flex items-center justify-center space-x-3">
                <Play className="h-5 w-5 text-amber-700" />
                <span>Watch How It Works</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-amber-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">500+</div>
                <div className="text-sm text-amber-700">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900">50+</div>
                <div className="text-sm text-amber-700">Expert Craftsmen</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <div className="text-2xl font-bold text-amber-900">4.9</div>
                  <Star className="h-5 w-5 text-yellow-500 fill-current ml-1" />
                </div>
                <div className="text-sm text-amber-700">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Beautiful interior design and construction"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-6 left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-amber-700" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-amber-900">Expert Team</div>
                    <div className="text-xs text-amber-700">Professional Service</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-sm font-semibold text-amber-900 mb-1">Project Complete!</div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                  <span className="text-xs text-amber-700 ml-2">5.0</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;