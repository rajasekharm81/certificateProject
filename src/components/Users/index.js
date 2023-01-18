/* eslint-disable eqeqeq */
import {Component} from 'react'
import {Button,
        TableContainer,
        TableHead,
        Table,
        TableRow,
        TableBody,
        Paper,
        Switch,
        Grid,
        Snackbar,
        Alert,
        FormControl,
        Select,
        MenuItem,
        Autocomplete,
        IconButton
    } from "@mui/material"
// import {AiOutlineEye} from "react-icons/ai"
import {BiReset} from "react-icons/bi"
import {FaEdit} from "react-icons/fa"

import LoadingView from "../loadingView"

import Cookies from 'js-cookie'

import { CssTextField,StyledTableCell,StyledTableRow } from '../customizedComponents'
import axios from 'axios'

const UserTableHeadings = ["S.No","User Name","Contact Number","Role","Assigned Degree","Reporting To","Status","Edit","Reset Password"]


const collegeData = [{ title: 'The Shawshank Redemption', year: 1994 },
                        { title: 'The Godfather', year: 1972 },
                        { title: 'The Godfather: Part II', year: 1974 },
                        { title: 'The Dark Knight', year: 2008 },
                        { title: '12 Angry Men', year: 1957 },
                        { title: "Schindler's List", year: 1993 },
                        { title: 'Pulp Fiction', year: 1994 },
                        { title: 'The Shawshank Redemption', year: 1994 },
                        { title: 'The Godfather', year: 1972 },
                        { title: 'The Godfather: Part II', year: 1974 },
                        { title: 'The Dark Knight', year: 2008 },
                        { title: '12 Angry Men', year: 1957 },
                        { title: "Schindler's List", year: 1993 },
                        { title: 'Pulp Fiction', year: 1994 },]


// update and create user screen

