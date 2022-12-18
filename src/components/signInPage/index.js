/* eslint-disable default-case */
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import {Box,Button,TextField,Snackbar,Alert, IconButton,FormControl,InputLabel,OutlinedInput,InputAdornment} from '@mui/material';
import LoadingView from "../loadingView"

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
          signUp:false
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
        if(response.statusText==="OK"){
          Cookies.set("authToken",response.data.auth_token, {expires:1})
          this.setState({isLoading:false,validUser:true})
        }
        console.log(response)
      }
      catch(e){
        console.log(e)
        this.setState({isLoading:false,backErr:true,backErrMsg:e.message})    
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

    forgotPassword=()=>{
      console.log("forgot Password")
    }

    signInView=()=>{
       const {enrollNo,enrollNoErr,password,passwordErr,passwordVisable}=this.state
      return (
        <div className='AuthPageSignin'>
           <img className='authLogo' alt="Logo" src={logopng}/>
           <Box className='AuthpageSigninForm'>
                <h1>Sign in</h1>
           <TextField
                  required
                  id="student-login-enrollNo"
                  label="Enrollment Number"
                  style={{margin:"30px 0 0 0"}}
                  onChange={(event)=>this.setState({enrollNo:event.target.value.toUpperCase()})}
                  value={enrollNo}
                  error={enrollNoErr}
                  autofill="false"
                  fullWidth
                  />

            {/* <TextField
                  required
                  size="small"
                  id="student-login-mobile"
                  label="Mobile"
                  style={{margin:"10px",width:"90%"}}
                  onChange={(event)=>this.setState({mobile:event.target.value.toUpperCase()})}
                  value={mobile}
                  error={mobileErr}
                  />
            */}
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
                <Button size='small' variant="contained" onClick={this.onLogin} style={{width:"30%", marginTop:"20px"}} >
                    Login
                </Button>
                <Button size='small' variant="contained" onClick={this.forgotPassword} style={{width:"30%", marginTop:"20px"}} >
                    Forgot Password
                </Button>
            </div>
             <Button onClick={()=>this.setState({signUp:true})} style={{alignSelf:"flex-end"}}>Not Registered??? Sign Up</Button>
           </Box>
        </div>
      )
    }

    handleClose=()=>{
      this.setState({backErr:false})
    }

    render(){
        const{isLoading,backErr,backErrMsg,signUp,validUser}=this.state
          return(
            <>
            { this.signInView()}
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
            {validUser?<Navigate to='/'/>:null}
            </>
             
            )
  }
}

export default SigninForm