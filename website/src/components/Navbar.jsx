import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Technology", path: "technology" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf8f3]/80 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 text-white group-hover:rotate-12 transition-transform duration-300">
            <img
              // If scrolled, use original (dark) logo. If not, use the light version.
              src={scrolled ? "/logo.png" : "/logo2.png"}
              alt="Agrilyst"
              className="h-10 w-17 object-contain transition-opacity duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative  font-medium text-sm tracking-wider uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-[#1a4d2e] hover:text-[#90c749]"
                  : "text-[#faf8f3] hover:text-[#90c749]"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#90c749]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className={`px-8 py-3 rounded-full  font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
              scrolled
                ? "bg-[#1a4d2e] text-[#faf8f3]"
                : "bg-[#faf8f3] text-[#1a4d2e]"
            }`}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden text-3xl focus:outline-none z-50 ${
            scrolled ? "text-[#1a4d2e]" : "text-[#faf8f3]"
          }`}
        >
          {isOpen ? <HiX className="text-[#1a4d2e]" /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-[#faf8f3] shadow-2xl lg:hidden h-screen flex flex-col justify-center items-center z-40"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-2xl font-bold text-[#1a4d2e] hover:text-[#90c749]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#1a4d2e] text-[#faf8f3] px-10 py-4 rounded-full font-bold"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
