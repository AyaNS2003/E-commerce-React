import React from 'react'

export default function index() {
  return (
    <>
    
      <div className="container login">
        <div className="login-left">
        <p className="display-1 text-center m-4">Login</p>
          <form className="row g-3 needs-validation" novalidate>
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
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Remember me
              </label>
            </div>
            <button type="submit" className=" submit-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="login-right">
          <img src='./assets/Login.gif'/>
        </div>
      </div>
    </>
  )
}
