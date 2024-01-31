import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

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
      <Typewriter
        words={['This is the typing phase. It\'s gonna abruptly end soon.']}
        loop={false}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        onDelete={onComplete}
      />
    </div>
  );
}

export default TypingPhase;