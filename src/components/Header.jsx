import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

// Ikon Hamburger (Menu)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// Ikon Close (X)
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);
// --------------------------------------------------


const Header = () => {
  const menuItems = [
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    // { name: "Apps", path: "/apps" },
    { name: "Contact", path: "/contact" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 w-full bg-white py-6 px-6 sm:px-10 flex items-center justify-between z-30 shadow-sm">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight" onClick={closeSidebar}>
          HiwiDigi<span className="text-black">.</span>
        </Link>

        {/* 2. Navigasi Desktop: Terlihat di 'md' ke atas, tersembunyi di mobile */}
        <nav className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-semibold hover:text-gray-500 transition-colors duration-200 ${
                  isActive ? "text-black" : "text-gray-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-gray-800"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <MenuIcon />
        </button>
      </header>

      {/* --- Sidebar & Overlay untuk Mobile --- */}

      {/* 4. Overlay (Latar belakang gelap) */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300
          ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeSidebar}
      ></div>

      {/* 5. Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        
        <div className="flex justify-end p-6">
          <button
            className="p-2 text-gray-800"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-6 px-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeSidebar} 
              className={({ isActive }) =>
                `text-xl font-semibold hover:text-gray-500 transition-colors duration-200 ${
                  isActive ? "text-black" : "text-gray-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;