import React from "react";


function Part({ numb, exercise, question }) {
  let questionNumbers = [];

  for (let i = 1; i <= numb; i++) {
    questionNumbers.push(<button onClick={question} key={i}>{i}</button>);
  }
  return (
    <div>
      <p>{exercise}</p>
      <div className="part">{questionNumbers}</div>
    </div>
  );
}
export default Part;
