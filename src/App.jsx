import React, { useState } from 'react';
//Styles
import GlobalStyle from './components/GlobalStyles';
//Components
import InputSection from './components/InputSection';
import SquareBoard from './components/SquareBoard';

function App() {

  const [squares, setSquares] = useState([]);
  const [checkerNum, setCheckerNum] = useState('');
  const [changerIsHidden, setChangerIsHidden] = useState(true);
  const [changerVal, setChangerVal] = useState('');

  return (
    <>
      <GlobalStyle />
      <InputSection
        squares={squares}
        setSquares={setSquares}
        setCheckerNum={setCheckerNum}
        changerIsHidden={changerIsHidden}
        setChangerVal={setChangerVal}
      />
      <SquareBoard
        squares={squares}
        setSquares={setSquares}
        checkerNum={checkerNum}
        changerIsHidden={changerIsHidden}
        setChangerIsHidden={setChangerIsHidden}
        changerVal={changerVal}
      />
    </>
  );
}

export default App;
