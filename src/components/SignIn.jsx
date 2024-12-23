import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const SignIn = () => {
  return (
    <>
      <Navbar />

      {/* hero section */}
      <div className="">
        <div className="container-fluid header d-flex align-items-center justify-content-center bg-orange-500 py-10 text-white">
          <h2>Sign In</h2>
        </div>
        <div className="container my-5">
          <div className="mx-5 px-5">
            <form className="mb-5">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <Link to="#" className="forget-p block text-end no-underline hover:underline">
                  Forget Password?
                </Link>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <p className="inline">Don't have an account yet?</p>
            <Link to="/createAcc" className="ps-3 no-underline hover:underline">Create account</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
