
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */

import {Component} from 'react'
import {    Snackbar,
            Alert,
            Button,
            ThemeProvider,
            Box,
            Dialog,
            DialogActions,
            DialogContent,
            DialogContentText,
            DialogTitle,
            TextField
        } from '@mui/material'
import LoadingView from "../loadingView"

import { InView } from 'react-intersection-observer';
import ScrollToTop from "react-scroll-up"

import ImageViewer from 'react-simple-image-viewer';

import {theme} from "../customizedComponents"

import Cookies from 'js-cookie'
import axios from 'axios'

import "./index.css"


const tableHeadings = ["Month & Year",1,2,3,4,5,6,7,8,9,'I',"II",'III','IV','V','VI','Sessionals',"Total Marks", "Max Marks"]

const DegreeTableHeadings =["Month & Year","1",'2','3','4','5','6','7','8','9','10','11','12','13']
const thirdDegreeTableHeadings =["Month & Year",'W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','Total']


const PgEduAndLawTableHeadings = ["Month & Year","P-1","P-2","P-3","P-4",'P-5','P-6','P-7','P-8','P-9','Pr-1','Pr-2','Pr-3','Pr-4',"Proj/ Viva","Total"]
const PgEduAndLawBettermentTableHeadings = ["Month & Year","P-1","P-2","P-3","P-4",'P-5','P-6','P-7','P-8','P-9',"Total"]                      

export class CmmPType1 extends Component{

