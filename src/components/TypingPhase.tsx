import React from 'react';

interface TypingPhaseProps {
  onComplete: () => void;
}

const styles = {
  typingText: {
    color: 'white',
    fontSize: '32px',
    fontFamily: 'Courier New'
  }
}

const TypingPhase: React.FC<TypingPhaseProps> = ({ onComplete }) => {
  return (
    <div style={styles.typingText}>
        <button onClick={onComplete}>Complete Typing</button>
    </div>
  );
}

export default TypingPhase;