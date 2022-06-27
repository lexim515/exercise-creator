import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-text">
        <h3>Phone: 716-688-1110 </h3>
      </div>
      <div id="icons">
        <a href="https://www.facebook.com/SpothsFarmMarket">
          <FontAwesomeIcon icon={faFacebook} class="fb-icon" />
        </a>
        <a href="https://www.instagram.com/spothsfarmmarket/">
          <FontAwesomeIcon icon={faInstagram} class="insta-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
