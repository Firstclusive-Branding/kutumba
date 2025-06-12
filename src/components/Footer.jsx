import "../styles/footer.css";
import { CiHeart } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="kutumba-footer">
      {/* Floating Petals + Icons */}
      <img
        src="/assets/petals/petal-2.png"
        className="footer-petal footer-petal-left"
        alt="petal"
      />
      <img
        src="/assets/petals/petal-7.png"
        className="footer-petal footer-petal-right"
        alt="petal"
      />
      <img
        src="/assets/petals/petal-3.png"
        className="footer-petal footer-petal-top"
        alt="petal"
      />
      <div className="kutumba-footer__header">
        <a href="/">
          <img src="/logo.svg" alt="Kutumba Events" className="footer-logo" />
        </a>
        <div className="footer-header-contact">
          <a href="tel:+918374748806">
            <IoCallOutline /> +91 837 474 8806
          </a>
        </div>
      </div>
      <div className="kutumba-footer__container">
        {/* Column 1 */}
        <div className="footer-column footer-branding">
          <h3>GET A CALLBACK</h3>
          <div className="footer-input-wrapper">
            <input type="text" placeholder="Enter your phone number" />
            <button>
              <IoPaperPlaneOutline />
            </button>
          </div>
          <p className="footer-description">
            Welcome to Kutumba Events, where we transform your visions into
            extraordinary events! With a passion for creating memorable
            experiences, we take pride in being your go-to partner for all your
            event management needs.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column footer-contact">
          <h4>REACH OUT</h4>
          <a href="mailto:info@kutumbaevents.in">info@kutumbaevents.in</a>
          <p>Razdhar Khan Pet Near Magalhat Hyderabad Telangana 500006</p>
        </div>

        {/* Column 3 */}
        <div className="footer-column footer-social">
          <h4>CONNECT SOCIALLY</h4>
          <a href="#">– Facebook</a>
          <a href="#">– Instagram</a>
          <a href="#">– Google</a>
          <a href="#">– YouTube</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Made with
          <span>
            <CiHeart />
          </span>
          by{" "}
          <a href="https://firstclusive.com" target="_blank" rel="noreferrer">
            Firstclusive
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
