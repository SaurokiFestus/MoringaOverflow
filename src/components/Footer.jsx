import React from "react";

function Footer() {
  const icons = { color: "#f48d4f", fontSize: "60px" };
  const socials = { color: "white", fontSize: "30px" };
  const bg = { backgroundColor: "#232629" };

  return (
    <div
      className="container-fluid text-white pt-4"
      style={bg}
    >
      <div className="row">
        <div className="col-5  pl-5 ">
        <i style={icons} class="bi bi-bezier m-2"></i>

          {/* <i style={icons} class="bi bi-stack-overflow"></i> */}
          <span>Moringa OverFlow</span>
        </div>
        <div className="col-5 ">
          <div className="">
            <span className="border-bottom  border-white  mx-1 pb-1">
              CONTACT US
            </span>
              <div className="p-1">Moringa Overflow</div>
              <div className="p-1">+2547********</div>
          </div>
          <div className="pt-2">
            <a href="#">
              <i style={socials} class="bi bi-github "></i>
            </a>
            <a href="#">
              <i style={socials} class="bi bi-twitter px-3"></i>
            </a>
            <a>
              <i style={socials} class="bi bi-facebook  "></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p>Copyright 2022 MoringaOverflow All rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
