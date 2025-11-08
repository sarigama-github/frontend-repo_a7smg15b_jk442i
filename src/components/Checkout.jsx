import React from 'react';
import { CreditCard, ChevronRight } from 'lucide-react';

export default function Checkout({ language = 'en', selectedAircraft, airline, selectedRoute }) {
  const isEN = language === 'en';

  const aircraftName = selectedAircraft === 'b777x' ? 'Boeing 777X' : selectedAircraft === 'a380' ? 'Airbus A380' : 'Embraer E195-E2';

  const priceEstimate = selectedRoute === 'cgk-dps' ? 3800 : selectedRoute === 'cgk-sub' ? 2500 : 4200;

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">{isEN ? 'Summary' : 'Ringkasan'}</div>
            <div className="text-lg font-semibold text-neutral-900 dark:text-white">{aircraftName} {isEN ? 'with' : 'dengan'} {airline ? airline.name : (isEN ? 'Selected Operator' : 'Operator Terpilih')}</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
              {isEN ? 'Route' : 'Rute'}: {selectedRoute === 'cgk-dps' ? 'Jakarta → Bali' : selectedRoute === 'cgk-sub' ? 'Jakarta → Surabaya' : 'Bali → Singapore'}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-neutral-500 dark:text-neutral-400">{isEN ? 'Estimated Price' : 'Estimasi Harga'}</div>
            <div className="text-2xl font-bold text-neutral-900 dark:text-white">${priceEstimate.toLocaleString()}</div>
          </div>
        </div>

        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <button className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
            <CreditCard size={18} /> {isEN ? 'Book Now' : 'Pesan Sekarang'}
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 transition">
            {isEN ? 'Request Flight' : 'Ajukan Penerbangan'} <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
