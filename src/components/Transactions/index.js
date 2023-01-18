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
        Box,
        Snackbar,
        Alert,
    } from "@mui/material"
import {FaEdit} from "react-icons/fa"
import LoadingView from "../loadingView"
import differenceInDays from 'date-fns/differenceInDays'
import { CssTextField,StyledTableCell,StyledTableRow } from '../customizedComponents'

import axios from 'axios'
import Cookies from 'js-cookie'

const TrasactionsTableHeadings = ["S.No","Application Number","Hallticket Number","Applicant Name","Amount","Transaction Number","Paid On"]






export class Transactions extends Component{
    state={ 
        // base Data
            TransactionsData:[],
        // dynamic data
            StartDate:'',
            EndDate:"",
        // validations
        // notifications
            backErr:false,
            backErrMsg:'',
            severity:'success',
            isLoading:false,
            dateErr:false
}



dateRangeValidator=()=>{
    const {StartDate,EndDate}=this.state
    const days = differenceInDays(new Date(EndDate),new Date(StartDate))

    if(days<0){
        this.setState({dateErr:true,backErr:true,backErrMsg:'End Date Must be Greater than From Date', severity:'error'})
    }
    else if(days>90){
        this.setState({dateErr:true,backErr:true,backErrMsg:'Maximum Days are 90', severity:'error'})
    }
    else if(StartDate==="" && EndDate!==""){
        this.setState({dateErr:true,backErr:true,backErrMsg:'Please enter Starting Date', severity:'error'})
    }
    else if(StartDate!=="" && days>=0 && days <=90){
        this.setState({dateErr:false,backErr:false,backErrMsg:'', severity:'success'})
    }
}

validateDate=()=>{
    const {dateErr,StartDate,EndDate}=this.state
    this.dateRangeValidator()
    if(dateErr===false){
        console.log(StartDate,EndDate)
    }
    else{
        console.log("Err")
    }
}


// for Rendering Payments list table

    PaymentsListView=()=>{
        const{TransactionsData,StartDate,EndDate,dateErr}=this.state
        return(<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', marginTop:'150px',padding:'20px', height:'70%',overflow:'auto'}}>
            <div style={{width:'90%',justifyContent:'space-around',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <label style={{marginTop:'5px'}}>Search</label>
                    <CssTextField autoComplete='off' size='small' id='username' type='search'/>
                </div>
                {/* <CssTextField size='small' id='username' type='search'/> */}    
                <div style={{display:'flex',flexDirection:'column'}}>
                    <lable>Pick Date Range</lable>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center', marginTop:'5px'}}>
                        <CssTextField error={dateErr} onChange={(event)=>this.setState({StartDate:event.target.value},this.dateRangeValidator)} size='small' type='date' value={StartDate} />
                            <Box sx={{ mx: 2 }}> To </Box>
                        <CssTextField error={dateErr} onChange={(event)=>this.setState({EndDate:event.target.value},this.dateRangeValidator)} size='small' type='date' value={EndDate} />
                        <Button style={{fontSize:"14px",marginLeft:'10px'}} variant="contained" className='muiButton' onClick={this.validateDate}>Search</Button>
                    </div>
                </div>
                
            </div>
            <TableContainer style={{margin:"20px 0 0 0",height:'60vh'}} component={Paper}>
                    <Table stickyHeader sx={{ width: '100%' }} aria-label="customized table">
                        <TableHead >
                            <TableRow>
                                {TrasactionsTableHeadings.map((each)=><StyledTableCell align="center" >{each}</StyledTableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody style={{width:'100%', overflow:'auto'}}>
                            {TransactionsData.map((each,index)=><StyledTableRow className='rowOnHover' >
                                <StyledTableCell align="center" component="th" scope="row">
                                    {index+1}
                                </StyledTableCell>
                                <StyledTableCell align="center">S.no</StyledTableCell>
                                <StyledTableCell align="center">Sri college</StyledTableCell>
                                <StyledTableCell align="center">022</StyledTableCell>
                                <StyledTableCell align="center">Kumar</StyledTableCell>
                                <StyledTableCell align="center">9999999999</StyledTableCell>
                                <StyledTableCell align="center"><Switch
                                                                checked={each.active==1?true:false}
                                                                onChange={() => this.setState((prevState)=>({isActive:!prevState.isActive}))}
                                                                name="loading"
                                                                color="primary"
                                                            /></StyledTableCell>
                                <StyledTableCell align="center"><Button id={each.user_id} className="muiButton" onClick={this.EditCollege}><FaEdit id={each.user_id} onClick={this.EditCollege}/></Button></StyledTableCell>
                            </StyledTableRow>)}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>)
    }

    handleClose=()=>{
        this.setState({backErr:false})
    }

   
    render(){
        const {backErr,backErrMsg,severity,isLoading}=this.state
        return(
            <>
            <div style={{overflow:'auto'}}>
                {this.PaymentsListView()}
            </div>
            <Snackbar open={backErr}
                        autoHideDuration={3000} 
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