import React from "react";

function LessonContent({
  questionNumber,
  questionName,
  answer1,
  answer2,
  answer3,
  answer4,
}) {
  return (
    <div>
      <div className="part-title">
        <h3>問題1：次の言葉の使い方として最もよいものを一つ選びなさい。</h3>
      </div>

      <div className="main-question">
        <div className="ques-name">
          <p>
            {questionNumber} <span>*</span>
          </p>
          <p>
            {questionName}
            {/* 田中さんが名前を呼んだのに、高橋(たかはし)さんは
           <b>“無視した”</b>。  */}
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
    </div>
  );
}
export default LessonContent;
