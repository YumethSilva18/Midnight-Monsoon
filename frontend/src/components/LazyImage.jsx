import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  placeholderSrc,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Generate a low-quality placeholder if not provided
  const defaultPlaceholder = placeholderSrc || `data:image/svg+xml;base64,${btoa(`
    <svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1a1a1a"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#666" font-family="Arial, sans-serif" font-size="14">Loading...</text>
    </svg>
  `)}`;

  if (imageError) {
    return (
      <div 
        className={`bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      placeholderSrc={defaultPlaceholder}
      effect="blur"
      onError={() => setImageError(true)}
      threshold={100}
      {...props}
    />
  );
};

export default LazyImage;