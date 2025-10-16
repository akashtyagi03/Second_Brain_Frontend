import React from "react";

interface VideoIconProps {
  size?: number | string;
  color?: string;
}

export const VideoIcon: React.FC<VideoIconProps> = ({
  size = 24,
  color = "#4B5563", // Gray-600 by default
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Camera body */}
      <rect
        x="2"
        y="6"
        width="14"
        height="12"
        rx="2"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Lens / play triangle */}
      <path
        d="M9 9.5v5l4-2.5-4-2.5z"
        fill={color}
      />
      {/* Small triangle "record" part (camera) */}
      <path
        d="M18 8.5l4-2v9l-4-2v-5z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
