import React, { Component } from "react";
import "./NavbarHome.css";
import Toolbar from "./component/toolbar/Toolbar";
import SideDrawer from "./component/sideDrawer/SideDrawer";
import BackDrop from "./component/backDrop/BackDrop";

export class NavbarHome extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div>
        <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
      </div>
    );
  }
}

export default NavbarHome;
