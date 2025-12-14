// App.jsx

import { Routes, Route, useNavigate } from "react-router-dom"; // 👈 CRITICAL: Add useNavigate
import Navbar from "./components/Navbar";
import Hero from "./components/hompage/Hero";
import ForWhom from "./components/hompage/forWhom";
import OurServices from "./components/hompage/OurServices";
import TheProcess from "./components/hompage/TheProcess";
import ContactUs from "./components/ContactUs";
import Testimonials from "./components/hompage/Testimonials";
import Footer from "./components/Footer";

// Pages
import AboutUs from "./pages/about";
import Service from "./pages/Service"; // The master service page (which is 'ServicePage' inside the file)

// Service pages (Ensure all of these are correctly imported)
import Class10Guidance from "./pages/servicepages/Class-10-Guidance";
import Class12Guidance from "./pages/servicepages/Class12Guidance";
import CareerAssessmentTest from "./pages/servicepages/CareerAssessmentTest";
import SubjectClassification from "./pages/servicepages/SubjectClassification";
import UniveristyProgramFinder from "./pages/servicepages/UniversityProgramFinder";
import UniversityGraduatesGuidance from "./pages/servicepages/UniversityGraduatesGuidance";
import WorkingProfessional from "./pages/servicepages/WorkingProfessionalsGuidance";
import OnlineSession from "./pages/servicepages/OnlineSessionPage";
import TaleemiAdvice from "./pages/servicepages/TaleemiAdvicePage";
import TaleemiAnnouncement from "./pages/servicepages/TaleemiAnnouncementsPage";

// Helper Component to combine Home components
const Home = () => (
  <div className="w-full min-h-screen">
    <Hero />
    <ForWhom />
    <OurServices /> {/* Navigation logic removed here */}
    <TheProcess />
    <ContactUs />
    <Testimonials />
  </div>
);
// ----------------------------------------------------------------------

// 1. Define the Wrapper component to inject the navigation prop
const ServiceWrapper = () => {
  // useNavigate is a hook and must be called inside a functional component
  const navigate = useNavigate();
  // Pass the real 'navigate' function to the Service component (which expects 'onNavigate')
  return <Service onNavigate={navigate} />;
};
// ----------------------------------------------------------------------

const App = () => {
  return (
    <div
      className="w-full min-h-screen"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Navbar />
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* About Us Route  */}
        <Route path="/about-us" element={<AboutUs />} />

        {/* Master Service Routes */}
        {/* 2. Use the wrapper component for the master service route */}
        <Route path="/service" element={<ServiceWrapper />} />

        {/* Service pages Routes */}
        <Route
          path="/service/class-10-guidance"
          element={<Class10Guidance />}
        />
        <Route
          path="/service/class-12-guidance"
          element={<Class12Guidance />}
        />
        <Route
          path="/service/career-assessment"
          element={<CareerAssessmentTest />}
        />
        <Route
          path="/service/subject-classification"
          element={<SubjectClassification />}
        />
        <Route
          path="/service/university-program-finder"
          element={<UniveristyProgramFinder />}
        />
        <Route
          path="/service/university-graduates-guidance"
          element={<UniversityGraduatesGuidance />}
        />
        <Route
          path="/service/working-professional-guidance"
          element={<WorkingProfessional />}
        />
        <Route path="/service/online-session" element={<OnlineSession />} />
        <Route path="/service/taleemi-advice" element={<TaleemiAdvice />} />
        <Route path="/service/announcement" element={<TaleemiAnnouncement />} />

        {/* 404 Route */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
