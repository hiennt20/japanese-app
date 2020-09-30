import React from "react";

function EachQuestion({question, contentQuestion, answer1, answer2, answer3, answer4}) {
  return (
    <div className="main-question">
      <div className="ques-name">
        <p>
          {question} <span>*</span>
        </p>
        <p>
          {contentQuestion}
          {/* 田中さんが名前を呼んだのに、高橋(たかはし)さんは
          <b>“無視した”</b>。 */}
        </p>
      </div>

    
      <div className="answer">
        <input type="radio" id="question1" name="question" />
        <label htmlFor="question1">{answer1}</label>
        <br />
        <input type="radio" id="question2" name="question" />
        <label htmlFor="question2">{answer2}</label>
        <br />
        <input type="radio" id="question3" name="question" />
        <label htmlFor="question3">{answer3}</label>
        <br />
        <input type="radio" id="question4" name="question" />
        <label htmlFor="question4">{answer4}</label>
      </div>
    </div>
  );
}
export default EachQuestion;
