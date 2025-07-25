import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      complete: () => {
        setTimeout(onLoadingComplete, 500);
      }
    });

    // Initial setup
    anime.set('.logo-main', {
      scale: 0.5,
      opacity: 0,
      rotate: -180
    });

    anime.set('.logo-sub', {
      translateY: 50,
      opacity: 0
    });

    anime.set('.progress-bar', {
      width: '0%'
    });

    anime.set('.floating-element', {
      scale: 0,
      opacity: 0
    });

    // Logo entrance with rotation
    timeline.add({
      targets: '.logo-main',
      scale: 1,
      opacity: 1,
      rotate: 0,
      duration: 1500,
      easing: 'easeOutBack'
    });

    timeline.add({
      targets: '.logo-sub',
      translateY: 0,
      opacity: 1,
      duration: 800,
      easing: 'easeOutQuart'
    }, '-=800');

    // Floating elements
    timeline.add({
      targets: '.floating-element',
      scale: 1,
      opacity: 0.8,
      duration: 1000,
      delay: anime.stagger(200),
      easing: 'easeOutBack'
    }, '-=600');

    // Progress bar animation
    timeline.add({
      targets: '.progress-bar',
      width: '100%',
      duration: 2500,
      easing: 'easeInOutQuart'
    }, '-=2000');

    // Continuous floating animation
    anime({
      targets: '.floating-element',
      translateY: [0, -20, 0],
      scale: [1, 1.1, 1],
      duration: 3000,
      loop: true,
      delay: anime.stagger(300),
      easing: 'easeInOutSine'
    });

    // Shimmer effects
    anime({
      targets: '.shimmer',
      translateX: ['-100%', '300%'],
      duration: 2000,
      loop: true,
      easing: 'easeInOutQuart'
    });

    return () => {
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Floating design elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-element absolute rounded-full bg-gradient-to-r from-amber-400/20 to-amber-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Wood grain pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='0.3'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M0 20h60v20H0z' fill-opacity='0.1'/%3E%3Cpath d='M0 40h60v20H0z' fill-opacity='0.2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-amber-900/20 to-amber-900/40" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Logo section */}
        <div ref={logoRef} className="mb-16">
          <div className="logo-main relative overflow-hidden">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 mb-4 relative">
              <span className="relative z-10">Istyaq Facility</span>
              <div className="shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12" />
            </h1>
          </div>
          <div className="logo-sub text-2xl font-semibold text-amber-200 relative overflow-hidden">
            <span className="relative z-10">Interior & Construction Services</span>
          </div>
        </div>

        {/* Design elements */}
        <div className="relative w-full max-w-lg h-32 mx-auto mb-16">
          {/* Decorative design tools */}
          <div className="absolute top-0 left-1/4 floating-element">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg transform rotate-12 shadow-xl">
              <div className="absolute inset-2 bg-white/20 rounded backdrop-blur-sm" />
            </div>
          </div>
          
          <div className="absolute top-8 right-1/4 floating-element">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full shadow-xl">
              <div className="absolute inset-1 bg-white/20 rounded-full backdrop-blur-sm" />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-1/3 floating-element">
            <div className="w-20 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transform -rotate-6 shadow-xl">
              <div className="absolute inset-1 bg-white/20 rounded-full backdrop-blur-sm" />
            </div>
          </div>
          
          <div className="absolute top-4 right-1/3 floating-element">
            <div className="w-8 h-20 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full transform rotate-45 shadow-xl">
              <div className="absolute inset-1 bg-white/20 rounded-full backdrop-blur-sm" />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mb-8">
          <div className="text-2xl font-bold text-white mb-2 relative overflow-hidden">
            <span className="relative z-10">Creating Beautiful Spaces</span>
          </div>
          <div className="text-lg text-amber-200 flex items-center justify-center">
            <span>Building Your Dream Home</span>
            <span className="ml-2 text-amber-400">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="inline-block animate-bounce text-xl"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  🏗️
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* Progress section */}
        <div className="w-full max-w-md mx-auto">
          {/* Progress bar */}
          <div ref={progressRef} className="w-full h-2 bg-amber-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-amber-700 mb-4">
            <div className="progress-bar h-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
              <div className="absolute right-0 top-0 w-6 h-full bg-gradient-to-l from-white/60 to-transparent rounded-r-full" />
            </div>
          </div>
          
          {/* Progress text */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-amber-300 font-medium">Loading...</span>
            <span className="text-amber-400 font-bold text-lg">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Ambient lighting effects */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-5 w-24 h-24 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export default LoadingScreen;