/* eslint-disable eqeqeq */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import {Component} from 'react';
import { Select,MenuItem,Menu,FormControl,InputLabel,FormLabel,RadioGroup,FormControlLabel,Radio,FormGroup,Checkbox,Button,Backdrop,CircularProgress,Snackbar,Alert, ThemeProvider} from '@mui/material';
import {format} from 'date-fns'
import nagarjuna from "../../assects/nagarjuna.png"
import "./index.css"

import axios from 'axios';
import Cookies from 'js-cookie'

import {CssTextField} from "../customizedComponents"

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

// export class ApplicationPreview extends Component{
//     props={
//         dashBoard:false,
//         isValidUser:true,
//         requestForm:"",
//         courseCategory:"",
//         years:[],
//         months:[],
//         stateData:[],
//         districtData:[],
//         courseCategories:[],
//         Degrees:[],
//         Branchs:[],
//         cmmType:3,       
//         degree:"",
//         StudyType:"0",
//         studentName:"",
//         dependentOf:"C/O",
//         dependentName:"",
//         examYear:"",
//         examMonth:"",
//         studentBranch:"",
//         higherEducation:"0",
//         registrationNumber:"",
//         street:"",
//         village:"",
//         mandal:"",
//         district:"",
//         state:"",
//         pinCode:"",
//         examCenter:"",
//         collageName:'',
//         country:"",
//         backErr:false,
//         backErrMsg:'',
//         severity:'',
//         isLocked:false,
//         higherEducationNoteCheck:false,
//         courseCategoryErr:false,
//         degreeErr:false,
//         studentNameErr:false,
//         examYearErr:false,
//         examMonthErr:false,
//         studentBranchErr:false,
//         registrationNumberErr:false,
//         dependentNameErr:false,
//         streetErr:false,
//         villageErr:false,
//         mandalErr:false,
//         districtErr:false,
//         stateErr:false,
//         pinCodeErr:false,
//         examCenterErr:false,
//         collageNameErr:false,
//         higherEducationErr:false,
//         errorExists:false,
//         isLoading:false,
//         uploadedFiles:[],
// // checklist
        
//         isRequestFormFilled:true,  // false
//         isCmmFormFilled:false,
//         isDocumentsUploaded:false,
//         previewVerified:false,
//         paymentCompleted:false,
//     }   

//     componentDidMount(){
//         this.yearCounter()
//         this.monthCounter()
//         this.getProgCategories()
//         this.getStates()
//         this.timeouter()
//         this.getStudentData()
        
//     }

//     refresh=()=>{
//          this.yearCounter()
//         this.monthCounter()
//         this.getStates()
//         this.timeouter()
//         this.getStudentData()
//         this.getProgCategories()
//     }

// // initial data setup components
    
//     getStates=async()=>{
//         try{
//             const token = Cookies.get("authToken")
//             const options = {
//             url:`${process.env.REACT_APP_BASEURL}list/states/?country_id=1`,
//             method:"GET",
//             headers:{
//                  'Authorization': `Bearer ${token}`,
//             }
//         }
//         const states = await axios(options)
//         this.setState({stateData:states.data.data})

//         if(states.status===200){
//             console.log("states data received")
//         }
//         }catch(e){
//            if(e.response.status===401){
//             this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
//                 setTimeout(() => {
//                 Cookies.remove("authToken")
//                 window.location.reload()
//                 }, 3000);
//            }else{
            
//             this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
//            }
        
//         }
        
//     }

//     getDistricts=async()=>{
//         this.setState({isLoading:true})
//          const {state}=this.state
//         try{
//             const token = Cookies.get("authToken")
       
//         const options = {
//             url:`${process.env.REACT_APP_BASEURL}list/districts/?state_id=${state}`,
//             method:"GET",
//             headers:{
//                  'Authorization': `Bearer ${token}`,
//             }
//         }
//         const districts = await axios(options)
//         this.setState({districtData:districts.data.data,isLoading:false})
//         }catch(e){
//             this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
//         }
        
//     }

//     getProgCategories=async()=>{
//     const token = Cookies.get("authToken")
//     try{
//         const options = {
//             url:`${process.env.REACT_APP_BASEURL}list/course-categories/`,
//             method:"GET",
//             headers:{
//                  'Authorization': `Bearer ${token}`,
//             }
//         }
//         const courseCategories = await axios(options)
//         this.setState({courseCategories:courseCategories.data.data})
//     }catch(e){
//         this.setState({isLoading:false})
//     }
//     }

