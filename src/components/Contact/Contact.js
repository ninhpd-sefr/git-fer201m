import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Information</h2>
      <div className="contact-details">
        <div className="contact-item">
          <span className="contact-label">Name:</span>
          <span className="contact-value">John Doe</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <span className="contact-value">johndoe@example.com</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">Phone:</span>
          <span className="contact-value">123-456-7890</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">Address:</span>
          <span className="contact-value">123 Main St, City, Country</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
