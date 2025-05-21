import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameComplete({ resetGame }) {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    resetGame();
    navigate('/');
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-4 animate-bounce-slow">
        <img src="/CROWN.jpg" alt="Crown Icon" className="w-32 h-32 md:w-48 md:h-48 mx-auto drop-shadow-xl animate-pulse-glow" />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-antique-gold leading-tight drop-shadow-lg">
        Penjelajah Sejarah Sejati: Mahkota Pengetahuan Telah Diraih!
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed p-4 bg-parchment border border-gray-300 rounded-lg shadow-inner">
        Kamu telah berhasil menelusuri seluruh jejak kedatangan bangsa Jepang di Indonesia dan memahami babak penting dalam sejarah kita. Pengetahuanmu kini adalah mahkotamu!
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-10">
        <button
          onClick={handlePlayAgain}
          className="bg-forest-green hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden group"
        >
          <span className="relative z-10">Main Lagi?</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition duration-500 transform -skew-x-12 group-hover:translate-x-full"></span>
        </button>
        <button
          onClick={handleGoToDashboard}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          Lihat Peta Jejakmu
        </button>
      </div>
    </div>
  );
}

export default GameComplete;