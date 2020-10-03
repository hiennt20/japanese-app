// để push lên firebase chỉ h chỉ cần npm run build -> firebase deploy

import React, { useEffect } from "react";
import Part from "../../component/Part";
import "./quiz.css";
import EachQuestion from "../../component/EachQuestion";
import { useParams } from "react-router-dom";

// const QUESTION = [
//   {
//     id: 1,
//     name: "cau hoi 1",
//     description: "今夜(こんや)のパーティーは７時　“スタート”です。",
//     answer1: "入場(にゅうじょう)",
//     answer2: "出発(しゅっぱつ)",
//     answer3: "開始(かいし)",
//     answer4: "終了(しゅうりょう)",
//   },
//   {
//     id: 2,
//     name: "cau hoi 2",
//     description: "最近、登山(とざん)が　“はやっている”  そうだ。",
//     answer1: "体(からだ)にいい",
//     answer2: "人気(にんき)がある",
//     answer3: "危険(きけん)が多(おお)い",
//     answer4: "減(へ)ってきている",
//   },
//   {
//     id: 3,
//     name: "cau hoi 3",
//     description:
//       "彼は本当に　“頭にきている”　みたいだね。顔が真(ま)っ赤(か)だ。",
//     answer1: "泣(な)いている",
//     answer2: "怒(おこ)っている",
//     answer3: "困(こま)っている",
//     answer4: "笑(わら)っている",
//   },
//   {
//     id: 4,
//     name: "cau hoi 4",
//     description:
//       "彼は本当に　“頭にきている”　みたいだね。顔が真(ま)っ赤(か)だ。",
//     answer1: "泣(な)いている",
//     answer2: "怒(おこ)っている",
//     answer3: "困(こま)っている",
//     answer4: "笑(わら)っている",
//   },
//   {
//     id: 5,
//     name: "cau hoi 5",
//     description:
//       "彼は本当に　“頭にきている”　みたいだね。顔が真(ま)っ赤(か)だ。",
//     answer1: "泣(な)いている",
//     answer2: "怒(おこ)っている",
//     answer3: "困(こま)っている",
//     answer4: "笑(わら)っている",
//   },
// ];

function Quiz() {
  document.title = "Quiz";
  const [question, setQuestion] = React.useState([]);
  const [content, setContent] = React.useState("");

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [exercise, setExercise] = React.useState("問題 1");
  const params = useParams();
  const { slug } = params;

  // để đổ dữ liệu từ database ở api dang json (liên ket với database)
  // useEffect(( ), []) cấu trúc
  useEffect(() => {
    async function getQuestion() {
      const response = await fetch("http://localhost:4000/question");
      const question = await response.json();
      setQuestion(question);
    }
    getQuestion();
  }, []);

  // in ra nội dung của các câu hỏi

  function displayContent(lessonIndex, questionIndex) {
    // setContent("demo: " + lessonIndex + "-" + questionIndex);
    setContent(question[lessonIndex][questionIndex].name)
    // setContent(question[lessonIndex][questionIndex].description)
  }

  //  hàm bấm vào số để chuyển câu hỏi
  function changeQuestion(number) {
    setCurrentQuestion(number);
    setExercise("問題 1");
  }

  function backQuestion() {
    // alert(currentQuestion)
    if (currentQuestion >= 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function nextQuestion() {
    // alert(currentQuestion);
    if (currentQuestion < question.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  // let questionNumbers = [];

  // for (let i = 1; i <= question.length; i++) {
  //   questionNumbers.push(
  //     <button onClick={() => changeQuestion(i - 1)} key={i}>
  //       {i}
  //     </button>
  //   );
  // }

  return (
    <div className="contanier">
      {/* dữ liệu người làm bài  */}
      <div className="profile">
        <div className="tester">
          <img src="../../hien.jpg" alt="hien" />
          <p>nguyen thi hien</p>
        </div>

        <div className="question-numbers">
          {question.map((lesson, index) => (
            <Part
              lesson={lesson}
              lessonIndex={index}
              key={index}
              displayContent={displayContent}
            />
          ))}

          {/* component tổng */}
          {/* <Part
            numb={question.length}
            exercise={exercise}
            changeQuestion={changeQuestion}
          />
          <Part numb={question.length} exercise={"問題2"} />
          <Part numb={30} exercise={"問題3"} />
          <Part numb={30} exercise={"問題4"} />
          <Part numb={10} exercise={"問題5"} /> */}
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
            {/* <h3>
              {exercise}：次の言葉の使い方として最もよいものを一つ選びなさい。
            </h3> */}
            <h3>問題1：次の言葉の使い方として最もよいものを一つ選びなさい。</h3>
          </div>
            {content}
          {/* <EachQuestion
            question={question[currentQuestion].name}
            contentQuestion={question[currentQuestion].description}
            answer1={question[currentQuestion].answer1}
            answer2={question[currentQuestion].answer2}
            answer3={question[currentQuestion].answer3}
            answer4={question[currentQuestion].answer4}
          /> */}
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
