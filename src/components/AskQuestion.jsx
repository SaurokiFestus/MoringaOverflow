// import React, { Fragment } from "react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AskQuestion({questionForm, setQuestionForm, tg ,setTg,user }) {
  const navigate = useNavigate();
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setQuestionForm({
      ...questionForm,
      [name]: value, user_id: user.id
    });
  }

  console.log(questionForm);

  function handleSubmit(e) {
    e.preventDefault();
    if(user){
      console.log(questionForm);
      if (tg) {
        fetch("http://127.0.0.1:3000/questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(questionForm),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => console.log(data));
            setQuestionForm({ title: "", body: "" });
          } else {
            r.json().then((error) => console.log(Object.values(error)));
          }
        });
      }else{
        fetch(`http://127.0.0.1:3000/questions/${questionForm.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(questionForm),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => console.log(data));
            setQuestionForm({ title: "", body: "" });
            setTg(true)
          } else {
            r.json().then((error) => console.log(Object.values(error)));
          }
        });
      }
      navigate("/questions")
    }else{
      navigate("/login")

    }
    
  }

  return (
    <div
      className="container-fluid pb-4 vh-100"
      style={{ backgroundColor: "#f1f2f3" }}
    >
      <form className="container col-10">
        <h3 className="py-4">Ask a public question</h3>
        <div className="border p-3 bg-white ">
          <div class="mb-3">
            <span className="font-weight-bold">Title</span>
            <div id="emailHelp" class="form-text">
              Be specific and imagine you're asking a question to another person
            </div>
            <input
              value={questionForm.title}
              onChange={(e) => handleChange(e)}
              name="title"
              type="text"
              className="form-control"
            />
          </div>
          <div class="">
            <span className="font-weight-bold">Body</span>
            <div id="emailHelp" class="form-text">
              Include all the information someone would need to answer your
              question.
            </div>
          </div>
          <div className="">
            {/* <EditorContainer/> */}
            <textarea
              name="body"
              value={questionForm.body}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <Link to="/questions">
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary mt-3 "
          >
            {tg ? "Submit" : "Edit"}
          </button>
        </Link>
      </form>
    </div>
  );
}

export default AskQuestion;
