import React from 'react';

interface WatermelonLogoProps {
  className?: string;
  size?: number;
}

export const WatermelonLogo: React.FC<WatermelonLogoProps> = ({
  className = '',
  size = 40
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Watermelon slice */}
      <path
        d="M50 10 A 40 40 0 0 1 90 50 L 50 50 Z"
        fill="#ff6b9d"
        className="watermelon-flesh"
      />
      <path
        d="M50 10 A 40 40 0 0 1 90 50 L 50 50 Z"
        fill="url(#watermelon-gradient)"
        className="watermelon-flesh-gradient"
      />
      {/* White rind */}
      <path
        d="M50 15 A 35 35 0 0 1 85 50 L 50 50 Z"
        fill="#f8f9fa"
        className="watermelon-white"
      />
      {/* Pink/Red inner flesh */}
      <path
        d="M50 20 A 30 30 0 0 1 80 50 L 50 50 Z"
        fill="#e84855"
        className="watermelon-inner"
      />
      {/* Dark green rind */}
      <path
        d="M48 10 L 92 50 L 88 54 L 48 14 Z"
        fill="#1b4332"
        className="watermelon-rind-dark"
      />
      {/* Light green rind */}
      <path
        d="M50 12 L 90 50 L 88 52 L 50 14 Z"
        fill="#40916c"
        className="watermelon-rind-light"
      />
      {/* Seeds */}
      <ellipse cx="60" cy="35" rx="2" ry="3" fill="#212529" className="seed" />
      <ellipse cx="70" cy="42" rx="2" ry="3" fill="#212529" className="seed" transform="rotate(-20 70 42)" />
      <ellipse cx="65" cy="47" rx="2" ry="3" fill="#212529" className="seed" transform="rotate(15 65 47)" />
      <ellipse cx="58" cy="45" rx="2" ry="3" fill="#212529" className="seed" transform="rotate(-30 58 45)" />
      <ellipse cx="72" cy="48" rx="2" ry="3" fill="#212529" className="seed" transform="rotate(25 72 48)" />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="watermelon-gradient" x1="50" y1="10" x2="90" y2="50">
          <stop offset="0%" stopColor="#ff6b9d" stopOpacity="1" />
          <stop offset="100%" stopColor="#e84855" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const WatermelonWordmark: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <WatermelonLogo size={32} />
      <span className="text-2xl font-semibold bg-gradient-to-r from-melon-pink-100 to-melon-red bg-clip-text text-transparent">
        Watermelon
      </span>
    </div>
  );
};

export default WatermelonLogo;
