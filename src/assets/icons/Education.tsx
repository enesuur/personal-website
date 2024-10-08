import React from "react";
import { IconProps } from "@/types";
const Education: React.FC<IconProps> = ({ width, height,strokeWidth }) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m4 6 8-4 8 4"></path>
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path>
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"></path>
      <path d="M18 5v17"></path>
      <path d="M6 5v17"></path>
      <circle cx="12" cy="9" r="2"></circle>
    </svg>
  );
};

export default Education;