//     getPrograms=async()=>{
//     this.setState({isLoading:true})
//     try{
//         const token = Cookies.get("authToken")
//         const {courseCategory}=this.state
//         const options = {
//             url:`${process.env.REACT_APP_BASEURL}list/programs/?course_category_id=${courseCategory}`,
//             method:"GET",
//             headers:{
//                  'Authorization': `Bearer ${token}`,
//             }
//         }
//         const Degrees = await axios(options)
//         // console.log(Degrees.data.data)
//         this.setState({Degrees:Degrees.data.data,isLoading:false})
//         }catch(e){
//             if(e.message==="Network Error"){
//                  this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
//             }
//            if(e.response.status===401){
//             this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
//                 setTimeout(() => {
//                 Cookies.remove("authToken")
//                 window.location.reload()
//                 }, 3000);
//            }if(e.response.status===422){
//             this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
//            }else{
//             this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
//            }
//         }
        
//     }

//     getBranchs=async()=>{
//          this.setState({isLoading:true})
//         try{
//         const token = Cookies.get("authToken")
//         const {degree,Degrees}=this.state
//         const cmm = Degrees.filter((each)=>each.program_id===degree)
//         this.setState({cmmType:cmm[0].cmm_type})
//         const options = {
//             url:`${process.env.REACT_APP_BASEURL}list/program-categories/?program_id=${degree}`,
//             method:"GET",
//             headers:{
//                  'Authorization': `Bearer ${token}`,
//             }
//         }
//         const Branchs = await axios(options)
//         this.setState({Branchs:Branchs.data.data,isLoading:false})
//         }catch(e){
//             if(e.message==="Network Error"){
//                  this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
//             }
//            if(e.response.status===401){
//             this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
//                 setTimeout(() => {
//                 Cookies.remove("authToken")
//                 window.location.reload()
//                 }, 3000);
//            }if(e.response.status===422){
//             this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
//            }else{
//             this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
//            }
//         }
        
//     }

//     yearCounter=()=>{
//         const yearList = [];
//         const dt = format(new Date(),"yyyy")
//         for(let i=1980;i<=dt;i++){
//             yearList.push(i)
//         }
//         this.setState({years:yearList})
//     }

//     monthCounter=()=>{
//         const monthsList = [];
//         for(let i=1;i<=12;i++){
//             monthsList.push(i)
//         }
//         this.setState({months:monthsList})
//     }

//     getStudentData=async()=>{
//         const {pinCode}=this.state
//         const token = Cookies.get("authToken")
//         try{
//             const options = {
//             url:`${process.env.REACT_APP_BASEURL}certificate/get-od-details/`,
//             method:"GET",
//             headers:{
//                 "Authorization":`Bearer ${token}`,
//                 "Accept":"application/json"
//             }
//         }
//         const studentData = await axios(options)
//         if(studentData!==undefined){
//             const program_details = studentData.data.program_details
//             const address = studentData.data.address
//             const student_details = studentData.data.student_details
//         this.setState({
//                     courseCategory:program_details.is_ug,
//                     dependentOf:address.dependentOf,
//                     dependentName:address.dependentName,
//                     street:address.street,
//                     village:address.village,
//                     mandal:address.mandal,
//                     district:address.district,
//                     state:Number(address.state),
//                     pinCode:String(address.pinCode),
//                     studentName:student_details.studentName,
//                     degree: program_details.prog_ID,
//                     studentBranch:program_details.studentBranch_id,
//                     registrationNumber:program_details.registrationNumber,
//                     examMonth:program_details.examMonth,
//                     examYear:program_details.examYear,
//                     studyType:program_details.studyType,
//                     collageName:program_details.collageName,
//                     higherEducation:program_details.higherEducation,
//                     examCenter:program_details.examCenter,
//                     isLocked:true,
//                     },
//                     this.basicCalls()
//                 )
//         }

//         }catch(e){
//             this.setState({backErr:true,backErrMsg:'New User',severity:'success'})
//         }
        
        
//     }   

//     basicCalls=()=>{
//         this.getProgramsOnlyForGetStudentData()
//         this.getBranchsOnlyForGetStudentData()
//         this.getDistricts()
//         this.setState({isLocked:true})
//     }
//     getProgramsOnlyForGetStudentData=async()=>{
//     this.setState({isLoading:true})
//     try{
//         const token = Cookies.get("authToken")
//         const {courseCategory}=this.state
//         const options = {
//             url:`${process.env.REACT_APP_BASEURL}list/programs/`,
//             method:"GET",
//             headers:{
//                  'Authorization': `Bearer ${token}`,
//             }
//         }
//         const Degrees = await axios(options)
//         console.log(Degrees.data.data)
//         this.setState({Degrees:Degrees.data.data,isLoading:false})
//         }catch(e){
//             if(e.message==="Network Error"){
//                  this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            
//            }else{
//             console.log(e)
//            }
//         }
        
