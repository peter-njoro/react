import * as React from "react";
import { useState, useCallback } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { skillTree } from "../../data/data";
import { HorizontalSkillTree } from "../../components/skills/HorizontalSkillTree";
import { ChevronsRight, ChevronsLeft, Grid, Layers, ExternalLink, Plus } from "lucide-react";
import { cn } from "../../lib/utils";

export default function SkillsSection() {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(() => {
    // Initially only expand category nodes (first level)
    const initiallyExpanded = new Set<string>();
    skillTree.forEach(category => {
      initiallyExpanded.add(category.id);
    });
    return initiallyExpanded;
  });
  
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"horizontal" | "compact">("horizontal");

  const handleToggle = useCallback((id: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const handleNodeHover = useCallback((id: string | null) => {
    setActiveNode(id);
  }, []);

  const handleExpandAll = () => {
    const allIds = new Set<string>();
    const collectIds = (nodes: typeof skillTree) => {
      nodes.forEach(node => {
        allIds.add(node.id);
        if (node.children) {
          collectIds(node.children);
        }
      });
    };
    collectIds(skillTree);
    setExpandedNodes(allIds);
  };

  const handleCollapseAll = () => {
    const categoryIds = new Set<string>();
    skillTree.forEach(category => {
      categoryIds.add(category.id);
    });
    setExpandedNodes(categoryIds);
  };

  // Calculate stats for the header
  const totalSkills = React.useMemo(() => {
    const countSkills = (nodes: typeof skillTree): number => {
      return nodes.reduce((count, node) => {
        if (node.children) {
          return count + countSkills(node.children);
        }
        return count + 1;
      }, 0);
    };
    return countSkills(skillTree);
  }, []);

  const totalCategories = skillTree.length;

  return (
    <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="skills">
      <div className="flex flex-col items-center gap-1 mb-12">
        <h2 className="font-title-h2 text-font-high-emphasis text-center">Skills & Technologies</h2>
        <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
        <p className="text-font-medium-emphasis mt-4 text-center max-w-2xl">
          Explore my technical expertise through an interactive skill tree
        </p>
        
        {/* Stats */}
        <div className="flex items-center gap-6 mt-6">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[#fdc435]">{totalCategories}</span>
            <span className="text-sm text-gray-600">Categories</span>
          </div>
          <div className="w-px h-8 bg-gray-300" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[#fdc435]">{totalSkills}</span>
            <span className="text-sm text-gray-600">Total Skills</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 px-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="text-sm font-medium text-gray-700">View:</div>
            <div className="flex items-center gap-1 bg-white rounded-xl p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setViewMode("horizontal")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                  viewMode === "horizontal"
                    ? "bg-gradient-to-r from-[#fdc435] to-[#febc2f] text-white shadow-md"
                    : "text-gray-600 hover:text-[#fdc435] hover:bg-gray-50"
                )}
              >
                <Layers className="w-4 h-4" />
                <span className="font-medium hidden sm:inline">Tree View</span>
              </button>
              <button
                onClick={() => setViewMode("compact")}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                  viewMode === "compact"
                    ? "bg-gradient-to-r from-[#fdc435] to-[#febc2f] text-white shadow-md"
                    : "text-gray-600 hover:text-[#fdc435] hover:bg-gray-50"
                )}
              >
                <Grid className="w-4 h-4" />
                <span className="font-medium hidden sm:inline">Grid View</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExpandAll}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#fdc435] hover:bg-gray-50 rounded-lg transition-colors duration-300"
            >
              <ChevronsRight className="w-4 h-4" />
              <span className="hidden sm:inline">Expand All</span>
            </button>
            <button
              onClick={handleCollapseAll}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#fdc435] hover:bg-gray-50 rounded-lg transition-colors duration-300"
            >
              <ChevronsLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Collapse All</span>
            </button>
          </div>
        </div>

        <Card className="w-full bg-white rounded-3xl shadow-lg border-0 overflow-hidden">
          <CardContent className="p-6">
            {viewMode === "horizontal" ? (
              // Horizontal Tree View
              <div className="overflow-x-auto pb-6">
                <div className="min-w-[600px] px-4">
                  <HorizontalSkillTree
                    data={skillTree}
                    expandedNodes={expandedNodes}
                    onToggle={handleToggle}
                    activeNode={activeNode}
                    onNodeHover={handleNodeHover}
                  />
                </div>
              </div>
            ) : (
              // Compact Grid View (Fallback)
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skillTree.map((category) => (
                  <div key={category.id} className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-1">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-br from-[#fdc435]/10 to-[#fdc435]/5 rounded-lg">
                          <img
                            src={category.icon}
                            alt={category.name}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <span className="font-semibold text-gray-900">{category.name}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.children?.slice(0, 4).map((skill) => (
                          <div
                            key={skill.id}
                            className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-[#fdc435]/50 hover:text-[#fdc435] transition-colors duration-200"
                          >
                            {skill.name}
                          </div>
                        ))}
                        {category.children && category.children.length > 4 && (
                          <div className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-500">
                            +{category.children.length - 4} more
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Instructions */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#fdc435] to-[#febc2f]" />
                  <span>Click to expand/collapse skill branches</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                  <span>Click link icon for documentation</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center rounded-full border border-[#fdc435] text-[#fdc435]">
                    <Plus className="w-3 h-3" />
                  </div>
                  <span>Hover for descriptions</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}