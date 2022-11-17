import { PrinterFilled } from "@ant-design/icons";
import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState({});
  let { id } = useParams();

  const [profileForm, setProfileForm] = useState({
    name: "",
    interests: "",
    bio: "",
    cohort: "",
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setProfileForm({
      ...profileForm,
      [name]: value,
    });
  }
  console.log(profileForm);

  function profileEdit() {
console.log(profileForm)
    fetch(`http://127.0.0.1:3000/profiles/${profile.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileForm),
      })
        .then((r) => r.json())
        .then((data) => console.log(data));
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/profiles/${id}`)
      .then((res) => res.json())
      .then((profile) => {
        setProfile(profile);
      });
  }, []);
  return (
    <div className="">
      <div className="container my-2">
        {profile ? (
          <div class="alert alert-warning" role="alert">
            Please Update profile{" "}
            <a
              href="#"
              class="alert-link"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              edit
            </a>
            .
          </div>
        ) : (
          ""
        )}

        <div className="row justify-content-center bg-light">
          <div className="col-md-10 mt-5 pt-5 ">
            <div className="row z-depth-3 ">
              <div className="col-sm-4 bg-info rounded-left">
                <div className="card-block text-center text-white">
                  <i className="fas fa-user-tie fa-7x mt-5"></i>
                  <h2 className="font-weight-bold mt-4">{profile.name}</h2>
                  <p>Web Designer</p>
                  <img
                    className="img-fluid"
                    src="https://secure.gravatar.com/avatar/78?s=164&d=identicon"
                    alt="log"
                  />
                  <i className="far fa-edit fa-2x mb-4"></i>
                </div>
              </div>
              <div className="col-sm-8 bg-white rounded-right">
                <h3 className="mt-3 text-center">Information</h3>
                <hr className="badge-primary mt-0" />
                <div className="row">
                  <div className="col-sm-6">
                    <p className="font-weight-bold">Email</p>
                    <h6 className="text-muted">{profile.email}</h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="font-weight-bold">Bio</p>
                    <h6 className="text-muted">{profile.bio}</h6>
                  </div>
                </div>
                <h4 className="mt-3">My Questions</h4>
                <hr className="bg-primary" />
                <div className="row">
                  <div className="col-sm-6">
                    <p className="font-weight-bold">Cohort</p>
                    <h6 className="text-mutated">{profile.cohort}</h6>
                  </div>
                  {/* <div className="col-sm-6">
                    <p className="font-weight-bold">Answers</p>
                    <h6 className="text-mutated">32131231232</h6>
                  </div> */}
                </div>
                <hr className="bg-primary" />
                <i
                  style={{
                    color: "#f48d4f",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                  class="bi bi-pencil-square"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Edit
                </i>
                <ul className="list-unstyled d-flex justify-content-center mt-4">
                  <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <i className="fab fa-facebook-f px-3 h4 text-info"></i>{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Update profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-2">
                  <label for="recipient-name" class="col-form-label">
                    Name:
                  </label>
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    onChange={(e) => handleChange(e)}
                    value={profileForm.name}
                  />
                </div>

                <label for="recipient-name" class="col-form-label">
                  Interest:
                </label>

                <select
                  class="mb-3 form-select"
                  name="interests"
                  value={profileForm.interests}
                  onChange={(e) => handleChange(e)}
                >
                  <option selected>interest</option>
                  <option name="interests" value="Web Designer">
                    Web Designer
                  </option>
                  <option name="interests" value="Data Scientist">
                    Data Scientist
                  </option>
                  <option name="interests" value="Full Stack Dev">
                    Full Stack Dev
                  </option>
                </select>
                <div class="mb-2">
                  <label for="message-text" class="col-form-label">
                    Bio:
                  </label>
                  <textarea
                    class="form-control"
                    id="message-text"
                    name="bio"
                    onChange={(e) => handleChange(e)}
                    value={profileForm.bio}
                  ></textarea>
                </div>
                <label for="recipient-name" class="col-form-label">
                  Cohort:
                </label>

                <select
                  class="mb-3 form-select"
                  name="cohort"
                  value={profileForm.cohort}
                  onChange={(e) => handleChange(e)}
                >
                  <option selected>Select cohort</option>
                  <option value="MPFT 59-63">MPFT 59-63</option>
                  <option value="Legacy MC 54-58">Legacy MC 54-58</option>
                  <option value="MPFT 64-64">MPFT 64-64</option>
                </select>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => profileEdit()}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
