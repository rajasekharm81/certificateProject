/* eslint-disable default-case */
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import {Box,Button,TextField,Snackbar,Alert, IconButton,FormControl,InputLabel,OutlinedInput,InputAdornment} from '@mui/material';
import LoadingView from "../loadingView"

import {ThemeProvider} from "@mui/material/styles"
import {theme} from "../customizedComponents"

import "./index.css"

import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import Cookies from "js-cookie"
import logopng from "../../assects/logopng.png"
// import OTPModule from "../otphandler"
import axios from "axios"


class EmployeeSigninForm extends React.Component{
    state={enrollNo:"",
          password:'',
          isLoading:false,
          backErr:false,
          backErrMsg:"",
          passwordVisable:false,
          validUser:false,
          forgotPassword:false,
          isStudent:false
        }

    componentDidMount=()=>{
        this.isUserLogedIn()
    }

    isUserLogedIn=()=>{
      const token = Cookies.get("staffAuthToken")
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
          url : `${process.env.REACT_APP_BASEURL}staff/login/`,
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: {
                username: enrollNo,  
                password: password
              }
        }
        const response = await axios(options);  
        if(response.statusText==="OK"){
          Cookies.set("staffAuthToken",response.data.auth_token, {expires:1})
          Cookies.set("name",response.data.username,{expires:1})
          Cookies.set("role",response.data.role,{expires:1})
          this.setState({isLoading:false,validUser:true})
        }
       
      }
      catch(e){
        if(e.message==='Network Error'){
         this.setState({isLoading:false,backErr:true,backErrMsg:"Something went wrong Please try again"})
        }
        if(e.response.status===500){
          this.setState({isLoading:false,backErr:true,backErrMsg:"Unregistered user... Contact admin for login"})
        }
        if(e.response.status===403){
          this.setState({isLoading:false,backErr:true,backErrMsg:"Incorrect Password... Please try again"})
        }else{
          this.setState({isLoading:false,backErr:true,backErrMsg:e.message})
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
      this.setState({isStudent:true})
    }

    signInView=()=>{
       const {enrollNo,enrollNoErr,password,passwordErr,passwordVisable,forgotPassword,isStudent}=this.state
      return (
        <>
        {forgotPassword?<Navigate to='/student/forgotPassword'/>:null}
        {isStudent?<Navigate to='/student/signin'/>:null}
        <div className='AuthPageSignin'>
           <img style={{height:'150px'}} className='authLogo' alt="Logo" src={logopng}/>
           <div style={{position:"absolute", right:'15px', top:"15px", fontSize:"18px", fontWeight:"bold"}}>
              <Button className="muiButton" color="black" style={{fontSize:"18px", fontWeight:"bold"}} onClick={this.role}>Student Login</Button>
           </div>
           <Box className='AuthpageSigninForm'>
                <h1 style={{textAlign:'center',fontSize:'18px'}}>Employee Log in</h1>
           <TextField
                  required
                  id="employee-login-username"
                  label="User Name"
                  style={{margin:"30px 0 0 0"}}
                  onChange={(event)=>this.setState({enrollNo:event.target.value.toUpperCase()})}
                  value={enrollNo}
                  error={enrollNoErr}
                  autofill="false"
                  fullWidth
                  />

            <FormControl  style={{margin:"30px 0 0 0"}} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                value={password}
                error={passwordErr}
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
                <Button className="muiButton" color="but" variant="contained" onClick={this.onLogin} style={{width:"30%", marginTop:"20px"}} >
                    Login
                </Button>
                {/* <Button size='small' variant="contained" onClick={this.toggleForgotpassword} style={{width:"30%", marginTop:"20px"}} >
                    Forgot Password
                </Button> */}
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
        const{isLoading,backErr,backErrMsg,validUser}=this.state
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
            {validUser?<Navigate to='/approvalsection/dashboard'/>:null}
            </>
             
            )
  }
}

export default EmployeeSigninForm