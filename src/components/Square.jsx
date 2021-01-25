import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Square = ({ squareNum, squares, setSquares, color, checkerNum, setChangerIsHidden, changerVal, setAlert30, id }) => {

  const [squareColor, setSquareColor] = useState(color);

  useEffect(() => {
    if (checkerNum === '' || isNaN(checkerNum)) {
      setSquareColor(color);
    } else if (parseInt(squareNum) > checkerNum) {
      setSquareColor('green');
    } else if (parseInt(squareNum) < checkerNum) {
      setSquareColor('red');
    }
  }, [squareNum, color, checkerNum])

  useEffect(() => {

    if (changerVal !== "" && changerVal !== undefined) {
      const newSquares = squares.map((square) => {

        if (square.color === 'orange') {
          const previousNum = parseInt(square.squareNum);
          const changedNum = parseInt(changerVal);
          if (changedNum - previousNum >= 30) {
            setAlert30(true);
          }

          return {
            ...square,
            squareNum: changerVal,
          }
        } else {
          return {
            ...square,
          }
        }
      })
      setSquares(newSquares);

    }
  }, [changerVal])

  const handleDeleteButton = () => {
    const newSquares = squares.filter((item) => item.id !== id)
    setSquares(newSquares);

    if (newSquares.some(square => square.color === 'orange'))
      setChangerIsHidden(false);
    else setChangerIsHidden(true);
  }

  const handleSquareClick = () => {
    //active 'orange' state
    const newSquares = squares.map((square) => {
      if (square.id === id) {
        if (square.color === 'orange') {
          setChangerIsHidden(true)
          return {
            ...square,
            color: '#BBACBF',
          }
        }
        else {
          setChangerIsHidden(false)
          return {
            ...square,
            color: 'orange',
          }
        }
      }
      else {
        return {
          ...square,
          color: '#BBACBF',
        }
      }
    })

    setSquares(newSquares);

    // if (squareColor !== 'orange') {
    //   setSquareColor('orange');
    //   setChangerIsHidden(false)
    // }
    // else {
    //   setSquareColor('#BBACBF');
    //   setChangerIsHidden(true);
    // }
  }

  return (
    <div>
      <StyledButton onClick={() => handleDeleteButton()}>Delete</StyledButton>
      <StyledSquare onClick={() => handleSquareClick()} squareColor={squareColor}>
        {squareNum}
      </StyledSquare>
    </div>
  );
}

const StyledSquare = styled(motion.div)`
  height: 100px;
  width: 100px;
  background: ${props => props.squareColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin: 0.5rem;
  font-size: 2.5rem;
`;

const StyledButton = styled(motion.button)`

`;

export default Square;