//     }
    
//     getBranchsOnlyForGetStudentData=async()=>{
//          this.setState({isLoading:true})
//         try{
//         const token = Cookies.get("authToken")
//         const {degree}=this.state
//         const options = {
//             url:`${process.env.REACT_APP_BASEURL}list/program-categories/?program_id=${degree}`,
//             method:"GET",
//             headers:{
//                  'Authorization': `Bearer ${token}`,
//             }
//         }
//         const Branchs = await axios(options)
//         this.setState({Branchs:Branchs.data.data,isLoading:false},this.setCmmTypeOnlyForGetStudentData)
//         }catch(e){
//             console.log(e)
//              this.setState({isLoading:false})
//         }
        
//     }

//     setCmmTypeOnlyForGetStudentData=()=>{
//         const {degree,Degrees}=this.state
//         // eslint-disable-next-line array-callback-return
//         Degrees.map((each)=>{
//             if(each.program_id===degree){
//                 this.setState({cmmType:each.cmm_type})
//             }
//         })
        
//     }


// // for auto logout

//     timeouter=()=>{
//         // eslint-disable-next-line no-sequences
//         setTimeout(() => (Cookies.remove("authToken"), this.setState({ isValidUser: false })), 900000);
//     }


//     applicationView=()=>{
//         const {stateData,
//             districtData,
//             courseCategories,
//             requestForm,
//             degree,
//             years,
//             months,
//             StudyType,
//             studentName,
//             examYear,
//             examMonth,
//             studentBranch,
//             higherEducation,
//             village,
//             dependentOf,
//             dependentName,
//             street,
//             mandal,
//             district,
//             state,
//             pinCode,
//             examCenter,
//             registrationNumber,
//             courseCategory,
//             degreeErr,
//             studentNameErr,
//             examYearErr,
//             examMonthErr,
//             studentBranchErr,
//             registrationNumberErr,
//             dependentNameErr,
//             streetErr,
//             villageErr,
//             mandalErr,
//             districtErr,
//             stateErr,
//             pinCodeErr,
//             examCenterErr,
//             collageName,
//             collageNameErr,
//             higherEducationErr,
//             errorExists,
//             courseCategoryErr,
//             isLocked,
//             Degrees,
//             Branchs,
//             screen,
//             cmmType
//         }=this.state
//            return( 
//            <div className='previewFormContainer'>
//                 <h1>APPLICATION FOR OBTAINING ORIGINAL DEGREE</h1>
//                 <form style={{margin:"20px 0 0 0"}}>
//                     <div style={{position:'absolute',marginLeft:'30%', opacity:".1"}}>
//                         <img src={nagarjuna} alt='Nagarjuna'/>
//                     </div>
//                     <div>
//                         <FormControl size="small" style={{width:"400px",margin:"10px 10px 0px 0px"}}>
//                                 <label htmlFor='odform-name'>Course Category</label>
//                                 <Select disabled id='odform-name' style={{border:'1px solid black'}} error={courseCategoryErr} onChange={(event)=>{this.setState({courseCategory:Number(event.target.value)},this.getPrograms)}} value={courseCategory}>
//                                 {courseCategories.map((each)=><MenuItem id={each.course_category_id} value={each.course_category_id}>{each.course_category_name}</MenuItem>)}
//                                 </Select>
//                         </FormControl>
//                         <FormControl size="small" style={{width:"400px",margin:"10px 10px 0px 0px"}}>
//                                 <label htmlFor='degreeName'>Name of Degree Completed</label>
//                                 <Select disabled id='degreeName' style={{border:'1px solid black'}} error={degreeErr} onChange={(event)=>{this.setState({degree:event.target.value},this.getBranchs)}} value={degree}>
//                                     {Degrees.map((each)=>(<MenuItem key={each.program_id} id={each.program_id} value={each.program_id}>{each.program_name}</MenuItem>))}
//                                 </Select>
//                         </FormControl>
//     {/* Branch */}  
//                         <FormControl size="small" style={{width:"400px", margin:"10px 0px 0px 0px"}}>
//                                     <label htmlFor='branchName'>Name of Branch</label>
//                                     <Select
//                                         disabled
//                                         id="branchName"
//                                         style={{border:'1px solid black'}}
//                                         error={studentBranchErr}
//                                         value={studentBranch}
//                                         onChange={(event)=>{
//                                             this.setState({studentBranch:event.target.value})
//                                         }}
//                                         >
//                                         {Branchs.map((each)=>(<MenuItem id={`subject${each}`} value={each.program_category_id}>{each.name}</MenuItem>))}
//                                     </Select>
//                         </FormControl>
//                     </div>
//                     <FormControl size="small">               
//                         <div className='generalOdReqDataContainer'>
//                             <label>Name of the Student as per Certificates</label>
//                             <CssTextField disabled size="small" error={studentNameErr} value={studentName} onChange={(event)=>{this.setState({studentName:event.target.value.toUpperCase()})}} style={{margin:".5vw 0vw .2vw 0vw",width:"99%"}} id="odreq-studentName" variant="outlined" helperText="Please Provide with surname as per University Records"  />
//     {/* address section */}
//                             <div style={{display:"flex", flexWrap:"wrap"}}>
//     {/* c/o */}
//                                 <div style={{display:"flex",flexDirection:'column',margin:'20px 0px 0vw 0', width:"80px"}}>
//                                     <label style={{color:'transparent'}}>jj</label>
//                                     <FormControl sx={{m: "0px 0px 1vw 0vw" }} size="small">
//                                             <Select
//                                                 disabled
//                                                 labelId="demo-select-small"
//                                                 id="demo-select-small"
//                                                 style={{border:"1px solid black"}}
//                                                 value={dependentOf}
//                                                 onChange={(event)=>{
//                                                     this.setState({dependentOf:event.target.value})
//                                                 }}
//                                             >
//                                                 <MenuItem value="C/O">C/O</MenuItem>
//                                                 <MenuItem value="S/O">S/O</MenuItem>
//                                                 <MenuItem value="D/O">D/O</MenuItem>
//                                                 <MenuItem value="W/O">W/O</MenuItem>
//                                             </Select>
//                                     </FormControl>
//                                 </div>
//     {/* dependentName */}
//                                 <div style={{margin:"18px 10px 1vw 0vw",display:'flex',flexDirection:'column'}}>
//                                     <label>Dependent Name</label>
//                                     <CssTextField disabled size="small" style={{margin:'2px 0 0 0',width:"250px"}} value={dependentName} error={dependentNameErr} id="odreq-address" variant="outlined" onChange={(event)=>{this.setState({dependentName:event.target.value.toUpperCase()})}} />
//                                 </div>
//     {/* street */}
//                                 <div style={{flexDirection:"column", display:'flex', margin:'18px 10px 0 0', width:"300px"}}>
//                                     <label>Street</label>
//                                     <CssTextField disabled size="small" style={{margin:'2px 0 0 0',width:'100%'}} id="odreq-address" value={street} error={streetErr} variant="outlined" onChange={(event)=>this.setState({street:event.target.value.toUpperCase()})} />
//                                 </div>              
//     {/* village/city */}
//                                 <div style={{display:'flex', flexDirection:'column',margin:"18px 10px 0 0",width:'300px'}}>
//                                     <label>Village/City</label>
//                                     <CssTextField disabled size="small" style={{margin:"2px 10px 0vw 0vw",width:'100%'}} id="odreq-address" value={village} error={villageErr} variant="outlined" onChange={(event)=>this.setState({village:event.target.value.toUpperCase()})} />
//                                 </div>
//     {/* mandal */}                      
//                                 <div style={{display:'flex', flexDirection:'column',margin:"20px 10px 0 0px",width:'250px'}}>
//                                     <label>Mandal</label>
//                                     <CssTextField disabled size="small" style={{margin:"0px 10px 0vw 0vw",width:'100%'}} id="odreq-address" value={mandal} error={mandalErr} variant="outlined" onChange={(event)=>this.setState({mandal:event.target.value.toUpperCase()})} />             
//                                 </div>

