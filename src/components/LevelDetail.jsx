import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const levelDetailsData = {
  1: {
    title: 'Fajar Kedatangan',
    instruction: 'Scan QR Code ini untuk membuka Kuis Sejarah tentang awal kedatangan Jepang. Jawab semua pertanyaan dengan benar!',
    qrPngPath: '/qr_level1.png',
    gameLink: 'https://www.educaplay.com/learning-resources/23878630-kedatangan_jepang_ke_indonesia.html',
    gameType: 'Kuis Sejarah',
    summary: "Pada level ini, kamu telah memahami faktor-faktor pendorong kedatangan Jepang ke Indonesia dan respons awal masyarakat.",
  },
  2: {
    title: 'Di Bawah Kekuasaan',
    instruction: 'Scan QR Code ini untuk membuka Word Search tentang kebijakan dan dampak pendudukan Jepang di Indonesia. Temukan semua kata tersembunyi!',
    qrPngPath: '/qr_level2.png',
    gameLink: 'https://www.educaplay.com/learning-resources/23917632-kedatangan_jepang_ke_indonesia_puzzle.html',
    gameType: 'Word Search',
    summary: "Kamu telah menjelajahi berbagai kebijakan Jepang, seperti Romusha, dan dampaknya terhadap kehidupan sosial ekonomi masyarakat Indonesia.",
  },
  3: {
    title: 'Menuju Kemerdekaan',
    instruction: 'Scan QR Code ini untuk membuka TTS (Teka-Teki Silang) tentang peristiwa menjelang proklamasi kemerdekaan. Isi semua kotak dengan benar!',
    qrPngPath: '/qr_level3.png',
    gameLink: 'https://www.educaplay.com/learning-resources/23920342-kedatangan_jepang_ke_indonesia_crossword.html',
    gameType: 'TTS',
    summary: "Selamat! Kamu telah menguasai peristiwa-peristiwa penting yang mengantarkan Indonesia pada Proklamasi Kemerdekaan, termasuk peran tokoh-tokoh nasional.",
  },
};

function LevelDetail({ onLevelComplete, completedLevels }) {
  const { levelNumber } = useParams();
  const navigate = useNavigate();
  const currentLevel = parseInt(levelNumber || '1', 10);
  const dataForLevel = levelDetailsData[currentLevel];

  const [isLevelCompletedUI, setIsLevelCompletedUI] = useState(false);

  useEffect(() => {
    if (currentLevel > completedLevels + 1) {
      navigate('/dashboard');
    }
    if (currentLevel <= completedLevels) {
      setIsLevelCompletedUI(true);
    } else {
      setIsLevelCompletedUI(false);
    }
  }, [currentLevel, completedLevels, navigate]);

  const handleOpenGameLink = () => {
    window.open(dataForLevel.gameLink, '_blank');
  };

  const handleMarkAsComplete = () => {
    onLevelComplete(currentLevel);
    navigate(`/level-complete/${currentLevel}`);
  };

  if (!dataForLevel) {
    return <div className="text-red-600 text-lg font-semibold">Level tidak ditemukan.</div>;
  }

  const isCurrentLevelActuallyCompleted = currentLevel <= completedLevels;

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-deep-blue drop-shadow-sm">
        Jejak {currentLevel}: {dataForLevel.title}
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed p-4 border border-gray-300 rounded-lg bg-parchment italic shadow-inner"
         dangerouslySetInnerHTML={{ __html: dataForLevel.instruction.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}>
      </p>

      <div className="flex flex-col items-center justify-center space-y-6 bg-blue-50 p-8 rounded-xl shadow-lg border-2 border-blue-300 relative overflow-hidden">
        {/* Desain bingkai QR Code ala sejarah */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 border-8 border-antique-gold rounded-full flex items-center justify-center overflow-hidden shadow-xl animate-pulse-glow">
          <img
            src={dataForLevel.qrPngPath}
            alt={`QR Code Level ${currentLevel}`}
            className="w-48 h-48 md:w-64 md:h-64 object-contain transition-all duration-300 group-hover:scale-105"
          />
          {/* Efek kilauan/kompas di sekeliling QR */}
          <div className="absolute inset-0 border-4 border-dashed border-parchment rounded-full animate-spin-slow"></div>
        </div>
        <p className="text-sm text-gray-600 italic">
          Gunakan aplikasi pemindai QR di ponsel atau perangkat lain untuk mengakses.
        </p>
        <button
          onClick={handleOpenGameLink}
          className="bg-forest-green hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden group"
        >
          <span className="relative z-10">Buka Tantangan {dataForLevel.gameType}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition duration-500 transform -skew-x-12 group-hover:translate-x-full"></span>
        </button>
      </div>

      {!isCurrentLevelActuallyCompleted ? (
        <div className="mt-8 p-6 bg-yellow-50 border-2 border-yellow-400 text-yellow-800 rounded-lg shadow-md animate-slide-up-fade">
          <p className="font-semibold text-lg mb-3 flex items-center justify-center">
            <span className="mr-2 text-2xl">💡</span> Instruksi Penting:
          </p>
          <p className="leading-relaxed">
            Setelah Anda menyelesaikan tantangan "{dataForLevel.gameType}" di tab baru, kembali ke halaman ini dan tekan tombol "Tandai Selesai" di bawah untuk melanjutkan ke jejak berikutnya.
          </p>
          <button
            onClick={handleMarkAsComplete}
            className="mt-6 bg-deep-blue hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Tandai Selesai</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition duration-500 transform -skew-x-12 group-hover:translate-x-full"></span>
          </button>
        </div>
      ) : (
        <div className="mt-8 p-6 bg-green-100 border-2 border-green-500 text-green-800 rounded-lg shadow-md animate-fade-in">
          <p className="font-semibold text-lg mb-3">Jejak ini telah selesai!</p>
          <p className="leading-relaxed">{dataForLevel.summary}</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Kembali ke Peta Jejak
          </button>
        </div>
      )}
    </div>
  );
}

export default LevelDetail;