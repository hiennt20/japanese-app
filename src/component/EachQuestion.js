import React from "react";

function EachQuestion() {
  return (
    <div className="main-question">
      <div className="ques-name">
        <p>
          question 1 <span>*</span>
        </p>
        <p>
          田中さんが名前を呼んだのに、高橋(たかはし)さんは
          <b>“無視した”</b>。
        </p>
      </div>

    
      <div className="answer">
        <input type="radio" id="question1" name="question" />
        <label htmlFor="question1">いなくなった</label>
        <br />
        <input type="radio" id="question2" name="question" />
        <label htmlFor="question2">別の人を見た</label>
        <br />
        <input type="radio" id="question3" name="question" />
        <label htmlFor="question3">見えなかった</label>
        <br />
        <input type="radio" id="question4" name="question" />
        <label htmlFor="question4">返事をしなかった</label>
      </div>
    </div>
  );
}
export default EachQuestion;
