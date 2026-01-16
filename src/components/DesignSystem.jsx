import React, { useState } from 'react'
import { motion } from 'framer-motion'

const DesignSystem = () => {
  const [activeTab, setActiveTab] = useState('colors')

  const colorPalettes = [
    { name: 'Primary Blue', colors: ['#DBEAFE', '#BFDBFE', '#3B82F6', '#2563EB', '#1D4ED8'] },
    { name: 'Secondary Purple', colors: ['#F3E8FF', '#E9D5FF', '#9333EA', '#7E22CE'] },
    { name: 'Accent Colors', colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'] }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="section-spacing bg-white">
      <div className="max-width-content container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-xl font-bold text-gray-900 mb-4">
            Design System Foundation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every great AI workflow starts with systematic design thinking. Our design system 
            was generated through multiple AI iterations, refined for visual hierarchy and accessibility.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {['colors', 'typography', 'spacing', 'components'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all capitalize ${
                  activeTab === tab
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Colors Tab */}
          {activeTab === 'colors' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {colorPalettes.map((palette, index) => (
                <motion.div key={palette.name} variants={itemVariants} className="card">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{palette.name}</h3>
                  <div className="flex flex-wrap gap-4">
                    {palette.colors.map((color, colorIndex) => (
                      <motion.div
                        key={color}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center"
                      >
                        <div
                          className="w-16 h-16 rounded-lg shadow-md mb-2 border border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-xs text-gray-600 font-mono">{color}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Typography Tab */}
          {activeTab === 'typography' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Typography Scale</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-6xl font-bold text-gray-900">Heading 1</div>
                    <div className="text-sm text-gray-500">text-6xl • font-bold • 3.75rem</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900">Heading 2</div>
                    <div className="text-sm text-gray-500">text-4xl • font-bold • 2.25rem</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-gray-900">Heading 3</div>
                    <div className="text-sm text-gray-500">text-2xl • font-semibold • 1.5rem</div>
                  </div>
                  <div>
                    <div className="text-lg text-gray-700">Body Large - Perfect for hero descriptions and important content blocks</div>
                    <div className="text-sm text-gray-500">text-lg • 1.125rem</div>
                  </div>
                  <div>
                    <div className="text-base text-gray-700">Body Regular - The foundation of readable content, optimized for scanning</div>
                    <div className="text-sm text-gray-500">text-base • 1rem</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Spacing Tab */}
          {activeTab === 'spacing' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Spacing System</h3>
                <div className="space-y-4">
                  {[
                    { name: 'XS', size: '0.5rem', class: 'spacing-xs' },
                    { name: 'SM', size: '0.75rem', class: 'spacing-sm' },
                    { name: 'MD', size: '1rem', class: 'spacing-md' },
                    { name: 'LG', size: '1.5rem', class: 'spacing-lg' },
                    { name: 'XL', size: '2rem', class: 'spacing-xl' },
                    { name: '2XL', size: '3rem', class: 'spacing-2xl' },
                    { name: '3XL', size: '4rem', class: 'spacing-3xl' }
                  ].map((space) => (
                    <div key={space.name} className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium text-gray-600">{space.name}</div>
                      <div
                        className="bg-primary-200 rounded"
                        style={{ width: space.size, height: '1rem' }}
                      />
                      <div className="text-sm text-gray-500">{space.size}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Components Tab */}
          {activeTab === 'components' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              <motion.div variants={itemVariants} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Buttons</h3>
                <div className="space-y-3">
                  <button className="btn-primary">Primary Button</button>
                  <button className="btn-secondary">Secondary Button</button>
                  <button className="btn-primary" disabled>Disabled State</button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cards & Elevation</h3>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">Level 1 - Subtle</div>
                  <div className="bg-white p-4 rounded-lg shadow-md border">Level 2 - Medium</div>
                  <div className="bg-white p-4 rounded-lg shadow-lg border">Level 3 - Strong</div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Interactive States</h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    Hover Effect
                  </div>
                  <div className="p-3 rounded-lg bg-primary-50 border-2 border-primary-500">
                    Active/Selected State
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Form Elements</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Input field"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option>Select option</option>
                  </select>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* AI Process Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-blue-500 text-white p-2 rounded-lg">
              🎨
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI-Driven Design System Creation
              </h3>
              <p className="text-gray-700 mb-4">
                This design system wasn't randomly generated. It's the result of systematic AI collaboration:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>Color Psychology Research:</strong> AI analyzed color combinations for trust and innovation</li>
                <li>• <strong>Accessibility Optimization:</strong> WCAG compliance built into every color relationship</li>
                <li>• <strong>Typography Harmony:</strong> Mathematical scale relationships for perfect visual hierarchy</li>
                <li>• <strong>Component Consistency:</strong> Every element follows the same systematic approach</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DesignSystem