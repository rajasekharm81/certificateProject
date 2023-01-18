import {Component} from 'react'
import {FaChartArea} from 'react-icons/fa'
import {AiOutlineEye,AiOutlineArrowLeft,AiOutlineArrowRight,AiOutlineUserAdd} from "react-icons/ai"
import {GiByzantinTemple,GiCash} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {MdManageAccounts} from 'react-icons/md'
import {Button,
        Avatar,
        Paper,
        TableBody,
        TableHead,
        TableRow,
        TableContainer,
        Table,
        TablePagination,
        MenuItem,
        Box,
        Typography,
        Tooltip,
        IconButton,
        Menu,
        ListItemIcon
    } from "@mui/material"

import {Logout,Desk} from '@mui/icons-material'

import logopng from "../../assects/logopng.png"
import { Navigate } from 'react-router-dom'


import { InView } from 'react-intersection-observer';

import axios from 'axios'

import { StyledTableCell,StyledTableRow,CssSelect, CssTextField } from "../customizedComponents"
import Cookies from "js-cookie"

import "./index.css" 
import {OdApplicationPreview,ApplicationRequest2} from "../verificationApplicationViewer"
import {CreateUser} from "../Users"
import {Colleges} from "../Colleges"
import {Transactions} from "../Transactions"

const bgColors = ["#5F71E3","#5F71E3","#11CBEF","#1173EF","#F5375B","#F55F37","#1a1a4d","#1a1a4d"]

const tableHeadings=["S.No","Hall Ticket Number","Name","Certificate Name","Applied On","Status","Actions"]

const statusHeadings=[{name:"All",value:""},{name:"Approved",value:"approved"},{name:"Pending",value:"pending"},{name:"Redirected",value:"redirected"},{name:"Rejected",value:"rejected"}]

const Auth_Roles_To_CreateUser = ["SUPERADMIN"]     // includes 1. creating/modifying user, 
                                                    //          2. creating/modifying new college

const Auth_Roles_CollegeData=["SUPERADMIN","ADMIN"] // includes 1. creating/modifying new college



class VerificationDashBoard extends Component{
    state={activeID:"verifyDash",
            validUser:true,
            username:'',
            role:"",
            selectedApplicationId:'',
            allApplications:0,
            pending:0,
            approved:0,
            rejected:0,
            redirected:0,
            applicationsList:[],
            activeCard:'allApplications',
            createdDate:'',
            menu:false,
            showSideNav:true,
            changePasword:false,
            appliedFor:'',
            certificateId:'',
        // Pagination
            pageNo:1,
            count:100,
            offset:0,
            pageSize:100,
        // for list sorting
            getByStatus:"",
            searchingFor:'',
        // inview
            isInview:false,
        // profile menu
            profileOptionEl:null
        }

    componentDidMount=()=>{
        this.verifyUser()
        this.userDetails()
        this.getAllApplications()
        this.applicationsCount()
    }

// saving login user details
    userDetails=()=>{
        try{
            const name = Cookies.get("name")
            const role = Cookies.get("role")
            this.setState({username:name.toUpperCase(),role:role.toUpperCase()})
        }catch(e){
                console.log('no user details')
            }
    }


    applicationsCount=async()=>{
    const token = Cookies.get("staffAuthToken")
        try{
        const options = {
            url:`${process.env.REACT_APP_BASEURL}approvaldashboard`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const applicationsList = await axios(options)
            this.setState({
                    pending:applicationsList.data.pending,
                    approved:applicationsList.data.approved,
                    rejected:applicationsList.data.rejected,
                    redirected:applicationsList.data.redirected,
                    allApplications:applicationsList.data.total
            })
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("staffAuthToken")
                window.location.reload()
                }, 1000);
           }if(e.response.status===422){
            this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }

    }


// verify user logged in or not
    verifyUser=()=>{
        const token = Cookies.get("staffAuthToken")
        if(token===undefined){
        this.setState({validUser:false})
        }else{
            this.setState({validUser:true})
        }
    }

// logout component
    logout=()=>{
        Cookies.remove("staffAuthToken")
        Cookies.remove("name")
        Cookies.remove("role")
        this.setState({validUser:false})
    }

// change password
    ChangePassword=()=>{                        // to be developed
        this.setState({changePasword:true})
    }

// applications to be fetched
  ApplicationQueryParamSetter=(event)=>{
        this.setState({ activeCard:event.target.id,
                        activeID:"verifyApplications",
                        getByStatus:event.target.id
                    },this.getAllApplications)
    }

