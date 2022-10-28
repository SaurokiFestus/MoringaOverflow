import React, { useState } from "react";

export default function AnswerQuiz({ id,AddAnswer }) {
  const [askedQuiz, setAskedQuiz] = useState({
    upvote: 0,
    downvote: 0,
    body: "",
    user_id: 1,
    question_id: id,
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setAskedQuiz({
      ...askedQuiz,
      [name]: value,
    });
    console.log(askedQuiz);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(askedQuiz);
    fetch("http://127.0.0.1:3000/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(askedQuiz),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => AddAnswer(data));
        setAskedQuiz({ body: "" });
      } else {
        r.json().then((error) => console.log(Object.values(error)));
      }
    });
  }

  return (
    <div>
      <form className="container col">
        <div className=" bg-white ">
          <div class="">
            <h3 className="font-weight-bold">Your Answer</h3>
          </div>
          <div className="">
            <textarea
              name="body"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-primary my-3 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
