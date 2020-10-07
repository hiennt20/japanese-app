// để push lên firebase chỉ h chỉ cần npm run build -> firebase deploy

import React, { useEffect, version } from "react";
import Part from "../../component/Part";
import "./quiz.css";
import EachQuestion from "../../component/EachQuestion";
import { useParams } from "react-router-dom";
import LessonContent from "../../component/LessonContent";

function Quiz() {
  document.title = "Quiz";
  const [question, setQuestion] = React.useState([]);
  const [content, setContent] = React.useState("");
  const [questionNumber, setQuestionNumber] = React.useState("");
  const [questionName, setQuestionName] = React.useState("");
  const [answer1, setAnswer1] = React.useState("");
  const [answer2, setAnswer2] = React.useState("");
  const [answer3, setAnswer3] = React.useState("");
  const [answer4, setAnswer4] = React.useState("");
  const [lessonTitle, setLessonTitle] = React.useState("");

  // const [currentQuestion, setCurrentQuestion] = React.useState(0);
  // const [exercise, setExercise] = React.useState("問題 1");

  const [currentLessonIndex, setCurrentLessonIndex] = React.useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  // const [currentQuestion, setCurrentQuestion] = React.useState({});

  const params = useParams(); // ham nay không truyền tham số để lấy ra hết slug
  const { slug } = params; // = const slug = params.slug hai cách viết khác nhau

  // để đổ dữ liệu từ database ở api dang json (liên ket với database)
  // useEffect(( ), []) cấu trúc
  useEffect(() => {
    async function getQuestion() {
      const response = await fetch("http://localhost:5000/exams/" + slug);
      const exam = await response.json();
      // console.log(exam);
      setQuestion(exam.questions);
      // setCurrentQuestion(exam.questions[0][0]);

      let firstQuestion = exam.questions[0][0];
      setQuestionNumber(firstQuestion.name);
      setQuestionName(firstQuestion.description);
      setAnswer1(firstQuestion.answer1);
      setAnswer2(firstQuestion.answer2);
      setAnswer3(firstQuestion.answer3);
      setAnswer4(firstQuestion.answer4);
      setLessonTitle(firstQuestion.lesson);

      // xet cau hoi hien tai khi do api vao
      // setCurrentQuestion(firstQuestion[0]);
    }
    getQuestion();
  }, []);

  // in ra nội dung của các câu hỏi khi bam vao nut ? ben trai

  function displayContent(lessonIndex, questionIndex) {
    // setContent("demo: " + lessonIndex + "-" + questionIndex);
    // setContent(question[lessonIndex][questionIndex].name);
    setQuestionNumber(question[lessonIndex][questionIndex].name);
    setQuestionName(question[lessonIndex][questionIndex].description);
    setAnswer1(question[lessonIndex][questionIndex].answer1);
    setAnswer2(question[lessonIndex][questionIndex].answer2);
    setAnswer3(question[lessonIndex][questionIndex].answer3);
    setAnswer4(question[lessonIndex][questionIndex].answer4);
    setLessonTitle(question[lessonIndex][questionIndex].lesson);

    // dung de chuyen cau hoi sau gan vao button back va next
    setCurrentLessonIndex(lessonIndex);
    setCurrentQuestionIndex(questionIndex);
    // setCurrentQuestion(question[lessonIndex][questionIndex]);
  }
  //  code trước khi đổ api
  //  hàm bấm vào số để chuyển câu hỏi
  // function changeQuestion(number) {
  //   setCurrentQuestion(number);
  //   setExercise("問題 1");
  // }
  function backQuestion() {
    // alert(currentLessonIndex +"-"+ (currentQuestionIndex));
    // console.log(question[currentLessonIndex][currentQuestionIndex -1])

    if (currentQuestionIndex >= 1) {
      // setCurrentLessonIndex(currentLessonIndex - 1);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setQuestionNumber(
        question[currentLessonIndex][currentQuestionIndex - 1].name
      );
      setQuestionName(
        question[currentLessonIndex][currentQuestionIndex - 1].description
      );
      setAnswer1(
        question[currentLessonIndex][currentQuestionIndex - 1].answer1
      );
      setAnswer2(
        question[currentLessonIndex][currentQuestionIndex - 1].answer2
      );
      setAnswer3(
        question[currentLessonIndex][currentQuestionIndex - 1].answer3
      );
      setAnswer4(
        question[currentLessonIndex][currentQuestionIndex - 1].answer4
      );
      setLessonTitle(
        question[currentLessonIndex][currentQuestionIndex - 1].lesson
      );
    }
    console.log(question[currentLessonIndex][currentQuestionIndex - 1]);

    // ? tại sao phải -1 những 2 lần ạ? không thể hiểu được
  }

  //  code trước khi đổ api
  // function backQuestion() {
  //   // alert(currentQuestion)
  //   if (currentQuestion >= 1) {
  //     setCurrentQuestion(currentQuestion - 1);
  //   }
  // }
  function nextQuestion() {
    if (currentQuestionIndex < question[currentLessonIndex].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestionNumber(
        question[currentLessonIndex][currentQuestionIndex + 1].name
      );
      setQuestionName(
        question[currentLessonIndex][currentQuestionIndex + 1].description
      );
      setAnswer1(
        question[currentLessonIndex][currentQuestionIndex + 1].answer1
      );
      setAnswer2(
        question[currentLessonIndex][currentQuestionIndex + 1].answer2
      );
      setAnswer3(
        question[currentLessonIndex][currentQuestionIndex + 1].answer3
      );
      setAnswer4(
        question[currentLessonIndex][currentQuestionIndex + 1].answer4
      );
      setLessonTitle(
        question[currentLessonIndex][currentQuestionIndex + 1].lesson
      );
    }
    console.log(question[currentLessonIndex][currentQuestionIndex + 1]);
  }

  //  code trước khi đổ api
  // function nextQuestion() {
  // if (currentQuestion < question.length - 1) {
  //   setCurrentQuestion(currentQuestion + 1);
  // }
  //  }

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

          {/* code trước khi đổ api  */}
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
          <LessonContent
            questionNumber={questionNumber}
            questionName={questionName}
            answer1={answer1}
            answer2={answer2}
            answer3={answer3}
            answer4={answer4}
            lessonTitle={lessonTitle}
          />

          {/* code trước khi đổ api  */}
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

