import React from 'react'
import {Link} from 'react-router-dom'
import svgexport36 from './assets/pic/svgexport-36.png'
import svgexport30 from './assets/pic/svgexport-30.png'
import svgexport1 from './assets/pic/svgexport-1.png'
import svgexport32 from './assets/pic/svgexport-32.png'
import svgexport33 from './assets/pic/svgexport-33.png'
import svgexport34 from './assets/pic/svgexport-34.png'
import svgexport35 from './assets/pic/svgexport-35.png'
import svgexport31 from './assets/pic/svgexport-31.png'

const Navbar = () => {
  let d = new Date();
  let year = d.getFullYear();
  return (
    <>
        <div className="bg-light mt-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-3 mb-3 mb-md-none">
                <img src={svgexport1} alt="" className='img-fluid'/>
                <div className="row my-3">
                  <div className="col-6">
                    <img src={svgexport30} alt="" className='img-fluid'/>
                  </div>
                  <div className="col-6">
                    <img src={svgexport31} alt="" className='img-fluid'/>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-12">
                    <img src={svgexport32} alt="" className='img-fluid'/>
                    <img src={svgexport33} alt="" className='img-fluid mx-4'/>
                    <img src={svgexport34} alt="" className='img-fluid mx-4'/>
                    <img src={svgexport35} alt="" className='img-fluid'/>
                  </div>
                </div>
                <img src={svgexport36} alt="" className='img-fluid'/>            
              </div>
              <div class="col-6 col-lg-2 offset-lg-1 mb-3 mb-md-none">
                <h5>Company</h5>
                <ul class="list-unstyled">
                  <li class="mb-2"><a href="" class="text-decoration-none link-dark">Blog</a></li>
                  <li class="mb-2"><a href="" class="text-decoration-none link-dark">About Us</a></li>
                  <li class="mb-2"><a href="" class="text-decoration-none link-dark">Contact Us</a></li>
                </ul>
              </div>
              <div class="col-6 col-lg-2 offset-lg-1 mb-3 mb-md-none">
                <h5>Resources</h5>
                <ul class="list-unstyled">
                  <li class="mb-2"><a href="" class="text-decoration-none link-dark">Privacy Policy</a></li>
                  <li class="mb-2"><a href="" class="text-decoration-none link-dark">Terms & Conditions</a></li>
                  <li class="mb-2"><a href="" class="text-decoration-none link-dark">Documentation</a></li>
                  <li class="mb-2"><a href="" class="text-decoration-none link-dark">Security</a></li>
                  <li class="mb-2"><a href="" class="text-decoration-none link-dark">FAQ</a></li>
                </ul>
              </div>
              <div class="col-6 col-lg-2 offset-lg-1 mb-3 mb-md-none">
                <h5>Discover</h5>
                <ul class="list-unstyled">
                  <li class="mb-2"><a href="" class="text-decoration-none link-dark">Mini POS</a></li>
                  <li class="mb-2"><a href="" class="text-decoration-none link-dark">For Merchants</a></li>
                </ul>
              </div>
              <div className="col-12 mt-5">
                <p><b style={{opacity: '0.6'}}>*Say goodbye to bank transfer fees! Transfer to bank accounts and OPay wallets for free.</b></p>
                <p><b style={{opacity: '0.6'}}>**OPay will not charge you for any transaction done on the OPay app.</b></p>
              </div>
              <div className="col-12 mt-4">
                <p style={{opacity: '0.6'}}>© {year}. OPay is a mobile money platform operated by OPay Digital Services Limited and licensed by the Central Bank of Nigeria. Launched in June 2022, the company has spread its services across all 36 states in Nigeria with over 300,000 mobile money merchants. Unauthorised reproduction and/or redistribution of copyrighted materials on this website and OPay’s social media pages is strictly prohibited.</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar