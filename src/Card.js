import React from 'react'
import Dialog from './Dialog'

const Card = () => {
  return (
    <div style={{background:"black"}}>
      <div style={{display:"block",marginLeft:"40%"}} >
            <div style={{height:"12vh",borderLeft:"3px solid #b5943b",letterSpacing: "1px",fontSize: "28px", marginBottom: ""}}>
                <div style={{display:"block"}}>
                <div style={{marginLeft:"50px",fontSize:"28px",fontFamily: 'Cursive',color:"white"}}>Brochure</div>
                <div style={{marginLeft:"50px",fontSize:"32px",color:"#2f2f2f",fontWeight:"700",color:"white"}} className="gold">Price List</div>

                    </div>
</div>
</div>

    <div style={{display:"flex",margin:"%",background:"black",padding:"100px"}}>
      
        <div class="single_price" style={{width:"25%"}}>
  <p class="typology">
    APARTMENTS
  </p>
  <div class="price_c">
    <h3 class="price">
      <sup>
        ₹
      </sup>
      7.77 Cr*
    </h3>
    <small class="onw">
      Onwards
    </small>
  </div>
  <div class="content">
    <div class="sizes">
      <small class="title">
        Super Area
      </small>
      <p>
        4200 Sq.Ft.
      </p>
    </div>
    <div class="type">
      <small class="title">
        Type
      </small>
      <p>
        4.5 BHK Apartments 
      </p>
    </div>
    <button style={{background:"black",color:"white",width:'50%',marginLeft:"25%"}}>
     <Dialog/>
    </button>
  </div>
</div>
<div class="single_price" style={{width:"25%"}}>
  <p class="typology">
    APARTMENTS
  </p>
  <div class="price_c">
    <h3 class="price">
      <sup>
        ₹
      </sup>
      7.77 Cr*
    </h3>
    <small class="onw">
      Onwards
    </small>
  </div>
  <div class="content">
    <div class="sizes">
      <small class="title">
        Super Area
      </small>
      <p>
        4200 Sq.Ft.
      </p>
    </div>
    <div class="type">
      <small class="title">
        Type
      </small>
      <p>
        4.5 BHK Apartments 
      </p>
    </div>
    <button  style={{background:"black",color:"white",width:'50%',marginLeft:"25%"}}>
    <Dialog/>
    </button>
  </div>
</div>

<div class="single_price snipcss-ME8DR" style={{width:"25%"}}>
  <p class="typology">
    APARTMENTS
  </p>
  <div class="price_c">
    <h3 class="price">
      <sup>
        ₹
      </sup>
      7.77 Cr*
    </h3>
    <small class="onw">
      Onwards
    </small>
  </div>
  <div class="content">
    <div class="sizes">
      <small class="title">
        Super Area
      </small>
      <p>
        4200 Sq.Ft.
      </p>
    </div>
    <div class="type">
      <small class="title">
        Type
      </small>
      <p>
        4.5 BHK Apartments 
      </p>
    </div>
    <button  style={{background:"black",color:"white",width:'50%',marginLeft:"25%"}}>
    <Dialog/>
    </button>
  </div>
</div>


    </div>
    </div>
  )
}

export default Card