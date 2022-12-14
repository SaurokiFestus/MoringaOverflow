import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import EditorContainer from "./EditorContainer";


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
  
  console.log(askedQuiz)
  // function handleChange(e) {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   setAskedQuiz({
  //     ...askedQuiz,
  //     [name]: value,
  //     user_id: user?.id,
  //     question_id: id,
  //   });
  // }
  

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
            setAskedQuiz({ body: '' });
            setErrors("");
          } else {
            r.json().then((error) => setErrors(error.body));
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
          <EditorContainer
                        body={askedQuiz.body}

              onChange={(text) => {
                setAskedQuiz({
                  ...askedQuiz,
                  body: text,
                  user_id: user?.id,
                  question_id: id,
                });
              }}/>
            {/* <textarea
              name="body"
              value={askedQuiz.body}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              onChange={handleChange}
            ></textarea> */}
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
