import React from 'react';

// Exact-model aircraft photos from Wikimedia Commons via Special:FilePath
// These URLs redirect to the original, high-resolution images and are stable.
const PHOTO_MAP = {
  a380: {
    src: 'https://images.unsplash.com/photo-1567446188601-95f43044f6dc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbGFuZSUyMEFpcmJ1cyUyMEEzODB8ZW58MHwwfHx8MTc2MjYxODMzMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Plane Airbus A380',
    credit: 'Wikimedia Commons',
  },
  b777x: {
    src: 'https://images.unsplash.com/photo-1567446188601-95f43044f6dc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbGFuZSUyMEFpcmJ1cyUyMEEzODB8ZW58MHwwfHx8MTc2MjYxODMzMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Plane Boeing 777X',
    credit: 'Wikimedia Commons',
  },
  e195: {
    src: 'https://images.unsplash.com/photo-1750027948449-5f9aa1f9349a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbGFuZSUyMEJvZWluZyUyMDc3N1h8ZW58MHwwfHx8MTc2MjYxODMzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Plane Embraer E195-E2',
    credit: 'Wikimedia Commons',
  },
};

export default function AirplanePhoto({ model = 'a380', tint }) {
  const photo = PHOTO_MAP[model] || PHOTO_MAP.a380;
  return (
    <div className="relative h-full w-full bg-neutral-200 dark:bg-neutral-800">
      <img
        src={photo.src}
        alt={photo.alt}
        className="absolute inset-0 w-full h-full object-cover select-none"
        draggable={false}
        referrerPolicy="no-referrer"
      />
      {tint && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: tint, mixBlendMode: 'multiply', opacity: 0.22 }}
        />
      )}
      <div className="absolute bottom-3 right-3 text-[10px] px-2 py-0.5 rounded bg-black/40 text-white/80 backdrop-blur-sm pointer-events-none">
        {photo.credit}
      </div>
    </div>
  );
}
