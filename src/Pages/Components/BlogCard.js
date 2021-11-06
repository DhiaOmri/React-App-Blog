import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog: { id,title, fullName, category, image, description ,date} }) => {
  return (
    <>
      <div className="col-lg-4 col-md-12 mb-lg-4 mb-4">
        <div className="view overlay rounded z-depth-2 mb-4">
          <img
          style={{height:300,objectFit:"cover"}}
            className="img-fluid"
            src={image}
            alt="Sample image"
          />
          <a>
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>

        <a
          href="#!"
          className={
               category.toLowerCase() == "it"
              ? "orange-text"
              : category.toLowerCase() == "sport"
              ? "blue-text"
              : category.toLowerCase() == "travel"
              ? "text-secondary"
              : category.toLowerCase() == "fitness"
              ? "green-text"
              : category.toLowerCase() == "lifestyle"
              ? "text-info"
              : category.toLowerCase() == "music"
              ? "pink-text"
              : ""
          }
        >
          <h5 className="font-weight-bold mb-3">
            <i className={
               category.toLowerCase() == "it"
              ? "fas fa-laptop-code pr-2"
              : category.toLowerCase() == "sport"
              ? "fas fa-volleyball-ball pr-2"
              : category.toLowerCase() == "travel"
              ? "fas fa-plane-departure pr-2"
              : category.toLowerCase() == "fitness"
              ? "fas fa-heartbeat pr-2"
              : category.toLowerCase() == "lifestyle"
              ? "fas fa-procedures pr-2"
              : category.toLowerCase() == "music"
              ? "fas fa-music pr-2"
              : ""
          }></i>
            {category}
          </h5>
        </a>

        <h4 className="font-weight-bold mb-3">
          <strong>{title}</strong>
        </h4>

        <p>
          by <a className="font-weight-bold">{fullName}</a>, {date.toString()}
        </p>

        <p className="dark-grey-text">
          {description.slice(0,100)+'...'}
        </p>
        <Link to={`more/${id}`}>
          <a  className={
               category.toLowerCase() == "it"
              ? "btn btn-warning btn-rounded"
              : category.toLowerCase() == "sport"
              ? "btn btn-primary btn-rounded"
              : category.toLowerCase() == "travel"
              ? "btn btn-secondary btn-rounded"
              : category.toLowerCase() == "fitness"
              ? "btn btn-success btn-rounded"
              : category.toLowerCase() == "lifestyle"
              ? "btn btn-lifestyle btn-rounded"
              : category.toLowerCase() == "music"
              ? "btn btn-danger btn-rounded"
              : ""
          }>Read more</a>
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
