// TypingEffect.js
import React, { useState, useEffect } from 'react';
import '../components/Typing.css';

const TypingEffect = ({ texts, typingSpeed = 100, pauseTime = 1100 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
  
    useEffect(() => {
      let typingTimeout;
  
      if (!isDeleting) {
        if (charIndex < texts[textIndex].length) {
          typingTimeout = setTimeout(() => {
            setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
          }, typingSpeed);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          typingTimeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          }, typingSpeed);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
  
      return () => clearTimeout(typingTimeout);
    }, [isDeleting, charIndex, textIndex, texts, typingSpeed, pauseTime]);
  
    return (
      <div className="typing-effect">
        {displayedText}
        <span className="cursor">|</span>
      </div>
    );
  };
  
  export default TypingEffect;