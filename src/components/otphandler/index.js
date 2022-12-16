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
        const {getotp}=props
        getotp(OTP)
        console.log(OTP)
  }
  
      const resendOtp=()=>{
        const {resendOpt}=props
        resendOpt()
      }

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false}/>
      <ResendOTP maxTime="40" renderButton={renderButton} renderTime={renderTime} style={{marginTop:"10px", justifyContent:"space-around", alignItems:"center"}} onResendClick={resendOtp} />
      {/* <Button variant='Contained' style={{backgroundColor:"blue", color:"white", margin:"10px"}} onClick={verifyUser}>Submit otp</Button> */}
          <Button variant='Contained' style={{backgroundColor:"blue", color:"white", margin:"10px"}} onClick={sendOtp}>Submit otp</Button> 
    </div>
  );
}

export default OTPModule