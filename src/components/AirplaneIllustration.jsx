import React from 'react';

/**
 * Simple, lightweight SVG airplane illustrations for three aircraft types.
 * The airplane is tinted using the provided color while keeping details visible.
 */
export default function AirplaneIllustration({ model = 'a380', tint = '#2563EB' }) {
  const commonProps = {
    stroke: 'currentColor',
    strokeWidth: 1.2,
    vectorEffect: 'non-scaling-stroke',
  };

  const baseBodyFill = '#e5e7eb'; // neutral-200
  const detail = '#9ca3af'; // neutral-400

  const ModelSVG = () => {
    switch (model) {
      case 'a380':
        // Double-deck long fuselage, four engines on long swept wing (top view)
        return (
          <g>
            {/* Wing */}
            <path d="M40 120 C120 80, 200 60, 320 48 C360 45, 380 52, 420 60 C460 68, 520 82, 560 98 C600 114, 600 126, 560 140 C520 154, 460 168, 420 176 C380 184, 360 190, 320 188 C200 180, 120 160, 40 120 Z" fill={baseBodyFill} {...commonProps} />
            {/* Fuselage */}
            <rect x="80" y="96" width="480" height="48" rx="22" fill={baseBodyFill} {...commonProps} />
            {/* Cockpit bubble */}
            <circle cx="560" cy="120" r="10" fill={detail} />
            {/* Vertical stabilizer */}
            <path d="M100 80 L120 60 L140 100 L110 110 Z" fill={baseBodyFill} {...commonProps} />
            {/* Engines (4) */}
            <g fill={detail}>
              <ellipse cx="250" cy="86" rx="12" ry="8" />
              <ellipse cx="330" cy="76" rx="12" ry="8" />
              <ellipse cx="250" cy="154" rx="12" ry="8" />
              <ellipse cx="330" cy="164" rx="12" ry="8" />
            </g>
            {/* Windows (double deck) */}
            <g fill={detail}>
              {Array.from({ length: 10 }).map((_, i) => (
                <rect key={`u-${i}`} x={150 + i * 30} y={108} width={8} height={6} rx={2} />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <rect key={`l-${i}`} x={150 + i * 30} y={128} width={8} height={6} rx={2} />
              ))}
            </g>
          </g>
        );
      case 'b777x':
        // Long twin-engine with folding wingtips (top view hint)
        return (
          <g>
            {/* Wing with slight upturned tips */}
            <path d="M50 120 C150 80, 260 70, 360 66 C420 64, 480 70, 540 84 C580 94, 600 100, 610 110 C600 120, 580 126, 540 136 C480 150, 420 156, 360 154 C260 150, 150 140, 50 120 Z" fill={baseBodyFill} {...commonProps} />
            {/* Fuselage */}
            <rect x="90" y="100" width="460" height="40" rx="18" fill={baseBodyFill} {...commonProps} />
            {/* Cockpit */}
            <circle cx="540" cy="120" r="9" fill={detail} />
            {/* Twin engines */}
            <g fill={detail}>
              <ellipse cx="300" cy="88" rx="13" ry="9" />
              <ellipse cx="300" cy="152" rx="13" ry="9" />
            </g>
            {/* Windows */}
            <g fill={detail}>
              {Array.from({ length: 14 }).map((_, i) => (
                <rect key={`w-${i}`} x={150 + i * 22} y={114} width={7} height={6} rx={2} />
              ))}
            </g>
            {/* Folding tips hint */}
            <path d="M595 106 L610 100 L610 112 L595 118 Z" fill={detail} />
          </g>
        );
      case 'e195':
      default:
        // Shorter regional jet with high efficiency winglets
        return (
          <g>
            {/* Wing */}
            <path d="M60 120 C140 92, 220 86, 300 84 C360 82, 420 88, 480 102 C520 112, 520 128, 480 138 C420 152, 360 158, 300 156 C220 154, 140 148, 60 120 Z" fill={baseBodyFill} {...commonProps} />
            {/* Fuselage */}
            <rect x="100" y="104" width="380" height="32" rx="14" fill={baseBodyFill} {...commonProps} />
            {/* Cockpit */}
            <circle cx="470" cy="120" r="8" fill={detail} />
            {/* Engines underwing (2 small) */}
            <g fill={detail}>
              <ellipse cx="260" cy="96" rx="9" ry="6" />
              <ellipse cx="260" cy="144" rx="9" ry="6" />
            </g>
            {/* Windows */}
            <g fill={detail}>
              {Array.from({ length: 9 }).map((_, i) => (
                <rect key={`we-${i}`} x={150 + i * 26} y={116} width={6} height={6} rx={2} />
              ))}
            </g>
            {/* Winglets */}
            <path d="M90 110 L82 102 L86 116 Z" fill={detail} />
            <path d="M90 130 L82 138 L86 124 Z" fill={detail} />
          </g>
        );
    }
  };

  return (
    <div className="relative h-[420px] w-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
      {/* SVG Canvas */}
      <svg viewBox="0 0 640 240" className="absolute inset-0 w-full h-full text-neutral-400">
        {/* Subtle grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
          </pattern>
          <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Airframe */}
        <g>
          <ModelSVG />
          {/* Tint overlay following livery color */}
          <g style={{ mixBlendMode: 'multiply', opacity: 0.25 }}>
            <ModelSVG />
          </g>
          {/* The tint color fill is applied via a transparent rect overlay to colorize */}
          <rect x="0" y="0" width="640" height="240" fill={tint} style={{ mixBlendMode: 'multiply' }} opacity={0.25} />
          {/* Shine */}
          <rect x="0" y="0" width="640" height="240" fill="url(#shine)" opacity="0.4" />
        </g>
      </svg>
      {/* Non-blocking overlay for aesthetics */}
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
