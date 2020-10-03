import React from "react";

// in các nút ra dựa trên database

function Part({ lesson, lessonIndex, displayContent }) {
  return (
    <div>
      <h5>問題 {lessonIndex + 1}</h5>

      {lesson.map((question, questionIndex) => (
        <button key={questionIndex} onClick={() => displayContent(lessonIndex, questionIndex)}>
          {questionIndex + 1}
        </button>
      ))}
    </div>
  );
}

// code làm của phần trước khi gọi api
{
  /* // function Part({ numb, exercise, changeQuestion }) {
//   let questionNumbers = [];

//   for (let i = 1; i <= numb; i++) {
//     questionNumbers.push(
//       <button onClick={() => changeQuestion(i-1)} key={i}>
//         {i}
//       </button>
//     );
//   }
//   return (
//     <div>
//       <p>{exercise}</p>
//       <div className="part">{questionNumbers}</div>
//     </div>
//   );
// } */
}
export default Part;
