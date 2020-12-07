import React, { Component, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./componenthome/home/Home";
import ServiceHome from "./componenthome/services/ServiceHome";
import AboutHome from "./componenthome/about/AboutHome";
import ContactUs from "./componenthome/contact/ContactUs";
import FAQ from "./componenthome/faq/FAQ";
import TermAndCondition from "./componenthome/termAndCondition/TermAndCondition";
import ConfirmAppointment from "./componenthome/home/ConfirmAppointment";
import ReactCalandly from "./componenthome/ReactCalandly";
import ConfirmAppointmentCalendly from "./componenthome/home/ConfirmAppointmentCalendly";
import ReactGa from 'react-ga'

const Menu = () => {

  useEffect(() => {
    ReactGa.initialize('G-REFKBS1THK')
    
    // to react page view
    // ReactGa.pageview('/')
    ReactGa.pageview(window.location.pathname + window.location.search)

  }, [])

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/service" component={ServiceHome} />
          <Route exact path="/about" component={AboutHome} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/faq" component={FAQ} />
          <Route
            exact
            path="/service/termandcondition"
            component={TermAndCondition}
          />
          <Route
            exact
            path="/confirmappointment"
            component={ConfirmAppointment}
          />
          <Route
            exact
            path="/confirmappointmentcalendly"
            component={ConfirmAppointmentCalendly}
          />
          <Route exact path="/reactcalandly" component={ReactCalandly} />
        </Switch>
      </div>
    );
  }


export default Menu;

// import React from 'react'

// function Menu() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Menu

