import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center section-spacing">
      <div className="max-width-content container-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary-200"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                🏆 Hackathon Winner • Live Demo
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-responsive-2xl font-bold text-gray-900 mb-6 leading-tight"
            >
              AI-Powered Development{' '}
              <span className="text-gradient">Workflow</span>{' '}
              That Actually Works
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              Revolutionary AI-assisted development process that creates stunning, 
              high-performance web applications. <strong>This very page was built using 
              the exact AI workflow it teaches.</strong>
            </motion.p>

            {/* Meta Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-lg border-l-4 border-primary-500 mb-8"
            >
              <p className="text-gray-700 italic">
                "Meta-demonstration in action: Every section, animation, and design choice 
                below demonstrates the systematic AI workflow we teach. You're not just 
                reading about AI collaboration — you're experiencing its results."
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary group">
                Explore the Workflow
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </button>
              
              <button className="btn-secondary">
                View Source Code
              </button>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">24-48h</div>
                <div className="text-sm text-gray-500">Development Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">90+</div>
                <div className="text-sm text-gray-500">Lighthouse Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">&lt;1s</div>
                <div className="text-sm text-gray-500">Load Time</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Demo Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              {/* Mock Browser Chrome */}
              <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-gray-100 rounded px-3 py-1 text-xs text-gray-600 ml-4">
                  ai-workflow-demo.vercel.app
                </div>
              </div>

              {/* Workflow Visualization */}
              <div className="space-y-4">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-primary-100 to-secondary-100 p-3 rounded-lg"
                >
                  <div className="text-sm font-medium text-gray-800 mb-2">
                    1. Design System Foundation
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-primary-500 h-2 rounded-full"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-secondary-100 to-primary-100 p-3 rounded-lg"
                >
                  <div className="text-sm font-medium text-gray-800 mb-2">
                    2. AI Research & Iteration
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-secondary-500 h-2 rounded-full"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-primary-100 to-secondary-100 p-3 rounded-lg"
                >
                  <div className="text-sm font-medium text-gray-800 mb-2">
                    3. PoC Creation & Deployment
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Success Indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mt-6 flex items-center justify-center space-x-2 bg-green-50 text-green-700 p-3 rounded-lg border border-green-200"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-green-500"
                >
                  ✨
                </motion.div>
                <span className="text-sm font-medium">
                  Workflow Complete: Production-Ready Landing Page
                </span>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-primary-200"
            >
              <div className="text-xs text-primary-600 font-medium">Vite 6.0+</div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-6 bg-white rounded-lg shadow-lg p-3 border border-secondary-200"
            >
              <div className="text-xs text-secondary-600 font-medium">Motion</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 right-8 bg-white rounded-lg shadow-lg p-3 border border-primary-200"
            >
              <div className="text-xs text-primary-600 font-medium">Tailwind V3</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-500"
        >
          <div className="text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-1"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero