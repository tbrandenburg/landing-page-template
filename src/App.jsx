import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import DesignSystem from './components/DesignSystem'
import AIResearch from './components/AIResearch'
import PoCCreation from './components/PoCCreation'
import WorkflowViz from './components/WorkflowViz'
import './styles/index.css'

function App() {
  return (
    <div className="App">
      {/* Header - Fixed Navigation */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <nav className="max-width-content container-padding py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg"></div>
              <span className="text-xl font-bold text-gradient">AI Workflow</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#design-system" className="text-gray-600 hover:text-primary-600 transition-colors">
                Design System
              </a>
              <a href="#ai-research" className="text-gray-600 hover:text-primary-600 transition-colors">
                AI Research
              </a>
              <a href="#poc-creation" className="text-gray-600 hover:text-primary-600 transition-colors">
                PoC Creation
              </a>
              <a href="#workflow" className="text-gray-600 hover:text-primary-600 transition-colors">
                Workflow
              </a>
            </div>

            <button className="btn-primary">
              Get Started
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <Hero />

        {/* Design System Foundation Section */}
        <section id="design-system">
          <DesignSystem />
        </section>

        {/* AI Research Process Section */}
        <section id="ai-research">
          <AIResearch />
        </section>

        {/* PoC Creation Workflow Section */}
        <section id="poc-creation">
          <PoCCreation />
        </section>

        {/* Beautiful Workflow Visualization */}
        <section id="workflow">
          <WorkflowViz />
        </section>
      </main>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 text-white section-spacing"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-width-content container-padding">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg"></div>
                <span className="text-xl font-bold">AI Workflow</span>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionary AI-assisted development workflow that creates stunning, 
                high-performance web applications.
              </p>
              <div className="text-sm text-gray-500">
                🏆 Hackathon Winner - Built with the AI workflow it teaches
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Workflow Sections</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#design-system" className="hover:text-white transition-colors">
                    Design System Foundation
                  </a>
                </li>
                <li>
                  <a href="#ai-research" className="hover:text-white transition-colors">
                    AI Research Process
                  </a>
                </li>
                <li>
                  <a href="#poc-creation" className="hover:text-white transition-colors">
                    PoC Creation Workflow
                  </a>
                </li>
                <li>
                  <a href="#workflow" className="hover:text-white transition-colors">
                    Workflow Visualization
                  </a>
                </li>
              </ul>
            </div>

            {/* Meta Information */}
            <div>
              <h3 className="font-semibold mb-4">Tech Stack</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>⚡ Vite 6.0+ for lightning-fast builds</div>
                <div>⚛️ React 18 with modern hooks</div>
                <div>🎨 Tailwind CSS V3 design system</div>
                <div>🎭 Motion for smooth animations</div>
                <div>🚀 Deployed on Vercel</div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500">
                Performance Score: 90+ • Load Time: &lt;1s
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2026 AI Workflow Team. Built with ❤️ and AI assistance.
            </div>
            <div className="mt-4 md:mt-0 text-xs text-gray-500">
              This page demonstrates the exact AI workflow it teaches
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App