import React, { Fragment } from "react";
import image from "../assets/images/flow.png";
import logo from "../assets/images/logo.png";

export default function Home() {
  const icons = { color: "#f48d4f" };

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
              <span className="mx-1 text-secondary">
                serves 100 million people every month,
              </span>
              serves 100 million people every month, making it one of the most
              popular websites in the world.
            </p>
            <p>
              Our asynchronous knowledge management and collaboration offering,
              <span className="text-secondary">
                Moringa Overflow for Developers
              </span>
              , is transforming how people work.
            </p>
          </div>
        </div>
      </div>

      <div class="container shadow p-3 my-5 bg-body rounded d-flex justify-content-center  ">
        <div class="row text-center mt-2 mb-4 pt-3">
          <div className=" col-lg-3 px-2 ">
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

      <div className="container my-3">
        <div className="row mt-5">
          <p className="col-lg-6 py-3 my-4">
            Moringa Overflow helps people find the answers they need, when they
            need them. We're best known for our public Q&A platform that over
            100 million people visit every month to ask questions, learn, and
            share technical knowledge.
          </p>
          <p className="col-lg-6 py-3 my-4">
            Our products and tools empower people to find what they need to
            develop technology at work or at home. These products include,
            Moringa Overflow for Teams, Moringa Overflow Advertising,
            Collectives™ on Moringa Overflow, and Moringa Overflow Talent.
          </p>
        </div>
      </div>

      <div className="text-center ">
        <div className="container my-5">
          <hr style={{ float: "left", width: "40%" }}></hr>
          <hr style={{ float: "right", width: "40%" }}></hr>
          <h2 class=" text-center">Products</h2>
        </div>
        <div class="d-flex justify-content-center">
          <div
            class="card d-flex justify-content-center col-10 py-4"
            style={{ backgroundColor: "#f0f8fe" }}
          >
            <h1 class="header">
              {/* <div>
                <img className="img-fluid container" src={logo} alt="logo" />
              </div> */}
              <i style={icons} class="bi bi-bezier"></i>
              {/* <i  class="bi bi-stack-overflow"></i> */}
            </h1>
            <div class="card-body">
              <h5 class="card-title">Our Public Platform</h5>
              <p class="card-text">
                Where developers and technologies go to gain and share knowledge
              </p>
              <a href="/questions" class="btn btn-primary">
                Participate <i class="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-4">
        <div className="">
          <hr style={{ float: "left", width: "35%" }}></hr>
          <hr style={{ float: "right", width: "35%" }}></hr>
          <h2 class=" text-center">Our Core Values</h2>
        </div>

        <div class="row my-3">
          <div class="col-lg-4 col-sm-10 my-3  ">
            <div class="card-body-content">
              <h1 class="header py-3">
                <i style={icons} class="bi bi-heart-fill"></i>
              </h1>
              <h4 class="card-title">Adopt a customer-first mindset</h4>
              <p class="card-text">
                Authentically serve our customers by empowering, listening, and
                collaborating with our fellow Stackers
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-sm-12 my-3 ">
            <div class="card-body-content">
              <h1 class="header py-3" style={icons}>
                <i class="bi bi-hand-thumbs-up"></i>{" "}
              </h1>
              <h4 class="card-title">Be flexible and inclusive</h4>
              <p class="card-text">
                We do our best work when a diverse group of people collaborate
                in an environment of respect and trust. Create space for
                different voices to be heard, and allow flexibility in how
                people work.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 my-3 ">
            {" "}
            <div class="card-body-content">
              <h1 class="header py-3">
                <i style={icons} class="bi bi-compass"></i>
              </h1>
              <h4 class="card-title">Be transparent</h4>
              <p class="card-text">
                Communicate openly and honestly, both inside and outside the
                company. Encourage transparency from others by being empathetic,
                reliable, and acting with integrity.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 my-3 ">
            <div class="card-body-content">
              <h1 class="card-title py-3">
                <i style={icons} class="bi bi-command"></i>
              </h1>

              <h4 class="card-title">
                Empower people to deliver outstanding results
              </h4>
              <p class="card-text">
                Give people space to get their job done, support them when they
                need it, and practice blameless accountability.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 my-3 ">
            <div class="card-body-content">
              <div class="header py-3">
                <h1>
                  <i style={icons} class="bi bi-people-fill"></i>
                </h1>
              </div>
              <h4 class="card-title">Keep community at our center</h4>
              <p class="card-text">
                Community is at the heart of everything we do. Nurture healthy
                communities where everyone is encouraged to learn and give back.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 my-3 ">
            <div class="header py-3">
              <h1>
                <i style={icons} class="bi bi-graph-up"></i>{" "}
              </h1>
            </div>
            <h4 class="card-title">Learn, share, grow</h4>
            <p class="card-text">
              Adopt a Growth Mindset. Be curious and eager to learn. Aim for
              ethical, sustainable, long-term growth, both personally and in the
              company.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