export class UpdateUser extends Component{
    state={
        // basic data
            rolesData:[],
            ReportingOfficersData:[],
            DegreesData:[],
            CollegesData:[],
        // form data
            roleId:'',
            degreeCategory:'',
            degreeId:'',
            selectedColleges:[],
            reportingOfficerID:'',
            assignedProgramID:'',
            signFile:[],
        // Validation
            signFileErr:false,
            roleIdErr:false,
            assignedProgramIDErr:false,
            reportingOfficerIDErr:false,
        // view
            edit:false,
        // notifications
            isLoading:false,
            backErr:false,
            backErrMsg:'',
            severity:'error',
        }


componentDidMount(){
    this.getPrograms()
    this.getRoles()
}

// for getting base roles
    getRoles=async()=>{
        const token = Cookies.get('staffAuthToken')
        try{
            const options = {
                url:`${process.env.REACT_APP_BASEURL}admin/roles`,
                method:"GET",
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }
            const roles = await axios(options)
            this.setState({rolesData:roles.data.data})
        }catch(e){
            if(e.message==='Network Error'){
                this.setState({isLoading:false,backErr:true,backErrMsg:"Something went wrong Please try again"})
            }
            if(e.response.status===401){
                this.setState({isLoading:false,backErr:true,backErrMsg:"UnAuthorised Please login again"})
                Cookies.remove("staffAuthToken")
                window.location.reload()
            }
            if(e.response.status===500){
                this.setState({isLoading:false,backErr:true,backErrMsg:"Unregistered user... Contact admin for login"})
            }
            if(e.response.status===403){
                this.setState({isLoading:false,backErr:true,backErrMsg:"Incorrect Password... Please try again"})
            }
            if(e.response.status===404){
                this.setState({isLoading:false,backErr:true,backErrMsg:"Incorrect/Invalid User Name"})
            }
            else{
                this.setState({isLoading:false,backErr:true,backErrMsg:e.message})
            }
        }
    }

// for getting base program Categories
    ReportingOfficers=()=>{
        const {roleId}=this.state

        console.log(`fetch persons with roleid ${roleId-1}`)
        this.setState({ReportingOfficersData:[]})

    }

// for getting Degrees
    getPrograms=async()=>{
    this.setState({isLoading:true})
    try{
    const options = {
        url:`${process.env.REACT_APP_BASEURL}list/programs/`,
        method:"GET",
    }
    const Degrees = await axios(options)
    this.setState({DegreesData:Degrees.data.data,isLoading:false})
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

// form for creating user
    CreateUserForm=()=>{
        const{  DegreesData,
                assignedProgramID,
                assignedProgramIDErr,
                roleId,
                roleIdErr,
                rolesData,
                signFile,
                signFileErr,
                ReportingOfficersData,
                reportingOfficerIDErr,
                reportingOfficerID
            }=this.state
        const {operation}=this.props
        return(
            <div style={{marignTop:'150px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center', height:'100%',width:'99%'}}>
                   <h1 style={{textAlign:"center", backgroundImage:'linear-gradient(to bottom, #0099FF, #40F2FF)',borderRadius:'5px',color:'#242A63',width:"78%",padding:'1%',marginTop:'2%'}}>{operation==="Create"?"Create New User":"Modify User"}</h1>
                   <Grid container style={{display:'flex',justifyContent:'center', boxShadow:'0px 0px 12px 0px grey',width:'80%',backgroundImage:'linear-gradient(to top,#F9F6F0,white)', borderRadius:'10px',padding:'15px',flexWrap:'wrap'}}>
{/* name */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>Name</label>
                            <CssTextField size='small'>xs=12 md=4</CssTextField>
                        </Grid>
{/* Employee id */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>Employee ID</label>
                            <CssTextField size='small'>xs=12 md=4</CssTextField>
                        </Grid>
{/* Designation/Role */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>Designation</label>
                            <FormControl sx={{m: "0px 0px 1vw 0vw" }} size="small">
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            style={{border:"1px solid black"}}
                                            value={roleId}
                                            error={roleIdErr}
                                            onChange={(event)=>{
                                                this.setState({roleId:event.target.value},this.ReportingOfficers)
                                            }}
                                        >
                                            {rolesData.map((each)=><MenuItem value={each.role_id}>{each.role_name}</MenuItem>)}
                                        </Select>
                                </FormControl>
                        </Grid> 
{/* Reporting to */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>Reporting to</label>
                            <FormControl sx={{m: "0px 0px 1vw 0vw" }} size="small">
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            style={{border:"1px solid black"}}
                                            value={reportingOfficerID}
                                            error={reportingOfficerIDErr}
                                            onChange={(event)=>this.setState({reportingOfficerID:event.target.value})}
                                        >
                                            {ReportingOfficersData.map((each)=><MenuItem value={each.course_category_id}>{each.course_category_name}</MenuItem>)}
                                        </Select>
                                </FormControl>
                        </Grid>
{/* Assigned program */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>Assign Program</label>
                            <FormControl sx={{m: "0px 0px 1vw 0vw" }} size="small">
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            style={{border:"1px solid black"}}
                                            value={assignedProgramID}
                                            error={assignedProgramIDErr}
                                            onChange={(event)=>{
                                                this.setState({assignedProgramID:event.target.value})
                                            }}
                                        >
                                            {DegreesData.map((each)=><MenuItem value={each.program_id}>{each.program_name}</MenuItem>)}
                                        </Select>
                                </FormControl>
                        </Grid> 
{/* assigned Colleges */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>Assigned Colleges</label>
                            <Autocomplete
                                multiple
                                limitTags={1}
                                size='small'
                                options={collegeData}
                                getOptionLabel={(option) => option.year}
                                filterSelectedOptions
                                onChange={(event,opt)=>this.setState({selectedColleges:opt})}
                                renderInput={(params) => (
                                <CssTextField
                                    size='small'
                                    {...params}
                                />
                                )}
                            />
                        </Grid>  
{/* Contact Number */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>Contact Number</label>
                            <CssTextField size='small'>xs=12 md=4</CssTextField>
                        </Grid>
{/* signature */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'13px'}}>Signature</label>
                            <IconButton size='small' color="primary" aria-label="upload picture" component="label">
                                <input onChange={(event)=>this.setState({signFile:event.target.files})} type="file" hidden accept="image/*"/> 
                                    {signFile.length===0?"Select Signature file":signFile[0].name}
                            </IconButton>
                        </Grid>
                    </Grid>
                    <div style={{padding:'20px'}}>
                        <Button size='small' variant='contained'>Submit</Button>
                    </div>

            </div>
        )
    }
// snack bar handler

     handleClose=()=>{
        this.setState({isLoading:false})
    }

    render(){
         const {isLoading,backErr,backErrMsg,severity}=this.state
        return<>
            {this.CreateUserForm()}
            <LoadingView isLoading={isLoading}/>
              <Snackbar open={backErr}
                        autoHideDuration={3000} 
                        onClose={this.handleClose} 
                        anchorOrigin={{vertical:"top",horizontal:"right"}} 
                        >
                <Alert onClose={this.handleClose} severity={severity} sx={{ width: '100%' }}>
                  {backErrMsg}
                </Alert>
              </Snackbar>
        </>
    }
}

// users display table and create/modify user option

export class CreateUser extends Component{
    state={
        screen:'userTable',              // tableView
        isActive:false,
        usersList:[],
        selectedUserID:'',
    // notifications
        backErr:false,
        backErrMsg:'',
        severity:"success",
        isLoading:false
    }

    componentDidMount(){
        this.usersList()
    }

// screen changer
    ChangeScreen=(to)=>{
        this.setState({screen:to})
    }

// get users list
    usersList=async()=>{
        const token = Cookies.get("staffAuthToken")
        try{
            const options = {
                url:`${process.env.REACT_APP_BASEURL}admin/users/`,
                method:"GET",
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }
            const response = await axios(options)
            this.setState({usersList:response.data.data})
        }catch(e){
            this.setState({backErr:true, backErrMsg:e.msg,isLoading:false})
        }
    }

// update ActiveUserID
    updateActiveUserID=(event)=>{
        this.setState({selectedUserID:event.target.id,screen:"ModifyUser"})
    }

// resetPassword confirmation

    ConfirmResetPassword=(event)=>{

    }

// password reset
    ResetPassword=()=>{
        console.log("Password resetted")
    }

// auth users list
    AuthUserListView=()=>{
        const{usersList}=this.state
        return(<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', marginTop:'150px',padding:'20px', height:'70%',overflow:'auto'}}>
            <div style={{width:'90%',justifyContent:'space-around',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <label style={{marginTop:'5px'}}>Search</label>
                    <CssTextField autoComplete='off' size='small' id='username' type='search'/>
                </div>
                {/* <CssTextField size='small' id='username' type='search'/> */}    
                <Button style={{fontSize:"14px"}} variant="contained" className='muiButton' onClick={()=>this.setState({screen:"NewUser"})}>Create New User</Button>
            </div>
            <TableContainer style={{margin:"20px 0 0 0",height:'60vh'}} component={Paper}>
                    <Table stickyHeader sx={{ width: '100%' }} aria-label="customized table">
                        <TableHead >
                        <TableRow>
                            {UserTableHeadings.map((each)=><StyledTableCell align="center" >{each}</StyledTableCell>)}
                        </TableRow>
                        </TableHead>
                        <TableBody style={{width:'100%', overflow:'auto'}}>
                            {usersList.map((each,index)=><StyledTableRow className='rowOnHover' >
                                <StyledTableCell align="center" component="th" scope="row">
                                    {index+1}
                                </StyledTableCell>
                                <StyledTableCell align="center">{each.username}</StyledTableCell>
                                <StyledTableCell align="center">{each.mobile}</StyledTableCell>
                                <StyledTableCell align="center">JR. Assistant</StyledTableCell>
                                <StyledTableCell align="center">JR. Assistant</StyledTableCell>
                                <StyledTableCell align="center">JR. Assistant</StyledTableCell>
                                <StyledTableCell align="center"><Switch
                                                                checked={each.active==1?true:false}
                                                                onChange={() => this.setState((prevState)=>({isActive:!prevState.isActive}))}
                                                                name="loading"
                                                                color="primary"
                                                            /></StyledTableCell>
                                <StyledTableCell align="center"><Button id={each.user_id} className="muiButton" onClick={this.updateActiveUserID}><FaEdit id={each.user_id} onClick={this.updateActiveUserID}/></Button></StyledTableCell>
                                <StyledTableCell align="center" ><Button id={each.user_id} className="muiButton" onClick={this.ResetPassword}><BiReset id={each.user_id} onClick={this.ResetPassword}/></Button></StyledTableCell>
                            </StyledTableRow>)}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>)
    }

    screenViewer=()=>{
        const {screen}=this.state
        switch(screen){
            case 'userTable':  
                return this.AuthUserListView()
            case "NewUser":   
                return <div style={{marginTop:'160px',height:'70%'}} ><UpdateUser operation="Create" screenUpdater={this.ChangeScreen}/></div>
            case "ModifyUser":  
                return <div style={{marginTop:'160px',height:'70%'}} ><UpdateUser operation="Edit" screenUpdater={this.ChangeScreen}/></div>
            default :
                return null
        }
    }

    handleClose=()=>{
        this.setState({isLoading:false})
    }

    render(){
        const {isLoading,backErr,backErrMsg,severity}=this.state
    return(
        <>  
            <div style={{overflow:'auto'}}>
                {this.screenViewer()}
            </div>
            <LoadingView isLoading={isLoading}/>
              <Snackbar open={backErr}
                        autoHideDuration={3000} 
                        onClose={this.handleClose} 
                        anchorOrigin={{vertical:"top",horizontal:"right"}} 
                        >
                <Alert onClose={this.handleClose} severity={severity} sx={{ width: '100%' }}>
                  {backErrMsg}
                </Alert>
              </Snackbar>
        </>
    )
}
}

