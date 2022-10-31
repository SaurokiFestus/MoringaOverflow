import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AnswerQuiz({
  AddAnswer,
  updateList,
  postEdit,
  setPostEdit,
  askedQuiz,
  setAskedQuiz,
  user,
}) {
  const navigate = useNavigate();

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setAskedQuiz({
      ...askedQuiz,
      [name]: value ,user_id: user?.id,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (user) {
      if (postEdit) {
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
      } else {
        fetch(`http://127.0.0.1:3000/answers/${askedQuiz.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(askedQuiz),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => updateList(data));
            setAskedQuiz({ body: "" });
            setPostEdit(true);
          } else {
            r.json().then((error) => console.log(Object.values(error)));
          }
        });
      }
    } else {
      navigate("/login");
    }
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
              value={askedQuiz.body}
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
          {postEdit ? "Submit" : "Edit"}
        </button>
      </form>
    </div>
  );
}
