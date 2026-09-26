import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';

/**
 * LoadingScreen — 3-Second Unique Futuristic Cyber Preloader for SYNEXIA'26
 * 
 * Features:
 * - Multi-ring orbital gyroscopic HUD loading emblem with brand gradient trails
 * - 60fps smooth progress counter (0% -> 100%) across exactly 3000ms
 * - Dynamic system telemetry status messages
 * - Concentric sonic pulse waves radiating from the core
 * - Seamless optical de-blur curtain exit transition into the website
 */
export default function LoadingScreen({ onComplete, duration = 3000 }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM CORE...");

  useEffect(() => {
    const startTime = performance.now();

    const updateLoader = (currentTime) => {
      const elapsed = currentTime - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (currentProgress < 30) {
        setStatusText("INITIALIZING NEURAL CORE...");
      } else if (currentProgress < 65) {
        setStatusText("LOADING SYNEXIA'26 TRACKS...");
      } else if (currentProgress < 90) {
        setStatusText("SYNCING CAMPUS PORTAL...");
      } else {
        setStatusText("ACCESS GRANTED • ENTERING");
      }

      if (elapsed < duration) {
        requestAnimationFrame(updateLoader);
      } else {
        // Trigger smooth curtain exit animation
        setIsExiting(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 550);
      }
    };

    const animId = requestAnimationFrame(updateLoader);
    return () => cancelAnimationFrame(animId);
  }, [duration, onComplete]);

  return (
    <div
      aria-live="polite"
      aria-label="Loading SYNEXIA'26"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white text-slate-900 overflow-hidden transition-all duration-600 ease-out select-none ${
        isExiting 
          ? 'opacity-0 scale-102 blur-sm pointer-events-none' 
          : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Ambient Technical Grid */}
      <div className="absolute inset-0 bg-grid-minimal opacity-60 pointer-events-none" />
      
      {/* Soft Ambient Light Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-magenta/6 blur-[110px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-blue/6 blur-[120px] animate-float-slow pointer-events-none" />

      {/* Center Stage: Futuristic White Theme Loading Icon */}
      <div className="relative flex flex-col items-center z-10 max-w-sm w-full px-6">
        
        {/* Animated Gyroscopic HUD Emblem */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-8">
          
          {/* Outermost Concentric Ripple Wave 1 */}
          <div className="absolute inset-0 rounded-full border border-brand-magenta/25 animate-ping opacity-30 pointer-events-none" />
          
          {/* Outermost Concentric Ripple Wave 2 (delayed) */}
          <div 
            className="absolute -inset-3.5 rounded-full border border-brand-blue/20 animate-pulse pointer-events-none" 
            style={{ animationDuration: '2s' }}
          />

          {/* Outer Segmented Orbital Ring 1 (Spinning Clockwise) */}
          <svg 
            className="absolute inset-0 w-full h-full animate-spin" 
            style={{ animationDuration: '4s' }}
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="url(#gradient-white-theme)"
              strokeWidth="2.5"
              strokeDasharray="70 25 15 25"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient-white-theme" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C01368" />
                <stop offset="50%" stopColor="#1B4D9B" />
                <stop offset="100%" stopColor="#C01368" />
              </linearGradient>
            </defs>
          </svg>

          {/* Middle Radar Ticks Ring (Counter-Clockwise) */}
          <svg 
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-spin"
            style={{ animationDuration: '6s', animationDirection: 'reverse' }}
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="#C01368"
              strokeWidth="2"
              strokeDasharray="25 65"
              strokeLinecap="round"
            />
          </svg>

          {/* Inner Glowing Core Backdrop Framing SYNEXIA Logo */}
          <div className="absolute inset-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_25px_-5px_rgba(11,27,61,0.08),0_4px_12px_-2px_rgba(192,19,104,0.12)] flex items-center justify-center p-3 overflow-hidden group">
            
            {/* Soft Ambient Core Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-magenta/5 via-brand-blue/5 to-transparent pointer-events-none" />

            {/* Central SYNEXIA Logo / Emblem */}
            {siteConfig.synexiaLogo ? (
              <img 
                src={siteConfig.synexiaLogo}
                alt="SYNEXIA Logo"
                className="w-full h-full object-contain relative z-10 transform transition-transform duration-500 scale-95"
              />
            ) : (
              <span className="font-display font-black text-2xl tracking-tighter text-brand-navy z-10">
                SX
              </span>
            )}
          </div>

          {/* Orbiting Satellite Particle */}
          <div 
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: '2.5s' }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-brand-magenta ring-2 ring-white shadow-sm -translate-y-1 mx-auto" />
          </div>
        </div>

        {/* Brand Typography (Crisp Light Mode Hierarchy) */}
        <div className="text-center space-y-1 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-brand-navy text-[10px] font-mono font-bold uppercase tracking-widest mb-1 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta animate-ping" />
            National Level Technical Symposium
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display tracking-widest text-brand-navy">
            SYNEXIA<span className="text-brand-magenta">'26</span>
          </h1>

          <p className="text-[11px] sm:text-xs text-slate-600 font-medium tracking-wide">
            Dept. of Computer Science & Business Systems
          </p>
        </div>

        {/* Live Progress Bar & Telemetry (White Theme) */}
        <div className="w-full space-y-2.5">
          {/* Header Row: Telemetry Text + Percentage */}
          <div className="flex items-center justify-between text-[11px] font-mono font-bold tracking-wider">
            <span className="text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              {statusText}
            </span>
            <span className="text-brand-navy font-extrabold tabular-nums">
              {progress.toString().padStart(3, '0')}%
            </span>
          </div>

          {/* Cyber Progress Bar Track */}
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-[1px] border border-slate-200 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-navy via-brand-blue to-brand-magenta transition-all duration-75 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>

      {/* Bottom Subtle Institutional Footer Tag */}
      <div className="absolute bottom-6 text-center text-[10px] font-mono text-slate-400 uppercase tracking-widest z-10">
        E.G.S. PILLAY ENGINEERING COLLEGE • AUTONOMOUS
      </div>
    </div>
  );
}
