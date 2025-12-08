import { ChevronRight, ChevronDown, ExternalLink, Plus, Minus } from "lucide-react";
import { type SkillNode } from "../../data/data";
import { cn } from "../../lib/utils";

interface HorizontalSkillTreeProps {
  data: SkillNode[];
  expandedNodes: Set<string>;
  onToggle: (id: string) => void;
  activeNode?: string | null;
  onNodeHover?: (id: string | null) => void;
}

export function HorizontalSkillTree({
  data,
  expandedNodes,
  onToggle,
  activeNode,
  onNodeHover
}: HorizontalSkillTreeProps) {
  return (
    <div className="flex flex-col items-center space-y-8">
      {data.map((category) => (
        <HorizontalTreeBranch
          key={category.id}
          node={category}
          expandedNodes={expandedNodes}
          onToggle={onToggle}
          activeNode={activeNode}
          onNodeHover={onNodeHover}
          level={0}
        />
      ))}
    </div>
  );
}

interface HorizontalTreeBranchProps {
  node: SkillNode;
  expandedNodes: Set<string>;
  onToggle: (id: string) => void;
  activeNode?: string | null;
  onNodeHover?: (id: string | null) => void;
  level: number;
}

function HorizontalTreeBranch({
  node,
  expandedNodes,
  onToggle,
  activeNode,
  onNodeHover,
  level
}: HorizontalTreeBranchProps) {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expandedNodes.has(node.id);
  const isActive = activeNode === node.id;

  const handleClick = () => {
    if (hasChildren) {
      onToggle(node.id);
    }
  };

  const handleMouseEnter = () => {
    if (onNodeHover) {
      onNodeHover(node.id);
    }
  };

  const handleMouseLeave = () => {
    if (onNodeHover) {
      onNodeHover(null);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Node Container */}
      <div
        className={cn(
          "relative group",
          level === 0 ? "mb-4" : "mb-2"
        )}
      >
        {/* Connector line above for children */}
        {level > 0 && (
          <div className="absolute left-1/2 -top-4 w-0.5 h-4 bg-gray-300 transform -translate-x-1/2" />
        )}

        {/* Node Card */}
        <button
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative flex flex-col items-center justify-center",
            "transition-all duration-300 ease-out",
            "focus:outline-none focus:ring-2 focus:ring-[#fdc435]/50 focus:ring-offset-2",
            level === 0 ? "p-6" : "p-4"
          )}
        >
          {/* Node Background */}
          <div className={cn(
            "absolute inset-0 rounded-2xl transition-all duration-300",
            "border-2",
            node.isCategory
              ? "bg-gradient-to-br from-white to-gray-50 border-gray-200"
              : "bg-white border-gray-100",
            isActive
              ? "border-[#fdc435] shadow-lg scale-105"
              : "group-hover:border-[#fdc435]/50 group-hover:shadow-md",
            "group-hover:scale-105"
          )} />

          {/* Node Content */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            {/* Icon */}
            <div className={cn(
              "p-3 rounded-xl transition-all duration-300",
              node.isCategory
                ? "bg-gradient-to-br from-[#fdc435]/10 to-[#fdc435]/5"
                : "bg-gray-50",
              isActive
                ? "bg-gradient-to-br from-[#fdc435]/20 to-[#fdc435]/10"
                : "group-hover:bg-gradient-to-br group-hover:from-[#fdc435]/10 group-hover:to-[#fdc435]/5"
            )}>
              <img
                src={node.icon}
                alt={node.name}
                className={cn(
                  "object-contain transition-all duration-300",
                  level === 0 ? "w-10 h-10" : "w-8 h-8",
                  isActive
                    ? "filter brightness-110"
                    : "group-hover:filter group-hover:brightness-110"
                )}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "assets/svg/default_skill_icon.svg";
                }}
              />
            </div>

            {/* Name */}
            <div className="flex flex-col items-center">
              <span className={cn(
                "font-semibold text-center transition-colors duration-300",
                level === 0 ? "text-lg" : "text-base",
                node.isCategory ? "text-gray-900" : "text-gray-800",
                isActive
                  ? "text-[#fdc435]"
                  : "group-hover:text-[#fdc435]"
              )}>
                {node.name}
              </span>

              {/* Expand/Collapse Indicator */}
              {hasChildren && (
                <div className={cn(
                  "mt-2 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300",
                  isActive
                    ? "bg-[#fdc435] text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-[#fdc435]/10 group-hover:text-[#fdc435]"
                )}>
                  {isExpanded ? (
                    <Minus className="w-3 h-3" />
                  ) : (
                    <Plus className="w-3 h-3" />
                  )}
                </div>
              )}
            </div>
          </div>

          {/* External Link */}
          {node.link && (
            <a
              href={node.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            >
              <ExternalLink className="w-4 h-4 text-gray-400 hover:text-[#fdc435]" />
            </a>
          )}
        </button>

        {/* Description Tooltip */}
        {node.description && (
          <div className={cn(
            "absolute z-50 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            "pointer-events-none whitespace-nowrap",
            level === 0 ? "top-full mt-2" : "bottom-full mb-2"
          )}>
            {node.description}
            <div className={cn(
              "absolute w-2 h-2 bg-gray-900 transform rotate-45",
              level === 0 
                ? "top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
                : "bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2"
            )} />
          </div>
        )}
      </div>

      {/* Children - Horizontal Layout */}
      {hasChildren && isExpanded && (
        <div className="relative mt-4">
          {/* Horizontal connector line */}
          <div className="absolute left-1/2 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -translate-x-1/2" />
          
          {/* Children Container */}
          <div className="relative flex flex-wrap justify-center gap-8 pt-8">
            {node.children!.map((child, index) => (
              <div key={child.id} className="relative">
                {/* Vertical connector to parent */}
                <div className="absolute left-1/2 -top-8 w-0.5 h-8 bg-gray-300 transform -translate-x-1/2" />
                
                {/* Child node */}
                <HorizontalTreeBranch
                  node={child}
                  expandedNodes={expandedNodes}
                  onToggle={onToggle}
                  activeNode={activeNode}
                  onNodeHover={onNodeHover}
                  level={level + 1}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}