/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import {Component} from 'react'
import {MenuItem,Grid,Box,Button,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,Snackbar,Alert,Paper} from '@mui/material';
import ReactToPrint from 'react-to-print';
import format from 'date-fns/format'
import logopng from "../../assects/logopng.png"
import nagarjuna from "../../assects/nagarjuna.png"
import "./index.css"

import axios from 'axios';
import Cookies from "js-cookie"

import {CssTextField,CssSelect} from '../customizedComponents'
import LoadingView from "../loadingView"

import { CmmType1,CmmType2,CmmType3 } from '../CMM/test';

const tableHeadings = ["Month & Year",1,2,3,4,5,6,7,8,9,'I',"II",'III','IV','V','VI','Sessionals',"Total Marks", "Max Marks"]

const DegreeTableHeadings =["Month & Year","1",'2','3','4','5','6','7','8','9','10','11','12','13']
const thirdDegreeTableHeadings =["Month & Year",'W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','Total']


const PgEduAndLawTableHeadings = ["Month & Year","P-1","P-2","P-3","P-4",'P-5','P-6','P-7','P-8','P-9','Pr-1','Pr-2','Pr-3','Pr-4',"Proj/ Viva","Total"]
const PgEduAndLawBettermentTableHeadings = ["Month & Year","P-1","P-2","P-3","P-4",'P-5','P-6','P-7','P-8','P-9',"Total"]                      

export class CmmPType1 extends Component{

