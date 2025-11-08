import React, { useEffect, useState } from 'react';
import HeaderBar from './components/HeaderBar';
import AircraftSelector3D from './components/AircraftSelector3D';
import RouteVisualizer from './components/RouteVisualizer';
import Checkout from './components/Checkout';
import FooterBar from './components/FooterBar';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [selectedAircraft, setSelectedAircraft] = useState('a380');
  const [selectedRoute, setSelectedRoute] = useState('cgk-dps');
  const [airline, setAirline] = useState(null);
  const [animations, setAnimations] = useState({ wings: false, doors: false, lights: true });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  const toggleLanguage = () => setLanguage(l => (l === 'en' ? 'in' : 'en'));

  const isEN = language === 'en';

  function handleAISuggest() {
    // Simple heuristic recommender
    // If route is long pick 777X, short pick E195, else A380
    const long = selectedRoute === 'dps-sin';
    const short = selectedRoute === 'cgk-sub';
    const suggestion = long ? 'b777x' : short ? 'e195' : 'a380';
    setSelectedAircraft(suggestion);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <HeaderBar theme={theme} onToggleTheme={toggleTheme} language={language} onToggleLanguage={toggleLanguage} />

      <main className="py-8 space-y-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {isEN ? '3D Aircraft Planner' : 'Perencana Pesawat 3D'}
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
            {isEN
              ? 'Rotate, zoom, and customize your aircraft. Visualize routes, check weather, and checkout in minutes.'
              : 'Putar, perbesar, dan sesuaikan pesawat Anda. Visualisasikan rute, cek cuaca, dan lanjut ke pemesanan dalam hitungan menit.'}
          </p>
        </div>

        <AircraftSelector3D
          language={language}
          selectedAircraft={selectedAircraft}
          setSelectedAircraft={setSelectedAircraft}
          airline={airline}
          setAirline={setAirline}
          onAISuggest={handleAISuggest}
          animations={animations}
          setAnimations={setAnimations}
        />

        <RouteVisualizer
          language={language}
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
          selectedAircraft={selectedAircraft}
        />

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
