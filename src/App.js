import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Joinus from './components/Joinus';
import PartnerList from './components/PartnerList'
import Partnership from './components/Partnership';
import Timeline from './components/Timeline';
import Pricing from './components/Pricing';

import TestimonialSection from './components/TestimonialSection';
import BasicMap from './components/BasicMap';
import Footer from './shared/Footer';

function App() {
 

  return (
    <>
    <Navbar />
    <Home />
    <Joinus />
    <PartnerList />
    <BasicMap />
    <Timeline />
    <Partnership />
    <Pricing />
    <TestimonialSection />
    <Footer />
    </>
  );
}

export default App;
