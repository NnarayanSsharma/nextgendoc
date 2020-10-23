import React from "react";
import ReactWhatsapp from "react-whatsapp";

function WhatsAppChat() {
  return (
    <div
      className="whats-app-chat"
      style={{
        width: "100%",
        height: "50vh",
        background: "#f00",
        overflow: "hidden",
      }}
    >
      <ReactWhatsapp number="91-937-804-5965" message="Hello World!!!" />
    </div>
  );
}

export default WhatsAppChat;
