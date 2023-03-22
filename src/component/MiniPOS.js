import React from 'react'
import cardphoneimg from './assets/pic/card-phone-img.png'
import svgexport30 from './assets/pic/svgexport-30.png'
import svgexport31 from './assets/pic/svgexport-31.png'
import svgexport6 from './assets/pic/svgexport-6.png'
import svgexport7 from './assets/pic/svgexport-7.png'
import svgexport8 from './assets/pic/svgexport-8.png'
import svgexport9 from './assets/pic/svgexport-9.png'
import svgexport10 from './assets/pic/svgexport-10.png'
import svgexport11 from './assets/pic/svgexport-11.png'
import svgexport13 from './assets/pic/svgexport-13.png'
import svgexport14 from './assets/pic/svgexport-14.png'
import svgexport15 from './assets/pic/svgexport-15.png'
import svgexport16 from './assets/pic/svgexport-16.png'
import svgexport18 from './assets/pic/svgexport-18.png'
import svgexport19 from './assets/pic/svgexport-19.png'
import svgexport20 from './assets/pic/svgexport-20.png'
import svgexport21 from './assets/pic/svgexport-21.png'
import svgexport22 from './assets/pic/svgexport-22.png'
import svgexport23 from './assets/pic/svgexport-23.png'
import svgexport24 from './assets/pic/svgexport-24.png'
import svgexport25 from './assets/pic/svgexport-25.png'
import svgexport26 from './assets/pic/svgexport-26.png'
import svgexport27 from './assets/pic/svgexport-27.png'
import svgexport28 from './assets/pic/svgexport-28.png'
import svgexport29 from './assets/pic/svgexport-29.png'
import svgexport12 from './assets/pic/svgexport-12.png'
import agent from './assets/pic/agent.jpg'
import bills from './assets/pic/bills.png'
import cardhand from './assets/pic/card-hand.png'
import updatedphone from './assets/pic/updated-phone.png'
import inquires from './assets/pic/inquires.png'
import Navbar from '../component/Navbar';
import Footer from '../component/Fter'

