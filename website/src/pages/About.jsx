import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaLeaf, 
  FaLightbulb, 
  FaHeart, 
  FaHandshake,
  FaUsers,
  FaAward,
  FaGlobe,
  FaArrowRight
} from 'react-icons/fa';
import { GiPlantRoots } from "react-icons/gi";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const values = [
    {
      icon: FaLeaf,
      title: 'Sustainability',
      description: 'We prioritize eco-friendly practices that preserve our planet for future generations.',
      color: 'bg-[#1a4d2e]'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Constantly evolving with cutting-edge technology to solve agricultural challenges.',
      color: 'bg-[#90c749]'
    },
    {
      icon: FaHeart,
      title: 'Integrity',
      description: 'Building trust through transparent, ethical business practices and genuine care.',
      color: 'bg-[#2d5f3f]'
    },
    {
      icon: FaHandshake,
      title: 'Partnership',
      description: 'Working closely with farmers to understand and meet their unique needs.',
      color: 'bg-[#b8de6f]'
    }
  ];

  const team = [
    {
      name: 'Dr. Tendai Moyo',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop',
      bio: 'Leading agricultural innovation with 20+ years of experience.'
    },
    {
      name: 'Sarah Ncube',
      role: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
      bio: 'Pioneering smart farming solutions through AI and data analytics.'
    },
    {
      name: 'James Mutasa',
      role: 'Chief Agronomist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop',
      bio: 'Expert in sustainable farming practices and crop optimization.'
    },
    {
      name: 'Linda Chigwedere',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop',
      bio: 'Ensuring seamless delivery of services across all regions.'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Company Founded', description: 'Started with a vision to revolutionize agriculture in Masvingo.' },
    { year: '2017', event: '100+ Farms', description: 'Reached our first major milestone of partnering local farms.' },
    { year: '2020', event: 'Regional Expansion', description: 'Expanded operations across Southern Africa.' },
    { year: '2023', event: 'Tech Innovation', description: 'Launched AI-powered crop analytics platform.' },
    { year: '2024', event: 'Global Recognition', description: 'Awarded Best AgTech Company in Africa.' }
  ];

  return (
    <div ref={containerRef} className="bg-[#faf8f3] overflow-hidden">
      
      {/* --- HERO SECTION WITH WAVE --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1a4d2e]/40 z-10 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=1920&auto=format&fit=crop" 
            alt="Farm Hero" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 py-1 px-4 border border-[#faf8f3]/30 rounded-full text-[#faf8f3] text-sm uppercase tracking-widest mb-6 bg-white/10 backdrop-blur-sm">
               <GiPlantRoots className="text-[#90c749]" /> Our Mission
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#faf8f3] mb-6 leading-tight">
              Cultivating <br />
              <span className="text-[#90c749]">Excellence</span>
            </h1>
            <p className="text-xl text-[#faf8f3]/90 leading-relaxed max-w-2xl mx-auto font-light">
              Bridging the gap between traditional wisdom and modern technology to create a sustainable future for agriculture.
            </p>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
          <svg 
            className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px] lg:h-[150px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
              className="fill-[#faf8f3]"
            ></path>
          </svg>
        </div>
      </section>

      {/* --- STORY & STATS SPLIT --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm mb-2 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d2e] mb-8 leading-tight">
              Rooted in Sustainability, <br/>
              <span className=" font-serif opacity-80">Driven by Purpose.</span>
            </h2>
            <div className="space-y-6 text-lg text-[#1a4d2e]/70 leading-relaxed font-light">
              <p>
                Founded in 2015, Agrilyst began with a simple yet powerful vision: to revolutionize the agricultural landscape.
              </p>
              <p>
                Our founders, a team of passionate agronomists and tech innovators, recognized that sustainable agriculture wasn't just about adopting new technologies—it was about creating solutions that worked in harmony with nature while empowering farmers.
              </p>
              <div className="border-l-4 border-[#90c749] pl-6 py-2 my-8">
                <p className="text-xl font-bold text-[#1a4d2e] italic font-serif">
                  "We don't just grow crops; we grow communities and futures."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
             {[
               { icon: FaUsers, count: "500+", label: "Partner Farms" },
               { icon: FaGlobe, count: "15", label: "Countries" },
               { icon: FaAward, count: "25+", label: "Awards Won" },
               { icon: FaHandshake, count: "98%", label: "Client Trust" }
             ].map((stat, idx) => (
               <div key={idx} className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-[#1a4d2e]/10 group hover:bg-[#1a4d2e] transition-colors duration-500">
                 <stat.icon className="text-4xl text-[#1a4d2e] mb-4 group-hover:text-[#90c749] transition-colors duration-500" />
                 <h3 className="text-4xl font-bold text-[#1a4d2e] group-hover:text-white transition-colors duration-500">{stat.count}</h3>
                 <p className="text-sm text-[#1a4d2e]/60 font-bold uppercase tracking-wider mt-2 group-hover:text-white/80 transition-colors duration-500">{stat.label}</p>
               </div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-24 px-6 bg-[#1a4d2e] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#90c749] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#b8de6f] rounded-full blur-[100px] opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">Our Core Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#faf8f3] mt-4">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#faf8f3]/5 backdrop-blur-md border border-[#faf8f3]/10 p-8 rounded-3xl hover:bg-[#faf8f3]/10 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                  <value.icon className="text-2xl text-[#faf8f3]" />
                </div>
                <h3 className="text-2xl font-bold text-[#faf8f3] mb-3">{value.title}</h3>
                <p className="text-[#faf8f3]/70 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MILESTONES TIMELINE (PLANT STALK STYLE) --- */}
      <section className="py-24 px-6 bg-[#faf8f3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">The Journey</span>
            <h2 className="text-5xl font-bold text-[#1a4d2e] mt-2">How We Grew</h2>
          </div>
          
          <div className="relative">
            {/* Stalk Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#1a4d2e]/20 transform md:-translate-x-1/2 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Leaf Node Dot */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-[#90c749] rounded-full border-4 border-[#faf8f3] transform -translate-x-1/2 z-10 box-content shadow-lg"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-[#1a4d2e]/5 hover:border-[#90c749] transition-colors duration-300 relative overflow-hidden group">
                       <div className={`absolute top-0 w-1 h-full bg-[#90c749] ${index % 2 === 0 ? 'right-0' : 'left-0'}`}></div>
                      
                      <span className="text-6xl font-bold text-[#1a4d2e]/5 absolute top-2 right-6 pointer-events-none group-hover:text-[#1a4d2e]/10 transition-colors">
                        {item.year}
                      </span>
                      <h3 className="text-[#90c749] font-bold text-lg mb-1">{item.year}</h3>
                      <h4 className="text-xl font-bold text-[#1a4d2e] mb-2">{item.event}</h4>
                      <p className="text-[#1a4d2e]/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty Spacer */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#90c749] font-bold uppercase tracking-widest text-sm">Our Experts</span>
              <h2 className="text-5xl md:text-6xl font-bold text-[#1a4d2e] mt-2">
                Meet the Team
              </h2>
            </div>
            <p className="text-[#1a4d2e]/70 max-w-md text-lg">
              Dedicated professionals working tirelessly to bring sustainable solutions to your farm.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] h-[400px] shadow-lg cursor-pointer"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e] via-[#1a4d2e]/40 to-transparent opacity-90 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-[#faf8f3]">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-[#90c749] font-medium text-sm mb-3 uppercase tracking-wider">{member.role}</p>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed text-[#faf8f3]/80">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-[#1a4d2e] text-center px-6">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
         >
            <h2 className="text-4xl md:text-5xl font-bold text-[#faf8f3] mb-6">Ready to Cultivate Success?</h2>
            <p className="text-xl text-[#faf8f3]/70 mb-10">Join us in our mission to create a sustainable and profitable future for agriculture.</p>
            <button className="bg-[#90c749] text-[#1a4d2e] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#faf8f3] transition-all duration-300 shadow-[0_0_20px_rgba(144,199,73,0.3)] flex items-center gap-2 mx-auto">
                Get in Touch <FaArrowRight />
            </button>
         </motion.div>
      </section>

    </div>
  );
};

export default About;