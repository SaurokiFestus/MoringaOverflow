import React from "react";
import { Fragment } from "react";

export default function EachQuestion() {
  return (
    <Fragment>
      <div className="container">
        <div class=" mt-3 d-flex justify-content-between">
          <h2>
            In my C++ code, why final value of temp is 199 instead of 200?
          </h2>
          <button type="button" class="btn btn-primary">
            Ask question
          </button>
        </div>
        <span>Asked </span>
        <span className="px-5">Viewed </span>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6>14 Answers</h6>

              <div>
                <div className="row">
                  <div className="col-1 ">
                    
                      <button className="btn btn-white" >
                      <i
                        class="bi bi-caret-up-fill fs-1 text"
                        style={{ color: "#dcdee1" }}
                      ></i>
                      </button>
                     
                    
                    <span className="px-4 fs-5 text p-0">3</span>
                    
                    <button className="btn btn-white " >
                      <i
                        class="bi bi-caret-down-fill fs-1 text"
                        style={{ color: "#dcdee1" }}
                      ></i>
                      </button>
                    
                  </div>
                  <div className="col fs-5">
                    <p>
                      to my delight, this also works with store_accessor, for
                      example given store_accessor :my_jsonb_column, :locale you
                      can then define attribute :locale, :string, default: 'en'
                    </p>
                  </div>
                </div>
                <form>
                  <div className="row">
                    <div className="col-1"></div>
                    <div class="form-group  col-10 ">
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword2"
                        placeholder="Leave a comment
                  "
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                  <hr className=""></hr>
                </div>
              </div>

              <div>Comments</div>
              <div className="row p-0">
                <div className="col-1"></div>
                <div className="col-10">
                  <p>gfhjkl</p>
                  <hr className=""></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
