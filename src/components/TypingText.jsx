import React, { useState, useEffect } from "react";

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return;

    let currentIndex = -1;
    setDisplayedText("");

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex += 1;

      if (currentIndex > text.length - 2) {
        clearInterval(intervalId);
      }
    }, 30); // speed (lower is faster)

    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default TypingText;
