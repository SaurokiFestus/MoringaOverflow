import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

export default function Comment({ x, answer, user }) {
  const [newC, setNewC] = useState({
    body: "",
    user_id: user?.id,
    answer_id: answer.id,
  });
  const [errors, setErrors] = useState();
  const [comments, setComments] = useState(x);
  const [showComments, setShowComments] = useState(false);
  const [postEdit, setPostEdit] = useState(true);
  const navigate = useNavigate();

  function addList(added) {
    setComments([...comments, added]);
  }
  function updateList(updatedItem) {
    const updatedItems = comments.map((comment) => {
      if (comment.id === updatedItem.id) {
        return updatedItem;
      } else {
        return comment;
      }
    });
    setComments(updatedItems);
  }

  function deleteEvent(id) {
    const updatedEvents = comments?.filter((one) => one.id !== id);
    setComments(updatedEvents);
  }

  function Submit(e) {
    e.preventDefault();
    console.log("vipi");
    if (user) {
      if (postEdit) {
        fetch("http://127.0.0.1:3000/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newC),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => addList(data));
            setNewC({ body: "", user_id: user?.id, answer_id: answer.id });
            setErrors("");
          } else {
            r.json().then((error) => setErrors(error.errors));
          }
        });
      } else {
        console.log(newC);
        fetch(`http://127.0.0.1:3000/comments/${newC.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newC),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log(data)
            updateList(data);
            setNewC({ body: "", user_id: user?.id, answer_id: answer.id });
            setPostEdit(true);
          });
      }
    } else {
      navigate("/login");
    }
  }
  function handleEdit(comment) {
    setPostEdit(false);
    setNewC(comment);
  }
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setNewC({
      ...newC,
      [name]: value,
    });
  }
  function handleDelete(id) {
    fetch(`http://127.0.0.1:3000/comments/${id}`, {
      method: "DELETE",
    });
    deleteEvent(id);
  }
  const body = comments?.map((comment) => {
    return (
      <li className="pb-1" key={comment.id}>
        {comment.body}
        {user?.id === comment.user_id ? (
          <span className="mx-2">
                                      <i class="bi bi-trash" onClick={() => handleDelete(comment.id)} style={{cursor: "pointer",color:'red'}}></i>

            {/* <button
              onClick={() => handleDelete(comment.id)}
              className="bg-danger text-white shadow-none border-0"
            >
              X
            </button> */}
                                      <i class="bi bi-pen-fill rounded m-4" onClick={() => handleEdit(comment)} style={{cursor: "pointer",color:'#116dfa'}}></i>

            {/* <button
              onClick={() => handleEdit(comment)}
              className="bg-info mx-2 text-white shadow-none border-0"
            >
              Edit
            </button> */}
          </span>
        ) : (
          ""
        )}
      </li>
    );
  });
  return (
    <div>
      <div className="col-1"></div>
      <div className="col">
        <hr className=""></hr>
      </div>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              onClick={() => setShowComments(!showComments)}
            >
              Comments
            </button>
          </h2>
        </div>
      </div>
      {showComments ? (
        <div className="row p-0">
          <div className="col-1"></div>
          <div className="col-10">
            <p className="text-info fst-italic">
              {comments?.length === 0
                ? "No comments for the answer, be the first to leave a comment"
                : ""}
            </p>
            <ul className="list-unstyled">{body}</ul>

            <hr className=""></hr>
            <li className="text-danger list-unstyled pb-2 px-1">{errors}</li>

            <div class="col-10 d-flex">
              <form>
                <input
                  value={newC.body}
                  onChange={handleChange}
                  type="text"
                  name="body"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Leave a comment"
                />
              </form>
              <button
                onClick={(e) => Submit(e)}
                type="button shadow-none"
                class="btn shadow-none fw-bolder"
              >
                {postEdit ? "Submit" : "Edit"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <hr className=""></hr>
    </div>
  );
}