    firstYearMarksForm=()=>{
        const {y1}=this.props
        return(
            <div className='mainContainer'>
                <div className='marksContainer'>
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
            <div className='mainContainer'>
                <div className='marksContainer'>
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
            <div className='mainContainer'>
                <div className='marksContainer'>
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
            <div className='mainContainer'>
                <div className='marksContainer'>
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
        return( <div style={{width:'100%', overflow:'auto',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'20px'}}>
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
            <div className='mainContainer'>
                <div className='marksContainer'>
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
            <div className='mainContainer'>
                <div className='marksContainer'>
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
        return( <div style={{width:'100%', overflow:'auto',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'20px'}}>
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
            <div className='mainContainer'>
                <div className='marksContainer'>
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
            <div className='mainContainer'>
                <div className='marksContainer'>
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
            <div className='mainContainer'>
                <div className='marksContainer'>
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
            <div className='mainContainer'>
                <div className='marksContainer'>
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
        return( <div style={{width:'100%', overflow:'auto',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'20px'}}>
                    {this.firstYearMarksForm()}
                    {this.SecondYearMarksForm()}
                    {this.ThirdYearMarksForm()}
                    {this.FourthYearMarksForm()}
                </div>
    )
    }  
}

class CeritificateRequest extends Component{
    state={
        courseTypes:[],
        Degrees:[],
        Branchs:[],
        stateData:[],
        districtData:[],
        certificateData:[],
        getStudentData:[],
        copiesSelect:[],
// studentDetails
        studentName:"",
        collegeName:'',
        collegeCity:'',
        collegeCode:'',
        studentBranchId:'',
        progId:'',
        cmmtype:"",                              
        degreeCompletionMonthYear:'',
        isStillStudying:1,
        is_ug:'',
        certificate_id:"",                     
        AcademicYear:'',
        hallticketNumber:'',
// names
        districtName:'',
        stateName:'',
        courseTypeName:'',
        DegreeName:'',
        BranchName:'',
        certificateName:'',
//address
        dependentOf:'S/O',
        dependentName:'',
        street:'',
        village:'',
        mandal:'',
        district:'',
        state:'',
        pincode:'',
        note:'',
// error check
        studentNameErr:false,
        collegeNameErr:false,
        collegeCityErr:false,
        collegeCodeErr:false,
        studentBranchIdErr:false,
        progIdErr:false,
        degreeCompletionMonthYearErr:false,
        isStillStudyingErr:false,
        is_ugErr:false,
        certificate_idErr:false,
        dependentOfErr:false,
        dependentNameErr:false,
        streetErr:false,
        villageErr:false,
        mandalErr:false,
        districtErr:false,
        stateErr:false,
        pincodeErr:false,
        AcademicYearErr:false,
        hallticketNumberErr:false,
// validations
        verified:false,
        isLocked:false,
        disablePreview:true,
// notifications
        backErr:false,
        backErrMsg:"",
        severity:"error",
        isLoading:false,
// payment
        proceedForPayment:false,   
        confirmToPay:false,
        noOfCopies:1,
        isTatkal:0,
        receivedPaymentDetails:true,       
        paymentDetails:{certificate_fee:0,payment_link:'',processing_fee:0,total_payable:0},
        redirectToPaymentPage:false,
// Marks
        y1:[],
        y2:[],
        y3:[],
        y4:[]
    }

    componentDidMount(){
        this.getStates()
        this.getProgCategories()
        this.getCertificates()
        this.getStudentData()
        this.keydata()
        this.copiesSelect()
    }

    keydata=()=>{
       const out = Cookies.get('keydata')
       const studentName = Cookies.get('studentName')
       const hallticketNo = Cookies.get('studentEnroll')
       const keyData = JSON.parse(out)
        this.setState({ is_ug:keyData.progType,
                        progId:keyData.ProgId,
                        studentBranchId:keyData.branchId,
                        studentName:studentName,
                        hallticketNumber:hallticketNo,
                        isLocked:true
                },this.basicCalls)
    }
    
    copiesSelect=()=>{
        let temp = []
        for(let i=20;i<=30;i++){
            temp.push(i)
        }
        this.setState({copiesSelect:temp})
    }

    getMarks=async()=>{
        const token = Cookies.get("authToken")
        try{
            const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/get-cmm-details/`,
            method:"POST",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Accept":"application/json"
            }
        }
        const Marks = await axios(options)
           if(Marks.data.marks.length===4){
                this.setState({ y1:Marks.data.marks[0],
                                y2:Marks.data.marks[1],
                                y3:Marks.data.marks[2],
                                y4:Marks.data.marks[3],
                        })
           }
        }catch(e){
            this.setState({backErr:true,backErrMsg:'New User',severity:'success'})
        }
    }

    getStudentData=async()=>{
        const token = Cookies.get("authToken")
        try{
            const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/get-od-details/`,
            method:"GET",
            headers:{
                "Authorization":`Bearer ${token}`,
                "Accept":"application/json"
            }
        }
        const studentData = await axios(options)
        if(studentData!==undefined){
            const program_details = studentData.data.program_details
        this.setState({
                    is_ug:program_details.is_ug,
                    progId: program_details.prog_ID,
                    studentBranchId:program_details.studentBranch_id,
                    hallticketNumber:program_details.registrationNumber,
                    isLocked:true,
                    },
                    this.basicCalls()
                )
        }

        }catch(e){
            this.setState({backErr:true,backErrMsg:'New User',severity:'success'})
        }
        
        
    }   

    basicCalls=()=>{
        this.getProgramsOnlyForGetStudentData()
        this.getBranchsOnlyForGetStudentData()
        this.getDistricts()
        this.setState({isLocked:true})
    }
    
    getBranchsOnlyForGetStudentData=async()=>{
         this.setState({isLoading:true})
        try{
        const token = Cookies.get("authToken")
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/program-categories/`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const Branchs = await axios(options)
        this.setState({Branchs:Branchs.data.data,isLoading:false},this.setCmmTypeOnlyForGetStudentData)
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("authToken")
                window.location.reload()
                }, 3000);
           }if(e.response.status===422){
            this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }
        
    }

    getProgramsOnlyForGetStudentData=async()=>{
    this.setState({isLoading:true})
    try{
        const token = Cookies.get("authToken")
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/programs/`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const Degrees = await axios(options)
        this.setState({Degrees:Degrees.data.data,isLoading:false},this.getCmmType())
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            
           }else{
            console.log(e)
           }
        }
        
    }

    getCmmType=()=>{
        const {progId,Degrees}=this.state
        const cmmt = Degrees.filter((each)=>(each.program_id==progId))
        if(cmmt[0]!==undefined){
            this.setState({cmmtype:cmmt[0].cmm_type},this.getMarks)
        }
        


    }

    getCertificates=async()=>{
    try{
            const token = Cookies.get("authToken")
            const options = {
            url:`${process.env.REACT_APP_BASEURL}list/certificates/`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const certificates = await axios(options)
        if(certificates.status===200){
            this.setState({certificateData:certificates.data.date})
        }
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("authToken")
                window.location.reload()
                }, 3000);
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        
        }
    }

