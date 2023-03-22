import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { baseUrl } from "./endpoint";
import axios from 'axios';
import svgexport1 from './assets/pic/svgexport-1.png'
import { Link } from 'react-router-dom'

const Histroy = () => {
    const navigate = useNavigate()
    const bank = localStorage.bank;
    const customerId = localStorage.customerId;
    const [customers, setcustomers] = useState({})
    const [histo, sethisto] = useState([])
    const [mess, setmess] = useState("")

    useEffect(() => {
        if (bank) {
            axios.get(`${baseUrl}dashboard`,
                {
                    headers: {
                        "Authorization": `Bearer ${bank}`,
                        "Content-type": "application/json",
                        "Accept": "application/json"
                    }
                }).then((data) => {
                    if (data) {
                        let Err = data.data.message;
                        if (Err == "Valid Token") {
                            setcustomers(data.data.result[0]);
                            axios.post(`${baseUrl}gethistory`, { customerId }).then((data) => {
                                if (data) {
                                    let history = data.data.message;
                                    if (history == "customerresult and receiverresult") {
                                        let customerre = data.data.results.customerresult;
                                        let receiverre = data.data.results.receiverresult;
                                        const newobj = [...customerre, ...receiverre]
                                        sethisto(newobj);
                                    } else if (history == "receiverId") {
                                        let receiverre = data.data.result;
                                        const newobj = [...receiverre,]
                                        sethisto(newobj);
                                    } else if (history == "customerresult") {
                                        let customerre = data.data.customerresult;
                                        const newobj = [...customerre,]
                                        sethisto(newobj);
                                    }
                                    else {
                                        let messa = data.data.message;
                                        setmess(messa)
                                    }
                                }
                            })
                        } else {
                            localStorage.removeItem('bank')
                            localStorage.removeItem('customerId')
                            navigate("/SignIn")
                        }
                    }
                })
        } else {
            navigate("/SignIn")
        }
    }, [])

    const logout = () => {
        localStorage.removeItem("bank")
        navigate('/SignIn')
    }
    let myStyle = {
        fontSize: '20px',
    }
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
                                <Link to="/Dashboard" className="nav-link text-dark" aria-current="page" style={myStyle}>Home</Link>
                            </li>
                            <li className="nav-item px-3">
                                <Link to="/SignIn" className="nav-link text-dark" style={myStyle}>SignIn</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <button onClick={logout} className='btn form-control text-light' style={{ background: '#1FC69D', border: 'none' }}>Sign-Out</button>
                        </span>
                    </div>
                </div>
            </nav>
            <div className="my-5">
                <div className="container py-1 py-md-5">
                    <div className="row my-3 p-3 shadow ad">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-9">
                                    <p className='pt-2'>Account Number</p>
                                </div>
                                <div className="col-3">
                                    <h5 className='pt-2' style={{ float: 'right' }}>{customers.accountNumber}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-8">
                                    <p className='pt-2'>Total Balance</p>
                                </div>
                                <div className="col-4">
                                    <h5 className='pt-2' style={{ float: 'right' }}><b>₦</b> {customers.balance}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='alig'>{mess}</h3>
                <div className="container py-1 py-md-5">
                    {histo.map((item, index) => (
                        <div className='shadow p-5 my-md-1 my-0' style={{ background: "rgba(255,255,255,.2)", backdropFilter: "blur(5px)", borderRadius: "5px" }}>
                            <div className="row">
                                <div className="col-6">
                                    <h4>{item.transactiontime}</h4>
                                </div>
                                <div className="col-6">
                                    <h4 style={{ float: 'right', color: "red" }}>{item.transfer}</h4>
                                    <h4 style={{ float: 'right', color: "green" }}>{item.added}</h4>
                                    <h4 style={{ float: 'right', color: "green" }}>{item.received}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Histroy