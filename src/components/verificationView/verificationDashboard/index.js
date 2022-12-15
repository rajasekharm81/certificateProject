import {Component} from 'react'
import {FaChartArea} from 'react-icons/fa'
import {GiHamburgerMenu} from "react-icons/gi"
import {Button,Avatar} from "@mui/material"
import {Desk} from "@mui/icons-material"
import logopng from "../../../assects/logopng.png"
// import {FaRegThumbsUp} from "react-icons/fa"
// import {MdOutlinePendingActions,MdOutlineError} from "react-icons/md"

import "./index.css" 

const bgColors = ["#5F71E3","#5F71E3","#11CBEF","#1173EF","#F5375B","#F55F37","#1a1a4d","#1a1a4d"]

class VerificationDashBoard extends Component{
    state={activeID:"verifyDash"}


     dashBoardView=()=>{
        return(
            <div className='dashBoardViewMainContainer'>
                <h1 style={{fontFamily:"Public Sans"}}>Welcome Name</h1>
                <div className='DashBoardCardsContainer'>
                    <div className='DashBoardCard' style={{backgroundImage:`linear-gradient(to right,${bgColors[0]},${bgColors[1]})`}}>
                        <h2>23</h2>
                        <h2>Total Applications</h2>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className='DashBoardCard' style={{backgroundImage:`linear-gradient(to right,${bgColors[2]},${bgColors[3]})`}}>
                        <h2>23</h2>
                        <h2>Pending </h2>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className='DashBoardCard' style={{backgroundImage:`linear-gradient(to right,${bgColors[4]},${bgColors[5]})`}}>
                        <h2>23</h2>
                        <h2>Approved</h2>
                        <hr style={{width:"80%"}}/>
                    </div>
                    <div className='DashBoardCard' style={{backgroundImage:`linear-gradient(to right,${bgColors[6]},${bgColors[7]})`}}>
                        <h2>23</h2>
                        <h2>Rejected</h2>
                        <hr style={{width:"80%"}}/>
                    </div>
                </div>
            </div>
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

    render(){
        const{activeID}=this.state
        return(
            <div className='verificationDashMainCont'>
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
                            <Avatar>H</Avatar>
                            <h1>Name</h1>
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
                        <img style={{height:"95px",paddingLeft:"10px"}} src={logopng} alt="logo"/>
                        <h1>Role</h1>
                    </div>
{/* body Container */}
                    {this.renderBodyContent()}
                </div>
            </div>
        )
    }
}

export default VerificationDashBoard