import { faCoffee, faRunning } from "@fortawesome/free-solid-svg-icons";
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

const BlogCard = ({blog:{fullName,category,image,description}}) => {
  return (
      <>
    <div className="col-md-4">
      <MDBCard>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            src={image}
            fluid
            alt="..."
          />
          <a href>
            <div
              className="mask"
              style={{
                background: 'linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)',
              }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{fullName}</MDBCardTitle>
          <MDBCardText>
            {description}
          </MDBCardText>
          <MDBBtn href="#">Show more</MDBBtn>
          <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} className="d-block m-3">
          <FontAwesomeIcon icon={["fas", "coffee"]} />
    
    </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>

    </>
  );
};

export default BlogCard;
