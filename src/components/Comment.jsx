import React from "react";

export default function Comment({ comments }) {
  console.log(comments.reverse());
  const body = comments?.map((comment) => {
    return <li className="pb-1" key={comment.id}>{comment.body}</li>;
  });
  return (
    <div>
      <div className="row p-0">
        <div className="col-1"></div>
        <div className="col-10">
          <ul className="list-unstyled">{body}</ul>
          <hr className=""></hr>
        </div>
      </div>
    </div>
  );
}
