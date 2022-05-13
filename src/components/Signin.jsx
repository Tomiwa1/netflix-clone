import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
  render() {
    return (
      <div id="bg">
        <div className="container d-flex mx-auto" id="center">
          <div
            className="card   border-dark text-white   "
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
                  id="email"
                  // value={this.email}
                  // onChange={this.onChange}
                  style={{ color: 'white' }}
                />
              </div>
              <div className="input-group py-2" action="">
                <input
                  type="password"
                  id="password"
                  // value={this.password}
                  // onChange={this.onChange}
                  style={{ color: 'white' }}
                  placeholder="Password"
                  className="form-control bg-dark border-dark"
                />
              </div>
              <Link to="/movies" style={{ textDecoration: 'none' }}>
                <div className="d-grid gap-2 py-4">
                  <input
                    type="button"
                    value="Sign In"
                    className="btn btn-danger"
                    id="button"
                  />
                  {/* <button className="btn text-white" id="button">
                    Sign In
                  </button> */}
                </div>
              </Link>

              <div className="d-flex justify-content-start">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="Remember me"
                />
                <p className="opacity-50">Remember me</p>
                {/* <p className=" float-right" id="right">
                  <a href="/" id="help" className=" text-dark ">
                    Need Help?
                  </a>
                </p> */}
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
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{' '}
                <a href="/" id="help">
                  Learn more
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* FOOTER */}

        <div className="footer" id="foot-sign">
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

export default Signin;
