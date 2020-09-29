import React from "react";
import { Link } from "react-router-dom";

function ExamList() {
  document.title = "Exam List";
  let list =[];
  for (let i = 1; i < 10; i++){
      list.push(<p key={i}><Link to={"/quiz/" + i}>đề thi số {i}</Link></p>)
  }
  return (
    <div>
      <p>{list}</p>
      
    </div>
  );
}
export default ExamList;
