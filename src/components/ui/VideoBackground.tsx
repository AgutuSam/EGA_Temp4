import React from 'react';
interface VideoBackgroundProps {
  videoUrl: string;
  posterUrl?: string;
  children: React.ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
}
const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoUrl,
  posterUrl,
  children,
  overlay = true,
  overlayOpacity = 0.6
}) => {
  return <div className="relative w-full h-full overflow-hidden">
      <video autoPlay loop muted playsInline poster={posterUrl} className="absolute inset-0 min-w-full min-h-full object-cover w-full h-full">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {overlay && <div className="absolute inset-0 bg-black z-10" style={{
      opacity: overlayOpacity
    }} />}
      <div className="relative z-20 h-full w-full">{children}</div>
    </div>;
};
export default VideoBackground;