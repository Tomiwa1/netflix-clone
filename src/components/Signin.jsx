import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Signin extends Component {
  render() {
    return (
      <div className="container d-flex mx-auto" id="center">
        <div
          className="card   border-dark text-white  border-light "
          style={{ width: '28rem' }}
          id="card"
        >
          <div className="card-body">
            <h1 className="card-title">Sign In</h1>
            <div className="input-group py-2" action="">
              <input
                type="email"
                className="form-control bg-dark border-dark"
                placeholder="Email"
              />
            </div>
            <div className="input-group py-2" action="">
              <input
                type="password"
                className="form-control bg-dark border-dark"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 py-4">
              <input
                type="button"
                value="Sign In"
                className="btn btn-danger"
                id="button"
              />
            </div>
            <div className="d-flex justify-content-start">
              <input
                type="checkbox"
                name=""
                id=""
                className="form-check-input"
                value="Remember me"
              />
              <p className="opacity-50">Remember me</p>
              <p className="position-absolute opacity-50 end-0">
                <a href="/" id="help">
                  Need Help?
                </a>
              </p>
            </div>
          </div>
          <div className="py-5 d-flex justify-content-start m-3">
            <h5 className="text-dark">
              New to Netflix?{' '}
              <Link to="/" className="text-white text-sm" id="help">
                Sign up Now
              </Link>
            </h5>
          </div>
          <div className="text-dark d-flex justify-content-start" id="para">
            <h6>
              {' '}
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="/">Learn more</a>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
