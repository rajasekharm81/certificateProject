/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import {Component} from 'react';
import { Navigate } from 'react-router-dom';
import { Select,MenuItem,FormControl,InputLabel,TextField,FormLabel,RadioGroup,FormControlLabel,Radio,FormGroup,Checkbox,Button} from '@mui/material';
import {format} from 'date-fns'
import {BtechCmm, DegreeCmm} from "../Cmm"
import CeritificateRequest from "../CertificateRequest"
import "./index.css"

import {BtechBranchs,Degrees} from "../../basedata/basedata"
import axios from 'axios';
import Cookies from 'js-cookie'

class Odrequest extends Component{
    state={
        isValidUser:true,
        requestForm:"",
        years:[],
        months:[],
        stateData:[],
        districtData:[],
        degree:"",
        StudyType:"0",
        studentName:"",
        dependentOf:"C/O",
        dependentName:"",
        examYear:"",
        examMonth:"",
        studentBranch:"",
        higherEducation:"1",
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
        higherEducationNoteCheck:false,
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
        NoErrorInOd:false
    }   

    componentDidMount(){
        this.yearCounter()
        this.monthCounter()
        this.getStates()
        this.userValidation()
        this.timeouter()
    }

    timeouter=()=>{
        // eslint-disable-next-line no-sequences
        setTimeout(() => (Cookies.remove("authToken"), this.setState({ isValidUser: false })), 9000000);
    }

