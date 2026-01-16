import React, { useState } from 'react'
import { motion } from 'framer-motion'

const AIResearch = () => {
  const [activePrompt, setActivePrompt] = useState(0)

  const aiIterations = [
    {
      id: 1,
      prompt: "Design a modern landing page layout for AI development workflow",
      ai: "Claude 3.5",
      output: "Generic template with basic sections, predictable layout patterns",
      score: 6,
      issues: ["Too generic", "No unique value prop", "Standard template feel"]
    },
    {
      id: 2,
      prompt: "Create a landing page that demonstrates AI workflow by being built with AI itself - meta-demonstration approach",
      ai: "GPT-4",
      output: "Interesting concept but execution lacks concrete examples and visual proof",
      score: 7,
      issues: ["Concept good but vague", "Missing real examples", "No visual proof"]
    },
    {
      id: 3,
      prompt: "Build a hackathon-winning landing page showcasing AI development workflow with real examples, performance focus, and meta-narrative",
      ai: "Claude 3.5",
      output: "Comprehensive plan with specific tech stack, real examples, and clear educational value",
      score: 9,
      issues: ["Minor: Could add more interactive elements"]
    }
  ]

  const researchSteps = [
    {
      step: "Initial Exploration",
      description: "Test multiple AI models with basic prompts to understand baseline capabilities",
      icon: "🔍",
      status: "completed"
    },
    {
      step: "Prompt Refinement",
      description: "Iterate on prompts to get more specific, actionable outputs",
      icon: "✨",
      status: "completed"
    },
    {
      step: "Comparative Analysis",
      description: "Score outputs across multiple criteria: uniqueness, feasibility, impact",
      icon: "📊",
      status: "completed"
    },
    {
      step: "Selection & Validation",
      description: "Choose winning approach and validate through prototype development",
      icon: "✅",
      status: "completed"
    }
  ]

  return (
    <section className="section-spacing bg-gray-50">
      <div className="max-width-content container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-responsive-xl font-bold text-gray-900 mb-4">
            AI Research & Selection Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real AI prompts and outputs from our research phase. This transparency shows 
            exactly how we arrived at the winning concept through systematic iteration.
          </p>
        </motion.div>

        {/* Research Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {researchSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg text-2xl">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.step}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {step.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Iterations Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            AI Model Iterations & Outputs
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {aiIterations.map((iteration, index) => (
              <motion.div
                key={iteration.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`card cursor-pointer transition-all ${
                  activePrompt === index ? 'ring-2 ring-primary-500 shadow-xl' : ''
                }`}
                onClick={() => setActivePrompt(index)}
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      iteration.score >= 9 ? 'bg-green-500' : 
                      iteration.score >= 7 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <span className="text-sm font-medium text-gray-600">
                      Iteration {iteration.id}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {iteration.ai}
                    </span>
                    <span className={`text-lg font-bold ${
                      iteration.score >= 9 ? 'text-green-600' : 
                      iteration.score >= 7 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {iteration.score}/10
                    </span>
                  </div>
                </div>

                {/* Prompt */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Input Prompt:</h4>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono">
                    "{iteration.prompt}"
                  </div>
                </div>

                {/* Output Summary */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">AI Output Summary:</h4>
                  <p className="text-sm text-gray-600">{iteration.output}</p>
                </div>

                {/* Issues */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Issues:</h4>
                  <ul className="space-y-1">
                    {iteration.issues.map((issue, issueIndex) => (
                      <li key={issueIndex} className="text-xs text-red-600 flex items-center">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Winner Badge */}
                {iteration.score >= 9 && (
                  <div className="mt-4 pt-3 border-t border-green-200">
                    <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-center text-sm font-medium">
                      🏆 Selected for Implementation
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decision Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Decision Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-medium text-gray-600">Criteria</th>
                  <th className="text-center py-3 px-2 font-medium text-gray-600">Iteration 1</th>
                  <th className="text-center py-3 px-2 font-medium text-gray-600">Iteration 2</th>
                  <th className="text-center py-3 px-2 font-medium text-gray-600">Iteration 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { criteria: 'Uniqueness', scores: [4, 6, 9] },
                  { criteria: 'Technical Feasibility', scores: [8, 7, 9] },
                  { criteria: 'Educational Value', scores: [5, 7, 10] },
                  { criteria: 'Hackathon Appeal', scores: [6, 6, 9] },
                  { criteria: 'Implementation Speed', scores: [9, 8, 8] },
                  { criteria: 'Visual Impact', scores: [5, 6, 9] }
                ].map((row, index) => (
                  <tr key={row.criteria}>
                    <td className="py-3 px-2 font-medium text-gray-700">{row.criteria}</td>
                    {row.scores.map((score, scoreIndex) => (
                      <td key={scoreIndex} className="py-3 px-2 text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                          score >= 9 ? 'bg-green-100 text-green-700' :
                          score >= 7 ? 'bg-yellow-100 text-yellow-700' :
                          score >= 5 ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {score}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl border border-green-200"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-green-500 text-white p-2 rounded-lg">
              💡
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Research Insights & Winning Formula
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>The breakthrough:</strong> Adding "meta-demonstration" and "hackathon-winning" 
                  to our prompt transformed generic outputs into a unique, compelling concept.
                </p>
                <p>
                  <strong>Key learnings:</strong> AI models respond better to specific contexts 
                  (hackathon, performance metrics) rather than vague requests for "modern design."
                </p>
                <p>
                  <strong>Winning combination:</strong> Technical specificity + Educational value + 
                  Real examples + Performance focus = 9/10 output quality.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIResearch