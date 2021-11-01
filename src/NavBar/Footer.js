import React from "react";
import logo from '../NavBar/logo.png'
import { MDBFooter} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div>
      <MDBFooter backgroundColor="light" className="text-center text-lg-left">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()}{" "}
          <a className="text-dark" href="#">
            <img src={logo} alt="dhia"  style={{maxHeight:"45px"}}/>
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
