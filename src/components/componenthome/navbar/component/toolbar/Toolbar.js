import React, { Component } from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton";
import nextgenlogo from "../../../../../images/nextgenlogo.JPG";
import { Link } from "react-router-dom";
import ConfirmStateModal from "../../../home/ConfirmStateModal";

class Toolbar extends Component {
  state = {
    isOpen1: false,
  };
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
      <header className="toolbar">
        <nav className="toolbar_navigation">
          {/* <div className="toolbar_toggle-button">
            <DrawerToggleButton click={props.drawerToggleClickHandler} />
          </div> */}
          <div className="toolbar_logo">
            <Link to="/">
              <div>
                <img src={nextgenlogo} />
              </div>
            </Link>
          </div>
          <div className="spacer"></div>
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li  style={{ cursor: "pointer" }}>
                <Link to="/confirmappointment">Patient Login</Link>
              </li>
              <li 
                className="schedule-appointment" 
                onClick={this.toggle1} 
                style={{cursor: "pointer"}}
              >
                <a href="#allyourhealth"></a>
                  Schedule Appointment
              </li>
            </ul>
          </div>
          <div className="toolbar_toggle-button">
            <DrawerToggleButton click={this.props.drawerToggleClickHandler} />
          </div>
        </nav>
        <ConfirmStateModal
          isOpen1={this.state.isOpen1}
          toggle1={this.toggle1}
          closeModel1={this.closeModel1}
          setModelClose={this.setModelClose}
        />
      </header>
    );
  }
}

export default Toolbar;
