import React from 'react';

// Real-world aircraft photos (Unsplash static IDs) per model
const PHOTO_MAP = {
  a380: {
    src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop',
    alt: 'Airbus A380 taxiing on runway',
    credit: 'Unsplash',
  },
  b777x: {
    // Representative 777 photo (777X is rare; using modern 777 visual)
    src: 'https://images.unsplash.com/photo-1733222012917-e9e74636080c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBaXJidXMlMjBBMzgwJTIwdGF4aWluZyUyMG9uJTIwcnVud2F5fGVufDB8MHx8fDE3NjI2MTc4OTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Boeing 777 in flight above clouds',
    credit: 'Unsplash',
  },
  e195: {
    // Regional jet on ramp
    src: 'https://images.unsplash.com/photo-1756182864120-ac88e8abbb0a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb2VpbmclMjA3NzclMjBpbiUyMGZsaWdodHxlbnwwfDB8fHwxNzYyNjE3ODk5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Embraer E-Jet on the apron',
    credit: 'Unsplash',
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
