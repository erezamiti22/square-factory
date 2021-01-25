import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";
import Square from './Square';

const SquareBoard = ({ squares, setSquares, checkerNum, changerIsHidden, setChangerIsHidden, changerVal }) => {

  const [alert30, setAlert30] = useState(false);

  useEffect(() => {
    if (alert30) {
      alert("New number is bigger by at least 30 than previous!");
      setAlert30(false);
    }
  }, [alert30]);

  return (
    <StyledSquareBoard>
      {squares.map((square) => (
        <Square
          checkerNum={checkerNum}
          squareNum={square.squareNum}
          color={square.color}
          squares={squares}
          setSquares={setSquares}
          id={square.id}
          changerIsHidden={changerIsHidden}
          setChangerIsHidden={setChangerIsHidden}
          changerVal={changerVal}
          setAlert30={setAlert30}
          key={square.id}
        >
        </Square>
      ))}
    </StyledSquareBoard>
  );
}

const StyledSquareBoard = styled(motion.div)`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

export default SquareBoard;