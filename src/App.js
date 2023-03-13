import React, { useState } from "react";
import Ammenities from "./Ammenities";


import './App.css';
import Brochure from "./Brochure";
import Card from "./Card";
import Contact from "./Contact";
import Footer from "./Footer";
import Location from "./Location";
import Overview from "./Overview";
import Gallery from "./Gallery";
import FloorPlan from "./FloorPlan";

function App() {
 
  return (
    <div className="App">
       <div class="navbar">
    <div style={{position:"absolute",left:"0"}}>
      <img src="https://www.m3mindia.com/img/M3Mlogo.png" alt="Code Grind Logo" style={{width:"100px",padding:"5px"}} />
    </div>
  
    <div style={{position:"absolute",right:"0",display:"flex"}} >
    <div><img src="https://i.imgur.com/IS7DK6m.png" style={{width:"60px",marginLeft:"20px",marginTop:"5px"}}/></div> 
    <div><img src="https://i.imgur.com/kgmNfit.png" style={{width:"50px",marginRight:"50px",marginTop:"5px",marginLeft:"20px"}}/></div> 
     <div></div>
    </div>
  </div>

    <div className="banner">
      
      <div class="card">
     <div class="contents snipcss-BFO2J">
  <div class="head_line">
   
    <h4 class="typo">
      3.5, 4.5 &amp; 5.5  BHK Apartments
    </h4>
  </div>
  <div class="st_price">
    <span class="rupee_symbol">
      ₹
    </span>
    <span class="price_line">
      Starting At
    </span>
    <span class="amount">
      <span className="gold">
        5.92 &nbsp;
      </span>
      Cr
      <span class="star">
        *
      </span>
    </span>
  </div>
  <div class="project_status">
    <h3 class="status">
      <span>
        Property Status
      </span>
      <span>
        New Launch
      </span>
    </h3>
  </div>
  <ul class="banner_offers">
    <li>
      <div class="cont">
        <span class="left">
          <b>
            0 KM
          </b>
        </span>
        <span class="right">
          FROM DELHI
        </span>
      </div>
    </li>
    <li>
      <div class="cont">
        <span class="left">
          <b>
            2 
          </b>
        </span>
        <span class="right">
          UNITS PER FLOOR
        </span>
      </div>
    </li>
    <li>
      <div class="cont">
        <span class="left">
          <b>
            4
          </b>
        </span>
        <span class="right">
          TOWERS ONLY
        </span>
      </div>
    </li>
    <li>
      <div class="cont">
        <span class="left">
          <b>
            9
          </b>
        </span>
        <span class="right">
          HOLE EXECUTIVE GOLF COURSE
        </span>
      </div>
    </li>
    <li>
      <div class="cont">
        <span class="left">
          <b>
            24/7
          </b>
        </span>
        <span class="right">
          SECURITY &amp; POWER 
        </span>
      </div>
    </li>
    <li>
      <div class="cont">
        <span class="left">
          <b>
            17.5 
          </b>
        </span>
        <span class="right">
          ACRES PROJECT AREA
        </span>
      </div>
    </li>
  </ul>
</div>
      </div>
      
      <div class="container2">
  
  <div class="brand-title">Booking Open Now!</div>

  <div >DON'T Miss Register To Get The Best Offers</div>

  <div class="inputs">
    
    <input type="email" placeholder="Enter Your Name" />
   
    <input type="password" placeholder="Enter Your Contact No." />
    
    <button type="submit" className="btn-1">Register Now</button>
  </div>
  
</div>
      
    </div>
      
       
 

    <div class="relative -mt-12 lg:-mt-24">
      <svg viewBox="0 0 1428 174" >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            ></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="black" fill-rule="nonzero">
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
   <Overview/>
    <Card/>
   <FloorPlan/>
 <Contact/>
 <Location/>
 <Gallery/>
   <Brochure/>

   
    <section class="container mx-auto text-center py-6 mb-12" style={{display:"flex"}}>
      <div style={{width:"40%",display:"block",height:"90%",marginRight:"10%"}}>
         <div style={{fontSize:"40px",fontWeight:"700",color:"black"}}><h2>Get In Touch With Us</h2></div>
         <div> <div style={{fontSize:"25px",background:"black",color:"white",width:"50%"}}>Schedule a Visit</div></div>
         <div><img src="https://i.imgur.com/hw5F4AO.png" style={{width:"40px",marginLeft:"20px",marginTop:"5px",marginRight:"20px"}}/></div>
         <div></div>

      </div>
    <div class="containerbottom">
  
  <div class="brand-title">Booking Open Now!</div>

  <div >DON'T Miss Register To Get The Best Offers</div>

  <div class="inputs">
    
    <input type="email" placeholder="Enter Your Name" />
   
    <input type="password" placeholder="Enter Your Contact No." />
    
    <button type="submit" className="btn-1" style={{width:"50%"}}>Register Now</button>
  </div>
  
</div>
      
    </section>
   
<Footer/>
    
    </div>
  );
}

export default App;
