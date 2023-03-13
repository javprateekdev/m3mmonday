import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Dialog} from '@mui/material'

const Dialogbox = () => {
   
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dwi8um6', 'template_vh2lnie', form.current, '35jxlMRE2-DZ_dIhv')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
  };
 
  

  return (
    <div >
      <div  style={{padding:"5px",borderRadius:"10px",fontSize:"20px",fontWeight:"500"}} onClick={handleClickOpen}>Check Floor Plan
      </div>
      <Dialog open={open} onClose={handleClose}>
     
      <div >
      <div>
        <div>
          <div style={{height:"620px",width:"480px",border:"5px solid #161a2d",textAlign:"center"}}>
      
            <form ref={form} onSubmit={sendEmail}>
    
            <div class="modal-body snipcss-CTfpF">
  <h3 class="projectName">
    M3M-94
  </h3>
  <h5 class="location">
    SECTOR-94, NOIDA
  </h5>
  <h4 class="form_price">
    Starts At 5.92 Cr*
    <span>
      Onwards
    </span>
  </h4>
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    ×
  </button>
  <div class="form-group mx-0">
    <label for="name">
      Name*
    </label>
    <input type="text" class="form-control" id="qSenderNamepopup" name="name" placeholder="Ex: xyz" autocomplete="false" title="Enter Name"/>
    <div class="outline">
    </div>
  </div>
  <div class="form-group mx-0">
    <label for="email">
      Email*
    </label>
    <input type="email" class="form-control" name="email" id="qEmailIDpopup" placeholder="Ex: xyz@gmail.com" title="Enter Email"/>
    <div class="outline">
    </div>
  </div>
  <div class="form-group mx-0">
    <label for="number">
      Mobile Number*
    </label>
    <input type="text" class="form-control" name="number" id="qMobileNopopup" placeholder="Ex: 9999999999" title="Enter Number"/>
    <div class="outline">
    </div>
  </div>
 
  <button type="submit" class="btn dark_btn submit_btn" id="SubmitQuerypopup" title="Send Message">
    Submit
  </button>
</div>
    </form>
 
              
            </div>
            
          </div>
        </div>
      </div>

 
       
      </Dialog>
    </div>
  );
}

export default Dialogbox ;