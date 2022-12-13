import {Component} from "react"
import logopng from "../../assects/logopng.png"
import "./index.css"


class Header extends Component{
    render(){
        return(
            <div className="headerMainContainer">
                <img style={{padding:"10px", width:"45%", height:"150px"}} alt="logo" src={logopng}/>
            </div>
        )
    }
}

export default Header