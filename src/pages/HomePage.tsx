import React, { useState } from 'react';
import VideoBackground from '../components/ui/VideoBackground';
import Button from '../components/ui/Button';
import HeroSection from '../components/HomePage/HeroSection';
import { Play, Calendar, Book, ArrowRight, Target, Users, Laptop, Award, Trophy, Star, X as CloseIcon } from 'lucide-react';

interface HomePageProps {
  theme: string;
}

const HomePage: React.FC<HomePageProps> = ({ theme }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Featured videos collection
  const featuredVideos = [
    {
      id: 1,
      title: 'Swing Analysis Technology',
      description: 'See how our advanced technology analyzes your swing in real-time',
      thumbnail: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      videoUrl: 'https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761'
    },
    {
      id: 2,
      title: 'Junior Golf Program',
      description: 'Our comprehensive approach to developing young golfers',
      thumbnail: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f62a23d39fd49a996de432338fee440e3b&profile_id=139&oauth2_token_id=57447761'
    },
    {
      id: 3,
      title: 'Pro Training Sessions',
      description: 'How we train professional golfers to achieve peak performance',
      thumbnail: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      videoUrl: 'https://player.vimeo.com/external/403295710.sd.mp4?s=788b046826f92983ada6e5caf067113fdb49e209&profile_id=139&oauth2_token_id=57447761'
    }
  ];

  const openVideoModal = (videoUrl: string) => {
    setActiveVideo(videoUrl);
    setShowVideoModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  // Sample data for coaches
  const coaches = [
    {
      id: 1,
      name: 'David Wilson',
      role: 'Head Coach & Founder',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Former PGA Tour player with over 20 years of coaching experience.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Performance Coach',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Specializes in biomechanics and physical conditioning for golf.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Technical Coach',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      bio: 'Expert in swing analysis and technology-driven improvement.'
    },
    {
      id: 4,
      name: 'Jessica Adams',
      role: 'Junior Development Coach',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bio: 'Specializes in youth development and building strong fundamentals.'
    }
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      id: 1,
      name: 'James Thompson',
      role: 'Amateur Golfer',
      quote: 'Element Golf Academy transformed my game. The technology and personalized coaching helped me drop my handicap by 5 strokes in just three months.',
      image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      name: 'Emma Roberts',
      role: 'Junior Champion',
      quote: "The coaches at Element don't just teach you how to swing; they help you understand the game. Their holistic approach has been crucial to my development.",
      image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      name: 'Robert Ndlovu',
      role: 'Professional Golfer',
      quote: 'The facilities at Element Golf Academy are world-class. The combination of technology and expert coaching creates an unparalleled learning environment.',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-noir-gradient text-noir-50' : 'bg-gradient-to-br from-noir-50 to-noir-100 text-noir-900'}`}>
      {/* Hero Section */}
      <HeroSection theme={theme} />

      {/* Featured Videos Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-noir-900' : 'bg-noir-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-orbitron">
              Featured Videos
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
              Explore our training methods and facilities through these videos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVideos.map(video => (
              <div key={video.id} className={`rounded-lg overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-noir-800 glass-dark' : 'bg-noir-100 glass'} transition-transform hover:scale-[1.02] duration-300`}>
                <div className="relative group cursor-pointer" onClick={() => openVideoModal(video.videoUrl)}>
                  <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-neon-cyan shadow-neon' : 'bg-electric-500 shadow-electric'}`}>
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-exo">{video.title}</h3>
                  <p className="opacity-80 mb-4">{video.description}</p>
                  <button onClick={() => openVideoModal(video.videoUrl)} className={`inline-flex items-center text-sm font-medium ${theme === 'dark' ? 'text-neon-cyan hover:text-neon-blue' : 'text-electric-600 hover:text-electric-700'} transition-colors`}>
                    Watch Video <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80">
          <div className="relative w-full max-w-4xl mx-auto">
            <button onClick={closeVideoModal} className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10">
              <CloseIcon size={24} />
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <video src={activeVideo || ''} controls autoPlay className="absolute top-0 left-0 w-full h-full">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-noir-950' : 'bg-noir-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Our Services
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
              Comprehensive golf development services powered by technology and expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'glass-dark hover:shadow-neon' : 'glass hover:shadow-electric'} transition-all duration-300`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${theme === 'dark' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-electric-500/20 text-electric-600'}`}>
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-exo">
                Personalized Coaching
              </h3>
              <p className="opacity-80 mb-4">
                Custom training programs designed to meet your specific goals and skill level.
              </p>
              <a href="/programs" className={`inline-flex items-center text-sm font-medium ${theme === 'dark' ? 'text-neon-cyan hover:text-neon-blue' : 'text-electric-600 hover:text-electric-700'} transition-colors`}>
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'glass-dark hover:shadow-neon' : 'glass hover:shadow-electric'} transition-all duration-300`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${theme === 'dark' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-electric-500/20 text-electric-600'}`}>
                <Laptop size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-exo">
                Advanced Technology
              </h3>
              <p className="opacity-80 mb-4">
                State-of-the-art swing analysis, simulators, and performance tracking tools.
              </p>
              <a href="/facilities" className={`inline-flex items-center text-sm font-medium ${theme === 'dark' ? 'text-neon-cyan hover:text-neon-blue' : 'text-electric-600 hover:text-electric-700'} transition-colors`}>
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'glass-dark hover:shadow-neon' : 'glass hover:shadow-electric'} transition-all duration-300`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${theme === 'dark' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-electric-500/20 text-electric-600'}`}>
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-exo">Group Programs</h3>
              <p className="opacity-80 mb-4">
                Dynamic group sessions for juniors, adults, and corporate teams.
              </p>
              <a href="/programs" className={`inline-flex items-center text-sm font-medium ${theme === 'dark' ? 'text-neon-cyan hover:text-neon-blue' : 'text-electric-600 hover:text-electric-700'} transition-colors`}>
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            <div className={`p-6 rounded-lg ${theme === 'dark' ? 'glass-dark hover:shadow-neon' : 'glass hover:shadow-electric'} transition-all duration-300`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${theme === 'dark' ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-electric-500/20 text-electric-600'}`}>
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-exo">
                Performance Programs
              </h3>
              <p className="opacity-80 mb-4">
                Elite training for competitive golfers looking to reach their peak potential.
              </p>
              <a href="/programs" className={`inline-flex items-center text-sm font-medium ${theme === 'dark' ? 'text-neon-cyan hover:text-neon-blue' : 'text-electric-600 hover:text-electric-700'} transition-colors`}>
                Learn More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Golf player in action" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">
                Beyond the Swing –
                <span className={`${theme === 'dark' ? 'text-neon-cyan neon-text' : 'text-electric-600'} block mt-2`}>
                  The Element Difference
                </span>
              </h2>
              <p className="text-lg mb-6 opacity-80">
                At Element Golf Academy, we believe in a holistic approach to golf development. Our philosophy extends beyond technical swing mechanics to encompass mental fortitude, physical conditioning, and strategic thinking.
              </p>
              <p className="text-lg mb-8 opacity-80">
                We combine cutting-edge technology with human expertise to create a learning environment where players of all levels can thrive. Our methodology is data-driven yet personally tailored, ensuring each golfer receives the specific guidance they need to excel.
              </p>
              <Button href="/about" theme={theme} variant="outline" className="flex items-center">
                Learn About Our Approach
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Technology Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-noir-950' : 'bg-noir-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
              Facilities & Technology
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
              State-of-the-art equipment and spaces designed for optimal learning and performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`rounded-lg overflow-hidden ${theme === 'dark' ? 'glass-dark' : 'glass'} transition-transform hover:scale-[1.02] duration-300`}>
              <img src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Motion Capture Studio" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-exo">
                  Motion Capture Studio
                </h3>
                <p className="opacity-80 mb-4">
                  High-speed cameras and sensors capture every aspect of your swing for detailed analysis and improvement.
                </p>
                <a href="/facilities" className={`inline-flex items-center text-sm font-medium ${theme === 'dark' ? 'text-neon-cyan hover:text-neon-blue' : 'text-electric-600 hover:text-electric-700'} transition-colors`}>
                  Explore <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            <div className={`rounded-lg overflow-hidden ${theme === 'dark' ? 'glass-dark' : 'glass'} transition-transform hover:scale-[1.02] duration-300`}>
              <img src="https://images.unsplash.com/photo-1596727362302-b8e1f9445a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Indoor Simulators" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-exo">
                  Indoor Simulators
                </h3>
                <p className="opacity-80 mb-4">
                  Play world-famous courses and practice in controlled conditions with our high-definition golf simulators.
                </p>
                <a href="/facilities" className={`inline-flex items-center text-sm font-medium ${theme === 'dark' ? 'text-neon-cyan hover:text-neon-blue' : 'text-electric-600 hover:text-electric-700'} transition-colors`}>
                  Explore <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            <div className={`rounded-lg overflow-hidden ${theme === 'dark' ? 'glass-dark' : 'glass'} transition-transform hover:scale-[1.02] duration-300`}>
              <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Outdoor Practice Area" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-exo">
                  Outdoor Practice Area
                </h3>
                <p className="opacity-80 mb-4">
                  Premium hitting bays, short game area, and putting greens set in the beautiful Steyn City landscape.
                </p>
                <a href="/facilities" className={`inline-flex items-center text-sm font-medium ${theme === 'dark' ? 'text-neon-cyan hover:text-neon-blue' : 'text-electric-600 hover:text-electric-700'} transition-colors`}>
                  Explore <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button href="/facilities" theme={theme} variant="primary">
              View All Facilities
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-noir-950' : 'bg-noir-200'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">
              Ready to Transform Your Golf Game?
            </h2>
            <p className="text-lg mb-8 opacity-80">
              Join Element Golf Academy today and experience the perfect blend of technology and expertise to elevate your performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" theme={theme} variant="primary" size="lg">
                Book Your First Session
              </Button>
              <Button href="/programs" theme={theme} variant="outline" size="lg">
                Explore Our Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
