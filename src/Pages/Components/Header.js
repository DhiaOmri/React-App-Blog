import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useDispatch } from "react-redux";
import { filterBlog } from "../../Actions/blogActions";
import "./Header.css";

const Header = () => {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
  };
  const dispatch=useDispatch()
  const handlerFilter=(e)=>{
    dispatch(filterBlog(e.target.value))
  }
  return (
    <div>
      <div
        className="p-5 text-center bg-image "
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/123112.jpg')",
          height: 600,
          backgroundAttachment: "fixed",
          backgroundPosition: "bottom",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="categories d-flex flex-column justify-content-around align-items-center h-100">
            <h1>
              <a
                href
                className="typewrite"
                data-period="2000"
                data-type='[ "Hi, Im DHIA", "I Love Design.", "I Love  Coding " ]'
              >
                
                <span className="wrap"></span>
              </a>
            </h1>
            <div className="text-white">
              <div className="btns">
                <MDBBtn value="sport" onClick={handlerFilter} rounded>
                  sport
                </MDBBtn>
                <MDBBtn
                  value="travel"
                  onClick={handlerFilter}
                  rounded
                  className="mx-2"
                  color="secondary"
                >
                  Travel
                </MDBBtn>
                <MDBBtn
                  value="fitness"
                  onClick={handlerFilter}
                  rounded
                  color="success"
                >
                  fitnesss
                </MDBBtn>
                <MDBBtn
                  value="music"
                  onClick={handlerFilter}
                  rounded
                  className="mx-2"
                  color="danger"
                >
                  music
                </MDBBtn>
                <MDBBtn
                  value="it"
                  onClick={handlerFilter}
                  rounded
                  color="warning"
                >
                  it
                </MDBBtn>
                <MDBBtn
                  value="lifestyle"
                  onClick={handlerFilter}
                  rounded
                  className="mx-2"
                  color="info"
                >
                  lifeStyle
                </MDBBtn>
                <MDBBtn
                  value=""
                  onClick={handlerFilter}
                  rounded
                  className="mx-2"
                  color="light"
                >
                  ALL
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
