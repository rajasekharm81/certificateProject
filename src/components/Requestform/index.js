/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import {Component} from 'react';
import { Navigate } from 'react-router-dom';
import { Select,MenuItem,FormControl,InputLabel,TextField,FormLabel,RadioGroup,FormControlLabel,Radio,FormGroup,Checkbox,Button,Backdrop,CircularProgress,Snackbar,Alert} from '@mui/material';
import {format} from 'date-fns'
import {BtechCmm, Degreecmm,PgEduAndLawcmm} from "../Cmm"
import CeritificateRequest from "../CertificateRequest"
import logopng from "../../assects/logopng.png"
import nagarjuna from "../../assects/nagarjuna.png"
import "./index.css"

import axios from 'axios';
import Cookies from 'js-cookie'
import { TroubleshootRounded } from '@mui/icons-material';

import {CssSelect,CssTextField} from "../customizedComponents"


import {CmmType1,CmmType2,CmmType3} from "../test/test"


class Odrequest extends Component{
    state={
        dashBoard:false,
        screen:"requestForm",
        // screen:'cmm',
        isValidUser:true,
        requestForm:"",
        courseCategory:"",
        years:[],
        months:[],
        stateData:[],
        districtData:[],
        courseCategories:[],
        Degrees:[],
        Branchs:[],
        cmmType:"",
        degree:"",
        StudyType:"0",
        studentName:"",
        dependentOf:"C/O",
        dependentName:"",
        examYear:"",
        examMonth:"",
        studentBranch:"",
        higherEducation:"0",
        registrationNumber:"",
        street:"",
        village:"",
        mandal:"",
        district:"",
        state:"",
        pinCode:"",
        examCenter:"",
        collageName:'',
        country:"",
        backErr:false,
        backErrMsg:'',
        severity:'',
        isLocked:false,
        higherEducationNoteCheck:false,
        courseCategoryErr:false,
        degreeErr:false,
        studentNameErr:false,
        examYearErr:false,
        examMonthErr:false,
        studentBranchErr:false,
        registrationNumberErr:false,
        dependentNameErr:false,
        streetErr:false,
        villageErr:false,
        mandalErr:false,
        districtErr:false,
        stateErr:false,
        pinCodeErr:false,
        examCenterErr:false,
        collageNameErr:false,
        higherEducationErr:false,
        errorExists:false,
        isLoading:false,
        uploadedFiles:[]
    }   

    componentDidMount(){
        this.yearCounter()
        this.monthCounter()
        this.getStates()
        this.userValidation()
        this.timeouter()
        this.getStudentData()
        this.getProgCategories()
    }


// for forward and backward views

    viewChanger=(view)=>{
        this.setState({screen:view})
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
                    courseCategory:program_details.is_ug,
                    dependentOf:address.dependentOf,
                    dependentName:address.dependentName,
                    street:address.street,
                    village:address.village,
                    mandal:address.mandal,
                    district:address.district,
                    state:Number(address.state),
                    pinCode:String(address.pinCode),
                    studentName:student_details.studentName,
                    degree: program_details.prog_ID,
                    studentBranch:program_details.studentBranch_id,
                    registrationNumber:program_details.registrationNumber,
                    examMonth:program_details.examMonth,
                    examYear:program_details.examYear,
                    studyType:program_details.studyType,
                    collageName:program_details.collageName,
                    higherEducation:program_details.higherEducation,
                    examCenter:program_details.examCenter,
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
        this.getPrograms()
        this.getBranchsOnlyForGetStudentData()
        this.getDistricts()
        this.setState({isLocked:true})
    }

