import React, { useState } from "react";
// 1. IMPORT LINK from React Router DOM
import { Link } from 'react-router-dom'; 

// Assuming the logo path is correct in your file structure
import Logo from "../assets/logo-bg-less.png";

// The component no longer accepts the onNavigate prop
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // The 'route' is now the actual URL path used in App.jsx
  const navLinks = [
    { name: "Home", path: "/" },          // Maps to <Route path="/" ... />
    { name: "Services", path: "/service" }, // Maps to <Route path="/service" ... />
    { name: "About Us", path: "/about-us" },  // Maps to <Route path="/about-us" ... />
  ];

  // Helper function for mobile menu to close after clicking a link
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="backdrop-blur-lg bg-white/70 border-b border-gray-200 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-9xl mx-20 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LEFT: Logo - Use Link to navigate to Home path "/" */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Site logo"
              className="h-30 w-auto object-contain"
            />
          </Link>

          {/* MIDDLE: Nav links (Desktop) */}
          <nav className="hidden md:flex md:space-x-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              // 2. USE <Link> component instead of <a>
              <Link
                key={link.name}
                to={link.path} // Use the path defined in navLinks
                className="text-[#1E3A8A] font-medium relative group transition-colors duration-300 cursor-pointer"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F97316] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* RIGHT: Buttons and Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex px-4 py-2 rounded-lg text-sm font-medium border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition duration-300">
              Login
            </button>
            <button className="hidden md:inline-flex px-5 py-2 rounded-lg text-sm font-semibold bg-[#F97316] text-white hover:bg-[#EA580C] shadow-lg transition duration-300">
              Make An Appointment
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#1E3A8A] hover:bg-[#E5E7EB] focus:outline-none transition duration-300"
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 pb-4 border-t border-gray-200 bg-white/90 backdrop-blur-md rounded-b-lg shadow-md transition duration-300">
            <div className="flex flex-col px-4 space-y-2">
              {navLinks.map((link) => (
                // 3. USE <Link> in mobile menu
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu} // Close menu on click
                  className="text-[#1E3A8A] hover:text-[#F97316] py-2 transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <button className="w-full px-3 py-2 rounded-lg border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition duration-300">
                  Login
                </button>
                <button className="w-full px-3 py-2 rounded-lg bg-[#F97316] text-white hover:bg-[#EA580C] shadow transition duration-300">
                  Make An Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}