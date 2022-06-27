import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div id="links">
          <Link className="link" to="/">
            HOME
          </Link>
          <Link className="link" to="/about">
            ABOUT US
          </Link>
          <Link className="link" to="/spring">
            SPRING
          </Link>
          <Link className="link" to="/summer">
            SUMMER
          </Link>
          <Link className="link" to="/autumn">
            AUTUMN
          </Link>
          <Link className="link" to="/winter">
            WINTER
          </Link>
          <Link className="link" to="/contact-us">
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