const Home = () => {
  
  let mySpan = {
    textDecoration: 'underline',
    color:'#1FC69D'
  }
  let mySpa = {
    color:'#1FC69D'
  }
  return (
    <>
      <Navbar/>
      <div className="mt-5" style={{background:'#F1FFFC'}}>
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 col-md-6">
              <h1 className='mx-auto my-5 pt-5 myStyle'><b>Making Financial Services More Accessible For <span style={mySpan}>You</span></b></h1>
              <p>Making Financial Services More Accessible For You OPay gives you the freedom to make quick and easy payments, spend smart, and save more.</p>
              <div className="row mx-auto">
                <div className="col-6 col-md-6">
                  <img src={svgexport30} alt="" className='img-fluid' />
                </div>
                <div className="col-6 col-md-6">
                  <img src={svgexport31} className='img-fluid' alt="" />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={cardphoneimg} alt="" className='img-fluid gose'/>
            </div>
          </div>
          <center>
            <img src={svgexport6} alt="" className='gose'/>
          </center>
        </div>
      </div>
      <div className="container">
        <center>
          <h2 className='myStyle my-5'><b>OPay... Beyond Banking</b></h2>
        </center>
        <div className="row p-5 my-4" style={{background:'#F8FBFF',borderRadius:'30px'}}>
          <div className="col-md-4 p-4">
            <div>
              <img src={svgexport7} alt=""/>
              <h3 className='py-3'><b>Pay Your Utility Bills</b></h3>
              <span style={{opacity: '0.5'}}>Make your payments from the comfort of your homes or on-the-go. Pay for your cable TV, electricity, water, education, toll, tax, and more.</span>
            </div>
          </div>
          <div className="col-md-4 p-4">
            <div>
              <img src={svgexport8} alt=""/>
              <h3 className='py-3'><b>Fast & Secure Transfer</b></h3>
              <span style={{opacity: '0.5'}}>With OPay, you can send money to other banks for free and receive money in real-time. All you need is a phone number to open an account.*</span>
            </div>
          </div>
          <div className="col-md-4 p-4">
            <div>
              <img src={svgexport9} alt=""/>
              <h3 className='py-3'><b>Connect with Friends</b></h3>
              <span style={{opacity: '0.5'}}>Chat with family and friends on the app. Send money to them with zero charges through our wallet-to-wallet payment system.</span>
            </div>
          </div>
          <div className="col-md-4 p-4">
            <div>
              <img src={svgexport10} alt=""/>
              <h3 className='py-3'><b>Offline Banking</b></h3>
              <span style={{opacity: '0.5'}}>No smartphone? No problem! Our USSD service is here to help you. Dial *955# on your phone to carry out any transaction.</span>
            </div>
          </div>
          <div className="col-md-4 p-4">
            <div>
              <img src={svgexport11} alt=""/>
              <h3 className='py-3'><b>Savings</b></h3>
              <span style={{opacity: '0.5'}}>Start saving smartly with any of our savings products and get up to 15% interest returns per annum. Withdraw your money at your convenience.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <center>
          <div className="fast card shadow">
            <h3 className='py-4 Easy'>Easy, fast transactions</h3>
            <p className='px-5 queues'>Goodbye to queues. OPay is the easiest and fastest way to make transactions and manage your finances without standing in long bank queues.</p>
          </div>
        </center>
      </div>
      <div style={{background:'#F8FBFF'}}>
        <center>
          <h2 className='myStyle p-5'><b>A better life with OPay</b></h2>
        </center>
        <div className="container">
          <div className="row my-5">
            <div className="col-12 col-md-6">
              <img src={agent} className='img-fluid' alt="" />
            </div>
            <div className="col-12 col-md-6 card shadow bg-transparent">
              <h2 className='px-5 py-3'><b>Add Money, Make Transfers, Pay Bills</b></h2>
              <p className='px-5'>Live your life on your terms and without limits. With an OPay account, you can add money to your wallet for free, within seconds and start making transfers to other wallets or any bank accounts for free.* Take control of how you make your bill and utility payments.</p>
              <button className='btn btn-success col-4 mx-5 my-4' style={{background:'#1FC69D',border:'none'}}>Learn more</button>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 col-md-6 card shadow bg-transparent">
              <h2 className='px-5 py-3'><b>Become an OPay Merchant</b></h2>
              <p className='px-5'>As an OPay Merchant, you have the power and control to make as much money as you can while providing financial services and helping your community grow. Join the OPay family now, get a free POS and start to scale your business. We offer the lowest charges in the market.</p>
              <button className='btn btn-success col-4 mx-5 my-4' style={{background:'#1FC69D',border:'none'}}>Learn more</button>
            </div>
            <div className="col-12 col-md-6">
              <img src={bills} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
        <center>
          <h2 className='myStyle p-5'><b>OPay Cards, Your Passport To The <span style={mySpan}>World</span></b></h2>
          <p className='container'>With our physical debit cards, you can make payments for goods, services and international subscriptions from your OPay wallet. Make offline or online payments seamlessly with your OPay card and partake in our Generous Reward Program.</p>
        </center>
        <div className="container">
          <center>
            <img src={cardhand} className='img-fluid gose' alt="" />
          </center>
        </div>
      </div>
      <div style={{background:'#20D0A0'}}>
        <div className="container">
          <div className="row py-5 text-light">
            <div className="col-12 col-md-8 my-4">
              <h1 className='mx-auto my-5 pt-5 myStyle'><b>We take your Security and Privacy seriously</b></h1>
              <div className="row mx-auto">
                <div className="col-3 col-md-1">
                  <img src={svgexport12} alt="" className='img-fluid'/>
                </div>
                <div className="col-9 col-md-6">
                  <h3><b>Advanced fraud detection</b></h3>
                  <h6 className='py-3'>Your data is stored and encrypted using strong cryptography. We scan our systems daily against security threats.</h6>
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-3 col-md-1">
                  <img src={svgexport12} alt="" className='img-fluid'/>
                </div>
                <div className="col-9 col-md-7">
                  <h3><b>Your money is safe with us</b></h3>
                  <h6 className='py-3'>We are compliant with PCI DSS. Your transactions are always encrypted and secured.</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 my-5">
              <img src={svgexport13} alt="" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 col-md-6 d-none d-md-block">
              <img src={updatedphone} alt="" className='img-fluid gose'/>
            </div>
            <div className="col-12 col-md-6 px-5 mt-md-5">
              <h2 className=' mt-5 pt-5 myStyle'><b>Download the app and start your journey to stress-free payments now</b></h2>
              <div className="row mx-auto mt-5">
                <div className="col-12 col-md-12 d-flex">
                  <div><img src={svgexport14} alt="" className='img-fluid my-5'/></div>
                  <div className='my-5 py-3'>
                    <h5>Use your phones camera to scan and download the OPay app</h5>
                    <p><b>Available on <span style={mySpa}>iOS</span> and <span style={mySpa}>Android</span></b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <center>
        <h2 className='myStyle my-md-5'><b>Our Partners</b></h2>
      </center>
      <div className="container">
        <div className="row">
          <div className="col-5 col-md-2 pt-2 mx-2"><img src={svgexport15} alt="" className='img-fluid card rounded-circle'/></div>
          <div className="col-5 col-md-2 pt-2 mx-2"><img src={svgexport16} alt="" className='img-fluid card rounded-circle'/></div>
          <div className="col-5 col-md-2 pt-2 mx-2"><img src={svgexport18} alt="" className='img-fluid card rounded-circle'/></div>
          <div className="col-5 col-md-2 pt-2 mx-2"><img src={svgexport21} alt="" className='img-fluid card rounded-circle'/></div>
          <div className="col-5 col-md-2 pt-2 mx-2"><img src={svgexport22} alt="" className='img-fluid card rounded-circle'/></div>
          <div className="col-5 col-md-2 pt-2 mx-2"><img src={svgexport19} alt="" className='img-fluid card rounded-circle'/></div>
          <div className="col-5 col-md-2 pt-2 mx-2"><img src={svgexport20} alt="" className='img-fluid card rounded-circle'/></div>
          <div className="col-5 col-md-2 pt-2 mx-2"><img src={svgexport23} alt="" className='img-fluid card rounded-circle'/></div>
        </div>
      </div>
      <div className='mt-4' style={{background:'#F1FFFC'}}>
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 col-md-6 my-3">
              <h1 className='mx-auto my-5 myStyle'><b>Do you still have questions?</b></h1>
              <p>Check out our <span style={mySpa}>FAQ</span> page to find answers to questions about our products and services. Need more help? Reach out to us via Social media, Telephone or Email. Our support team is always available to assist you.</p>
              <div className="row mx-auto">
                <div className="col-2 col-md-1">
                  <img src={svgexport24} alt="" className='img-fluid'/>
                </div>
                <div className="col-10 col-md-11">
                  <h6><span style={mySpa}>0905 8922870</span> (App & Card queries), <span style={mySpa}>0814 8624416</span> (POS Business queries)</h6>
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-2 col-md-1">
                  <img src={svgexport25} alt="" className='img-fluid'/>
                </div>
                <div className="col-10 col-md-11">
                  <h6><span style={mySpa}>ogunweoluwadebo@gmail.com</span></h6>
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-12">
                  <img src={svgexport26} alt="" className='img-fluid mx-3'/>
                  <img src={svgexport27} alt="" className='img-fluid mx-3'/>
                  <img src={svgexport28} alt="" className='img-fluid mx-3'/>
                  <img src={svgexport29} alt="" className='img-fluid mx-3'/>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block">
              <img src={inquires} alt="" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home