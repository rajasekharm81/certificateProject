import {Component} from 'react'
import {FaChartArea} from 'react-icons/fa'
import {GiHamburgerMenu} from "react-icons/gi"
import {Button,Avatar} from "@mui/material"
import {Desk} from "@mui/icons-material"
import logopng from "../../assects/logopng.png"
import { Navigate } from 'react-router-dom'
// import {FaRegThumbsUp} from "react-icons/fa"
// import {MdOutlinePendingActions,MdOutlineError} from "react-icons/md"

import Cookies from "js-cookie"

import "./index.css" 

const bgColors = ["#5F71E3","#5F71E3","#11CBEF","#1173EF","#F5375B","#F55F37","#1a1a4d","#1a1a4d"]

class VerificationDashBoard extends Component{
    state={activeID:"verifyDash",validUser:true,username:'',role:"",menu:false}

    componentDidMount=()=>{
        this.verifyUser()
        this.userDetails()
    }

    userDetails=()=>{
        const name = Cookies.get("name")
        const role = Cookies.get("role")
        this.setState({username:name.toUpperCase(),role:role.toUpperCase()})
    }

    verifyUser=()=>{
        const token = Cookies.get("staffAuthToken")
        if(token===undefined){
        this.setState({validUser:false})
      }else{
        this.setState({validUser:true})
      }
    }

     dashBoardView=()=>{
        const {username}=this.state
        return(<>
            <div className='dashBoardViewMainContainer'>
                <h1 style={{fontFamily:"Public Sans",paddingBottom:"20px"}}>Welcome, {username}</h1>
                <div className='DashBoardCardsContainer'>
                    <div className='DashBoardCard' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundImage:`linear-gradient(to right,${bgColors[0]},${bgColors[1]})`}}>
                        <h2>23</h2>
                        <h3>Total Applications</h3>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className='DashBoardCard' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundImage:`linear-gradient(to right,${bgColors[2]},${bgColors[3]})`}}>
                        <h2>23</h2>
                        <h3>Pending </h3>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className='DashBoardCard' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundImage:`linear-gradient(to right,${bgColors[4]},${bgColors[5]})`}}>
                        <h2>23</h2>
                        <h3>Approved</h3>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className='DashBoardCard' style={{display:"flex",flexDirection:"column",justifyContent:"space-around",backgroundImage:`linear-gradient(to right,${bgColors[6]},${bgColors[7]})`}}>
                        <h2>23</h2>
                        <h3>Rejected</h3>
                        <hr style={{width:"80%"}}/>
                    </div>
                </div>
            </div>
            </>
        )
    }

    applicationsView=()=>{
        return(
            <div className='dashBoardViewMainContainer'>
                <h1>Applications</h1>
            </div>
        )
    }

    renderBodyContent=()=>{
        const {activeID}=this.state
        switch(activeID){
            case "verifyDash":
                return this.dashBoardView()
            case "verifyApplications":
                return this.applicationsView()
            default:
                return null;
        }
    }

    toggleMenu=()=>{
        this.setState((prevState)=>({menu:!prevState.menu}))
    }

    logout=()=>{
        Cookies.remove("staffAuthToken")
        Cookies.remove("name")
        Cookies.remove("role")
        this.setState({validUser:false})
    }

    render(){
        const{activeID,username,role,menu,validUser}=this.state
        return(
            validUser?<div className='verificationDashMainCont'>
{/* NavBarContainer */}
                <nav className='verificationSideNav'>
    {/* top section */}
                    <div style={{display:"flex" ,
                                 justifyContent:"space-between",
                                 width:"95%",
                                 alignItems:"center", 
                                 margin:"30px 0 50px 0",
                                 }}>
                        <img alt="logo" className='navBarLogo' src='https://anucde.org/assets/img/brand/logo.png'/>
                        <Button 
                        size="large" 
                        id='hamburgerMenuExpanded' 
                        startIcon={<GiHamburgerMenu />}>
                    </Button>
                    </div>
{/* profile card section */}
                    <div>
                        <div className='profileContainer'>
                            <Avatar>{username[0]}</Avatar>
                            <h1 style={{fontStyle:"auto"}}>{username}</h1>
                        </div> 
                    </div>
{/* options section */}
                    <Button 
                        size="large" 
                        id='verifyDash' 
                        className={activeID==="verifyDash"?'verificationSideNavButton activeButton':"verificationSideNavButton"} 
                        onClick={(event)=>this.setState({activeID:event.target.id})}
                        startIcon={<FaChartArea />}>
                         Dash Board
                    </Button>
                    <Button 
                        size="large" 
                        id='verifyApplications' 
                        className={activeID==="verifyApplications"?'verificationSideNavButton activeButton':"verificationSideNavButton"}  
                        onClick={(event)=>this.setState({activeID:event.target.id})}
                        startIcon={ <Desk/>}>
                        Applications
                    </Button>
                 </nav>
                <div className='verificationDashContainer'>
{/* headerContainer */}
                    <div style={{display:"flex", 
                                 justifyContent:"space-between",
                                 alignItems:"center",
                                 paddingRight:"30px",
                                 height:"100px", 
                                 backgroundColor:"#f8f8f8d3",
                                 position:"absolute",
                                 top:"0",
                                 width:"78vw"
                                 }}>
                        <img style={{height:"95px",paddingLeft:"10px",margin:"auto"}}  src={logopng} alt="logo"/>
                        <Button onClick={this.toggleMenu}><h1>{role}</h1><span><GiHamburgerMenu/></span></Button>
                    </div>
                    {menu?<ul style={{position:"absolute",display:"flex",flexDirection:'column',right:"40px",top:"60px",backgroundColor:"white",padding:"20px"}}>
                        <Button onClick={this.logout}>Logout</Button>
                        <Button>Change Password</Button>
                    </ul>:null}
{/* body Container */}
                    {this.renderBodyContent()}
                </div>
            </div>:<Navigate to='/employeelogin/'/>
        )
    }
}

export default VerificationDashBoard