import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import LevelDashboard from './components/LevelDashboard';
import LevelDetail from './components/LevelDetail'; // Komponen baru
import LevelComplete from './components/LevelComplete';
import GameComplete from './components/GameComplete';
import './index.css';

function App() {
  const [completedLevels, setCompletedLevels] = useState(0);

  useEffect(() => {
    const savedProgress = localStorage.getItem('gameProgress');
    if (savedProgress) {
      setCompletedLevels(parseInt(savedProgress, 10));
    }
  }, []);

  const handleLevelComplete = (levelNumber) => {
    if (levelNumber > completedLevels) {
      setCompletedLevels(levelNumber);
      localStorage.setItem('gameProgress', levelNumber.toString());
    }
  };

  const resetGame = () => {
    setCompletedLevels(0);
    localStorage.removeItem('gameProgress');
  };

 return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-parchment to-orange-100 flex items-center justify-center p-4 font-sans text-gray-800">
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-10 w-full max-w-3xl text-center border-t-8 border-deep-blue relative overflow-hidden">
          {/* Overlay tekstur kertas tua */}
          <div className="absolute inset-0 bg-[url('/vintage_paper_texture.png')] opacity-10 pointer-events-none z-0"></div>
          <div className="relative z-10"> {/* Konten utama di atas overlay */}
            <Routes>
              <Route path="/" element={<WelcomeScreen />} />
              <Route
                path="/dashboard"
                element={<LevelDashboard completedLevels={completedLevels} />}
              />
              <Route
                path="/level/:levelNumber"
                element={<LevelDetail onLevelComplete={handleLevelComplete} completedLevels={completedLevels} />}
              />
              <Route
                path="/level-complete/:levelNumber"
                element={<LevelComplete completedLevels={completedLevels} />}
              />
              <Route
                path="/game-complete"
                element={<GameComplete resetGame={resetGame} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
