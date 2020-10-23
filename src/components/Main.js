import React from "react";
import { Route, Link } from "react-router-dom";
import FooterHome from "./componenthome/footer/FooterHome";
import NavbarHome from "./componenthome/navbar/NavbarHome";

import Menu from "./Menu";
import ChatBox from "./componenthome/chat/ChatBox";

function Main() {
  return (
    <div>
      <NavbarHome />
      <Menu />
      <FooterHome />
      {/* <ChatBox /> */}
    </div>
  );
}

export default Main;
