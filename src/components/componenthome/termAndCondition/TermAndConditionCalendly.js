import React, { Component } from "react";
import ChatWidget from "./ChatWidget";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
} from "reactstrap";
import "./TermAndCondition.css";
import WhatsAppChat from "./WhatsAppChat";

class TermAndConditionCalendly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChatWidgetOpen: false,
      visible1: false,
      visible2: false,
    };
  }

  toggle1 = (e) => {
    this.setState({
      visible1: !this.state.visible1,
    });
  };

  toggle2 = () => {
    this.setState({
      visible2: !this.state.visible2,
      // visible1: false,
      isChatWidgetOpen: true,
    });
  };

  // openChat = () => {
  //   console.log("openChat");
  //   // window.Kommunicate.displayKommunicateWidget(true);
  //   // window.Kommunicate.launchConversation();
  //   this.setState({ isChatWidgetOpen: true, visible: !this.state.visible });
  // };

  render() {
    const alert = (
      <Alert color="info" isOpen={this.state.visible2} toggle={this.toggle2}>
        Chat With Us
      </Alert>
    );
    const modal1 = (
      <Modal isOpen={this.state.visible1} toggle={this.toggle1}>
        <ModalBody>
          <p
            style={{
              fontSize: "1.2rem",
              padding: "1rem 2rem",
              color: "#333",
              fontWeight: "500",
              textAlign: "justify",
            }}
          >
            Insurance is not currently accepted by NextGenDoc. Payment is
            required before visit, please press continue
          </p>
          {alert}

          <br />
          <br />
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={this.toggle2}
            disabled={this.state.visible2}
          >
            Continue
          </Button>
        </ModalFooter>
      </Modal>
    );
    const modal2 = (
      <Modal isOpen={this.state.visible2} toggle={this.toggle2}>
        <ModalBody>
          <h1
            style={{
              fontSize: "2rem",
              padding: "1rem 2rem",
              color: "#00f",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Chat with us
          </h1>
          <br />
          <br />
        </ModalBody>
      </Modal>
    );

    return (
      <div className="term-and-condition">
        <div className="term-and-condition-container">
          {this.state.visible1 || this.state.visible2 ? (
            <div>
              <div>{modal1}</div>
            </div>
          ) : null}

          <div>
            <h1>Terms And Conditions</h1>
          </div>
          <div>
            <p>
              Telehealth includes the usage of digital communications to enable
              healthcare providers at different locations to share individual
              patient clinical data to improve patient care. Telehealth services
              supplied with the aid of the entities comprising the NextGenDoc,
              LLC can also include chart overview, far off prescribing,
              appointment scheduling, and non-clinical services, along with
              patient education. The information you give might be used for
              prognosis, therapy, follow-up and may incorporate any blend of the
              accompanying:
            </p>
            <div>
              <ul>
                <li>Health records and test results</li>
                <li>Pictures</li>
                <li>Live two-way audio and video</li>
              </ul>
            </div>
            <p>
              The digital communication systems we use will include community
              and software program security protocols to defend the
              confidentiality of patient identification and will incorporate
              measures to safeguard the data and to ensure its integrity against
              intentional or unintentional corruption.
            </p>
            <p>
              NextGenDoc physicians and medical professionals are an expansion
              to, and not a substitute for your primary care physician. An
              obligation for your average chronic medical condition treatment
              and follow-up should continue to be at your primary care physician
              if you have one. If you do not have one, we suggest you get a
              primary care doctor.
            </p>

            <p>
              If you want to receive follow-up care in the event of an adverse
              reaction to the treatment, or other concerns, please contact{" "}
              <a href="mailto:Info@NextGenDoc.com">Info@NextGenDoc.com</a>.
            </p>
            <p>
              By clicking "I Agree and Consent", you acknowledge that you
              understand and agree with the following:
            </p>
            <div>
              <ol>
                <li>
                  I thus agree with accepting the NextGenDoc utilizing
                  telehealth technologies. I comprehend that NextGenDoc and its
                  providers offer telehealth-based clinical services, yet that
                  these services do not supplement the connection between my
                  primary care physician and me. I likewise comprehend it is up
                  to NextGenDoc to decide if my particular clinical needs are
                  proper for a telehealth experience or if I should be referred
                  elsewhere.
                </li>
                <li>
                  I comprehend that NextGenDoc’s obligation of care does not
                  start at the purpose of me responding to questions, or making
                  payments, or beginning a video visit, but at the point at
                  which the medical provider accepts the duty of care. After the
                  medical provider reviews the filled out documents provided
                  after creating a login and receiving payment; NextGenDoc will
                  determine if I am a good candidate for the telehealth
                  services.{" "}
                </li>
                <li>
                  I comprehend that asking for treatment (by finishing a visit
                  in the versatile application or website and making payment and
                  initiating a video chat) or communicating something via the
                  cell app or website does no longer in and of itself create an
                  obligation of care or create a health practitioner-patient
                  relationship.
                </li>
                <li>
                  I comprehend that federal and state law requires medical care
                  providers to ensure the protection and the security of patient
                  information. I comprehend that NextGenDoc will find a way to
                  ensure that my health information is safe.
                </li>
                <li>
                  I comprehend that telehealth may include electronic
                  correspondence of my clinical data to different health
                  practitioners who can be located in other regions.
                </li>
                <li>
                  I understand there's a chance of technical failures for the
                  duration of the telehealth encounter beyond the control of
                  NextGenDoc. I comply and do not hold NextGenDoc liable for
                  delays in evaluation or records lost due to such technical
                  disasters.
                </li>
                <li>
                  I understand that I have the right to withhold or withdraw my
                  consent to the use of telehealth in the course of my care at
                  any time, without affecting my right to future care or
                  treatment. I understand that I might also suspend or terminate
                  use of the telehealth services at any time for any reason or
                  no reason. I understand the fact that if I am experiencing a
                  clinical emergency, that I can be directed to dial 9-1-1
                  immediately and that the NextGenDoc providers are not able to
                  connect me directly to any local emergency services.
                </li>
                <li>
                  I comprehend that options to telehealth consultation, for
                  example, in-person benefits are accessible to me, and in
                  choosing to participate in a telehealth consultation, I
                  comprehend that the fact that some elements of the services
                  including tests might be carried out through people at my
                  area, or a testing facility, at the direction of the
                  NextGenDoc provider (e.g. labs or bloodwork).
                </li>
                <li>
                  I understand that no results can be guaranteed or assured.
                </li>
                <li>
                  My medical records may be shared with others for scheduling
                  and billing. To assist with the technical equipment, there may
                  be others in the room during my consultation. These
                  individuals will keep my medical information confidential. I
                  reserve the privilege to inform my healthcare provider that I
                  need to :
                  <div>
                    <ul>
                      <li>
                        omit information about my medical history and physical
                        exam which are in my opinion sensitive to me while the
                        others are in the room.
                      </li>
                      <li>
                        ask non-clinical faculty to leave the telehealth exam
                        room or
                      </li>
                      <li>Cancel the consultation at any time</li>
                    </ul>
                  </div>
                </li>
                <li>
                  I understand that if I participate in a consultation, that I
                  reserve the option to demand a duplicate of my medical records
                  which will be given to me at the sensible expense of
                  arrangement, transportation, and delivery.
                </li>
              </ol>
            </div>
            <h3>Emergency Situations</h3>
            <p>
              If there is an emergency, telemedicine is not the right approach
              to care.
            </p>
            <p>
              IN CASE OF AN EMERGENCY, YOU SHOULD SEEK IMMEDIATE MEDICAL
              ATTENTION OR EMERGENCY CARE BY CALLING 911.
            </p>

            <h3>Indemnification</h3>
            <p>
              YOU AGREE TO INDEMNIFY AND HOLD HARMLESS THE PROVIDER, ITS
              EMPLOYEES FROM AND AGAINST ANY AND ALL LOSS OR DAMAGE, INCLUDING
              ANY AND ALL INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR
              EXEMPLARY DAMAGES, EXPENSES, LIABILITIES, CLAIMS, OR DEMANDS
              WHATSOEVER ARISING OUT OF OR RELATED TO ANY FAILURE OF TECHNOLOGY
              OR EQUIPMENT IN CONNECTION WITH THE PROVISION OF TELEMEDICINE,
              WHETHER OR NOT ANY SUCH LOSS, DAMAGE, EXPENSE, LIABILITY, CLAIM,
              OR DEMAND ARISES FROM OR RELATES TO THE PROVIDER'S NEGLIGENCE.
            </p>
          </div>
          <div>
            {this.state.isChatWidgetOpen ? <ChatWidget /> : null}
            <button
              style={{
                margin: "2rem 0 4rem",
                backgroundColor: "#fff",
                color: "#333",
                padding: "0.5rem 2rem",
                border: "0.2rem solid #333",
                fontWeight: "700",
              }}
              onClick={this.toggle1}
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TermAndConditionCalendly;
