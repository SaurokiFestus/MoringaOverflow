import React from "react";

function Profile() {
  const flowColor = { backgroundColor: "#f1f2f3" };

  return (
    <div className="container-fluid vh-100" style={flowColor}>
      <div className="d-flex justify-content-center align-items-center ">
        <div>
          <button type="submit" className="btn bg-light mx-5 mt-4">
            Edit Your Profile
          </button>
          <form className="bg-light rounded  p-sm-3 mx-5 my-4">
            <div className="mb-3">
              <img src="" alt="text" />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Display name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                About
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3 form-check"></div>
            <button type="submit" className="btn bg-info mb-4 ">
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
