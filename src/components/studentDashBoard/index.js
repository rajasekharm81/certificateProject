import {Component} from "react"
import {Desk} from "@mui/icons-material"
import logopng from "../../assects/logopng.png"
import {Button,
        Paper,
        TableBody,
        TableHead,
        TableRow,
        TableContainer,
        Table,
        Snackbar,
        Alert,
        Menu,
        MenuItem,
        Box,
        Typography,
        Tooltip,
        IconButton,
        ListItemIcon,    
    } from "@mui/material"
import {FaChartArea} from 'react-icons/fa'
import {BsBoxArrowInLeft,BsBoxArrowInRight} from "react-icons/bs"
import {FiLogOut} from "react-icons/fi"


import {Navigate} from "react-router-dom"
import Cookies from "js-cookie"
import {Logout} from '@mui/icons-material'
// import Greet from "../greetingsHandler"
import { StyledTableCell,StyledTableRow } from "../customizedComponents"

import LoadingView from "../loadingView"

import axios from "axios"

import "./index.css"
const tableHeadings=["S.No","Hall ticket Number","Name","Certificate Name","Applied On","status"]

class StudendDashBoard extends Component{
state = {activeID:"",
        isValidUser:true,
        userName:"",
        menu:false,
        role:"",
        navShort:false,
        applicationData:[],
// menu items
        isOpen:false,
        anchorEl:null,
        profileOptionEl:null,
// notifications
        backErr:false,
        backErrMsg:'',
        severity:'',
        isLoading:false,
    }

    componentDidMount(){
        this.userValidation()
        this.getLoggerDetails()
        this.getAppliedApplications()
    }

    userValidation=()=>{
        const token = Cookies.get("authToken")
        if(token===undefined){
            this.setState({isValidUser:false})
        }else{
            this.setState({isValidUser:true})
        }
    }

    getLoggerDetails=()=>{
        const name = Cookies.get("studentName")
        const role = Cookies.get("studentEnroll")
        this.setState({userName:name,role:role})
    }

    logout=()=>{
        Cookies.remove("authToken")
        Cookies.remove("keydata")
        window.location.reload()
    }

