/* eslint-disable no-sequences */
import OTPInput, { ResendOTP } from "otp-input-react";
import {Button} from "@mui/material"
import { useState } from "react";


const renderButton = (buttonProps) => {
  return <Button {...buttonProps} size="small">Resend</Button>;
};
const renderTime = (remainingtime) => {
  return <span>{remainingtime} seconds remaining</span>;
};


function OTPModule(props) {

  const [OTP, setOTP] = useState("");

      const sendOtp=()=>{
            const {verifyotp}=props
            verifyotp(OTP)
      }
  
      const resendOtp=()=>{
        const {resendOtp}=props
        resendOtp()
      }

  return (
    <div style={{display:"flex", flexDirection:"column",width:'300px',justifyContent:"center",alignItems:"center",backgroundImage:`linear-gradient(to right,#86BFF0,#52FFFF)`,padding:"50px",borderRadius:'10px'}}>
      <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false}/>
      <ResendOTP maxTime="40" renderButton={renderButton} renderTime={renderTime} style={{marginTop:"10px", justifyContent:"space-around", alignItems:"center"}} onResendClick={resendOtp} />
      <Button variant='Contained' style={{backgroundColor:"blue", color:"white", margin:"10px"}} onClick={sendOtp}>Submit otp</Button> 
    </div>
  );
}

export default OTPModule