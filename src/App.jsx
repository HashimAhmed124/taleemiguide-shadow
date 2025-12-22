// App.jsx

//packages imports
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Landing page contents
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
import Service from "./pages/Service";

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

// Dashboard pages
import UserDashboard from "./pages/dashboards/userdashboard";

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
  // Simple auth mock (later replace with real auth)
  const [isAuthed, setIsAuthed] = useState(false);

  // demo notification state
  const [unreadNotifications, setUnreadNotifications] = useState(2);
  const [unreadMessages, setUnreadMessages] = useState(1);

  const [user, setUser] = useState({
    name: "TaleemiGuide User",
    avatarUrl: "", // put image url when available
  });

  useEffect(() => {
    // if token exists => authed (you can rename "tg_token" to your real key)
    const token = localStorage.getItem("tg_token");
    setIsAuthed(Boolean(token));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("tg_token");
    setIsAuthed(false);
  };

  return (
    <div
      className="w-full min-h-screen"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Navbar
        isAuthed={isAuthed}
        user={user}
        unreadNotifications={unreadNotifications}
        unreadMessages={unreadMessages}
        onLogout={handleLogout}
      />
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
        {/* Dashboards routes */}
        <Route path="/userdashboard" element={<UserDashboard />} />

        {/* 404 Route */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
