import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2"
import ForWhom from "./components/forWhom";
import OurServices from "./components/OurServices";
import TheProcess from "./components/TheProcess";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      {/* <Hero /> */}
      <Hero2/>
      <ForWhom />
      <OurServices />
      <TheProcess />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