// get all applications
    getAllApplications=async()=>{
     try{
        const token = Cookies.get("staffAuthToken")
        const{offset,pageSize,searchingFor,getByStatus}=this.state
        let customizedUri=""
        if(searchingFor==="" && getByStatus===""){
            customizedUri=`${process.env.REACT_APP_BASEURL}list/certificate-applications/?offfset=${offset}&page_size=${pageSize}`
        }
        if(searchingFor!=="" && getByStatus===""){
            customizedUri=`${process.env.REACT_APP_BASEURL}list/certificate-applications/?search=${searchingFor}&offfset=${offset}&page_size=${pageSize}`
        }
        if(searchingFor==="" && getByStatus!==""){
            customizedUri=`${process.env.REACT_APP_BASEURL}list/certificate-applications/?filter=${getByStatus}&offfset=${offset}&page_size=${pageSize}`
        }
        if(searchingFor!=="" && getByStatus!==""){
            customizedUri=`${process.env.REACT_APP_BASEURL}list/certificate-applications/?search=${searchingFor}&filter=${getByStatus}&offfset=${offset}&page_size=${pageSize}`
        }
        const options = {
            url:customizedUri,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const applicationsList = await axios(options)
        const filteredApplications = applicationsList.data.data.filter((each)=>(each.payment_id!==null))
            this.setState({applicationsList:filteredApplications})
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("staffAuthToken")
                window.location.reload()
                }, 1000);
           }if(e.response.status===422){
            this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }

    }

// refresh screen
    refresh=()=>{
        window.location.reload()
    }

// inviewHandler

    isInview=(inView, entry)=>{
        this.setState({isInview:inView})
    }


// body display controller
    renderBodyContent=()=>{
        const {activeID,selectedApplicationId,appliedFor,certificateId,createdDate,getByStatus}=this.state
        switch(activeID){
            case "verifyDash":
                return this.dashBoardView()
            case "verifyApplications":
                return this.applicationsView()
            case "applicationView":
                if(certificateId===1){
                    return <OdApplicationPreview inViewHandler={this.isInview} reload={this.refresh} currentStatus={getByStatus} certificateName={appliedFor} id={selectedApplicationId}/>
                } return <ApplicationRequest2 inViewHandler={this.isInview} reload={this.refresh} currentStatus={getByStatus} certificateName={appliedFor} id={selectedApplicationId} date={createdDate}/>
            case "Create User":
                return <CreateUser/>
            case "Colleges":
                return <Colleges/>
            case "Payments":
                return <Transactions/>
            default:
                return null;
        }
    }

