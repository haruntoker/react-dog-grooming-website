import React from 'react';
import { Flowbite} from 'flowbite-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


function App() {
  return (
    <Flowbite>
      <div className="min-h-screen">
       
        <Navbar />
        <Hero />
        
      </div>
    </Flowbite>
  );
}

export default App;
