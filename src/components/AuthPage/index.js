/* eslint-disable default-case */
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import {Box,Button,TextField,Backdrop,CircularProgress,Snackbar,Alert} from '@mui/material';
import Cookies from "js-cookie"
import './index.css'
import axios from 'axios';


class SigninForm extends React.Component{
    state={enrollNo:"", 
    mobile:"",
    enrollNoErr:false, 
    mobileNoErr:false, 
    course:"",
    courseErr:false, 
    userDetailsEntered:false, 
    otp:"", 
    isLoading:false,
    backErrMsg:"",
    backErr:false,
    validUser:false
  }

    isUserLogedIn=()=>{
      const token = Cookies.get("authToken")
      if(token===undefined){
        console.log("")
      }else{
        this.setState({validUser:true})
      }
    }

    verifyUser=async()=>{
      const {otp,enrollNo}=this.state
      this.setState({isLoading:true})
      try{
        const options = {
          url : `${process.env.REACT_APP_BASEURL}account/verify/`,
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: {
              enrollment: enrollNo,
              otp: otp
          }
        }
        const response = await axios(options);  
        if(response.statusText==="OK"){
          Cookies.set("authToken",response.data.auth_token, {expires:1})
          this.setState({isLoading:false,validUser:true})
        }
      }
      catch(e){
        this.setState({isLoading:false,backErr:true,backErrMsg:e.message})    
      }
    }

    signInView=()=>{
       const {enrollNo,mobile,enrollNoErr,mobileNoErr}=this.state
 
      return (
      <div className='AuthPageSignin'>
        <Box className='AuthpageSigninForm' width="300px" backgroundColor="#f7fafc" component="form" sx={{'& .MuiTextField-root': { m: 1, width: '80%' }}}
          autoComplete="off"
        >
        <div style={{borderBottom:"1px solid #dddddd", margin:"0px 0px 20px 0px"}}>
            <h1 style={{color:"#000000", textAlign:"center"}}>Sign in</h1>
        </div>
        <Box sx={{display: 'flex',backgroundColor:"#e8f0fe",borderRadius:"10px",padding:"0px 10px 0px 0px", alignItems: 'flex-end',height:"50px"}}>
        
        <TextField style={{padding:"0px 0px 0px 0px"}} required id="outlined-enroll-input" label="Enrollment Number" variant="standard" value={enrollNo}
          onChange={(event)=>{
            this.setState({enrollNo:event.target.value})
        }}
          onBlur={(event)=>{
            if(event.target.value===""){
                this.setState({enrollNoErr:true})
            }else{
                this.setState({enrollNoErr:false})
            }
        }
        } />
      </Box>
        {enrollNoErr? <p className='err'>Required*</p>:null}
      <Box sx={{display: 'flex',backgroundColor:"#e8f0fe",borderRadius:"10px",padding:"0px 10px 0px 0px", alignItems: 'flex-end',marginTop:"10px",height:"50px"}}>
        {/* <AiOutlineMobile style={{fontSize:"30px", color:"grey", paddingBottom:"10px",backgroundColor:"white",height:"80%",width:"35px"}} sx={{color: 'action.active'}} /> */}
        <TextField type="number" style={{padding:"0px 0px 0px 0px"}} required id="outlined-mobile-input" label="Mobile Number" variant="standard" value={mobile}
          onChange={(event)=>{
            this.setState({mobile:String(event.target.value)})
        }}
        onBlur={(event)=>{
            if(event.target.value===""){
                this.setState({mobileNoErr:true})
            }if(event.target.value!=="" && event.target.length!==10){
                this.setState({mobileNoErr:true})
            }
            if(event.target.value!=="" && event.target.length===10){
                this.setState({mobileNoErr:false})
            }
            else{
                this.setState({mobileNoErr:false})
            }
        }
        } />
      </Box>

      {mobileNoErr? <p className='err'>Required*</p>:null}
    
      <div className='authPageBtnContainer'>
      <Button onClick={()=>{
        const {enrollNo,mobile}=this.state
        if(enrollNo===""){
            this.setState({enrollNoErr:true})
        }
        if(mobile===""){
            this.setState({mobileNoErr:true})
        }
        if(mobile.length!==10){
          this.setState({mobileNoErr:true})
        }
        if(enrollNo!=="" && mobile!=="" && mobile.length===10){
          this.setState({userDetailsEntered:true})
        }
    }} variant="outlined">Submit</Button>
      <Button onClick={()=>{
        this.setState({enrollNo:"", mobile:"",enrollNoErr:false, mobileNoErr:false,courseErr:false, course:""})
    }} variant="outlined">Reset</Button>
      </div>
    </Box>
    </div>
    
  )
    }

    verifyView=()=>{
      const {otp,isLoading,backErr,backErrMsg}=this.state
      return(
        <div className='AuthPageSignin'>
         {isLoading?<Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>:null}
            {backErr?<Snackbar open autoHideDuration={4000} anchorOrigin={{ vertical:"top", horizontal:"right" }} onClose={()=>this.setState({backErr:false})}>
        <Alert onClose={()=>this.setState({backErr:false})} severity="error" sx={{ width: '100%' }}>
          OOPS!!! {backErrMsg}
        </Alert>
      </Snackbar>:null}
          <Box style={{backgroundColor:"white",boxShadow:"0px 0px 10px 0px grey",padding:"20px", width:"350px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <h3>Please Enter OTP</h3>
              <TextField size='small' value={otp} onChange={(event)=>this.setState({otp:event.target.value})} type="number"/>
             
                <Button variant='Contained' style={{backgroundColor:"blue", color:"white", margin:"10px"}} onClick={this.verifyUser}>Submit otp</Button>
                
               </Box>
        </div>
      )
    }

    render(){
      const{userDetailsEntered,validUser}=this.state
      this.isUserLogedIn()
          return(
              <>
                {userDetailsEntered? this.verifyView():this.signInView()}
                {validUser?<Navigate to="/requests/odrequest" />:null}
              </>
            )
  }
}

export default SigninForm