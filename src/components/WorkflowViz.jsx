import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WorkflowViz = () => {
  const [activeNode, setActiveNode] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const workflowNodes = [
    {
      id: 'research',
      title: 'AI Research',
      description: 'Multiple AI models, prompt iteration, systematic evaluation',
      x: 10,
      y: 20,
      color: '#3B82F6',
      icon: '🔍',
      connections: ['design', 'content']
    },
    {
      id: 'design',
      title: 'Design System',
      description: 'Color psychology, typography scale, component patterns',
      x: 30,
      y: 10,
      color: '#8B5CF6',
      icon: '🎨',
      connections: ['development']
    },
    {
      id: 'content',
      title: 'Content Strategy',
      description: 'Educational value, meta-demonstration, real examples',
      x: 30,
      y: 50,
      color: '#10B981',
      icon: '📝',
      connections: ['development']
    },
    {
      id: 'development',
      title: 'PoC Development',
      description: 'React 18, Vite 6.0+, Motion animations, performance focus',
      x: 60,
      y: 30,
      color: '#F59E0B',
      icon: '⚡',
      connections: ['optimization', 'testing']
    },
    {
      id: 'optimization',
      title: 'Performance',
      description: 'Bundle optimization, lazy loading, lighthouse 90+',
      x: 80,
      y: 15,
      color: '#EF4444',
      icon: '🚀',
      connections: ['deployment']
    },
    {
      id: 'testing',
      title: 'Validation',
      description: 'Cross-browser testing, responsive design, accessibility',
      x: 80,
      y: 45,
      color: '#6366F1',
      icon: '✅',
      connections: ['deployment']
    },
    {
      id: 'deployment',
      title: 'Go Live',
      description: 'Vercel deployment, domain setup, monitoring',
      x: 95,
      y: 30,
      color: '#059669',
      icon: '🌐',
      connections: []
    }
  ]

  // Auto-advance through nodes
  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % workflowNodes.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPlaying, workflowNodes.length])

  const getConnectionPath = (from, to) => {
    const fromNode = workflowNodes.find(n => n.id === from)
    const toNode = workflowNodes.find(n => n.id === to)
    if (!fromNode || !toNode) return ''

    const x1 = fromNode.x
    const y1 = fromNode.y
    const x2 = toNode.x
    const y2 = toNode.y
    
    // Create curved path
    const midX = (x1 + x2) / 2
    const midY = (y1 + y2) / 2
    
    return `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`
  }

  return (
    <section className="section-spacing bg-gray-900 text-white">
      <div className="max-width-content container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-xl font-bold mb-4">
            Beautiful Flashy Workflow Visualization
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Interactive visualization of our complete AI development workflow. 
            Watch the process unfold from initial research to production deployment.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center space-x-4 mb-12"
        >
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Play'} Animation
          </button>
          
          <div className="flex space-x-2">
            {workflowNodes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveNode(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeNode === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Main Visualization */}
        <div className="relative">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="400" className="text-white">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Workflow SVG */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <svg width="100%" height="400" viewBox="0 0 100 60" className="overflow-visible">
              {/* Connection Lines */}
              {workflowNodes.map((node) =>
                node.connections.map((connectionId) => (
                  <motion.path
                    key={`${node.id}-${connectionId}`}
                    d={getConnectionPath(node.id, connectionId)}
                    stroke="rgba(59, 130, 246, 0.3)"
                    strokeWidth="0.3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                ))
              )}

              {/* Active Connection Highlights */}
              {workflowNodes[activeNode]?.connections.map((connectionId) => (
                <motion.path
                  key={`active-${workflowNodes[activeNode].id}-${connectionId}`}
                  d={getConnectionPath(workflowNodes[activeNode].id, connectionId)}
                  stroke="#3B82F6"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              ))}

              {/* Workflow Nodes */}
              {workflowNodes.map((node, index) => (
                <g key={node.id}>
                  {/* Node Circle */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="3"
                    fill={activeNode === index ? node.color : 'rgba(255,255,255,0.2)'}
                    stroke={node.color}
                    strokeWidth="0.3"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: activeNode === index ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ 
                      duration: activeNode === index ? 0.6 : 0.3,
                      repeat: activeNode === index ? Infinity : 0,
                      repeatDelay: 2
                    }}
                    className="cursor-pointer"
                    onClick={() => setActiveNode(index)}
                  />
                  
                  {/* Glow Effect for Active Node */}
                  {activeNode === index && (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="5"
                      fill="none"
                      stroke={node.color}
                      strokeWidth="0.2"
                      opacity="0.3"
                      animate={{ 
                        r: [3, 8, 3],
                        opacity: [0.6, 0, 0.6]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </g>
              ))}

              {/* Flow Particles */}
              {isPlaying && workflowNodes[activeNode]?.connections.map((connectionId, connIndex) => (
                <motion.circle
                  key={`particle-${activeNode}-${connIndex}`}
                  r="0.3"
                  fill="#60A5FA"
                  animate={{
                    offsetDistance: ["0%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: connIndex * 0.5
                  }}
                  style={{
                    offsetPath: `path('${getConnectionPath(workflowNodes[activeNode].id, connectionId)}')`
                  }}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Node Details */}
        <motion.div
          key={activeNode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12"
        >
          <div className="card bg-white/5 backdrop-blur-sm border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: workflowNodes[activeNode].color + '20', border: `2px solid ${workflowNodes[activeNode].color}` }}
                  >
                    {workflowNodes[activeNode].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {workflowNodes[activeNode].title}
                    </h3>
                    <p className="text-gray-300">
                      Step {activeNode + 1} of {workflowNodes.length}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 mb-6">
                  {workflowNodes[activeNode].description}
                </p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Workflow Progress</span>
                    <span>{Math.round(((activeNode + 1) / workflowNodes.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      animate={{ width: `${((activeNode + 1) / workflowNodes.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Demo */}
              <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Live Demo</h4>
                
                {/* Animated Code Block */}
                <div className="bg-gray-900 rounded p-4 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-green-400"
                  >
                    {activeNode === 0 && (
                      <>
                        <div className="text-gray-500">// AI Research Phase</div>
                        <div>const research = await ai.iterate({`{`}</div>
                        <div>&nbsp;&nbsp;models: ['claude', 'gpt4'],</div>
                        <div>&nbsp;&nbsp;prompts: refinedPrompts</div>
                        <div>{`});`}</div>
                      </>
                    )}
                    {activeNode === 1 && (
                      <>
                        <div className="text-gray-500">// Design System Creation</div>
                        <div>@layer components {`{`}</div>
                        <div>&nbsp;&nbsp;.btn-primary {`{`}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;@apply bg-primary-600;</div>
                        <div>&nbsp;&nbsp;{`}`}</div>
                        <div>{`}`}</div>
                      </>
                    )}
                    {activeNode >= 2 && (
                      <>
                        <div className="text-gray-500">// {workflowNodes[activeNode].title}</div>
                        <div>const result = await workflow.execute();</div>
                        <div>console.log('✅ Step completed');</div>
                      </>
                    )}
                  </motion.div>
                </div>

                {/* Status Indicators */}
                <div className="mt-4 flex space-x-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300">Active</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-300">Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => setActiveNode(Math.max(0, activeNode - 1))}
            disabled={activeNode === 0}
            className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous Phase
          </button>
          
          <button
            onClick={() => setActiveNode(Math.min(workflowNodes.length - 1, activeNode + 1))}
            disabled={activeNode === workflowNodes.length - 1}
            className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Phase →
          </button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Workflow Steps', value: '7', icon: '⚡' },
            { label: 'AI Iterations', value: '23', icon: '🤖' },
            { label: 'Code Quality', value: '95%', icon: '✨' },
            { label: 'Performance', value: '< 1s', icon: '🚀' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkflowViz