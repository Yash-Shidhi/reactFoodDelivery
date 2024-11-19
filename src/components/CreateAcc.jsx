import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const CreateAcc = () => {
  return (
    <>
    <Navbar />

    {/* main section */}
    <div className="">
      <div
        className="container-fluid header d-flex align-items-center justify-content-center  bg-orange-500 py-10 text-white"
      >
        <h2>Create Account</h2>
      </div>
      <div className="container my-5">
        <div className="mx-5 px-5">
            <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputUsername" className="form-label">Username</label>
                  <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" /> 
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Tems & condition</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
        </div>
      </div>
    </div>

    <Footer />
    </>
  )
}
