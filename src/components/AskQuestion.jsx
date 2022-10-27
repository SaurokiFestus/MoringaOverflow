// import React, { Fragment } from "react";
import React, { useState } from "react";

function AskQuestion() {
  const [questionForm, setQuestionForm] = useState({
    title: "",
    body: "",
    user_id: 1,
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setQuestionForm({
      ...questionForm,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
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
          className="btn btn-primary mt-3 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AskQuestion;
