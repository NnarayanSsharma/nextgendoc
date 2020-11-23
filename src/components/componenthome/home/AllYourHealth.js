import React, { Component } from "react";
import "./AllYourHealth.css";
import { Link } from "react-router-dom";

import loading from "../../../images/schedule-appointment.JPG";
import ConfirmServiceBox from "../services/ConfirmServiceBox";
import ConfirmStateModal from "./ConfirmStateModal";

class AllYourHealth extends Component {
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
      <div className="all-your-health-home">
        <div>
          <div>
            <div>
              <img src={loading} />
            </div>
          </div>
          <div>
            <h2>All your healthcare needs, in one place</h2>
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

export default AllYourHealth;
