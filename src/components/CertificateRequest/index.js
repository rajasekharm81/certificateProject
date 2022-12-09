import {Component} from 'react'
import {TextField,Grid,Box,Button} from '@mui/material';
import ReactToPrint from 'react-to-print';
import format from 'date-fns/format'
import "./index.css"

class CeritificateRequest extends Component{
    state={
        studentName:"",
        certificateName:"",
        courseName:"",
        hallTicketNumber:"",
        AcademicYear:"",
        degreeCompletedMonth:"",
        degreeCompletedYear:"",
        studentNameErr:false,
        certificateNameErr:false,
        courseNameErr:false,
        hallTicketNumberErr:false,
        AcademicYearErr:false,
        degreeCompletedMonthErr:false,
        degreeCompletedYearErr:false,
        isCompleted:false
    }
    
    previewValidator=()=>{
        const {studentName,certificateName,courseName,hallTicketNumber,AcademicYear,degreeCompletedMonth,degreeCompletedYear}=this.state
        if(studentName===""){
            this.setState({studentNameErr:true})
        }
        if(studentName!==""){
            this.setState({studentNameErr:false})
        }
        if(certificateName===""){
            this.setState({certificateNameErr:true})
        }
        if(certificateName!==""){
            this.setState({certificateNameErr:false})
        }
        if(courseName===""){
            this.setState({courseNameErr:true})
        }
        if(courseName!==""){
            this.setState({courseNameErr:false})
        }
        if(hallTicketNumber===""){
            this.setState({hallTicketNumberErr:true})
        }
        if(hallTicketNumber!==""){
            this.setState({hallTicketNumberErr:false})
        }
        if(AcademicYear===""){
            this.setState({AcademicYearErr:true})
        }
        if(AcademicYear!==""){
            this.setState({AcademicYearErr:false})
        }
        if(degreeCompletedMonth===""){
            this.setState({degreeCompletedMonthErr:true})
        }
        if(degreeCompletedMonth!==""){
            this.setState({degreeCompletedMonthErr:false})
        }
        if(degreeCompletedYear===""){
            this.setState({degreeCompletedYearErr:true})
        }
        if(degreeCompletedYear!==""){
            this.setState({degreeCompletedYearErr:false})
        }
        if(studentName!=="" && certificateName!=="" && courseName!=="" && hallTicketNumber!=="" && AcademicYear!=="" && degreeCompletedMonth!=="" && degreeCompletedYear!==""){
            this.setState({isCompleted:true})
        }
        
    }

    requestInputContainer=()=>{
        const{studentName, 
            studentNameErr,
            certificateNameErr,
            courseNameErr, 
            hallTicketNumberErr, 
            AcademicYearErr,
            degreeCompletedMonthErr, 
            degreeCompletedYearErr,
            certificateName, 
            courseName, 
            hallTicketNumber,
            AcademicYear,
            degreeCompletedMonth, 
            degreeCompletedYear} =this.state
        return(
            <div className='CertificatesRequestFormContainer'>
                    <h1 style={{paddingLeft:"5vw"}}>Enter Details for Requesting a Certificate</h1>
                    <Box style={{padding:"20px 0 0 5vw"}}>
                        <Grid container spacing={3}>
                            <Grid item xs={5.5}>
                                <TextField error={studentNameErr} value={studentName} onChange={(event)=>this.setState({studentName:event.target.value.toLocaleUpperCase()})} size="small" style={{width:"38vw"}} id="outlined-basic" label="Student Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={5.5}>
                                <TextField error={certificateNameErr} value={certificateName} onChange={(event)=>this.setState({certificateName:event.target.value.toLocaleUpperCase()})} size="small" style={{width:"38vw"}} id="outlined-basic" label="Certificate Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={5.5}>
                                <TextField error={courseNameErr} value={courseName} onChange={(event)=>this.setState({courseName:event.target.value.toLocaleUpperCase()})} size="small" style={{width:"38vw"}} id="outlined-basic" label="Course Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={5.5}>
                                <TextField error={hallTicketNumberErr} value={hallTicketNumber} onChange={(event)=>this.setState({hallTicketNumber:event.target.value.toLocaleUpperCase()})} size="small" style={{width:"38vw"}} id="outlined-basic" label="Hall ticket Number" variant="outlined" />
                            </Grid>
                            <Grid item xs={3.65}>
                                <TextField error={AcademicYearErr} value={AcademicYear} onChange={(event)=>this.setState({AcademicYear:event.target.value.toLocaleUpperCase()})} size="small" style={{width:"25vw"}} id="outlined-basic" label="Academic Year" variant="outlined" />
                            </Grid>
                            <Grid item xs={3.65}>
                                <TextField error={degreeCompletedMonthErr} value={degreeCompletedMonth} onChange={(event)=>this.setState({degreeCompletedMonth:event.target.value.toLocaleUpperCase()})} size="small" style={{width:"25vw"}} id="outlined-basic" label="Degree Completed Month" variant="outlined" />
                            </Grid>
                            <Grid item xs={3.65}>
                                <TextField error={degreeCompletedYearErr} value={degreeCompletedYear} onChange={(event)=>this.setState({degreeCompletedYear:event.target.value.toLocaleUpperCase()})} size="small" style={{width:"25vw"}} id="outlined-basic" label="Degree Completed Year" variant="outlined" />
                            </Grid>
                        </Grid>
                        <div style={{display:"flex", justifyContent:"flex-end",margin:"50px 0 0 0"}}>
                            <Button style={{marginRight:"10vw"}} variant="contained" onClick={this.previewValidator}>Preview Request</Button>
                        </div>
                    </Box>
            </div>
            )
    }

