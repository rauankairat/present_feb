'use client';

import { useState } from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';

export default function ValentinePage() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 opacity-20 animate-pulse"
            size={Math.random() * 30 + 20}
            fill="currentColor"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Hi text */}
        <h1 className="text-8xl font-bold text-red-500 mb-12 animate-pulse drop-shadow-lg">
          Hi! 💕
        </h1>

        {/* Present box */}
        <div className="relative inline-block">
          {!isOpened ? (
            <button
              onClick={() => setIsOpened(true)}
              className="group relative bg-gradient-to-br from-red-400 to-pink-500 text-white px-12 py-8 rounded-2xl shadow-2xl hover:shadow-pink-300 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <div className="flex flex-col items-center gap-3">
                <Gift size={64} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-2xl font-bold">Open Your Gift!</span>
              </div>
              
              {/* Ribbon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-full bg-yellow-300 opacity-80"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-6 bg-yellow-300 opacity-80"></div>
              
              {/* Bow */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-12 bg-yellow-400 rounded-full shadow-lg"></div>
            </button>
          ) : (
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-4 border-pink-300 animate-[fadeIn_0.5s_ease-in]">
              <div className="flex flex-col items-center gap-4">
                <Sparkles size={48} className="text-yellow-400 animate-spin" />
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                  Happy Valentine's Day! 💝
                </h2>
                <p className="text-xl text-gray-700 max-w-md">
                  You're amazing and deserve all the love in the world!
                </p>
                <div className="flex gap-2 mt-4">
                  <Heart size={32} className="text-red-500 animate-pulse" fill="currentColor" />
                  <Heart size={32} className="text-pink-500 animate-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
                  <Heart size={32} className="text-red-400 animate-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Reset button */}
        {isOpened && (
          <button
            onClick={() => setIsOpened(false)}
            className="mt-8 text-pink-600 hover:text-pink-800 underline text-lg transition-colors"
          >
            Close gift
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}