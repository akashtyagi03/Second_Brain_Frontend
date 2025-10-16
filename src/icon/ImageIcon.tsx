import React from "react";

interface ImageIconProps {
  size?: number | string;
  color?: string;
}

export const ImageIcon: React.FC<ImageIconProps> = ({
  size = 24,
  color = "#4B5563", // Indigo-600
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Frame */}
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke={color}
        strokeWidth="2"
      />
      {/* Mountain shape */}
      <path
        d="M8 14l3-3 4 4 2-2 4 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sun */}
      <circle cx="8.5" cy="8.5" r="1.5" fill={color} />
    </svg>
  );
};
