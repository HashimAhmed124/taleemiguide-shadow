import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Hero2 from "./components/Hero2";
import ForWhom from "./components/forWhom";
import OurServices from "./components/OurServices";
import TheProcess from "./components/TheProcess";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

// Pages
import AboutUs from "./pages/about"; 
import Service from "./pages/Service";

// Service pages
import Class10Guidance from "./pages/servicepages/Class-10-Guidance"


// Helper Component to combine Home components
const Home = () => (
    <div className="w-full min-h-screen">
        <Hero2 />
        <ForWhom />
        <OurServices /> {/* Navigation logic removed here */}
        <TheProcess />
        <ContactUs />
        <Footer />
    </div>
);
// ----------------------------------------------------------------------


const App = () => {
    // State-based routing logic is GONE!

    return (
        <div className="w-full min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Navbar /> 
            <Routes>
                {/* Home Page Route */}
                <Route path="/" element={<Home />} /> 
                
                {/* About Us Route  */}
                <Route path="/about-us" element={<AboutUs />} />
                
                {/* Master Service Routes */}
                <Route path="/service" element={<Service />} />

                {/* Service pages Routes */}
                <Route path="/service/class-10-guidance" element={<Class10Guidance />} />
                
                {/* 404 Route */}
                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>

        </div>
    );
};

export default App;