import { Link } from "react-scroll";

import { Link as NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="logo"></div>
      <ul className="nav">
        <li className="nav-item">
          <Link
            syp={true}
            activeClass="active"
            smooth={true}
            offset={-180}
            to="#"
          >
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            syp={true}
            activeClass="active"
            smooth={true}
            offset={-180}
            to="about"
          >
            ABOUT US
          </Link>
        </li>
        <li className="nav-item">
          <Link
            syp={true}
            activeClass="active"
            smooth={true}
            offset={-180}
            to="faq"
          >
            FAQ
          </Link>
        </li>
        <li className="nav-item">
          <Link
            syp={true}
            activeClass="active"
            smooth={true}
            offset={-180}
            to="roadmap"
          >
            ROAD MAP
          </Link>
        </li>
      </ul>

      <div className="social">
        <NavLink to="/more">
          <button>CONNECT WALLET</button>
        </NavLink>

        <a href="/">
          <img
            className="instagram"
            src="./assets/vectors/instagram.svg"
            alt="instagram"
          />
        </a>
        <a href="/">
          <img
            className="facebook"
            src="./assets/vectors/facebook.svg"
            alt="facebook"
          />
        </a>
        <a href="/">
          <img
            className="twitter"
            src="./assets/vectors/twitter.svg"
            alt="twitter"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
