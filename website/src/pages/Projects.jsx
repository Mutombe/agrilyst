import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaLeaf, FaWater, FaChartLine, FaArrowRight, FaFilter, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const filters = ['All', 'Sustainable', 'Technology', 'Irrigation', 'Community'];

  const projects = [
    {
      id: 1,
      title: "Masvingo Organic Initiative",
      category: "Sustainable",
      location: "Masvingo, Zimbabwe",
      image: "/2.jpg",
      stats: { label: "Yield Increase", value: "45%" },
      desc: "Transitioning a 50-hectare commercial farm to fully organic practices using regenerative soil techniques."
    },
    {
      id: 2,
      title: "Smart Drip Implementation",
      category: "Irrigation",
      location: "Manicaland, Zimbabwe",
      image: "/13.jpg",
      stats: { label: "Water Saved", value: "60%" },
      desc: "Installing IoT-enabled drip irrigation sensors to optimize water usage during dry seasons."
    },
    {
      id: 3,
      title: "Drone Mapping Project",
      category: "Technology",
      location: "Mashonaland East",
      image: "/12.jpg",
      stats: { label: "Coverage", value: "500 Ha" },
      desc: "High-precision aerial mapping to identify soil nutrient deficiencies and pest hotspots."
    },
    {
      id: 4,
      title: "Community Garden Network",
      category: "Community",
      location: "Bulawayo, Zimbabwe",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&h=1000&fit=crop",
      stats: { label: "Families Fed", value: "200+" },
      desc: "Establishing a network of urban micro-farms to support local food security."
    },
    {
      id: 5,
      title: "Solar Pump Integration",
      category: "Technology",
      location: "Matabeleland North",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=1000&fit=crop",
      stats: { label: "Energy Cut", value: "100%" },
      desc: "Replacing diesel generators with solar-powered pumping systems for off-grid reliability."
    },
    {
      id: 6,
      title: "Maize Yield Optimization",
      category: "Sustainable",
      location: "Harare Province",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=1000&fit=crop",
      stats: { label: "Harvest", value: "12 Tons/Ha" },
      desc: "Using hybrid seeds and precision fertilization to break regional yield records."
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div ref={containerRef} className="bg-[#faf8f3] overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1a4d2e]/60 z-10 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1920&auto=format&fit=crop" 
            alt="Projects Hero" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-[#faf8f3]/30 rounded-full text-[#faf8f3] text-sm uppercase tracking-widest mb-4 bg-white/10 backdrop-blur-sm">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl  font-bold text-[#faf8f3] mb-6">
              Cultivating <span className="text-[#90c749]">Success</span>
            </h1>
            <p className="text-xl text-[#faf8f3]/90 leading-relaxed">
              Real results from farms across Zimbabwe and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER BAR --- */}
      <section className="py-12 sticky top-20 z-40 bg-[#faf8f3]/95 backdrop-blur-md border-b border-[#1a4d2e]/5">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex justify-start md:justify-center gap-4 min-w-max">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#1a4d2e] text-[#faf8f3] shadow-lg'
                    : 'bg-white text-[#1a4d2e] border border-[#1a4d2e]/10 hover:border-[#90c749]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section className="py-24 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl"
                >
                  {/* Background Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e] via-[#1a4d2e]/40 to-transparent opacity-90 transition-opacity duration-300"></div>

                  {/* Content - Default State */}
                  <div className="absolute top-6 left-6 z-20">
                     <span className="bg-[#90c749] text-[#1a4d2e] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                       {project.category}
                     </span>
                  </div>

                  {/* Bottom Content - Always Visible */}
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl  font-bold text-[#faf8f3] mb-1 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#90c749] text-sm font-bold mb-4 flex items-center gap-2">
                       <FaMapMarkerAlt /> {project.location}
                    </p>
                    
                    {/* Reveal on Hover */}
                    <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <p className="text-[#faf8f3]/80 text-sm mb-6 leading-relaxed">
                        {project.desc}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="bg-[#faf8f3]/10 backdrop-blur-md rounded-xl p-3 border border-[#faf8f3]/20">
                          <p className="text-[#90c749] font-bold text-2xl">{project.stats.value}</p>
                          <p className="text-[#faf8f3]/60 text-xs uppercase">{project.stats.label}</p>
                        </div>
                        <button className="w-12 h-12 rounded-full bg-[#90c749] flex items-center justify-center text-[#1a4d2e] hover:bg-[#faf8f3] transition-colors">
                           <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURED STATS --- */}
      <section className="py-24 px-6 bg-[#1a4d2e] text-[#faf8f3] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
           <div>
             <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">Impact</span>
             <h2 className="text-5xl  font-bold mt-4 mb-6">
               Results that Speak
             </h2>
             <p className="text-[#faf8f3]/70 text-lg leading-relaxed mb-8">
               Our projects aren't just about implementing technology; they are about creating tangible value for farmers and the ecosystem.
             </p>
             <Link to="/contact" className="inline-flex items-center text-[#90c749] font-bold border-b border-[#90c749] pb-1 hover:text-[#faf8f3] hover:border-[#faf8f3] transition-colors">
               Start Your Project
             </Link>
           </div>
           
           <div className="grid grid-cols-2 gap-6">
              {[
                { icon: FaChartLine, val: "300+", label: "Projects Completed" },
                { icon: FaWater, val: "1M+", label: "Gallons Saved" },
                { icon: FaLeaf, val: "50k", label: "Hectares Regenerated" },
                { icon: FaArrowRight, val: "99%", label: "Client Satisfaction" } // Placeholder icon
              ].map((stat, i) => (
                <div key={i} className="bg-[#faf8f3]/10 backdrop-blur-md p-6 rounded-2xl border border-[#faf8f3]/10">
                   <div className="text-3xl font-bold text-[#faf8f3] mb-1">{stat.val}</div>
                   <div className="text-[#90c749] text-xs uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-24 px-6 bg-[#f5f3ed]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl  font-bold text-[#1a4d2e] mb-6">
            Have a project in mind?
          </h2>
          <p className="text-[#1a4d2e]/70 mb-10 text-lg">
            Whether you are a small-scale farmer or a commercial enterprise, we have the expertise to help you succeed.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-12 py-5 bg-[#1a4d2e] text-[#faf8f3] rounded-full text-lg font-bold hover:bg-[#2d5f3f] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <span>Get a Quote</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

// Helper Icon for map
import { FaMapMarkerAlt as MapIcon } from 'react-icons/fa';

export default Projects;