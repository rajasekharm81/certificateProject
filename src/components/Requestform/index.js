/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import {Component} from 'react';
import { Navigate } from 'react-router-dom';
import { Select,MenuItem,FormControl,InputLabel,TextField,FormLabel,RadioGroup,FormControlLabel,Radio,FormGroup,Checkbox,Button,Backdrop,CircularProgress,Snackbar,Alert} from '@mui/material';
import {format} from 'date-fns'
import {BtechCmm, Degreecmm,PgEduAndLawcmm} from "../Cmm"
import CeritificateRequest from "../CertificateRequest"
import logopng from "../../assects/logopng.png"
import "./index.css"

import axios from 'axios';
import Cookies from 'js-cookie'
import { TroubleshootRounded } from '@mui/icons-material';


class Odrequest extends Component{
    state={
        dashBoard:false,
        isValidUser:true,
        requestForm:"",
        courseCategory:"",
        years:[],
        months:[],
        stateData:[],
        districtData:[],
        Degrees:[],
        Branchs:[],
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
        isLocked:false,
        datasaved:false,
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
        NoErrorInOd:false, 
        isLoading:false
    }   

    componentDidMount(){
        this.yearCounter()
        this.monthCounter()
        this.getStates()
        this.userValidation()
        this.timeouter()
        this.getStudentData()
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
        console.log(studentData)
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
                    degree: program_details.prog_ID,
                    studentBranch:program_details.studentBranch_id,
                    registrationNumber:program_details.registrationNumber,
                    examMonth:program_details.examMonth,
                    examYear:program_details.examYear,
                    studyType:program_details.studyType,
                    collageName:program_details.collageName,
                    higherEducation:program_details.higherEducation,
                    examCenter:program_details.examCenter,
                    isLocked:true
                    },
                    this.getDistricts,console.log(pinCode)
                )
        }
        }catch(e){
            console.log(e.message)
        }
        
        
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
            console.log(states)
        }
        }catch(e){
           if(e.response.status===401){
            Cookies.remove("authToken")
            window.location.reload()
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
            console.log(e)
            this.setState({isLoading:false})
        }
        
    }

    getPrograms=async()=>{
        this.setState({isLoading:true})
        try{
            const token = Cookies.get("authToken")
        const {courseCategory}=this.state
        const options = {
            // url:`${process.env.REACT_APP_BASEURL}list/programs/?program_category=${courseCategory}`,
            url:`${process.env.REACT_APP_BASEURL}list/programs/`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const Degrees = await axios(options)
        // console.log(Degrees.data.data)
        this.setState({Degrees:Degrees.data.data,isLoading:false})
        }catch(e){
            console.log(e)
            this.setState({isLoading:false})
        }
        
    }

    getBranchs=async()=>{
         this.setState({isLoading:true})
        try{
            const token = Cookies.get("authToken")
        const {degree
        }=this.state
        const options = {
            // url:`${process.env.REACT_APP_BASEURL}list/program-categories/?program_id=${degree}`,
            url:`${process.env.REACT_APP_BASEURL}list/program-categories/`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const Branchs = await axios(options)
        this.setState({Branchs:Branchs.data.data,isLoading:false})
        // console.log(Branchs)
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

    saveOnContinue=()=>{
        this.setState({isLoading:true})
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
        const clz = collageName===""?"Private":collageName
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
        localStorage.setItem(`${registrationNumber}_BasicData`,JSON.stringify(StudentData))
        this.setState({isLoading:false,datasaved:true})
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
            this.setState({NoErrorInOd:true},this.saveOnContinue)
        }
    }

    cmmForm=()=>{
        const{studentBranch,degree,studentName,registrationNumber,collageName} = this.state
            switch (degree){
                case 1:
                    return <BtechCmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
                case "B.Pharm":
                    return <BtechCmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
                case "B.Sc":
                    return <Degreecmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
                case "B.A":
                    return <Degreecmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
                case "B.Com":
                    return <Degreecmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
                case "M.A":
                    return <PgEduAndLawcmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
                case "M.Com":
                    return <PgEduAndLawcmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
                   
                default: 
                    return null
            }
    }

    commonRequestForm=()=>{
        const {stateData,
            districtData,
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
            NoErrorInOd,
            courseCategoryErr,
            isLocked,
            Degrees,
            Branchs
        }=this.state
        switch (requestForm){
            case "OD Request":
                return(
                <>
                    <div className='requestFormContainer'>
                        <div>
                            <img src={logopng} alt="logo"/>
                        </div>
                        {/* <h2>ACHARYA NAGARJUNA UNIVERSIRY</h2> */}
                        <h5>APPLICATION FOR OBTAINING ORIGINAL DEGREE</h5>
                        <form>
                            <div>
                                <FormControl size="small" style={{width:"30%",margin:"10px 10px 0px 0px"}}>
                                        <InputLabel style={{backgroundColor:"white"}} id="demo-simple-select-label">Course Category</InputLabel>
                                        <Select error={courseCategoryErr} onChange={(event)=>{this.setState({courseCategory:event.target.value},this.getPrograms)}} value={courseCategory}>
                                           <MenuItem value={0}>UG</MenuItem>
                                           <MenuItem value={1}>PG</MenuItem>
                                        </Select>
                                </FormControl>
                                <FormControl disabled={isLocked} size="small" style={{width:"40%",margin:"10px 10px 0px 0px"}}>
                                        <InputLabel style={{backgroundColor:"white"}} id="demo-simple-select-label">Degree Applied for</InputLabel>
                                        <Select error={degreeErr} onChange={(event)=>{this.setState({degree:event.target.value},this.getBranchs)}} value={degree}>
                                            {Degrees.map((each)=>(<MenuItem id={`degree${each}`} value={each.program_id}>{each.program_name}</MenuItem>))}
                                        </Select>
                                </FormControl>
{/* Branch */}  
                                <FormControl size="small" style={{width:"250px", margin:"10px 0px 0px 0px"}}>
                                            <InputLabel id="branch">Branch</InputLabel>
                                            <Select 
                                                labelId="branch"
                                                id="examcenter"
                                                label="Branch"
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
                                    <TextField size="small" error={studentNameErr} value={studentName} onChange={(event)=>{this.setState({studentName:event.target.value.toUpperCase()})}} style={{margin:".5vw 0vw .2vw 0vw",width:"80%"}} id="odreq-studentName" label="Name of the applicant (As per University Records)" variant="outlined" helperText="Please Provide with surname as per University Records"  />
{/* address section */}
                                    <div style={{display:"flex", flexWrap:"wrap"}}>
                                        <div style={{display:"flex",alignItems:"flex-end", width:"49%"}}>
                                        <FormControl sx={{ m: "20px 0px 1vw 0vw", width:"14%",fontSize:"6px"  }} size="small">
                                                <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
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
                                        <TextField size="small" style={{margin:"20px 10px 1vw 0vw", width:"80%"}} value={dependentName} error={dependentNameErr} id="odreq-address" label="Name" variant="outlined" onChange={(event)=>{this.setState({dependentName:event.target.value.toUpperCase()})}} />
                                        </div>
                                        <TextField size="small" style={{margin:"20px 10px 1vw 0vw", width:"47%"}} id="odreq-address" value={street} error={streetErr} label="Street" variant="outlined" onChange={(event)=>this.setState({street:event.target.value.toUpperCase()})} />
                                        <TextField size="small" style={{margin:"20px 10px 1vw 0vw", width:"47%"}} id="odreq-address" value={village} error={villageErr} label="Village/City" variant="outlined" onChange={(event)=>this.setState({village:event.target.value.toUpperCase()})} />
                                        <TextField size="small" style={{margin:"20px 10px 1vw 0vw", width:"47%"}} id="odreq-address" value={mandal} error={mandalErr} label="Mandal" variant="outlined" onChange={(event)=>this.setState({mandal:event.target.value.toUpperCase()})} />
{/* states data  */}
                                        <FormControl sx={{ m: "20px 0px 1vw 0vw", width:"150px",fontSize:"6px"  }} size="small">
                                                <InputLabel style={{backgroundColor:"white"}} id="state-dropDown">State</InputLabel>
                                                <Select
                                                    size="small"
                                                    labelId="state-dropDown"
                                                    id="stateOption"
                                                    value={state}
                                                    onChange={(event)=>this.setState({state:event.target.value},this.getDistricts)}
                                                    error={stateErr}
                                                >
                                                    {stateData.map((each)=><MenuItem style={{backgroundColor:"white"}} value={each.state_id}>{each.state_name}</MenuItem>)}
                                                </Select>
                                        </FormControl>
                                        
{/* district data  */}
                                        <FormControl sx={{ m: "20px 0px 1vw 0vw", width:"150px",fontSize:"6px"  }} size="small">
                                                <InputLabel style={{backgroundColor:"white"}} id="state-dropDown">District</InputLabel>
                                                <Select
                                                    size="small"
                                                    labelId="district-dropDown"
                                                    id="districtOption"
                                                    value={district} 
                                                    error={districtErr}
                                                    onChange={(event)=>this.setState({district:event.target.value})}                                                   
                                                >
                                                    {districtData.map((each)=><MenuItem style={{backgroundColor:"white"}} value={each.district_id}>{each.district_name}</MenuItem>)}
                                                </Select>
                                        </FormControl>
  
                                        <TextField size="small" type="number" style={{margin:"20px 10px 1vw 0vw", width:"47%"}} id="odreq-address" value={pinCode} error={pinCodeErr} label="Pin Code" variant="outlined" onChange={(event)=>this.setState({pinCode:(event.target.value)})} />
                                    </div>                                   
                                    <div>
                                        <TextField size="small" error={registrationNumberErr} onChange={(event)=>{this.setState({registrationNumber:event.target.value.toUpperCase()})}} value={registrationNumber} style={{margin:"10px 10px 0vw 0vw"}} id="regID" label="Registration Number" variant="outlined" />
{/* Months section */}
                                        <FormControl size="small" style={{width:"150px", margin:"10px 10px 0 0px"}}>
                                            <InputLabel id="examMonth">Exam Month</InputLabel>
                                            <Select 
                                                labelId="examMonth"
                                                id="ExamMonth"
                                                label="Exam Month"
                                                value={examMonth}
                                                error={examMonthErr}
                                                onChange={(event)=>{
                                                    this.setState({examMonth:event.target.value})
                                                }}
                                                >
                                                {months.map((each)=>(<MenuItem value={each}>{each}</MenuItem>))}
                                            </Select>
                                        </FormControl>
{/* years section */}
                                        <FormControl size="small" style={{width:"150px", margin:"10px 0px 0px 0px"}}>
                                            <InputLabel id="examYearLabel">Exam Year</InputLabel>
                                            <Select
                                                labelId="examYearLabel"
                                                id="examYear"
                                                label="Exam Year"
                                                value={examYear}
                                                error={examYearErr}
                                                onChange={(event)=>{this.setState({examYear:event.target.value})}}>
                                                {years.map((each)=>(<MenuItem  value={each}>{each}</MenuItem>))}
                                            </Select>
                                        </FormControl>
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
                                                // <FormControl style={{width:"100%",  margin:"10px 10px 0px 0px"}}>
                                                //     <InputLabel id="ClzName">College Name</InputLabel>
                                                //     <Select 
                                                //         labelId="ClzName"
                                                //         id="clzName"
                                                //         label="College Name"
                                                //         value={collageName}
                                                //         error={collageNameErr}
                                                //         onChange={(event)=>this.setState({collageName:event.target.value})}
                                                //         >
                                                //         <MenuItem value="clz1">College 1</MenuItem>
                                                //         <MenuItem value="clz2">College 2</MenuItem>
                                                //     </Select>
                                                // </FormControl>
                                                 <TextField size="small" value={collageName} error={collageNameErr} onChange={(event)=>{this.setState({collageName:event.target.value.toUpperCase()})}} style={{margin:"10px 10px 0vw 0vw", width:"90%"}} id="ClzName" label="College Name" variant="outlined" />
                                                ):null}
{/* Last Appeared Exam Center */}
                                        <TextField size="small" error={examCenterErr} value={examCenter} onChange={(event)=>{this.setState({examCenter:event.target.value.toUpperCase()})}} style={{margin:"10px 10px 0vw 0vw", width:"90%"}} id="exmCenter" label="Last Appeared Examination Center" variant="outlined" />


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
                                        {higherEducation==="0"? <FormGroup row>
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
                        {NoErrorInOd?null:<Button type='submit' onClick={this.onContinue} style={{margin:"50px 0 10px 0"}} variant="contained" size="medium">Continue</Button>}
                        {errorExists?<p style={{margin:"0 0 30px 0"}}>Please fill all the Fields and check Higher Education section</p>:<p style={{margin:"0 0 30px 0"}}></p>}
                        {NoErrorInOd?this.cmmForm():null}
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

    docSavedAlertClosed=()=>{
        this.setState({datasaved:false})
    }

    render(){
        const{isValidUser,dashBoard,datasaved}=this.state
        return(
            <>
                {dashBoard?<Navigate to="/"/>:null}
                {isValidUser?this.initialView():<Navigate to="/student/signin"/>}
                <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={datasaved} autoHideDuration={3000} onClose={this.docSavedAlertClosed}>
                    <Alert onClose={this.docSavedAlertClosed} severity="success" sx={{ width: '100%', backgroundColor:"lightGreen", color:"white" }}>
                        Data saved... Please Fill Consolidated Marks Sheets  
                    </Alert>
                </Snackbar>
            </>
        )
    }
}

export default Odrequest