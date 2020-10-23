import React, { Component } from "react";

class ChatWidget extends Component {
  componentDidMount() {
    // (function (d, m) {
    //   var kommunicateSettings = {
    //     appId: "2888143e2d7c9723b69231cbfed24b11d",
    //     popupWidget: true,
    //     automaticChatOpenOnNavigation: true,
    //     preLeadCollection: [
    //       {
    //         field: "Name", // Name of the field you want to add
    //         required: true, // Set 'true' to make it a mandatory field
    //         placeholder: "Enter your name", // add whatever text you want to show in the placeholder
    //       },
    //       {
    //         field: "Email",
    //         type: "email",
    //         required: true,
    //         placeholder: "Enter your email",
    //       },
    //       {
    //         field: "Phone",
    //         type: "number",
    //         required: true,
    //         element: "input", // Optional field (Possible values: textarea or input)
    //         placeholder: "Enter your phone number",
    //       },
    //       {
    //         field: "City",
    //         required: true,
    //         element: "input", // Optional field (Possible values: textarea or input)
    //         placeholder: "Enter your city name",
    //       },
    //       {
    //         field: "Note",
    //         required: true,
    //         element: "input", // Optional field (Possible values: textarea or input)
    //         placeholder: "Type your question here",
    //       },
    //     ],
    //     // onInit: function () {
    //     //   window.Kommunicate.displayKommunicateWidget(false);
    //     //   document.getElementById("button1").disabled = false;
    //     // },
    //   };
    //   var s = document.createElement("script");
    //   s.type = "text/javascript";
    //   s.async = true;
    //   s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    //   var h = document.getElementsByTagName("head")[0];
    //   h.appendChild(s);
    //   window.kommunicate = m;
    //   m._globals = kommunicateSettings;
    // })(document, window.kommunicate || {});

    (function (d, m) {
      var kommunicateSettings = {
        appId: "2f9894091878e14eac400c51ef04e0376",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
        preLeadCollection: [
          {
            field: "Name", // Name of the field you want to add
            required: true, // Set 'true' to make it a mandatory field
            placeholder: "Enter your name", // add whatever text you want to show in the placeholder
          },
          {
            field: "Email",
            type: "email",
            required: true,
            placeholder: "Enter your email",
          },
          {
            field: "Phone",
            type: "number",
            required: true,
            element: "input", // Optional field (Possible values: textarea or input)
            placeholder: "Enter your phone number",
          },
          {
            field: "City",
            required: true,
            element: "input", // Optional field (Possible values: textarea or input)
            placeholder: "Enter your city name",
          },
          {
            field: "Note",
            required: true,
            element: "input", // Optional field (Possible values: textarea or input)
            placeholder: "Type your question here",
          },
        ],
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  }
  render() {
    return <div></div>;
  }
}

export default ChatWidget;
