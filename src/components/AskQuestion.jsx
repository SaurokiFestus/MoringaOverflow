import EditorContainer from "./EditorContainer";

function AskQuestion() {
  

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
            <input type="text" class="form-control" />
          </div>
          <div class="">
            <span className="font-weight-bold">Body</span>
            <div id="emailHelp" class="form-text">
              Include all the information someone would need to answer your
              question.
            </div>
          </div>
          <div className="">
            <EditorContainer/>
           
          </div>
        </div>
      
      </form>
    </div>
  );
}

export default AskQuestion;
