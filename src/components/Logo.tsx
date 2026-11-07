import React from 'react';

interface LogoProps {
  variant?: 'dark-bg' | 'light-bg';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark-bg',
  showTagline = false,
  className = '',
  size = 'md',
}) => {
  const isDarkBg = variant === 'dark-bg';
  const dimensions = size === 'sm' ? 36 : size === 'lg' ? 52 : 44;

  return (
    <div className={`inline-flex items-center gap-3.5 select-none group ${className}`}>
      {/* Geometric Window-Frame Monogram SVG with integrated 'SE' */}
      <svg
        width={dimensions}
        height={dimensions}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
      >
        {/* Outer Architectural Window Casement Frame */}
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          rx="1.5"
          fill={isDarkBg ? '#1A1A1A' : '#FFFFFF'}
          stroke={isDarkBg ? '#FFFFFF' : '#1A1A1A'}
          strokeWidth="2.5"
        />

        {/* Architectural Orange Accent Frame Corner & Sill */}
        <path
          d="M3 17V3H17"
          stroke="#FF6B35"
          strokeWidth="3"
          strokeLinecap="square"
        />
        <path
          d="M61 47V61H47"
          stroke="#FF6B35"
          strokeWidth="3"
          strokeLinecap="square"
        />

        {/* Inner Window Mullion Grid (Dividing left & right sliding panes) */}
        <line
          x1="32"
          y1="5"
          x2="32"
          y2="59"
          stroke={isDarkBg ? 'rgba(255,255,255,0.22)' : 'rgba(26,26,26,0.18)'}
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="32"
          x2="59"
          y2="32"
          stroke={isDarkBg ? 'rgba(255,255,255,0.14)' : 'rgba(26,26,26,0.12)'}
          strokeWidth="1"
        />

        {/* Inner Recessed Frame Line */}
        <rect
          x="9"
          y="9"
          width="46"
          height="46"
          stroke={isDarkBg ? 'rgba(255,255,255,0.18)' : 'rgba(26,26,26,0.15)'}
          strokeWidth="1"
        />

        {/* Geometric 'S' Integrated into Left Window Pane */}
        <path
          d="M27.5 19.5H16V31H27.5V44.5H15.5"
          stroke={isDarkBg ? '#FFFFFF' : '#1A1A1A'}
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />

        {/* Geometric 'E' Integrated into Right Window Pane */}
        <path
          d="M48.5 19.5H36.5V44.5H48.5"
          stroke={isDarkBg ? '#FFFFFF' : '#1A1A1A'}
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        {/* Orange Architectural Transom Bar forming middle bar of 'E' */}
        <line
          x1="36.5"
          y1="32"
          x2="46.5"
          y2="32"
          stroke="#FF6B35"
          strokeWidth="3.5"
          strokeLinecap="square"
        />
      </svg>

      {/* Brand Wordmark */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-heading font-extrabold tracking-tight leading-none ${
            size === 'lg' ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
          } ${isDarkBg ? 'text-white' : 'text-[#1A1A1A]'}`}
        >
          SAKSHI <span className="font-semibold tracking-normal">ENTERPRISES</span>
        </span>
        {showTagline ? (
          <span
            className={`text-[11px] font-medium tracking-[0.14em] uppercase mt-1 ${
              isDarkBg ? 'text-white/70' : 'text-[#333333]'
            }`}
          >
            Protecting Spaces. Enhancing Living.
          </span>
        ) : (
          <span
            className={`text-[10px] font-medium tracking-[0.18em] uppercase mt-1 ${
              isDarkBg ? 'text-white/65' : 'text-[#333333]/80'
            }`}
          >
            Mosquito Nets • Aluminium • Steel
          </span>
        )}
      </div>
    </div>
  );
};
