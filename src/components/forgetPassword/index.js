import {Component} from 'react';
import { Navigate } from 'react-router-dom';
import { Box,TextField,Button,Snackbar,Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import registrationt from "../../assects/registrationt.png"
import logopng from '../../assects/logopng.png'

import OTPModule from "../otphandler"
import LoadingView from '../loadingView';

import "./index.css"
import axios from 'axios';




const theme = createTheme({
  palette: {
    regTextField: {
      // Purple and green play nicely together.
      main: "#1173ef",
      contrastText: '#fff',
    },
    success: {
      // This is green.A700 as hex.
      main: '#11cb5f',
      contrastText: '#ffffff',
    },
    reset:{
        main: '#FFE6CC',
        contrastText: '#D46300',
    }
  },
});




class ForgotPassword extends Component{
   state={  enrollmentNo:"",
            password:"",
            confirmPassword:"",
            enrollmentNoErr:false,
            passwordErr:false,
            confirmPasswordErr:false,
            passwordMatched:true,
            allDataEntered:false,
            otpSent:false,
            otpVerifiedSuccessfully:false,
            backErr:false,
            backErrMsg:"",
            severity:"",
            isLoading:false,
            alreadyRegistered:false
        }

        navigateToSignIn=()=>{
           setTimeout(() => {
                this.setState({otpVerifiedSuccessfully:true});
            }, 3000);
        }

        reset=()=>{
            this.setState({ 
                            enrollmentNo:"",
                            password:"",
                            confirmPassword:"",
                            enrollmentNoErr:false,
                            passwordErr:false,
                            confirmPasswordErr:false,
                        })
        }

        callForOtp=async ()=>{
            const {password,enrollmentNo}=this.state
            try{
                const options = {
                url:`${process.env.REACT_APP_BASEURL}account/reset-password/`,
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                    },
                data:{  enrollment: enrollmentNo,
                        new_password:password,
                        confirm_new_password: password,
                    }
            }
            const response = await axios(options)
                console.log(response)
                this.setState({otpSent:true,isLoading:false})
            }catch(e){
                if(e.response.status===500){
          this.setState({isLoading:false,backErr:true,backErrMsg:"Unregistered user... Please sign up"})
            }else{
                this.setState({backErr:true,backErrMsg:`${e.message}...Please try again`,isLoading:false,severity:"error"})
            }
        }
            
        }

        onSubmit=()=>{
            const {enrollmentNo,password,confirmPassword} = this.state
            this.setState({isLoading:true})
            if(enrollmentNo===""){
                this.setState({enrollmentNoErr:true})
            }
            if(enrollmentNo!==""){
                this.setState({enrollmentNoErr:false})
            }
            if(password===""){
                this.setState({passwordErr:true})
            }
            if(password!==""){
                this.setState({passwordErr:false})
            }
            if(confirmPassword===""){
                this.setState({confirmPasswordErr:true})
            }
            if(confirmPassword!==""){
                this.setState({confirmPasswordErr:false})
            }
            if(password === confirmPassword){
                this.setState({passwordMatched:true})
            }
            if(password!==confirmPassword){
                this.setState({passwordMatched:false})
            }
            if(enrollmentNo!=="" && password===confirmPassword && password!=="" && confirmPassword!==''){
                this.setState({allDataEntered:true},this.callForOtp)
            }
            else{this.setState({isLoading:false})}
        }

        passwordResetForm=()=>{
            const { enrollmentNo,
                    enrollmentNoErr,
                    password,
                    confirmPassword,
                    passwordErr,
                    confirmPasswordErr,
                    passwordMatched}=this.state
            return(
                <Box className="registrationForm"> 
                        <h1 style={{padding:"10px"}}>Reset Password</h1>

    {/* enrollmentNo */}
                        <TextField
                            required
                             size="small"
                            id="reg-father-enroll"
                            label="Enrollment Number"
                            style={{margin:"10px",width:"90%"}}
                            onChange={(event)=>this.setState({enrollmentNo:event.target.value.toUpperCase()})}
                            value={enrollmentNo}
                            error={enrollmentNoErr}
                            />
{/* password */}
                        <TextField
                            required
                             size="small"
                            id="reg-student-password"
                            label="New Password"
                            style={{margin:"10px",width:"90%"}}
                            value={password}
                            onChange={(event)=>this.setState({password:event.target.value})}
                            error={passwordErr}
                            />
{/* confirm password */}
                        <TextField
                            required
                             size="small"
                            id="reg-student-ConfirmPassword"
                            label="Confirm Password"
                            style={{margin:"10px",width:"90%"}}
                            value={confirmPassword}
                            onChange={(event)=>this.setState({confirmPassword:event.target.value})}
                            error={confirmPasswordErr}
                            />
                        {passwordMatched?null:<p>Passwords not Matched</p>}
                        <div style={{width:"80%", display:"flex", justifyContent:"space-around",marginTop:"20px"}}>
                            <Button className="muiButton" onClick={this.reset} variant="contained" color="reset">Reset</Button>
                            <Button className="muiButton" onClick={this.onSubmit} variant="contained" color="success">
                                Update Password
                            </Button>
                        </div>
                        <Button className="muiButton" onClick={()=>this.setState({alreadyRegistered:true})}>Click me to signin page</Button>
                        </Box>
            )
        }

        verifyotp=async(otp)=>{
            try{
                const {enrollmentNo}=this.state
                const options = {
                    url : `${process.env.REACT_APP_BASEURL}account/verify-reset-password/`,
                    method:"POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        },
                    data:{
                            enrollment: enrollmentNo,
                            otp:otp
                        }
                    }
                const response = await axios(options)
                if(response.status===200){
                    this.setState({backErr:true,
                                    backErrMsg:"Password Changed Successfully. Please login to Continue",
                                    severity:'success'},this.navigateToSignIn)
                }
            }catch(e){
                if(e.response.request.status===403){
                    this.setState({backErr:true,backErrMsg:e.response.data.detail.toUpperCase(),severity:'error'})
                }else{
                    this.setState({backErr:true,backErrMsg:e.msg})
                }
                
                
            }
            
        }

        handleClose=()=>{
            this.setState({backErr:false})
        }

    render(){
        const{otpSent,otpVerifiedSuccessfully,backErr,backErrMsg,severity,isLoading,alreadyRegistered}=this.state
        return(
            <>
            {alreadyRegistered?<Navigate to='/student/signin'/>:null}
             <ThemeProvider theme={theme}>
                <div className='SignupMainPage'>
                    <img style={{height:'150px'}} className='universityLogo' src={logopng} alt="logo"/>
                    <img className='registrationImage' src={registrationt} alt='regImage'/>
                    {otpSent?<OTPModule resendOtp={this.callForOtp} verifyotp={this.verifyotp} />:this.passwordResetForm()}
                    {otpVerifiedSuccessfully?<Navigate to="/student/signin"/>:null}
                </div>  
            </ThemeProvider>
            <Snackbar open={backErr}
                        autoHideDuration={6000} 
                        onClose={this.handleClose} 
                        anchorOrigin={{vertical:"top",horizontal:"right"}} 
                        >
                <Alert onClose={this.handleClose} severity={severity} sx={{ width: '100%' }}>
                  {backErrMsg}
                </Alert>
              </Snackbar>
              <LoadingView isLoading={isLoading}/>
            </>
        )
    }
}

export default ForgotPassword