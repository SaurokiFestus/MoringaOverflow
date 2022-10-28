import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Pagination from "./Pagination";
const questions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [quizsPerPage] = useState(5);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get current posts
  const indexOfLastQuiz = currentPage * quizsPerPage;
  const indexOfFirstQuiz = indexOfLastQuiz - quizsPerPage;
  const currentQuizs = questions.slice(indexOfFirstQuiz, indexOfLastQuiz);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/questions", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((quizs) => setQuestions(quizs));
      }
    });
  }, []);

  console.log(questions);
  return (
    <div className="">
      <div class=" mt-3 d-flex justify-content-between">
        <h2>All Questions</h2>

        <Link to="/askquestion">
          <button class="btn btn-primary m-1">Ask Question</button>
        </Link>
      </div>
      <div>
        <hr style={{ size: "80px", width: "100%" }}></hr>
      </div>
      <div className="container vh-100">
        {currentQuizs.map((quiz) => {
          return (
            <>
              <div className="row">
                <div className="col-2   text-end">
                  <ul className="list-unstyled">
                    <li>0 votes</li>
                    <li>{quiz.answers?.length} Answers</li>
                    <li>6 views</li>
                  </ul>
                </div>
                <div key={quiz.id} className="col-9 col-sm-8">
                  <ul className="list-unstyled">
                    <Link
                      to={`/question/${quiz.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <li style={{color: '#0b7dda'}}>{quiz.title}</li>
                    </Link>
                    <li>{quiz.body}</li>
                  </ul>
                 
                </div>
                <div>
                <hr  className="mx-5" tyle={{ size: "80px", width: "100%" }}></hr>
              </div>
              </div>
              
            </>
          );
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
