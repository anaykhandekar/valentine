import React from 'react'


interface QuestionPhaseProps {
    onComplete: () => void;
}

const QuestionPhase: React.FC<QuestionPhaseProps> = ({ onComplete }) => {
  return(
    <div>
      QuestionPhase
      <button onClick={onComplete}>Complete</button>
    </div>
  )
}

export default QuestionPhase;