import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomeScreen() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/dashboard');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-extrabold text-deep-blue leading-tight tracking-wide drop-shadow-md">
        Jejak Perjuangan dalam Sepotong Permainan
      </h1>
      <p className="text-xl md:text-2xl text-rust-red mt-4 font-medium italic">
        "Lebih baik mati terhormat daripada hidup sebagai budak penjajah."
      </p>
      {/* Opsional: Ilustrasi historis */}
      {/* <img src="/historical_illustration.png" alt="Ilustrasi Sejarah" className="mt-8 mx-auto w-64 animate-slide-up-fade" /> */}

      <button
        onClick={handleStartGame}
        className="mt-12 bg-antique-gold hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl relative overflow-hidden group"
      >
        <span className="relative z-10">Mulai Petualangan</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition duration-500 transform -skew-x-12 group-hover:translate-x-full"></span>
      </button>
    </div>
  );
}

export default WelcomeScreen;