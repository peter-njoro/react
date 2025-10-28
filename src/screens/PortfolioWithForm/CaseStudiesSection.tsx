import * as React from "react";
import { caseStudies } from "../../data/data";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export default function CaseStudiesSection() {
  const [expandedStudy, setExpandedStudy] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedStudy(expandedStudy === id ? null : id);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="case-studies">
      <div className="flex flex-col items-center gap-1 mb-12">
        <h2 className="font-title-h2 text-font-high-emphasis text-center">Detailed Case Studies</h2>
        <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
        <p className="text-font-medium-emphasis mt-4 text-center max-w-2xl">
          Deep dive into the architecture, challenges, and impact of my key projects
        </p>
      </div>

      <div className="flex justify-center w-full max-w-6xl">
        <div className="grid gap-8 w-full">
          {caseStudies.map((cs, index) => (
            <div 
              key={cs.id} 
              className="group animate-fade-in"
              style={{ "--animation-delay": `${4200 + index * 200}ms` } as React.CSSProperties}
            >
              <Card className={`w-full bg-white rounded-3xl shadow-lg border-0 overflow-hidden transition-all duration-500 ${
                expandedStudy === cs.id ? 'ring-2 ring-[#fdc435]' : 'hover:shadow-xl hover:-translate-y-1'
              }`}>
                <CardContent className="p-0">
                  {/* Header Section */}
                  <div 
                    className="p-8 cursor-pointer"
                    onClick={() => toggleExpand(cs.id)}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#fdc435] to-[#febc2f] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                            {index + 1}
                          </div>
                          <h3 className="text-3xl font-bold text-gray-800 group-hover:text-[#fdc435] transition-colors duration-500">
                            {cs.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                          {cs.overview}
                        </p>
                      </div>
                      
                      {/* Expand/Collapse Button */}
                      <Button
                        variant="ghost"
                        className="rounded-2xl border-2 border-gray-200 hover:border-[#fdc435] hover:bg-[#fdc435]/10 transition-all duration-300"
                        onClick={() => toggleExpand(cs.id)}
                      >
                        <svg 
                          className={`w-6 h-6 transform transition-transform duration-500 ${
                            expandedStudy === cs.id ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Button>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      {cs.impact.slice(0, 4).map((impact, i) => (
                        <div key={i} className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="text-sm text-gray-600 mb-1">{impact.metric}</div>
                          {impact.before && impact.after ? (
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-xs text-red-500 line-through">{impact.before}</span>
                              <span className="text-lg font-bold text-[#fdc435]">{impact.after}</span>
                            </div>
                          ) : (
                            <div className="text-lg font-bold text-[#fdc435]">Improved</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {expandedStudy === cs.id && (
                    <div className="border-t border-gray-100 animate-slide-down">
                      <div className="p-8 space-y-8">
                        {/* Problem & Solution */}
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="bg-red-50 rounded-2xl p-6">
                            <h4 className="font-bold text-red-800 text-lg mb-3 flex items-center gap-2">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                              The Challenge
                            </h4>
                            <p className="text-red-700">{cs.problem}</p>
                          </div>
                          <div className="bg-green-50 rounded-2xl p-6">
                            <h4 className="font-bold text-green-800 text-lg mb-3 flex items-center gap-2">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              The Solution
                            </h4>
                            <p className="text-green-700">{cs.solution}</p>
                          </div>
                        </div>

                        {/* Architecture & Features */}
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-gray-800 text-lg mb-4">Architecture</h4>
                            <ul className="space-y-2">
                              {cs.architecture.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                  <div className="w-2 h-2 bg-[#fdc435] rounded-full mt-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 text-lg mb-4">Key Features</h4>
                            <div className="grid gap-2">
                              {cs.features.map((feature, i) => (
                                <div key={i} className="bg-blue-50 rounded-xl p-3">
                                  <span className="text-blue-800 font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Technologies & Impact */}
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-gray-800 text-lg mb-4">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {cs.technologies.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-gradient-to-r from-[#fdc435] to-[#febc2f] text-white rounded-full text-sm font-medium">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 text-lg mb-4">Impact & Results</h4>
                            <div className="space-y-3">
                              {cs.impact.map((impact, i) => (
                                <div key={i} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                                  <span className="text-gray-700">{impact.metric}</span>
                                  {impact.before && impact.after ? (
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm text-gray-500 line-through">{impact.before}</span>
                                      <span className="font-bold text-[#fdc435]">{impact.after}</span>
                                    </div>
                                  ) : (
                                    <span className="font-bold text-[#fdc435]">✓ Achieved</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}