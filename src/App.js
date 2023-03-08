import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import Square from "./components/Square";

const borderStyle = {
  border: '4px solid green',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr',
  outline: 'none',
  height: '300px',
  width: '300px',
  margin: '0 auto',

}


function App() {
  const header = 'Tick-Tack-Toe Game';
  const [board, setBoard] = useState(Array(9).fill(null));

  const [gamerX, setGamerX] = useState(true);
  const [winner, setWinner] = useState(null);
  console.log('winner', winner)

  useEffect(() => {
    const calculateWinner = () => {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          setWinner(`Winner is  ${board[a]}`);
          break;
        }
      }
    }
    calculateWinner()
  }, [board])

  const handleMove = (index) => {
    const gamer = gamerX ? 'x' : '0';
    setBoard(board.map((square, ind) => ind === index ? gamer : square))
    setGamerX(!gamerX);
  }

  const restart = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
  }

  return (
    <div className="App">
      <Header header={header}/>
      <div style={borderStyle}>
        {board.map((square, ind) => <Square key={ind} ind={ind}
                                            square={square}
                                            handleMove={handleMove}/>)}
      </div>

      {winner && <h4>{winner}</h4>}
      <br/>
        <button onClick={restart}>Restart</button>


    </div>
  );
}

export default App;
