
import "./contact.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    alert("Form submitted!");
  };

  return (
    <section className="contact-section">
      <div className="contact-form-section">
        <div className="contact-container">
          <h1 className="contact-title">Connect with us</h1>
          <div className="contact-form">
            <form onSubmit={handleFormSubmit}>
              <div className="form-card-details">
                <div className="card-box">
                  <span className="details">First Name</span>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName} required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="card-box">
                  <span className="details">Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="card-box">
                  <span className="details">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange} required
                  />
                </div>
                <div className="card-box">
                  <span className="details">Message</span>
                  <textarea
                    id="text"
                    name="message"
                    cols="18"
                    rows="10"
                    placeholder="Enter your message here"
                    value={formData.message}
                    onChange={handleInputChange} required
                  ></textarea>
                </div>
              </div>
              <div className="form-submit-btn">
                <button className="form-btn" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <h2>Additional Information</h2>
      <div className="extras">
        <div className="Zaph-contact-info">
          <div className="email">
            <p>Email: ZaphTours2024@gmail.com</p>
          </div>
          <div className="telephone">
            <p>Telephone: +254 712 345 678</p>
          </div>
          <div className="address">
            <p>Address: Magadi Rd, Ongata Rongai</p>
          </div>
          <p>Work Hours: 9am - 5pm</p>
          <div className="social-media"></div>
        </div>
        <div className="map">
          <iframe
            width="520"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Magadi%20Rd,%20Ongata%20Rongai,%20Kenya+(Zaph%20Tours)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
