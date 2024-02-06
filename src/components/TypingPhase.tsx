import React, { useState, useEffect } from 'react';
import { dialogueAudioMap } from '../global/dialogue'; // Import the dialogueAudioMap

interface TypingPhaseProps {
  onComplete: () => void;
}

const styles = {
  typingText: {
    color: 'white',
    fontSize: '32px',
  },
  startButton: {
    padding: '10px 20px',
    fontSize: '20px',
    cursor: 'pointer',
    margin: '20px',
  }
}

const phrases = [
  "Hi my love ♥",
  "I made this website to ask you something.",
  "But you have to answer some things first.",
  "Flip over your letter. Good luck baby.",
  "muah muah muuaaah muah muah",
  "Find each word. Use its highest column number. Solve the puzzle."
];

const TypingPhase: React.FC<TypingPhaseProps> = ({ onComplete }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      // Play the corresponding audio when a new phrase starts typing
      if (typedText === '' && currentPhraseIndex < phrases.length) {
        const audio = new Audio(dialogueAudioMap[currentPhraseIndex]);
        audio.play();
      }

      if (currentPhraseIndex < phrases.length) {
        const currentPhrase = phrases[currentPhraseIndex];
        if (typedText !== currentPhrase) {
          // This is where you adjust the typing speed
          const timeoutId = setTimeout(() => {
            setTypedText(currentPhrase.slice(0, typedText.length + 1));
          }, 63); // Typing speed adjusted to be faster
          return () => clearTimeout(timeoutId);
        } else {
          const timeoutId = setTimeout(() => {
            setCurrentPhraseIndex(currentPhraseIndex + 1);
            setTypedText(''); // Reset for the next phrase
          }, 2000); // Adjust delay before typing next phrase
          return () => clearTimeout(timeoutId);
        }
      } else {
        onComplete(); // All phrases typed, call onComplete
      }
    }
  }, [typedText, currentPhraseIndex, onComplete, hasStarted]);

  return (
    <div>
      {!hasStarted && (
        <button style={styles.startButton} onClick={() => setHasStarted(true)}>
          Start
        </button>
      )}
      {hasStarted && (
        <div style={styles.typingText}>
          {typedText}
        </div>
      )}
    </div>
  );
}

export default TypingPhase;