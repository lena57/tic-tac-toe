import React from 'react';

const squareStyle = {
  border: '2px solid green',
  fontSize: '40px',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}
const Square = ({square, ind, handleMove}) => {


  return (
    <div style={squareStyle}
    onClick={()=>handleMove(ind)}>
      {square}
    </div>
  );
};

export default Square;
