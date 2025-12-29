import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Technology from './pages/Technology';
import Projects from './pages/Projects'
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream grift-font relative">
                          <style jsx>{`
            /* Grift Font Face - Light */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-light.otf") format("opentype"),
                url("./fonts/grift-light.ttf") format("truetype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Light Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-lightitalic.otf") format("opentype"),
                url("./fonts/grift-lightitalic.ttf") format("truetype");
              font-weight: 300;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Regular */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-black.otf") format("opentype"),
                url("./fonts/grift-black.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-italic.otf") format("opentype"),
                url("./fonts/grift-italic.ttf") format("truetype");
              font-weight: 400;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Medium */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-medium.otf") format("opentype"),
                url("./fonts/grift-medium.ttf") format("truetype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Medium Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-mediumitalic.otf") format("opentype"),
                url("./fonts/grift-mediumitalic.ttf") format("truetype");
              font-weight: 500;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Bold */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-bold.otf") format("opentype"),
                url("./fonts/grift-bold.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Bold Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-bolditalic.otf") format("opentype"),
                url("./fonts/grift-bolditalic.ttf") format("truetype");
              font-weight: 700;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Extrabold */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extrabold.otf") format("opentype"),
                url("./fonts/grift-extrabold.ttf") format("truetype");
              font-weight: 800;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Extrabold Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extrabolditalic.otf") format("opentype"),
                url("./fonts/grift-extrabolditalic.ttf") format("truetype");
              font-weight: 800;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Extralight */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extralight.otf") format("opentype"),
                url("./fonts/grift-extralight.ttf") format("truetype");
              font-weight: 200;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Extralight Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extralightitalic.otf") format("opentype"),
                url("./fonts/grift-extralightitalic.ttf") format("truetype");
              font-weight: 200;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Black */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-blackitalic.otf") format("opentype"),
                url("./fonts/grift-blackitalic.ttf") format("truetype");
              font-weight: 900;
              font-style: italic;
              font-display: swap;
            }

            /* Niveau Grotesk Font Face - Regular */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/NiveauGroteskRegular.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            /* Niveau Grotesk Font Face - Bold */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/Niveau Grotesk Bold.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Font utility classes */
            .grift-font {
              font-family: "Grift", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
                sans-serif;
            }

            .niveau-font {
              font-family: "Niveau Grotesk", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
          `}</style>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;