    getStates=async()=>{
        try{
            const token = Cookies.get("authToken")
            const options = {
            url:`${process.env.REACT_APP_BASEURL}list/states/?country_id=1`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const states = await axios(options)
        if(states.status===200){
            this.setState({stateData:states.data.data})
        }
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("authToken")
                window.location.reload()
                }, 3000);
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        
        }
        
    }

    getProgCategories=async()=>{
        const token = Cookies.get("authToken")
        try{
            const options = {
            url:`${process.env.REACT_APP_BASEURL}list/course-categories/`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const courseCategories = await axios(options)
        this.setState({courseTypes:courseCategories.data.data})
    }catch(e){
        if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("authToken")
                window.location.reload()
                }, 3000);
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
    }
    }

    getDistricts=async()=>{
        this.setState({isLoading:true})
         const {state}=this.state
        try{
            const token = Cookies.get("authToken")
       
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/districts/?state_id=${state}`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const districts = await axios(options)
        this.setState({districtData:districts.data.data,isLoading:false})
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("authToken")
                window.location.reload()
                }, 3000);
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }
        
    }

    previewValidator=()=>{
        const { studentName,
                collegeName,
                collegeCity,
                collegeCode,
                studentBranchId,
                progId,
                isStillStudying,
                degreeCompletionMonthYear,
                is_ug,
                certificate_id,
                AcademicYear,
                hallticketNumber,
        //address
                dependentOf,
                dependentName,
                street,
                village,
                mandal,
                district,
                state,
                pincode,}=this.state
// student Name validation
            if(studentName===""){
                this.setState({studentNameErr:true})
            }
            if(studentName!==""){
                this.setState({studentNameErr:false})
            }
// college name validation
            if(collegeName===""){
                this.setState({collegeNameErr:true})
            }
            if(collegeName!==""){
                this.setState({collegeNameErr:false})
            }
// college city validation
            if(collegeCity===""){
                this.setState({collegeCityErr:true})
            }
            if(collegeCity!==""){
                this.setState({collegeCityErr:false})
            }
// college code validation
            if(collegeCode===""){
                this.setState({collegeCodeErr:true})
            }
            if(collegeCode!==""){
                this.setState({collegeCodeErr:false})
            }
// student Branch id validation
            if(studentBranchId===""){
                this.setState({studentBranchIdErr:true})
            }
            if(studentBranchId!==""){
                this.setState({studentBranchIdErr:false})
            }
// prog id validation
            if(progId===""){
                this.setState({progIdErr:true})
            }
            if(progId!==""){
                this.setState({progIdErr:false})
            }
// degree Completion Month Year validation
            if(isStillStudying==0 && (degreeCompletionMonthYear==="" || degreeCompletionMonthYear!=="")){
                this.setState({degreeCompletionMonthYearErr:false,degreeCompletionMonthYear:""})
            }
            else if(isStillStudying==1 && degreeCompletionMonthYear===""){
                this.setState({degreeCompletionMonthYearErr:true})
            }
            else if(isStillStudying==1 && degreeCompletionMonthYear!==""){
                this.setState({degreeCompletionMonthYearErr:false})
            }
// is_ug validation
            if(is_ug===""){
                this.setState({is_ugErr:true})
            }
            if(is_ug!==""){
                this.setState({is_ugErr:false})
            }
// certificate_id validation
            if(certificate_id===""){
                this.setState({certificate_idErr:true})
            }
            if(certificate_id!==""){
                this.setState({certificate_idErr:false})
            }
// AcademicYear validation
            if(AcademicYear===""){
                this.setState({AcademicYearErr:true})
            }
            if(AcademicYear!==""){
                this.setState({AcademicYearErr:false})
            }
// hallticketNumber validation
            if(hallticketNumber===""){
                this.setState({hallticketNumberErr:true})
            }
            if(hallticketNumber!==""){
                this.setState({hallticketNumberErr:false})
            }
// dependentOf validation
            if(dependentOf===""){
                this.setState({dependentOfErr:true})
            }
            if(dependentOf!==""){
                this.setState({dependentOfErr:false})
            }
// dependentName validation
            if(dependentName===""){
                this.setState({dependentNameErr:true})
            }
            if(dependentName!==""){
                this.setState({dependentNameErr:false})
            }
// street validation
            if(street===""){
                this.setState({streetErr:true})
            }
            if(street!==""){
                this.setState({streetErr:false})
            }
// village validation
            if(village===""){
                this.setState({villageErr:true})
            }
            if(village!==""){
                this.setState({villageErr:false})
            }
// mandal validation
            if(mandal===""){
                this.setState({mandalErr:true})
            }
            if(mandal!==""){
                this.setState({mandalErr:false})
            }
// district validation
            if(district===""){
                this.setState({districtErr:true})
            }
            if(district!==""){
                this.setState({districtErr:false})
            }
// state validation
            if(state===""){
                this.setState({stateErr:true})
            }
            if(state!==""){
                this.setState({stateErr:false})
            }
// pincode validation
            if(pincode===""){
                this.setState({pincodeErr:true})
            }
            if(pincode!==""){
                this.setState({pincodeErr:false})
            }

            if(studentName!=="" &&
                collegeName!=="" &&
                collegeCity!=="" &&
                collegeCode!=="" &&
                studentBranchId!=="" &&
                progId!=="" &&
                isStillStudying!=="" &&
                (isStillStudying==0 || degreeCompletionMonthYear!=="") &&
                is_ug!=="" &&
                certificate_id!=="" &&
                AcademicYear!=="" &&
                dependentOf!=="" &&
                dependentName!=="" &&
                street!=="" &&
                village!=="" &&
                mandal!=="" &&
                district!=="" &&
                state!=="" &&
                pincode!==""
                ){
                    this.setState({backErr:true,backErrMsg:'Filled Successfully... Please Check Preview...',severity:'success'},this.getNames)
                    setTimeout(() => {
                            this.setState({verified:true})
                    }, 3000);
                
                }else{
                    this.setState({backErr:true,backErrMsg:"Please fill all fields...",severity:'error'})
                }


    }

    essentialsLocker=()=>{
        this.setState({isLocked:true})
    }

    cmmDisplayer=()=>{
        const{cmmtype,verified}=this.state
        switch(cmmtype){
            case 1:
                return <CmmType1 statusUpdater={()=>this.setState({disablePreview:false})} lock={this.essentialsLocker} previewView={verified}/>
            case 2:
                return <CmmType2 statusUpdater={()=>this.setState({disablePreview:false})} lock={this.essentialsLocker} previewView={verified}/>
            case 3:
                return <CmmType3 statusUpdater={()=>this.setState({disablePreview:false})} lock={this.essentialsLocker} previewView={verified}/>
            default:
                return null
        }
    }

    cmmPreview=()=>{
        const{cmmtype,y1,y2,y3,y4}=this.state
        switch(cmmtype){
            case 1:
                return <CmmPType1 y1={y1} y2={y2} y3={y3} y4={y4}/>
            case 2:
                return <CmmPType2 y1={y1} y2={y2} y3={y3}/>
            case 3:
                return <CmmPType3 y1={y1} y2={y2} y3={y3} y4={y4}/>
            default:
                return null
        }
    }

    updateCertificateId=(event)=>{
        if(event.target.value==2){
            this.setState({certificate_id:event.target.value,disablePreview:true})
        }else{
             this.setState({certificate_id:event.target.value,disablePreview:false})
        }
        
    }

    requestInputContainer=()=>{
        const{
    // base data
            courseTypes,
            Degrees,
            Branchs,
            stateData,  
            districtData,
            certificateData,
    // student details
            studentName,
            collegeName,
            collegeCity,
            collegeCode,
            studentBranchId,
            progId,
            degreeCompletionMonthYear,
            isStillStudying,
            is_ug,
            certificate_id,
            AcademicYear,
            hallticketNumber,
    //address
            dependentOf,
            dependentName,
            street,
            village,
            mandal,
            district,
            state,
            pincode,
            note,
    // error check
            studentNameErr,
            collegeNameErr,
            collegeCityErr,
            collegeCodeErr,
            studentBranchIdErr,
            progIdErr,
            degreeCompletionMonthYearErr,
            isStillStudyingErr,
            is_ugErr,
            certificate_idErr,
            dependentOfErr,
            dependentNameErr,
            streetErr,
            villageErr,
            mandalErr,
            districtErr,
            stateErr,
            pincodeErr,
            AcademicYearErr,
            hallticketNumberErr,
// locker
            isLocked,
            disablePreview
        }=this.state
        return(
            <div className='CertificatesRequestFormContainer'>
                    <h1 style={{paddingLeft:"5vw",textAlign:'center', fontSize:'18px',width:'90%'}}>Enter Details for Requesting a Certificate</h1>
                    <Box style={{padding:"20px 0 0 5vw",maxWidth:'100%'}}>
                        <div>
                            <img src={nagarjuna} alt='nagarjuna' style={{position:'absolute',left:'40%',top:'28%',opacity:'0.15', width:'300px'}}/>
                        </div>
{/* College and Course details */}
                            <Grid container spacing={3}>
 {/* student name */}
                                <Grid item xs={5.5}>
                                    <label>Name</label>
                                    <CssTextField   error={studentNameErr} 
                                                    onChange={(event)=>this.setState({studentName:event.target.value.toUpperCase()})} 
                                                    size='small' 
                                                    value={studentName}
                                                    style={{width:'100%'}}/>
                                </Grid>
{/* certificate name */}
                                <Grid item xs={5.5}>
                                    <label>Certificate Name</label>
                                    <CssSelect
                                        value={certificate_id}
                                        onChange={this.updateCertificateId}
                                        fullWidth
                                        error={certificate_idErr}
                                        size='small'
                                        style={{border:'.5px solid black'}}
                                    >
                                        {certificateData.map((each)=><MenuItem value={each.certificate_id}>{each.name}</MenuItem>)}
                                    </CssSelect>
                                </Grid>
{/* Hall ticket number */}
                                <Grid item xs={5.5}>
                                    <label>Hall Ticket Number</label>
                                    <CssTextField   error={hallticketNumberErr} 
                                                    onChange={(event)=>this.setState({hallticketNumber:event.target.value.toUpperCase()})} 
                                                    size='small' 
                                                    value={hallticketNumber}
                                                    disabled={isLocked}
                                                    style={{width:'100%'}}/>
                                </Grid>
{/* College Name */}
                                <Grid item xs={5.5}>
                                    <label>College Name</label>
                                    <CssTextField   size='small'
                                                    value={collegeName}
                                                    onChange={(event)=>this.setState({collegeName:event.target.value.toUpperCase()})}
                                                    error={collegeNameErr} 
                                                    style={{width:'100%'}}/>
                                </Grid>
{/* College City/Town */}
                                <Grid item xs={5.5}>
                                    <label>College City/Town</label>
                                    <CssTextField   size='small'
                                                    value={collegeCity}
                                                    onChange={(event)=>this.setState({collegeCity:event.target.value.toUpperCase()})}
                                                    error={collegeCityErr} 
                                                    style={{width:'100%'}}/>
                                </Grid>
{/* college Code */}
                                <Grid item xs={5.5}>
                                    <label>College Code</label>
                                    <CssTextField   size='small'
                                                    value={collegeCode}
                                                    onChange={(event)=>this.setState({collegeCode:event.target.value.toUpperCase()})}
                                                    error={collegeCodeErr} 
                                                    style={{width:'100%'}}/>
                                </Grid>
{/* Course Type */}
                                <Grid item xs={5.5}>
                                    <label>Course Type</label>
                                    <CssSelect
                                        value={is_ug}
                                        onChange={(event)=>this.setState({is_ug:event.target.value,courseTypeName:event.target.id},this.getPrograms)}
                                        fullWidth
                                        error={is_ugErr}
                                        size='small'
                                        style={{border:'.5px solid black'}}
                                        disabled={isLocked}
                                    >
                                        {courseTypes.map((each)=><MenuItem id={each.course_category_name} value={each.course_category_id}>{each.course_category_name}</MenuItem>)}
                                    </CssSelect>
                                </Grid>
{/* Degree Name */}
                                <Grid item xs={5.5}>    
                                    <label>Degree</label>
                                    <CssSelect
                                        value={progId}
                                        onChange={(event,name)=>this.setState({progId:event.target.value,cmmtype:name.props.cmmT.cmm_type},this.getBranchs)}
                                        fullWidth
                                        error={progIdErr}
                                        size='small'
                                        style={{border:'.5px solid black'}}
                                        disabled={isLocked}
                                    >
                                      {Degrees.map((each)=><MenuItem cmmT={each} value={each.program_id}>{each.program_name}</MenuItem>)}
                                    </CssSelect>
                                </Grid>
{/* Branch */}
                                <Grid item xs={5.5}>
                                    <label>Branch</label>
                                    <CssSelect
                                        value={studentBranchId}
                                        onChange={(event)=>this.setState({studentBranchId:event.target.value,BranchName:event.target.id})}
                                        error={studentBranchIdErr}
                                        fullWidth
                                        size='small'
                                        style={{border:'.5px solid black'}}
                                        disabled={isLocked}
                                    >
                                        {Branchs.map((each)=><MenuItem id={each.name} value={each.program_category_id}>{each.name}</MenuItem>)}
                                    </CssSelect>
                                </Grid>
{/* Academic Year */}
                                <Grid item xs={5.5}>
                                    <label>Academic Year</label>
                                    <CssTextField   error={AcademicYearErr} 
                                                    onChange={(event)=>this.setState({AcademicYear:event.target.value.toUpperCase()})} 
                                                    size='small' 
                                                    value={AcademicYear}
                                                    style={{width:'100%'}}
                                                    type='tel'
                                                    pattern={`[0-9]{4}-[0-9]{4}`}
                                                    />
                                    <p>Ex: 2019-2022</p>
                                </Grid>
{/* Stydying status */}
                                <Grid item xs={2.9}>
                                     <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Course Status</FormLabel>
                                        <RadioGroup
                                            onChange={(event)=>this.setState({isStillStudying:event.target.value.toUpperCase()})}
                                            row
                                            value={isStillStudying}
                                            error={isStillStudyingErr}
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value={0} control={<Radio />} label="Studing" />
                                            <FormControlLabel value={1} control={<Radio />} label="Completed" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid> 
{/* courseCompleted Month year */}
                                {isStillStudying==0?null:<Grid item xs={2.6}>
                                    <label>Degree Completed Month & year</label>
                                    <CssTextField   size='small' 
                                                    style={{width:'100%',marginTop:'5px'}}
                                                    value={degreeCompletionMonthYear}
                                                    onChange={(event)=>this.setState({degreeCompletionMonthYear:event.target.value.toUpperCase()})}
                                                    error={degreeCompletionMonthYearErr}
                                                    type="month"
                                                    />
                                </Grid>}                     
                            </Grid>
                            <h2 style={{marginTop:'20px'}}>Address</h2>
{/* student Address Details */}
                            <Grid container spacing={3}>
{/* dependency name */}
                                <Grid item xs={5.5}>
                                    <label>.</label>
                                    <div style={{display:'flex'}}>
                                        <CssSelect
                                            id="demo-simple-select"
                                            value={dependentOf}
                                            onChange={(event)=>this.setState({dependentOf:event.target.value.toUpperCase()})}
                                            error={dependentOfErr}
                                            size='small'
                                            style={{border:'.5px solid black',width:'15%'}}
                                        >
                                        <MenuItem value="S/O">S/O</MenuItem>
                                        <MenuItem value="D/O">D/O</MenuItem>
                                        <MenuItem value="C/O">C/O</MenuItem>
                                        <MenuItem value="W/O">W/O</MenuItem>
                                    </CssSelect>
                                        <CssTextField size='small' 
                                                    style={{width:'85%'}}
                                                    value={dependentName}
                                                    onChange={(event)=>this.setState({dependentName:event.target.value.toUpperCase()})}
                                                    error={dependentNameErr}
                                                    />
                                    </div>
                                </Grid>
{/* street name */}
                                <Grid item xs={5.5}>
                                    <label>Street</label>
                                    <CssTextField   size='small' 
                                                    style={{width:'100%'}}
                                                    onChange={(event)=>this.setState({street:event.target.value.toUpperCase()})}
                                                    value={street}
                                                    error={streetErr}
                                                    />

                                </Grid>
{/* village/Town name */}
                                <Grid item xs={5.5}>
                                    <label>Village/Town</label>
                                    <CssTextField   size='small' 
                                                    style={{width:'100%'}}
                                                    value={village}
                                                    onChange={(event)=>this.setState({village:event.target.value.toUpperCase()})}
                                                    error={villageErr}
                                                    />

                                </Grid>
{/* mandal */}
                                <Grid item xs={5.5}>
                                    <label>Mandal</label>
                                    <CssTextField   size='small' 
                                                    style={{width:'100%'}}
                                                    value={mandal}
                                                    onChange={(event)=>this.setState({mandal:event.target.value.toUpperCase()})}
                                                    error={mandalErr}
                                                    />
                                </Grid>
{/* state */}
                                <Grid item xs={5.5}>
                                    <label>State</label>
                                    <CssSelect
                                        value={state}
                                        onChange={(event)=>this.setState({state:event.target.value},this.getDistricts)}
                                        fullWidth
                                        error={stateErr}
                                        size='small'
                                        style={{border:'.5px solid black'}}
                                    >
                                        {stateData.map((each)=><MenuItem key={each.state_id} value={each.state_id}>{each.state_name}</MenuItem>)}
                                    </CssSelect>
                                </Grid>
{/* District */}
                                <Grid item xs={5.5}>
                                    <label>District</label>
                                    <CssSelect
                                        id="demo-simple-select"
                                        value={district}
                                        onChange={(event)=>this.setState({district:event.target.value,districtName:event.target.id})}
                                        fullWidth
                                        error={districtErr}
                                        size='small'
                                        style={{border:'.5px solid black'}}
                                    >
                                        {districtData.map((each)=>(<MenuItem key={each.district_name} value={each.district_id}>{each.district_name}</MenuItem>))}
                                    </CssSelect>
                                </Grid>
{/* PinCode */}
                                <Grid item xs={5.5}>
                                    <label>Pin Code</label>
                                    <CssTextField   size='small' 
                                                    style={{width:'100%'}}
                                                    value={pincode}
                                                    onChange={(event)=>this.setState({pincode:event.target.value.toUpperCase()})}
                                                    error={pincodeErr}
                                                    type='tel'
                                                    pattern={`[0-9]{6}`}
                                                    />
                                </Grid>
                            </Grid>
{/* note */}
                            <Grid container spacing={3}>
                                <Grid style={{margin:'20px 0 0 0'}} item xs={11}>
                                    <label>Notes:</label>
                                    <CssTextField   size='small' 
                                                    style={{width:'100%'}}
                                                    placeholder="Want to convey anything else???"
                                                    value={note}
                                                    onChange={(event)=>this.setState({note:event.target.value})}
                                                    multiline
                                                    />
                                </Grid>
                            </Grid>
                            {certificate_id===2?<div style={{margin:"30px 0 0 0",width:'90%',overflow:'auto', display:'flex',justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column'}} container spacing={3}>
                                <h2 style={{textAlign:'center'}}>CMM FORM</h2> 
                                    {this.cmmDisplayer()}
                            </div>:null}
                        <div style={{display:"flex", justifyContent:"flex-end",margin:"50px 0 0 0"}}>
                            <Button className="muiButton" disabled={disablePreview} style={{marginRight:"10vw"}} variant="contained" onClick={this.previewValidator}>Preview Request</Button>
                        </div>
                    </Box>
            </div>
            )
    }

    getNames=async()=>{
        const{studentBranchId,progId, is_ug,certificate_id, district,state}=this.state
    
        const token = Cookies.get("authToken")
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

    save=async()=>{
        const {studentName,
                collegeName,
                collegeCity,
                collegeCode,
                studentBranchId,
                progId,
                degreeCompletionMonthYear,
                isStillStudying,
                is_ug,
                certificate_id,
                AcademicYear,
                hallticketNumber,
                dependentOf,
                dependentName,
                street,
                village,
                mandal,
                district,
                state,
                pincode,
                note
            }=this.state
        const token = Cookies.get("authToken")
    try{
        const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/apply-certificate/`,
            method:"POST",
            headers:{
                 'Authorization': `Bearer ${token}`,
                 'Content-Type':'application/json'
            },
            data:{
                address: {
                    dependentOf: dependentOf,
                    dependentName: dependentName,
                    street: street,
                    village: village,
                    mandal: mandal,
                    district: district,
                    state: state,
                    pinCode: pincode
                },
                name: studentName,
                college_name: collegeName,
                college_city: collegeCity,
                college_code: collegeCode,
                student_branch_id: studentBranchId,
                program_id: progId,
                degree_completion_year: degreeCompletionMonthYear,
                is_studying: Number(isStillStudying),
                is_ug: is_ug,
                certificate_id: certificate_id,
                AcademicYear:AcademicYear,
                hallticketNumber:hallticketNumber,
                note:note
            }
        }
        const response =await axios(options)
        if(response.status===200){
            this.setState({backErr:true,backErrMsg:response.data.detail,severity:'success',isLoading:false,proceedForPayment:true})            
        }
        
    }catch(e){
        if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("authToken")
                window.location.reload()
                }, 3000);
           }if(e.response.status===422){
            this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
    }
    }

    certificateLayout=()=>{
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
                certificate_id
                }=this.state 
       const date = format(new Date(), 'dd/MM/yyyy')
        return(
            <>
            <Box className="CertificatesPreviewFormContainer" ref={el => (this.componentRef = el)}>
                <div>
                    <img src={nagarjuna} alt='nagarjuna' className='nagarjunaLogo'/>
                </div>
                <img style={{height:'150px'}} src={logopng} alt='logo'   />
                <p style={{textAlign:"right", width:"100%", paddingRight:"5vw"}}>Date:<span> {date}</span></p>
                <p style={{textAlign:"right", width:"100%", paddingRight:"5vw"}}>Nagarjuna Nagar.</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw",fontWeight:"bold"}}>To,</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>The Controller of Examinations /</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>The Additional Controller of Examinations,</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>Acharya Nagarjuna University,</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>Nagarjuna Nagar-522510.</p>
                <p></p>
                <p style={{textAlign:"left",width:"100%", paddingLeft:"15vw"}}>Respected Sir,</p>
                <p style={{textAlign:"left",width:"100%", paddingLeft:"15vw", fontWeight:"bold"}}>Sub: - Request to issue <span>{certificateName}</span>  - Reg.</p>
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
            {certificate_id==2?<Box style={{backgroundColor:'white', padding:'15px'}}>
                {this.cmmPreview()}
            </Box>:null}
                <div style={{display:"flex",width:'100%',flexDirection:'row', justifyContent:'center',alignItems:'center' ,backgroundColor:'white', padding:'15px'}} className="printable">
                    <Button className="muiButton" style={{marginRight:'10px'}} variant="contained" onClick={()=>this.setState({verified:false})}>Edit</Button>
                    <Button className="muiButton" style={{marginRight:'10px'}} variant="contained" onClick={this.save}>Save</Button>
                    {/* <ReactToPrint trigger={()=><Button className="muiButton" style={{marginRight:'10px'}} variant="contained">Print</Button>} content={() => this.componentRef}/> */}
                </div>
             </>
            ) 
    }

