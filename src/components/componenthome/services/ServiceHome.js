import React, { Component } from "react";
import cough from "../../../images/cough.jpeg";
import allergies from "../../../images/allergies.jpeg";
import asthama from "../../../images/asthama.jpeg";
import acne from "../../../images/acne.jpeg";
import coldsores from "../../../images/cold-sores.jpeg";
import diarrhea from "../../../images/diarrhea.jpeg";
import infections from "../../../images/infections.jpeg";
import insectbites from "../../../images/insect-bites.jpeg";
import sorethroats from "../../../images/sore-throats.jpeg";
import eyeredness from "../../../images/eye-redness.jpeg";
import rashes from "../../../images/rashes.JPG";
import respiratoryinfections from "../../../images/respiratory-infections.jpeg";
import sinusinfection from "../../../images/sinus-infection.jpeg";
import skininflamation from "../../../images/skin-inflamation.jpeg";
import pregnancyconfirmation from "../../../images/pregnancy-confirmation.jpeg";
import sprainandstrains from "../../../images/sprain-and-strains.jpeg";
import shorttermmedicinerefill from "../../../images/short-term-medicine-refill.jpeg";
import anaphylaxisprevention from "../../../images/anaphylaxis-prevention.jpeg";
import coldandflu from "../../../images/cold-and-flu.jpeg";
import vomiting from "../../../images/vomiting.jpeg";
import congestion from "../../../images/congestion.JPG";
import utis from "../../../images/utis.jpeg";
import birthcontrol from "../../../images/birth-control.jpeg";
import pediatricservices from "../../../images/pediatric-services.jpeg";
import stdscreening from "../../../images/std-screening.JPG";
import mentalhealth from "../../../images/mental-health.JPG";
import highcholesterol from "../../../images/high-cholesterol.jpeg";
import quitsmoking from "../../../images/quit-smoking.jpeg";
import weightloss from "../../../images/weight-loss.JPG";
import erectiledysfunction from "../../../images/erectile-dysfunction.jpeg";
import hairlossprevention from "../../../images/hair-loss-prevention.JPG";
import naloxoneforopiateoverdose from "../../../images/naloxone-for-opiate-overdose.jpeg";
import hepatitiscscreening from "../../../images/hepatitis-c-screening.JPG";
import vitamindscreening from "../../../images/vitamin-d-screening.jpeg";
import hypothyroidism from "../../../images/hypothyroidism.jpeg";
import wrinklereduction from "../../../images/wrinkle-reduction.JPG";
import tuberculosis from "../../../images/tuberculosis.jpeg";
import metabolicperformanceanalysis from "../../../images/metabolic-performance-analysis.jpeg";
import bloodtype from "../../../images/blood-type.jpeg";
import hivtesting from "../../../images/hiv-testing.jpeg";
import prediabetesscreening from "../../../images/pre-diabetes-screening.jpeg";
import labs from "../../../images/labs.jpeg";
import radiology from "../../../images/radiology.jpeg";
import referrals from "../../../images/referrals.jpeg";
import generalconsultation from "../../../images/general-consultation.jpeg";
import cholesterolscreening from "../../../images/cholesterol-screening.JPG";
import doctornote from "../../../images/doctor-note.JPG";
import flu from "../../../images/flu.jpeg";
import loading from "../../../images/schedule-appointment.JPG";

import { Link } from "react-router-dom";
import "./ServiceHome.css";
import ConfirmServiceBox from "./ConfirmServiceBox";
import ConfirmStateModal from "../home/ConfirmStateModal";

class ServiceHome extends Component {
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
  setModelClose = (data) => {
    console.log(data)
    if(!data){
      this.setState({ isOpen1: false });
    }
  }
  render() {
    return (
      <div className="services">
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
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={cough} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Cough
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={acne} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Acne
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={allergies} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Allergies
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={eyeredness} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Eye Redness
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={rashes} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Rashes
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={respiratoryinfections} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Respiratory Infections
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={sinusinfection} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Sinus Infection
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={skininflamation} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Skin Inflammation
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={stdscreening} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      STD Screening
                    </h3>
                  </div>
                </div>

                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={quitsmoking} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Quit Smoking
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={weightloss} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Weight Loss
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={doctornote} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Doctor Note
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={asthama} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Asthma
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={coldsores} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Cold Sores
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={diarrhea} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Diarrhea
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={pregnancyconfirmation} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Pregnancy Confirmation
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={sprainandstrains} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Sprain And Strain
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={shorttermmedicinerefill} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Short Term Medicine Refill
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={anaphylaxisprevention} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Anaphylaxis Prevention
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={coldandflu} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Cold
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={hepatitiscscreening} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Hepatitis C Screening
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={hivtesting} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      HIV Testing
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={flu} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Flu
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={infections} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Infections
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={insectbites} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Insect Bites
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={sorethroats} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Sore Throat
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={vomiting} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Vomiting
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={congestion} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Congestion
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={utis} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      UTIs
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={birthcontrol} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Birth Control
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={pediatricservices} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Pediatric Services
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={hypothyroidism} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Thyroid issues
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={bloodtype} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Blood Type
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={mentalhealth} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Mental Health
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Other Services</h2>
            </div>
            <div>
              <div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={generalconsultation} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      General Consultation
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={labs} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Labs
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={radiology} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Radiology
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={prediabetesscreening} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Pre Diabetes Screening
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={referrals} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      Referrals
                    </h3>
                  </div>
                </div>
                <div class="home-service-box" onClick={this.toggle1}>
                  <div className="home-service-image">
                    <img alt="cough" src={cholesterolscreening} />
                  </div>
                  <div>
                    <h3 class="text-gray-900 title-font text-lg font-medium">
                      High Cholesterol Screening
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-start" style={{ marginTop: "2rem" }}>
              <p>
                <b>NOTE:</b> Extra fees will apply for Labs and Radiology **
              </p>
            </div>

            <div class="flex justify-center">
              <Link to="/">
                <button class="mt-12 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Back
                </button>
              </Link>
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
                    <button
                      class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
                      onClick={this.toggle1}
                    >
                      Schedule an appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ConfirmStateModal
          isOpen1={this.state.isOpen1}
          toggle1={this.toggle1}
          closeModel1={this.closeModel1}
          setModelClose={this.setModelClose}
        />
      </div>
    );
  }
}

export default ServiceHome;
