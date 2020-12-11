import React, {Component} from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";
import ConfirmStateModal from "../../../home/ConfirmStateModal";

class SideDrawer extends Component {
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
  render(){
  let drawerClasses = "side-drawer";
  if (this.props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <React.Fragment>
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        {/* <li>
          <Link to="/">Learn</Link>
        </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <Link to="/">+1 (802) 277‑2569</Link>
        </li> */}
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li style={{ cursor: "pointer" }}>
            <a href="https://nextgendoc.prognocis.com/prognocis/nextgendocClinicIndex.html" target="_">Patient Login</a>
            {/* <Link to="/confirmappointment">Patient Login</Link> */}
        </li>
        <li 
          className="schedule-appointment" 
          onClick={this.toggle1} 
          style={{cursor: "pointer"}}>
            {/* <Link to="/reactcalandly"> */}
              Schedule Appointment
            {/* </Link> */}
        </li>
      </ul>

    </nav>
    <ConfirmStateModal
    isOpen1={this.state.isOpen1}
    toggle1={this.toggle1}
    closeModel1={this.closeModel1}
    setModelClose={this.setModelClose} 
    />
    </React.Fragment>
  );}
}

export default SideDrawer;
