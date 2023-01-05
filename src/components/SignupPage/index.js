import {Component} from 'react';
import { Navigate } from 'react-router-dom';
import { Box,Button,Snackbar,Alert,FormControl,Select,MenuItem } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import validator from 'validator';
import {format} from 'date-fns'


import registrationt from "../../assects/registrationt.png"
import logopng from '../../assects/logopng.png'

import OTPModule from "../otphandler"
import LoadingView from '../loadingView';

import { CssTextField } from '../customizedComponents';
import {theme} from "../customizedComponents"

import "./index.css"
import axios from 'axios';





class SignUpFrom extends Component{
    state={ 
// Data
            programTypeData:[],
            programsData:[],
            branchesData:[],
// student information
            name:"",
            fatherName:"",
            email:"",
            enrollmentNo:"",
            dob:'',
            mobileNo:'',
            password:"",
            confirmPassword:"",
// program details
            is_ug:"",
            programId:'',
            studentBranchID:'',
// program details error handling
            is_ugErr:false,
            programIdErr:false,
            studentBranchIDErr:false,
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

        componentDidMount(){
            this.getProgCategories()
        }

        getProgCategories=async()=>{
        try{
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/course-categories/`,
        }
        const courseCategories = await axios(options)
        this.setState({programTypeData:courseCategories.data.data})
        }catch(e){
        if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }
        }

        getPrograms=async()=>{
        this.setState({isLoading:true})
        try{
        const {is_ug}=this.state
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/programs/?course_category_id=${is_ug}`,
            method:"GET",
        }
        const Degrees = await axios(options)
        this.setState({programsData:Degrees.data.data,isLoading:false})
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }if(e.response.status===422){
            this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }
        
        }

