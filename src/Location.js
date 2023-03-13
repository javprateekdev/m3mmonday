import React from 'react'

const Location = () => {
  return (
    <div  style={{background:"black",height:"80vh",display:"flex"}}>
       <div style={{width:"80%",background:"black"}}>
       <div style={{height:"10vh",borderLeft:"3px solid #b5943b",letterSpacing: "1px",fontSize: "28px", margin: "3%"}}>
                <div style={{display:"block"}}>
                <div style={{marginLeft:"50px",fontSize:"28px",fontFamily: 'Cursive',color:"white"}}>A WORLD OF LUXURY </div>
                <div style={{marginLeft:"50px",fontSize:"32px",color:"white",fontWeight:"700"}} className="gold">Awaits You at The M3M</div>
                  <div style={{display:"block",width:"75%",marginTop:"20px",color:"white"}}>
                  <div style={{fontSize:"18px",display:"flex",margin:"1%",letterSpacing:"1px",lineHeight:"1.5",fontWeight:"500"}} className='fontinter'>M3M Noida Sector 94 is a luxurious residential project located in Sector 94,Noida,Uttar Pradesh.The Project is Located on the Noida Expressway,providing easy Connectivity to Delhi and other parts of NCR.</div>
                  <div style={{fontSize:"18px",display:"flex",margin:"1%",letterSpacing:"1px",marginTop:"40px"}}><img src="https://i.imgur.com/2IKW0Q3.png" style={{width:"38px",marginRight:"10px",height:"35px"}} className='fontinter'/>Located on the Noida Expressway for easy Connectivity</div>
                  <div style={{fontSize:"18px",display:"flex",margin:"1%"}}><img src="https://i.imgur.com/2IKW0Q3.png" style={{width:"38px",marginRight:"10px",height:"35px"}} className='fontinter'/>Mahamaya Flyover - 15mins * Drive</div>
                  <div style={{fontSize:"18px",display:"flex",margin:"1%"}}><img src="https://i.imgur.com/2IKW0Q3.png" style={{width:"38px",marginRight:"10px",height:"35px"}} className='fontinter'/>Sector 18 Market - 20mins * Drive </div>
                  <div style={{fontSize:"18px",display:"flex",margin:"1%"}}><img src="https://i.imgur.com/2IKW0Q3.png" style={{width:"38px",marginRight:"10px",height:"35px"}} className='fontinter'/>Akshardham Temple -30 mins*Drive</div>
                  <div style={{fontSize:"18px",display:"flex",margin:"1%"}}><img src="https://i.imgur.com/2IKW0Q3.png" style={{width:"38px",marginRight:"10px",height:"35px"}} className='fontinter'/>Noida-Greater Noida Expressway - 5 mins*Drive</div>
                  <div style={{fontSize:"18px",display:"flex",margin:"1%"}}><img src="https://i.imgur.com/2IKW0Q3.png" style={{width:"38px",marginRight:"10px",height:"35px"}} className='fontinter'/>Indira Gandhi International Airport - 45 mins*Drive</div>
                  </div>
                    </div>
                    </div>
       </div>
       <div className="mapback">
        <div style={{width:"600px",height:"500px",background:"pink",position:"relative",right:"80%",top:"15%"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112144.16947250855!2d77.25716913301493!3d28.554585726161765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce510732f5a5d%3A0xa99360b115b2d6e!2sM3M%20Sector%2094%20Residential!5e0!3m2!1sen!2sin!4v1678362057447!5m2!1sen!2sin"  width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
       </div>
    </div>
  )
}

export default Location