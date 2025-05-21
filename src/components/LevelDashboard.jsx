import React from 'react';
import { useNavigate } from 'react-router-dom';

function LevelDashboard({ completedLevels }) {
  const navigate = useNavigate();

  const levels = [
    { id: 1, title: 'Fajar Kedatangan', icon: '🌅', type: 'Kuis', statusText: 'Membuka Pintu Awal', color: 'bg-gradient-to-br from-blue-50 to-blue-200', border: 'border-blue-500' },
    { id: 2, title: 'Di Bawah Kekuasaan', icon: '⛓️', type: 'Word Search', statusText: 'Menjelajahi Era Sulit', color: 'bg-gradient-to-br from-yellow-50 to-yellow-200', border: 'border-yellow-500' },
    { id: 3, title: 'Menuju Kemerdekaan', icon: '🕊️', type: 'TTS', statusText: 'Mencapai Titik Balik', color: 'bg-gradient-to-br from-green-50 to-green-200', border: 'border-green-500' },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      <h2 className="text-4xl font-bold text-deep-blue font-serif drop-shadow-sm">Peta Jejakmu</h2>
      <div className="w-full bg-parchment rounded-full h-6 relative border border-gray-300 shadow-inner">
        <div
          className="bg-antique-gold h-6 rounded-full transition-all duration-700 ease-out flex items-center justify-center relative"
          style={{ width: `${(completedLevels / levels.length) * 100}%` }}
        >
          {completedLevels > 0 && (
              <span className="absolute right-0 translate-x-1/2 -top-2 text-3xl animate-bounce-slow">🧭</span>
          )}
        </div>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700">
          {completedLevels}/{levels.length} Jejak Selesai
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {levels.map((level, index) => {
          const isUnlocked = level.id <= completedLevels + 1;
          const isCompleted = level.id <= completedLevels;

          return (
            <div
              key={level.id}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 transform border-b-4 ${isCompleted ? 'border-green-600' : isUnlocked ? 'border-blue-600' : 'border-gray-400'}
                ${isCompleted
                  ? 'bg-gradient-to-br from-emerald-100 to-green-200 scale-105'
                  : isUnlocked
                    ? `${level.color} hover:shadow-xl hover:scale-105 cursor-pointer animate-slide-up-fade`
                    : 'bg-gray-200 opacity-70 cursor-not-allowed'
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => {
                if (isUnlocked) {
                  navigate(`/level/${level.id}`);
                }
              }}
            >
              <div className="text-5xl mb-4">
                {isCompleted ? '✅' : (isUnlocked ? level.icon : '🔒')}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{level.id}. {level.title}</h3>
              <p className={`mt-2 text-md font-medium ${isCompleted ? 'text-green-700' : isUnlocked ? 'text-blue-600' : 'text-gray-500'}`}>
                {isCompleted ? 'Terkunci' : (isUnlocked ? `${level.statusText}` : 'Terkunci')}
              </p>
              <button
                className={`mt-6 w-full py-3 rounded-lg font-bold transition duration-300 relative overflow-hidden group
                  ${isUnlocked
                    ? 'bg-deep-blue hover:bg-blue-800 text-white shadow-md'
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
                disabled={!isUnlocked}
                onClick={(e) => {
                  e.stopPropagation();
                  if (isUnlocked) {
                    navigate(`/level/${level.id}`);
                  }
                }}
              >
                <span className="relative z-10">{isCompleted ? 'Lihat Kembali' : 'Mulai Jejak'}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition duration-500 transform -skew-x-12 group-hover:translate-x-full"></span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LevelDashboard;