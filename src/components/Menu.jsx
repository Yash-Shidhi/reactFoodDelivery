import React from "react";
import { Navbar } from "./Navbar";
import headerMenu from "../assets/header-menu.png";
import rating from "../assets/rating_starts.png"
import food1 from "../assets/food_1.png";
import food2 from "../assets/food_2.png";
import food3 from "../assets/food_3.png";
import food4 from "../assets/food_4.png";
import food5 from "../assets/food_5.png";
import food6 from "../assets/food_6.png";
import food7 from "../assets/food_7.png";
import food8 from "../assets/food_8.png";
import food9 from "../assets/food_9.png";
import food10 from "../assets/food_10.png";
import food11 from "../assets/food_11.png";
import food12 from "../assets/food_12.png";
import { Footer } from "./Footer";

export const Menu = () => {
  return (
    <>
      <Navbar />

      {/* hero section */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={headerMenu}
              className="d-block w-100 hero-img"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="fs-1 fw-bolder">Our Menu</p>
            </div>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className="tab-content my-4" id="pills-tabContent">
        {/* All */}
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <div className="container-fluid ps-5">
            <div className="row gy-4">
              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food1}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title mt-2">Veg Sandwich</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food2}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title mt-2">Veg Salad</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food3}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title mt-2">Veg Flower Mix</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food4}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title mt-2">Veg Spicy</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food5}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title">Veg cheese Banista</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food6}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title">Veg Paneer Roll</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food7}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title">Veg Pulao</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food8}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title">Veg Mix Rice</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food9}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title">Non-Veg Egg Rice</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food10}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title">Veg Noodles</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food11}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title">Veg Pasta</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 hover:scale-105">
                <div className="card">
                  <img
                    src={food12}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <img src={rating} alt="" />
                    <h5 className="card-title">Non-Veg Fish</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