//     {/* states data  */}               <div style={{display:'flex', flexDirection:'column',margin:"0px 0 0 0",width:'250px'}}>
//                                     <FormControl sx={{ m: "20px 10px 1vw 0vw",fontSize:"6px"  }} size="small">
//                                             <lable>State</lable>
//                                             <Select
//                                                 disabled
//                                                 size="small"
//                                                 id="stateOption"
//                                                 value={state}
//                                                 onChange={(event)=>this.setState({state:event.target.value},this.getDistricts)}
//                                                 error={stateErr}
//                                                 style={{border:'1px solid black'}}
//                                             >
//                                                 {stateData.map((each)=><MenuItem style={{backgroundColor:"white"}} value={each.state_id}>{each.state_name}</MenuItem>)}
//                                             </Select>
//                                     </FormControl>
//                                 </div>
                                
//     {/* district data  */}  
//                                 <FormControl sx={{ m: "20px 10px 1vw 0vw", width:"300px",fontSize:"6px"  }} size="small">
//                                         <lable>District</lable>
//                                         <Select
//                                             disabled
//                                             size="small"
//                                             id="districtOption"
//                                             value={district} 
//                                             error={districtErr}
//                                             onChange={(event)=>this.setState({district:event.target.value})}
//                                             style={{border:'1px solid black'}}                                                  
//                                         >
//                                             {districtData.map((each)=><MenuItem style={{backgroundColor:"white"}} value={each.district_id}>{each.district_name}</MenuItem>)}
//                                         </Select>
//                                 </FormControl>
//     {/* pin code  */}
//                                 <div style={{display:'flex',flexDirection:'column',width:'310px',margin:"20px 0 0 0"}}>
//                                     <label>Pin Code</label>
//                                     <CssTextField disabled size="small" type="number" style={{margin:"2px 10px 0vw 0vw"}} id="odreq-address" value={pinCode} error={pinCodeErr} variant="outlined" onChange={(event)=>this.setState({pinCode:(event.target.value)})} />
//                                 </div>
                            