// side navbar

    sideNavHandler=()=>{
        this.setState((prevState)=>({showSideNav:!prevState.showSideNav}))
    }

    sideNavContainer=()=>{
        const {activeID,username,showSideNav,role}=this.state
        return(<nav className={showSideNav?'verificationSideNav':'verificationSideNavShort'}>
{/* top section */} 
                    <div style={{display:"flex" ,
                                 justifyContent:showSideNav?"space-between":"space-around",
                                 width:showSideNav?"95%":"100%",
                                 alignItems:"center", 
                                 margin:"30px 0 30px 10px",
                                 }}>
                        {showSideNav?<img alt="logo" className='navBarLogo' src='https://anucde.org/assets/img/brand/logo.png'/>:null}
                        <Button className="muiButton" 
                        size="large" 
                        id='hamburgerMenuExpanded'
                        onClick={this.sideNavHandler} 
                        startIcon={showSideNav?<AiOutlineArrowLeft style={{fontSize:'20px',zIndex:2,pointerEvents:'none'}} />:<AiOutlineArrowRight style={{fontSize:'20px',pointerEvents:'none'}} />}>
                    </Button>
                    </div>
{/* profile card section */}
                    <div>
                        <div className='profileContainer' style={showSideNav?{width:'16vw'}:{width:"60%"}}>
                            <Avatar>{username[0]}</Avatar>
                            {showSideNav?<h1 style={{fontStyle:"auto"}}>{username}</h1>:null}
                        </div> 
                    </div>
{/* options section */}
                    <div style={{width:'80%',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
    {/* Dash Board */}
                        <Button 
                            size="large"
                            id='verifyDash' 
                            className={activeID==="verifyDash"?'verificationSideNavButton activeButton muiButton':"verificationSideNavButton muiButton"} 
                            onClick={(event)=>this.setState({activeID:event.target.id,isInview:false})}
                            startIcon={<FaChartArea id='verifyDash' onClick={(event)=>this.setState({activeID:event.target.id,isInview:false})} />}>
                            {showSideNav? "Dash Board":""}
                        </Button>
    {/* Applications */}
                        <Button 
                            size="large" 
                            id='verifyApplications' 
                            className={activeID==="verifyApplications"?'verificationSideNavButton activeButton muiButton':"verificationSideNavButton muiButton"}  
                            onClick={(event)=>this.setState({activeID:event.target.id})}
                            startIcon={ <Desk id='verifyApplications' onClick={(event)=>this.setState({activeID:event.target.id})}/>}>
                            {showSideNav? "Applications":""}
                        </Button> 
    {/* Users */}
                        {Auth_Roles_To_CreateUser.includes(role)?<Button 
                            size="large" 
                            id='Create User' 
                            className={activeID==="Create User"?'verificationSideNavButton activeButton muiButton':"verificationSideNavButton muiButton"}  
                            onClick={(event)=>this.setState({activeID:event.target.id})}
                            startIcon={ <AiOutlineUserAdd id='Create User' onClick={(event)=>this.setState({activeID:event.target.id})} />}>
                            {showSideNav? "Users":""}
                        </Button>:null}
    {/* Colleges */}
                        {Auth_Roles_CollegeData.includes(role)?<Button 
                            size="large" 
                            id='Colleges' 
                            className={activeID==="Colleges"?'verificationSideNavButton activeButton muiButton':"verificationSideNavButton muiButton"}  
                            onClick={(event)=>this.setState({activeID:event.target.id})}
                            startIcon={ <GiByzantinTemple id='Colleges' onClick={(event)=>this.setState({activeID:event.target.id})} />}>
                            {showSideNav? "Colleges":""}
                        </Button>:null}
    {/* Payments */}
                        {Auth_Roles_CollegeData.includes(role)?<Button 
                            size="large" 
                            id='Payments' 
                            className={activeID==="Payments"?'verificationSideNavButton activeButton muiButton':"verificationSideNavButton muiButton"}  
                            onClick={(event)=>this.setState({activeID:event.target.id})}
                            startIcon={ <GiCash id='Payments' onClick={(event)=>this.setState({activeID:event.target.id})} />}>
                            {showSideNav? "Payments":""}
                        </Button>:null}
                    </div>
                 </nav>)
    }
  
// for switching to application view
    switchToCheckApplication=(event)=>{
        const {applicationsList}=this.state
        // eslint-disable-next-line eqeqeq
        const selectedApplication = applicationsList.filter((each)=>each.application_id==event.target.id)
        this.setState({selectedApplicationId:event.target.id,activeID:"applicationView",appliedFor:selectedApplication[0].certificate_name,certificateId:selectedApplication[0].certificate_id,createdDate:event.target.attributes.date.nodeValue})
    }

// Employee dashboard
    dashBoardView=()=>{
        const {allApplications,pending,approved,rejected,activeCard,redirected}=this.state
        return(<>
            <div className='dashBoardViewMainContainer'>
                {/* <h1 style={{fontFamily:"Public Sans",paddingBottom:"20px"}}>Welcome, {username}</h1> */}
                <div className='DashBoardCardsContainer'>
                    <div id='' onClick={this.ApplicationQueryParamSetter} className='DashBoardCard' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundImage:`linear-gradient(to right,${bgColors[0]},${bgColors[1]})`}}>
                        <h2 id=''>{allApplications}</h2>
                        <h3 id=''>Total Applications</h3>
                        <hr id='' style={activeCard===''?{width:"80%",height:'6px',background:"#93FF73", borderRadius:"3px",border:'none'}:{width:"80%"}}/>
                    </div>
                    <div id='pending' onClick={this.ApplicationQueryParamSetter} className='DashBoardCard' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundImage:`linear-gradient(to right,${bgColors[2]},${bgColors[3]})`}}>
                        <h2 id='pending'>{pending}</h2>
                        <h3 id='pending'>Pending</h3>
                        <hr id='pending' style={activeCard==='pending'?{width:"80%",height:'6px',background:"#93FF73", borderRadius:"3px",border:'none'}:{width:"80%"}}/>
                    </div>
                    <div id='approved' onClick={this.ApplicationQueryParamSetter} className='DashBoardCard' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundImage:`linear-gradient(to right,${bgColors[4]},${bgColors[5]})`}}>
                        <h2 id='approved'>{approved}</h2>
                        <h3 id='approved'>Approved</h3>
                        <hr id='approved' style={activeCard==='approved'?{width:"80%",height:'6px',background:"#93FF73", borderRadius:"3px",border:'none'}:{width:"80%"}}/>
                    </div>
                    <div id='rejected' onClick={this.ApplicationQueryParamSetter} className='DashBoardCard' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundImage:`linear-gradient(to right,${bgColors[6]},${bgColors[7]})`}}>
                        <h2  id='rejected'>{rejected}</h2>
                        <h3  id='rejected'>Rejected</h3>
                        <hr  id='rejected' style={activeCard==='rejected'?{width:"80%",height:'6px',background:"#93FF73", borderRadius:"3px",border:'none'}:{width:"80%"}}/>
                    </div>
                    <div id='redirected' onClick={this.ApplicationQueryParamSetter} className='DashBoardCard' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundImage:`linear-gradient(to right,${bgColors[6]},${bgColors[7]})`}}>
                        <h2  id='redirected'>{redirected}</h2>
                        <h3  id='redirected'>Redirected</h3>
                        <hr  id='redirected' style={activeCard==='redirected'?{width:"80%",height:'6px',background:"#93FF73", borderRadius:"3px",border:'none'}:{width:"80%"}}/>
                    </div>
                </div>
            </div>
            </>
        )
    }

