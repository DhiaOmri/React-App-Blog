import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { showBloge } from "../Actions/blogActions";

const More = () => {
  const { loading, blogs, error } = useSelector((state) => state.blog);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showBloge(id));
  }, []);

  if (loading) {
    return <div>LOADING...</div>;
  }

  if (error) {
    return <div style={{ color: "red", marginTop: "100px" }}>{error}</div>;
  }
  return (
      <div className="container">
         
  <div class="row my-5">


    <div class="col-md-12">


      <div class="card card-cascade wider reverse">

        
        <div class="view view-cascade overlay">
          <img class="card-img-top" src={blogs.image}alt="Sample image" />
          <a href="#!">
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        
        <div class="card-body card-body-cascade text-center">

          <h2 class="font-weight-bold"><a>Title of the new article</a></h2>
          <p>Written by <a><strong>{blogs.fullName}</strong></a>, {blogs.date}</p>
          <div class="social-counters"> 
            <a class="btn btn-default">
              <i class="far fa-comments pr-2"></i>
              <span class="clearfix d-none d-md-inline-block">Comments</span>
            </a>
            
          </div>

        </div>

      </div>

      <div class="mt-5">
{blogs.description}
      </div>

    </div>


  </div>
      </div>
  );
}

export default More;
