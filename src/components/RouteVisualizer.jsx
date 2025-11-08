import React, { useMemo } from 'react';
import { Map, Clock, CloudRain, Wind } from 'lucide-react';

const ROUTES = [
  { id: 'cgk-dps', from: 'Jakarta (CGK)', to: 'Bali (DPS)', distanceKm: 983, avgWindKt: 12, weather: 'Light Rain' },
  { id: 'cgk-sub', from: 'Jakarta (CGK)', to: 'Surabaya (SUB)', distanceKm: 664, avgWindKt: 8, weather: 'Clear' },
  { id: 'dps-sin', from: 'Bali (DPS)', to: 'Singapore (SIN)', distanceKm: 1679, avgWindKt: 15, weather: 'Cloudy' },
];

function estimateTimeHours(distanceKm, speedKts) {
  // Convert knots to km/h (1 kt = 1.852 km/h)
  const kmh = speedKts * 1.852;
  return distanceKm / kmh;
}

export default function RouteVisualizer({ language = 'en', selectedRoute, setSelectedRoute, selectedAircraft }) {
  const isEN = language === 'en';

  const route = useMemo(() => ROUTES.find(r => r.id === selectedRoute) || ROUTES[0], [selectedRoute]);

  const speedKts = selectedAircraft === 'b777x' ? 515 : selectedAircraft === 'a380' ? 490 : 447;
  const hours = estimateTimeHours(route.distanceKm, speedKts);
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
        <div className="relative h-[320px] bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 flex items-center justify-center">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto-start-reverse">
                  <path d="M0,0 L0,6 L6,3 z" fill="#2563eb" />
                </marker>
              </defs>
              <line x1="20%" y1="65%" x2="80%" y2="35%" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrow)" />
            </svg>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 backdrop-blur">
              <Map size={16} className="text-blue-600" />
              <span className="text-sm text-neutral-800 dark:text-neutral-200">{route.from} → {route.to}</span>
            </div>
          </div>
        </div>
        <div className="p-4 grid sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <Clock size={18} className="text-neutral-600 dark:text-neutral-300" />
            <div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{isEN ? 'Estimated Time' : 'Estimasi Waktu'}</div>
              <div className="font-medium text-neutral-900 dark:text-white">{h}h {m}m</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <CloudRain size={18} className="text-neutral-600 dark:text-neutral-300" />
            <div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{isEN ? 'Weather' : 'Cuaca'}</div>
              <div className="font-medium text-neutral-900 dark:text-white">{ROUTES.find(r=>r.id===route.id)?.weather}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <Wind size={18} className="text-neutral-600 dark:text-neutral-300" />
            <div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{isEN ? 'Avg. Wind' : 'Rata2 Angin'}</div>
              <div className="font-medium text-neutral-900 dark:text-white">{ROUTES.find(r=>r.id===route.id)?.avgWindKt} kt</div>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-2">
            {ROUTES.map(r => (
              <button
                key={r.id}
                onClick={() => setSelectedRoute(r.id)}
                className={`px-3 py-1.5 rounded-md border text-sm transition ${route.id === r.id ? 'border-indigo-600 ring-2 ring-indigo-200 dark:ring-indigo-900/40' : 'border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200'}`}
              >
                {r.from} → {r.to}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
