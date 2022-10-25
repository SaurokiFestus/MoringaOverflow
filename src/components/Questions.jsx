import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
const questions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quizsPerPage] = useState(5);
  const paginate = pageNumber => setCurrentPage(pageNumber);

   // Get current posts
   const indexOfLastQuiz = currentPage * quizsPerPage;
   const indexOfFirstQuiz = indexOfLastQuiz - quizsPerPage;
   const currentQuizs = questions.slice(indexOfFirstQuiz, indexOfLastQuiz);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/questions",{
        method: 'GET',
      headers: {
        accept: 'application/json',
      },
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((quizs) => setQuestions(quizs));
      }
    });
  }, []);

  // console.log(questions);
  return (
    <div className="h-100">
      <div class=" mx-5 mt-3 d-flex justify-content-between">
        <h2>All Questions</h2>
        <button type="button" class="btn btn-primary">
          Ask question
        </button>
      </div>
      <div>
        <hr style={{ size: "80px", width: "100%" }}></hr>
      </div>
      <div className="container">
        {currentQuizs.map(quiz=>{
          return(
            <>
            <div className="row">
            <div className="col-2">
              <h5>0 votes</h5>
              <h5>3 answers</h5>
              <h5>6 views</h5>
            </div>
            <div key={quiz.id} className="col-10">
              <h5>
                {quiz.title}
              </h5>
              <p>
              {quiz.body}
              </p>
            </div>
          </div>
           <div>
           <hr style={{ size: "80px", width: "100%" }}></hr>
         </div>
         </>
          )
        })}
      
      </div>
     
      <Pagination
        quizsPerPage={quizsPerPage}
        totalQuizs={questions.length}
        paginate={paginate}
      />
    </div>
  );
};
export default questions;
