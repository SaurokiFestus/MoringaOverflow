// import React, { Fragment } from "react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditorContainer from "./EditorContainer";
import Select from 'react-select'
import Error from "./Error";

function AskQuestion({ questionForm, setQuestionForm, tg, setTg, user }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState();

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setQuestionForm({
      ...questionForm,
      [name]: value,
      user_id: user?.id,
      views: 0,
    });
  }

  console.log(questionForm);

  function handleSelect(e) {
    console.log(e)
    setSelectedOptions(e);
  }
  console.log(selectedOptions)
 const quiz_tags= [
    {
    value: "javascript",
    label: "Javascript",

    },
    {
    value: "html",
    label: "HTML",
        },
    {
    value: "python",
    label: "Python",
    },
    {
    value: "java",
    label: "Java",
    },
    {
    value: "c#",
    label: "C#",
    },
    {
    value: "php",
    label: "PHP",
    },
    {
    value: "android",
    label: "Android",
    },
    {
    value: "css",
    label: "CSS",
    },
    {
    value: "reactjs",
    label: "ReactJs",
    },
    {
    value: "sql",
    label: "SQL",
    },
    {
    value: "ruby-on-rails",
    label: "Ruby on Rails", 
    },
    {
    label: "Ruby",
    value: "Ruby"
    },
    {
    value: "django",
    label: "Django",},
    {
    value: "json",
    label: "JSON" 
    },
    {
    value: "postgresql",
    label: "PostgreSQL" 
    },
    {
    value: "git",
    label: "Git"
    },
    {
    value: "database",
    label: "Database",
    },
    {
    value: "argorithm",
    label: "An algorithm" 
    },
    {
    value: "c++",
    label: "C++",
    }
    ]
    
    

  useEffect(() => {
    fetch("http://127.0.0.1:3000/tag_qs", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((tags) => {
          setTags(tags);
        });
      }
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (user) {
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
            setErrors("");
            navigate("/questions");
          } else {
            r.json().then((error) => setErrors(error.errors));
          }
        });
      } else {
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
            setTg(true);
          } else {
            r.json().then((error) => setErrors(error.errors));
          }
        });
      }
      navigate("/questions");
    } else {
      navigate("/login");
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
            <EditorContainer
              body={questionForm.body}
              onChange={(text) => {
                setQuestionForm({
                  ...questionForm,
                  body: text,
                });
              }}
            />
            <div class="">
              <span className="font-weight-bold">Tags</span>
              <div class="form-text">
                Add tags to describe what your question is about
              </div>
            </div>
            <Select
                options={quiz_tags}
                placeholder="Select Tags"
                value={selectedOptions}
                onChange={handleSelect}
                isSearchable={true}
                isMulti
                onBlur={() => {
                  const mappedOptions = selectedOptions.map(
                    (option) => option.value
                  );
                  setQuestionForm({
                    ...questionForm,
                    tag_list: mappedOptions.toString()
                  });
                }}
              />
         
            
         
            {/* <textarea
              name="body"
              value={questionForm.body}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              onChange={handleChange}
            ></textarea> */}
          </div>
        </div>
        {errors.length > 0 && <Error errors={errors} />}

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
