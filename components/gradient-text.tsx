import React from "react"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  duration?: number
}

export function GradientText({
  children,
  className = "",
  colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
  duration = 6,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")}, ${colors[0]})`,
    animationDuration: `${duration}s`,
  }

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="sr-only">{children}</span>
      <span
        className="animate-gradient-flow bg-size-[200%_auto] bg-repeat-x bg-clip-text text-transparent"
        style={gradientStyle}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  )
}
