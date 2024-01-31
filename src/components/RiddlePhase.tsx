import React from 'react';

interface RiddlePhaseProps {
  onCorrectAnswer: () => void;
}

const RiddlePhase: React.FC<RiddlePhaseProps> = ({ onCorrectAnswer }) => {
  // You can implement the logic of the riddle here
  return (
    <div>
      This is the riddle phase.
      <button onClick={onCorrectAnswer}>Submit Answer</button>
    </div>
  );
}

export default RiddlePhase;