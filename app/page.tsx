'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      title: "Medical Invoicing System",
      description: "A comprehensive system for managing medical invoices",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Heart Disease Prediction",
      description: "ML model for predicting heart disease risk",
      tech: ["Python", "TensorFlow", "scikit-learn"],
      github: "#",
      demo: "#"
    },
    {
      title: "Bus Ticketing System",
      description: "Digital solution for bus ticket management",
      tech: ["PHP", "MySQL", "Bootstrap"],
      github: "#",
      demo: "#"
    },
    {
      title: "Tours and Travel Management",
      description: "Complete travel booking and management platform",
      tech: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    }
  ];

  const certifications = [
    "Startup Semester - UC Berkeley SCET",
    "Introduction to Data Engineering",
    "Data Engineering Essentials",
    "The Data Science of Health Informatics",
    "Azure DevOps Platform Fundamentals"
  ];

  const awards = [
    {
      title: "Finalist",
      event: "Canisa Health, Oxford University Africa Innovation Seed Fund - 2024"
    },
    {
      title: "1st Place",
      event: "InnoTech, African Digital Health Community Health Innovation Bootcamp - 2023"
    },
    {
      title: "2nd Place",
      event: "Tuelimishe, Creative Approaches to African Development - 2021"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <header className="px-4 md:px-8 pt-20 pb-32 bg-gradient-to-br from-blue-50 to-white" id="home">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 order-2 md:order-1"
      >
        <h2 className="text-blue-600 font-medium">Hello, I am</h2>
        <h1 className="text-5xl md:text-6xl font-bold">Favour Madubuko</h1>
        <h3 className="text-2xl text-gray-600">Software Engineer - Data Science & AI</h3>
        <p className="max-w-2xl text-gray-600 leading-relaxed">
          A Senior at Ashesi University majoring in CS/IS and a technology enthusiast who enjoys discussions on information systems and industries that impact lives daily. My passion lies in research, data science for healthcare (biomedical), and natural language processing for social good.
        </p>
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/cv.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.a>
          <Link href="https://www.linkedin.com/in/madubuko-favour-c/" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
          </Link>
          <Link href="https://github.com/favouralgo" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
          </Link>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="order-1 md:order-2 flex justify-center md:justify-end"
      >
        <div className="relative">
          {/* Background circles for visual effect */}
          <div className="absolute -z-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 -top-10 -right-10" />
          <div className="absolute -z-10 w-72 h-72 bg-blue-50 rounded-full blur-2xl opacity-60 -bottom-10 -left-10" />
          
          {/* Image container with border effect */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/portfolioImage.jpg"
              alt="Favour Madubuko"
              fill
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating card with emoji */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-lg"
          >
            <span className="text-2xl">👋</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</header>
      {/* Areas of Interest */}
      <section className="px-4 md:px-8 py-20" id="interests">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold">Areas of Interest</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Interest cards remain the same */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-white shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-4">Health Informatics</h3>
                <p className="text-gray-600">
                  Life science industries, clinics and hospitals face the challenge of navigating complex decisions and collaborations in improving clinical trials, and treatment plans for patients. What strategies can be implemented to improve collaboration among life science industries, clinics, and hospitals using health informatics?
                </p>
              </motion.div>
              {/* ... other interest cards ... */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 md:px-8 py-20 bg-gray-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-white shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link href={project.github} passHref>
                      <motion.a className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    </Link>
                    <Link href={project.demo} passHref>
                      <motion.a className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="px-4 md:px-8 py-20" id='certifications'>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16"
          >
            {/* Certifications */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Certifications </h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="p-4 border-l-2 border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    {cert}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Awards</h2>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="p-4 border-l-2 border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <div className="font-semibold">{award.title}</div>
                    <div className="text-gray-600">{award.event}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <footer className="px-4 md:px-8 py-20 bg-gray-50" id="contact">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-gray-600">Feel free to reach out for collaborations or just a friendly hello</p>
            <div className="flex justify-center gap-6">
              <Link href="mailto:favourmadubuko1@gmail.com" passHref>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </motion.a>
              </Link>
              <Link href="https://www.linkedin.com/in/madubuko-favour-c/" passHref>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </motion.a>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="mt-20 text-center text-gray-600">
          © {new Date().getFullYear()} Favour Madubuko. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}