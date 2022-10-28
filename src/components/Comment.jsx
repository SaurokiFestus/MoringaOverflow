import React, { useState } from "react";

export default function Comment({ x, answer }) {
  const [newC, setNewC] = useState();
  const [comments, setComments] = useState(x);
  const [showComments, setShowComments] = useState(false);

  function updateList(updatedItem) {
    setComments([...comments, updatedItem]);
  }

  function deleteEvent(id) {
    const updatedEvents = comments?.filter((one) => one.id !== id);
    setComments(updatedEvents);
  }

  function Submit(e) {
    e.preventDefault();
    console.log("vipi");
    fetch("http://127.0.0.1:3000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: newC,
        user_id: 2,
        answer_id: answer.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateList(data);
        setNewC("");
      });
  }
  function handleDelete(id) {
    fetch(`http://127.0.0.1:3000/comments${id}`, {
      method: "DELETE",
    });
    deleteEvent(id);
  }
  const body = comments?.map((comment) => {
    return (
      <li className="pb-1" key={comment.id}>
        {comment.body}
        <span>
          <button
            onClick={()=>handleDelete(comment.id)}
            className="bg-danger text-white shadow-none"
          >
            X
          </button>
        </span>
      </li>
    );
  });
  return (
    <div>
      <div className="col-1"></div>
      <div className="col">
        <hr className=""></hr>
      </div>

      <button
        class="btn shadow-none"
        onClick={() => setShowComments(!showComments)}
      >
        Comments
      </button>

      {showComments ? (
        <div className="row p-0">
          <div className="col-1"></div>
          <div className="col-10">
            <ul className="list-unstyled">{body}</ul>

            <hr className=""></hr>
            <div class="col-10 d-flex">
              <form>
                <input
                  value={newC}
                  onChange={(e) => setNewC(e.target.value)}
                  type="text"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Leave a comment
                    "
                />
              </form>
              <button
                onClick={(e) => Submit(e)}
                type="button shadow-none"
                class="btn shadow-none"
              >
                Submit
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
