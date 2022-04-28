import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <>
        {/* SIGN-IN BUTTON */}
        <div className="position-absolute top-0 end-0" id="btn">
          <Link to="/sign-in">
            <button
              type="button"
              className="btn text-light"
              style={{ backgroundColor: 'red' }}
            >
              Sign in
            </button>
          </Link>
        </div>
        {/* WELCOME PAGE */}
        <div className="text-center text-light" id="home-text">
          <h1 id="home-text">Unlimited movies, TV shows, and more.</h1>
          <h4>
            <p className="lead">Watch anywhere. Cancel anytime</p>
          </h4>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {/* SIGN UP SECTION */}
          <div className="row py-3" id="form">
            <label className="col-sm-1 col-form-label"></label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="col-12 py-5">
              <button className="btn text-white" type="submit" id="button">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Homepage;