    save=()=>{
        const date = format(new Date(), 'MM/dd/yyyy')
        const{studentName,certificateName,courseName,hallTicketNumber,AcademicYear,degreeCompletedMonth,degreeCompletedYear} = this.state
        const certificateReqDetails = {id:`crt_${hallTicketNumber}`,studentName:studentName,certificateName:certificateName,courseName:courseName,hallTicketNumber:hallTicketNumber,AcademicYear:AcademicYear,degreeCompletedMonth:degreeCompletedMonth,degreeCompletedYear:degreeCompletedYear, requestedOn:date}
        console.log(certificateReqDetails)
    }

    certificateLayout=()=>{
        const {studentName,certificateName,courseName,hallTicketNumber,AcademicYear,degreeCompletedMonth,degreeCompletedYear}=this.state
        const date = format(new Date(), 'MM/dd/yyyy')
        return(
            <>
             <Box className="CertificatesPreviewFormContainer" ref={el => (this.componentRef = el)}>
                <p style={{textAlign:"right", width:"100%", paddingRight:"5vw"}}>Date:<span> {date}</span></p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>To,</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>The Controller of Examinations /</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>The Additional Controller of Examinations</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>Acharya Nagarjuna University</p>
                <p style={{textAlign:"left", width:"100%", paddingLeft:"5vw"}}>Nagarjuna Nagar-522510.</p>
                <p></p>
                <p style={{textAlign:"left",width:"100%", paddingLeft:"5vw"}}>Sub: - Request to issue <span>{certificateName}</span>  - Reg.</p>
                <p style={{textAlign:"left",width:"100%", paddingLeft:"15vw"}}>Respected Sir,</p>
                <p>***</p>
                <p style={{textAlign:"left",width:"100%", paddingLeft:"5vw"}}>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; I&ensp;<span style={{fontWeight:"bold"}}> {studentName}</span> studied <span style={{fontWeight:"bold"}}>{courseName}</span> with Hall Ticket No: <span style={{fontWeight:"bold"}}>{hallTicketNumber}</span> in the Academic Year <span style={{fontWeight:"bold"}}>{AcademicYear}</span> and also completed my Degree in <span style={{fontWeight:"bold"}}>{degreeCompletedMonth}-{degreeCompletedYear}</span>.</p>
                <p style={{textAlign:"left",width:"100%", paddingLeft:"5vw"}}>Hence, I request you to issue my <span style={{fontWeight:"bold"}}>{certificateName}</span> as early as possible.</p>                
                <p style={{textAlign:"left",width:"100%", paddingLeft:"15vw"}}>Thanking you,</p>
                <p style={{textAlign:"right", width:"100%"}}>Yours Obediently,</p>
                <p style={{textAlign:"right", width:"100%"}}>{studentName}</p>
                <p style={{textAlign:"right", width:"100%"}}>{hallTicketNumber}</p>
                <div style={{display:"flex", justifyContent:"space-around", width:"300px"}}>
                    <Button style={{marginRight:'10px'}} variant="contained" onClick={()=>this.setState({isCompleted:false})}>Edit</Button>
                    <Button style={{marginRight:'10px'}} variant="contained" onClick={this.save}>Save</Button>
                    <ReactToPrint trigger={()=><Button style={{marginRight:'10px'}} variant="contained">Print</Button>} content={() => this.componentRef}/>
                </div>
            </Box>
                </>
            ) 
    }
    
    render(){
        const {isCompleted}=this.state
        return(
           isCompleted?this.certificateLayout():this.requestInputContainer()
        )
    }
}

export default CeritificateRequest