import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  FaSeedling,
  FaFlask,
  FaTools,
  FaMicrochip,
  FaCheckCircle,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const Products = () => {
  const categories = [
    {
      name: "Seeds & Seedlings",
      icon: FaSeedling,
      color: "from-[#1a4d2e] to-[#2d5f3f]",
    },
    {
      name: "Bio-Fertilizers",
      icon: FaFlask,
      color: "from-[#2d5f3f] to-[#90c749]",
    },
    {
      name: "Farm Equipment",
      icon: FaTools,
      color: "from-[#90c749] to-[#b8de6f]",
    },
    {
      name: "Smart Sensors",
      icon: FaMicrochip,
      color: "from-[#1a4d2e] to-[#90c749]",
    },
  ];


  const products = [
    {
      category: "Seeds",
      name: "Premium Maize Hybrid",
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
      description:
        "High-yield drought-resistant maize variety perfect for African climates.",
      features: [
        "Drought resistant",
        "High yield",
        "Fast growing",
        "Disease resistant",
      ],
      rating: 4.8,
      bestseller: true,
    },
    {
      category: "Bio-Fertilizer",
      name: "Organic Soil Enricher",
      image:
        "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&h=400&fit=crop",
      description:
        "100% organic fertilizer that improves soil structure and nutrient content.",
      features: [
        "Organic certified",
        "Long-lasting",
        "Eco-friendly",
        "Nutrient-rich",
      ],
      rating: 4.9,
      bestseller: false,
    },
    {
      category: "Equipment",
      name: "Smart Irrigation Kit",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
      description:
        "Automated drip irrigation system with moisture sensors and smart controls.",
      features: [
        "Water efficient",
        "Automated",
        "Solar powered",
        "Easy installation",
      ],
      rating: 4.7,
      bestseller: true,
    },
    {
      category: "Technology",
      name: "Soil Monitoring System",
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop",
      description:
        "Real-time soil moisture, pH, and nutrient monitoring with mobile app.",
      features: [
        "Real-time data",
        "Mobile app",
        "Cloud storage",
        "Multi-sensor",
      ],
      rating: 4.9,
      bestseller: true,
    },
    {
      category: "Seeds",
      name: "Vegetable Variety Pack",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
      description:
        "Curated selection of high-quality vegetable seeds for home gardens.",
      features: ["Non-GMO", "Organic", "Variety pack", "Easy to grow"],
      rating: 4.6,
      bestseller: false,
    },
    {
      category: "Bio-Fertilizer",
      name: "Compost Accelerator",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
      description:
        "Speeds up composting process and enriches compost with beneficial microbes.",
      features: [
        "Fast acting",
        "Microbial blend",
        "Odor control",
        "Safe for plants",
      ],
      rating: 4.7,
      bestseller: false,
    },
  ];

  const benefits = [
    "Premium quality assured",
    "Sustainable and eco-friendly",
    "Expert support included",
    "Bulk discounts available",
    "Fast delivery nationwide",
    "Money-back guarantee",
  ];

  return (
    <div className="bg-[#faf8f3]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden ">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e]/10 via-lime-green/5 to-transparent"></div>
        </div>
                <motion.div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e1b] via-[#0f2e1b]/60 to-transparent z-10"></div>
                  <img 
                    src="/3.jpg" 
                    alt="AgTech Hero" 
                    className="w-full h-full object-cover opacity-60"
                  />
                </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-[#90c749] font-semibold text-lg">
              OUR PRODUCTS
            </span>
            <h1 className="text-6xl md:text-7xl  font-bold text-[#1a4d2e] mt-4 mb-6">
              Premium Agricultural
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#90c749] to-[#b8de6f] mt-2">
                Products & Solutions
              </span>
            </h1>
            <p className="text-xl text-[#faf8f3]/70 max-w-3xl mx-auto leading-relaxed">
              Quality products designed for modern farmers who care about
              sustainability and results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl p-6 text-center group cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="text-3xl text-white" />
                </div>
                <h3 className="font-semibold text-[#1a4d2e]">
                  {category.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl  font-bold text-[#1a4d2e] mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-[#2c3e2f]/70 max-w-3xl mx-auto">
              Carefully selected products to help you achieve optimal farming
              results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  {product.bestseller && (
                    <div className="absolute top-4 right-4 z-20 bg-[#90c749] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Bestseller
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d2e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-[#90c749] uppercase tracking-wide">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <FaStar className="text-[#90c749]" />
                      <span className="text-sm font-semibold text-[#1a4d2e]">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl  font-bold text-[#1a4d2e] mb-3">
                    {product.name}
                  </h3>

                  <p className="text-[#2c3e2f]/70 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-[#2c3e2f]/80"
                      >
                        <FaCheckCircle className="text-[#90c749] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#1a4d2e] to-[#2d5f3f] text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center">
                    <FaShoppingCart className="mr-2" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1a4d2e] to-[#2d5f3f] text-[#faf8f3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#90c749] blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#b8de6f] blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#90c749] font-semibold text-lg">
                WHY BUY FROM US
              </span>
              <h2 className="text-5xl md:text-6xl  font-bold mt-3 mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-xl text-[#faf8f3]/90 leading-relaxed mb-8">
                Every product we offer is carefully selected and tested to
                ensure it meets our high standards for quality, sustainability,
                and effectiveness.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <FaCheckCircle className="text-[#90c749] flex-shrink-0" />
                    <span className="text-[#faf8f3]/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl p-8 text-center">
                <div className="text-5xl  font-bold text-[#90c749] mb-2">
                  500+
                </div>
                <div className="text-[#faf8f3]/80">Products Available</div>
              </div>
              <div className="bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl p-8 text-center">
                <div className="text-5xl  font-bold text-[#90c749] mb-2">
                  98%
                </div>
                <div className="text-[#faf8f3]/80">Customer Satisfaction</div>
              </div>
              <div className="bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl p-8 text-center">
                <div className="text-5xl  font-bold text-[#90c749] mb-2">
                  24/7
                </div>
                <div className="text-[#faf8f3]/80">Expert Support</div>
              </div>
              <div className="bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl p-8 text-center">
                <div className="text-5xl  font-bold text-[#90c749] mb-2">
                  15+
                </div>
                <div className="text-[#faf8f3]/80">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-[#f5f3ed]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-md border border-white/30 shadow-2xl rounded-3xl p-12 text-center"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-3xl text-[#90c749] mx-1" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl  text-[#1a4d2e] mb-8 italic leading-relaxed">
              "The quality of Agrilyst's products has completely transformed our
              farm's productivity. Their organic fertilizers and smart
              irrigation systems are game-changers!"
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
                alt="Customer"
                className="w-16 h-16 rounded-full border-2 border-[#90c749]"
              />
              <div className="text-left">
                <div className="font-semibold text-[#1a4d2e] text-lg">
                  Michael Zimuto
                </div>
                <div className="text-[#2c3e2f]/60">
                  Commercial Farmer, Mashonaland
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#90c749] to-[#b8de6f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=600&fit=crop"
            alt="Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl  font-bold text-[#1a4d2e] mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-[#1a4d2e]/80 mb-10 max-w-2xl mx-auto">
              Our agricultural experts are here to help you select the perfect
              products for your farm.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-[#1a4d2e] text-[#faf8f3] rounded-full text-lg font-semibold hover:bg-[#2d5f3f] transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span>Talk to an Expert</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
