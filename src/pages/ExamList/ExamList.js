import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ExamList.css";

function ExamList() {
  document.title = "Exam List";
  const [exams, setExams] = useState([]);

  useEffect(() => {
    async function getExams() {
      const response = await fetch("http://localhost:5000/exams");
      const exams = await response.json();
      console.log(exams);
      setExams(exams);
    }
    getExams();
  }, []);

  // do database dung vao lap
  // let list = [];
  // for (let i = 0; i < exams.length; i++) {
  //   list.push(
  //     <p key={i}>
  //       <Link to={"/quiz/" + (i + 1)}>đề thi số {i + 1}</Link>
  //     </p>
  //   );
  // }

  // code truoc khi do api
  // list.push(
  //   <p key={i}>
  //     <Link to={"/quiz/" + i}>đề thi số {i}</Link>
  //   </p>
  // )
  return (
    <div className="contanier">
      {exams.map((item) => (
        <Link to={"/quiz/" + item.id}>
          <div className="exam-img">
            <img src={item.image} alt="detail" />
            <h4>
              <Link to={"/quiz/" + item.id}>{item.title}</Link>
            </h4>
            <p>số câu hỏi: {item.numbers}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default ExamList;