    wecomeBodyContent=()=>{
        // const {userName} = this.state
        return (
            <div style={{lineSpacing:'10px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'73vh'}} className="StudentDashBoardBody">
                <h1 style={{fontSize:"35px"}}>Welcome to ANU e-Services</h1>
                <h2>Now Applying For Ceritificates In ANU become very Easy.</h2>
            </div>
        )
    }
    
    getAppliedApplications=async()=>{
        this.setState({isLoading:true})
        try{
        const token = Cookies.get("authToken")
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/student-applications/?offfset=0&page_size=100`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const applicationsList = await axios(options)
            this.setState({applicationData:applicationsList.data.data,isLoading:false})
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("authToken")
                window.location.reload()
                }, 1000);
           }if(e.response.status===422){
            this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }

    }
  
    applicationCheckView=()=>{
        const {applicationData}=this.state
        return(
            <div style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center', marginTop:'160px', padding:'20px'}}>
                <h1>List of Applications You Requested</h1>
                <TableContainer style={{margin:"20px 0 0 0",height:'60vh',width:'90%'}} component={Paper}>
                    <Table sx={{ width: '100%' }} aria-label="customized table">
                        <TableHead>
                        <TableRow >
                            {tableHeadings.map((each)=><StyledTableCell>{each}</StyledTableCell>)}
                        </TableRow>
                        </TableHead>
                        <TableBody style={{width:'100%'}}>
                        {applicationData.map((row,index) => (
                            <StyledTableRow key={row.CertificateName}>
                                <StyledTableCell component="th" scope="row">
                                    {index+1}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.student_id}</StyledTableCell>
                                <StyledTableCell align="left">{row.student_name}</StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.created_date}</StyledTableCell>
                                <StyledTableCell align="left">{row.status===null?"Pending":row.status_message}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        )
    }

    navigator=()=>{
        const {activeID}=this.state
        switch(activeID){
            case "newApplication":
                return <Navigate to='/requests/odrequest'/>
            case "ApplicationStatus":
                return this.applicationCheckView()
            default: 
                return this.wecomeBodyContent()
            
        }
    }

    toggleNavShort=()=>{
        this.setState((prevState)=>({navShort:!prevState.navShort}))
    }

    openMenu=(event)=>{
        this.setState({isOpen:true,anchorEl:event.target})
    }

    closeMenu=(event)=>{
        if(event.target.id==="OD Request" || event.target.id==="Certificates"){
            this.setState({isOpen:false,activeID:"newApplication"})
            Cookies.set("form",event.target.id,{expires:1})
        }else{
            this.setState({isOpen:false})
        }
    }

    profileMenuOpen=(event)=>{
        this.setState({menu:true,profileOptionEl:event.target})
    }

    profileMenuClose=()=>{
        this.setState({menu:false})
    }

    renderInitialContent=()=>{
         const{activeID,menu,navShort,isOpen,anchorEl,profileOptionEl}=this.state
        return(
            <div className='verificationDashMainCont'>
{/* NavBarContainer */}
                <nav className={navShort?"verificationSideNavShort":'verificationSideNav'}>
{/* top section */}
                    <div style={{display:"flex" ,
                                justifyContent:navShort?"space-around":"space-between",
                                width:navShort?"100px":"100%",
                                alignItems:"center", 
                                margin:"30px 0 50px 0",
                                padding:'15px'
                                }}>
                        {navShort?null:<img alt="logo" className='navBarLogo' src='https://anucde.org/assets/img/brand/logo.png'/>}
                    <Button className="muiButton" 
                        onClick={this.toggleNavShort}
                        size="large" 
                        id='hamburgerMenuExpanded' 
                        startIcon={navShort?<BsBoxArrowInRight />:<BsBoxArrowInLeft />}>
                    </Button>
                    </div>
{/* options section */}
                    <Button
                        aria-controls={isOpen ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={isOpen ? 'true' : undefined}
                        onClick={this.openMenu}
                        style={navShort?{justifyContent:'space-around',width:'90%'}:{justifyContent:'flex-start'}}
                        size="large" 
                        id='newApplication' 
                        className={activeID==="newApplication"?'verificationSideNavButton activeButton muiButton':"verificationSideNavButton muiButton"} 
                        startIcon={<FaChartArea />}>
                        {navShort?null: "Request for Certificate"}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={isOpen}
                        onClose={this.closeMenu}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem id="OD Request" onClick={this.closeMenu}>OD Application Form</MenuItem>
                        <MenuItem id="Certificates" onClick={this.closeMenu}>Ceritificate Application Form</MenuItem>
                    </Menu>
                    <Button 
                        style={navShort?{justifyContent:'space-around',width:'90%'}:{justifyContent:'flex-start'}}
                        size="large" 
                        id='ApplicationStatus' 
                        className={activeID==="ApplicationStatus"?'verificationSideNavButton activeButton muiButton':"verificationSideNavButton muiButton"}  
                        onClick={(event)=>this.setState({activeID:event.target.id})}
                        startIcon={ <Desk/>}>
                        {navShort?null: "Application Status"}
                    </Button> 
                </nav>
                <div className='verificationDashContainer'>
{/* headerContainer */}
                    <div style={{display:"flex", 
                                 justifyContent:"space-between",
                                 alignItems:"center",
                                 paddingRight:"30px",
                                 height:"150px", 
                                 backgroundColor:"#f4fffzd3",
                                 position:"absolute",
                                 top:"0",
                                 width:navShort?"92%":'75%',

                                 }}>
                        <img style={{height:"150px",paddingLeft:"10px",margin:'auto'}} src={logopng} alt="logo"/>
                        <div>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginRight:'25px' }}>
                                <Typography sx={{ minWidth: 100,fontWeight:'bolder',fontSize:'16px' }}>{this.state.role}</Typography>
                                <Tooltip title="Profile Options">
                                <IconButton
                                    onClick={this.profileMenuOpen}
                                    size="small"
                                    aria-controls={menu ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={menu ? 'true' : undefined}
                                >
                                    <FiLogOut style={{fontSize:'30px'}} />
                                </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={profileOptionEl}
                                id="account-menu"
                                open={menu}
                                onClose={this.profileMenuClose}
                                onClick={this.profileMenuClose}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                    },
                                    '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={()=>this.logout()}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
{/* body Container */}
                    <div style={{overflow:'auto'}}>
                        {this.navigator()}
                    </div>
                </div>
            </div>
        )
    }

    handleClose=()=>{
        this.setState({backErr:false})
    }

    render(){
        const{isValidUser,backErr,isLoading,severity,backErrMsg}=this.state
        return( 
            <>
            {isValidUser?this.renderInitialContent():<Navigate to="/student/signin"/>}
            <LoadingView isLoading={isLoading}/>
              <Snackbar open={backErr}
                        autoHideDuration={6000} 
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

export default StudendDashBoard