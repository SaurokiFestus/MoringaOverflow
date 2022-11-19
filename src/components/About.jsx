import React from "react";
const About = () => {
  return (
    <>
    <div className="text-center">
      {/* <h2>ABOUT US</h2> */}
      {/* <p>We are a team of developers striving to ease the heartache that comes with hitting dead ends while trying to do anything technology related. We have all been stuck at a question for more time than was needed and we aim to cut down on that time for everyone. The tech-world is growing and what better way to embrace the new talent than to provide them with a platform to ask questions and find solutions</p> */}
      
    </div> 
    <div className="container-fluid" style={{ height: "75vh" }}>
      <h2 className="text-center"> OUR TEAM</h2>
      <div className="row justify-content-between ">
      <div className="card" style={{width: "20rem"}}>
        <img src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Name and details
          </p>
        </div>
      </div>

      <div className="card" style={{width: "20rem"}}>
        <img src="https://shopify-customerio.s3.amazonaws.com/tools/image_attachment/image/custom_resized_fad01ef9-a50b-47a1-a822-9048f8265c41.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
          <h4>Donald Brooks</h4>
           <p>Random stuff </p>
          </p>
        </div>
      </div><div className="card" style={{width: "20rem"}}>
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
          Name and details

          </p>
        </div>
      </div><div className="card" style={{width: "20rem"}}>
        <img src="" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
          Name and details

          </p>
        </div>
      </div>
      </div>
      
    </div>
    </>
  );
};
export default About;
