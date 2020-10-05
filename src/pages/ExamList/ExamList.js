import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  let list = [];
  for (let i = 0; i < exams.length; i++) {
    // list.push(
    //   <p key={i}>
    //     <Link to={"/quiz/" + i}>đề thi số {i}</Link>
    //   </p>
    // )
    list.push(
      <p key={i}>
        <Link to={"/quiz/" + (i+1)}>đề thi số {i +1}</Link>
      </p>
    );
  }
  
  return <div>{list}</div>;
}
export default ExamList;
