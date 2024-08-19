import React from "react";
import { IconProps } from "@/types/index";

const Logo: React.FC<IconProps> = ({ width, height }) => {
  return (
    <svg width={width} height={height} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2ZM4 19V7h16l.002 12H4Z"></path>
      <path d="m9.293 9.297-3.707 3.707 3.707 3.707 1.414-1.414-2.293-2.293 2.293-2.293-1.414-1.414Zm5.414 0-1.414 1.414 2.293 2.293-2.293 2.293 1.414 1.414 3.707-3.707-3.707-3.707Z"></path>
    </svg>
  );
};

export default Logo;
