import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ForWhom from "./components/forWhom";
import OurServices from "./components/OurServices";
import TheProcess from "./components/TheProcess";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <ForWhom />
      <OurServices />
      <TheProcess />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
