import React from "react";

interface SidebarIconProps {
  size?: number | string;
  color?: string;
}

export const SidebarIcon: React.FC<SidebarIconProps> = ({
  size = 24,
  color = "#4F46E5", // Indigo-600 (Tailwind)
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer frame */}
      <rect x="2" y="3" width="20" height="18" rx="2" stroke={color} strokeWidth="2" />

      {/* Sidebar section */}
      <rect x="2" y="3" width="5" height="18" fill={color} />

      {/* Two content lines (to show inside the main area) */}
      <line x1="9" y1="8" x2="19" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="13" x2="19" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