//     {/* registrationNumber */}  
//                                 <div style={{display:'flex',flexDirection:'column',width:'330px',margin:"20px 10px 0 0"}}>
//                                     <lable>Hall Ticket Number</lable>
//                                     <CssTextField disabled size="small" error={registrationNumberErr} onChange={(event)=>{this.setState({registrationNumber:event.target.value.toUpperCase()})}} value={registrationNumber} id="regID" variant="outlined" />
//                                 </div>
//     {/* Months section */}                  
//                                 <div style={{display:'flex',flexDirection:'column',width:'300px',margin:"20px 10px 0 0"}}>
//                                     <FormControl size="small" >
//                                         <label>Exam Month</label>
//                                         <Select 
//                                             disabled
//                                             labelId="examMonth"
//                                             id="ExamMonth"
//                                             value={examMonth}
//                                             error={examMonthErr}
//                                             onChange={(event)=>{
//                                                 this.setState({examMonth:event.target.value})
//                                             }}
//                                             style={{border:'1px solid black'}}
//                                             >
//                                             {months.map((each)=>(<MenuItem value={each}>{each}</MenuItem>))}
//                                         </Select>
//                                     </FormControl>
//                                 </div>
//     {/* years section */}
//                                 <div style={{display:'flex',flexDirection:'column',width:'300px',margin:"20px 10px 0 0"}}>
//                                     <FormControl size="small">
//                                         <label>Exam Year</label>
//                                         <Select
//                                             disabled
//                                             labelId="examYearLabel"
//                                             id="examYear"
//                                             value={examYear}
//                                             error={examYearErr}
//                                             style={{border:'1px solid black'}}
//                                             onChange={(event)=>{this.setState({examYear:event.target.value})}}>
//                                             {years.map((each)=>(<MenuItem  value={each}>{each}</MenuItem>))}
//                                         </Select>
//                                     </FormControl>
//                                 </div>
//     {/* Course type section */}
                                
//                                 <FormControl style={{margin:"10px 0px 0px 20px"}}>
//                                     <FormLabel id="courseTypeRadio">Course Type</FormLabel>
//                                     <RadioGroup row
//                                         disabled
//                                         aria-labelledby="courseTypeRadio"
//                                         name="controlled-radio-buttons-group"
//                                         onChange={(event)=>{this.setState({StudyType:event.target.value})}} value={StudyType}>
//                                         <FormControlLabel disabled value={0} control={<Radio />} label="Regular" />
//                                         <FormControlLabel disabled value={1} control={<Radio />} label="Private" />
//                                     </RadioGroup>
//                                 </FormControl>
//     {/* Study Type */}              
                                    