// database version 2
// QUESTIONS= [
//   [
//     {
//       "id": 1,
//       "name": "cau hoi 1 mondai 1",
//       "description": "今夜(こんや)のパーティーは７時　<b>“スタート” </b>です。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題1：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     },
//     {
//       "id": 2,
//       "name": "cau hoi 2 mondai 1",
//       "description": "彼は本当に　“頭にきている”　みたいだね。顔が真(ま)っ赤(か)だ。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "泣(な)いている",
//       "answer3": "開始(かいし)",
//       "answer4": "笑(わら)っている",
//       "lesson": "問題1：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     },
//     {
//       "id": 3,
//       "name": "cau hoi 3 mondai 1",
//       "description": "今夜(こんや)のパーティーは７時　“スタート”です。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題1：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     }
//   ],
//   [
//     {
//       "id": 1,
//       "name": "cau hoi 1 mondai 2",
//       "description": "彼は本当に　“頭にきている”　みたいだね。顔が真(ま)っ赤(か)だ。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "怒(おこ)っている",
//       "answer3": "困(こま)っている",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題 2：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     },
//     {
//       "id": 2,
//       "name": "cau hoi 2 mondai 2",
//       "description": "今夜(こんや)のパーティーは７時　“スタート”です。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題 2：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     },
//     {
//       "id": 3,
//       "name": "cau hoi 3 mondai 2",
//       "description": "彼は本当に　“頭にきている”　みたいだね。顔が真(ま)っ赤(か)だ。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題 2：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     },
//     {
//       "id": 4,
//       "name": "cau hoi 4 mondai2",
//       "description": "今夜(こんや)のパーティーは７時　“スタート”です。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題 2：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     }
//   ],
//   [
//     {
//       "id": 1,
//       "name": "cau hoi 1 mondai 3",
//       "description": "彼は本当に　“頭にきている”　みたいだね。顔が真(ま)っ赤(か)だ。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題 3：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     }
//   ],
//   [
//     {
//       "id": 1,
//       "name": "cau hoi 1 mondai 4",
//       "description": "今夜(こんや)のパーティーは７時　“スタート”です。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題 4：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     },
//     {
//       "id": 2,
//       "name": "cau hoi 2 mondai 4",
//       "description": "彼は本当に　“頭にきている”　みたいだね。顔が真(ま)っ赤(か)だ。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題 4：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     },
//     {
//       "id": 3,
//       "name": "cau hoi 3 mondai 4",
//       "description": "今夜(こんや)のパーティーは７時　“スタート”です。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題 4：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     }
//   ],
//   [
//     {
//       "id": 1,
//       "name": "cau hoi 1 mondai 5",
//       "description": "彼は本当に　“頭にきている”　みたいだね。顔が真(ま)っ赤(か)だ。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題 5：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     },
//     {
//       "id": 2,
//       "name": "cau hoi 2 mondai 5",
//       "description": "彼は本当に　“頭にきている”　みたいだね。顔が真(ま)っ赤(か)だ。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題 5：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     },
//     {
//       "id": 3,
//       "name": "cau hoi 3 mondai 5",
//       "description": "彼は本当に　“頭にきている”　みたいだね。顔が真(ま)っ赤(か)だ。",
//       "answer1": "入場(にゅうじょう)",
//       "answer2": "出発(しゅっぱつ)",
//       "answer3": "開始(かいし)",
//       "answer4": "終了(しゅうりょう)",
//       "lesson": "問題 5：次の言葉の使い方として最もよいものを一つ選びなさい。"
//     }
//   ]
// ]

// database version 1
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
// ]
