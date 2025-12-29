import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaSeedling,
  FaTractor,
  FaSolarPanel,
  FaHandHoldingWater,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa";
import { GiLindenLeaf, GiWheat, GiFarmTractor } from "react-icons/gi";

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  // Animated Counters State
  const [counts, setCounts] = useState({ clients: 0, projects: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        clients: prev.clients < 120 ? prev.clients + 1 : 120,
        projects: prev.projects < 85 ? prev.projects + 1 : 85,
      }));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: FaSeedling,
      title: "Organic Farming",
      desc: "Sustainable cultivation methods promoting soil health.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: FaTractor,
      title: "Modern Machinery",
      desc: "High-tech equipment for efficient large-scale harvesting.",
      image: "/12.jpg",
    },
    {
      icon: FaSolarPanel,
      title: "Renewable Energy",
      desc: "Implementing solar solutions for eco-friendly farm power.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: FaHandHoldingWater,
      title: "Irrigation Systems",
      desc: "Smart water management for optimal crop hydration.",
      image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#faf8f3] overflow-x-hidden">
      {/* --- KILLER HERO SECTION (WORLD CLASS REDESIGN) --- */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Dynamic Background with Parallax */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d2e]/90 via-[#1a4d2e]/40 to-transparent z-10" />
          <motion.div style={{ y: y1 }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2500&auto=format&fit=crop"
              alt="Farm Landscape"
              className="w-full h-[120%] object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Content Container - Centered and Clean */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-[#90c749]"></span>
                <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">
                  The Future of Farming
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-8 text-[#faf8f3]">
                Rooted in Land, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90c749] to-[#faf8f3]">
                  Driven by Tech
                </span>
              </h1>

              <p className="text-xl text-[#faf8f3]/90 max-w-xl leading-relaxed mb-10 font-light">
                We combine traditional wisdom with modern technology to produce
                100% organic, healthy, and sustainable food for the next
                generation.
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="bg-[#90c749] hover:bg-[#7ab038] text-[#1a4d2e] px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(144,199,73,0.4)] hover:shadow-[0_0_30px_rgba(144,199,73,0.6)] flex items-center gap-3"
                onClick={() => window.location.href = '/services'}>
                  Our Services <FaArrowRight />
                </button>
                <button className="flex items-center gap-4 group text-white"
                onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}>
                  <div className="w-14 h-14 rounded-full border-2 border-[#faf8f3]/30 flex items-center justify-center group-hover:bg-[#faf8f3] group-hover:text-[#1a4d2e] transition-all duration-300">
                    <FaPlay className="ml-1" />
                  </div>
                  <span className="font-bold tracking-wide">Watch Video</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- BOTTOM GLASS STATS BAR (Replaces the Card) --- */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="absolute bottom-0 right-0 left-0 z-30 border-t border-[#faf8f3]/20 bg-[#1a4d2e]/30 backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Stat 1 */}
                <div className="flex items-center gap-4 border-r border-[#faf8f3]/20 last:border-0">
                   <div className="text-4xl font-bold text-[#90c749]">{counts.clients}k+</div>
                   <div className="text-xs text-white uppercase tracking-wider font-bold">Happy <br/> Clients</div>
                </div>
                {/* Stat 2 */}
                <div className="flex items-center gap-4 border-r border-[#faf8f3]/20 last:border-0">
                   <div className="text-4xl font-bold text-[#90c749]">{counts.projects}</div>
                   <div className="text-xs text-white uppercase tracking-wider font-bold">Projects <br/> Done</div>
                </div>
                {/* Stat 3 */}
                <div className="hidden md:flex items-center gap-4 border-r border-[#faf8f3]/20 last:border-0">
                   <div className="text-4xl font-bold text-[#90c749]">100%</div>
                   <div className="text-xs text-white uppercase tracking-wider font-bold">Organic <br/> Guarantee</div>
                </div>
                {/* Stat 4 */}
                <div className="hidden md:flex items-center gap-4">
                   <div className="text-4xl font-bold text-[#90c749]">35+</div>
                   <div className="text-xs text-white uppercase tracking-wider font-bold">Awards <br/> Winning</div>
                </div>
            </div>
        </motion.div>

      </section>

      {/* --- SERVICES SECTION (Redesigned with Images) --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div className="max-w-2xl">
                <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">
                  What We Offer
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a4d2e] mt-4">
                  Providing High Quality <br/>
                  <span className="font-serif text-[#90c749]">Products & Services</span>
                </h2>
             </div>
             <div className="hidden md:block pb-2">
                <a href="/services" className="text-[#1a4d2e] font-bold border-b-2 border-[#90c749] pb-1 hover:text-[#90c749] transition-colors">
                    View All Services
                </a>
             </div>
          </div>

          {/* New Image Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[450px] w-full overflow-hidden rounded-[2rem] cursor-pointer shadow-lg"
              >
                {/* Background Image */}
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e]/90 via-[#1a4d2e]/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <div className="w-14 h-14 bg-[#90c749] rounded-2xl flex items-center justify-center text-[#1a4d2e] text-2xl mb-4 shadow-lg">
                        <service.icon />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 font-['Cormorant_Garamond']">{service.title}</h3>
                    <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                        {service.desc}
                    </p>
                    
                    <div className="flex items-center gap-2 text-[#90c749] font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                        Learn More <FaArrowRight />
                    </div>
                </div>

                {/* Top Right Tag (Optional decorative element) */}
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold border border-white/30">
                    0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
                {/* Wave Divider */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px] lg:h-[150px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-[#1a4d2e]"
            ></path>
          </svg>
        </div>
      </section>

      {/* --- FEATURE HIGHLIGHT (Existing) --- */}
      <section className="py-20 px-6 bg-[#1a4d2e] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <GiLindenLeaf className="w-full h-full text-white rotate-12 transform translate-x-1/4" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#90c749] rounded-3xl z-0"></div>
            <img
              src="/1.jpg"
              alt="Organic Food"
              className="relative z-10 rounded-3xl w-full object-cover shadow-2xl"
            />
            <div className="absolute bottom-10 right-[-30px] bg-[#faf8f3] p-8 rounded-full shadow-2xl hidden md:block">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-[#1a4d2e] ">100%</h4>
                <span className="text-xs font-bold text-[#90c749] uppercase tracking-wider">
                  Organic
                </span>
              </div>
            </div>
          </motion.div>

          <div className="text-[#faf8f3]">
            <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">
              Why Choose Us
            </span>
            <h2 className=" text-5xl font-bold mt-4 mb-6">
              Quality Food is the Most Important Thing in Our Life
            </h2>
            <p className="text-[#faf8f3]/70 mb-8 leading-relaxed">
              We connect you with the origins of your food. Our commitment to
              organic farming ensures that every product is free from harmful
              chemicals and rich in nutrients.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Eco System",
                  desc: "Environmental friendly practices",
                },
                {
                  title: "Fresh Vegetables",
                  desc: "Direct from farm to your table",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#90c749]/20 flex items-center justify-center text-[#90c749] mt-1">
                    <GiLindenLeaf />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold ">{item.title}</h4>
                    <p className="text-[#faf8f3]/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;