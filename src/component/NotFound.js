import React from 'react'

const NotFound = () => {
  return (
    <>
      <div className="my-5">
        <div className="container py-1 py-md-5">
          <div id="message" className='shadow p-5 my-md-5 my-0' style={{background:"rgba(255,255,255,.2)",backdropFilter:"blur(5px)",borderRadius:"5px"}}>
            <h1>404!!!</h1>
            <h2>Page Not Found!!!</h2>
            <h2>The specified file was not found on this website. Please check the URL for mistakes and try again.</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound