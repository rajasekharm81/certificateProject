/* eslint-disable default-case */
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import {Button} from "@mui/material"

import {AiOutlineArrowRight} from "react-icons/ai"
import './index.css'
import logopng from "../../assects/logopng.png"

import { ThemeProvider } from '@mui/material/styles';
import {theme} from "../customizedComponents"

class LandingPage extends React.Component{
    state={
          signUp:false,
          studentLogin:false,
          employeeLogin:false
        }

    LandingPageView=()=>{
      return (
        <>
        <div className='AuthPageSignin'>
           <img style={{height:'150px'}} className='authLogo' alt="Logo" src={logopng}/>
           <ThemeProvider theme={theme}>
              <div style={{position:"absolute", right:'10px', top:"10px"}}>
                    <Button className="muiButton" onClick={()=>this.setState({studentLogin:true})} color="black" style={{fontSize:'16px',fontWeight:'bolder'}}>Student Login</Button>
                    <Button className="muiButton" onClick={()=>this.setState({employeeLogin:true})} variant="text" color="black" style={{fontSize:'16px',fontWeight:'bolder'}}>Employee Login</Button>
              </div>
              <div style={{display:'flex', justifyContent:'center',flexDirection:"column",height:'100vh', width:'90vw'}}>
                <h1  style={{color:'#377EF9',padding:'10px'}}>Welcome</h1>
                <h1 style={{fontSize:'28px',padding:'10px'}}>ANU e-Services</h1>
                <Button className="muiButton" onClick={()=>this.setState({signUp:true})} endIcon={<AiOutlineArrowRight style={{fontSize:'22px',color:'white'}}/>} variant='contained' color="approve" style={{fontSize:'16px',fontWeight:'bolder',alignSelf:"flex-start",padding:'10px',margin:'10px'}}>Registration</Button>
                
              </div>
            </ThemeProvider>
        </div>
         </>
      )
    }

    render(){
        const{signUp,studentLogin,employeeLogin}=this.state
          return(
            <>
            {this.LandingPageView()}
            {signUp?<Navigate to='/student/signup'/>:null}
            {studentLogin?<Navigate to='/student/signin'/>:null}
            {employeeLogin?<Navigate to='/employeelogin'/>:null}
            </>
             
            )
  }
}

export default LandingPage