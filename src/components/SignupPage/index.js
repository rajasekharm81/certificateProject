import {Component} from 'react';
import { Navigate } from 'react-router-dom';
import { Box,TextField,Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import validator from 'validator';
import {format} from 'date-fns'


import registrationt from "../../assects/registrationt.png"
import logopng from '../../assects/logopng.png'

import "./index.css"



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
            dob:'',
            mobileNo:'',
            password:"",
            confirmPassword:"",
            nameErr:false,
            fatherNameErr:false,
            emailErr:false,
            dobErr:false,
            mobileNoErr:false,
            passwordErr:false,
            confirmPasswordErr:false,
            passwordMatched:true,
            allDataEntered:false,
            otpSent:false
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
                            dob:'',
                            mobileNo:'',
                            password:"",
                            confirmPassword:"",
                            nameErr:false,
                            fatherNameErr:false,
                            emailErr:false,
                            dobErr:false,
                            mobileNoErr:false,
                            passwordErr:false,
                            confirmPasswordErr:false,
                            passwordMatched:true,
                        })
        }

        callForOtp=()=>{
            const {name,fatherName,email,dob,mobileNo,password}=this.state
            const data = {name:name,
                          fatherName:fatherName,
                          emailId:email,
                          Dob:format(new Date(dob), 'dd/MM/yyyy'),
                          mobile:mobileNo,
                          password:password
                        } 
            console.log(data)
        }

        onSubmit=()=>{
            const {name,fatherName,email,dob,mobileNo,emailErr,mobileNoErr,password,confirmPassword} = this.state

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
            if(name!=="" && fatherName!=="" && emailErr===false && dob!=="" && mobileNoErr===false && password===confirmPassword && password!=="" && confirmPassword!==''){
                this.setState({allDataEntered:true},this.callForOtp)
            }
        }

        registerForm=()=>{
            const {name,
                    fatherName,
                    email,
                    dob,
                    mobileNo,
                    nameErr,
                    fatherNameErr,
                    emailErr,
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
                            id="reg-student-email"
                            label="Email id"
                            style={{margin:"10px",width:"90%"}}
                            onChange={this.updateEmail}
                            value={email}
                            error={emailErr}
                            />
    {/* Dob */}
                        <TextField
                            required
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
                            id="reg-student-password"
                            label="Password"
                            style={{margin:"10px",width:"90%"}}
                            value={password}
                            onChange={(event)=>this.setState({password:event.target.value})}
                            error={passwordErr}
                            />
                        <TextField
                            required
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
                        </Box>
            )
        }

    render(){
        const{otpSent}=this.state
        return(
             <ThemeProvider theme={theme}>
                <div className='SignupMainPage'>
                    <img className='universityLogo' src={logopng} alt="logo"/>
                    <img className='registrationImage' src={registrationt} alt='regImage'/>
                    {otpSent?<Navigate to="/requests/login"/>:this.registerForm()}
                </div>  
            </ThemeProvider>
        )
    }
}

export default SignUpFrom