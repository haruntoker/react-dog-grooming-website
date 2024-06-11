import React from "react";
import { Flowbite } from "flowbite-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Footer from "./components/Footer";
import PriceTage from "./components/PriceTage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import PriceList from "./pages/PriceList";
import Services from "./pages/Services";

// Define the Home component for the root path
const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Hero2 />
    <PriceTage />
  </>
);

// Create the router with the defined routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/price-list" element={<PriceList />} />
      <Route path="/services" element={<Services/>}/>
    </>
  )
);

function App() {
  return (
    <Flowbite>
      <RouterProvider router={router}>
        <div className="min-h-screen">
          <Navbar />
          <Footer />
        </div>
      </RouterProvider>
    </Flowbite>
  );
}

export default App;
