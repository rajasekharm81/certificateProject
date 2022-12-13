import {Component} from 'react'
import {FaChartArea} from 'react-icons/fa'
import {GiHamburgerMenu} from "react-icons/gi"
import {Button} from "@mui/material"
import {Desk} from "@mui/icons-material"
import "./index.css" 


class VerificationDashBoard extends Component{
    state={activeID:"verifyDash"}
    render(){
        const{activeID}=this.state
        return(
            <div className='verificationDashMainCont'>
{/* NavBarContainer */}
                <nav className='verificationSideNav'>
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
                    <div style={{display:"flex", justifyContent:"flex-end", height:"100px", backgroundColor:"orange"}}>
                        <h1>ioo</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default VerificationDashBoard