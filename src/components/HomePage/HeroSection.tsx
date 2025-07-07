import React, { useState, useEffect } from 'react';
import { PlayCircle, Calendar, Compass, Volume2, VolumeX, Zap, Target, Award } from 'lucide-react';
import Button from '../ui/Button';
import ReactPlayer from 'react-player';

interface HeroSectionProps {
  theme: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate particles for background effect
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6
    }));
    setParticles(newParticles);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-noir-gradient">
      {/* Particle Background */}
      <div className="particle-bg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image while video loads */}
        {!isVideoReady && (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-noir-950/80 via-noir-900/70 to-noir-800/80"></div>
          </div>
        )}
        
        {/* Video player */}
        <div className={`absolute inset-0 ${isVideoReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
          <ReactPlayer 
            url="https://player.vimeo.com/external/446766811.hd.mp4?s=7a2e8f0be50f753a239a927e8b47e144ee8b7614&profile_id=175"
            playing={true}
            loop={true}
            muted={isMuted}
            width="100%"
            height="100%"
            style={{
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0
            }}
            config={{
              file: {
                attributes: {
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }
              }
            }}
            onReady={() => setIsVideoReady(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-noir-950/60 via-noir-900/40 to-noir-800/60"></div>
        </div>
        
        {/* Video controls */}
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-20 p-3 glass-dark rounded-full hover:shadow-neon transition-all duration-300 group"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <Volume2 size={20} className="text-neon-cyan group-hover:animate-pulse" />
          ) : (
            <VolumeX size={20} className="text-neon-cyan group-hover:animate-pulse" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        {/* Main Heading */}
        <div className="mb-8 reveal-animation">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-orbitron font-bold text-white mb-4 leading-tight">
            ELEMENT GOLF
            <span className="block text-transparent bg-clip-text bg-neon-gradient animate-neon-pulse">
              ACADEMY
            </span>
          </h1>
          <div className="w-32 h-1 bg-neon-gradient mx-auto rounded-full animate-glow"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-noir-200 max-w-4xl mb-8 font-exo reveal-animation">
          Redefining Golf Performance Through 
          <span className="neon-text-gold"> Technology & Mastery</span>
        </p>

        <p className="text-lg md:text-xl text-noir-300 max-w-3xl mb-12 reveal-animation">
          Welcome to Element Golf Academy at Steyn City - where innovation meets
          tradition to create the next generation of golf champions.
        </p>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 reveal-animation">
          <div className="flex items-center space-x-2 glass-dark px-4 py-2 rounded-full">
            <Zap className="text-neon-cyan animate-pulse" size={20} />
            <span className="text-noir-100 font-medium">AI-Powered Training</span>
          </div>
          <div className="flex items-center space-x-2 glass-dark px-4 py-2 rounded-full">
            <Target className="text-neon-gold animate-pulse" size={20} />
            <span className="text-noir-100 font-medium">Precision Analytics</span>
          </div>
          <div className="flex items-center space-x-2 glass-dark px-4 py-2 rounded-full">
            <Award className="text-neon-purple animate-pulse" size={20} />
            <span className="text-noir-100 font-medium">Elite Coaching</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 reveal-animation">
          <button className="holographic-btn group">
            <PlayCircle className="mr-2 group-hover:animate-spin" size={24} />
            Watch Our Story
          </button>
          
          <Button theme={theme} variant="primary" size="lg" className="group bg-gradient-to-r from-neon-cyan to-electric-500 hover:from-electric-500 hover:to-neon-cyan shadow-neon hover:shadow-neon-lg transition-all duration-300">
            <Calendar className="mr-2 group-hover:animate-pulse" size={24} />
            Book a Lesson
          </Button>
          
          <Button theme={theme} variant="outline" size="lg" className="group border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-noir-950 transition-all duration-300">
            <Compass className="mr-2 group-hover:animate-pulse" size={24} />
            Explore Programs
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <div className="w-8 h-8 border-2 border-neon-cyan rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-neon-cyan" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
