import React, { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import Comment from "./Comment";

function EachQuestion() {
  const [question, setQuestion] = useState([]);

  // console.log(newC);

  let { id } = useParams();

  const fetchDetails = () => {
    fetch(`http://127.0.0.1:3000/questions/${id}`)
      .then((res) => res.json())
      .then((quiz) => setQuestion(quiz));
    // let size =question.answers.length
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  function decreaseVotes(answer){
    console.log(answer)
    const id = answer.id;
    const obj = {
      downvote: answer.downvote - 1,
    };
    fetch(`http://127.0.0.1:3000/answers/${id}/decrease`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  function increaseVotes(answer){
    console.log(answer)
    const id = answer.id;
    const obj = {
      downvote: answer.downvote - 1,
    };
    fetch(`http://127.0.0.1:3000/answers/${id}/increase`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  return (
    <Fragment>
      <div className="container">
        <div class=" mt-3 d-flex justify-content-between">
          <h2>{question.title}</h2>
          <Link to="/askquestion">
            <button class="btn btn-primary m-1">Ask Question</button>
          </Link>
        </div>
        <span>Asked </span>
        <span className="px-5">Viewed </span>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6>{question.answers?.length} Answers</h6>
              {question.answers?.map((answer) => {
                const x = answer.comments;
                return (
                  <div key={answer.id}>
                    <div className="row">
                      <div className="col-1 p-2 ">
                        <ul className="list-unstyled">
                          <li>
                            <button
                              onClick={() => increaseVotes(answer)}
                              type="button shadow-none"
                              class="btn shadow-none"
                            >
                              <i
                                class="bi bi-caret-up-fill fs-1 text"
                                style={{ color: "#dcdee1" }}
                              ></i>
                            </button>
                          </li>
                          <li>
                            <span className="px-4 fs-6 text p-0">
                              {answer.upvote - answer.downvote}
                            </span>
                          </li>
                          <li>
                            <button
                              onClick={() => decreaseVotes(answer)}
                              type="button shadow-none"
                              class="btn shadow-none"
                            >
                              <i
                                class="bi bi-caret-down-fill fs-1 text"
                                style={{ color: "#dcdee1" }}
                              ></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="col fs-5">
                        <p>{answer.body}</p>
                      </div>
                    </div>
                    {<Comment answer={answer} x={x} />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default EachQuestion;
