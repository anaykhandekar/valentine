import React from 'react';
import Typist from 'react-typist';

interface TypingPhaseProps {
  onComplete: () => void;
}

const TypingPhase: React.FC<TypingPhaseProps> = ({ onComplete }) => {
  return (
    <Typist onTypingDone={onComplete}>
      This is the typing phase. It's gonna abruptly end soon.
    </Typist>
  );
}

export default TypingPhase;