//                                     {StudyType==="0"? (
//                                         <div style={{display:'flex',flexDirection:'column',width:'90%',margin:"20px 10px 0 0"}}>
//                                             <label>College Name</label>
//                                             <CssTextField disabled size="small" value={collageName} error={collageNameErr} onChange={(event)=>{this.setState({collageName:event.target.value.toUpperCase()})}} style={{margin:"10px 10px 0vw 0vw", width:"99%"}} id="ClzName" variant="outlined" />
//                                         </div>
//                                         ):null}
//     {/* Last Appeared Exam Center */}
//                                     <div style={{display:'flex',flexDirection:'column',width:'90%',margin:"20px 10px 0 0"}}>
//                                             <label>Last Appeared Examination Center</label>
//                                             <CssTextField disabled size="small" error={examCenterErr} value={examCenter} onChange={(event)=>{this.setState({examCenter:event.target.value.toUpperCase()})}} style={{margin:"10px 10px 0vw 0vw", width:"99%"}} id="exmCenter" variant="outlined" />
//                                     </div>

//     {/* Applying For Higher Education */}
//                                 <FormControl style={{margin:"10px 0px 0px 0px"}}>
//                                     <FormLabel id="higherEducation">Applying For Higher Degree</FormLabel>
//                                     <RadioGroup row
//                                         aria-labelledby="higherEducation"
//                                         name="controlled-radio-buttons-group"
//                                         onChange={(event)=>{this.setState({higherEducation:event.target.value})}} value={higherEducation}                                                >
//                                         <FormControlLabel disabled value={0} control={<Radio />} label="Yes" />
//                                         <FormControlLabel disabled value={1} control={<Radio />} label="No" />
//                                     </RadioGroup>
//                                 </FormControl>
//                             </div> 
//                         </div>
//                     </FormControl>
//                 </form>
//             </div>
//             )
//     }
    
//     cmmView=()=>{
//        const {cmmType}=this.state
//        switch(cmmType){
//             case 1:
//                 return <CmmType1 previewView={true}/>
//             case 2:
//                 return <CmmType2 previewView={true}/>
//             case 3:
//                 return <CmmType3 previewView={true}/>
//             default:
//                 return null
//        }
//     }

//     proceed=()=>{
//         const {statusUpdater}=this.state
//         statusUpdater("preview")
//     }

//     initialView=()=>{
//         const{requestForm,isLoading}=this.state
//         return(
//             <div className='PreviewForm'>
//                 <div style={{alignSelf:'flex-start',maxWidth:'90vw'}}>
//                     {this.applicationView()}
//                 </div>
                
//                 <div style={{alignSelf:'flex-end', padding:"30px", overflow:'auto',maxWidth:'90vw'}}>
//                     {this.cmmView()}
//                 </div> 
                
//                 <div style={{display:'flex',justifyContent:'space-around',margin:'30px 0 30px 0',alignSelf:'center',width:'99%'}}>
//                     <Button className="muiButton" onClick={this.refresh}>REFRESH SCREEN</Button>
//                     <Button className="muiButton" variant='contained' onClick={this.proceed}>Confirm to Submit</Button>
//                 </div>
                
//             </div>
//         )
//     }

//     backErrAlertHandler=()=>{
//         this.setState({backErr:false})
//     }

//     render(){
//         const{isValidUser,dashBoard,backErr,backErrMsg,severity}=this.state
//         return(
//             <>
//                 {this.initialView()}
//                 <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={backErr} autoHideDuration={3000} onClose={this.backErrAlertHandler}>
//                     <Alert onClose={this.backErrAlertHandler} severity={severity} sx={{ width: '100%'}}>
//                         {backErrMsg}  
//                     </Alert>
//                 </Snackbar>
//             </>
//         )
//     }
// }

export class ApplicationPreview2 extends Component{
    state={
// basic data
        programTypes:[],
        Degrees:[],
        Branchs:[],
        stateData:[],
        branchId:"",
        ProgId:"",
        progType:"",
        district:"",
        state:"",
        cmmType:'',
// initial data
        studentName:'',
        progTypeName:"",
        ProgName:"",
        branchName:"",
        registrationNumber:'',
        collageName:'',
        examCenter:'',
        examMonth:'',
        examYear:'',
        studyType:'',
// address
        dependentOf:"",
        dependentName:"",
        street:"",
        village:'',
        mandal:'',
        districtName:"",
        stateName:"",
        pinCode:'',
        higherEducation:'',
// marks
        y1Marks:[],
        y2Marks:[],
        y3Marks:[],
        y4Marks:[],
// validation checks
        isLocked:true,
// menu
        editMenuOpen:false,
        editMenuAnchorEl:''
        
    }

    componentDidMount(){
        this.basicCalls()
        this.getStudentData()
    }

