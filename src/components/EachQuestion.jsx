import React, { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import Comment from "./Comment";

function EachQuestion() {
  const [question, setQuestion] = useState([]);
  const [showComments, setShowComments] = useState(false);

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
                return (
                  <div key={answer.id}>
                    <div className="row">
                      <div className="col-1 ">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#" className="shadow-none">
                              <i
                                class="bi bi-caret-up-fill fs-1 text"
                                style={{ color: "#dcdee1" }}
                              ></i>
                            </a>
                          </li>
                          <li>
                            <span className="px-3 fs-6 text p-0">3</span>
                          </li>
                          <li><a  href='#' className="shadow-none">
                          <i
                            class="bi bi-caret-down-fill fs-1 text"
                            style={{ color: "#dcdee1" }}
                          ></i>
                        </a></li>
                        </ul>

                        
                      </div>
                      <div className="col fs-5">
                        <p>{answer.body}</p>
                      </div>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-1"></div>
                        <div class="form-group  col-10 ">
                          <input
                            type="text"
                            class="form-control"
                            id="inputPassword2"
                            placeholder="Leave a comment
                    "
                          />
                        </div>
                      </div>
                    </form>

                    <div className="row">
                      <div className="col-1"></div>
                      <div className="col-10">
                        <hr className=""></hr>
                      </div>
                    </div>

                    <button
                      class="btn 
                    shadow-none"
                      disabled={answer.comments.length == 0}
                      onClick={() => setShowComments(!showComments)}
                    >
                      Comments
                    </button>
                    {showComments ? <Comment comments={answer.comments} /> : ""}
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
