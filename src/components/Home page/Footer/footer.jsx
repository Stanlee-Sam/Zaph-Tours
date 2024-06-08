import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-title">
            <h1>Zaph Tours</h1>
          </div>
          {/* <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Trips</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul> */}
          <div className="social-media">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="copyright">
        <p>
          <span> <FontAwesomeIcon icon={faCopyright} /> 2024 All rights reserved</span>
        </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
