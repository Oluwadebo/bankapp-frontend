import React from 'react'
import { Link } from 'react-router-dom'
import svgexport1 from './assets/pic/svgexport-1.png'
const Navbar = () => {
    let myStyle = {
        fontSize: '20px',
    }
    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <div className="p-0 m-0">
                <nav className="navbar navbar-expand-lg bg-light fixed-top shadow p-0 m-0">
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
                                <Link to="/signUp"><button className='btn form-control' style={{ background: '#1FC69D', border: 'none' }}>Create User Account</button></Link>
                            </span>
                        </div>
                    </div>
                </nav>
                <div className="">
                    <button onClick={scrollup} className="scr">^</button>
                </div>
            </div>
        </>
    )
}

export default Navbar