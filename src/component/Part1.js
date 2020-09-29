import React from "react";

function Part1({numb, ex}) {
  let buttonGroup = [];
  
  for (let i = 1; i <= numb; i++) {
    buttonGroup.push(<button>{i}</button>);
  }
  return (
    <div className="part-1">
      <p>{ex}</p>
      <div className="button-part1">{buttonGroup}</div>
    </div>
  );
}
export default Part1;
