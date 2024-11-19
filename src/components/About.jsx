import React from 'react'
import { Navbar } from './Navbar'
import about from "../assets/about-us.jpg"
import { Footer } from './Footer'

export const About = () => {
  return (
    <>
    <Navbar />

    {/* about section */}
    <div
      id="carouselExampleCaptions"
      className="carousel slide pb-10"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={about}
            className="d-block w-100 mt-3"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <p className="fs-1 fw-bolder">About Us</p>
            <p>
              Fast Food Delivery launched in India in 2024 as a food delivery
              platform. Dedicated to helping customers get their tasty
              favourites fast, it quickly won the hearts and minds of customers
              in APAC.
            </p>
            <p>
              Powered by tech and operational excellence, Fast Food Delivery has
              been growing its quick-commerce footprint in more than 400 cities
              across 11 markets in Asia - Singapore, Hong Kong, Thailand,
              Malaysia, India, Taiwan, Philippines, Bangladesh, Laos, Cambodia,
              and Myanmar.
            </p>
            <p>
              Thanks to dedicated partners, riders, and a team united by shared
              values, foodpanda is now providing millions with a convenient way
              to get food and groceries in a few taps.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </>
  )
}
