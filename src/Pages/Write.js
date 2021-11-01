import { MDBBtn, MDBInput, MDBValidation } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Write.css";
const Write = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [descrp, setDescrp] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const { loading, blogs, error } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const handleSubmt=(e)=>{
    e.preventDefault();
    const data = {
      id: parseInt(Math.random() * 100000),
      fullName:name,
      image:image,
      description:descrp,
      category:category,
      date:"to day"
    };
  }

  return (
    <div className="container write-blog ">
      
        <MDBValidation
          className="row g-3  mt-5 m-auto justify-content-center"
          onSubmit={handleSubmt}
          noValidate
        >
        
            <MDBInput
              validation="Looks good!"
              validationTooltip
              label="Full Name"
              id="validationTooltip01"
              name="fname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-100"
            />
                 <MDBInput
              validation="Looks good!"
              validationTooltip
              label="Image"
              id="validationTooltip01"
              name="fname"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              className="w-100"
            />
                        <MDBInput
              validation="Looks good!"
              validationTooltip
              label="Email"
              id="validationTooltip01"
              name="fname"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-100"
            />
                        <MDBInput
              validation="Looks good!"
              validationTooltip
              label="Descreption"
              id="textAreaExample"
              name="fname"
              value={descrp}
              onChange={(e) => setDescrp(e.target.value)}
              required
              className="w-100"
              textarea rows={4}
            />
        

        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => setCategory(e.target.value)}
          required
          label="Category"
          id="category"
        ><span >category</span>
          <option value="1">Sport</option>
          <option value="2">IT</option>
          <option value="3">Fitness </option>
          <option value="3">Lifestyle </option>
          <option value="3">Travel </option>
          <option value="3">Music </option>
        </select>

 
        <MDBBtn type='submit'>Submit form</MDBBtn>
        </MDBValidation>
    
    </div>
  );
};

export default Write;
