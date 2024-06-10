import React from 'react';
import { Flowbite} from 'flowbite-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Footer from './components/Footer';
import PriceTage from './components/PriceTage';



function App() {
  return (
    <Flowbite>
      <div className="min-h-screen">
       
        <Navbar />
        <Hero />
        <Hero2 />
        <PriceTage />
        <Footer />
        
      </div>
    </Flowbite>
  );
}

export default App;
