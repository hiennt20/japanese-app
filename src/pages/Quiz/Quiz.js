import React from "react";
import Part from "../../component/Part";
import "./quiz.css";
import EachQuestion from "../../component/EachQuestion";
import { useParams } from "react-router-dom";

const QUESTION = [
  {
    id: 1,
    name: "cau hoi 1",
    description: "chon dap an dung",
    answer1: "dap an 1",
    answer2: "dap an 2",
    answer3: "dap an 3",
    answer4: "dap an 4",
  },
  {
    id: 2,
    name: "cau hoi 2",
    description: "chon dap an dung",
    answer1: "dap an 1",
    answer2: "dap an 2",
    answer3: "dap an 3",
    answer4: "dap an 4",
  },
  {
    id: 3,
    name: "cau hoi 3",
    description: "chon dap an dung",
    answer1: "dap an 1",
    answer2: "dap an 2",
    answer3: "dap an 3",
    answer4: "dap an 4",
  },
];

function Quiz() {
  document.title = "Quiz";
  const [question, setQuestion] = React.useState(QUESTION);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const params = useParams();
  const { slug } = params;
  // console.log(params);

  //  hàm bấm vào số để chuyển câu hỏi
  function changeQuestion(number) {
    setCurrentQuestion(number);
  }

  function backQuestion() {
    // alert(currentQuestion)
    if (currentQuestion >= 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function nextQuestion() {
    // alert(currentQuestion);
    if(currentQuestion < question.length -1){
      setCurrentQuestion(currentQuestion + 1)
    }
    
  }
  return (
    <div className="contanier">
      {/* dữ liệu người làm bài  */}
      <div className="profile">
        <div className="tester">
          <img src="../../hien.jpg" alt="hien" />
          <p>nguyen thi hien</p>
        </div>

        <div className="question-numbers">
          {/* component tổng */}
          <Part
            numb={question.length}
            exercise={"問題1"}
            changeQuestion={changeQuestion}
          />
          <Part numb={30} exercise={"問題2"} />
          <Part numb={30} exercise={"問題3"} />
          <Part numb={30} exercise={"問題4"} />
          <Part numb={10} exercise={"問題5"} />

          {/* <Part1 numb={15} ex={"問題1"} /> */}

          {/* <Part2 /> */}
        </div>
      </div>

      {/* nội dung câu hỏi  */}
      <div className="content">
        <div className="test-title">
          <div>
            <h1>ĐỀ {slug} KOTOBA_第一回</h1>
          </div>
          <div className="time">30 minute</div>
        </div>

        <div className="question">
          <div className="part-title">
            <h3>問題1：次の言葉の使い方として最もよいものを一つ選びなさい。</h3>
          </div>

          <EachQuestion
            question={question[currentQuestion].name}
            contentQuestion={question[currentQuestion].description}
            answer1={question[currentQuestion].answer1}
            answer2={question[currentQuestion].answer2}
            answer3={question[currentQuestion].answer3}
            answer4={question[currentQuestion].answer4}
          />
        </div>

        <div className="button-choose">
          <button className="back" onClick={backQuestion}>
            back
          </button>
          <button className="next" onClick={nextQuestion}>
            next
          </button>
          <button className="hint">hint</button>
          <button className="end">end</button>
        </div>
      </div>
    </div>
  );
}
export default Quiz;
