import React, { Component } from "react";
import "./AboutHome.css";
import aboutus from "../../../images/aboutus.jpeg";
import { Link } from "react-router-dom";
import loading from "../../../images/schedule-appointment.JPG";
import ConfirmServiceBox from "../services/ConfirmServiceBox";
import ConfirmStateModal from "../home/ConfirmStateModal";

class AboutHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen1: false,
    };
  }

  toggle1 = () => {
    this.setState({ isOpen1: !this.state.isOpen1 });
  };
  closeModel1 = () => {
    this.setState({ isOpen1: false });
  };
  render() {
    return (
      <div className="aboutus-page">
        <div className="bg-blue-700">
          <h1>About US</h1>
        </div>
        <div>
          <div>{/* <h1>About US</h1> */}</div>
          <div>
            <img src={aboutus} />
          </div>
          <div>
            <p>
              NextGenDoc is a modern, tech-enabled healthcare provider designed
              from the ground up to put patient care first. For millions of
              people, NextGenDoc is the trusted and familiar home where they
              know they will find a healing touch. Combining smart technology
              with knowledgeable trusted Physicians, we deliver a uniquely
              seamless experience. Pushing the boundaries of care. We aim to
              make the exceptional - expected. We're removing the Boundaries to
              Make high-quality, transparent, and personal care more accessible.
              Because great care should be within reach.
            </p>
            <p>
              We realize healthcare can be high-priced and confusing - and we
              want to help. We’re building new healthcare services for patients
              and providers in a way that is delightful and easy. You can get
              medical care online today for a variety of services and chat with
              a doctor about your healthcare goals.{" "}
            </p>
            <p>
              We are dreamers, thinkers, and doers folded into one.
              Collectively, we want to enhance the medicinal services
              understanding for all Mankind. We are guided through our qualities
              and driven by utilizing our proverb to do Awesome things. These
              are not just principles, but they are a reflection of who we are
              as people.
            </p>
            <p>
              We are technology-driven online solutions for all your medical
              needs. Our team of leading Physicians is currently accepting
              patients from Texas, Florida, and Illinois. Our medical experts
              will accompany you at every step. We seek to instantly enhance and
              develop new services to empower and guide patients and their
              families. NextGenDoc is right here to make sure that the right
              decision is made.
            </p>
          </div>
        </div>
        <div className="all-your-health bg-blue-700">
          <div className="all-your-health-home">
            <div>
              <div>
                <div>
                  <img src={loading} />
                </div>
              </div>
              <div>
                <h2
                  style={{
                    textDecoration: "none",
                    position: "relative",
                    top: "-10px",
                    marginTop: "10px",
                  }}
                >
                  All your healthcare needs, in one place
                </h2>
                <div>
                  {/* <button>Get the app</button> */}
                  {/* <Link to="/service/termandcondition"> */}
                  <button
                    class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
                    onClick={this.toggle1}
                  >
                    Schedule an appointment
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ConfirmStateModal
          isOpen1={this.state.isOpen1}
          toggle1={this.toggle1}
          closeModel1={this.closeModel1}
        />
      </div>
    );
  }
}

export default AboutHome;
