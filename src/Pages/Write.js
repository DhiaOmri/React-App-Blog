import { MDBBtn, MDBInput, MDBValidation } from "mdb-react-ui-kit";
import React, { useState } from "react";

import createHistory from 'history/createBrowserHistory';
import "./Write.css";
import { toast, ToastContainer } from "react-toastify";
const Write = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [descrp, setDescrp] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: parseInt(Math.random() * 100000),
      fullName: name,
      image: image,
      description: descrp,
      category: category,
      date:Date.now(),
    };
    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
     return toast.success("Blog added");

    });
  };

  return (
    <div className="container write-blog ">
          <h2 className="h1-responsive font-weight-bold text-center my-4">Add New Article</h2>
      <MDBValidation
        className="row g-3  mt-5 m-auto justify-content-center"
        onSubmit={handleSubmit}
      
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
          textarea
          rows={4}
        />

        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => setCategory(e.target.value)}
          required
          label="Category"
          id="category"
        >
          <span>category</span>
          <option value="Sport">Sport</option>
          <option value="IT">IT</option>
          <option value="Fitness">Fitness </option>
          <option value="Lifestyle">Lifestyle </option>
          <option value="Travel">Travel </option>
          <option value="Music">Music </option>
        </select>

        <MDBBtn type="submit"  >Submit form</MDBBtn>
      </MDBValidation>
    
    </div>
  );
};

export default Write;
