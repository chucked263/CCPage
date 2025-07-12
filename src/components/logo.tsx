import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 160 40"
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
      
      <g transform="translate(0, 0)">
        {/* Gear/C part */}
        <path
          d="M20 0 C8.95 0 0 8.95 0 20 s8.95 20 20 20 c3.58 0 6.9-0.95 9.8-2.58 l-2.6-4.5 c-1.93 1.05-4.22 1.75-6.7 1.75 c-8.01 0-14.5-6.49-14.5-14.5 S11.99 5.5 20 5.5 c2.48 0 4.77 0.7 6.7 1.75 l2.6-4.5 C26.9 0.95 23.58 0 20 0 Z"
          fill="url(#gearGradient)"
        />
        {/* Gear Teeth */}
        <path d="M38.8,11.2 l-4.33,2.5 -2.16,-3.75 4.33,-2.5 2.16,3.75z M34.64,28.8 l4.33,2.5 2.16,-3.75 -4.33,-2.5 -2.16,3.75z M20,40 l-2.5,-4.33 3.75,-2.16 2.5,4.33 -3.75,2.16z M1.2,28.8 l4.33,-2.5 2.16,3.75 -4.33,2.5 -2.16,-3.75z M5.36,11.2 l-4.33,-2.5 2.16,-3.75 4.33,2.5 -2.16,3.75z M20,0 l2.5,4.33 -3.75,2.16 -2.5,-4.33 3.75,-2.16z" fill="url(#gearGradient)"/>

        {/* Inner C */}
        <path d="M20 10.5 c-5.25 0-9.5 4.25-9.5 9.5 s4.25 9.5 9.5 9.5 c2.01 0 3.86-0.63 5.38-1.7 l-2.1-3.64 C22.4 25.1 21.25 25.5 20 25.5 c-3.03 0-5.5-2.47-5.5-5.5 s2.47-5.5 5.5-5.5 c1.25 0 2.4.4 3.28 1.06 l2.1-3.64 C23.86 11.13 22.01 10.5 20 10.5 Z" fill="#243A5E" />
      </g>
      
      {/* Text part */}
      <text x="50" y="17" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="#243A5E" textAnchor="start">
        COMPONENTS
      </text>
      <text x="50" y="34" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="#243A5E" textAnchor="start">
        CENTRE
      </text>
    </svg>
  );
};

export default Logo;
