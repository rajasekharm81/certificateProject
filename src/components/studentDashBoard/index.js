import {Component} from "react"
import {Desk} from "@mui/icons-material"
import logopng from "../../assects/logopng.png"
import {Button} from "@mui/material"
import {FaChartArea} from 'react-icons/fa'
import {GiHamburgerMenu} from "react-icons/gi"
import {Navigate} from "react-router-dom"
import Cookies from "js-cookie"
import Greet from "../greetingsHandler"

import "./index.css"



class StudendDashBoard extends Component{
state = {activeID:"",isValidUser:true,userName:"",menu:false}

    componentDidMount(){
        this.userValidation()
    }

    logout=()=>{
        Cookies.remove("authToken")
        window.location.reload()
    }

    navigator=()=>{
        const {activeID}=this.state
        switch(activeID){
            case "newApplication":
                return <Navigate to='/requests/odrequest'/>
            default:
                return null
            
        }
    }

    userValidation=()=>{
        const token = Cookies.get("authToken")
        if(token===undefined){
            this.setState({isValidUser:false})
        }else{
            this.setState({isValidUser:true})
        }
    }

    renderBodyContent=()=>{
        const {userName} = this.state
        return (
            <div className="StudentDashBoardBody">
                <h1 style={{fontSize:"32px"}}>Hello {userName},</h1>
                <Greet fSize="32px"/>
                <h1 style={{textAlign:"center",fontSize:"35px"}}>Welcome to E-Services</h1>
            </div>
        )
    }

    toggleMenu=()=>{
        this.setState((prevState)=>({menu:!prevState.menu}))
    }

    renderInitialContent=()=>{
         const{activeID,menu}=this.state
        return(
            <div className='verificationDashMainCont'>
                 {this.navigator()}
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
                    {/* <div>
                        <div className='profileContainer'>
                            <Avatar>H</Avatar>
                            <h1>Name</h1>
                        </div> 
                    </div> */}
{/* options section */}
                    <Button 
                        size="large" 
                        id='newApplication' 
                        className={activeID==="newApplication"?'verificationSideNavButton activeButton':"verificationSideNavButton"} 
                        onClick={(event)=>this.setState({activeID:event.target.id})}
                        startIcon={<FaChartArea />}>
                         New Application
                    </Button>
                    <Button 
                        size="large" 
                        id='ApplicationStatus' 
                        className={activeID==="ApplicationStatus"?'verificationSideNavButton activeButton':"verificationSideNavButton"}  
                        onClick={(event)=>this.setState({activeID:event.target.id})}
                        startIcon={ <Desk/>}>
                        Application Status
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
                        <div>
                            <Button onClick={this.toggleMenu}><h1>Role</h1></Button>
                        </div>
                    </div>
                                 {menu?<ul style={{position:"absolute",top:"55px",right:"30px",backgroundColor:"white",borderRadius:"10px", padding:"30px"}}>
                                <li style={{listStyle:"none"}}><Button onClick={this.logout} style={{width:"100%"}}>Logout</Button></li>
                            </ul>:null}
{/* body Container */}
                    {this.renderBodyContent()}
                </div>
            </div>

        )
    }

    render(){
        const{isValidUser}=this.state
        return( 
            isValidUser?this.renderInitialContent():<Navigate to="/student/signin"/>
        )
    }
}

export default StudendDashBoard