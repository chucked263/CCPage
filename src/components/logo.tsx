import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Components Centre Logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F26522" />
          <stop offset="100%" stopColor="#F7931E" />
        </linearGradient>
      </defs>
      <g strokeWidth="0" fillRule="evenodd">
        <path
          d="M12,1.5a1.25,1.25,0,0,0,0,2.5,8,8,0,0,1,0,16,1.25,1.25,0,0,0,0,2.5,10.5,10.5,0,0,0,0-21Z"
          transform="rotate(15 12 12)"
          fill="url(#logoGradient)"
        />
        <path
          d="M12,1.5a1.25,1.25,0,0,0,0,2.5,8,8,0,0,1,0,16,1.25,1.25,0,0,0,0,2.5,10.5,10.5,0,0,0,0-21Z"
          transform="rotate(75 12 12)"
          fill="url(#logoGradient)"
        />
        <path
          d="M12,1.5a1.25,1.25,0,0,0,0,2.5,8,8,0,0,1,0,16,1.25,1.25,0,0,0,0,2.5,10.5,10.5,0,0,0,0-21Z"
          transform="rotate(135 12 12)"
          fill="url(#logoGradient)"
        />
        <circle cx="12" cy="12" r="5" fill="hsl(var(--primary))" />
      </g>
    </svg>
  );
};

export default Logo;
