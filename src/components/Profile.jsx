import React from "react";



function Profile() {
  return (
    <div className="">
      <div className="container mt-5">
      <div className="row justify-content-center bg-light">
        <div className="col-md-10 mt-5 pt-5 ">
          <div className="row z-depth-3 ">
            <div className="col-sm-4 bg-info rounded-left">
              <div className="card-block text-center text-white">
                <i className="fas fa-user-tie fa-7x mt-5"></i>
                <h2 className="font-weight-bold mt-4">Sauroki</h2>
                <p>Web Designer</p>
                <i className="far fa-edit fa-2x mb-4"></i>
              </div>
            </div>
            <div className="col-sm-8 bg-white rounded-right">
              <h3 className="mt-3 text-center">Information</h3>
              <hr className="badge-primary mt-0"/>
              <div className="row">
                <div className="col-sm-6">
                  <p className="font-weight-bold">Email</p>
                  <h6 className="text-muted">sauroki</h6>
                </div>
                <div className="col-sm-6">
                  <p className="font-weight-bold">Phone</p>
                  <h6 className="text-muted">sauroki</h6>
                </div>
              </div>
              <h4 className="mt-3">My Questions</h4>
              <hr className="bg-primary"/>
              <div className="row">
                
                  <div className="col-sm-6">
                    <p className="font-weight-bold"></p>
                    <h6 className="text-mutated">School web</h6>
                  </div>
                  {/* <div className="col-sm-6">
                    <p className="font-weight-bold">Answers</p>
                    <h6 className="text-mutated">32131231232</h6>
                  </div> */}
                
              </div>
              <hr className="bg-primary"/>
              <ul className="list-unstyled d-flex justify-content-center mt-4">
                <li> <a href="#"> <i className="fab fa-facebook-f px-3 h4 text-info"></i> </a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Profile