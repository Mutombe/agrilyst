import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Services', path: '/services' },
      { name: 'Products', path: '/products' },
      { name: 'Technology', path: '/technology' },
    ],
    Support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '/contact' },
      { name: 'Privacy Policy', path: '/contact' },
      { name: 'Terms of Service', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#1a4d2e] text-[#faf8f3] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#90c749] blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#b8de6f] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/logo2.png" alt="Agrilyst" className="h-12 w-12 object-contain" />
            </div>
            <p className="text-[#faf8f3]/80 leading-relaxed">
              Cultivating innovation in agriculture through sustainable practices and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-[#90c749]/10 hover:bg-[#90c749] flex items-center justify-center text-[#faf8f3] hover:text-[#1a4d2e] transition-all duration-300"
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h3 className="text-xl  font-semibold text-[#90c749]">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-[#faf8f3]/80 hover:text-[#90c749] transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl  font-semibold text-[#90c749]">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-[#faf8f3]/80">
                <FaMapMarkerAlt className="text-[#90c749] mt-1 flex-shrink-0" />
                <span>123 Agriculture Avenue<br />Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center space-x-3 text-[#faf8f3]/80 hover:text-[#90c749] transition-colors">
                <FaPhone className="text-[#90c749] flex-shrink-0" />
                <a href="tel:+263123456789">+263 123 456 789</a>
              </li>
              <li className="flex items-center space-x-3 text-[#faf8f3]/80 hover:text-[#90c749] transition-colors">
                <FaEnvelope className="text-[#90c749] flex-shrink-0" />
                <a href="mailto:info@agrilyst.com">info@agrilyst.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#faf8f3]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#faf8f3]/60 text-sm">
              © {currentYear} Agrilyst™. All rights reserved.
            </p>
            <p className="text-[#faf8f3]/60 text-sm">
              Designed with <span className="text-[#90c749]">♥</span> for sustainable agriculture
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;