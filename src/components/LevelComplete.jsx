import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const levelSummaries = {
    1: "Selamat! Kamu telah berhasil melewati tahap awal kedatangan Jepang. Mereka datang dengan berbagai alasan yang rumit, termasuk ambisi untuk mendominasi Asia Timur Raya. Kamu telah menguji pengetahuanmu tentang ini melalui Kuis Sejarah!",
    2: "Bagus! Kamu telah memahami berbagai kebijakan Jepang, seperti sistem kerja paksa Romusha, dan dampaknya terhadap kehidupan sosial ekonomi masyarakat Indonesia. Semua kata tersembunyi telah kamu temukan!",
    3: "Hebat! Kamu telah menyusuri periode krusial menjelang kemerdekaan. Kekalahan Jepang menjadi momentum bagi proklamasi kemerdekaan Indonesia, dengan peran para tokoh yang tak terlupakan. Semua teka-teki silang telah kamu pecahkan!",
};

function LevelComplete({ completedLevels }) {
  const { levelNumber } = useParams();
  const navigate = useNavigate();
  const currentLevel = parseInt(levelNumber || '1', 10);
  const totalLevels = 3;

  const handleNextAction = () => {
    if (currentLevel < totalLevels) {
      navigate(`/level/${currentLevel + 1}`);
    } else {
      navigate('/game-complete');
    }
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="space-y-6 animate-scale-in">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 leading-tight">
        🎉 Selamat! Jejak {currentLevel} Berhasil Diselesaikan! 🎉
      </h2>
      <p className="text-lg text-gray-700 italic leading-relaxed p-4 bg-green-50 border border-green-300 rounded-lg shadow-inner">
        {levelSummaries[currentLevel]}
      </p>

      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
        {currentLevel < totalLevels ? (
          <button
            onClick={handleNextAction}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Lanjutkan ke Jejak Berikutnya</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition duration-500 transform -skew-x-12 group-hover:translate-x-full"></span>
          </button>
        ) : (
          <button
            onClick={handleNextAction}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Lihat Hasil Akhir!</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition duration-500 transform -skew-x-12 group-hover:translate-x-full"></span>
          </button>
        )}
        <button
          onClick={handleGoToDashboard}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          Kembali ke Peta Jejak
        </button>
      </div>
    </div>
  );
}

export default LevelComplete;