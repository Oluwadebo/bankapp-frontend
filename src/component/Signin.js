import React from 'react'
import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as yup from "yup";
import { useFormik } from "formik";
import axios from 'axios';
import { baseUrl } from "./endpoint";
import svgexport30 from './assets/pic/svgexport-30.png'
import svgexport31 from './assets/pic/svgexport-31.png'
import opalogo from './assets/pic/logo-light.png'
import download from './assets/pic/download.png'
import svgexport1 from './assets/pic/svgexport-1.png'

const SignIn = () => {
  const [Error, setError] = useState('')
  const [loader, setloader] = useState(false)
  const navigate = useNavigate()
  let myStyle = {
    fontSize: '20px',
  }
  let mySpa = {
    color: '#1FC69D'
  }
  let lower = new RegExp(`(?=.*[a-z])`);
  let upper = new RegExp(`(?=.*[A-Z])`);
  let number = new RegExp(`(?=.*[0-9])`);
  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setloader(prev => true)
      axios.post(`${baseUrl}signin`, values).then((credentials) => {
        if (credentials) {
          let Err = credentials.data.message;
          if (Err == "Email not found") {
            setloader(prev => false)
            setError("Email not found");
          } else if (Err == "Invaild password") {
            setloader(prev => false)
            setError("Invaild password");
          } else {
            if (Err == "Token generated") {
              localStorage.bank = credentials.data.token
              setloader(prev => false)
              navigate('/Dashboard')
            }
          }
        }
      })
    },
    validationSchema: yup.object({
      email: yup.string().required("This field is required").email("must be a valid email"),
      password: yup.string().required("This field is required").matches(lower, "Must include lowerCase letter").matches(upper, "Must include upperCase letter").matches(number, "Must include a number").min(5, "must be greater than 5 charaters"),
    }),
  });
  const toggle = useRef();
  const i = useRef();
  const password = useRef();

  const showHide = () => {
    if (password.current.type === "password") {
      password.current.setAttribute("type", "text");
      toggle.current.classList.add("hide");
      i.current.classList = "fa fa-eye-slash";
    } else {
      password.current.setAttribute("type", "password");
      i.current.classList = "fa fa-eye";
      toggle.current.classList.remove("hide");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top shadow">
        <div className="container">
          <img src={svgexport1} alt="" className='img-fluid' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item px-3">
                <Link to="/" className="nav-link text-dark" aria-current="page" style={myStyle}>Mini POS</Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/" className="nav-link text-dark" style={myStyle}>Merchants</Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/" className="nav-link text-dark" style={myStyle}>Documentation</Link>
              </li>
              <li className="nav-item px-3 dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={myStyle}>Company</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item py-2 px-4" href="#">About Us</a></li>
                  <li><a className="dropdown-item py-2 px-4" href="#">Blog</a></li>
                  <li><a className="dropdown-item py-2 px-4" href="#">Contact Us</a></li>
                  <li><a className="dropdown-item py-2 px-4" href="#">Press & Media</a></li>
                </ul>
              </li>
              <li className="nav-item px-3 dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={myStyle}>Join Us</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item py-2 px-4" href="#">Graduates</a></li>
                  <li><a className="dropdown-item py-2 px-4" href="#">Experienced</a></li>
                </ul>
              </li>
            </ul>
            <span className="navbar-text">
              <Link to="/signUp"><button className='btn form-control' style={{ background: '#1FC69D', border: 'none' }}>Sign-Up</button></Link>
            </span>
          </div>
        </div>
      </nav>
      <div className="mt-5">
        <div className="container">
          <div className="row pt-5">
            <p><b className='text-danger'>{Error}</b></p>
            <div className="col-12 col-md-6 rig">
              <img src={opalogo} alt="" className='img-fluid mx-auto mt-5' />
              <h5><b>Welcome back.</b></h5>
              <form action="" onSubmit={Formik.handleSubmit}>
                <div className="form-floating mt-3 mb-4">
                  <input type="email" placeholder="Your email" className={Formik.errors.email && Formik.touched.email ? "form-control is-invalid" : "form-control"} onChange={Formik.handleChange} style={{ backgroundColor: "#F5F7FA" }} name="email" onBlur={Formik.handleBlur} />
                  {Formik.touched.email && (
                    <div style={{ color: "red" }} className="ade">
                      {Formik.errors.email}
                    </div>
                  )}
                  <label>&#x1F4E7;&nbsp; Your email</label>
                </div>
                <div className="form-floating my-3">
                  <input type="password" placeholder="Your password" className={Formik.errors.password && Formik.touched.password ? "form-control is-invalid" : "form-control"} ref={password} maxLength={10} onChange={Formik.handleChange} style={{ backgroundColor: "#F5F7FA" }} name="password" onBlur={Formik.handleBlur} />
                  <div id="toggle" ref={toggle} onClick={showHide} className="goses pe-4">
                    <i ref={i} className="fa fa-eye" aria-hidden="true"></i>
                  </div>
                  {Formik.touched.password && (
                    <div style={{ color: "red" }} className="py-2 ade">
                      {Formik.errors.password}
                    </div>
                  )}
                  <label>&#x1F512;&nbsp; Your password</label>
                  <button type="submit" className="btn form-control py-3 mt-4 text-white" style={{ background: '#210F60', border: 'none' }}>
                    <b>Sign-In</b>
                    {loader && (
                      <div className="spin">
                        <div className="loader"></div>
                      </div>
                    )}
                  </button>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-8">
                        <p style={{ opacity: '0.6' }}>Don't have an account?</p>
                      </div>
                      <div className="col-4">
                        <p><b><Link to="/SignUp" className='sig'>Sign up</Link></b></p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6" style={{ background: '#BA7A30' }}>
              <div className="container">
                <div className="card m-4 shadow asd text-light">
                  <img src={opalogo} alt="" className='img-fluid mx mt-4 mx-3 mx-md-5 mb-2' />
                  <hr className='hrs mx-3 mx-md-5' />
                  <p><b className='mx-3 mx-md-5'>We make payments simple</b></p>
                  <h3><b className='mx-3 mx-md-5'>But Significant</b></h3>
                  <p><b className='mx-3 mx-md-5' style={{ opacity: '0.6' }}>Join 500+ Thousands of businesses using OPay</b></p>
                  <div className="row mx-auto mb-4">
                    <div className="col-6 col-md-6">
                      <img src={svgexport30} alt="" className='img-fluid' />
                    </div>
                    <div className="col-6 col-md-6">
                      <img src={svgexport31} className='img-fluid' alt="" />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-4 mx-auto">
                      <img src={download} alt="" className='img-fluid' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn