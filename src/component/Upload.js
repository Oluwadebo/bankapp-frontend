import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar";
import { baseUrl } from "./endpoint";

const Upload = () => {
  const navigate = useNavigate();
  const [file, setfile] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [school, setschool] = useState("");
  const [image, setimage] = useState("");
  const token = localStorage.token
  const userId = localStorage.userId
  useEffect(() => {
    if (token) { } else {
      navigate("/")
    }
  }, [])
  const getfile = (e) => {
    let myfile = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(myfile)
    reader.onload = () => {
      setfile(reader.result);
    }
  }
  const upload = () => {
    const userdata = { file, firstname, lastname, school, userId }
    axios.post(`${baseUrl}files`, userdata).then((credentials) => {
      if (credentials) {
        navigate("/Dashboard")
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mx-auto my-5">
          <div className="shadow col-12 col-md-9 mx-auto px-4 pb-3 card">
            <h2 className="m-4">
              <b>
                <i>Profile</i>
              </b>
            </h2>
            <div>
              <input type="file" className="form-control my-2" onChange={(e) => getfile(e)} accept='image/*' />
              <input type="text" className="form-control my-2" placeholder="Firstname" onChange={(e) => setfirstname(e.target.value)} />
              <input type="text" className="form-control my-2" placeholder="Lastname" onChange={(e) => setlastname(e.target.value)} />
              <input type="text" className="form-control my-2" placeholder="school" onChange={(e) => setschool(e.target.value)} />
              <button className="btn btn-success form-control py-3 mt-3" onClick={upload}>Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
