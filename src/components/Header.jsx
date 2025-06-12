import "../styles/header.css";

const Header = () => {
  return (
    <div className="kutumba-header">
      <div className="kutumba-header__left">
        Email us:{" "}
        <a href="mailto:info@kutumbaevents.in">info@kutumbaevents.in</a>
      </div>
      <div className="kutumba-header__right">
        Call us: <a href="tel:+918374748806">+91 837 474 8806</a>
      </div>
    </div>
  );
};

export default Header;
