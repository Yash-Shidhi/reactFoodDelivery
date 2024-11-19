import React from "react";
import { Navbar } from "./Navbar";
import header from "../assets/header.jpg";
import faasos from "../assets/faasos.png"
import ovenstory from "../assets/ovenstory.jpg"
import lunchBox from "../assets/lunchbox.png"
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active px-5">
            <img
              src={header}
              className="d-block w-100 hero-img rounded-2xl"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="fs-1 fw-bolder">
                Delivering happiness, made with love.
              </p>
              <p className="">
                Choose from a diverse menu featuring a delectable array of
                dishes crafted with the finest ingredients and culinary
                expertise. Our mission is to satisfy your cravings and elevate
                your dining experience, one delicious meal at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* why to Choose us */}
      <div className="bg-orange-500 mt-5 pb-5 section2">
        <h2 className="pt-4 text-center text-white underline">why to choose us ?</h2>
        <div className="row gy-4 d-flex justify-content-around pt-5">
          <div className="col-lg-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Fast Delivery</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Friendly Staff</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Highly Rated</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our partners */}
      <div className="mt-5 pb-5 section3">
        <h2 className="pt-4 text-center underline">Our Partners</h2>
        <div className="row gy-4 d-flex justify-content-around pt-5">
          <div className="col-lg-3 col-sm-6">
            <div className="card">
              <img src={faasos} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Faasos</h5>
                <p className="card-text">
                  Faasos is a subsidiary of Rebel Foods and it is famous for its
                  wrap and bowls.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card">
              <img
                src={ovenstory}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Oven Story</h5>
                <p className="card-text">
                  Oven Story is a subsidiary of Rebel Foods and it is famous for
                  its different types of pizza.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card">
              <img src={lunchBox} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lunch Box</h5>
                <p className="card-text">
                  Lunch Box is a subsidiary of Rebel Foods and it is famous for
                  its happy meal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
