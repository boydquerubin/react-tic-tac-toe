import React from "react";

const Square = (props) => {
  const handleClick = () => {
    if (!props.squareValue) {
      if (props.player) {
        props.squares.splice(props.index, 1, "X");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      } else {
        props.squares.splice(props.index, 1, "O");
        props.setSquares(props.squares);
        props.setPlayer(!props.player);
      }
    }
  };
  return (
    <div className="square" onClick={handleClick}>
      {props.squareValue === "O" ? (
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/White_circle.png" />
      ) : (
        props.squareValue
      )}
    </div>
  );
};

export default Square;
