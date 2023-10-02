import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Joinus from './components/Joinus';
import PartnerList from './components/PartnerList'
import Partnership from './components/Partnership';
import Timeline from './components/Timeline';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import BasicMap from './components/BasicMap';

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
    <Testimonials />
    </>
  );
}

export default App;
