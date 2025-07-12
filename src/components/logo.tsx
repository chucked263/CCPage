import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 320 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Components Centre Logo"
      preserveAspectRatio="xMinYMid meet"
    >
      <defs>
        <linearGradient id="gearGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F26522" />
          <stop offset="100%" stopColor="#F7931E" />
        </linearGradient>
      </defs>
      
      <g transform="translate(0, 5)">
        {/* Gear/C part */}
        <path
          d="M30 0 C13.43 0 0 13.43 0 30 s13.43 30 30 30 c5.38 0 10.36-1.42 14.7-3.87 l-3.9-6.75 c-2.9 1.57-6.33 2.62-10.05 2.62 C17.98 52 8 42.02 8 30 S17.98 8 30 8 c3.72 0 7.15 1.05 10.05 2.62 l3.9-6.75 C40.36 1.42 35.38 0 30 0 Z"
          fill="url(#gearGradient)"
        />
        {/* Gear Teeth */}
        <path d="M58.2 16.8 l-6.495 3.75 -3.24 -5.625 6.495 -3.75 3.24 5.625z M51.96 43.2 l6.495 3.75 3.24 -5.625 -6.495 -3.75 -3.24 5.625z M30 60 l-3.75 -6.495 5.625 -3.24 3.75 6.495 -5.625 3.24z M1.8 43.2 l6.495 -3.75 3.24 5.625 -6.495 3.75 -3.24 -5.625z M8.04 16.8 l-6.495 -3.75 3.24 -5.625 6.495 3.75 -3.24 5.625z M30 0 l3.75 6.495 -5.625 3.24 -3.75 -6.495 5.625 -3.24z" fill="url(#gearGradient)"/>

        {/* Inner C */}
        <path d="M30 15.75 c-7.875 0-14.25 6.375-14.25 14.25 s6.375 14.25 14.25 14.25 c3.015 0 5.79-0.945 8.07-2.55 l-3.15-5.46 C36.6 37.65 33.375 38.25 30 38.25 c-4.545 0-8.25-3.705-8.25-8.25 s3.705-8.25 8.25-8.25 c3.375 0 6.6 1.59 8.07 2.55 l3.15-5.46 C35.79 16.695 33.015 15.75 30 15.75 Z" fill="#243A5E" />
      </g>
      
      {/* Text part */}
      <g transform="translate(80, 0)">
        <text y="24" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#243A5E" textAnchor="start">
          COMPONENTS
        </text>
        <text y="54" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill="#243A5E" textAnchor="start">
          CENTRE
        </text>
      </g>
    </svg>
  );
};

export default Logo;
