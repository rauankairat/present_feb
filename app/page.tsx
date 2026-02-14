'use client';

import "./globals.css";
import "./valentine.css";
import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function ValentineGenshinChestPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);
  const [hearts, setHearts] = useState<any[]>([]);

  // Generate random values only on client after mount
  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }, () => ({
        width: Math.random() * 4 + 1.5,
        height: Math.random() * 4 + 1.5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 15,
        duration: Math.random() * 25 + 20,
      }))
    );

    setHearts(
      Array.from({ length: 10 }, () => ({
        size: Math.random() * 50 + 30,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 8 + 6,
      }))
    );
  }, []);

  const handleOpen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpened(true);
      setIsAnimating(false);
    }, 1800);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0e1b] via-[#1a1025] to-[#0f162e] flex items-center justify-center p-6 overflow-hidden relative">
      {/* Floating motes / particles – Genshin night sky vibe */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-b from-amber-100 to-yellow-300 rounded-full opacity-40 animate-float-particle"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Soft floating hearts with glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((heart, i) => (
          <Heart
            key={i}
            className="absolute text-pink-200/20 animate-pulse drop-shadow-[0_0_15px_rgba(255,182,193,0.5)]"
            size={heart.size}
            fill="currentColor"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl w-full">
        <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7e95] via-[#ff9fb3] to-[#ffc0d4] mb-16 drop-shadow-[0_0_30px_rgba(255,105,180,0.7)] animate-glow-soft">
          Дорогая Ке Цин!
        </h1>

        {/* Elegant Gift Box matching theme */}
        {!isOpened ? (
          <button
            onClick={handleOpen}
            disabled={isAnimating}
            className={`
              group relative mx-auto
              transition-all duration-1000
              ${isAnimating ? 'opacity-0 scale-90' : 'opacity-100'}
            `}
          >
            {/* Outer glow container */}
            <div className="relative">
              {/* Soft ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-purple-500/30 blur-3xl rounded-full scale-150"></div>
              
              {/* Main gift card */}
              <div className="relative bg-gradient-to-br from-[#2a1f3d]/80 via-[#3d2a52]/80 to-[#2a1f3d]/80 backdrop-blur-md p-12 rounded-2xl border border-pink-300/20 shadow-2xl shadow-purple-900/40 group-hover:border-pink-300/40 transition-all duration-700">
                
                {/* Decorative corner accents */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-pink-300/40"></div>
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-pink-300/40"></div>
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-pink-300/40"></div>
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-pink-300/40"></div>

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Heart icon with subtle glow */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-pink-500/20 blur-2xl rounded-full"></div>
                    <Heart 
                      size={90} 
                      className="relative text-pink-300 drop-shadow-[0_0_20px_rgba(255,182,193,0.6)] group-hover:scale-110 transition-transform duration-500" 
                      fill="currentColor" 
                    />
                  </div>

                  {/* Elegant text */}
                  <div className="space-y-2">
                    <p className="text-pink-200/60 text-lg font-light tracking-widest uppercase">Валентинка </p>
                    <p className="text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-pink-100 to-purple-200 drop-shadow-[0_0_15px_rgba(255,182,193,0.5)]">
                      🌸🌸🌸🌸🌸
                    </p>
                  </div>

                  {/* Subtle sparkles */}
                  <div className="flex justify-center gap-3 opacity-60">
                    <Sparkles size={20} className="text-amber-300 animate-pulse" style={{ animationDelay: '0s' }} />
                    <Sparkles size={16} className="text-pink-300 animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <Sparkles size={20} className="text-purple-300 animate-pulse" style={{ animationDelay: '0.6s' }} />
                  </div>
                </div>

                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-500/5 to-transparent rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </button>
        ) : (
          <div 
            className={`
              relative bg-gradient-to-br from-[#1c1438] to-[#2c1e4e] p-12 rounded-3xl 
              border-4 border-[#c9a028]/70 shadow-2xl shadow-purple-950/60
              animate-reveal-letter opacity-0 scale-90
              ${isOpened ? 'animate-reveal-active' : ''}
            `}
          >
            {/* Floating letter / scroll emerging from chest */}
            <div className="relative mx-auto max-w-lg bg-gradient-to-b from-[#fff8e1] via-[#fff0c7] to-[#ffe8ad] p-10 rounded-xl shadow-2xl border-8 border-[#d4b35f]/60 transform rotate-[-2deg] animate-float-letter">
              {/* Wax seal / emblem */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#b8963e] rounded-full border-8 border-amber-300 shadow-lg flex items-center justify-center">
                <Heart size={40} className="text-red-500" fill="currentColor" />
              </div>

              <div className="text-center space-y-6 pt-8">
                <Sparkles size={60} className="mx-auto text-yellow-400 animate-spin-slow drop-shadow-[0_0_25px_gold]" />
                
                <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 drop-shadow-[0_0_20px_pink]">
                  С Днем Валентина Моя Дорогая Ке Цин! 💞💞💞💞💞
                </h2>

                <p className="text-2xl text-gray-800 font-serif leading-relaxed tracking-wide">
                  Я поздравляю тебя с этим прекрасным праздником всех влюбленных, хоть мы и знакомы не так долго,но ты очень приятный человек и мне хочется общатся с тобой и узнавать о тебе больше! 
                  Пусть этот день станет оссобенее, моя валентинка!
                </p> 

                <div className="flex justify-center gap-8 mt-8">
                  <Heart size={56} className="text-red-500 animate-pulse" fill="currentColor" />
                  <Heart size={56} className="text-pink-500 animate-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
                  <Heart size={56} className="text-purple-500 animate-pulse" fill="currentColor" style={{ animationDelay: '0.8s' }} />
                </div>
              </div>
            </div>

            {/* Subtle glow rays from "chest" below */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-yellow-300/30 to-transparent blur-xl opacity-70" />
          </div>
        )}

        {isOpened && (
          <button
            onClick={handleClose}
            className="mt-12 text-amber-300 hover:text-amber-100 text-xl underline underline-offset-4 transition-all duration-300 hover:scale-105"
          >
            Назад
          </button>
        )}
      </div>
    </div>
  );
}