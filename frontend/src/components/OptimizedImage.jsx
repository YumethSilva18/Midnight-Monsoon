import React, { useState, useEffect } from 'react';

export function OptimizedImage({ src, alt, className, loading = "lazy" }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload and cache the image
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={imageSrc || src}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      loading={loading}
      decoding="async"
      style={{ 
        contentVisibility: 'auto',
        willChange: 'auto'
      }}
    />
  );
}
