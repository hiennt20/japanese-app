import React from "react";
import quizBanner from "./quizBanner.jpg";
import "./home.css";


function Home() {
  document.title ="Home"
  return (
    <div className="contanier">
      <h1>day la trang home</h1>
      <img  src={quizBanner} alt="Banner" />
    </div>
  );
}
export default Home;