        getBranchs=async()=>{
            this.setState({isLoading:true})
            const {programId}=this.state
            try{
            const options = {
                url:`${process.env.REACT_APP_BASEURL}list/program-categories/?program_id=${programId}`,
                method:"GET",
            }
            const Branchs = await axios(options)
            this.setState({branchesData:Branchs.data.data,isLoading:false})
            }catch(e){
                if(e.message==="Network Error"){
                    this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
                }
            if(e.response.status===401){
                this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
            }if(e.response.status===422){
                this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
            }else{
                this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
            }
            }
            
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
            const {name,fatherName,email,dob,mobileNo,password,enrollmentNo, is_ug,programId,studentBranchID}=this.state
            try{
                const options = {
                url:`${process.env.REACT_APP_BASEURL}account/register/`,
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                    },
                data:{  name: name,
                        father_name: fatherName,
                        email: email,
                        enrollment: enrollmentNo,
                        mobile: mobileNo,
                        password:password,
                        confirm_password: password,
                        date_of_birth: format(new Date(dob), 'dd/MM/yyyy'),
                        student_branch_id: studentBranchID,
                        program_id: programId,
                        is_ug: is_ug
                    }
            }
            const response = await axios(options)
                console.log(response)
                this.setState({otpSent:true,isLoading:false})
            }catch(e){
                this.setState({backErr:true,backErrMsg:e.msg,isLoading:false,severity:"error"})
            }
            
        }

        onSubmit=()=>{
            const {name,
                fatherName,
                email,
                enrollmentNo,
                dob,
                mobileNo,
                emailErr,
                mobileNoErr,
                password,
                confirmPassword,
                is_ug,
                programId,
                studentBranchID}= this.state
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
            if(is_ug===""){
                this.setState({is_ugErr:true})
            }
            if(is_ug!==""){
                this.setState({is_ugErr:false})
            }
            if(programId===""){
                this.setState({programIdErr:true})
            }
            if(programId!==""){
                this.setState({programIdErr:false})
            }
            if(studentBranchID===""){
                this.setState({studentBranchIDErr:true})
            }
            if(studentBranchID!==""){
                this.setState({studentBranchIDErr:false})
            }
            if( name!=="" && 
                fatherName!=="" && 
                enrollmentNo!=="" && 
                emailErr===false && 
                dob!=="" && 
                mobileNoErr===false && 
                password===confirmPassword && 
                password!=="" && 
                confirmPassword!=='' &&
                is_ug!=="" &&
                programId!=="" &&
                studentBranchID!==""
                ){
                this.setState({allDataEntered:true},this.callForOtp)
            }
            else{
                this.setState({ backErr:true,isLoading:false,backErrMsg:"Something went wrong. Please try again", severity:"error"})
            }
        }

        registerForm=()=>{
            const { programTypeData,
                    programsData,
                    branchesData,
                    programId,
                    studentBranchID,
                    programIdErr,
                    studentBranchIDErr,
                    name,
                    fatherName,
                    email,
                    enrollmentNo,
                    dob,
                    mobileNo,
                    is_ug,
                    nameErr,
                    fatherNameErr,
                    emailErr,
                    enrollmentNoErr,
                    dobErr,
                    mobileNoErr,
                    is_ugErr,
                    password,
                    confirmPassword,
                    passwordErr,
                    confirmPasswordErr,
                    passwordMatched}=this.state
            return(
                <Box className="registrationForm"> 
                        <h1 style={{padding:"10px",textAlign:"center"}}>Please Register</h1>
    {/* name */}    
                        <div style={{display:'flex',flexDirection:'column',width:'100%'}}>     
                            <label id="reg-student-name">Name</label>
                            <CssTextField
                                required
                                size="small"
                                id="reg-student-name"
                                placeholder="Name"
                                style={{margin:"5px 0 0 0"}}
                                onChange={(event)=>this.setState({name:event.target.value.toUpperCase()})}
                                value={name}
                                error={nameErr}
                                />
                        </div>
                            
    {/* fatherName */}
                        <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'15px 0 0 0'}}>     
                            <label id="reg-student-name">Father Name</label>
                            <CssTextField
                                required
                                size="small"
                                id="reg-father-name"
                                placeholder="Father Name"
                                style={{margin:"5px 0 0 0"}}
                                onChange={(event)=>this.setState({fatherName:event.target.value.toUpperCase()})}
                                value={fatherName}
                                error={fatherNameErr}
                                />
                        </div>
    {/* prog type */}   
                        <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'15px 0 0 0'}}>     
                            <label id="reg-student-name">Degree Type</label>
                            <FormControl sx={{m: "0px 0px 1vw 0vw" }} size="small">
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            style={{border:"1px solid black"}}
                                            value={is_ug}
                                            error={is_ugErr}
                                            onChange={(event)=>{
                                                this.setState({is_ug:event.target.value},this.getPrograms)
                                            }}
                                        >
                                            {programTypeData.map((each)=><MenuItem value={each.course_category_id}>{each.course_category_name}</MenuItem>)}
                                        </Select>
                                </FormControl>
                        </div>
    {/* programs */}   
                        <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'15px 0 0 0'}}>     
                            <label id="reg-student-name">Degree</label>
                            <FormControl sx={{m: "0px 0px 1vw 0vw" }} size="small">
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            style={{border:"1px solid black"}}
                                            value={programId}
                                            error={programIdErr}
                                            onChange={(event)=>{
                                                this.setState({programId:event.target.value},this.getBranchs)
                                            }}
                                        >
                                            {programsData.map((each)=><MenuItem key={each.program_id} id={each.program_id} value={each.program_id}>{each.program_name}</MenuItem>)}
                                        </Select>
                                </FormControl>
                        </div>
    {/* branches */}   
                        <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'15px 0 0 0'}}>     
                            <label id="reg-student-name">Branch or Specilization</label>
                            <FormControl sx={{m: "0px 0px 1vw 0vw" }} size="small">
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            style={{border:"1px solid black"}}
                                            value={studentBranchID}
                                            error={studentBranchIDErr}
                                            onChange={(event)=>{
                                                this.setState({studentBranchID:event.target.value})
                                            }}
                                        >
                                            {branchesData.map((each)=><MenuItem key={each.program_category_id} id={each.program_category_id} value={each.program_category_id}>{each.name}</MenuItem>)}
                                        </Select>
                                </FormControl>
                        </div>
    {/* emailId */}     
                        <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'15px 0 0 0'}}>     
                            <label id="reg-student-email">Email ID</label>
                            <CssTextField
                                required
                                size="small"
                                id="reg-student-email"
                                placeholder="Email id"
                                style={{margin:"5px 0 0 0"}}
                                onChange={this.updateEmail}
                                value={email}
                                error={emailErr}
                                />
                        </div>
    {/* enrollmentNo */}
                        <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'15px 0 0 0'}}>     
                            <label id="reg-student-enroll">HallTicket Number</label>
                            <CssTextField
                                required
                                size="small"
                                id="reg-father-enroll"
                                placeholder="Hallticket Number"
                                style={{margin:"5px 0 0 0"}}
                                onChange={(event)=>this.setState({enrollmentNo:event.target.value.toUpperCase()})}
                                value={enrollmentNo}
                                error={enrollmentNoErr}
                                />
                        </div>
    {/* Dob */}
                        <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'15px 0 0 0'}}>     
                            <label id="reg-student-dob">Date of Birth</label>
                            <CssTextField
                                required
                                size="small"
                                id="reg-student-dob"
                                style={{margin:"5px 0 0 0"}}
                                type="date"
                                onChange={this.updateDob}
                                value={dob}
                                error={dobErr}
                                />
                        </div>
    {/* mobile */}
                        <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'15px 0 0 0'}}>     
                            <label id="reg-student-mobile">Mobile Number</label>
                            <CssTextField
                                required
                                size="small"
                                id="reg-student-mobile"
                                placeholder="Mobile"
                                style={{margin:"5px 0 0 0"}}
                                type="tel"
                                pattern="[0-9]{10}"
                                value={mobileNo}
                                onChange={this.updateMobilenumber}
                                error={mobileNoErr}
                            />
                        </div>
    {/* password */}
                        <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'15px 0 0 0'}}>     
                            <label id="reg-student-password">Create Password</label>
                            <CssTextField
                                required
                                size="small"
                                id="reg-student-password"
                                placeholder="Create Password"
                                style={{margin:"5px 0 0 0"}}
                                value={password}
                                onChange={(event)=>this.setState({password:event.target.value})}
                                error={passwordErr}
                                />
                            </div>
    {/* confirm password */}
                        <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'15px 0 0 0'}}>     
                            <label id="reg-student-ConfirmPassword">Confirm Password</label>
                            <CssTextField
                                required
                                size="small"
                                id="reg-student-ConfirmPassword"
                                placeholder="Confirm Password"
                                style={{margin:"5px 0 0 0"}}
                                value={confirmPassword}
                                onChange={(event)=>this.setState({confirmPassword:event.target.value})}
                                error={confirmPasswordErr}
                                />
                        </div>
                        {passwordMatched?null:<p>Passwords not Matched</p>}
                        <div style={{width:"80%", display:"flex", justifyContent:"space-around",marginTop:"20px"}}>
                            <Button className="muiButton" onClick={this.reset} variant="contained" color="reset">Reset</Button>
                            <Button className="muiButton" onClick={this.onSubmit} variant="contained" color="success">Register</Button>
                        </div>
                            <Button className="muiButton" color="lableText" style={{fontSize:"14px",fontWeight:'bold'}} onClick={()=>this.setState({alreadyRegistered:true})}>Registered User??? Click me to sign in</Button>
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
                    <img style={{height:'150px'}} className='universityLogo' src={logopng} alt="logo"/>
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