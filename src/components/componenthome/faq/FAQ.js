import React, { useState } from "react";
import "./FAQ.css";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import general from "../../../images/general.jpeg";
import visual from "../../../images/visual.PNG";
import location from "../../../images/location.jpeg";
import loading from "../../../images/schedule-appointment.JPG";
import audio from "../../../images/audio.PNG";
import technology from "../../../images/tachnology.PNG";
import { Link } from "react-router-dom";
import ConfirmServiceBox from "../services/ConfirmServiceBox";
import ConfirmStateModal from "../home/ConfirmStateModal";

const FAQ = (props) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeModel = () => {
    setIsOpen(false);
  };

  return (
    <div className="faq">
      <div className="faq-heading faq-show-big">Frequently Asked Questions</div>
      <div className="faq-heading faq-show-small">FAQ's</div>
      <div className="bg-blue-700">
        <div className="faq-content">
          <p>
            Hate sitting in a waiting room filled with sick patients? Can’t take
            time off from work or away from your family? Just feel too ill to
            get in the car and drive? Imagine being able to receive medical care
            without making a trip to the doctor’s office.
          </p>
          <h3>Now you can!</h3>
          <p>
            Telemedicine allows physicians to provide quality medical care for
            certain conditions to patients at a distance using various
            technologies. It’s safe, convenient, affordable, and becoming more
            and more popular. So why not? Follow these tips to help your
            telemedicine visit go as smoothly as possible.
          </p>
          <h2>Tips:</h2>
          {/* <h3>Location</h3> */}
          <div>
            <div className="faq-image">
              <img alt="image" src={location} />
            </div>
            <h3>Location</h3>
          </div>
          <p>
            Find a quiet and private space at your location – close doors and
            windows to high-traffic areas.
          </p>
          <p>
            Remove clutter from the area where you will sit. You want your
            doctor to look at you, not what’s on your desk or wall.
          </p>
          <p>
            Make sure the area is well-lit. Keep lighting overhead and/or in
            front of you, rather than behind you. Close blinds and drapes to
            prevent glares and shadows.
          </p>
          <div>
            <div className="faq-image">
              <img alt="image" src={technology} />
            </div>

            <h3>Technology</h3>
          </div>
          <p>Ensure your device has enough charge (or is plugged in).</p>
          <p>
            Check your internet signal strength. A connection speed of 384 Kbps
            is common.
          </p>
          <p>
            Adjust the angle of your camera so you fill as much of the screen as
            possible.
          </p>
          <p>
            Know how to use your equipment. Have the phone number for tech
            support close by – just in case.
          </p>
          <div>
            <div className="faq-image">
              <img alt="image" src={audio} />
            </div>
            <h3>Audio</h3>
          </div>
          <p>
            Mute, turn off or remove possible noisemakers such as your
            television, cell phone, alarms, or pets.
          </p>
          <p>Eliminate echoes.</p>
          <p>
            Check for air noises like a fan, AC unit, or open window that may
            affect the microphone.
          </p>
          <p>Make sure the microphone is not blocked.</p>
          <p>
            Speak normally – slowly and clearly – in the direction of the
            camera.
          </p>
          <div>
            <div className="faq-image">
              <img alt="image" src={visual} />
            </div>
            <h3>Visual</h3>
          </div>
          <p>Avoid too much movement.</p>
          <p>Don’t look at your picture on the screen.</p>
          <div>
            <div className="faq-image">
              <img alt="image" src={general} />
            </div>
            <h3>General</h3>
          </div>
          <p>Have your pharmacy name, location, and number handy.</p>
          <p>
            Explore the telemedicine app/platform to get comfortable with it.
          </p>
          <p>Don’t be nervous or afraid to ask questions! </p>
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-container-box">
          <div>
            <Button
              className="faq-button"
              outline
              color="success"
              onClick={() => setIsOpen1(!isOpen1)}
              style={{ marginBottom: "1rem" }}
            >
              {!isOpen1 ? (
                <i class="fas fa-plus"></i>
              ) : (
                <i class="fas fa-minus"></i>
              )}
            </Button>
            <span>
              <p>
                How do I schedule an online appointment for a telemedicine
                visit?
              </p>
            </span>
          </div>
          <Collapse isOpen={isOpen1}>
            <Card>
              <CardBody>
                You can schedule an online
                <Link to="/service/termandcondition"> appointment now</Link> or
                call our office to schedule an appointment at <a href="tel:+1-214-586-0895">1-214-586-0895.</a>
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="faq-container-box">
          <div>
            <Button
              className="faq-button"
              outline
              color="success"
              onClick={() => setIsOpen2(!isOpen2)}
              style={{ marginBottom: "1rem" }}
            >
              {!isOpen2 ? (
                <i class="fas fa-plus"></i>
              ) : (
                <i class="fas fa-minus"></i>
              )}
            </Button>
            <span>
              <p>Can I be at home and receive telemedicine services?</p>
            </span>
          </div>
          <Collapse isOpen={isOpen2}>
            <Card>
              <CardBody>
                Yes. Most patients choose to be at home or in a private office,
                but any location that has adequate technology, internet service,
                privacy, lighting, and a low noise level is fine.
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="faq-container-box">
          <div>
            <Button
              className="faq-button"
              outline
              color="success"
              onClick={() => setIsOpen3(!isOpen3)}
              style={{ marginBottom: "1rem" }}
            >
              {!isOpen3 ? (
                <i class="fas fa-plus"></i>
              ) : (
                <i class="fas fa-minus"></i>
              )}
            </Button>
            <span>
              <p>What equipment do I need?</p>
            </span>
          </div>
          <Collapse isOpen={isOpen3}>
            <Card>
              <CardBody>
                At the very least, you need a mobile device or computer that has
                a camera and microphone. You also need an internet connection
                that allows you to stream video.
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="faq-container-box">
          <div>
            <Button
              className="faq-button"
              outline
              color="success"
              onClick={() => setIsOpen4(!isOpen4)}
              style={{ marginBottom: "1rem" }}
            >
              {!isOpen4 ? (
                <i class="fas fa-plus"></i>
              ) : (
                <i class="fas fa-minus"></i>
              )}
            </Button>
            <span>
              <p>Can I use a Wi-Fi connection?</p>
            </span>
          </div>
          <Collapse isOpen={isOpen4}>
            <Card>
              <CardBody>
                Yes, as long your connection is strong enough. It is recommended
                that you have an internet speed of at least 15Mbps for upload
                and 5Mbps for download. Don’t know your internet speed? Test
                your internet speed for free{" "}
                <a
                  href="https://www.google.com/search?q=internet+speed+test&rlz=1C1CHBF_enIN854IN854&oq=internet+speed+test&aqs=chrome..69i57j0l6j5.377j0j1&sourceid=chrome&ie=UTF-8"
                  target="_"
                >
                  Check Internet Speed
                </a>
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="faq-container-box">
          <div>
            <Button
              className="faq-button"
              outline
              color="success"
              onClick={() => setIsOpen5(!isOpen5)}
              style={{ marginBottom: "1rem" }}
            >
              {!isOpen5 ? (
                <i class="fas fa-plus"></i>
              ) : (
                <i class="fas fa-minus"></i>
              )}
            </Button>
            <span>
              <p>Can my problem be treated?</p>
            </span>
          </div>
          <Collapse isOpen={isOpen5}>
            <Card>
              <CardBody>
                Your doctor can diagnose many illnesses during a telemedicine
                visit, e.g. rashes, sinus infections, acne ect. You can receive
                mental health counseling, lab result reviews, contraceptive
                counseling, prescription refills, and more.
                <CardBody>
                  <b>Disclaimer</b>: However, some medical issues are outside
                  the scope of telemedicine and our highly qualified physicians
                  may refer you to a higher level of care, if needed.
                </CardBody>
              </CardBody>
            </Card>
          </Collapse>
        </div>

        <div className="faq-container-box">
          <div>
            <Button
              className="faq-button"
              outline
              color="success"
              onClick={() => setIsOpen7(!isOpen7)}
              style={{ marginBottom: "1rem" }}
            >
              {!isOpen7 ? (
                <i class="fas fa-plus"></i>
              ) : (
                <i class="fas fa-minus"></i>
              )}
            </Button>
            <span>
              <p>How long will the visit take?</p>
            </span>
          </div>
          <Collapse isOpen={isOpen7}>
            <Card>
              <CardBody>
                Just as long as if you were being seen in the clinic minus wait
                and travel time.
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="faq-container-box">
          <div>
            <Button
              className="faq-button"
              outline
              color="success"
              onClick={() => setIsOpen8(!isOpen8)}
              style={{ marginBottom: "1rem" }}
            >
              {!isOpen8 ? (
                <i class="fas fa-plus"></i>
              ) : (
                <i class="fas fa-minus"></i>
              )}
            </Button>
            <span>
              <p>Can my doctor prescribe medication during this visit?</p>
            </span>
          </div>
          <Collapse isOpen={isOpen8}>
            <Card>
              <CardBody>
                In most cases, yes. If your doctor decides you need a
                medication, he or she can send the prescription electronically
                directly to the pharmacy you choose.
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div className="faq-container-box">
          <div>
            <Button
              className="faq-button"
              outline
              color="success"
              onClick={() => setIsOpen9(!isOpen9)}
              style={{ marginBottom: "1rem" }}
            >
              {!isOpen9 ? (
                <i class="fas fa-plus"></i>
              ) : (
                <i class="fas fa-minus"></i>
              )}
            </Button>
            <span>
              <p>Who will my visit be with?</p>
            </span>
          </div>
          <Collapse isOpen={isOpen9}>
            <Card>
              <CardBody>
                Your telehealth visit will be with one of our expert Board
                Certified Physicians.
              </CardBody>
            </Card>
          </Collapse>
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
                  onClick={toggle}
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
        isOpen1={isOpen}
        toggle1={toggle}
        closeModel1={closeModel}
      />
    </div>
  );
};

export default FAQ;
