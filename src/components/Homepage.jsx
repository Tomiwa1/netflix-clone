import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div id="bg">
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
              <Link to="/movies">
                <button className="btn text-white" type="submit" id="button">
                  Get Started <i className="fas  fa-angle-right" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* FOOTER */}

        <div className="footer" id="foot-home">
          {/* <nav className="navbar-brand"> */}
          <h5 style={{ marginBottom: '35px' }}>
            <a
              href="https://help.netflix.com/en/contactus"
              className="link-secondary"
              id="help"
            >
              Questions? Contact us.
            </a>
          </h5>
          <div className="row">
            <h5>
              <a
                href="https://help.netflix.com/en/node/412"
                className="link-secondary"
                id="help"
              >
                FAQ
              </a>
            </h5>
            <div className="col-md-3">
              <h5>
                <a
                  href="https://help.netflix.com/en/"
                  className="link-secondary"
                  id="help"
                >
                  Help Center
                </a>
              </h5>
            </div>
            <div className="col-md-3">
              <h5>
                <a
                  href="https://help.netflix.com/legal/termsofuse"
                  className="link-secondary"
                  id="help"
                >
                  Terms of Use
                </a>
              </h5>
            </div>
            <div className="col-md-3">
              <h5>
                <a
                  href="https://help.netflix.com/legal/privacy"
                  className="link-secondary"
                  id="help"
                >
                  Privacy
                </a>
              </h5>
            </div>
            <div className="col-md-3">
              <h5>
                <a
                  href="https://www.netflix.com/ng/login"
                  className="link-secondary"
                  id="help"
                >
                  Cookie Preferences
                </a>
              </h5>
            </div>
            <div className="col-md-1">
              <h5>
                <a
                  href="https://help.netflix.com/legal/corpinfo"
                  className="link-secondary"
                  id="help"
                >
                  Corporate Information
                </a>
              </h5>
            </div>
          </div>
          {/* </nav> */}
        </div>
      </div>
    );
  }
}
export default Homepage;
