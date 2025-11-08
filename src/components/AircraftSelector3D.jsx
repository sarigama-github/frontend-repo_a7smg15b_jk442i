import React, { useMemo } from 'react';
import { Plane, BadgeCheck } from 'lucide-react';
import AirplanePhoto from './AirplanePhoto';

const AIRCRAFTS = [
  {
    id: 'a380',
    name: 'Airbus A380',
    rangeKm: 15200,
    speedKts: 490,
    capacity: 525,
    comfort: 'lux',
  },
  {
    id: 'b777x',
    name: 'Boeing 777X',
    rangeKm: 16300,
    speedKts: 515,
    capacity: 426,
    comfort: 'prem',
  },
  {
    id: 'e195',
    name: 'Embraer E195-E2',
    rangeKm: 4800,
    speedKts: 447,
    capacity: 146,
    comfort: 'smart',
  },
];

const AIRLINES = [
  { id: 'garuda', name: 'Garuda Indonesia', code: 'GA', color: '#2D77C6' },
  { id: 'lion', name: 'Lion Air', code: 'JT', color: '#E11D48' },
  { id: 'batik', name: 'Batik Air', code: 'ID', color: '#7C3AED' },
  { id: 'singapore', name: 'Singapore Airlines', code: 'SQ', color: '#F59E0B' },
];

export default function AircraftSelector3D({ language = 'en', selectedAircraft, setSelectedAircraft, airline, setAirline }) {
  const isEN = language === 'en';

  const aircraft = useMemo(() => AIRCRAFTS.find(a => a.id === selectedAircraft) || AIRCRAFTS[0], [selectedAircraft]);

  const tint = airline?.color || '#2563EB';

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="relative h-[420px]">
            <AirplanePhoto model={aircraft.id} tint={tint} />
          </div>
          <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center gap-3">
            <div className="text-sm text-neutral-600 dark:text-neutral-300">
              {isEN ? 'Real aircraft photo with airline color tint overlay.' : 'Foto pesawat nyata dengan overlay warna livery.'}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Plane size={18} className="text-blue-600" />
              <h3 className="font-semibold text-neutral-900 dark:text-white">{isEN ? 'Aircraft' : 'Pesawat'}</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {AIRCRAFTS.map(a => (
                <button
                  key={a.id}
                  onClick={() => setSelectedAircraft(a.id)}
                  className={`text-left p-3 rounded-lg border transition ${aircraft.id === a.id ? 'border-blue-600 ring-2 ring-blue-200 dark:ring-blue-900/40' : 'border-neutral-200 dark:border-neutral-800'}`}
                >
                  <div className="font-medium text-neutral-900 dark:text-white">{a.name}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">{a.capacity} pax • {a.rangeKm.toLocaleString()} km • {a.speedKts} kts</div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
            <div className="flex items-center gap-2 mb-3">
              <BadgeCheck size={18} className="text-emerald-600" />
              <h3 className="font-semibold text-neutral-900 dark:text-white">{isEN ? 'Airline / Operator' : 'Maskapai / Operator'}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {AIRLINES.map(al => (
                <button
                  key={al.id}
                  onClick={() => setAirline(al)}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition ${airline?.id === al.id ? 'border-emerald-600 ring-2 ring-emerald-200 dark:ring-emerald-900/40' : 'border-neutral-200 dark:border-neutral-800'}`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: al.color }} />
                  <span className="text-sm text-neutral-800 dark:text-neutral-200">{al.name}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">{al.code}</span>
                </button>
              ))}
            </div>
          </div>

          {airline && (
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: airline.color }}>
                  {airline.code}
                </div>
                <div>
                  <div className="font-medium text-neutral-900 dark:text-white">{airline.name}</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">{isEN ? 'Livery color tint applied to the photo' : 'Warna livery diterapkan ke foto'}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
