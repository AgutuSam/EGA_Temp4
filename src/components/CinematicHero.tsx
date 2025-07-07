import React, { useState, useEffect, useRef } from 'react';
import { PlayCircle, Calendar, Shield, Volume2, VolumeX, Crown, ChevronDown, RotateCcw } from 'lucide-react';
import Button from './ui/Button';
import ReactPlayer from 'react-player';

interface CinematicHeroProps {
  theme: string;
}

const CinematicHero: React.FC<CinematicHeroProps> = ({ theme }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const videoRef = useRef<ReactPlayer>(null);

  const heritageVideos = [
    {
      url: "https://cdn.coverr.co/videos/coverr-golf-course-aerial-sunset-4829/1080p.mp4",
      title: "The Beauty of Tradition",
      subtitle: "Where golf heritage meets modern excellence"
    },
    {
      url: "https://cdn.coverr.co/videos/coverr-classic-golf-swing-technique-5847/1080p.mp4", 
      title: "Timeless Technique",
      subtitle: "Master the fundamentals of classical golf"
    },
    {
      url: "https://cdn.coverr.co/videos/coverr-prestigious-golf-club-ambiance-6294/1080p.mp4",
      title: "Legacy of Excellence", 
      subtitle: "Join a tradition of golfing greatness"
    }
  ];

  useEffect(() => {
    // Auto-rotate videos every 15 seconds
    const interval = setInterval(() => {
      if (autoPlay) {
        setCurrentVideoIndex((prev) => (prev + 1) % heritageVideos.length);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [autoPlay, heritageVideos.length]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const selectVideo = (index: number) => {
    setCurrentVideoIndex(index);
    setAutoPlay(false);
  };

  const restartAutoPlay = () => {
    setAutoPlay(true);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-heritage-gradient">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Image */}
        {!isVideoReady && (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-heritage-950/40 via-forest-900/30 to-classic-800/40"></div>
          </div>
        )}
        
        {/* Main Background Video */}
        <div className={`absolute inset-0 ${isVideoReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}>
          <ReactPlayer 
            ref={videoRef}
            url={heritageVideos[currentVideoIndex].url}
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
            onReady={() => setIsVideoReady(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-heritage-950/60 via-heritage-900/20 to-transparent"></div>
        </div>

        {/* Elegant Video Controls */}
        <div className="absolute bottom-8 right-8 flex items-center space-x-4 z-20">
          <button
            onClick={restartAutoPlay}
            className={`p-3 rounded-full transition-all duration-300 ${autoPlay ? 'bg-classic-600 text-white' : 'bg-white/90 text-heritage-800 hover:bg-white'}`}
            aria-label="Auto-play videos"
          >
            <RotateCcw size={20} />
          </button>
          <button
            onClick={toggleMute}
            className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors shadow-lg"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <Volume2 size={20} className="text-heritage-800" />
            ) : (
              <VolumeX size={20} className="text-heritage-800" />
            )}
          </button>
        </div>

        {/* Video Selection Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heritageVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => selectVideo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'bg-classic-500 w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Heritage Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Heritage Badge */}
          <div className="inline-flex items-center bg-white/90 text-heritage-800 px-6 py-3 rounded-full font-garamond font-medium text-sm mb-8 shadow-lg">
            <Crown className="mr-2 text-classic-600" size={18} />
            EST. 1924 - GOLFING EXCELLENCE
          </div>

          {/* Dynamic Heading based on current video */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-trajan font-bold text-white mb-6 leading-tight tracking-wide">
            {heritageVideos[currentVideoIndex].title.split(' ').map((word, index) => (
              <span 
                key={index} 
                className={`block ${index === 0 ? 'text-classic-400' : index === 1 ? 'text-white' : 'text-royal-400'}`}
                style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.7)' }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Dynamic Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-xl mb-8 font-garamond italic" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            {heritageVideos[currentVideoIndex].subtitle}
          </p>

          {/* Heritage Features */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Shield className="text-royal-400 mr-2" size={20} />
              <span className="text-white font-optima">Century of Excellence</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Crown className="text-classic-400 mr-2" size={20} />
              <span className="text-white font-optima">Championship Legacy</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              className="bg-classic-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-bold py-4 px-8 rounded-lg shadow-lg font-optima tracking-wide"
              onClick={() => setShowIntroVideo(true)}
            >
              <PlayCircle className="mr-2 inline" size={24} />
              Discover Our Heritage
            </button>
            
            <Button 
              theme={theme}
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-heritage-800 transition-all duration-300 font-optima backdrop-blur-sm"
            >
              <Calendar className="mr-2" size={24} />
              Reserve Your Round
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex items-center text-white/70 animate-bounce">
            <ChevronDown size={24} />
            <span className="ml-2 font-optima text-sm">Explore Our Tradition</span>
          </div>
        </div>
      </div>

      {/* Picture-in-Picture Introduction Video */}
      {showIntroVideo && (
        <div className="fixed top-4 right-4 z-50 w-80 h-48 bg-black rounded-lg overflow-hidden shadow-2xl border-2 border-classic-500">
          <div className="relative h-full">
            <ReactPlayer 
              url="https://cdn.coverr.co/videos/coverr-golf-club-welcome-introduction-7392/1080p.mp4"
              playing={true}
              controls
              width="100%"
              height="100%"
            />
            <button
              onClick={() => setShowIntroVideo(false)}
              className="absolute top-2 right-2 w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
            >
              ×
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
            <div className="text-white text-xs font-optima">Welcome to Element Golf Heritage</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CinematicHero;
