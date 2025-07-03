
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User, Search, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    {
      name: 'Services',
      to: '/services',
      dropdown: ['Interior Design', 'Construction', 'Renovation', 'House Services'],
    },
    { name: 'How It Works', to: '/how-it-works' },
    {
      name: 'Portfolio',
      to: '/portfolio',
      dropdown: ['Living Rooms', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Offices'],
    },
    { name: 'Designers', to: '/designers' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Blog', to: '/blog' },
  ];

  return (
    <header className="header-custom fixed top-0 left-0 right-0 z-50">

      <div className="w-full px-6 lg:px-10">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-left text-white text-2xl lg:text-3xl font-bold">
              Istyaq Facility
            </h1>
            <p className="text-xs text-white font-medium">Interior & Construction</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.to}
                  onClick={() =>
                    item.dropdown
                      ? setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      : setActiveDropdown(null)
                  }
                  className="mt-6 flex items-center space-x-1 text-white hover:text-yellow-200 font-medium transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-xl border border-amber-100 py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem}
                        className="block w-full text-left px-4 py-2 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 text-white">
            <button className="p-2 hover:text-yellow-200 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-yellow-200 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-yellow-200 transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 hover:text-yellow-200 transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Sign In</span>
            </button>
            <button className="bg-white text-[#b59e6f] hover:bg-yellow-100 px-6 py-2 rounded-lg font-medium transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-white hover:text-yellow-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#b59e6f] border-t border-yellow-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-yellow-200 hover:bg-yellow-100 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-yellow-200 mt-4">
                <button className="w-full bg-white text-[#b59e6f] px-4 py-2 rounded-md hover:bg-yellow-100 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