    basicCalls=()=>{
// for keydata in cookies
    const keyData = Cookies.get("keydata")
    const r= JSON.parse(keyData)
    this.setState({ progType:r.progType,
                    ProgId:r.ProgId,
                    branchId:r.branchId,
                },this.getDegreeType)

    }
    
    getStudentData=async()=>{
        const {pinCode}=this.state
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
            const address = studentData.data.address
            const student_details = studentData.data.student_details
        this.setState({
                    dependentOf:address.dependentOf,
                    dependentName:address.dependentName,
                    street:address.street,
                    village:address.village,
                    mandal:address.mandal,
                    district:address.district,
                    state:Number(address.state),
                    pinCode:String(address.pinCode),
                    studentName:student_details.studentName,
                    registrationNumber:program_details.registrationNumber,
                    examMonth:program_details.examMonth,
                    examYear:program_details.examYear,
                    studyType:program_details.studyType,
                    collageName:program_details.collageName,
                    higherEducation:program_details.higherEducation,
                    examCenter:program_details.examCenter,
                    isLocked:true,
                    },this.getStates
                )
        }
        }catch(e){
            this.setState({backErr:true,backErrMsg:'New User',severity:'success'})
        }
        
        
    }  

    getStates=async()=>{
        const{state}=this.state
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
            const item = states.data.data.filter((each)=>each.state_id==state)
            this.setState({stateName:item[0].state_name},this.getDistrict)
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
                }, 1000);
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        
        }
        
    }

    getDistrict=async()=>{
        const{state}=this.state
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
        this.setState({districtName:districts.data.data[0].district_name})
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("authToken")
                window.location.reload()
                }, 1000);
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }
    }

    getDegreeType=async()=>{
        const{progType}=this.state
      try{
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/course-categories/`,
            method:"GET",
        }
        const courseCategories = await axios(options)
        const r = courseCategories.data.data.filter((each)=>each.course_category_id==progType)
        this.setState({progTypeName:r[0].course_category_name},this.getDegrees)
    }catch(e){
        if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("authToken")
                window.location.reload()
                }, 1000);
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
    }  
    }

    getDegrees=async()=>{
        const{ProgId}=this.state
         try{
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/programs/`,
            method:"GET",
        }
        const Degrees = await axios(options)
        const r = Degrees.data.data.filter((each)=>each.program_id==ProgId)
        this.setState({ProgName:r[0].program_name,cmmType:r[0].cmm_type},this.getBranches)
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            
           }else{
            console.log(e)
           }
        }
    }

    getBranches=async()=>{
        const {branchId} = this.state
       try{
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/program-categories/`,
            method:"GET",
        }
        const Branchs = await axios(options)
        const r = Branchs.data.data.filter((each)=>each.program_category_id==branchId)
        this.setState({branchName:r[0].name},this.getMarks)
        }catch(e){
            if(e.message==="Network Error"){
                 this.setState({backErr:true,backErrMsg:"No Internet Connection...",severity:'error',isLoading:false})
            }
           if(e.response.status===401){
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
                setTimeout(() => {
                Cookies.remove("authToken")
                window.location.reload()
                }, 1000);
           }if(e.response.status===422){
            this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        } 
    }

    getMarks=async()=>{
        const token = Cookies.get('authToken')
       try{
        const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/get-cmm-details/`,
            method:"POST",
            headers:{
                'Authorization':`Bearer ${token}`
            }
        }
        const Branchs = await axios(options)
        if(Branchs.data.marks.length===4){
            this.setState({
                y1Marks:Branchs.data.marks[0],
                y2Marks:Branchs.data.marks[1],
                y3Marks:Branchs.data.marks[2],
                y4Marks:Branchs.data.marks[3],
            })
        }
        if(Branchs.data.marks.length===3){
            this.setState({
                y1Marks:Branchs.data.marks[0],
                y2Marks:Branchs.data.marks[1],
                y3Marks:Branchs.data.marks[2]
            })
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
                }, 1000);
           }if(e.response.status===422){
            this.setState({backErrMsg:e.message,severity:'error',isLoading:false})
           }else{
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
           }
        }
    }

    renderCmm=()=>{
        const {cmmType,y1Marks,y2Marks,y3Marks,y4Marks}=this.state
        switch(cmmType){
            case 1:
                return <CmmPType1 y1={y1Marks} y2={y2Marks} y3={y3Marks} y4={y4Marks}/>
            case 2:
                return <CmmPType2 y1={y1Marks} y2={y2Marks} y3={y3Marks}/>
            case 3:
                return <CmmPType3 y1={y1Marks} y2={y2Marks} y3={y3Marks} y4={y4Marks}/>
            default:
                 return null
        }
    }

    proceed=()=>{
        const {statusUpdater}=this.props
        statusUpdater("preview")
    }

    editRf=(event)=>{
        const {goto}=this.props
        goto("requestForm")
    }

    editCmm=(event)=>{
        const {goto}=this.props
        goto("cmm")
    }

    render(){
        const{
            studentName,       
            progTypeName,
            ProgName,
            branchName,
            registrationNumber,
            collageName,
            examCenter,
            examMonth,
            examYear,
            studyType,
            dependentOf,
            dependentName,
            street,
            village,
            mandal,
            districtName,
            stateName,
            pinCode,
            higherEducation,
            editMenuAnchorEl,
            editMenuOpen
        }=this.state
        return(
            <div style={{display:'flex',flexDirection:"column",width:'90%', border:'1px solid red',marginTop:'20px', padding:'15px'}}>
                <h1 style={{textAlign:'center'}}>Application Preview</h1>
{/* student basic Information */}
                <div style={{display:'flex',flexWrap:'wrap', marginTop:'30px'}}>
                    <p style={{width:'50%',marginTop:'10px', fontWeight:'bold'}}>Student Name : {studentName}</p>
                    <p style={{width:'50%',marginTop:'10px', fontWeight:'bold'}}>Father Name : {dependentName}</p>
                    <p style={{width:'50%',marginTop:'10px', fontWeight:'bold'}}>Degree Type : {progTypeName}</p>
                    <p style={{width:'50%',marginTop:'10px', fontWeight:'bold'}}>Degree : {ProgName}</p>
                    <p style={{width:'50%',marginTop:'10px', fontWeight:'bold'}}>Branch Name : {branchName}</p>
                    <p style={{width:'50%',marginTop:'10px', fontWeight:'bold'}}>Hallticket Number : {registrationNumber}</p>
                    <p style={{width:'50%',marginTop:'10px', fontWeight:'bold'}}>College Name : {collageName}</p>
                    <p style={{width:'50%',marginTop:'10px', fontWeight:'bold'}}>ExamCenter Name : {examCenter}</p>
                    <p style={{width:'50%',marginTop:'10px', fontWeight:'bold'}}>Exam month & year : {examMonth}-{examYear}</p>
                    <p style={{width:'50%',marginTop:'10px', fontWeight:'bold'}}>Study Type : {studyType==0?" Regular Student":" Private student"}</p>
                    <p style={{width:'50%',marginTop:'10px', fontWeight:'bold'}}>Applying For higher Education : {higherEducation==0?" Yes":' No'}</p>
                </div>
                <p style={{marginTop:'50px'}}>Address</p>
                <div style={{display:'flex',flexDirection:'column',marginTop:'10px'}}>
                    <p style={{width:'50%',marginTop:'5px', fontWeight:'bold'}}>{dependentOf} {dependentName}</p>
                    <p style={{width:'50%',marginTop:'5px', fontWeight:'bold'}}>{street}</p>
                    <p style={{width:'50%',marginTop:'5px', fontWeight:'bold'}}>{village}</p>
                    <p style={{width:'50%',marginTop:'5px', fontWeight:'bold'}}>{mandal} (M)</p>
                    <p style={{width:'50%',marginTop:'5px', fontWeight:'bold'}}>{districtName} (Dist)</p>
                    <p style={{width:'50%',marginTop:'5px', fontWeight:'bold'}}>{stateName}</p>
                    <p style={{width:'50%',marginTop:'5px', fontWeight:'bold'}}>Pin code: {pinCode}</p>
                </div>
{/* cmm rendering */}
                <div style={{maxWidth:'90%'}}>
                    {this.renderCmm()}
                </div>
                <div style={{display:'flex', justifyContent:'center', width:'100%'}}>
                    <Button
                        id="basic-button"
                        aria-controls={editMenuOpen ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={editMenuOpen ? 'true' : undefined}
                        onClick={(event)=>this.setState({editMenuOpen:true,editMenuAnchorEl:event.target})}
                    >
                        Edit
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={editMenuAnchorEl}
                        open={editMenuOpen}
                        onClose={()=>this.setState({editMenuOpen:false})}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem id="requestForm" onClick={this.editRf}>Request Form</MenuItem>
                        <MenuItem id="cmm" onClick={this.editCmm}>CMM</MenuItem>
                    </Menu>
                    <Button>Proceed</Button>
                </div>
                
            </div>
        )
    }
}