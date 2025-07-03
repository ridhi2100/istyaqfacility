import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Designers from './components/Designers';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
