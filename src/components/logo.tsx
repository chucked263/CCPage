import React from 'react';
import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image 
      src="/CC logo.jpg" 
      alt="Components Centre Logo"
      width={180}
      height={40}
      className={className}
      priority
    />
  );
};

export default Logo;
