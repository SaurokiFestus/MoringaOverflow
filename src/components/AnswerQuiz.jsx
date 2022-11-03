import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

export default function AnswerQuiz({
  AddAnswer,
  updateList,
  postEdit,
  setPostEdit,
  askedQuiz,
  setAskedQuiz,
  user,
  id,
}) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setAskedQuiz({
      ...askedQuiz,
      [name]: value,
      user_id: user?.id,
      question_id: id,
    });
  }
  console.log(askedQuiz);

  function handleSubmit(e) {
    e.preventDefault();
    if (user) {
      if (postEdit) {
        fetch("https://vast-wildwood-37554.herokuapp.com/answers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(askedQuiz),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => AddAnswer(data));
            setAskedQuiz({ body: "" });
            setErrors("");
          } else {
            r.json().then((error) => setErrors(error.body));
          }
        });
      } else {
        fetch(`https://vast-wildwood-37554.herokuapp.com/answers/${askedQuiz.id}`, {
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
            setErrors("");
          } else {
            r.json().then((error) => setErrors(error.body));
          }
        });
      }
    } else {
      navigate("/login");
    }
  }
  // console.log(errors);

  return (
    <div>
      <form className="container col">
        <div className=" bg-white ">
          <div class="">
            <h3 className="font-weight-bold">Your Answer</h3>
          </div>
          <div className="mb-2">
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
        {errors.length > 0 && <Error errors={errors} />}

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