    getStates=async()=>{
        const token = Cookies.get("authToken")
        const options = {
            url:"https://20.235.87.10/capis/list/states/?country_id=1",
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const states = await axios(options)
        this.setState({stateData:states.data.data})
    }

    getDistricts=async()=>{
        const token = Cookies.get("authToken")
        const {state}=this.state
        const options = {
            url:`https://20.235.87.10/capis/list/districts?state_id=${state}`,
            method:"GET",
            headers:{
                 'Authorization': `Bearer ${token}`,
            }
        }
        const districts = await axios(options)
        this.setState({districtData:districts.data.data})
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
        higherEducationErr} = this.state
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
        higherEducationErr){
        this.setState({errorExists:true})
    }else{
        this.setState({errorExists:false})
    }
    }

    saveOnContinue=()=>{
        const {requestForm,
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
                    prog_ID:requestForm,
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
            examCenter!==""
        ){  
            this.setState({NoErrorInOd:true},this.saveOnContinue)
        }
    }

    cmmForm=()=>{
        const{studentBranch,degree,studentName,registrationNumber,collageName} = this.state
            switch (degree){
                case "B.tech":
                    return <BtechCmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
                case "B.Pharm":
                    return <BtechCmm degree={degree} name={studentName} regNo={registrationNumber} clzName={collageName} branch={studentBranch}/>
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
            NoErrorInOd
        }=this.state
        switch (requestForm){
            case "OD Request":
                return(
                <>
                    <div className='requestFormContainer'>
                        <h2>ACHARYA NAGARJUNA UNIVERSIRY</h2>
                        <h5>APPLICATION FOR OBTAINING ORIGINAL DEGREE</h5>
                        <form>
                            <div>
                                <FormControl size="small" style={{width:"70%",margin:"10px 10px 0px 0px"}}>
                                        <InputLabel style={{backgroundColor:"white"}} id="demo-simple-select-label">Degree Applied for</InputLabel>
                                        <Select error={degreeErr} onChange={(event)=>{this.setState({degree:event.target.value})}} value={degree}>
                                            {Degrees.map((each)=>(<MenuItem id={`degree${each}`} value={each}>{each}</MenuItem>))}
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
                                                {BtechBranchs.map((each)=>(<MenuItem id={`subject${each}`} value={each.id}>{each.name}</MenuItem>))}
                                            </Select>
                                </FormControl>
                            </div>
                            <FormControl size="small">               
                                <div className='generalOdReqDataContainer'>
                                    <TextField size="small" error={studentNameErr} value={studentName} onChange={(event)=>{this.setState({studentName:event.target.value.toUpperCase()})}} style={{margin:".5vw 0vw .2vw 0vw",width:"80%"}} id="odreq-studentName" label="Name of the applicant" variant="outlined" helperText="Please Provide with surname as per University Records"  />
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
                                        <TextField size="small" style={{margin:"20px 10px 1vw 0vw", width:"80%"}} value={dependentName} error={dependentNameErr} id="odreq-address" label="name" variant="outlined" onChange={(event)=>{this.setState({dependentName:event.target.value})}} />
                                        </div>
                                        <TextField size="small" style={{margin:"20px 10px 1vw 0vw", width:"47%"}} id="odreq-address" value={street} error={streetErr} label="street" variant="outlined" onChange={(event)=>this.setState({street:event.target.value})} />
                                        <TextField size="small" style={{margin:"20px 10px 1vw 0vw", width:"47%"}} id="odreq-address" value={village} error={villageErr} label="village/City" variant="outlined" onChange={(event)=>this.setState({village:event.target.value})} />
                                        <TextField size="small" style={{margin:"20px 10px 1vw 0vw", width:"47%"}} id="odreq-address" value={mandal} error={mandalErr} label="Mandal" variant="outlined" onChange={(event)=>this.setState({mandal:event.target.value})} />
{/* states data  */}
                                        <FormControl sx={{ m: "20px 0px 1vw 0vw", width:"150px",fontSize:"6px"  }} size="small">
                                                <InputLabel style={{backgroundColor:"white"}} id="state-dropDown">state</InputLabel>
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
  
                                        <TextField size="small" type="number" style={{margin:"20px 10px 1vw 0vw", width:"47%"}} id="odreq-address" value={pinCode} error={pinCodeErr} label="Pin Code" variant="outlined" onChange={(event)=>this.setState({pinCode:Number(event.target.value)})} />
                                    </div>                                   
                                    <div>
                                        <TextField size="small" error={registrationNumberErr} onChange={(event)=>{this.setState({registrationNumber:event.target.value})}} style={{margin:"10px 10px 0vw 0vw"}} id="regID" label="Registration Number" variant="outlined" />
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
                                                 <TextField size="small" error={collageNameErr} onChange={(event)=>{this.setState({collageName:event.target.value})}} style={{margin:"10px 10px 0vw 0vw", width:"90%"}} id="ClzName" label="College Name" variant="outlined" />
                                                ):null}
{/* Last Appeared Exam Center */}
                                        <TextField size="small" error={examCenterErr} onChange={(event)=>{this.setState({examCenter:event.target.value})}} style={{margin:"10px 10px 0vw 0vw", width:"90%"}} id="exmCenter" label="Last Appeared Examination Center" variant="outlined" />


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
                        {errorExists?<p style={{margin:"0 0 30px 0"}}>Please fill all the Fields</p>:<p style={{margin:"0 0 30px 0"}}></p>}
                    
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
        const{requestForm}=this.state
        return(
            <div className='requestForm'>
                 <img className='LogoImg' alt="LogoImage" src="https://anucde.org/assets/img/brand/logo.png"/>
                <h1>Request Forms</h1>
                <FormControl style={{width:"40vw"}}>
                    <InputLabel style={{backgroundColor:"white"}} id="demo-simple-select-label">Requesting For</InputLabel>
                        <Select style={{backgroundColor:"white"}} value={requestForm} onChange={(event)=>this.setState({requestForm:event.target.value})} placeholder="Select Request">
                            <MenuItem value="OD Request">OD Request</MenuItem>
                            <MenuItem value="Certificates">Certificate Request</MenuItem>
                        </Select>
                    </FormControl>
                {this.commonRequestForm()}
            </div>
        )
    }

    render(){
        const{isValidUser,higherEducation}=this.state
        return(
                isValidUser?this.initialView():<Navigate to="/requests/login"/>
        )
        
            
       
        
    }
}

export default Odrequest