import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const InputSection = ({ squares, setSquares, setCheckerNum, changerIsHidden, setChangerVal }) => {

  const [squareNum, setSquareNum] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [changerInput, setChangerInput] = useState('');

  useEffect(() => {
    if (squares.length >= 10) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [squares]);

  const submitSquareHandler = (e) => {
    e.preventDefault();

    setSquares([
      ...squares,
      {
        squareNum,
        color: '#BBACBF',
        id: uuidv4(),
      }
    ])

    setSquareNum('');
  }

  const checkerHandler = (e) => {
    setCheckerNum(parseInt(e.target.value))
  }

  const submitChangeHandler = (e) => {
    e.preventDefault();
    setChangerVal(changerInput);
    setChangerInput('');
  }

  return (
    <StyledInputSection>
      <StyledForm onSubmit={(e) => submitSquareHandler(e)}>
        <input onChange={(e) => setSquareNum(e.target.value)} type="text" placeholder="Input" value={squareNum} />
        <button disabled={isDisabled} type="submit">Add Sqaure</button>
      </StyledForm>
      <StyledForm>
        <input onChange={(e) => checkerHandler(e)} type="text" placeholder="Checker" />
      </StyledForm>
      <StyledForm onSubmit={(e) => submitChangeHandler(e)} hidden={changerIsHidden}>
        <input onChange={(e) => setChangerInput(e.target.value)} type="text" placeholder="Changer" value={changerInput} />
      </StyledForm>
    </StyledInputSection>
  );
}

const StyledInputSection = styled(motion.div)`
  height: 30vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bbacbf;
`;

const StyledForm = styled(motion.form)`
  margin: 2rem;
`;

export default InputSection;
