import React, { useState, useEffect, useCallback, useRef } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  speed = 30, 
  maxIterations = 8, 
  className = ''
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [hasRevealed, setHasRevealed] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Use a callback ref to ensure the observer attaches as soon as the node is mounted
  const containerRef = useCallback((node: HTMLSpanElement | null) => {
    if (node) {
      // Disconnect previous observer if exists
      if (observerRef.current) observerRef.current.disconnect();

      // Create new observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setHasRevealed(true);
            // Stop observing once revealed
            if (observerRef.current) observerRef.current.disconnect();
          }
        },
        {
          threshold: 0, // Trigger as soon as 1 pixel is visible
          rootMargin: '0px 0px -10% 0px' // Wait until it's slightly inside the viewport (10% from bottom) to ensure user sees it
        }
      );

      observerRef.current.observe(node);
    } else {
      // Node unmounted
      if (observerRef.current) observerRef.current.disconnect();
    }
  }, []);

  // Animation Logic
  useEffect(() => {
    if (hasRevealed) {
      let iteration = 0;
      
      const interval = setInterval(() => {
        setDisplayText(prev => 
          text.split('').map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          }).join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
        }
        
        iteration += 1 / (maxIterations / 3);
      }, speed);

      return () => clearInterval(interval);
    }
  }, [hasRevealed, text, speed, maxIterations]);

  return (
    <span 
      ref={containerRef}
      className={`inline-block cursor-default ${className} transition-opacity duration-700 ${hasRevealed ? 'opacity-100' : 'opacity-0'}`}
    >
      {displayText}
    </span>
  );
};

export default DecryptedText;