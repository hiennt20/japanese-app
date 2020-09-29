import React from "react";


function Part({ numb, exercise }) {
  let questionNumbers = [];

  for (let i = 1; i <= numb; i++) {
    questionNumbers.push(<button key={i}>{i}</button>);
  }
  return (
    <div>
      <p>{exercise}</p>
      <div className="part">{questionNumbers}</div>
    </div>
  );
}
export default Part;
