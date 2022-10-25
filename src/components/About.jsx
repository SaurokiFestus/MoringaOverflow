import React from 'react';
const About = () => {
    return (
        <>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://thebusinessteams.co/wp-content/uploads/2021/09/Hero-Homepage.jpg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src="https://webit.capital/img/aerial-view-business-team.jpg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                    <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_504343847_2000126020009280332_362932.jpg" class="d-block w-100" alt="..."></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div mx-5 mt-3 d-flex>
            {/* <div class = "jumbotron">About us</div> */}
            <h1 >About us</h1>
        </div></>
            );
          };
  export default About;