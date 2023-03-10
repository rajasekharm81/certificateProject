/* eslint-disable default-case */
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import {Box,Button,TextField,Snackbar,Alert, IconButton,FormControl,InputLabel,OutlinedInput,InputAdornment} from '@mui/material';
import LoadingView from "../loadingView"

import { ThemeProvider } from '@mui/material/styles';
import {theme} from "../customizedComponents"

import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import Cookies from "js-cookie"
import './index.css'
import logopng from "../../assects/logopng.png"
// import OTPModule from "../otphandler"
import axios from "axios"


class SigninForm extends React.Component{
    state={enrollNo:"", 
          mobile:"",
          password:'',
          isLoading:false,
          backErr:false,
          backErrMsg:"",
          passwordVisable:false,
          validUser:false,
          signUp:false,
          forgotPassword:false,
          isEmployee:false,
        }

    componentDidMount=()=>{
        this.isUserLogedIn()
    }

    isUserLogedIn=()=>{
      const token = Cookies.get("authToken")
      if(token===undefined){
        this.setState({validUser:false})
      }else{
        this.setState({validUser:true})
      }
    }

    verifyUser=async()=>{
      const {enrollNo,password}=this.state
      this.setState({isLoading:true})
      try{
        const options = {
          url : `${process.env.REACT_APP_BASEURL}account/login/`,
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: {
                enrollment: enrollNo,
                password: password
              }
        }
        const response = await axios(options);
        const keyData = { branchId:response.data.student_branch_id,
                          ProgId:response.data.program_id,
                          progType:response.data.is_ug,
                          studentName:response.name,
                          hallticketNo:response.enrollment
                        }
        if(response.statusText==="OK"){
          Cookies.set("authToken",response.data.auth_token, {expires:1})
          Cookies.set("studentName",response.data.name, {expires:1})
          Cookies.set("studentEnroll",response.data.enrollment, {expires:1})
          Cookies.set("keydata",JSON.stringify(keyData),{expires:1})
          this.setState({isLoading:false,validUser:true})
        }
        console.log(response)
      }
      catch(e){
        console.log(e)
        if(e.message==='Network Error'){
         this.setState({isLoading:false,backErr:true,backErrMsg:"Something went wrong Please try again"})
        }
        if(e.response.status===500){
          this.setState({isLoading:false,backErr:true,backErrMsg:"Unregistered user... Please sign up"})
        }
        if(e.response.status===403){
          this.setState({isLoading:false,backErr:true,backErrMsg:"Incorrect Password... Please try again"})
        }
        else{
         this.setState({isLoading:false,backErr:true,backErrMsg:"Something went wrong Please try again"})
        }
            
      }
    }

    onLogin=()=>{
      const {enrollNo,password}=this.state
      if(enrollNo===""){
        this.setState({enrollNoErr:true})
      }
      if(enrollNo!==""){
        this.setState({enrollNoErr:false})
      }
      if(password===""){
        this.setState({passwordErr:true})
      }
      if(password!==""){
        this.setState({passwordErr:false})
      }
      if(enrollNo!=="" && password!==""){
        this.verifyUser()
      }
    }

    toggleForgotpassword=()=>{
      this.setState({forgotPassword:true})
    }

    role=()=>{
      this.setState({isEmployee:true})
    }

    signInView=()=>{
       const {enrollNo,enrollNoErr,password,passwordErr,passwordVisable,forgotPassword,isEmployee}=this.state
      return (
        <>
        {forgotPassword?<Navigate to='/student/forgotPassword'/>:null}
        {isEmployee?<Navigate to='/employeelogin'/>:null}

        <div className='AuthPageSignin'>
              <img style={{height:'150px'}} className='authLogo' alt="Logo" src={logopng}/>
           <div style={{position:"absolute", right:'10px', top:"10px", fontWeight:"bold"}}>
              <Button className="muiButton" color="black" style={{fontSize:"16px",fontWeight:'bold'}} onClick={this.role}>Employee Login</Button>
           </div>
           <Box className='AuthpageSigninForm'>
                <h1 style={{textAlign:'center',fontSize:'18px', fontFamily:'verdana'}}>Student Log in</h1>
           <TextField
                  required
                  id="student-login-enrollNo"
                  label="Hallticket Number"
                  style={{margin:"30px 0 0 0"}}
                  onChange={(event)=>this.setState({enrollNo:event.target.value.toUpperCase()})}
                  value={enrollNo}
                  error={enrollNoErr}
                  fullWidth
                  size='small'
                  />
            <FormControl  style={{margin:"30px 0 0 0"}} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                value={password}
                error={passwordErr}
                size='small'
                type={passwordVisable ? 'text' : 'password'}
                onChange={(event)=>this.setState({password:event.target.value})}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={()=>{this.setState((prevState)=>({passwordVisable:!prevState.passwordVisable}))}}
                      edge="end"
                    >
                      {passwordVisable ? <AiFillEye style={{fontSize:"28px"}} /> : <AiFillEyeInvisible style={{fontSize:"28px"}} />}
                    </IconButton>
                  </InputAdornment>
            }
            label="Password"
          />
            </FormControl>
            <div className='authPageBtnContainer'>
                <Button color='but' className="muiButton" size='small' variant="contained" onClick={this.onLogin} style={{width:"40%", marginTop:"20px"}} >
                    Login
                </Button>
                <Button color='but' className="muiButton" size='small' variant="contained" onClick={this.toggleForgotpassword} style={{width:"40%", marginTop:"20px"}} >
                    Forgot Password
                </Button>
            </div>
            <div style={{display:'flex',justifyContent:"center",margin:"15px 0 0 0"}}>
              {/* <ThemeProvider theme={theme}>
                <Button className="muiButton" color="lableText" onClick={()=>this.setState({signUp:true})} style={{alignSelf:"flex-end",fontWeight:'bold',fontSize:'14px'}}>Not Registered??? Sign Up</Button>
              </ThemeProvider> */}
            </div>
           </Box>
        </div>
         </>
      )
    }

    handleClose=()=>{
      this.setState({backErr:false})
    }

    render(){
        const{isLoading,backErr,backErrMsg,signUp,validUser}=this.state
          return(
            <>
            <ThemeProvider theme={theme}>
            { this.signInView()}
            </ThemeProvider>
            <LoadingView isLoading={isLoading}/>
              <Snackbar open={backErr}
                        autoHideDuration={6000} 
                        onClose={this.handleClose} 
                        anchorOrigin={{vertical:"top",horizontal:"right"}} 
                        >
                <Alert onClose={this.handleClose} severity="error" sx={{ width: '100%' }}>
                  {backErrMsg}
                </Alert>
              </Snackbar>
            {signUp?<Navigate to='/student/signup'/>:null}
            {validUser?<Navigate to='/student_dash_board'/>:null}
            </>
             
            )
  }
}

export default SigninForm