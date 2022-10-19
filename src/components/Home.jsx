import React, { Fragment } from "react";
import image from "../assets/images/flow.png";

export default function Home() {
  return (
    <Fragment>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img className="img-fluid" src={image} alt="" />
          </div>
          <div className="col-12 col-lg-6 pt-5">
            <h4 className="text-secondary my-4 ">Who we are</h4>
            <h1 className="my-4">
              Empowering the world to develop technology through collective
              knowledge.
            </h1>
            <p>
              Our public platform
              <span className="text-secondary">
                serves 100 million people every month,
              </span>
              serves 100 million people every month, making it one of the most
              popular websites in the world.
            </p>
            <p>
              Our asynchronous knowledge management and collaboration offering,
              <span className="text-secondary">
                Stack Overflow for Developers
              </span>
              , is transforming how people work.
            </p>
          </div>
        </div>
      </div>

      <div class="container shadow p-3 mb-4 bg-body rounded d-flex justify-content-center  ">
        <div class="row text-center mx-4 pt-3">
          <div className=" col-lg-3 px-4 ">
            <span>
              <strong>100+ million</strong>
            </span>
            <p> Monthly visitors to our network</p>
          </div>
          <div className="col-lg-2 ">
            <span>
              <strong>100+ million</strong>
            </span>
            <p> Questions asked to-date</p>
          </div>
          <div className="col-lg-2">
            <span>
              <strong>13.6 seconds</strong>
            </span>
            <p>Average time between new questions</p>
          </div>
          <div className="col-lg-2">
            <span>
              <strong>6+ billion</strong>
            </span>
            <p> Times a developer got help</p>
          </div>
          <div className="col-lg-2">
            <span>
              <strong>10,000+</strong>
            </span>
            <p>Customer companies for all products</p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            Stack Overflow helps people find the answers they need, when they
            need them. We're best known for our public Q&A platform that over
            100 million people visit every month to ask questions, learn, and
            share technical knowledge.
          </div>
          <div className="col-lg-6">
            Our products and tools empower people to find what they need to
            develop technology at work or at home. These products include, Stack
            Overflow for Teams, Stack Overflow Advertising, Collectives™ on
            Stack Overflow, and Stack Overflow Talent.
          </div>
        </div>
      </div>

      <div className="text-center ">
        <h2>Products</h2>

        <div class="d-flex justify-content-center">
          <div class="card d-flex justify-content-center col-10">
            <div class="header">
              <i class="bi bi-stack-overflow"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">Our Public Platform</h5>
              <p class="card-text">
                Where developers and technologies go to gain and share knowledgr
              </p>
              <a href="#" class="btn btn-primary">
                Participate
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div class="header text-center">Our Core Values</div>

        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="card-body-content">
              <h1 class="header">
                <i style={{ color: "#fde0cf" }} class="bi bi-heart-fill"></i>
              </h1>
              <p class="card-title">Adopt a customer-first mindset</p>
              <p class="card-text">
                Authentically serve our customers by empowering, listening, and
                collaborating with our fellow Stackers
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-sm-12">
            <div class="card-body-content">
              <h1 class="header" style={{ color: "##fde0cf" }}>
                <i class="bi bi-hand-thumbs-up"></i>{" "}
              </h1>
              <p class="card-title">Be flexible and inclusive</p>
              <p class="card-text">
                We do our best work when a diverse group of people collaborate
                in an environment of respect and trust. Create space for
                different voices to be heard, and allow flexibility in how
                people work.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            {" "}
            <div class="card-body-content">
              <h1 class="header">
                <i class="bi bi-compass"></i>
              </h1>
              <p class="card-title">Be transparent</p>
              <p class="card-text">
                Communicate openly and honestly, both inside and outside the
                company. Encourage transparency from others by being empathetic,
                reliable, and acting with integrity.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            {" "}
            <div class="card-body-content">
              <h1 class="header">
                <i class="bi bi-compass"></i>
              </h1>
              <p class="card-title">Be transparent</p>
              <p class="card-text">
                Communicate openly and honestly, both inside and outside the
                company. Encourage transparency from others by being empathetic,
                reliable, and acting with integrity.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            {" "}
            <div class="card-body-content">
              <div class="header">icon</div>
              <h5 class="card-title">Card 1</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                feugiat pretium fermentum. Praesent vestibulum at tellus eget
                dapibus. Proin eu metus quis arcu iaculis mattis.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            {" "}
            <div class="card-body-content">
              <div class="header">icon</div>
              <h5 class="card-title">Card 1</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                feugiat pretium fermentum. Praesent vestibulum at tellus eget
                dapibus. Proin eu metus quis arcu iaculis mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
