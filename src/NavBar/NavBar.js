import React, { useState } from "react";
import "./NavBar.css";
import logo from "./logo.png";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { searchBloge } from "../Actions/blogActions";
import { useDispatch } from "react-redux";
function NavBar() {
const [txtSearch,setTxtSearch]=useState('')
const dispatch=useDispatch()
const handleChange = (e) => {
  setTxtSearch(e.target.value);
  dispatch(searchBloge(txtSearch))
};

  return (
    
    <div className=" navigation" >
      <MDBNavbar fixed-top expand="lg" light bgColor="light" sticky>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" className="logo">
            <img src={logo} alt="" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar>
            <MDBNavbarNav
              classNahome="mr-auto mb-2 mb-lg-0 "
              className="justify-content-center"
            >
              <NavLink
                exact
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                }}
              >
                <MDBNavbarItem>
                  <MDBNavbarLink>Home</MDBNavbarLink>
                </MDBNavbarItem>
              </NavLink>
             
              <NavLink
                to="/write"
                activeStyle={{
                  fontWeight: "bold",
                }}
              >
                <MDBNavbarItem>
                  <MDBNavbarLink>Write</MDBNavbarLink>
                </MDBNavbarItem>
              </NavLink>
              <NavLink
                to="/contact"
                activeStyle={{
                  fontWeight: "bold",
                }}
              >
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Contact</MDBNavbarLink>
                </MDBNavbarItem>
              </NavLink>
            </MDBNavbarNav>
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Type query"
                aria-label="Search"
                value={txtSearch}
                onChange={handleChange}
              />
          
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default NavBar;
