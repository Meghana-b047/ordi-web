"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import { Users, Zap, Target, Heart, Code, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const values = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation",
    description: "We push boundaries and explore cutting-edge technologies to solve real-world problems.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    accent: "text-blue-400"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community",
    description: "We believe in the power of collaboration and supporting each other's growth.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    accent: "text-purple-400"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Excellence",
    description: "We strive for perfection in everything we create, from code to design.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    accent: "text-green-400"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passion",
    description: "We are driven by our love for technology and the joy of creating.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    accent: "text-orange-400"
  }
];

const milestones = [
  { year: "2018", title: "Founded", description: "Ordinateur was established at Hansraj College, Delhi" },
  { year: "2019", title: "First Hackathon", description: "Organized the inaugural hackathon with 100+ participants" },
  { year: "2020", title: "Digital Transformation", description: "Adapted to remote-first development and online events" },
  { year: "2021", title: "Magazine Launch", description: "Started Bitwise Magazine for tech content and stories" },
  { year: "2022", title: "Global Reach", description: "Connected with developers and communities worldwide" },
  { year: "2024", title: "Full Expansion", description: "Launched multiple departments and comprehensive platform" }
];

const stats = [
  { value: "2018", label: "Founded", icon: "📅" },
  { value: "50+", label: "Active Members", icon: "👥" },
  { value: "25+", label: "Events Yearly", icon: "🎯" },
  { value: "5", label: "Departments", icon: "🏗️" },
  { value: "1000+", label: "Community Reach", icon: "🌐" },
  { value: "100+", label: "Bitwise Readers", icon: "📚" }
];

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6 inline-block">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                Our Story
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight via-starlight to-starlight/40">
              About Ordinateur
            </h1>
            <p className="text-starlight/60 text-lg md:text-xl font-light tracking-wide max-w-3xl mx-auto">
              Where code meets creativity. Ordinateur is a student-led technology collective at Hansraj College, Delhi, dedicated to innovation, community building, and creating meaningful digital experiences.
            </p>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl border-2 border-blue-400/30 bg-blue-500/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-400/50">
                  <Lightbulb className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-starlight/80 text-lg leading-relaxed">
                To inspire, educate, and empower students through technology, fostering a culture of innovation, collaboration, and continuous learning. We aim to bridge the gap between academic knowledge and real-world development practices.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl border-2 border-purple-400/30 bg-purple-500/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-400/50">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-starlight/80 text-lg leading-relaxed">
                To become a beacon of technological excellence and innovation, creating a vibrant ecosystem where ideas flourish, talents are nurtured, and the next generation of tech leaders emerges to shape the digital future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
              <p className="text-starlight/60 text-lg max-w-2xl mx-auto">
                These principles guide everything we do and shape our community culture.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`p-8 rounded-2xl border-2 border-white/10 ${value.bgColor} backdrop-blur-sm hover:border-white/30 transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 rounded-lg ${value.bgColor} border border-white/20 flex items-center justify-center ${value.accent} mb-6 group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-starlight/70">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Statistics */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">By The Numbers</h2>
              <p className="text-starlight/60 text-lg">Our impact measured in milestones and achievements</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300 text-center"
                >
                  <p className="text-3xl mb-2">{stat.icon}</p>
                  <p className="text-3xl md:text-4xl font-bold text-accretion mb-2">{stat.value}</p>
                  <p className="text-starlight/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-starlight/60 text-lg">Key milestones that shaped Ordinateur</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accretion via-accretion/50 to-transparent hidden md:block" />

              <div className="space-y-12">
                {milestones.map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${idx % 2 === 0 ? "md:text-right" : ""}`}
                  >
                    <div className={idx % 2 === 0 ? "" : "order-2"}>
                      <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300">
                        <p className="text-accretion font-bold text-sm tracking-widest uppercase mb-2">{milestone.year}</p>
                        <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-starlight/70">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="hidden md:flex items-center justify-center"
                    >
                      <div className="w-4 h-4 rounded-full bg-accretion shadow-lg shadow-accretion/50" />
                    </motion.div>

                    <div className={idx % 2 === 0 ? "order-2" : ""} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Departments Overview */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h2>
              <p className="text-starlight/60 text-lg max-w-2xl mx-auto">
                Five specialized pillars working together to drive innovation and excellence
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {[
                { name: "Technical", emoji: "⚙️", color: "from-blue-500 to-cyan-500" },
                { name: "Editorial", emoji: "✍️", color: "from-purple-500 to-pink-500" },
                { name: "Organising", emoji: "📋", color: "from-green-500 to-emerald-500" },
                { name: "Developers", emoji: "💻", color: "from-orange-500 to-red-500" },
                { name: "Dynamics", emoji: "🎨", color: "from-rose-500 to-red-500" }
              ].map((dept, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300 text-center group"
                >
                  <p className="text-4xl mb-3">{dept.emoji}</p>
                  <h3 className="text-lg font-bold text-white group-hover:text-accretion transition-colors">{dept.name}</h3>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link href="/departments" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accretion to-orange-500 text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300">
                Explore All Departments
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Us?</h2>
            <p className="text-starlight/70 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a developer, designer, writer, or innovator, Ordinateur is a place for you to grow, learn, and create.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-accretion to-orange-500 text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300">
                Get In Touch
              </Link>
              <Link href="/departments" className="px-8 py-3 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/5 hover:border-white/50 transition-all duration-300">
                Explore Departments
              </Link>
            </div>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