// payment display section

    getPaymentUrl=async()=>{
        const {noOfCopies,isTatkal,certificate_id}=this.state
        const token = Cookies.get('authToken')
          try{
            const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/get-fee-details/`,
            method:"POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization":`Bearer ${token}`,
            },
            data: {
                is_tatkal: isTatkal,
                certificate_id: certificate_id,
                copies: noOfCopies
              }
            }
            const response = await axios(options)
            if(response.status===200){
                this.setState({paymentDetails:response.data,isLoading:false,backErr:true,backErrMsg:"Proceed for Payment",receivedPaymentDetails:true,confirmToPay:true})
            }
        }catch(e){
        if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("authToken")
                window.location.reload()
                }, 3000);
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }
    }


    RenderPaymentView=()=>{
        const{ studentName,
            hallticketNumber,
            certificateName,
            DegreeName,
            BranchName,
            collegeName,
            confirmToPay,
            isTatkal,
            receivedPaymentDetails,
            paymentDetails,
            noOfCopies,
            copiesSelect,
            certificate_id
        }=this.state

        return(
            <div className='certificatePaymentContainer'>
                <div style={{position:'absolute', top:0}}>
                    <img style={{height:"150px"}} src={logopng} alt="headerLogo"/>
                </div>
                <h1 style={{marginBottom:'30px', fontSize:'24px'}}>Payment</h1>
                <Grid container spacing={1.5}>
                    <Grid item xs={6}>
                        <label style={{fontSize:'15px'}}>Student Name</label>
                        <Paper style={{height:'10px', padding:'10px',fontSize:'15px',marginTop:'3px'}}>{studentName}</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <label style={{fontSize:'15px'}}>Hall Ticket Number</label>
                        <Paper style={{height:'10px', padding:'10px',fontSize:'15px',marginTop:'3px'}}>{hallticketNumber}</Paper>
                    </Grid> 
                    <Grid item xs={6}>
                        <label style={{fontSize:'15px'}}>Certificate Name</label>
                        <Paper style={{height:'10px', padding:'10px',fontSize:'15px',marginTop:'3px'}}>{certificateName}</Paper>
                    </Grid> 
                    <Grid item xs={6}>
                        <label style={{fontSize:'15px'}}>Degree</label>
                        <Paper style={{height:'10px', padding:'10px',fontSize:'15px',marginTop:'3px'}}>{DegreeName}</Paper>
                    </Grid> 
                    <Grid item xs={6}>
                        <label style={{fontSize:'15px'}}>Branch</label>
                        <Paper style={{height:'10px', padding:'10px',fontSize:'15px',marginTop:'3px'}}>{BranchName}</Paper>
                    </Grid> 
                    <Grid item xs={6}>
                        <label style={{fontSize:'15px'}}>College Name</label>
                        <Paper style={{height:'10px', padding:'10px',fontSize:'15px',marginTop:'3px'}}>{collegeName}</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <label style={{fontSize:'16px',marginBottom:'10px'}}>Application Type</label>
                        <FormControl style={{marginTop:'10px'}}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={isTatkal}
                                onChange={(event)=>this.setState({isTatkal:event.target.value})}
                            >
                                <FormControlLabel value={0} control={<Radio />} label="Normal" />
                                <FormControlLabel value={1} control={<Radio />} label="Tatkal" />
                            </RadioGroup>
                        </FormControl>
                    </Grid> 
                    {certificate_id==3?<Grid item xs={6}>
                        <label style={{fontSize:'16px'}}>No of Copies</label>
                        <Paper style={{height:'10px', padding:'10px',fontSize:'15px',marginTop:'3px'}}>
                                <CssSelect
                                    value={noOfCopies}
                                    size='small'
                                    onChange={(event)=>this.setState({noOfCopies:event.target.value,confirmToPay:false})}
                                    >
                                    {copiesSelect.map((each)=><MenuItem value={each}>{each}</MenuItem>)}
                                </CssSelect>
                        </Paper>
                    </Grid>:null}
                </Grid>
                {receivedPaymentDetails?<Grid container spacing={1}>
                    <Grid item xs={12}>
                        <div style={{display:'flex' ,alignItems:'center',padding:'10px'}}>
                            <h1 style={{fontSize:'15px'}}>Certificate Fees : </h1>
                            <Paper style={{width:'20%',padding:"5px 0 5px 5px",margin:'0 0 0 5px',fontWeight:'bolder'}}>{paymentDetails.certificate_fee}</Paper>
                        </div>
                        <div style={{display:'flex' ,alignItems:'center',padding:'10px'}}>
                            <h1 style={{fontSize:'15px'}}>Processing Fees: </h1>
                            <Paper style={{width:'20%',padding:"5px 0 5px 5px",margin:'0 0 0 5px',fontWeight:'bolder'}}>{paymentDetails.processing_fee}</Paper>
                        </div>
                        <hr style={{width:'80%'}}/>
                        <div style={{display:'flex' ,alignItems:'center',padding:'10px'}}>
                            <h1 style={{fontSize:'15px'}}>Total Payable  &nbsp;&nbsp;&nbsp;: </h1>
                            <Paper style={{width:'20%',padding:"5px 0 5px 5px",margin:'0 0 0 5px',fontWeight:'bolder'}}>{paymentDetails.total_payable}</Paper>
                        </div>
                    </Grid>
                </Grid>:null}
                <div style={{marginTop:'30px'}}>
                    {confirmToPay?<Button className="muiButton" onClick={()=>this.setState({redirectToPaymentPage:true})} variant='contained'>Proceed To Pay</Button>:<Button className="muiButton" variant='contained' onClick={this.getPaymentUrl}>Get Fee Details</Button>}
                </div>
            </div>
        )



    }
    
    backErrAlertHandler=()=>{
        this.setState({backErr:false})
    }

    render(){
        const {verified,severity,backErrMsg,backErr,isLoading,proceedForPayment,redirectToPaymentPage,paymentDetails}=this.state                     
        return(<>
            {redirectToPaymentPage && window.location.replace(`${paymentDetails.payment_link}`)}
            <div style={{marginTop:'10vw'}}>
                {proceedForPayment? this.RenderPaymentView():(verified?this.certificateLayout():this.requestInputContainer())}
            </div>
            <LoadingView isLoading={isLoading}/>
            <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={backErr} autoHideDuration={3000} onClose={this.backErrAlertHandler}>
                <Alert onClose={this.backErrAlertHandler} severity={severity} sx={{ width: '100%'}}>
                    {backErrMsg}  
                </Alert>
            </Snackbar>
           </>

        )
    }
}

export default CeritificateRequest  