    timeouter=()=>{
        // eslint-disable-next-line no-sequences
        setTimeout(() => (Cookies.remove("authToken"), this.setState({ isValidUser: false })), 900000);
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
        this.setState({stateData:states.data.data})

        if(states.status===200){
            console.log("states data received")
        }
        }catch(e){
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
            this.setState({backErr:true,backErrMsg:e.message,severity:'error',isLoading:false})
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
        this.setState({courseCategories:courseCategories.data.data})
    }catch(e){
        this.setState({isLoading:false})
    }
    }

    getPrograms=async()=>{
    this.setState({isLoading:true})
    try{
        const token = Cookies.get("authToken")
        const {courseCategory}=this.state
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/programs/?course_category_id=${courseCategory}`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const Degrees = await axios(options)
        // console.log(Degrees.data.data)
        this.setState({Degrees:Degrees.data.data,isLoading:false})
        }catch(e){
            this.setState({isLoading:false})
        }
        
    }

    getBranchsOnlyForGetStudentData=async()=>{
         this.setState({isLoading:true})
        try{
        const token = Cookies.get("authToken")
        const {degree}=this.state
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/program-categories/?program_id=${degree}`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const Branchs = await axios(options)
        this.setState({Branchs:Branchs.data.data,isLoading:false},this.setCmmTypeOnlyForGetStudentData)
        }catch(e){
            console.log(e)
             this.setState({isLoading:false})
        }
        
    }

    setCmmTypeOnlyForGetStudentData=()=>{
        const {degree,Degrees}=this.state
        // eslint-disable-next-line array-callback-return
        const cmm = Degrees.map((each)=>{
            const temp = ''
            if(each.program_id===degree){
                this.setState({cmmType:each.cmm_type})
            }
        })
        
    }

    getBranchs=async()=>{
         this.setState({isLoading:true})
        try{
        const token = Cookies.get("authToken")
        const {degree,Degrees}=this.state
        const cmm = Degrees.filter((each)=>each.program_id===degree)
        this.setState({cmmType:cmm[0].cmm_type})
        const options = {
            url:`${process.env.REACT_APP_BASEURL}list/program-categories/?program_id=${degree}`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const Branchs = await axios(options)
        this.setState({Branchs:Branchs.data.data,isLoading:false})
        }catch(e){
            console.log(e)
             this.setState({isLoading:false})
        }
        
    }

    yearCounter=()=>{
        const yearList = [];
        const dt = format(new Date(),"yyyy")
        for(let i=1980;i<=dt;i++){
            yearList.push(i)
        }
        this.setState({years:yearList})
    }

    monthCounter=()=>{
        const monthsList = [];
        for(let i=1;i<=12;i++){
            monthsList.push(i)
        }
        this.setState({months:monthsList})
    }

    errorChecked=()=>{
        const {degreeErr,
        studentNameErr,
        examYearErr,
        examMonthErr,
        studentBranchErr,
        registrationNumberErr,
        dependentNameErr,
        streetErr,
        villageErr,
        mandalErr ,
        districtErr,
        stateErr,
        pinCodeErr,
        examCenterErr,
        collageNameErr,
        higherEducationErr,
        courseCategoryErr} = this.state

        if(degreeErr ||
        studentNameErr ||
        examYearErr ||
        examMonthErr ||
        studentBranchErr ||
        registrationNumberErr ||
        dependentNameErr ||
        streetErr ||
        villageErr ||
        mandalErr  ||
        districtErr ||
        stateErr ||
        pinCodeErr ||
        examCenterErr ||
        collageNameErr ||
        higherEducationErr || courseCategoryErr){
        this.setState({errorExists:true})
    }else{
        this.setState({errorExists:false})
    }
    }

    saveOnContinue=async()=>{
        this.setState({isLoading:true})
        try{
        const {requestForm,
            courseCategory,
            degree,
            StudyType,
            studentName,
            dependentOf,
            dependentName,
            examYear,
            examMonth,
            studentBranch,
            higherEducation,
            registrationNumber,
            street,
            village,
            mandal,
            district,
            state,
            pinCode,
            examCenter,
            collageName,
            country
        }=this.state
        const clz = collageName===""?"Acharaya Nagarjuna university(Private Study)":collageName
        const StudentData = {
                address:{
                    dependentOf:dependentOf,
                    dependentName:dependentName,
                    street:street,
                    village:village,
                    mandal:mandal,
                    district:district,
                    state:state,
                    pinCode:pinCode
                    },
                student_details:{
                    studentName:studentName,
                    },
                program_details:{
                    prog_ID:degree,
                    is_ug:courseCategory,
                    studentBranch_id:studentBranch,
                    registrationNumber:registrationNumber,
                    examMonth:examMonth,
                    examYear:examYear,
                    studyType:Number(StudyType),
                    collageName:clz,
                    higherEducation:Number(higherEducation),
                    examCenter:examCenter,
                    },
            }
        const token = Cookies.get("authToken")
        const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/original-degree-application/`,
            method:"POST",
            headers:{
                 'Authorization': `Bearer ${token}`,
                 'Content-Type':'application/json'
            },
            data:StudentData
            }
            const response = await axios(options)
                if(response.status===200){
                this.setState({backErr:true,backErrMsg:'Data saved Successfully, please continue',severity:'success',isLoading:false})
                setTimeout(() => {
                    this.setState({screen:'cmm'})
                }, 2000);
            }
            }catch(e){
                if(e.response.status===401){
                    this.setState({isLoading:false,backErr:true,severity:'error',backErrMsg:"Please LOGIN Again.."})
                    setTimeout(() => {
                        Cookies.remove("authToken")
                        window.location.reload()
                    }, 3000);
                }else{
                this.setState({isLoading:false,backErr:true,severity:'error',backErrMsg:e.message})
            }

    }
    }

    onContinue=(event)=>{
        event.preventDefault()
        this.errorChecked()
        const {degree,
            StudyType,
            collageName,
            studentName,
            dependentName,
            examYear,
            examMonth,
            studentBranch,
            higherEducation,
            higherEducationNoteCheck,
            registrationNumber,
            courseCategory,
            street,
            village,
            mandal,
            district,
            state,
            pinCode,
            examCenter,
            pinCodeErr
        }=this.state
        if(degree===""){
            this.setState({degreeErr:true})
        }
        if(degree!==""){
            this.setState({degreeErr:false})
        }
        if(StudyType==="0" && collageName===""){
            this.setState({collageNameErr:true})
        }
        if(StudyType==="0" && collageName!==""){
            this.setState({collageNameErr:false})
        }
        if(studentName===""){
            this.setState({studentNameErr:true})
        }
        if(studentName!==""){
            this.setState({studentNameErr:false})
        }    
        if(dependentName===""){
            this.setState({dependentNameErr:true})
        }
        if(dependentName!==""){
            this.setState({dependentNameErr:false})
        }
        if(examYear===""){
            this.setState({examYearErr:true})
        }
        if(examYear!==""){
            this.setState({examYearErr:false})
        }
        if(examMonth===""){
            this.setState({examMonthErr:true})
        }
        if(examMonth!==""){
            this.setState({examMonthErr:false})
        }
        if(studentBranch===""){
            this.setState({studentBranchErr:true})
        }
        if(studentBranch!==""){
            this.setState({studentBranchErr:false})
        }
        if(higherEducation==="0" && higherEducationNoteCheck===false){
            this.setState({higherEducationErr:true})
        }
        if(higherEducation==="0" && higherEducationNoteCheck===true){
            this.setState({higherEducationErr:false})
        }
        if(higherEducation==="1" && higherEducationNoteCheck===false){
            this.setState({higherEducationErr:false})
        }
        if(registrationNumber===""){
            this.setState({registrationNumberErr:true})
        }
         if(registrationNumber!==""){
            this.setState({registrationNumberErr:false})
        }
        if(street===""){
            this.setState({streetErr:true})
        }
        if(street!==""){
            this.setState({streetErr:false})
        }
        if(village===""){
            this.setState({villageErr:true})
        }
        if(village!==""){
            this.setState({villageErr:false})
        }
        if(mandal===""){
            this.setState({mandalErr:true})
        }
        if(mandal!==""){
            this.setState({mandalErr:false})
        }
        if(district===""){
            this.setState({districtErr:true})
        }
        if(district!==""){
            this.setState({districtErr:false})
        }
        if(state===""){
            this.setState({stateErr:true})
        }
        if(state!==""){
            this.setState({stateErr:false})
        }
        if(pinCode.length!==6){
            this.setState({pinCodeErr:true})
        }
        if(pinCode.length===6){
            this.setState({pinCodeErr:false})
        }
        if(examCenter===""){
            this.setState({examCenterErr:true})
        }
        if(examCenter!==""){
            this.setState({examCenterErr:false})
        }
        if(courseCategory===""){
            this.setState({courseCategoryErr:true})
        }
        if(courseCategory!==""){
            this.setState({courseCategoryErr:false})
        }
        if(
        ((StudyType==="0" && collageName !=="") || (StudyType==="1" && collageName==="")) &&
        ((higherEducation==="1" && higherEducationNoteCheck===false) || (higherEducation==="0" && higherEducationNoteCheck===true)) &&
            studentName !=="" &&
            dependentName!=="" &&
            examYear!=="" &&
            examMonth!=="" &&
            studentBranch!=="" &&
            registrationNumber!=="" &&
            street!=="" &&
            village!=="" &&
            mandal!=="" &&
            district!=="" &&
            state!=="" &&
            pinCodeErr===false &&
            examCenter!=="" && 
            courseCategory!==""
        ){  
            this.saveOnContinue()
        }
    }

    cmmForm=()=>{
        const{studentBranch,degree,studentName,registrationNumber,collageName,cmmType} = this.state
            switch (cmmType){
                case 4:
                    return <BtechCmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
                case 2:
                    return <Degreecmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
                case 3:
                    return <PgEduAndLawcmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
                case 1:
                    return <CmmType1/>
                default: 
                    return null
            }
    }

    screenViewer=()=>{
        const {stateData,
            districtData,
            courseCategories,
            requestForm,
            degree,
            years,
            months,
            StudyType,
            studentName,
            examYear,
            examMonth,
            studentBranch,
            higherEducation,
            village,
            dependentOf,
            dependentName,
            street,
            mandal,
            district,
            state,
            pinCode,
            examCenter,
            registrationNumber,
            courseCategory,
            degreeErr,
            studentNameErr,
            examYearErr,
            examMonthErr,
            studentBranchErr,
            registrationNumberErr,
            dependentNameErr,
            streetErr,
            villageErr,
            mandalErr,
            districtErr,
            stateErr,
            pinCodeErr,
            examCenterErr,
            collageName,
            collageNameErr,
            higherEducationErr,
            errorExists,
            courseCategoryErr,
            isLocked,
            Degrees,
            Branchs,
            screen,
            cmmType
        }=this.state
        switch(screen){
            case "requestForm":
                return (<>
            {/* <h2>ACHARYA NAGARJUNA UNIVERSIRY</h2> */}
            <h1>APPLICATION FOR OBTAINING ORIGINAL DEGREE</h1>
            <form style={{margin:"20px 0 0 0"}}>
                <div style={{position:'absolute',marginLeft:'30%', opacity:".1"}}>
                    <img src={nagarjuna} alt='Nagarjuna'/>
                </div>
                <div>
                    <FormControl size="small" style={{width:"400px",margin:"10px 10px 0px 0px"}}>
                            <label htmlFor='odform-name'>Course Category</label>
                            <Select disabled={isLocked} id='odform-name' style={{border:'1px solid black'}} error={courseCategoryErr} onChange={(event)=>{this.setState({courseCategory:Number(event.target.value)},this.getPrograms)}} value={courseCategory}>
                            {courseCategories.map((each)=><MenuItem id={each.course_category_id} value={each.course_category_id}>{each.course_category_name}</MenuItem>)}
                            </Select>
                    </FormControl>
                    <FormControl size="small" style={{width:"400px",margin:"10px 10px 0px 0px"}}>
                            <label htmlFor='degreeName'>Name of Degree Completed</label>
                            <Select disabled={isLocked} id='degreeName' style={{border:'1px solid black'}} error={degreeErr} onChange={(event)=>{this.setState({degree:event.target.value},this.getBranchs)}} value={degree}>
                                {Degrees.map((each)=>(<MenuItem key={each.program_id} id={each.program_id} value={each.program_id}>{each.program_name}</MenuItem>))}
                            </Select>
                    </FormControl>
{/* Branch */}  
                    <FormControl size="small" style={{width:"400px", margin:"10px 0px 0px 0px"}}>
                                <label htmlFor='branchName'>Name of Branch</label>
                                <Select
                                    disabled={isLocked} 
                                    id="branchName"
                                    style={{border:'1px solid black'}}
                                    error={studentBranchErr}
                                    value={studentBranch}
                                    onChange={(event)=>{
                                        this.setState({studentBranch:event.target.value})
                                    }}
                                    >
                                    {Branchs.map((each)=>(<MenuItem id={`subject${each}`} value={each.program_category_id}>{each.name}</MenuItem>))}
                                </Select>
                    </FormControl>
                </div>
                <FormControl size="small">               
                    <div className='generalOdReqDataContainer'>
                        <label>Name of the Student as per Certificates</label>
                        <CssTextField size="small" error={studentNameErr} value={studentName} onChange={(event)=>{this.setState({studentName:event.target.value.toUpperCase()})}} style={{margin:".5vw 0vw .2vw 0vw",width:"99%"}} id="odreq-studentName" variant="outlined" helperText="Please Provide with surname as per University Records"  />
{/* address section */}
                        <div style={{display:"flex", flexWrap:"wrap"}}>
{/* c/o */}
                            <div style={{display:"flex",flexDirection:'column',margin:'20px 0px 0vw 0', width:"80px"}}>
                                <label style={{color:'transparent'}}>jj</label>
                                <FormControl sx={{m: "0px 0px 1vw 0vw" }} size="small">
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            style={{border:"1px solid black"}}
                                            value={dependentOf}
                                            onChange={(event)=>{
                                                this.setState({dependentOf:event.target.value})
                                            }}
                                        >
                                            <MenuItem value="C/O">C/O</MenuItem>
                                            <MenuItem value="S/O">S/O</MenuItem>
                                            <MenuItem value="D/O">D/O</MenuItem>
                                            <MenuItem value="W/O">W/O</MenuItem>
                                        </Select>
                                </FormControl>
                            </div>
{/* dependentName */}
                            <div style={{margin:"18px 10px 1vw 0vw",display:'flex',flexDirection:'column'}}>
                                <label>Dependent Name</label>
                                <CssTextField size="small" style={{margin:'2px 0 0 0',width:"250px"}} value={dependentName} error={dependentNameErr} id="odreq-address" variant="outlined" onChange={(event)=>{this.setState({dependentName:event.target.value.toUpperCase()})}} />
                            </div>
{/* street */}
                            <div style={{flexDirection:"column", display:'flex', margin:'18px 10px 0 0', width:"300px"}}>
                                <label>Street</label>
                                <CssTextField size="small" style={{margin:'2px 0 0 0',width:'100%'}} id="odreq-address" value={street} error={streetErr} variant="outlined" onChange={(event)=>this.setState({street:event.target.value.toUpperCase()})} />
                            </div>              
{/* village/city */}
                            <div style={{display:'flex', flexDirection:'column',margin:"18px 10px 0 0",width:'300px'}}>
                                <label>Village/City</label>
                                <CssTextField size="small" style={{margin:"2px 10px 0vw 0vw",width:'100%'}} id="odreq-address" value={village} error={villageErr} variant="outlined" onChange={(event)=>this.setState({village:event.target.value.toUpperCase()})} />
                            </div>
{/* mandal */}                      
                            <div style={{display:'flex', flexDirection:'column',margin:"20px 10px 0 0px",width:'250px'}}>
                                <label>Mandal</label>
                                <CssTextField size="small" style={{margin:"0px 10px 0vw 0vw",width:'100%'}} id="odreq-address" value={mandal} error={mandalErr} variant="outlined" onChange={(event)=>this.setState({mandal:event.target.value.toUpperCase()})} />             
                            </div>

{/* states data  */}               <div style={{display:'flex', flexDirection:'column',margin:"0px 0 0 0",width:'250px'}}>
                                <FormControl sx={{ m: "20px 10px 1vw 0vw",fontSize:"6px"  }} size="small">
                                        <lable>State</lable>
                                        <Select
                                            size="small"
                                            id="stateOption"
                                            value={state}
                                            onChange={(event)=>this.setState({state:event.target.value},this.getDistricts)}
                                            error={stateErr}
                                            style={{border:'1px solid black'}}
                                        >
                                            {stateData.map((each)=><MenuItem style={{backgroundColor:"white"}} value={each.state_id}>{each.state_name}</MenuItem>)}
                                        </Select>
                                </FormControl>
                            </div>
                            
{/* district data  */}  
                            <FormControl sx={{ m: "20px 10px 1vw 0vw", width:"300px",fontSize:"6px"  }} size="small">
                                    <lable>District</lable>
                                    <Select
                                        size="small"
                                        id="districtOption"
                                        value={district} 
                                        error={districtErr}
                                        onChange={(event)=>this.setState({district:event.target.value})}
                                        style={{border:'1px solid black'}}                                                  
                                    >
                                        {districtData.map((each)=><MenuItem style={{backgroundColor:"white"}} value={each.district_id}>{each.district_name}</MenuItem>)}
                                    </Select>
                            </FormControl>
{/* pin code  */}
                            <div style={{display:'flex',flexDirection:'column',width:'310px',margin:"20px 0 0 0"}}>
                                <label>Pin Code</label>
                                <CssTextField size="small" type="number" style={{margin:"2px 10px 0vw 0vw"}} id="odreq-address" value={pinCode} error={pinCodeErr} variant="outlined" onChange={(event)=>this.setState({pinCode:(event.target.value)})} />
                            </div>
                        
{/* registrationNumber */}  
                            <div style={{display:'flex',flexDirection:'column',width:'330px',margin:"20px 10px 0 0"}}>
                                <lable>Hall Ticket Number</lable>
                                <CssTextField size="small" error={registrationNumberErr} onChange={(event)=>{this.setState({registrationNumber:event.target.value.toUpperCase()})}} value={registrationNumber} id="regID" variant="outlined" />
                            </div>
{/* Months section */}                  
                            <div style={{display:'flex',flexDirection:'column',width:'300px',margin:"20px 10px 0 0"}}>
                                <FormControl size="small" >
                                    <label>Exam Month</label>
                                    <Select 
                                        labelId="examMonth"
                                        id="ExamMonth"
                                        value={examMonth}
                                        error={examMonthErr}
                                        onChange={(event)=>{
                                            this.setState({examMonth:event.target.value})
                                        }}
                                        style={{border:'1px solid black'}}
                                        >
                                        {months.map((each)=>(<MenuItem value={each}>{each}</MenuItem>))}
                                    </Select>
                                </FormControl>
                            </div>
{/* years section */}
                            <div style={{display:'flex',flexDirection:'column',width:'300px',margin:"20px 10px 0 0"}}>
                                <FormControl size="small">
                                    <label>Exam Year</label>
                                    <Select
                                        labelId="examYearLabel"
                                        id="examYear"
                                        value={examYear}
                                        error={examYearErr}
                                        style={{border:'1px solid black'}}
                                        onChange={(event)=>{this.setState({examYear:event.target.value})}}>
                                        {years.map((each)=>(<MenuItem  value={each}>{each}</MenuItem>))}
                                    </Select>
                                </FormControl>
                            </div>
{/* Course type section */}
                            
                            <FormControl style={{margin:"10px 0px 0px 20px"}}>
                                <FormLabel id="courseTypeRadio">Course Type</FormLabel>
                                <RadioGroup row
                                    aria-labelledby="courseTypeRadio"
                                    name="controlled-radio-buttons-group"
                                    onChange={(event)=>{this.setState({StudyType:event.target.value})}} value={StudyType}>
                                    <FormControlLabel value={0} control={<Radio />} label="Regular" />
                                    <FormControlLabel value={1} control={<Radio />} label="Private" />
                                </RadioGroup>
                            </FormControl>
{/* Study Type */}              
                                
                                {StudyType==="0"? (
                                    <div style={{display:'flex',flexDirection:'column',width:'90%',margin:"20px 10px 0 0"}}>
                                        <label>College Name</label>
                                        <CssTextField size="small" value={collageName} error={collageNameErr} onChange={(event)=>{this.setState({collageName:event.target.value.toUpperCase()})}} style={{margin:"10px 10px 0vw 0vw", width:"99%"}} id="ClzName" variant="outlined" />
                                    </div>
                                    ):null}
{/* Last Appeared Exam Center */}
                                <div style={{display:'flex',flexDirection:'column',width:'90%',margin:"20px 10px 0 0"}}>
                                        <label>Last Appeared Examination Center</label>
                                        <CssTextField size="small" error={examCenterErr} value={examCenter} onChange={(event)=>{this.setState({examCenter:event.target.value.toUpperCase()})}} style={{margin:"10px 10px 0vw 0vw", width:"99%"}} id="exmCenter" variant="outlined" />
                                </div>

{/* Applying For Higher Education */}
                            <FormControl style={{margin:"10px 0px 0px 0px"}}>
                                <FormLabel id="higherEducation">Applying For Higher Degree</FormLabel>
                                <RadioGroup row
                                    aria-labelledby="higherEducation"
                                    name="controlled-radio-buttons-group"
                                    onChange={(event)=>{this.setState({higherEducation:event.target.value})}} value={higherEducation}                                                >
                                    <FormControlLabel value={0} control={<Radio />} label="Yes" />
                                    <FormControlLabel value={1} control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
{/*higher education caution note}*/}
                            {/* eslint-disable-next-line eqeqeq */}
                            {higherEducation==0? <FormGroup row>
                                <FormControlLabel style={{width:"100%", color:higherEducationErr?"red":"black"}} control={<Checkbox onChange={(event)=>{
                                    this.setState({higherEducationNoteCheck:event.target.checked})
                                }} />} label={`Note: Candidates applying for M.Phil., Ph.D, M.A., M.H.R.M., Ms.C., M.Com., M.B.A., M.C.A., MLISc., M.P.Ed., LL.B., B.Ed., M.Ed., Degree should enclse the lower original Degree certificate with a photocopy. True copies will not be considered.`} />
                            </FormGroup>:null}
                        </div> 
                        <p>Instructions</p>
                        <ul>
                            <li>Candidates applying for M.Phil., Ph.D, M.A., M.H.R.M., Ms.C., M.Com., M.B.A., M.C.A., MLISc., M.P.Ed., LL.B., B.Ed., M.Ed., Degree should enclse the lower original Degree certificate with a photocopy. True copies will not be considered.</li>
                            <li>A Candidate of Acharya Nagarjuna University applying of the Degree should enclose the photostat copies of all the marks statements and Provisional Ceritificate</li>
                            <li>Candidates who studied lower degree or part of the degree course in any other university should enclose original marks statements, original Provisional certificate and original lower degree along with Photostat copies of all certificates. </li>
                        </ul>
                    </div>
                </FormControl>
            </form>
            <Button type='submit' onClick={this.onContinue} style={{margin:"50px 0 10px 0"}} variant="contained" size="medium">Save and Continue</Button>
            {errorExists?<p style={{margin:"0 0 30px 0"}}>Please fill all the Fields and check Higher Education section</p>:<p style={{margin:"0 0 30px 0"}}></p>}
                </>)
            case "cmm":
                return this.cmmForm()

            default:
                return null
        }
        }

    commonRequestForm=()=>{
        const {requestForm}=this.state
        switch (requestForm){
            case "OD Request":
                return(
                <>
                    <div className='requestFormContainer'>
                        <div>
                            <img style={{height:'180px'}} src={logopng} alt="logo"/>
                        </div>
                        {this.screenViewer()}
                    </div>
                </>)  
                break;
            case "Certificates":
                return <CeritificateRequest/>
                break;
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

    initialView=()=>{
        const{requestForm,isLoading}=this.state
        return(
            <div className='requestForm'>
                 <img className='LogoImg' alt="LogoImage" src="https://anucde.org/assets/img/brand/logo.png"/>
                 {/* <img className='LogoutImg' alt="LogoImage" src="https://anucde.org/assets/img/brand/logo.png"/> */}
                 <Button onClick={()=>this.setState({dashBoard:true})} variant="contained" className="dashBordBtn">Back to Dashboard</Button>  
                <h1>Request Forms</h1>
                <FormControl style={{width:"40vw"}}>
                    <InputLabel style={{backgroundColor:"white"}} id="demo-simple-select-label">Requesting For</InputLabel>
                        <Select style={{backgroundColor:"white"}} value={requestForm} onChange={(event)=>this.setState({requestForm:event.target.value})} placeholder="Select Request">
                            <MenuItem value="OD Request">OD Request</MenuItem>
                            <MenuItem value="Certificates">Certificate Request</MenuItem>
                        </Select>
                    </FormControl>
                {this.commonRequestForm()}
                {isLoading?<Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>:null}
            </div>
        )
    }

    backErrAlertHandler=()=>{
        this.setState({backErr:false})
    }

    render(){
        const{isValidUser,dashBoard,backErr,backErrMsg,severity}=this.state
        return(
            <>
                {dashBoard?<Navigate to="/"/>:null}
                {isValidUser?this.initialView():<Navigate to="/student/signin"/>}
                <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={backErr} autoHideDuration={3000} onClose={this.backErrAlertHandler}>
                    <Alert onClose={this.backErrAlertHandler} severity={severity} sx={{ width: '100%'}}>
                        {backErrMsg}  
                    </Alert>
                </Snackbar>
            </>
        )
    }
}

export default Odrequest