    firstYearMarksForm=()=>{
        const {y1}=this.props
        return(
            <div>
                <div>
    {/* First Year Marks section */}
                    
                    <h1 style={{marginTop:'20px'}}>First Year</h1>        
                        <div style={{display:"flex",marginLeft:"163px"}}>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                        </div>
                        <table style={{margin:"0 0 0px 0"}}>
                            <tr >
                            { tableHeadings.map((each)=><th style={{border:"1px solid black",maxWidth:'53px',overflow:"auto"}} id={`1st${each}`}>{each}</th>)}
                            </tr>
                                {/* eslint-disable-next-line eqeqeq */}
                                {y1.map((each)=><tr>{each.marks.map((m,index)=><td><input disabled id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                                </table>
                </div>
            </div>
            )
    }

    SecondYearMarksForm=()=>{
        const {y2}=this.props
        return(
            <div >
                <div >
    {/* second Year Marks section */}
                    <h1 style={{marginTop:'20px'}}>Second Year</h1>        
                        <div style={{display:"flex",marginLeft:"163px"}}>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                        </div>
                        <table style={{margin:"0 0 0px 0"}}>
                            <tr >
                            { tableHeadings.map((each)=><th style={{border:"1px solid black",maxWidth:'53px',overflow:"auto"}} id={`1st${each}`}>{each}</th>)}
                            </tr>
                                {/* eslint-disable-next-line eqeqeq */}
                                {y2.map((each)=><tr>{each.marks.map((m,index)=><td><input disabled id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                        </table>
                </div>
            </div>
            )
    }

    ThirdYearMarksForm=()=>{
        const {y3}=this.props
        return(
            <div >
                <div >
    {/* Third Year Marks section */}
                    
                    <h1 style={{marginTop:'20px'}}>Third Year</h1>        
                        <div style={{display:"flex",marginLeft:"163px"}}>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                        </div>
                        <table style={{margin:"0 0 0px 0"}}>
                            <tr >
                            { tableHeadings.map((each)=><th style={{border:"1px solid black",maxWidth:'53px',overflow:"auto"}} id={`1st${each}`}>{each}</th>)}
                            </tr>
                                {/* eslint-disable-next-line eqeqeq */}
                                {y3.map((each)=><tr>{each.marks.map((m,index)=><td><input disabled id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                        </table>
                </div>
            </div>
            )
    }

    FourthYearMarksForm=()=>{
        const {y4}=this.props
        return(
            <div >
                <div >
    {/* Third Year Marks section */}
                    
                    <h1 style={{marginTop:'20px'}}>Fourth Year</h1>        
                        <div style={{display:"flex",marginLeft:"163px"}}>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                        </div>
                        <table style={{margin:"0 0 0px 0"}}>
                            <tr >
                            { tableHeadings.map((each)=><th style={{border:"1px solid black",maxWidth:'53px',overflow:"auto"}} id={`1st${each}`}>{each}</th>)}
                            </tr>
                                {/* eslint-disable-next-line eqeqeq */}
                                {y4.map((each)=><tr>{each.marks.map((m,index)=><td><input disabled id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                        </table>
                </div>
            </div>
            )
    }

    render(){
        return( <div>        
            {/* style={{width:'100%', overflow:'auto',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'20px'}} */}
                    {this.firstYearMarksForm()}
                    {this.SecondYearMarksForm()}
                    {this.ThirdYearMarksForm()}
                    {this.FourthYearMarksForm()}
                </div>
    )
    }
}

export class CmmPType2 extends Component{
    

    firstYearMarksForm=()=>{
        const {y1}=this.props
        return(
            <div>
                <div>
    {/* First Year Marks section */}
                    <h1 style={{marginTop:'20px'}}>First Year</h1>        
                        <div style={{display:"flex",marginLeft:"163px"}}>
                            <p style={{minWidth:"173px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Part I</p>
                            <p style={{minWidth:"612px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Part II</p>
                        </div>
                        <table style={{margin:"0 0 0px 0"}}>
                            <tr >
                            { DegreeTableHeadings.map((each)=><th style={{border:"1px solid black",maxWidth:'53px',overflow:"auto"}} id={`1st${each}`}>{each}</th>)}
                            </tr>
                                {/* eslint-disable-next-line eqeqeq */}
                                {y1.map((each)=><tr>{each.marks.map((m,index)=><td><input disabled id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                        </table>
                </div>
            </div>
            )
    }

    SecondYearMarksForm=()=>{
        const {y2}=this.props
        return(
            <div className='mainContainer'>
                <div className='marksContainer' >
    {/* second Year Marks section */}
                    <h1 style={{marginTop:'20px'}}>Second Year</h1>        
                        <div style={{display:"flex",marginLeft:"163px"}}>
                            <p style={{minWidth:"173px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Part I</p>
                            <p style={{minWidth:"612px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Part II</p>
                        </div>
                        <table style={{margin:"0 0 0px 0"}}>
                            <tr >
                            { DegreeTableHeadings.map((each)=><th style={{border:"1px solid black",maxWidth:'53px',overflow:"auto"}} id={`1st${each}`}>{each}</th>)}
                            </tr>
                                {/* eslint-disable-next-line eqeqeq */}
                                {y2.map((each)=><tr>{each.marks.map((m,index)=><td><input disabled id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                        </table>
                </div>
            </div>
            )
    }

    ThirdYearMarksForm=()=>{
        const {y3}=this.props
        return(
            <div>
                <div>
    {/* Third Year Marks section */}
                    <h1 style={{marginTop:'20px'}}>Third Year</h1>        
                        {/* <div style={{display:"flex",marginLeft:"163px"}}>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                        </div> */}
                        <table style={{margin:"0 0 0px 0"}}>
                            <tr >
                            { thirdDegreeTableHeadings.map((each)=><th style={{border:"1px solid black",maxWidth:'53px',overflow:"auto"}} id={`1st${each}`}>{each}</th>)}
                            </tr>
                                {/* eslint-disable-next-line eqeqeq */}
                                {y3.map((each)=><tr>{each.marks.map((m,index)=><td><input disabled id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                        </table>
                </div>
            </div>
            )
    }
    render(){
        return( <div>
             {/* style={{width:'100%', overflow:'auto',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'20px'}} */}
                    {this.firstYearMarksForm()}
                    {this.SecondYearMarksForm()}
                    {this.ThirdYearMarksForm()}
                </div>
    )
    }
}

export class CmmPType3 extends Component{
    firstYearMarksForm=()=>{
        const {y1}=this.props
        return(
            <div >
                <div >
    {/* First Year Marks section */}
                    <h1 style={{marginTop:'20px'}}>First Year</h1>        
                        {/* <div style={{display:"flex",marginLeft:"163px"}}>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                        </div> */}
                        <table style={{margin:"0 0 0px 0"}}>
                            <tr >
                            { PgEduAndLawTableHeadings.map((each)=><th style={{border:"1px solid black",maxWidth:'53px',overflow:"auto"}} id={`1st${each}`}>{each}</th>)}
                            </tr>
                                {/* eslint-disable-next-line eqeqeq */}
                                {y1.map((each)=><tr>{each.marks.map((m,index)=><td><input disabled id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
            
                        </table>
                </div>
            </div>
            )
    }

    SecondYearMarksForm=()=>{
        const {y2}=this.props
        return(
            <div>
                <div>
    {/* second Year Marks section */}
                    <h1 style={{marginTop:'20px'}}>Second Year</h1>        
                        {/* <div style={{display:"flex",marginLeft:"163px"}}>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                        </div> */}
                        <table style={{margin:"0 0 0px 0"}}>
                            <tr >
                            { PgEduAndLawTableHeadings.map((each)=><th style={{border:"1px solid black",maxWidth:'53px',overflow:"auto"}} id={`1st${each}`}>{each}</th>)}
                            </tr>
                                {/* eslint-disable-next-line eqeqeq */}
                                {y2.map((each)=><tr>{each.marks.map((m,index)=><td><input disabled id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                    </table>
                </div>
            </div>
            )
    }

    ThirdYearMarksForm=()=>{
        const {y3}=this.props
        return(
            <div>
                <div>
    {/* Third Year Marks section */}
                    <h1 style={{marginTop:'20px'}}>Third Year</h1>        
                        {/* <div style={{display:"flex",marginLeft:"163px"}}>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                        </div> */}
                        <table style={{margin:"0 0 0px 0"}}>
                            <tr >
                            { PgEduAndLawTableHeadings.map((each)=><th style={{border:"1px solid black",maxWidth:'53px',overflow:"auto"}} id={`1st${each}`}>{each}</th>)}
                            </tr>
                                {/* eslint-disable-next-line eqeqeq */}
                                {y3.map((each)=><tr>{each.marks.map((m,index)=><td><input disabled id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                        </table>
                </div>
            </div>
            )
    }

    FourthYearMarksForm=()=>{
        const {y4}=this.props
        return(
            <div>
                <div>
    {/* Fourth Year Marks section */}
                    <h1 style={{marginTop:'20px'}}>Betterment</h1>        
                        {/* <div style={{display:"flex",marginLeft:"163px"}}>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                            <p style={{minWidth:"552px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                        </div> */}
                        <table style={{margin:"0 0 0px 0"}}>
                            <tr >
                            { PgEduAndLawBettermentTableHeadings.map((each)=><th style={{border:"1px solid black",maxWidth:'53px',overflow:"auto"}} id={`1st${each}`}>{each}</th>)}
                            </tr>
                                {/* eslint-disable-next-line eqeqeq */}
                                {y4.map((each)=><tr>{each.marks.map((m,index)=><td><input disabled id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                        </table>
                </div>
            </div>
            )
    }

    render(){
        return( <div>
             {/* style={{width:'100%', overflow:'auto',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'20px'}} */}
                    {this.firstYearMarksForm()}
                    {this.SecondYearMarksForm()}
                    {this.ThirdYearMarksForm()}
                    {this.FourthYearMarksForm()}
                </div>
    )
    }  
}

// for certificate_id 1 (Original Degree)
export class OdApplicationPreview extends Component{
    state={
        currentStatus:'',
// essentials
        districts:[],
        states:[],
        programs:[],
        courses:[],
        isAuthToValidate:true,
// student details
        studentName:'',
        district:'',
        state:'',
        degree: '',
        cmmType:'',
        studentBranch:'',
        courseCategory:'',
        dependentOf:'',
        dependentName:'',
        street:'',
        village:'',
        mandal:'',
        pinCode:'',
        registrationNumber:'',
        examMonth:'',
        examYear:'',
        studyType:'',
        collageName:'',
        examCenter:'',
        higherEducation:'',
        Docfiles:[],
        appliedFor:'',
        reason:'',
// student marks details
        y1:[],
        y2:[],
        y3:[],
        y4:[],
// uploaded documents
        year1docs:[],
        year2docs:[],
        year3docs:[],
        year4docs:[],
// image viewer
        currentImage:'',
        isViewerOpen1:false,
        isViewerOpen2:false,
        isViewerOpen3:false,
        isViewerOpen4:false,
// error and notifications
        backErr:false,
        backErrMsg:"",
        isLoading:false,
        severity:'',
// confirmation dilog box
        confirmDilogueBoxOpen:false,
        decision:''

    }

    componentDidMount(){
        const {currentStatus}=this.props
        this.setState({currentStatus:currentStatus})
        this.getStates()
        this.isUserLoggedIn()
    }

// uservalidation

    isUserLoggedIn=()=>{
        const Token = Cookies.get("staffAuthToken")
        if(Token===undefined){
                window.location.reload()
        }else{
            const role = Cookies.get("role")
            switch(role){
                case "superadmin":
                    this.setState({isAuthToValidate:false})
                    break;
                case "srassistant":
                    this.setState({isAuthToValidate:true})
                    break;
                case "jrassistant":
                    this.setState({isAuthToValidate:true})
                    break;
                case "SUPERINTENDENT":
                    this.setState({isAuthToValidate:true})
                    break;
                default:
                    return null
            }
        }
    }

// essentials
    getStates=async()=>{
        try{const token = Cookies.get("staffAuthToken")
        this.setState({isLoading:true})
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/states/`,
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Accept":"application/json"
            }
        }
        const response = await axios(options)
        this.setState({states:response.data.data},this.getDistricts)
    }catch(e){
        this.setState({isLoading:false,backErr:true,backErrMsg:e.message,severity:'error'})
    }
    }
   
    getDistricts=async()=>{
        const token = Cookies.get("staffAuthToken")
        try{
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/districts/`,
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Accept":"application/json"
            }
        }
        const dist = await axios(options)
        this.setState({districts:dist.data.data},this.getPrograms)
    }catch(e){
        this.setState({isLoading:false,backErr:true,backErrMsg:e.message,severity:'error'})
    }
    }

    getPrograms=async()=>{
        const token = Cookies.get("staffAuthToken")
        try{
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/programs/`,
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Accept":"application/json"
            }
        }
        const programs = await axios(options)
        this.setState({programs:programs.data.data},this.getCourses)
    }catch(e){
        this.setState({isLoading:false,backErr:true,backErrMsg:e.message,severity:'error'})
    }
    }

    getCourses=async()=>{
        const token = Cookies.get("staffAuthToken")
        try{
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/program-categories/`,
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Accept":"application/json"
            }
        }
        const response = await axios(options)
        this.setState({courses:response.data.data},this.getApplicationDetails)
    }catch(e){
        this.setState({isLoading:false,backErr:true,backErrMsg:false,severity:'error'})
    }
    }

// get application details (basic details, marks, image urls)
    getApplicationDetails=async()=>{
        const {districts,states,programs,courses}=this.state
        const token = Cookies.get("staffAuthToken")
        const {id,certificateName} =this.props
        try{
            const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/view-od-application/?application_id=${id}`,
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Accept":"application/json"
            }
        }

        const studentData = await axios(options)
            const studentName = studentData.data.student_details.studentName
            const studentAddress = studentData.data.address
            const progDetails = studentData.data.program_details
            const files = studentData.data.files
            const months= ["Jan",'Feb','Mar','Apr','May',"Jun","Jul","Aug","Sep","Oct","Nov","Dec"]


// basic application data
            // eslint-disable-next-line array-callback-return
            districts.map((each)=>{
                let temp=''
                if(each.district_id===studentAddress.district){
                    temp=each.district_name
                }
                this.setState({district:temp})
                
            })

            // eslint-disable-next-line array-callback-return
            states.map(async(each)=>{
                let temp=''
                if(each.state_id===studentAddress.state){
                    temp=each.state_name
                }
                await this.setState({state:temp})
                
            })

            // eslint-disable-next-line array-callback-return
            programs.map((each)=>{
                if(each.program_id===progDetails.prog_ID){
                  this.setState({degree:each.program_name,cmmType:each.cmm_type})
                }              
            })

            // eslint-disable-next-line array-callback-return
            courses.map((each)=>{
                // eslint-disable-next-line eqeqeq
                if(each.program_category_id==progDetails.studentBranch_id){
                    this.setState({studentBranch:each.name})
                }
            })
             // eslint-disable-next-line array-callback-return
            months.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index+1==progDetails.examMonth){
                    this.setState({examMonth:each})
                }
                
            })


            if(progDetails.studyType===0){
                this.setState({studyType:"Private Study"})
            }else{
                this.setState({studyType:"Regular Study"})
            }


        const marks = studentData.data.marks

            // eslint-disable-next-line array-callback-return
            marks.map((each,index)=>{
                if(index===0){
                    this.setState({y1:each})
                }
                if(index===1){
                    this.setState({y2:each})
                }
                if(index===2){
                    this.setState({y3:each})
                }
                if(index===3){
                    this.setState({y4:each})
                }

            })

            this.setState({
                isLoading:false,
                studentName:studentName,
                pinCode:studentAddress.pinCode,
                registrationNumber:progDetails.registrationNumber,
                examYear:progDetails.examYear,
                collageName:progDetails.collageName,
                examCenter:progDetails.examCenter,
                dependentOf:studentAddress.dependentOf,
                dependentName:studentAddress.dependentName,
                street:studentAddress.street,
                village:studentAddress.village,
                mandal:studentAddress.mandal,
                Docfiles:files,
                appliedFor:certificateName
            },this.docFiles)

        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("StaffAuthToken")
                window.location.reload()
                }, 3000);
           }if(e.response.status===422){
            this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }
    }  

    docFiles=()=>{
        const {Docfiles}=this.state
        let y1temp=[]
        let y2temp=[]
        let y3temp=[]
        let y4temp=[]
            // eslint-disable-next-line array-callback-return
            Docfiles.map((each)=>{
            if(each.includes("year1")){
            y1temp.push(each)
            }
            if(each.includes("year2")){
            y2temp.push(each)
            }
            if(each.includes("year3")){
            y3temp.push(each)
            }
            if(each.includes("year4")){
            y4temp.push(each)
            }
            this.setState({ year1docs:y1temp,
                            year2docs:y2temp,
                            year3docs:y3temp,
                            year4docs:y4temp})
        })
    }

    RenderApplicationForm=()=>{
        const { dependentOf,
                dependentName,
                street,
                village,
                mandal,
                district,
                state,
                pinCode,
                studentName,
                degree,
                studentBranch,
                registrationNumber,
                examMonth,
                examYear,
                studyType,
                collageName,
                higherEducation,
                examCenter,
                appliedFor
            }=this.state
        return(
            <div style={{marginTop:'22vh',padding:'20px', display:'flex',flexDirection:'column',  alignItems:'center',backgroundColor:'white'}}>
                <h1 style={{fontSize:'18px'}}>Application For Obtaining <span style={{textDecoration:'underline',fontSize:'18px'}}>{appliedFor}</span></h1>
                <div style={{display:'flex',width:'100%',marginTop:'10px', padding:'15px'}}>
                    <div style={{width:'50%', border:'1px solid #9C9C9C',borderRadius:'5px',padding:'10px',justifyContent:'flex-end'}}>
                        <h2>Name of the candidate including surname in full as entered in the university records</h2>
                        <p>If the name has been changed subsequently and change recognized</p>
                    </div>
                    <div style={{width:'50%', border:'1px solid #9C9C9C',borderRadius:'5px',padding:'10px',alignItems:'flex-end'}}>
                        <h2>{studentName}</h2>
                    </div>
                </div>
                <div style={{display:'flex',width:'100%', padding:'15px'}}>
                    <div style={{width:'50%', border:'1px solid #9C9C9C',borderRadius:'5px',padding:'10px',justifyContent:'flex-end'}}>
                        <h2>Address to which the Diploma is to be dispatched</h2>
                    </div>
                    <div style={{width:'50%', border:'1px solid #9C9C9C',borderRadius:'5px',padding:'10px',alignItems:'flex-end'}}>
                        <p><span>{dependentOf} </span> {dependentName}</p>
                        <p>{street},</p>
                        <p>{village},</p>
                        <p>{mandal} (M),</p>
                        <p>{district} (Dist),</p>
                        <p>{state}</p>
                        <p>Pin: {pinCode}</p>
                    </div>
                </div>
                <div style={{display:'flex',width:'100%', padding:'15px'}}>
                    <div style={{width:'50%', border:'1px solid #9C9C9C',borderRadius:'5px',padding:'10px',justifyContent:'flex-end'}}>
                        <h2>Month and year of passing the examination, The group of branch taken and registered number in each part or division of examination</h2>
                    </div>
                    <div style={{width:'50%', border:'1px solid #9C9C9C', borderRadius:'5px',padding:'10px',alignItems:'flex-end'}}>
                        <p>Examination: {degree},{studentBranch}.</p>
                        <p>Month & Year: {examMonth} & {examYear}.</p>
                        <p>Regd.No: {registrationNumber}.</p>
                    </div>
                </div>
                <div style={{display:'flex',width:'100%', padding:'15px'}}>
                    <div style={{width:'50%', border:'1px solid #9C9C9C', borderRadius:'5px',padding:'10px',justifyContent:'flex-end'}}>
                        <h2>College in which studied (For regular student), If the candidate passed the degree under private study, he must write as "Private Stydy"</h2>
                    </div>
                    <div style={{width:'50%', border:'1px solid #9C9C9C', borderRadius:'5px',padding:'10px',alignItems:'flex-end'}}>
                        <p>Study Type: {studyType}.</p>
                        <p>College Name: {collageName}.</p>
                    </div>
                </div>
                <div style={{display:'flex',width:'100%', padding:'15px'}}>
                    <div style={{width:'50%', border:'1px solid #9C9C9C', borderRadius:'5px',padding:'10px',justifyContent:'flex-end'}}>
                        <h2>Examination Center where last appeared (Regular or Private)</h2>
                    </div>
                    <div style={{width:'50%', border:'1px solid #9C9C9C', borderRadius:'5px',padding:'10px',alignItems:'flex-end'}}>
                        <p>Study Type: {studyType}.</p>
                        <p>Examination Center Name: {examCenter}.</p>
                    </div>
                </div>
                <div style={{display:'flex',width:'100%', padding:'15px'}}>
                    <div style={{width:'50%', border:'1px solid #9C9C9C', borderRadius:'5px',padding:'10px',justifyContent:'flex-end'}}>
                        <h2>candidate applying for higherEducation</h2>
                    </div>
                    <div style={{width:'50%', border:'1px solid #9C9C9C', borderRadius:'5px',padding:'10px',alignItems:'flex-end'}}>
                        <p>Applying For Higher Education: {higherEducation}.</p>
                    </div>
                </div>
            </div>
        )
    }

    renderMarksLists=()=>{
        const{cmmType,y1,y2,y3,y4}=this.state
        switch(cmmType){
            case 1:
                return <CmmPType1 y1={y1} y2={y2} y3={y3} y4={y4}/>
            case 2:
                return <CmmPType2 y1={y1} y2={y2} y3={y3} />
            case 3:
                return <CmmPType3 y1={y1} y2={y2} y3={y3} y4={y4}/>
            default:
                 return null
        }

    }

    renderDocs=()=>{
        const{year1docs,year2docs,year3docs,year4docs,currentImage,isViewerOpen1,isViewerOpen2,isViewerOpen3,isViewerOpen4}=this.state
       return   <div style={{minHeight:'100%',width:'95 %',border:'1px solid grey',padding:'30px'}}>
                    <div>
                        <h1>First Year</h1>
                        {year1docs.map((each,index)=><img className='docsImage' key={`y1${index}`} src={each} onClick={()=>{this.setState({isViewerOpen1:true,currentImage:index})}} alt='year1memo'/>)}
                        {isViewerOpen1 && (
                            <ImageViewer
                            src={ year1docs }
                            currentIndex={ currentImage }
                            disableScroll={ false }
                            closeOnClickOutside={ true }
                            onClose={()=>this.setState({isViewerOpen1:false}) }
                            />
                        )}
                    </div>
                    <div>
                        <h1>Second Year</h1>
                        {year2docs.map((each,index)=><img src={each} alt='year2memo' onClick={()=>{this.setState({isViewerOpen2:true,currentImage:index})}} className='docsImage'/>)}
                        {isViewerOpen2 && (
                            <ImageViewer
                            src={ year2docs }
                            currentIndex={ currentImage }
                            disableScroll
                            closeOnClickOutside={ true }
                            onClose={()=>this.setState({isViewerOpen2:false}) }
                            />
                        )}
                    </div>
                    <div>
                        <h1>Third Year</h1>
                        {year3docs.map((each,index)=><img src={each} alt='year3memo' onClick={()=>{this.setState({isViewerOpen3:true,currentImage:index})}} className='docsImage'/>)}
                        {isViewerOpen3 && (
                            <ImageViewer
                            src={ year3docs }
                            currentIndex={ currentImage }
                            disableScroll
                            closeOnClickOutside={ true }
                            onClose={()=>this.setState({isViewerOpen3:false}) }
                            />
                        )}
                    </div>
                    {year4docs.length>0?<div>
                        <h1>Fourth Year</h1>
                        {year4docs.map((each,index)=><img src={each} alt='year4memo' onClick={()=>{this.setState({isViewerOpen4:true,currentImage:index})}} className='docsImage'/>)}
                        {isViewerOpen4 && (
                            <ImageViewer
                            src={ year4docs }
                            currentIndex={ currentImage }
                            disableScroll
                            closeOnClickOutside={ true }
                            onClose={()=>this.setState({isViewerOpen4:false}) }
                            />
                        )}
                    </div>:null}
                </div>
    }

    closeDilogueBox=()=>{
        this.setState({confirmDilogueBoxOpen:false})
    }

    comfirmation=()=>{
        const{confirmDilogueBoxOpen,decision,reason}=this.state

        let ConfirmationMessage=''

        switch(decision){
            case "approved":
                ConfirmationMessage= "Are you Really wanted to Approve this Application???"
                break;
            case "pending":
                ConfirmationMessage= "Are you Really wanted to Maintain this Application in Pending list???"
                break;
            case "redirected":
                ConfirmationMessage= "Are you Really wanted to Re-Direct this Application???"
                break;
            case "rejected":
                ConfirmationMessage= "Are you Really wanted to Reject this application this Application???"
                break;
            default:
                return null
        }

        return(
                  <Dialog
                    open={confirmDilogueBoxOpen}
                    onClose={this.closeDilogueBox}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle style={{fontSize:"26px"}} id="alert-dialog-title">
                    {"Confirmation..."}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{fontSize:"22px"}} id="alert-dialog-description">
                            {ConfirmationMessage}
                        </DialogContentText>
                        {decision==="redirected" || decision==="rejected"?<>
                            <lable>Reason for {decision}</lable>
                            <TextField
                                autoFocus
                                multiline
                                minRows={4}
                                margin="dense"
                                id="reason"
                                type="text"
                                fullWidth
                                variant="outlined"
                                onChange={(event)=>this.setState({reason:event.target.value})}
                            />
                        </>:null}
                    </DialogContent>
                    <DialogActions>
                         <ThemeProvider theme={theme}>
                            <Button className='muiButton' color="hold" variant="contained" style={{fontSize:'18px'}} onClick={this.closeDilogueBox}>close</Button>
                            <Button disabled={(decision==="redirected" || decision==="rejected") && reason===""} className='muiButton' color="approve" variant="contained" style={{fontSize:'18px'}} onClick={this.submitAuthDecision} autoFocus>
                                Confirm
                            </Button>
                            </ThemeProvider>
                    </DialogActions>
                </Dialog>
                    )
    }

    submitAuthDecision=async()=>{
        this.closeDilogueBox()
        const{decision}=this.state
        const {id,reload}=this.props
        const token = Cookies.get("staffAuthToken") 
        this.setState({isLoading:true})
      try{
        const options = {
          url : `${process.env.REACT_APP_BASEURL}approval/update-certificate-application-status?application_id=${id}&application_status=${decision}`,
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
        const response = await axios(options);
        if(response.statusText==="OK"){
          this.setState({isLoading:false,validUser:true,backErr:true,severity:'success',backErrMsg:response.data.detail})
          reload()
        }
      }
      catch(e){
        if(e.message==='Network Error'){
         this.setState({isLoading:false,backErr:true,backErrMsg:"Something went wrong Please try again",severity:'error'})
        }
        if(e.response.status===500){
          this.setState({isLoading:false,backErr:true,backErrMsg:"Unregistered user... Please sign up",severity:'error'})
        }
        if(e.response.status===403){
          this.setState({isLoading:false,backErr:true,backErrMsg:"Not Authenticated",severity:'error'})
        }
        else{
         this.setState({isLoading:false,backErr:true,backErrMsg:"Something went wrong Please try again",severity:'error'})
        }
      }
    }

    authDecision=(event)=>{
       this.setState({confirmDilogueBoxOpen:true,decision:(event.target.id)})

    }

    approvalButtonContainer=()=>{
        return(
            <ThemeProvider theme={theme}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{display:"flex",width:'60%',justifyContent:'space-around',alignItems:'center',padding:'20px'}}>
                        <Button className='muiButton' color='approve' onClick={this.authDecision} id='approved' variant='contained'>Approve</Button>
                        <Button className='muiButton' color='hold' onClick={this.authDecision} id='pending' variant='contained'>Hold</Button>
                        <Button className='muiButton' color='reDirect' onClick={this.authDecision} id='redirected' variant='contained'>Re-Direct</Button>
                        <Button className='muiButton' color='reject' onClick={this.authDecision} id='rejected' variant='contained'>Reject</Button>
                    </div>
                </div>
            </ThemeProvider>
        )
    }

    handleClose=()=>{
        this.setState({backErr:false})
    }

    handleHeader=(inView, entry)=>{
        const {inViewHandler}=this.props
        inViewHandler(inView, entry)
    }

    render(){
        const {backErr,backErrMsg,isLoading,severity,isAuthToValidate,currentStatus}=this.state
        return(
            <>  
                {this.comfirmation()}
                {this.RenderApplicationForm()}
                <InView as="div" onChange={this.handleHeader}>
                    <h1 style={{width:'100%',backgroundColor:'white',textAlign:'center'}}>Marks Details</h1>
                <div style={{backgroundColor:'white',display:'flex',justifyContent:'flex-start',alignItems:'flex-start',overflow:'auto',paddingLeft:'20px'}}>
                    {this.renderMarksLists()}
                </div>
                <h1 style={{textAlign:'center'}}>Documents</h1>
                {this.renderDocs()}
                </InView>
                {isAuthToValidate && currentStatus==="pending"?this.approvalButtonContainer():null}
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



// for certificate_id not 1 

export class ApplicationRequest2 extends Component{
    state={ currentStatus:'',
            isAuthToValidate:false,
            dependentOf: "",
            dependentName: "",
            street: '',
            village: '',
            mandal: '',
            district: '',
            state: '',
            pinCode: "",
            name: '',
            college_name: '',
            college_city: '',
            college_code: '',
            studentBranchId: '',
            progId: '',
            degree_completion_year: '',
            is_studying: '',
            is_ug: "",
            certificate_id: '',
            AcademicYear:'',
            hallticketNumber:'',
            note:'',
            reason:'',          // incase of rejected or redirected
// names
            stateName:'',
            districtName:'',
            BranchName:'',
            DegreeName:'',
            courseTypeName:'',
            certificateName:'',
// error and notifications
            backErr:false,
            backErrMsg:"",
            isLoading:false,
            severity:'',
// confirmation dilog box
            confirmDilogueBoxOpen:false,
            decision:''
            }

    componentDidMount(){
        const {currentStatus}=this.props
        this.setState({currentStatus:currentStatus})
        this.viewApplication()
        this.isUserLoggedIn()
    }

    isUserLoggedIn=()=>{
        const Token = Cookies.get("staffAuthToken")
        if(Token===undefined){
                window.location.reload()
        }else{
            const role = Cookies.get("role")
            switch(role){
                case "superadmin":
                    this.setState({isAuthToValidate:false})
                    break;
                case "srassistant":
                    this.setState({isAuthToValidate:true})
                    break;
                case "jrassistant":
                    this.setState({isAuthToValidate:true})
                    break;
                case "superintendent":
                    this.setState({isAuthToValidate:true})
                    break;
                case "ce":
                    this.setState({isAuthToValidate:true})
                    break;
                case "ace":
                    this.setState({isAuthToValidate:true})
                    break;
                
                default:
                    return null
            }
        }
    }
    
    getNames=async()=>{
        const{  studentBranchId,
                progId, 
                is_ug,
                certificate_id, 
                district,
                state
            }=this.state
    
        const token = Cookies.get("staffAuthToken")
// districts
        const distOptions = {
            url:`${process.env.REACT_APP_BASEURL}list/districts/`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const districts = await axios(distOptions)
        districts.data.data.map((each)=>{if(each.district_id===district){
            this.setState({districtName:each.district_name})
        }})
    
// states
        const stateOptions = {
            url:`${process.env.REACT_APP_BASEURL}list/states/?country_id=1`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const states = await axios(stateOptions)
        states.data.data.map((each)=>{if(each.state_id===state){
            this.setState({stateName:each.state_name})
        }})
    
// course types
        const courseTypeOptions = {
            url:`${process.env.REACT_APP_BASEURL}list/course-categories/`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
          }
           const courseTypes = await axios(courseTypeOptions)
           courseTypes.data.data.map((each)=>{if(each.course_category_id===is_ug){
            this.setState({courseTypeName:each.course_category_name})
        }})

// degrees

         const DegreesOptions = {
            url:`${process.env.REACT_APP_BASEURL}list/programs/`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
            const degreees = await axios(DegreesOptions)

            degreees.data.data.map((each)=>{if(each.program_id===progId){
                this.setState({DegreeName:each.program_name})
            }})

// branch name
        const BranchOptions = {
            url:`${process.env.REACT_APP_BASEURL}list/program-categories/`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const Branchs = await axios(BranchOptions)
            Branchs.data.data.map((each)=>{if(each.program_category_id===studentBranchId){
                this.setState({BranchName:each.name})
            }})

// certificate names
            const CertificateOptions = {
            url:`${process.env.REACT_APP_BASEURL}list/certificates/`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const certificates = await axios(CertificateOptions)
        certificates.data.date.map((each)=>{if(each.certificate_id===certificate_id){
            this.setState({certificateName:each.name})
        }})
    }

    getDocsAndMarks=()=>{
        const {id}=this.props
        console.log(id)
    }

    viewApplication=async()=>{
        const {id} =this.props
        const token = Cookies.get("staffAuthToken")
        try{
            const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/view-certificate-application/?application_id=${id}`,
            method:"POST",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Accept":"application/json"
            }
        }

        const response = await axios(options)
        const details = response.data
        this.setState({
                studentName:details.name,
                collegeName:details.college_name,
                collegeCity:details.college_city,
                collegeCode:details.college_code,
                isStillStudying:details.is_studying,
                degreeCompletionMonthYear:details.degree_completion_year,
                AcademicYear:details.AcademicYear,
                hallticketNumber:details.hallticketNumber,
                dependentOf:details.address.dependentOf,
                dependentName:details.address.dependentName,
                note:details.note,
                certificate_id:details.certificate_id,
                studentBranchId:details.student_branch_id,
                progId: details.program_id,
                is_ug:details.is_ug,

        },this.getNames)
                   
    }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("StaffAuthToken")
                window.location.reload()
                }, 3000);
           }if(e.response.status===422){
            this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }
    }

    renderApplication=()=>{
        const { studentName,
                collegeName,
                collegeCity,
                collegeCode,
                DegreeName,
                BranchName,
                certificateName,
                isStillStudying,
                degreeCompletionMonthYear,
                AcademicYear,
                hallticketNumber,
                dependentOf,
                dependentName,
                note,
                }=this.state 
            const {date}=this.props
        return(
            <>
            <Box style={{display:'flex',flexDirection:'column',width:'60%',margin:'200px auto auto auto',backgroundColor:'white',minHeight:'80%',padding:"5%",justifyContent:'space-around'}}>
                <p style={{textAlign:"right", width:"100%", paddingRight:"5vw"}}>Date:<span> {date}</span></p>
                <p style={{textAlign:"right", width:"100%", paddingRight:"5vw"}}>Nagarjuna Nagar.</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw",fontWeight:"bold"}}>To,</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>The Controller of Examinations /</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>The Additional Controller of Examinations,</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>Acharya Nagarjuna University,</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>Nagarjuna Nagar-522510.</p>
                <p></p>
                <p style={{textAlign:"left",width:"100%", paddingLeft:"10%"}}>Respected Sir,</p>
                <p style={{textAlign:"left",width:"100%", paddingLeft:"10%", fontWeight:"bold"}}>Sub: - Request to issue <span>{certificateName}</span>  - Reg.</p>
                <p style={{textAlign:"left",width:"100%", paddingLeft:"5vw"}}>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; I&ensp;<span style={{fontWeight:"bold"}}> {studentName} </span>{dependentOf} {dependentName} {isStillStudying==0?'studying':'studied'} <span style={{fontWeight:"bold"}}>{DegreeName} {BranchName}</span> with Hall Ticket No: <span style={{fontWeight:"bold"}}>{hallticketNumber}</span> in {collegeName}({collegeCode}) college at {collegeCity}, in the Academic Year <span style={{fontWeight:"bold"}}>{AcademicYear}</span> {isStillStudying==1?<span>and also completed my Degree in <span style={{fontWeight:"bold"}}>{degreeCompletionMonthYear}</span></span>:'.'}</p>
                <p style={{textAlign:"left",width:"100%", paddingLeft:"5vw"}}>Hence, I request you to issue my <span style={{fontWeight:"bold"}}>{certificateName}</span> as early as possible.</p>                
                <p style={{textAlign:"left",width:"100%", paddingLeft:"15vw"}}>Thanking you,</p>
                <p></p>
                {note!==""?<p style={{textAlign:'left',width:"92%"}}>Note: {note}</p>:null}
                <div style={{width:"200px",alignSelf:'flex-end'}}>
                    <p style={{textAlign:"left", width:"100%"}}>Yours Obediently,</p>
                    <p style={{textAlign:"left", width:"100%", paddingLeft:"50px"}}>sd/-</p>
                    <p style={{textAlign:"left", width:"100%"}}>{studentName}</p>
                    <p style={{textAlign:"left", width:"100%"}}>{hallticketNumber}</p>
                </div>
            </Box>
            {/* {certificate_id==2?<Box style={{backgroundColor:'white', padding:'15px'}}>
                {this.cmmDisplayer()}
            </Box>:null} */}
             </>
            ) 

    }
    
    closeDilogueBox=()=>{
        this.setState({confirmDilogueBoxOpen:false})
    }

    comfirmation=()=>{
        const{confirmDilogueBoxOpen,decision,reason}=this.state

        let ConfirmationMessage=''
        switch(decision){
            case "approved":
                ConfirmationMessage= "Are you Really wanted to Approve this Application???"
                break;
            case "pending":
                ConfirmationMessage= "Are you Really wanted to Maintain this Application in Pending list???"
                break;
            case "redirected":
                ConfirmationMessage= "Are you Really wanted to Re-Direct this Application???"
                break;
            case "rejected":
                ConfirmationMessage= "Are you Really wanted to Reject this application this Application???"
                break;
            default:
                return null
        }

        return(
                  <Dialog
                    open={confirmDilogueBoxOpen}
                    onClose={this.closeDilogueBox}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle style={{fontSize:"26px"}} id="alert-dialog-title">
                    {"Confirmation..."}
                    </DialogTitle>
                        <DialogContent>
                            <DialogContentText style={{fontSize:"22px"}} id="alert-dialog-description">
                                {ConfirmationMessage}
                            </DialogContentText>
                            {decision==="redirected" || decision==="rejected"?<>
                            <lable>Reason for {decision}</lable>
                            <TextField
                                autoFocus
                                multiline
                                minRows={4}
                                margin="dense"
                                id="reason"
                                type="text"
                                fullWidth
                                variant="outlined"
                                onChange={(event)=>this.setState({reason:event.target.value})}
                            />
                        </>:null}
                        </DialogContent>
                    <DialogActions>
                        <ThemeProvider theme={theme}>
                            <Button size='small' className='muiButton' color="hold" variant="contained" style={{fontSize:'18px'}} onClick={this.closeDilogueBox}>close</Button>
                            <Button disabled={(decision==="redirected" || decision==="rejected") && reason===""} size='small' className='muiButton' color="approve" variant="contained" style={{fontSize:'18px'}} onClick={this.submitAuthDecision} autoFocus>Confirm</Button>
                        </ThemeProvider>
                    </DialogActions>
                </Dialog>
                    )
    }

    submitAuthDecision=async()=>{
        this.closeDilogueBox()
        const{decision,reason}=this.state
        const {id,reload}=this.props
        const token = Cookies.get("staffAuthToken") 
        this.setState({isLoading:true})
      try{
        const options = {
          url : `${process.env.REACT_APP_BASEURL}approval/update-certificate-application-status?application_id=${id}&application_status=${decision}`,
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
        const response = await axios(options);
        if(response.statusText==="OK"){
          this.setState({isLoading:false,validUser:true,backErr:true,severity:'success',backErrMsg:response.data.detail})
          reload()
        }
      }
      catch(e){
        if(e.message==='Network Error'){
         this.setState({isLoading:false,backErr:true,backErrMsg:"Something went wrong Please try again",severity:'error'})
        }
        if(e.response.status===401){
          this.setState({isLoading:false,backErr:true,backErrMsg:"Please login again",severity:'error'})
        }
        if(e.response.status===500){
          this.setState({isLoading:false,backErr:true,backErrMsg:"Unregistered user... Please sign up",severity:'error'})
        }
        if(e.response.status===403){
          this.setState({isLoading:false,backErr:true,backErrMsg:"Not Authenticated",severity:'error'})
        }
        else{
         this.setState({isLoading:false,backErr:true,backErrMsg:"Something went wrong Please try again",severity:'error'})
        }
      }
    }

    authDecision=(event)=>{
       this.setState({confirmDilogueBoxOpen:true,decision:(event.target.id)})

    }

    approvalButtonContainer=()=>{
        return(
            <ThemeProvider theme={theme}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{display:"flex",width:'60%',justifyContent:'space-around',alignItems:'center',padding:'20px'}}>
                        <Button className='muiButton' color='approve' onClick={this.authDecision} id='approved' variant='contained'>Approve</Button>
                        <Button className='muiButton' color='hold' onClick={this.authDecision} id='pending' variant='contained'>Hold</Button>
                        <Button className='muiButton' color='reDirect' onClick={this.authDecision} id='redirected' variant='contained'>Re-Direct</Button>
                        <Button className='muiButton' color='reject' onClick={this.authDecision} id='rejected' variant='contained'>Reject</Button>
                    </div>
                </div>
            </ThemeProvider>
        )
    }

    handleClose=()=>{
        this.setState({backErr:false})
    }

     handleHeader=(inView, entry)=>{
        const {inViewHandler}=this.props
        inViewHandler(inView, entry)
    }

   render(){
        const {isAuthToValidate,isLoading,backErr,backErrMsg,severity,currentStatus}=this.state
    return(
        <>
            {this.renderApplication()}
            {this.comfirmation()}
            {isAuthToValidate && currentStatus==="pending"?this.approvalButtonContainer():null}
                <LoadingView isLoading={isLoading}/>
                <Snackbar open={backErr}
                            autoHideDuration={1000} 
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