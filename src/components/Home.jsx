import React from "react";
import About from "./About";
import Contact from "./Contact"
export default function Home() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide border-0">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item carousel1 active">
            <div className="carousel1"> 
              <img src="./assets/banner1.gif" className="d-block w-45" alt="banner 1" />
              <p>Everything You Need <br/>to Stay Stylish and Connected</p>
            </div>
          </div>
          <div className="carousel-item carousel2 ">
            <div className="carousel2"> 
              <img src="./assets/banner2.gif" className="d-block w-45" alt="banner 1" />
              <p>Shop Fashion, Jewelry, and <br/>Electronics – All in One Place</p>
            </div>
          </div>
          <div className="carousel-item carousel3 ">
          <div className="carousel3"> 
              <img src="./assets/banner3.gif" className="d-block w-45" alt="banner 1" />
              <p>Shop with Confidence<br/>Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next carousel-arrow"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <About/>
      <Contact/>
    </>
  );
}
