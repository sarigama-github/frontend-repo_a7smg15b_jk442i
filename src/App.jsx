import React, { useEffect, useState } from 'react';
import HeaderBar from './components/HeaderBar';
import AircraftSelector3D from './components/AircraftSelector3D';
import RouteVisualizer from './components/RouteVisualizer';
import Checkout from './components/Checkout';
import FooterBar from './components/FooterBar';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [selectedAircraft, setSelectedAircraft] = useState('a380');
  const [selectedRoute, setSelectedRoute] = useState('cgk-dps');
  const [airline, setAirline] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  const toggleLanguage = () => setLanguage(l => (l === 'en' ? 'in' : 'en'));

  const isEN = language === 'en';

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <HeaderBar theme={theme} onToggleTheme={toggleTheme} language={language} onToggleLanguage={toggleLanguage} />

      <main className="py-8 space-y-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {isEN ? 'Aircraft Planner' : 'Perencana Pesawat'}
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
            {isEN
              ? 'Preview real aircraft photos, choose your route, and review a clear checkout summary.'
              : 'Lihat foto pesawat nyata, pilih rute, dan tinjau ringkasan pemesanan dengan jelas.'}
          </p>
        </div>

        <AircraftSelector3D
          language={language}
          selectedAircraft={selectedAircraft}
          setSelectedAircraft={setSelectedAircraft}
          airline={airline}
          setAirline={setAirline}
        />

        <ErrorBoundary>
          <RouteVisualizer
            language={language}
            selectedRoute={selectedRoute}
            setSelectedRoute={setSelectedRoute}
            selectedAircraft={selectedAircraft}
          />
        </ErrorBoundary>

        <Checkout
          language={language}
          selectedAircraft={selectedAircraft}
          airline={airline}
          selectedRoute={selectedRoute}
        />
      </main>

      <FooterBar />
    </div>
  );
}

export default App;
