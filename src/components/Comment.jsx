import React, { useState , useEffect , sortType , setData , s} from "react";


export default function Comment({ x, answer }) {
  const [newC, setNewC] = useState();
  const [comments, setComments] = useState(x);
  const [showComments, setShowComments] = useState(false);

  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       body: 'body',
  //       // created_at: 'created_at',
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...body].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //     setData(sorted);
  //   };

  //   sortArray(sortType);
  // }, [sortType]); 

  // function updateList(updatedItem) {
  //   setComments([...comments, updatedItem]);
  // }

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
  const body = comments?.map((comment) => {
    return (
      <li className="pb-1" key={comment.id}>
        {comment.body}
      </li>
    );
  });
  return (
    <div>
      <div className="col-1" id ="accordionPanelsStayOpenExample"></div>
      <div className="col" >
        <hr className=""></hr>
      </div>

      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">

      <button
        class="btn shadow-none"
        onClick={() => setShowComments(!showComments)}
      >
        <button class= "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Comments
      </button>
        {/* Comments */}
        </button>
        </div>
        

      

      {showComments ? (
        <div className="row p-0">
          <div className="col-1"></div>
          <div className="col-10" >
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
                  placeholder="Leave a comment"
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
