import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaLeaf, FaSeedling, FaChartLine, FaShieldAlt,
  FaTint, FaCloud, FaCheckCircle, FaArrowRight 
} from 'react-icons/fa';

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax for Hero
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const services = [
    {
      icon: FaLeaf,
      title: 'Sustainable Farming',
      description: 'Comprehensive assessment and implementation of eco-friendly practices.',
      features: ['Soil health analysis', 'Biodiversity plans', 'Organic certification'],
      color: 'from-[#1a4d2e] to-[#2d5f3f]',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
    },
    {
      icon: FaSeedling,
      title: 'Crop Optimization',
      description: 'Data-driven crop selection and rotation strategies to maximize yield.',
      features: ['Seasonal planning', 'Yield forecasting', 'Seed selection'],
      color: 'from-[#2d5f3f] to-[#90c749]',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop'
    },
    {
      icon: FaChartLine,
      title: 'Smart Analytics',
      description: 'AI-powered insights and predictive analytics for informed decisions.',
      features: ['Real-time monitoring', 'Disease detection', 'Market forecasting'],
      color: 'from-[#90c749] to-[#b8de6f]',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop'
    },
    {
      icon: FaShieldAlt,
      title: 'Pest Management',
      description: 'Eco-friendly pest control solutions that protect crops.',
      features: ['Biological control', 'Monitoring systems', 'Natural alternatives'],
      color: 'from-[#1a4d2e] to-[#90c749]',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop'
    },
    {
      icon: FaTint,
      title: 'Water Systems',
      description: 'Efficient irrigation solutions and conservation strategies.',
      features: ['Smart irrigation', 'Rainwater harvesting', 'Water quality'],
      color: 'from-[#2d5f3f] to-[#b8de6f]',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&h=400&fit=crop'
    },
    {
      icon: FaCloud,
      title: 'Climate Strategy',
      description: 'Adaptive farming strategies to build resilience against climate change.',
      features: ['Weather analysis', 'Drought resistance', 'Risk assessment'],
      color: 'from-[#1a4d2e] to-[#2d5f3f]',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div ref={containerRef} className="bg-[#faf8f3] overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-[#1a4d2e]/40 z-10 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=1920&auto=format&fit=crop" 
            alt="Services Hero" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-[#faf8f3]/30 rounded-full text-[#faf8f3] text-sm uppercase tracking-widest mb-4 bg-white/10 backdrop-blur-sm">
              Our Expertise
            </span>
            <h1 className="text-6xl md:text-8xl  font-bold text-[#faf8f3] mb-6">
              Agricultural <br/><span className="text-[#90c749]">Excellence</span>
            </h1>
            <p className="text-xl text-[#faf8f3]/90 max-w-2xl mx-auto leading-relaxed">
              Merging traditional wisdom with modern technology to revolutionize your harvest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#1a4d2e]/5"
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image Side */}
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 z-10 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <service.icon className="text-2xl text-white" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl  font-bold text-[#1a4d2e] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[#1a4d2e]/70 text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs font-bold text-[#1a4d2e]/60">
                            <FaCheckCircle className="text-[#90c749] mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contact" className="inline-flex items-center text-[#1a4d2e] font-bold text-sm group-hover:text-[#90c749] transition-colors">
                      Get Started <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- PROCESS TIMELINE --- */}
      <section className="py-24 px-6 bg-[#1a4d2e] text-[#faf8f3] overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">Workflow</span>
            <h2 className="text-5xl  font-bold mt-4">How We Work</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
             {/* Connecting Line */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#90c749]/50 to-transparent"></div>

             {[
               { step: '01', title: 'Consult', desc: 'We assess your land and goals.' },
               { step: '02', title: 'Plan', desc: 'Custom strategy development.' },
               { step: '03', title: 'Execute', desc: 'Implementation with support.' },
               { step: '04', title: 'Grow', desc: 'Continuous monitoring & scaling.' }
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.2 }}
                 className="relative group text-center"
               >
                 <div className="w-24 h-24 mx-auto bg-[#0f2e1b] border border-[#90c749]/30 rounded-full flex items-center justify-center text-3xl  font-bold text-[#90c749] mb-6 relative z-10 group-hover:scale-110 group-hover:border-[#90c749] transition-all duration-300 shadow-[0_0_30px_rgba(144,199,73,0.1)]">
                   {item.step}
                 </div>
                 <h3 className="text-2xl  font-bold mb-2">{item.title}</h3>
                 <p className="text-[#faf8f3]/60 text-sm px-4">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS (Sticky Scroll) --- */}
      <section className="py-24 px-6 bg-[#f5f3ed]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
                <h2 className="text-5xl  font-bold text-[#1a4d2e] mt-4 mb-8">
                  Tangible Results
                </h2>
                <p className="text-[#1a4d2e]/70 text-lg">
                  We don't just promise sustainability; we deliver measurable improvements to your farm's productivity and ecosystem.
                </p>
              </motion.div>

              {[
                { title: "30% Yield Increase", desc: "Average productivity boost reported by our partners within the first harvest cycle." },
                { title: "Eco-Restoration", desc: "Significant improvements in soil biodiversity and pollinator presence." },
                { title: "Cost Efficiency", desc: "Reduced input costs through precision agriculture and resource management." }
              ].map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#90c749]/20 flex items-center justify-center text-[#1a4d2e] group-hover:bg-[#1a4d2e] group-hover:text-[#90c749] transition-colors duration-300 flex-shrink-0">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h3 className="text-2xl  font-bold text-[#1a4d2e] mb-2">{benefit.title}</h3>
                    <p className="text-[#1a4d2e]/70">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative hidden lg:block h-[600px]">
              <div className="sticky top-32">
                 <div className="relative">
                   <div className="absolute -inset-4 bg-[#90c749] rounded-3xl blur-2xl opacity-20"></div>
                   <img 
                     src="/15.jpg" 
                     alt="Farmer Happiness" 
                     className="rounded-3xl shadow-2xl object-cover w-full h-full"
                   />
                   <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl max-w-xs">
                     <p className=" text-xl italic text-[#1a4d2e]">
                       "Agrilyst didn't just change our soil; they changed our future."
                     </p>
                     <p className="text-[#90c749] font-bold text-sm mt-4 uppercase">- Sarah M., Vineyard Owner</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;