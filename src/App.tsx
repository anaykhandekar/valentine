import React from 'react'
import { useState } from 'react'
import TypingPhase  from './components/TypingPhase'
import QuestionPhase from './components/QuestionPhase'
import RiddlePhase from './components/RiddlePhase'
import Piano from './components/Piano'
import "./global.css"

const styles = {
  backgroundColor: '#282c34',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  textAlign: 'center' as const,
};




const App: React.FC = () => {

  const [phase, setPhase] = useState(1)

  const goToNextPhase = () => {
    setPhase(prevPhase => prevPhase + 1)
  }

  return (
    <div style={styles}>
      {phase === 1 && <TypingPhase onComplete={goToNextPhase} />}
      {phase === 2 && <QuestionPhase onComplete={goToNextPhase} />}
      {phase === 3 && <Piano onComplete={goToNextPhase} />}
      {phase === 4 && <RiddlePhase onCorrectAnswer={() => window.location.href = 'https://youtube.com'} />}
    </div>
  )
}

export default App;
