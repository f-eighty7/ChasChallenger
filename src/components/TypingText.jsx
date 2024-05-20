import React, { useState, useEffect } from 'react';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText('')

    

    const intervalId = setInterval(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      currentIndex += 1;
      
      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 30); // Adjust the speed of typing here (lower is faster)

    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default TypingText;