// applications table
    applicationsView=()=>{
        const {applicationsList,pageNo,pageSize,getByStatus,offset}=this.state
        return(
            <div style={{display:'flex',flexDirection:"column",justifyContent:'center',alignItems:'center', marginTop:'20vh', padding:'20px'}}>
                <div style={{display:'flex',width:"95%",margin:'20px',padding:'30px',justifyContent:'space-around',alignItems:'center'}}>
                        <div style={{display:'flex',flexDirection:'column', width:'30%'}}>
                            <label>Search by status</label>
                            <CssSelect
                                id="demo-simple-select"
                                value={getByStatus}
                                onChange={(event)=>this.setState({getByStatus:event.target.value},this.getAllApplications)}
                                size="small"
                            >
                                {statusHeadings.map((each)=><MenuItem selected value={each.value}>{each.name}</MenuItem>)}
                            </CssSelect>
                        </div>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <label>Search</label>
                            <CssTextField type="search" size='small' onChange={(event)=>this.setState({searchingFor:event.target.value},this.getAllApplications)}/>
                        </div>
                </div>
                <TableContainer style={{margin:"20px 0 0 0",height:'60vh'}} component={Paper}>
                    <Table sx={{ width: '100%' }} aria-label="customized table">
                        <TableHead>
                        <TableRow >
                            {tableHeadings.map((each)=><StyledTableCell>{each}</StyledTableCell>)}
                        </TableRow>
                        </TableHead>
                        <TableBody style={{width:'100%'}}>
                        {applicationsList.map((row,index) => (
                            <StyledTableRow className='rowOnHover' key={row.application_id}>
                                <StyledTableCell component="th" scope="row">
                                    {index+1+offset}
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.student_id}</StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.certificate_name}</StyledTableCell>
                                <StyledTableCell align="left">{row.created_date}</StyledTableCell>
                                <StyledTableCell align="left">{row.status_message}</StyledTableCell>
                                <StyledTableCell align="left"><Button className="muiButton" id={row.application_id} date={row.created_date} onClick={this.switchToCheckApplication}><AiOutlineEye id={row.application_id} style={{pointerEvents:'none'}}/></Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{display:'flex',justifyContent:'center',alignItems:"center",width:'100%'}}>
                    <InView as="div" onChange={this.isInview}>
                        <TablePagination
                            component="div"
                            count={applicationsList.length}
                            page={pageNo}
                            onPageChange={(event,value)=>this.setState((prevState)=>({pageNo:value,offset:prevState.offset+(value*pageSize)}))}
                            rowsPerPage={pageSize}
                            onRowsPerPageChange={(event)=>this.setState({pageSize:event.target.value})}
                            />
                    </InView>
                </div>
            </div>

        )
    }

    profileMenuOpen=(event)=>{
        this.setState({menu:true,profileOptionEl:event.target})
    }

    profileMenuClose=()=>{
        this.setState({menu:false})
    }
    
    render(){
        const{role,menu,validUser,showSideNav,changePasword,isInview,profileOptionEl}=this.state
        return(
            validUser?<div className='verificationDashMainCont'>
                {changePasword?<Navigate to="/employee/changePassword"/>:null}
{/* NavBarContainer */}
                {this.sideNavContainer()}
                <div className='verificationDashContainer'>
{/* headerContainer */}
                    {isInview?null:<div style={{display:"flex", 
                                 justifyContent:"space-between",
                                 alignItems:"center",
                                 paddingRight:"30px",
                                //  height:"100px", 
                                 backgroundColor:"#f8f8f8d3",
                                 position:"absolute",
                                 top:"0",
                                 width:showSideNav?"80vw":"90vw"
                                 }}>
                        <img style={{height:"150px",paddingLeft:"10px",margin:"auto"}}  src={logopng} alt="logo"/>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', marginRight:'25px' }}>
                                <Typography sx={{ minWidth: 100,fontWeight:'bolder',fontSize:'16px' }}>{role}</Typography>
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
                                <MenuItem onClick={()=>this.ChangePassword()}>
                                    <ListItemIcon>
                                        <MdManageAccounts fontSize="small" /> 
                                    </ListItemIcon>
                                    Change Password
                                </MenuItem>
                        </Menu>
                    </div>}
{/* body Container */} 
                        {this.renderBodyContent()}                    
                </div>
            </div>:<Navigate to='/employeelogin/'/>
        )
    }
}

export default VerificationDashBoard