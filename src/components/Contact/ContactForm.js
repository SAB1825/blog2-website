"use client"
import React from "react";
export default function ContactBox() {
  const personalEmail = "sabarisekar777@gmail.com";

  return (
    <div className="right-side">
      <div className="description">
        <p className='font-medium capitalize mt-4 text-base'>
          Feel free to email me at <strong>{personalEmail}</strong>. You can also click below button to redirect to your mail. 
        </p>
      </div>

      <div className="contact-box">
        <ContactButton email={personalEmail} />
      </div>
    </div>
  );
}

function ContactButton({ email }) {
  const handleContactClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      onClick={handleContactClick}
      className="contact-button" 
      style={{
        backgroundColor: "lightgreen",
        justifyContent: "center", 
        padding: "20px 20px", 
        border: "none", 
        cursor: "pointer",
        borderRadius: "5px", 
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      Click here to contact
    </button>
  );
}
