import React from "react";
import fb from "../assets/facebook_icon.png";
import twitter from "../assets/twitter_icon.png";
import linkedin from "../assets/linkedin_icon.png";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid footer bg-orange-500">
        <div className="row d-flex justify-content-around">
          <div className="col-lg-4 pb-5">
            <h2 className="mt-4">Fast Food Delivery</h2>
            <p>
              Our mission is to satisfy your cravings and elevate your dining
              experience, one delicious meal at a time.
            </p>
            <div className="flex gap-3">
              <img className="hover:bg-blue-800 rounded-full" src={fb} alt="" />
              <img className="hover:bg-blue-400 rounded-full" src={twitter} alt="" />
              <img className="hover:bg-blue-950 rounded-full" src={linkedin} alt="" />
            </div>
          </div>

          <div className="col-lg-4">
            <h2 className="mt-4">Contact</h2>
            <p>
              Phone No. : 9987654321 <br />
              E-mail : xyz@gmail.com <br />
              Address : Mahavir Sthan, Rampur, Bihar, Bharat
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
