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

const CollegeTableHeadings = ["S.No","College Name","College Code","Coordinator Name","Contact Number","Status","Edit"]


const collegeData = [{ Name: 'The Shawshank Redemption', Code: 1994 },
                        { Name: 'The Godfather', Code: 1972 },
                        { Name: 'The Godfather: Part II', Code: 1974 },
                        { Name: 'The Dark Knight', Code: 2008 },
                        { Name: '12 Angry Men', Code: 1957 },
                        { Name: "Schindler's List", Code: 1993 },
                        { Name: 'Pulp Fiction', Code: 1994 },
                        { Name: 'The Shawshank Redemption', Code: 1994 },
                        { Name: 'The Godfather', Code: 1972 },
                        { Name: 'The Godfather: Part II', Code: 1974 },
                        { Name: 'The Dark Knight', Code: 2008 },
                        { Name: '12 Angry Men', Code: 1957 },
                        { Name: "Schindler's List", Code: 1993 },
                        { Name: 'Pulp Fiction', Code: 1994 },]


export class CreateCollege extends Component{
        state={ 
        // base Data
            CollegesData:[],
        // dynamic data 
            screen:'',
            AvailableCourses:[],
        // validations

        // notifications
            backErr:false,
            backErrMsg:'',
            severity:'success',
            isLoading:false,
}

    CreateCollegeForm=()=>{  
        const {operation}=this.props
        return(
            <div style={{marignTop:'150px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center', height:'100%',width:'99%'}}>
                   <h1 style={{textAlign:"center", backgroundImage:'linear-gradient(to bottom, #0099FF, #40F2FF)',borderRadius:'5px',color:'#242A63',width:"78%",padding:'1%',marginTop:'2%'}}>{operation==="Create"?"Create New College":"Modify College Details"}</h1>
                   <Grid container style={{display:'flex',justifyContent:'center', boxShadow:'0px 0px 12px 0px grey',width:'80%',backgroundImage:'linear-gradient(to top,#F9F6F0,white)', borderRadius:'10px',padding:'15px',flexWrap:'wrap'}}>
{/* College Name */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>College Name</label>
                            <CssTextField size='small'>xs=12 md=4</CssTextField>
                        </Grid>
{/* College Code */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>College Code</label>
                            <CssTextField size='small'>xs=12 md=4</CssTextField>
                        </Grid>
{/* Coordinator Name */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>Coordinator Name</label>
                            <CssTextField size='small'>xs=12 md=4</CssTextField>
                        </Grid>
{/* Contact Number */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>Contact Number</label>
                            <CssTextField type='number' size='small'>xs=12 md=4</CssTextField>
                        </Grid>
{/* College Loacation */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>Nearest City</label>
                            <CssTextField size='small'>xs=12 md=4</CssTextField>
                        </Grid>
{/*Active Courses available */}
                        <Grid style={{display:'flex',flexDirection:'column',margin:'10px'}} xs={12} md={5}>
                            <label style={{paddingBottom:'3px'}}>Active Courses Available</label>
                            <Autocomplete
                                multiple
                                limitTags={1}
                                size='small'
                                options={collegeData}
                                getOptionLabel={(option) => option.year} // need to change here
                                filterSelectedOptions
                                onChange={(event,opt)=>this.setState({AvailableCourses:opt})}
                                renderInput={(params) => (
                                <CssTextField
                                    size='small'
                                    {...params}
                                />
                                )}
                            />
                        </Grid> 
                    </Grid>
                    <div style={{padding:'20px'}}>
                        <Button size='small' variant='contained'>Create New College</Button>
                    </div>

            </div>
        )
    }
    
    render(){
        return(
            <>
                {this.CreateCollegeForm()}
            </>
        )
    }
}

export class Colleges extends Component{
    state={ 
        // base Data
            CollegesData:[],
        // dynamic data 
            screen:'CollegeTable', //CollegeTable
            isActive:true,
        // validations

        // notifications
            backErr:false,
            backErrMsg:'',
            severity:'success',
            isLoading:false,
}

    screenViewer=()=>{
        const {screen}=this.state
        switch(screen){
            case 'CollegeTable':  
                return this.CollegesListView()
            case "CreateCollege":   
                return <div style={{marginTop:'160px',height:'70%'}} ><CreateCollege operation="Create" screenUpdater={this.ChangeScreen}/></div>
            case "ModifyCollege":  
                return <div style={{marginTop:'160px',height:'70%'}} ><CreateCollege operation="Edit" screenUpdater={this.ChangeScreen}/></div>
            default :
                return null
        }
    }

// Switch to Edit college
    EditCollege=(event)=>{
        console.log(event.target.id)
        this.setState({screen:"ModifyCollege"})
    }

// for Rendering College list table

    CollegesListView=()=>{
        const{CollegesData}=this.state
        return(<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', marginTop:'150px',padding:'20px', height:'70%',overflow:'auto'}}>
            <div style={{width:'90%',justifyContent:'space-around',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <label style={{marginTop:'5px'}}>Search</label>
                    <CssTextField autoComplete='off' size='small' id='username' type='search'/>
                </div>
                {/* <CssTextField size='small' id='username' type='search'/> */}    
                <Button style={{fontSize:"14px"}} variant="contained" className='muiButton' onClick={()=>this.setState({screen:"CreateCollege"})}>Create New College</Button>
            </div>
            <TableContainer style={{margin:"20px 0 0 0",height:'60vh'}} component={Paper}>
                    <Table stickyHeader sx={{ width: '100%' }} aria-label="customized table">
                        <TableHead >
                        <TableRow>
                            {CollegeTableHeadings.map((each)=><StyledTableCell align="center" >{each}</StyledTableCell>)}
                        </TableRow>
                        </TableHead>
                        <TableBody style={{width:'100%', overflow:'auto'}}>
                            {CollegesData.map((each,index)=><StyledTableRow className='rowOnHover' >
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

   
    render(){
        return(
            <div style={{overflow:'auto'}}>
                {this.screenViewer()}
            </div>
        )
    }
} 