"use client"

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

export default function TypingAnimation({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delay = 1500
}: TypingAnimationProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="inline-flex items-center">
      
      <span className="min-h-[1.1em] inline-block">{text || '\u00A0'}</span>
      
      {/* Blinking Cursor */}
      <span className="
        inline-block w-1 h-[0.9em] ml-2 bg-white
        animate-blink
      "></span>
    </span>
  );
}