import React from 'react';
import Typist from 'react-typist';

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
      <Typist onTypingDone={onComplete}>
        This is the typing phase. It's gonna abruptly end soon.
      </Typist>
    </div>
  );
}

export default TypingPhase;