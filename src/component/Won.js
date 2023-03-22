import React from 'react'
import { useNavigate } from 'react-router-dom'

const Won = () => {
    let navigate = useNavigate()
    const transfer = ()=>{
        alert("why most you help, you do juju ni,");
        navigate("/")
    }
  return (
    <>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad commodi dicta asperiores ut ducimus, voluptatum molestias fugit a eos, iure voluptates. Nesciunt velit amet deleniti, veritatis iusto expedita eos incidunt.</h1>
        <button onClick={transfer}>Transfer</button>
    </>
    
  )
}

export default Won