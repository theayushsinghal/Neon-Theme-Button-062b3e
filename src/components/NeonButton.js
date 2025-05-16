import React, { useState } from "react";
import "../styles/neon.css";

/**
 * NeonButton Component
 * 
 * A customizable button with neon effects and improved text readability on hover
 * @param {string} color - Primary color for the neon effect (default: "blue")
 * @param {string} size - Size of the button: "sm", "md", "lg" (default: "md")
 * @param {string} text - Button text content
 * @param {function} onClick - Click handler function
 * @param {string} className - Additional CSS classes
 */
const NeonButton = ({ 
  color = "blue", 
  size = "md", 
  text = "Neon Button", 
  onClick,
  className = "" 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Map color names to their hex values
  const colorMap = {
    blue: "#00f3ff",
    green: "#00ff66",
    purple: "#bf00ff",
    pink: "#ff00d4",
    orange: "#ff9900",
    red: "#ff0000"
  };
  
  // Select color from map or use the input directly
  const glowColor = colorMap[color.toLowerCase()] || color;
  
  // Size classes
  const sizeClasses = {
    sm: "text-sm py-1 px-3",
    md: "text-base py-2 px-5",
    lg: "text-lg py-3 px-7"
  };

  // Calculate a contrasting text color for better readability when hovered
  // This uses a simplified approach - for more complex contrast calculation,
  // you might want to analyze the brightness of the selected glow color
  const getContrastColor = () => {
    // For demo purposes, we'll return a darker variation of the glow color
    return `${glowColor}11`;
  };
  
  return (
    <button
      className={`neon-button ${sizeClasses[size]} ${className}`}
      style={{
        "--glow-color": glowColor,
        "--glow-spread-color": `${glowColor}80`,
        "--enhanced-glow-color": `${glowColor}E6`,
        "--btn-color": `${glowColor}33`,
        "--text-contrast-color": getContrastColor()
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Using a wrapper for the text to better control hover effects */}
      <span 
        className={`neon-button-text ${isHovered ? "hovered" : ""}`}
        aria-hidden={false}
      >
        {text}
      </span>
      
      {/* Background glow effect */}
      <span 
        className={`glow ${isHovered ? "glow-active" : ""}`}
        aria-hidden={true}
      ></span>
    </button>
  );
};

export default NeonButton;