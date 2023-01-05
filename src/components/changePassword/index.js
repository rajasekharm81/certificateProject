import {Component} from 'react';
import { Navigate } from 'react-router-dom';
import { Box,TextField,Button,Snackbar,Alert } from '@mui/material';

import registrationt from "../../assects/registrationt.png"
import logopng from '../../assects/logopng.png'

import LoadingView from '../loadingView';

import "./index.css"
// import axios from 'axios';


class ChangePassword extends Component{
   state={  userName:"",
            oldpassword:"",
            newPassword:'',
            confirmPassword:'',
            userNameErr:false,
            oldpasswordErr:false,
            newPasswordErr:false,
            confirmPasswordErr:false,
            passwordMatched:true,
            allDataEntered:false,
            backErr:false,
            backErrMsg:"",
            severity:"error",
            isLoading:false,
            passwordChanged:false
        }

        reset=()=>{
        this.setState({ 
                        userName:"",
                        oldpassword:"",
                        newPassword:'',
                        confirmPassword:'',
                        userNameErr:false,
                        oldpasswordErr:false,
                        newPasswordErr:false,
                        confirmPasswordErr:false,
                        allDataEntered:false,
                        backErr:false,
                        backErrMsg:"",
                        severity:"",
                        isLoading:false,
                    })
        }

        onSubmit=()=>{
            const { userName,
                    oldpassword,
                    newPassword,
                    confirmPassword} = this.state
            if(userName===""){
                this.setState({userNameErr:true})
            }
            if(userName!==""){
                this.setState({userNameErr:false})
            }
            if(oldpassword===""){
                this.setState({oldpasswordErr:true})
            }
            if(oldpassword!==""){
                this.setState({oldpasswordErr:false})
            }
            if(newPassword===""){
                this.setState({newPasswordErr:true})
            }
            if(newPassword!==""){
                this.setState({newPasswordErr:false})
            }
            if(confirmPassword===""){
                this.setState({confirmPasswordErr:true})
            }
            if(confirmPassword!==""){
                this.setState({confirmPasswordErr:false})
            }
            if(newPassword === confirmPassword){
                this.setState({passwordMatched:true})
            }
            if(newPassword!==confirmPassword){
                this.setState({passwordMatched:false})
            }
            if(userName!=="" && newPassword===confirmPassword && newPassword!=="" && confirmPassword!==''){
                this.setState({allDataEntered:true},this.updatePassword)
            }
                else{this.setState({isLoading:false})}
        }

        ChangePasswordForm=()=>{
            const { userName,
                    oldpassword,
                    newPassword,
                    passwordMatched,
                    confirmPassword,
                    userNameErr,
                    oldpasswordErr,
                    newPasswordErr,
                    confirmPasswordErr
                }=this.state
            return(
                <Box className="registrationForm"> 
                        <h1 style={{padding:"10px"}}>Change Password</h1>

    {/* User Name */}
                        <TextField
                            required
                            size="small"
                            id="reg-father-enroll"
                            label="User Name"
                            style={{margin:"10px",width:"90%"}}
                            onChange={(event)=>this.setState({userName:event.target.value.toUpperCase()})}
                            value={userName}
                            error={userNameErr}
                            />
{/*Old password */}
                        <TextField
                            required
                            size="small"
                            id="reg-student-password"
                            label="Old Password"
                            style={{margin:"10px",width:"90%"}}
                            value={oldpassword}
                            onChange={(event)=>this.setState({oldpassword:event.target.value})}
                            error={oldpasswordErr}
                            />
{/* new password */}
                            <TextField
                            required
                            size="small"
                            id="reg-student-password"
                            label="New Password"
                            style={{margin:"10px",width:"90%"}}
                            value={newPassword}
                            onChange={(event)=>this.setState({newPassword:event.target.value})}
                            error={newPasswordErr}
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
                            
                                <Button className="muiButton" onClick={this.reset} variant="contained" >Reset</Button>
                                <Button className="muiButton" onClick={this.onSubmit} variant="contained">
                                    Update Password
                                </Button>
                            </div>
                        </Box>
            )
        }

        updatePassword=()=>{
            this.setState({backErr:true,severity:"success",backErrMsg:'Checked',isLoading:"false"})
        }

        // updatePassword=async()=>{
        //     const {userName,oldpassword,newPassword,confirmPassword}=this.state
        //     try{
        //     this.setState({isLoading:true})
        //     const options = {
        //             url : `${process.env.REACT_APP_BASEURL}account/verify-reset-password/`,
        //             method:"POST",
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //                 },
        //             data:{
        //                     enrollment: enrollmentNo,
        //                     otp:otp
        //                 }
        //             }
        //         const response = await axios(options)
        //         if(response.status===200){
        //             this.setState({backErr:true,
        //                             backErrMsg:"Password Changed Successfully. Please login to Continue",
        //                             severity:'success'},this.navigateToSignIn)
        //             }
        //     }catch(e){
        //         if(e.response.request.status===403){
        //             this.setState({backErr:true,backErrMsg:e.response.data.detail.toUpperCase(),severity:'error'})
        //         }else{
        //             this.setState({backErr:true,backErrMsg:e.msg})
        //         }
        //     }
        // }
    
        handleClose=()=>{
            this.setState({backErr:false})
        }

    render(){
        const{passwordChanged,backErr,backErrMsg,severity,isLoading}=this.state
        return(
            <>
             
                <div className='ChangePassMainPage'>
                    <img style={{height:'150px'}} className='universityLogo' src={logopng} alt="logo"/>
                    <img className='registrationImage' src={registrationt} alt='regImage'/>
                    {this.ChangePasswordForm()}
                    {passwordChanged?<Navigate to='/employeelogin'/>:null}
                </div>  
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

export default ChangePassword