import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const BoneIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
  </svg>
);

export const PawIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 8a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V11a3 3 0 0 0-3-3Z" />
    <path d="M5 8a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V11a3 3 0 0 0-3-3Z" />
    <path d="M18.6 15.6a6 6 0 0 1-13.2 0c-1.1.9-1.4 3-.4 4.1A5 5 0 0 0 12 22a5 5 0 0 0 7-2.3c1-1.1.7-3.2-.4-4.1Z" />
  </svg>
);

export const BowlIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12h20" />
    <path d="M3 12a9 9 0 0 0 18 0" />
    <path d="M12 12v3" />
    <path d="M12 15h4" />
    <path d="M12 7a4 4 0 0 1 4 4" />
    <path d="M8 7a4 4 0 0 1 4 4" />
  </svg>
);