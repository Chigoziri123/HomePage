import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Joinus from './components/Joinus';
import Partnership from './components/Partnership';
import Timeline from './components/Timeline';
import Pricing from './components/Pricing';
// import Testimonials from './components/Testimonials';
import TestimonialSection from './components/TestimonialSection';

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <Joinus />
    <Timeline />
    <Partnership />
    <Pricing />
    {/* <Testimonials /> */}
    <TestimonialSection />
    </>
  );
}

export default App;
