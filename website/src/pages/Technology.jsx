import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaMicrochip, FaCloud, FaMobileAlt, FaRobot, FaSatellite, 
  FaChartLine, FaLeaf, FaWater, FaBolt, FaArrowRight, FaWifi, FaDatabase 
} from 'react-icons/fa';

// Helper Component for Animated Numbers
const Counter = ({ from, to, duration = 2, suffix = "" }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          node.textContent = Math.round(value) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration, suffix]);

  return <span ref={nodeRef} />;
};

const Technology = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const technologies = [
    {
      icon: FaMicrochip,
      title: 'IoT Sensor Mesh',
      description: 'A dense network of solar-powered sensors monitoring soil moisture, pH levels, and micro-climates in real-time.',
      features: ['Sub-second latency', 'LoRaWAN connectivity', '5-year battery life']
    },
    {
      icon: FaCloud,
      title: 'AI Cloud Core',
      description: 'Our proprietary machine learning algorithms process millions of data points to predict crop health trends.',
      features: ['Predictive analytics', 'Pattern recognition', 'Auto-scaling infrastructure']
    },
    {
      icon: FaMobileAlt,
      title: 'Command Center',
      description: 'Total farm control from your pocket. Receive alerts, automate irrigation, and track finances on the go.',
      features: ['iOS & Android', 'Offline mode', 'Role-based access']
    },
    {
      icon: FaRobot,
      title: 'Autonomous Systems',
      description: 'Integration with GPS-guided tractors and drones for precise application of resources.',
      features: ['Variable rate application', 'cm-level accuracy', 'Route optimization']
    }
  ];

  const innovations = [
    { icon: FaSatellite, title: 'Satellite Imaging', metric: 99, suffix: '%', label: 'Analysis Accuracy' },
    { icon: FaChartLine, title: 'Yield Prediction', metric: 85, suffix: '%', label: 'Forecast Precision' },
    { icon: FaWater, title: 'Water Savings', metric: 40, suffix: '%', label: 'Reduction in Waste' },
    { icon: FaLeaf, title: 'Carbon Offset', metric: 30, suffix: '%', label: 'Lower Footprint' }
  ];

  return (
    <div ref={containerRef} className="bg-[#faf8f3] overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0f2e1b] pt-20">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#90c749 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e1b] via-[#0f2e1b]/60 to-transparent z-10"></div>
          <img 
            src="/14.jpg" 
            alt="AgTech Hero" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#90c749]/10 border border-[#90c749]/30 text-[#90c749] mb-6 backdrop-blur-md"
          >
            <FaWifi className="animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">Live System Active</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-[#faf8f3] mb-8 leading-tight"
          >
            Farming at the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90c749] to-[#b8de6f]">Speed of Data</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#faf8f3]/70 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            We deploy advanced IoT meshes and AI predictive models to turn your farm into a precision powerhouse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-10 py-5 bg-[#90c749] text-[#1a4d2e] rounded-full text-lg font-bold hover:bg-[#b8de6f] hover:shadow-[0_0_30px_rgba(144,199,73,0.4)] transition-all duration-300"
            >
              <span>Deploy System</span>
              <FaArrowRight className="ml-3" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- LIVE STATS BAR --- */}
      <div className="bg-[#1a4d2e] border-y border-[#faf8f3]/10 py-12 relative z-30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "Active Sensors", val: 50, suffix: "K+" },
             { label: "Data Points/Day", val: 1, suffix: "M+" },
             { label: "Uptime", val: 99, suffix: ".9%" },
             { label: "Farms Connected", val: 500, suffix: "+" }
           ].map((stat, idx) => (
             <div key={idx} className="text-center">
               <div className="text-4xl md:text-5xl font-bold text-[#faf8f3] mb-2">
                 <Counter from={0} to={stat.val} suffix={stat.suffix} />
               </div>
               <div className="text-[#90c749] text-xs font-bold uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>

      {/* --- TECH STACK GRID --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">The Ecosystem</span>
            <h2 className="text-5xl font-bold text-[#1a4d2e] mt-4">Core Technologies</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-[2rem] p-8 md:p-12 shadow-xl hover:shadow-2xl border border-[#1a4d2e]/5 overflow-hidden transition-all duration-500"
              >
                {/* Circuit Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                   <FaMicrochip className="w-full h-full text-[#1a4d2e]" />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#1a4d2e] flex items-center justify-center text-[#90c749] text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <tech.icon />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-[#1a4d2e] mb-4">
                    {tech.title}
                  </h3>
                  <p className="text-[#1a4d2e]/70 text-lg mb-8 leading-relaxed">
                    {tech.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {tech.features.map((feat, idx) => (
                      <span key={idx} className="bg-[#faf8f3] border border-[#1a4d2e]/10 px-4 py-2 rounded-full text-xs font-bold text-[#1a4d2e] uppercase tracking-wide">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORKFLOW TIMELINE --- */}
      <section className="py-24 px-6 bg-[#0f2e1b] text-[#faf8f3] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">Data Pipeline</span>
            <h2 className="text-5xl font-bold mt-4">From Soil to Cloud</h2>
          </div>

          <div className="relative">
            {/* Animated Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#1a4d2e]/50 transform md:-translate-x-1/2">
               <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: "100%" }}
                 transition={{ duration: 1.5, ease: "linear" }}
                 className="w-full bg-[#90c749]"
               />
            </div>

            {[
              { title: "Data Collection", desc: "Sensors gather hyperspectral data on soil chemistry.", icon: FaDatabase },
              { title: "AI Analysis", desc: "Neural networks identify stress patterns invisible to the eye.", icon: FaMicrochip },
              { title: "Insight Delivery", desc: "Actionable prescription maps sent to your dashboard.", icon: FaMobileAlt },
              { title: "Automated Action", desc: "Irrigation and drones execute the plan automatically.", icon: FaRobot }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative flex items-center gap-8 mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-20 md:ml-0`}>
                  <h3 className="text-3xl font-bold text-[#90c749] mb-2">{step.title}</h3>
                  <p className="text-[#faf8f3]/70">{step.desc}</p>
                </div>

                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#0f2e1b] border-4 border-[#90c749] rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(144,199,73,0.3)]">
                  <step.icon className="text-[#90c749] text-xl" />
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INNOVATION METRICS --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">Performance</span>
               <h2 className="text-5xl font-bold text-[#1a4d2e] mt-4 mb-8">
                 Measurable Impact
               </h2>
               <p className="text-[#1a4d2e]/70 text-lg leading-relaxed mb-8">
                 Our technology isn't just flashy; it delivers hard numbers. We rigorously test our models against real-world harvest data to ensure maximum ROI.
               </p>
               <Link to="/contact" className="text-[#1a4d2e] font-bold border-b-2 border-[#90c749] pb-1 hover:text-[#90c749] transition-colors">
                 Download Case Study
               </Link>
             </div>

             <div className="grid grid-cols-2 gap-6">
                {innovations.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="bg-[#faf8f3] p-8 rounded-3xl text-center group"
                  >
                    <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-[#90c749] mb-4 shadow-sm group-hover:bg-[#90c749] group-hover:text-white transition-colors">
                      <item.icon />
                    </div>
                    <div className="text-4xl font-bold text-[#1a4d2e] mb-1">
                      <Counter from={0} to={item.metric} suffix={item.suffix} />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#1a4d2e]/50">{item.label}</div>
                  </motion.div>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* --- INTEGRATION --- */}
      <section className="py-24 px-6 bg-[#f5f3ed] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
           >
              <div className="absolute -inset-4 bg-[#90c749] rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src="/11.jpg" 
                alt="Integration Dashboard" 
                className="relative rounded-3xl shadow-2xl"
              />
           </motion.div>

           <div>
             <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">Integration</span>
             <h2 className="text-5xl font-bold text-[#1a4d2e] mt-4 mb-6">
               Plug & Play Agriculture
             </h2>
             <p className="text-xl text-[#1a4d2e]/70 mb-8">
               No need to rip out your existing infrastructure. Our sensors and software integrate with John Deere, Trimble, and Climate FieldView systems.
             </p>
             <ul className="space-y-4">
               {[
                 { title: "Easy Setup", desc: "Sensors auto-connect in minutes." },
                 { title: "API Access", desc: "Full developer API for custom integrations." },
                 { title: "Legacy Support", desc: "Works with older equipment models." }
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-4">
                   <div className="w-6 h-6 rounded-full bg-[#90c749] flex-shrink-0 mt-1 flex items-center justify-center text-[#1a4d2e]">
                     <FaBolt size={12} />
                   </div>
                   <div>
                     <h4 className="font-bold text-[#1a4d2e]">{item.title}</h4>
                     <p className="text-sm text-[#1a4d2e]/60">{item.desc}</p>
                   </div>
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6 bg-[#1a4d2e] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#faf8f3] mb-8">
            Ready to Digitalize?
          </h2>
          <p className="text-xl text-[#faf8f3]/70 mb-10">
            Schedule a live demo with our engineers and see how much you can save in your first season.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-12 py-5 bg-[#90c749] text-[#1a4d2e] rounded-full text-lg font-bold hover:bg-[#faf8f3] transition-all duration-300 shadow-xl"
          >
            <span>Book Live Demo</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Technology;