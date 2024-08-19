declare module 'react-scroll' {
    import * as React from 'react';
  
    export interface LinkProps {
      to: string;
      smooth?: boolean;
      offset?: number;
      duration?: number;
      onClick?: () => void;
      children?: React.ReactNode;
    }
  
    export const Link: React.FC<LinkProps>;
  
    export interface ElementProps {
      name: string;
      id?: string;
      children?: React.ReactNode;
    }
  
    export const Element: React.FC<ElementProps>;
  }
  