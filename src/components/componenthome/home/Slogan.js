import React from "react";
import "./Slogan.css";
import doctorarroundyourschedule from "../../../images/doctor-arround-your-schedule.jpeg";
import easyaccesstomedical from "../../../images/easy-access-to-medical.jpeg";
import quickresponsetime from "../../../images/quick-response-time.jpeg";
import secureprivate from "../../../images/secure-private.jpeg";
import nowaittime from "../../../images/no-wait-time.JPG";

const Slogan = () => {
  return (
    <div>
      <div className="slogan">
        <div>
          <div>
            <img src={nowaittime} />
          </div>
          <div>
            <h4>No wait times. </h4>
          </div>
        </div>
        <div>
          <div>
            <img src={doctorarroundyourschedule} />
          </div>
          <div>
            <h4>Doctor that works around your schedule. </h4>
          </div>
        </div>
        <div>
          <div>
            <img src={quickresponsetime} />
          </div>
          <div>
            <h4>Quick response times. </h4>
          </div>
        </div>
        <div>
          <div>
            <img src={easyaccesstomedical} />
          </div>
          <div>
            <h4>
              Easy access to medical records through HIPPA compliant patient
              portals.{" "}
            </h4>
          </div>
        </div>
        <div>
          <div>
            <img src={secureprivate} />
          </div>
          <div>
            <h4>Secure, private, HIPPA compliant video conferencing.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
