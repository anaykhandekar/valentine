import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface RiddlePhaseProps {
  onCorrectAnswer: () => void;
}
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Line = styled.p`
  opacity: 0;
  color: white;
  font-style: italic;
  animation: ${fadeIn} 1s ease forwards;
  font-size: 30px;
`;

const Input = styled.input`
  opacity: 0;
  padding: '10px';
  fontSize: '16px';
  fontStyle: 'italic'; // Changed to make text italicized when typing
  animation: ${fadeIn} 1s ease forwards;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-style: italic;
  }
`;

const RiddlePhase: React.FC<RiddlePhaseProps> = ({ onCorrectAnswer }) => {
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInput(true);
    }, 8 * 1000); // 8 lines * 1s animation each
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const answer = e.target.value.toLowerCase();
    if (answer.includes("la cajera es tan hermosa") || answer.includes("la cajera es hermosa")) {
      onCorrectAnswer();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', gap: '200px', marginTop: '100px', marginLeft: '30px' }}>
        <div>
          <Line style={{ animationDelay: '2s', marginRight: '100px' }}>Cloaked in sweet, here I stand</Line>
          <Line style={{ marginLeft: '20px', animationDelay: '4s' }}>outside a realm of flavor grand.</Line>
          <Line style={{ animationDelay: '5s', marginRight: '130px'}}>With a message in my hand,</Line>
          <Line style={{ marginLeft: '20px', animationDelay: '8s' }}>it speaks of beauty, not of land.</Line>
        </div>
        <div>
          <Line style={{ animationDelay: '10s', marginRight: '100px' }}>A ruby hidden in these walls.</Line>
          <Line style={{ marginLeft: '50px', animationDelay: '12s' }}>Years of love & no missed calls.</Line>
          <Line style={{ animationDelay: '14s', marginRight:'35px' }}>Rare moment when our paths align,</Line>
          <Line style={{ marginLeft: '40px', animationDelay: '16s' }}>This sign I hold, her secret sign.</Line>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
        {showInput && (
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="what did it say again?"
            style={{ animationDelay: '20s', border: 'none', borderBottom: '2px solid white', backgroundColor: 'transparent', color: 'white', fontSize: '36px', width: '50%', textAlign: 'center', margin: '0 5px'}}
          />
        )}
      </div>
    </div>
  );
};

export default RiddlePhase;