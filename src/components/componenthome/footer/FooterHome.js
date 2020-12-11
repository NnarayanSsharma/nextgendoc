import React, { Component } from "react";
import "./FooterHome.css";
import { Link } from "react-router-dom";

class FooterHome extends Component {
  render() {
    return (
      <div>
        <footer class="footer-distributed">
          <div class="footer-left">
            <h3>
              NEXTGEN<span>DOC</span>
            </h3>

            <p class="footer-links">
              <Link to="/service">Service</Link>·<Link to="/about">About</Link>·
              <Link to="/faq">FAQ</Link>
            </p>

            <p class="footer-company-name">Nextgendoc &copy; 2020</p>
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>
                <span>
                  Texas, <b>I</b>llinois, Florida
                </span>
              </p>
            </div>

            <div>
              {/* <i class="fa fa-phone"></i>
              <p>Use chat box</p> */}
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a href="mailto:Info@NextGenDoc.com">Info@NextGenDoc.com</a>
              </p>
            </div>
          </div>

          <div class="footer-right">
            <div class="footer-icons">
              <a href="https://m.facebook.com/nextgendoc.N/" target="_">
                <i class="fa fa-facebook"></i>
              </a>
              {/* <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa fa-github"></i>
              </a> */}
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterHome;
