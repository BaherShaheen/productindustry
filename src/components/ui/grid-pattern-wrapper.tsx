"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

interface GridPatternWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dashed" | "gradient";
}

function GridPatternWrapper({ 
  children, 
  className,
  variant = "default" 
}: GridPatternWrapperProps) {
  const baseClasses = "relative overflow-hidden";
  
  const patternConfigs = {
    default: {
      squares: [
        [4, 4], [5, 1], [8, 2], [5, 3], [5, 5], [10, 10],
        [12, 15], [15, 10], [10, 15], [15, 10], [10, 15], [15, 10],
      ],
      className: "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
      fillColor: "fill-gray-600/20 stroke-gray-600/20"
    },
    dashed: {
      width: 30,
      height: 30,
      strokeDasharray: "4 2",
      className: "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
      fillColor: "fill-gray-600/15 stroke-gray-600/15"
    },
    gradient: {
      width: 20,
      height: 20,
      className: "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
      fillColor: "fill-gray-600/25 stroke-gray-600/25"
    }
  };

  const config = patternConfigs[variant];

  return (
    <div className={cn(baseClasses, className)}>
      {children}
      <GridPattern
        width={config.width || 40}
        height={config.height || 40}
        x={-1}
        y={-1}
        strokeDasharray={config.strokeDasharray || "0"}
        squares={config.squares}
        className={cn(config.className, config.fillColor)}
      />
    </div>
  );
}

export { GridPatternWrapper }; 