import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock,
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    { icon: FaMapMarkerAlt, title: 'Headquarters', details: ['123 Agriculture Avenue', 'Harare, Zimbabwe'], link: null },
    { icon: FaPhone, title: 'Call Us', details: ['+263 123 456 789', 'Mon-Fri 8am-5pm'], link: 'tel:+263123456789' },
    { icon: FaEnvelope, title: 'Email Us', details: ['info@agrilyst.com', 'support@agrilyst.com'], link: 'mailto:info@agrilyst.com' },
    { icon: FaClock, title: 'Working Hours', details: ['Mon - Fri: 08:00 - 17:00', 'Sat: 09:00 - 13:00'], link: null }
  ];

  return (
    <div className="bg-[#faf8f3] overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#1a4d2e] ">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e] to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#90c749]/20 text-[#90c749] text-sm font-bold uppercase tracking-widest mb-4 border border-[#90c749]/30">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#faf8f3] mb-6">
              Let's Cultivate <br/> a <span className="text-[#90c749]">Partnership</span>
            </h1>
            <p className="text-xl text-[#faf8f3]/80 leading-relaxed max-w-2xl mx-auto">
              Ready to transform your farm? Our team of experts is ready to help you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-30 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-[#1a4d2e]/5 hover:border-[#90c749]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#1a4d2e] flex items-center justify-center text-[#90c749] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a4d2e] mb-2">{info.title}</h3>
                    {info.details.map((line, i) => (
                      <p key={i} className="text-[#1a4d2e]/70 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="bg-[#1a4d2e] p-8 rounded-3xl shadow-xl text-center"
            >
              <h3 className="text-[#faf8f3] font-bold text-xl mb-6">Follow Our Journey</h3>
              <div className="flex justify-center gap-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#faf8f3]/10 flex items-center justify-center text-[#faf8f3] hover:bg-[#90c749] hover:text-[#1a4d2e] transition-all duration-300">
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-[#1a4d2e]/5"
          >
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#1a4d2e]">Send a Message</h2>
              <p className="text-[#1a4d2e]/60 mt-2">We typically reply within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#1a4d2e]/60 ml-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#faf8f3] border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#90c749] transition-all text-[#1a4d2e]"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#1a4d2e]/60 ml-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#faf8f3] border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#90c749] transition-all text-[#1a4d2e]"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#1a4d2e]/60 ml-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#faf8f3] border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#90c749] transition-all text-[#1a4d2e]"
                    placeholder="+263 ..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#1a4d2e]/60 ml-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#faf8f3] border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#90c749] transition-all text-[#1a4d2e]"
                    placeholder="General Inquiry"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#1a4d2e]/60 ml-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#faf8f3] border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#90c749] transition-all text-[#1a4d2e]"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1a4d2e] to-[#2d5f3f] text-[#faf8f3] font-bold py-5 rounded-2xl hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
              >
                {submitted ? 'Message Sent!' : 'Send Message'} <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="h-[400px] w-full relative z-10">
        <iframe
          src="https://maps.google.com/maps?q=Harare&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
        <div className="absolute inset-0 bg-[#1a4d2e]/20 pointer-events-none"></div>
      </section>

    </div>
  );
};

export default Contact;