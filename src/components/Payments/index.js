import {Component} from 'react'
import {Button,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,MenuItem,Select,TextField,Snackbar,Alert} from "@mui/material"
import axios from 'axios'
import Cookies from 'js-cookie'
import './index.css'
import LoadingView from "../loadingView"


class Payment extends Component{
    state={isTatkal:0,
            name:"",
            courseCategory:'',
            studentName:'',
            degree: '',
            studentBranch:'',
            registrationNumber:'',
            examYear:'',
            feesDetails:{certificate_fee:0,processing_fee:0,total_payable:0},
            isLoading:false,
            backErr:false,
            backErrMsg:'test',
            severity:'error',
            feesDetailsRecieved:false,
            Degrees:[],
            Branchs:[],
            confirmPayment:false,
            paymentLink:''
        }

    componentDidMount(){
        this.getStudentData()
        this.getPrograms()
        this.getBranchs()
    }
    
    getStudentData=async()=>{
        this.setState({isLoading:true})
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
            const student_details = studentData.data.student_details
        this.setState({
                    courseCategory:program_details.is_ug,
                    studentName:student_details.studentName,
                    degree: program_details.prog_ID,
                    studentBranch:program_details.studentBranch_id,
                    registrationNumber:program_details.registrationNumber,
                    examYear:program_details.examYear,
                    },
                    this.getDistricts,this.getBranchs,this.getPrograms
                )
        }

        }catch(e){
             if(e.response.status===401){
                this.setState({backErr:true,backErrMsg:"Invalid User... Please login to Continue",isLoading:false})
            }else{
                this.setState({backErr:true,backErrMsg:e.message,isLoading:false})
            }
        }
        
        
    }

    getPrograms=async()=>{
        this.setState({isLoading:true})
        try{
            const token = Cookies.get("authToken")
        // const {courseCategory}=this.state
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
            if(e.response.status===401){
                this.setState({backErr:true,backErrMsg:"Invalid User... Please login to Continue",isLoading:false})
            }else{
                this.setState({backErr:true,backErrMsg:e.message,isLoading:false})
            }
        }
        
    }

    getBranchs=async()=>{
         this.setState({isLoading:true})
        try{
            const token = Cookies.get("authToken")
        // const {degree}=this.state
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
             this.setState({isLoading:false})
        }
        
    }

    isTatkal=(event)=>{
        this.setState({isTatkal:event.target.value,feesDetailsRecieved:false})
    }

    updateCertificateId=(event)=>{
        this.setState({certificateId:event.target.value})
    }

    updateNoOfCopies=(event)=>{
        this.setState({copies:event.target.value})
    }

    GetFeeDetailsonClick=async()=>{
        const {isTatkal}=this.state
        this.setState({isLoading:true})
        const token = Cookies.get("authToken")
        try{
        const options = {
          url : `${process.env.REACT_APP_BASEURL}certificate/get-fee-details/`,
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization":`Bearer ${token}`,
            },
          data: {
                is_tatkal: isTatkal,
                certificate_id: 1,  
                copies:1
              }
        }
        const response = await axios(options)
        const feeDetail = {certificate_fee:response.data.certificate_fee,
                        processing_fee:response.data.processing_fee,
                        total_payable:response.data.total_payable}

        this.setState({ feesDetails:feeDetail,
                        feesDetailsRecieved:true,
                        isLoading:false
                    })
        }catch(e){
            if(e.message==='Network Error'){
                this.setState({backErr:true,backErrMsg:e.message,isLoading:false})
            }
            if(e.response.status===401){
                this.setState({backErr:true,backErrMsg:"Invalid User... Please login to Continue",isLoading:false})
                setTimeout(() => {
                    Cookies.remove("authToken")
                    window.location.replace("/student/signin")
                }, 4000);
            }else{
                this.setState({backErr:true,backErrMsg:e.message,isLoading:false})
            }
            
        }
    }

    getFeeDetailsView=()=>{
        const{otherCertificates,isTatkal,studentName,registrationNumber,Degrees,degree,Branchs,studentBranch}=this.state
        return(
            <div style={{display:"flex",flexDirection:"column",margin:"20px 0 20px 0",padding:"20px",height:"auto",fontSize:'18px'}}>
                 <h1 style={{textAlign:'center',fontSize:'26px'}}>Application Fee Process</h1>
                <form style={{display:"flex",flexDirection:'column',justifyContent:"space-around"}}>
                    <FormControl disabled={otherCertificates} onChange={this.isTatkal} style={{margin:"20px 0 10px 0"}}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Application Category</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={isTatkal}
                        >
                            <FormControlLabel value={0} control={<Radio />} label="Normal" />
                            <FormControlLabel value={1} control={<Radio />} label="Tatkal" />
                        </RadioGroup>
                    </FormControl>
                    <div style={{display:'flex',flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",width:'100%'}}>
                        <div style={{width:"48%",margin:"0"}}>
                            <p>Name</p>
                            <TextField
                                disabled
                                size="small"
                                id="reg-student-name"
                                style={{margin:"5px 0 0 0",width:"95%"}}
                                value={studentName}
                                />
                        </div>
                        <div style={{width:"48%"}}>
                            <p>Registration Number</p>
                            <TextField
                                disabled
                                size="small"
                                id="reg-student-name"
                                style={{margin:"5px 0 0 0",width:"95%"}}
                                value={registrationNumber}
                                />
                        </div>
                        <div style={{width:"48%",margin:'10px 0 0 0'}}>
                            <p>Course</p>
                            <FormControl style={{width:"95%",margin:"5px 0 0 0"}} size='small' >
                                <Select
                                disabled
                                value={degree}
                                >
                                {Degrees.map((each)=><MenuItem value={each.program_id}>{each.program_name}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{width:"48%",margin:'10px 0 0 0'}}>
                            <p>Branch</p>
                            <FormControl style={{width:"95%",margin:'5px 0 0 0'}} size='small' >
                                <Select
                                disabled
                                value={studentBranch}
                                >
                                {Branchs.map((each)=><MenuItem value={each.program_category_id}>{each.name}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{width:"100%",margin:'10px'}}>
                            <p>Applying For</p>
                            <TextField
                                disabled
                                size="small"
                                id="reg-student-name"
                                style={{margin:"5px 0 0 0",width:"98%"}}
                                value="ORIGINAL DEGREE CERTIFICATE"
                                />
                        </div>
                     </div>
                </form>
                 {this.feeDetailsView()}
            </div>
           
        )
    }

    feeDetailsView=()=>{
        const {feesDetails}=this.state
        return(<div style={{margin:"20px 0 20px 0",padding:"20px"}}>
                <h1 style={{fontSize:"28px"}}>Certificate Fees&emsp;&nbsp;:&nbsp;{feesDetails.certificate_fee}</h1>
                <h1 style={{fontSize:"28px",marginBottom:'30px'}}>Processing Fees&emsp;:&nbsp;{feesDetails.processing_fee}</h1>
                <hr/>
                <h1 style={{fontSize:"28px"}}>Total Payable &emsp;&nbsp;&nbsp;&nbsp;:&nbsp;{feesDetails.total_payable}</h1>
            </div>)
    }

    handleClose=()=>{
        this.setState({backErr:false})
    }

    payment=async()=>{
        const {isTatkal}=this.state
        this.setState({isLoading:true})
        const token = Cookies.get("authToken")
        try{
        const options = {
          url : `${process.env.REACT_APP_BASEURL}certificate/apply-certificate/`,
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization":`Bearer ${token}`,
            },
          data: {
                is_tatkal: isTatkal,
                certificate_id: 1,  
                copies:1
              }
        }
        const response = await axios(options)
            if(response.status===200){
                this.setState({confirmPayment:true,isLoading:false,paymentLink:response.data.payment_link})
            }
        }catch(e){
            
            if(e.response.status===401){
                this.setState({backErr:true,backErrMsg:"Invalid User... Please login to Continue",isLoading:false})
            }else{
                this.setState({backErr:true,backErrMsg:e.message,isLoading:false})
            }
            
        }
    }

    render(){
        const {isLoading,backErr,backErrMsg,severity,feesDetailsRecieved,confirmPayment,paymentLink}=this.state
        return(
            <>
            {confirmPayment && window.location.replace(`${paymentLink}`)}
            <LoadingView isLoading={isLoading}/>
              <Snackbar open={backErr}
                        autoHideDuration={3000} 
                        onClose={this.handleClose} 
                        anchorOrigin={{vertical:"top",horizontal:"right"}} 
                        >
                <Alert onClose={this.handleClose} severity={severity} sx={{ width: '100%' }}>
                  {backErrMsg}
                </Alert>
              </Snackbar>
            <div className='PaymentsMain'>
                <div className='paymentContainer'>
                    {/* <h1 style={{fontFamily:"cursive", fontSize:"32px", fontVariant:"ruby"}}>Payments Page</h1> */}
                    {this.getFeeDetailsView()}
                    {feesDetailsRecieved?<Button onClick={this.payment} variant='contained'>Pay Now</Button>:<Button onClick={this.GetFeeDetailsonClick} variant='contained'>Get Fees details</Button>}
                </div>
            </div>
            </>
        )
    }
} 

export default Payment