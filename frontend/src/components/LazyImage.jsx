import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  placeholderSrc,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div 
        ref={imgRef}
        className={`bg-gray-800 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <span className="text-gray-400 text-sm">Loading...</span>
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;