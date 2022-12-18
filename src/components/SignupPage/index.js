import {Component} from 'react';
import { Navigate } from 'react-router-dom';
import { Box,TextField,Button,Snackbar,Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import validator from 'validator';
import {format} from 'date-fns'


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

class SignUpFrom extends Component{
    state={name:"",
            fatherName:"",
            email:"",
            enrollmentNo:"",
            dob:'',
            mobileNo:'',
            password:"",
            confirmPassword:"",
            nameErr:false,
            fatherNameErr:false,
            emailErr:false,
            enrollmentNoErr:false,
            dobErr:false,
            mobileNoErr:false,
            passwordErr:false,
            confirmPasswordErr:false,
            passwordMatched:true,
            allDataEntered:false,
            otpSent:false,
            otpVerifiedSuccessfully:false,
            backErr:false,
            backErrMsg:"",
            severity:"",
            alreadyRegistered:false,
            isLoading:false
        }

        navigateToSignIn=()=>{
           setTimeout(() => {
                this.setState({otpVerifiedSuccessfully:true});
            }, 3000);
        }

        updateEmail=(event)=>{
            const email = validator.isEmail(event.target.value)
            if(email){
                this.setState({email:event.target.value,emailErr:false})
            }else{
                this.setState({email:event.target.value,emailErr:true})
            }
        }

        updateMobilenumber=(event)=>{
            const mobile = validator.isMobilePhone(event.target.value,'en-IN')
            if(mobile){
                this.setState({mobileNo:event.target.value,mobileNoErr:false})
            }else{
                this.setState({mobileNo:event.target.value,mobileNoErr:true})
            }
        }
        
        updateDob=(event)=>{
            this.setState({dob:event.target.value})
        }

        reset=()=>{
            this.setState({ name:"",
                            fatherName:"",
                            email:"",
                            enrollmentNo:"",
                            dob:'',
                            mobileNo:'',
                            password:"",
                            confirmPassword:"",
                            nameErr:false,
                            fatherNameErr:false,
                            emailErr:false,
                            enrollmentNoErr:false,
                            dobErr:false,
                            mobileNoErr:false,
                            passwordErr:false,
                            confirmPasswordErr:false,
                            passwordMatched:true
                        })
        }

        callForOtp=async ()=>{
            const {name,fatherName,email,dob,mobileNo,password,enrollmentNo}=this.state
            try{
                const options = {
                url:`${process.env.REACT_APP_BASEURL}account/register/`,
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                    },
                data:{name: name,
                        father_name: fatherName,
                        email: email,
                        enrollment: enrollmentNo,
                        mobile: mobileNo,
                        password:password,
                        confirm_password: password,
                        date_of_birth: format(new Date(dob), 'dd/MM/yyyy')
                    }
            }
            const response = await axios(options)
                console.log(response)
                this.setState({otpSent:true,isLoading:false})
            }catch(e){
                this.setState({backErr:true,backErrMsg:e.msg,isLoading:false})
            }
            
        }

        onSubmit=()=>{
            const {name,fatherName,email,enrollmentNo,dob,mobileNo,emailErr,mobileNoErr,password,confirmPassword} = this.state
            this.setState({isLoading:true})
            if(name===""){
                this.setState({nameErr:true})
            }
            if(name!==""){
                this.setState({nameErr:false})
            }
            if(fatherName===""){
                this.setState({fatherNameErr:true})
            }
            if(fatherName!==""){
                this.setState({fatherNameErr:false})
            }
            if(email===""){
                this.setState({emailErr:true})
            }
            if(email!==""){
                this.setState({emailErr:false})
            }
            if(enrollmentNo===""){
                this.setState({enrollmentNoErr:true})
            }
            if(enrollmentNo!==""){
                this.setState({enrollmentNoErr:false})
            }
            if(dob===""){
                this.setState({dobErr:true})
            }
            if(dob!==""){
                this.setState({dobErr:false})
            }
            if(mobileNo===''){
                this.setState({mobileNoErr:true})
            }
            if(mobileNo!=='' && mobileNoErr===false){
                this.setState({mobileNoErr:false})
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
            if(name!=="" && fatherName!=="" && enrollmentNo!=="" && emailErr===false && dob!=="" && mobileNoErr===false && password===confirmPassword && password!=="" && confirmPassword!==''){
                this.setState({allDataEntered:true},this.callForOtp)
            }
        }

        registerForm=()=>{
            const {name,
                    fatherName,
                    email,
                    enrollmentNo,
                    dob,
                    mobileNo,
                    nameErr,
                    fatherNameErr,
                    emailErr,
                    enrollmentNoErr,
                    dobErr,
                    mobileNoErr,
                    password,
                    confirmPassword,
                    passwordErr,
                    confirmPasswordErr,
                    passwordMatched}=this.state
            return(
                <Box className="registrationForm"> 
                        <h1 style={{padding:"10px"}}>Please Register</h1>
        {/* name */}         
                        <TextField
                            required
                             size="small"
                            id="reg-student-name"
                            label="Name"
                            style={{margin:"10px",width:"90%"}}
                            onChange={(event)=>this.setState({name:event.target.value.toUpperCase()})}
                            value={name}
                            error={nameErr}
                            />
                            
    {/* fatherName */}
                        <TextField
                            required
                             size="small"
                            id="reg-father-name"
                            label="Father Name"
                            style={{margin:"10px",width:"90%"}}
                            onChange={(event)=>this.setState({fatherName:event.target.value.toUpperCase()})}
                            value={fatherName}
                            error={fatherNameErr}
                            />
    {/* emailId */}
                        <TextField
                            required
                             size="small"
                            id="reg-student-email"
                            label="Email id"
                            style={{margin:"10px",width:"90%"}}
                            onChange={this.updateEmail}
                            value={email}
                            error={emailErr}
                            />

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

    {/* Dob */}
                        <TextField
                            required
                             size="small"
                            id="reg-student-dob"
                            label="Date of Birth"
                            style={{margin:"10px",width:"90%"}}
                            type="date"
                            onChange={this.updateDob}
                            value={dob}
                            error={dobErr}
                            focused
                            />
    {/* mobile */}
                        <TextField
                            required
                             size="small"
                            id="reg-student-mobile"
                            label="Mobile"
                            style={{margin:"10px",width:"90%"}}
                            type="number"
                            value={mobileNo}
                            onChange={this.updateMobilenumber}
                            error={mobileNoErr}
                            />

                        <TextField
                            required
                             size="small"
                            id="reg-student-password"
                            label="Password"
                            style={{margin:"10px",width:"90%"}}
                            value={password}
                            onChange={(event)=>this.setState({password:event.target.value})}
                            error={passwordErr}
                            />
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
                            <Button onClick={this.reset} variant="contained" color="reset">Reset</Button>
                            <Button onClick={this.onSubmit} variant="contained" color="success">Register</Button>
                        </div>
                        <Button onClick={()=>this.setState({alreadyRegistered:true})}>Registered User??? Click me to sign in</Button>
                        </Box>
            )
        }

        verifyotp=async(otp)=>{
            try{
                const {enrollmentNo}=this.state
                const options = {
                    url : `${process.env.REACT_APP_BASEURL}account/verify/`,
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
                                    backErrMsg:"Registered Successfully. Please login to Continue",
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
        const{otpSent,otpVerifiedSuccessfully,backErr,backErrMsg,alreadyRegistered,severity,isLoading}=this.state
        return(
            <>
             <ThemeProvider theme={theme}>
                <div className='SignupMainPage'>
                    <img className='universityLogo' src={logopng} alt="logo"/>
                    <img className='registrationImage' src={registrationt} alt='regImage'/>
                    {otpSent?<OTPModule resendOtp={this.callForOtp} verifyotp={this.verifyotp} />:this.registerForm()}
                    {otpVerifiedSuccessfully?<Navigate to="/student/signin"/>:null}
                    {alreadyRegistered?<Navigate to="/student/signin"/>:null}
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

export default SignUpFrom