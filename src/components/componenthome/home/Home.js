import React, { Component } from "react";
import "./Home.css";
import bannerimage from "../../../images/banner-image1.JPG";
import banner from "../../../images/banner.png";
import bannerimage2 from "../../../images/banner-image2.jpeg"

import cough from "../../../images/cough.jpeg";
import allergies from "../../../images/allergies.jpeg";
import asthama from "../../../images/asthama.jpeg";
import acne from "../../../images/acne.jpeg";
import coldsores from "../../../images/cold-sores.jpeg";
import diarrhea from "../../../images/diarrhea.jpeg";
import infections from "../../../images/infections.jpeg";
import insectbites from "../../../images/insect-bites.jpeg";
import sorethroats from "../../../images/sore-throats.jpeg";

import { Link } from "react-router-dom";
import Feature from "./Feature";
import ReportCompany from "./ReportCompany";
import FeedbackPatient from "./FeedbackPatient";

import HomePageSlider from "./HomePageSlider";
import AllYourHealth from "./AllYourHealth";
import Slogan from "./Slogan";
import ConfirmServiceBox from "../services/ConfirmServiceBox";
import ConfirmStateModal from "./ConfirmStateModal";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isOpen1: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  closeModel = () => {
    this.setState({ isOpen: false });
  };

  toggle1 = () => {
    this.setState({ isOpen1: !this.state.isOpen1 });
  };
  closeModel1 = () => {
    this.setState({ isOpen1: false });
  };
  render() {
    return (
      <div className="home-page">
        <div className="home-banner">
          <div>
            <img src={bannerimage2} />
          </div>
          <div>
            <img src={bannerimage2} />
          </div>

          <div>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Visits as low as $50
            </h1>
            <p class="mb-8 leading-relaxed">
              Get advice, prescriptions, XRs, and labs from Expert Board
              Certified Doctors. You can use your local pharmacy or get a
              prescriptions by mail. Visits are affordable, no insurance is
              necessary.
            </p>
            <div class="flex justify-start">
              {/* <Link to="/service/termandcondition"> */}
              <button
                class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
                onClick={this.toggle1}
              >
                Get Treated Today
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="home-feature bg-blue-700">
          <Feature />
        </div>
        <div className="home-services">
          <div className="home-services-container">
            <div>
              <h2>Our Services</h2>
              <p>
                Get a prescription or lab online today. Easy, affordable, and
                secure online medical visits.
              </p>
            </div>
            <div>
              <div>
                <div class="home-service-box">
                  <div className="home-service-image">
                    <img alt="cough" src={cough} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Cough
                    </h3>
                  </div>
                </div>
                <div class="home-service-box">
                  <div className="home-service-image">
                    <img alt="cough" src={acne} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Acne
                    </h3>
                  </div>
                </div>
                <div class="home-service-box">
                  <div className="home-service-image">
                    <img alt="cough" src={allergies} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Allergies
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div class="home-service-box">
                  <div className="home-service-image">
                    <img alt="cough" src={asthama} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Asthma
                    </h3>
                  </div>
                </div>
                <div class="home-service-box">
                  <div className="home-service-image">
                    <img alt="cough" src={coldsores} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Cold and sores
                    </h3>
                  </div>
                </div>
                <div class="home-service-box">
                  <div className="home-service-image">
                    <img alt="cough" src={diarrhea} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Diarrhea
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div class="home-service-box">
                  <div className="home-service-image">
                    <img alt="cough" src={infections} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Infections
                    </h3>
                  </div>
                </div>
                <div class="home-service-box">
                  <div className="home-service-image">
                    <img alt="cough" src={insectbites} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Insect Bites
                    </h3>
                  </div>
                </div>
                <div class="home-service-box">
                  <div className="home-service-image">
                    <img alt="cough" src={sorethroats} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Sore Throats
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <Link to="/service">
                <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  See All Services &gt;
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-reportcompany bg-blue-700">
          <ReportCompany />
        </div>
        <div>
          <FeedbackPatient />
        </div>
        <div className="all-your-health bg-blue-700">
          <AllYourHealth />
        </div>
        <div>
          <Slogan />
        </div>
        <ConfirmServiceBox
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          closeModel={this.closeModel}
        />
        <ConfirmStateModal
          isOpen1={this.state.isOpen1}
          toggle1={this.toggle1}
          closeModel1={this.closeModel1}
        />
      </div>
    );
  }
}

export default Home;
