import {Component} from 'react'
import {Button} from "@mui/material"

import './index.css'



class Payment extends Component{
    render(){
        return(
            <div className='PaymentsMain'>
                <div className='paymentContainer'>
                    <h1 style={{fontFamily:"cursive", fontSize:"32px", fontVariant:"ruby"}}>Payments Page</h1>
                    <Button variant='contained'>Pay Now</Button>
                </div>
            </div>
        )
    }
} 

export default Payment