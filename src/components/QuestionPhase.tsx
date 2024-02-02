import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScramble } from 'use-scramble';

interface QuestionPhaseProps {
    onComplete: () => void;
}

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: white;
  font-size: 36px;
  width: 30px;
  text-align: center;
  margin: 0 5px;
  font-family: 'Courier New', Courier, monospace;

  &:focus {
    outline: none;
  }
`;

const QuestionContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 80px 30px;
  align-items: center;
  color: white;
  font-size: 36px;
  font-family: 'Courier New', Courier, monospace;
`;

const DoubleInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const QuestionPhase: React.FC<QuestionPhaseProps> = ({ onComplete }) => {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);
  const inputRef5 = useRef<HTMLInputElement>(null);
  const inputRef6 = useRef<HTMLInputElement>(null);
  const inputRef7 = useRef<HTMLInputElement>(null);
  const inputRef8 = useRef<HTMLInputElement>(null);


  const [correct1, setCorrect1] = useState(false)
  const [correct2, setCorrect2] = useState(false)
  const [correct3, setCorrect3] = useState(false)
  const [correct4, setCorrect4] = useState(false)

  const { ref: unscrambled1 } = useScramble({
    text: 'ZOLTAR + GROTTO',
    playOnMount: true,
    speed: 0.25,
    scramble: 10,
  })

  const { ref: scrambling2 } = useScramble({
    text: 'FIREBALL + PIZOOKIE',
    playOnMount: true,
    speed: 0.25,
    scramble: 100000000,
  });

  const { ref: unscrambled2 } = useScramble({
    text: 'FIREBALL + PIZOOKIE',
    playOnMount: true,
    speed: 0.25,
    scramble: 10,
  })

  const { ref: scrambling3 } = useScramble({
    text: 'HAROLD + ANKHA',
    playOnMount: true,
    speed: 0.25,
    scramble: 100000000,
  });

  const { ref: unscrambled3 } = useScramble({
    text: 'HAROLD + ANKHA',
    playOnMount: true,
    speed: 0.25,
    scramble: 10,
  })

  const { ref: scrambling4 } = useScramble({
    text: 'SALVATORE + GOOSEBERRIES',
    playOnMount: true,
    speed: 0.25,
    scramble: 100000000,
  });

  const { ref: unscrambled4 } = useScramble({
    text: 'SALVATORE + GOOSEBERRIES',
    playOnMount: true,
    speed: 0.25,
    scramble: 10,
  })

  useEffect(() => {
    const checkCorrectness = () => {
      const isCorrect1 = inputRef1.current?.value === '1' && inputRef2.current?.value === '2';
      const isCorrect2 = inputRef3.current?.value === '3' && inputRef4.current?.value === '4';
      const isCorrect3 = inputRef5.current?.value === '5' && inputRef6.current?.value === '6';
      const isCorrect4 = inputRef7.current?.value === '7' && inputRef8.current?.value === '8';
  
      setCorrect1(isCorrect1);
      setCorrect2(isCorrect2);
      setCorrect3(isCorrect3);
      setCorrect4(isCorrect4);

      if (isCorrect1 && !isCorrect2) {
        inputRef3.current?.focus();
      } else if (isCorrect2 && !isCorrect3) {
        inputRef5.current?.focus();
      } else if (isCorrect3 && !isCorrect4) {
        inputRef7.current?.focus();
      } else if (isCorrect4) {
        onComplete();
      }
    };
  
    const inputs = [inputRef1, inputRef2, inputRef3, inputRef4, inputRef5, inputRef6, inputRef7, inputRef8];
    inputs.forEach((ref, index) => {
      const currentElement = ref.current;
      if (currentElement) {
        currentElement.oninput = (e) => {
          const target = e.target as HTMLInputElement;
          if (target.value) {
            target.value = target.value.slice(0, 1); // Ensure only one character
            checkCorrectness();
            if (index % 2 === 0) {
              inputs[index + 1].current?.focus(); // Move to next input if on left
            }
          }
        };
        currentElement.onkeydown = (e) => {
          if (e.key === 'Backspace' && currentElement.value === '' && index % 2 !== 0) {
            inputs[index - 1].current?.focus(); // Move back to left input if right is empty
          }
        };
      }
    });
  }, [onComplete]);

  return(
    <QuestionContainer>
      <div ref={unscrambled1}>ZOLTAR + GROTTO</div>
      <div>=</div>
      <DoubleInputContainer>
        <StyledInput type="text" ref={inputRef1} />
        <StyledInput type="text" ref={inputRef2} />
      </DoubleInputContainer>

      <div ref={correct1 ? unscrambled2 : scrambling2}>FIREBALL + PIZOOKIE</div>
      <div>=</div>
      <DoubleInputContainer>
        <StyledInput type="text" ref={inputRef3} />
        <StyledInput type="text" ref={inputRef4} />
      </DoubleInputContainer>

      <div ref={correct2 ? unscrambled3 : scrambling3}>HAROLD + ANKHA</div>
      <div>=</div>
      <DoubleInputContainer>
        <StyledInput type="text" ref={inputRef5} />
        <StyledInput type="text" ref={inputRef6} />
      </DoubleInputContainer>

      <div ref={correct3 ? unscrambled4 : scrambling4}>SALVATORE + GOOSEBERRIES</div>
      <div>=</div>
      <DoubleInputContainer>
        <StyledInput type="text" ref={inputRef7} />
        <StyledInput type="text" ref={inputRef8} />
      </DoubleInputContainer>
    </QuestionContainer>
  )
}

export default QuestionPhase;