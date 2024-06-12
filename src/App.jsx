import React from "react";
import { Flowbite } from "flowbite-react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import PriceList from "./pages/PriceList";
import Services from "./pages/Services";
import Layout from "./layout/Layout";
import ContactUs from "./pages/ContactUs";

// Define the Home component for the root path
const HomePage = () => (
  <Layout>
    <Home />
  </Layout>
);

const PriceListPage = () => (
  <Layout>
    <PriceList />
  </Layout>
);

const ServicesPage = () => (
  <Layout>
    <Services />
  </Layout>
);

const ContactUsPage = () => (
  
    <Layout>
      <ContactUs />
    </Layout>
  
);



// Create the router with the defined routes
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/price-list", element: <PriceListPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/contact-us", element: <ContactUsPage /> },
]);

function App() {
  return (
    <Flowbite>
      <RouterProvider router={router} />
    </Flowbite>
  );
}

export default App;
