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
        [4, 4] as [number, number], [5, 1] as [number, number], [8, 2] as [number, number], 
        [5, 3] as [number, number], [5, 5] as [number, number], [10, 10] as [number, number],
        [12, 15] as [number, number], [15, 10] as [number, number], [10, 15] as [number, number], 
        [15, 10] as [number, number], [10, 15] as [number, number], [15, 10] as [number, number],
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
        width={'width' in config ? config.width : 40}
        height={'height' in config ? config.height : 40}
        x={-1}
        y={-1}
        strokeDasharray={'strokeDasharray' in config ? config.strokeDasharray : "0"}
        squares={'squares' in config ? config.squares : undefined}
        className={cn(config.className, config.fillColor)}
      />
    </div>
  );
}

export { GridPatternWrapper }; 