/* eslint-disable no-unused-vars */
import {Component} from 'react';
import { Navigate } from 'react-router-dom';
import {Box,FormControlLabel,Checkbox,Button,FormGroup,MenuItem,Select,IconButton,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Snackbar,Alert,Backdrop,CircularProgress} from '@mui/material';
import Fade from '@mui/material/Fade';
// eslint-disable-next-line no-unused-vars
import Slide, { SlideProps } from '@mui/material/Slide';
import Grow, { GrowProps } from '@mui/material/Grow';
// eslint-disable-next-line no-unused-vars
import { TransitionProps } from '@mui/material/transitions';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import "./index.css"
// eslint-disable-next-line no-unused-vars
import Cookies from 'js-cookie';
import axios from 'axios';

import Payment from '../Payments';


const tableHeadings = ["Month & Year",1,2,3,4,5,6,7,8,9,'I',"II",'III','IV','V','VI','Sessionals',"Total Marks", "Max Marks"]

const PgEduAndLawTableHeadings = ["Month & Year","P-1","P-2","P-3","P-4",'P-5','P-6','P-7','P-8','P-9','Pr-1','Pr-2','Pr-3','Pr-4',"Proj/ Viva","Total"]
const PgEduAndLawBettermentTableHeadings = ["Month & Year","P-1","P-2","P-3","P-4",'P-5','P-6','P-7','P-8','P-9']                      

const DegreeTableHeadings =["Month & Year","1",'2','3','4','5','6','7','8','9','10','11','12','13']
const thirdDegreeTableHeadings =["Month & Year",'W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','Total']



export class BtechCmm extends Component{
    state={y1a:[],
        y1b:[],
        y1c:[],
        y1d:[],
        y2a:[],
        y2b:[],
        y2c:[],
        y2d:[],
        y3a:[],
        y3b:[],
        y3c:[],
        y3d:[],
        y4a:[],
        y4b:[],
        y4c:[],
        y4d:[],
        memos:[],
        certify:false,
        dropDownCounter:[],
        noOfFiles:1,
        dataSaved:false, 
        fileUploadingError:false,
        filesUploadedSuccessFully:false,
        isLoading:false,
        networkErr:false,
        documents:[],
        dataSavedAlert:false,
        proceedForPaymentBtn:false,
        proceedToPayment:false
    }

    SlideTransition=(SlideProps)=> {
        return <Slide {...SlideProps} direction="up" />
    }

    GrowTransition=(GrowProps)=> {
        return <Grow {...GrowProps} />
    }

    componentDidMount(){
        this.initialData()
        this.fileCounterDisplay()
        this.fileIdGenerator()
        this.getStudentData()
    }

    getStudentData=async()=>{
        try{
            const {pinCode}=this.state
            const token = Cookies.get("authToken")
            const options = {
                url:`https://20.235.87.10/capis/certificate/get-od-details/`,
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${token}`,
                    "Accept":"application/json"
                }
            }
            const studentData = await axios(options)
            const marks = studentData.data.marks
            this.setState({
                y1a:marks[0],
                y1b:marks[1],
                y1c:marks[2],
                y1d:marks[3],
                y2a:marks[4],
                y2b:marks[5],
                y2c:marks[6],
                y2d:marks[7],
                y3a:marks[8],
                y3b:marks[9],
                y3c:marks[10],
                y3d:marks[11],
                y4a:marks[12],
                y4b:marks[13],
                y4c:marks[14],
                y4d:marks[15]
            })
        }catch(e){
            console.log("new User")
        }
    }

    initialData=()=>{
        let a1 = []
        let b1 =[]
        let c1 = []
        let d1 =[]
        let a2 = []
        let b2 =[]
        let c2 = []
        let d2 =[]
        let a3 = []
        let b3 =[]
        let c3 = []
        let d3 =[]
        let a4 = []
        let b4 =[]
        let c4 = []
        let d4 =[]
        // firstYear
        for(let i=0;i<19;i++){
            a1.push({id:`y1a${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            b1.push({id:`y1b${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            c1.push({id:`y1c${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            d1.push({id:`y1d${i}`,marks:null})
        }
        // second Year
        for(let i=0;i<19;i++){
            a2.push({id:`y2a${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            b2.push({id:`y2b${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            c2.push({id:`y2c${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            d2.push({id:`y2d${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            a3.push({id:`y3a${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            b3.push({id:`y3b${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            c3.push({id:`y3c${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            d3.push({id:`y3d${i}`,marks:null})
        }
        // fourth Year
        for(let i=0;i<19;i++){
            a4.push({id:`y4a${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            b4.push({id:`y4b${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            c4.push({id:`y4c${i}`,marks:null})
        }
        for(let i=0;i<19;i++){
            d4.push({id:`y4d${i}`,marks:null})
        }
        this.setState({y1a:a1,y1b:b1,y1c:c1,y1d:d1,y2a:a2,y2b:b2,y2c:c2,y2d:d2,y3a:a3,y3b:b3,y3c:c3,y3d:d3,y4a:a4,y4b:b4,y4c:c4,y4d:d4})
    }

    fileCounterDisplay=()=>{
        let counter=[]
        for(let i=1;i<=20;i++){
            counter.push(i)
        }
        this.setState({dropDownCounter:counter})
    }
// for initilizing file ids
    fileIdGenerator=()=>{
        const {noOfFiles}=this.state
        let generatedArray=[]
        for(let i=1;i<=noOfFiles;i++){
            generatedArray.push({id:i,file:null})
        }
        this.setState({memos:generatedArray})
    }
// for updating marks
    update=(event)=>{
        const {y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d}=this.state
        event.preventDefault()
        let result=[]
        let Rid=event.target.id
        let refernce = Rid[0]+Rid[1]+Rid[2]
        switch(refernce){
            case "y1a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1a:result})
                break;
            case "y1b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1b:result})
                break;
            case "y1c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1c:result})
                break;
            case "y1d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1d:result})
                break;
            case "y2a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2a:result})
                break;
            case "y2b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2b:result})
                break;
            case "y2c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2c:result})
                break;
            case "y2d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2d:result})
                break;
            case "y3a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3a:result})
                break;
            case "y3b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3b:result})
                break;
            case "y3c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3c:result})
                break;
            case "y3d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3d:result})
                break;
            case "y4a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4a:result})
                break;
            case "y4b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4b:result})
                break;
            case "y4c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4c:result})
                break;
            case "y4d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4d:result})
                break;
            default: console.log("default value printed")
        }
    }
// for updating uploaded documents
    uploadDocs=(event)=>{
       const {memos}=this.state
       const updatedArray=[]
       // eslint-disable-next-line array-callback-return, eqeqeq
       memos.map((each)=>{if(each.id==event.target.id){
        updatedArray.push({id:event.target.id,file:event.target.files[0]})
       }else{
        updatedArray.push(each)
       }})
       this.setState({memos:updatedArray})
    }   

    networkErrClose=()=>{
        this.setState({networkErr:false})
    }
// for storing in local storage
    saveData=async()=>{
        this.setState({isLoading:true})
        const {regNo}=this.props
        const token = Cookies.get("authToken")
        const {y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d,networkErr}=this.state
        const temp = localStorage.getItem(`BasicData`)
        const basicData =  JSON.parse(temp)
        const details = {...basicData,marks:[y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d],tatkal:0}
        const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/original-degree-application/`,
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',             
            'Authorization':`Bearer ${token}`
            },
          data: details
        }
        try{
            const r = await axios(options)
            this.setState({dataSaved:true,isLoading:false,dataSavedAlert:true})
        }catch(e){
            console.log(e)
            this.setState({isLoading:false,networkErr:true})            
        }
    }

// save documents

    saveDocs= async()=>{
        try{
        const {memos}=this.state
        const token = Cookies.get("authToken")
        let finalDocsList =[]
        memos.map((each)=>finalDocsList.push(each.file))

        const fd = new FormData()
        finalDocsList.map((each)=>fd.append("files",each))

        const options = {
            url:`${process.env.REACT_APP_BASEURL}file/od-upload/`,
            method: 'POST',
            headers: {   
            'Content-Type': 'multipart/form-data',
            'Authorization':`Bearer ${token}`
            },
          data: fd
        }
        await axios(options)
        this.filesUploadedSuccessFullyOpen()

        // console.log(r)
        }catch(e){
            this.fileUploadErrDiologOpen()
        }
    }
// Files upload Err dilog box click open

    fileUploadErrDiologOpen = () => {
        this.setState({fileUploadingError:true})
    };

//  Files upload Err dilog box click Close
    fileUploadErrDiologClose = () => {
        this.setState({fileUploadingError:false})
    };

// files upload successfull diolog open

    filesUploadedSuccessFullyOpen=()=>{
        this.setState({filesUploadedSuccessFully:true,proceedForPaymentBtn:true})
    }

// files upload successfull diolog close

    filesUploadedSuccessFullyClose=()=>{
        this.setState({filesUploadedSuccessFully:false})
    }

    dataSavedAlertClose=()=>{
        this.setState({dataSavedAlert:false})
    }


    proceedForPayment=()=>{
        this.setState({proceedForPayment:true})
    }

    render(){
        const {y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d,certify,dropDownCounter,noOfFiles,memos,dataSaved,fileUploadingError,filesUploadedSuccessFully,isLoading,networkErr,proceedForPaymentBtn,proceedForPayment}=this.state
        return(
            <>
            {proceedForPayment?<Navigate to='/student/od/payment'/>:null}
           <Box className="mainContainer">
            {isLoading?<Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>:null}
            <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
            <div className='marksContainer'>
{/* First Year Marks section */}
                <h2>First Year</h2>        
                    <div style={{display:"flex",marginLeft:"158px"}}>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                    </div>
                    <table style={{margin:"0 0 20px 0"}}>
                        <tr>
                           { tableHeadings.map((each)=><th id={`1st${each}`}>{each}</th>)}
                        </tr>
                        <tr>
                            {y1a.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1b.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1c.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1d.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                    </table>
{/* Second Year marks section */}
                <h2>Second Year</h2>        
                    <div style={{display:"flex",marginLeft:"158px"}}>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                    </div>
                    <table style={{margin:"0 0 20px 0"}}>
                        <tr>
                           { tableHeadings.map((each)=><th id={`2nd${each}`}>{each}</th>)}
                        </tr>
                        <tr>
                            {y2a.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2b.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2c.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2d.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>

                    </table>
{/* Third Year marks section */}
                <h2>Third Year</h2>        
                    <div style={{display:"flex",marginLeft:"158px"}}>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                    </div>
                    <table style={{margin:"0 0 20px 0"}}>
                        <tr>
                           { tableHeadings.map((each)=><th id={`3rd${each}`}>{each}</th>)}
                        </tr>
                        <tr>
                            {y3a.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3b.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3c.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3d.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>

                    </table>
{/* Fourth Year marks section */}
                <h2>Fourth Year</h2>        
                    <div style={{display:"flex",marginLeft:"158px"}}>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                    </div>
                    <table style={{marginTop:"0"}}>
                        <tr>
                           { tableHeadings.map((each)=><th id={`4th${each}`}>{each}</th>)}
                        </tr>
                        <tr>
                            {y4a.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y4b.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y4c.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y4d.map((each)=><td key={`cell${each.id}`}><input value={each.marks===null?"":each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver"}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                    </table>
            </div>
{/* Certify section */}
                <FormGroup>
                    <FormControlLabel control={<Checkbox onChange={(event)=>{this.setState({certify:event.target.checked})}} />} 
                    label="I certify that the above facts are true to the best of my knowledge and belief that I subject myself to disciplinary action in the event that the above facts are found to be falsified." />
                </FormGroup>
                {dataSaved?null:<Button onClick={this.saveData} variant="contained" disabled={!certify}>Save Data</Button>}
                
{/* no of files Selection section */}
                {dataSaved?<div style={{width:"80vw",marginTop:"30px", flexWrap:"warp"}}>
                    <h3>File Uploads</h3>
                    <div style={{display:"flex", justifyContent:"flex-start",alignItems:"flex-start"}}>
                        <p>Please Select Number of files to Upload</p>
                        <Select value={noOfFiles} onChange={(event)=>this.setState({noOfFiles:event.target.value},this.fileIdGenerator)} size='small' style={{width:"100px", marginLeft:"10px"}} id="demo-simple-select">
                            {dropDownCounter.map((each)=><MenuItem key={`drop${each}`} value={each}>{each}</MenuItem>)}
                        </Select>
                    </div>

{/* file upload section */}
                    <div style={{display:'flex', justifyContent:"flex-start",alignItems:"flex-start",width:"80vw",flexWrap:"wrap"}}>
                        {memos.map((each)=><IconButton style={{width:"50%"}} color="primary" aria-label="upload picture" component="label">
                                            <input id={each.id} onChange={this.uploadDocs} accept="image/*" hidden type="file" />
                                            <UploadFileIcon style={{fontSize:"60px"}}/>
                                            {each.file===null?<h4>Select file</h4>:<h4>{each.file.name}</h4>}
                                        </IconButton>)} 
                    </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
                        {proceedForPaymentBtn?<Button variant="outlined" className="customOutlinedButton" onClick={this.proceedForPayment}>Proceed for Payment</Button>:<Button variant="outlined" className="customOutlinedButton" onClick={this.saveDocs}>Upload Documents</Button> }                       
                    </div>
                     </div>:null}

{/* error dilog box */}
                        <Dialog
                            open={fileUploadingError}
                            onClose={this.fileUploadErrDiologClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Some thing went Wrong"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Please Select all files before uploading documents
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.fileUploadErrDiologClose} autoFocus>
                                    Okay
                                </Button>
                            </DialogActions>
                        </Dialog>
{/* files upload success Notification */}
                        <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={filesUploadedSuccessFully} autoHideDuration={3000} onClose={this.filesUploadedSuccessFullyClose}>
                            <Alert onClose={this.filesUploadedSuccessFullyClose} severity="success" sx={{ width: '100%', backgroundColor:"#2E7D32", color:"white" }}>
                                Files Uploaded successfully!!! Please Proceed for Payment
                            </Alert>
                        </Snackbar>
{/* error Notification on network err */}

                <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={networkErr} autoHideDuration={3000} onClose={this.networkErrClose}>
                    <Alert onClose={this.networkErrClose} severity="error" sx={{ width: '100%', backgroundColor:"orange", color:"white" }}>
                        OOPS!!! Network Error Please Try Again
                    </Alert>
                </Snackbar>
{/* Data saved Notifications */}

                <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={this.state.dataSavedAlert} autoHideDuration={3000} onClose={this.dataSavedAlertClose}>
                    <Alert onClose={this.dataSavedAlertClose} severity="success" sx={{ width: '100%', backgroundColor:"lightgreen", color:"white" }}>
                        Data Uploaded Successfylly. Please upload Required Documents for verification.
                    </Alert>
                </Snackbar>
           </Box>
            </>
        )
    }
}

export class PgEduAndLawcmm extends Component{
    state={y1a:[],
        y1b:[],
        y1c:[],
        y1d:[],
        y2a:[],
        y2b:[],
        y2c:[],
        y2d:[],
        y3a:[],
        y3b:[],
        y3c:[],
        y3d:[],
        y4a:[],
        y4b:[],
        y4c:[],
        y4d:[],
        memos:[],
        certify:false,
        dropDownCounter:[],
        noOfFiles:1,
        dataSaved:false,
        fileUploadingError:false,
        filesUploadedSuccessFully:false,
        isLoading:false,
        networkErr:false,
        documents:[],
        dataSavedAlert:false,
        proceedForPaymentBtn:false,
        proceedToPayment:false
    }

    SlideTransition=(SlideProps)=> {
        return <Slide {...SlideProps} direction="up" />
    }

    GrowTransition=(GrowProps)=> {
        return <Grow {...GrowProps} />
    }

    componentDidMount(){
        this.initialData()
        this.fileCounterDisplay()
        this.fileIdGenerator()
        this.getStudentData()
    }

    getStudentData=async()=>{
        try{
            const {pinCode}=this.state
            const token = Cookies.get("authToken")
            const options = {
                url:`https://20.235.87.10/capis/certificate/get-od-details/`,
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${token}`,
                    "Accept":"application/json"
                }
            }
            const studentData = await axios(options)
            const marks = studentData.data.marks
            this.setState({
                y1a:marks[0],
                y1b:marks[1],
                y1c:marks[2],
                y1d:marks[3],
                y2a:marks[4],
                y2b:marks[5],
                y2c:marks[6],
                y2d:marks[7],
                y3a:marks[8],
                y3b:marks[9],
                y3c:marks[10],
                y3d:marks[11],
                y4a:marks[12],
                y4b:marks[13],
                y4c:marks[14],
                y4d:marks[15]
            })
        }catch(e){
            console.log("new User")
        }
    }

    initialData=()=>{
        let a1 = []
        let b1 =[]
        let c1 = []
        let d1 =[]
        let a2 = []
        let b2 =[]
        let c2 = []
        let d2 =[]
        let a3 = []
        let b3 =[]
        let c3 = []
        let d3 =[]
        let a4 = []
        let b4 =[]
        let c4 = []
        let d4 =[]
        // firstYear
        for(let i=0;i<16;i++){
            a1.push({id:`y1a${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            b1.push({id:`y1b${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            c1.push({id:`y1c${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            d1.push({id:`y1d${i}`,marks:null})
        }
        // Final year or second Year
        for(let i=0;i<16;i++){
            a2.push({id:`y2a${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            b2.push({id:`y2b${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            c2.push({id:`y2c${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            d2.push({id:`y2d${i}`,marks:null})
        }
        // third year
        for(let i=0;i<16;i++){
            a3.push({id:`y3a${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            b3.push({id:`y3b${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            c3.push({id:`y3c${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            d3.push({id:`y3d${i}`,marks:null})
        }
        // Betterment
        for(let i=0;i<10;i++){
            a4.push({id:`y4a${i}`,marks:null})
        }
        for(let i=0;i<10;i++){
            b4.push({id:`y4b${i}`,marks:null})
        }
        for(let i=0;i<10;i++){
            c4.push({id:`y4c${i}`,marks:null})
        }
        for(let i=0;i<10;i++){
            d4.push({id:`y4d${i}`,marks:null})
        }
        this.setState({y1a:a1,y1b:b1,y1c:c1,y1d:d1,y2a:a2,y2b:b2,y2c:c2,y2d:d2,y3a:a3,y3b:b3,y3c:c3,y3d:d3,y4a:a4,y4b:b4,y4c:c4,y4d:d4})
    }

    fileCounterDisplay=()=>{
        let counter=[]
        for(let i=1;i<=20;i++){
            counter.push(i)
        }
        this.setState({dropDownCounter:counter})
    }
// for initilizing file ids
    fileIdGenerator=()=>{
        const {noOfFiles}=this.state
        let generatedArray=[]
        for(let i=1;i<=noOfFiles;i++){
            generatedArray.push({id:i,file:null})
        }
        this.setState({memos:generatedArray})
    }
// for updating marks
    update=(event)=>{
        const {y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d}=this.state
        event.preventDefault()
        let result=[]
        let Rid=event.target.id
        let refernce = Rid[0]+Rid[1]+Rid[2]
        switch(refernce){
            case "y1a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1a:result})
                break;
            case "y1b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1b:result})
                break;
            case "y1c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1c:result})
                break;
            case "y1d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1d:result})
                break;
            case "y2a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2a:result})
                break;
            case "y2b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2b:result})
                break;
            case "y2c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2c:result})
                break;
            case "y2d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2d:result})
                break;
            case "y3a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3a:result})
                break;
            case "y3b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3b:result})
                break;
            case "y3c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3c:result})
                break;
            case "y3d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3d:result})
                break;
            case "y4a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4a:result})
                break;
            case "y4b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4b:result})
                break;
            case "y4c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4c:result})
                break;
            case "y4d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4d:result})
                break;
            default: console.log("default value printed")
        }
    }
// for updating uploaded documents
    uploadDocs=(event)=>{
       const {memos}=this.state
       const updatedArray=[]
       // eslint-disable-next-line array-callback-return, eqeqeq
       memos.map((each)=>{if(each.id==event.target.id){
        updatedArray.push({id:event.target.id,file:event.target.files[0]})
       }else{
        updatedArray.push(each)
       }})
       this.setState({memos:updatedArray})
    }   

    networkErrClose=()=>{
        this.setState({networkErr:false})
    }
// for storing in local storage
    saveData= async()=>{
        this.setState({isLoading:true})
        const {regNo}=this.props
        const token = Cookies.get("authToken")
        const {y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d,networkErr}=this.state
        const temp = localStorage.getItem(`BasicData`)
        const basicData =  JSON.parse(temp)
        const details = {...basicData,marks:[y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d]}
        const options = {
            url:`${process.env.REACT_APP_BASEURL}od/original-degree-application/`,
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
            },
          data: details
        }
        try{
            const r = await axios(options)
            this.setState({dataSaved:true,isLoading:false,dataSavedAlert:true})
        }catch(e){
            console.log(e)
            this.setState({isLoading:false,networkErr:true})            
        }
    }

// save documents

    saveDocs= async()=>{
        try{
        const {memos}=this.state
        const token = Cookies.get("authToken")
        let finalDocsList =[]
        memos.map((each)=>finalDocsList.push(each.file))

        const fd = new FormData()
        finalDocsList.map((each)=>fd.append("files",each))

        const options = {
            url:`${process.env.REACT_APP_BASEURL}file/od-upload/`,
            method: 'POST',
            headers: {   
            'Content-Type': 'multipart/form-data',
            'Authorization':`Bearer ${token}`
            },
          data: fd
        }
        await axios(options)
        this.filesUploadedSuccessFullyOpen()
        // console.log(r)
        }catch(e){
            this.fileUploadErrDiologOpen()
        }
    }
// Files upload Err dilog box click open

    fileUploadErrDiologOpen = () => {
        this.setState({fileUploadingError:true})
    };

//  Files upload Err dilog box click Close
    fileUploadErrDiologClose = () => {
        this.setState({fileUploadingError:false})
    };

// files upload successfull diolog open

    filesUploadedSuccessFullyOpen=()=>{
        this.setState({filesUploadedSuccessFully:true})
    }

// files upload successfull diolog close

    filesUploadedSuccessFullyClose=()=>{
        this.setState({filesUploadedSuccessFully:false})
    }

    dataSavedAlertClose=()=>{
        this.setState({dataSavedAlert:false})
    }

    
    proceedForPayment=()=>{
        this.setState({proceedForPayment:true})
        console.log("proceeding for payment")
    }


    render(){
        const {y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d,certify,dropDownCounter,noOfFiles,memos,dataSaved,fileUploadingError,filesUploadedSuccessFully,isLoading,networkErr,proceedForPaymentBtn,proceedForPayment}=this.state
        return(
           <Box className="mainContainer">
            {isLoading?<Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>:null}
        {proceedForPayment?<Navigate to='student/od/payment'/>:null}
            <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
            <div className='marksContainer'>
{/* First Year Marks section */}
                <h2>Previous / First Year</h2>        
                    {/* <div style={{display:"flex",marginLeft:"80px"}}>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                    </div> */}
                    <table style={{margin:"0 0 30px 0"}}>
                        <tr>
                           { PgEduAndLawTableHeadings.map((each)=><th id={`1st${each}`}>{each}</th>)}
                        </tr>
                        <tr>
                            {y1a.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1b.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1c.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1d.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>

                    </table>
{/* Second Year marks section */}
                <h2>Final / Second Year</h2>        
                    {/* <div style={{display:"flex",marginLeft:"80px"}}>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                    </div> */}
                    <table style={{margin:"0 0 30px 0"}}>
                        <tr>
                           { PgEduAndLawTableHeadings.map((each)=><th id={`2nd${each}`}>{each}</th>)}
                        </tr>
                        <tr>
                            {y2a.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2b.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2c.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2d.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "text":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>

                    </table>
{/* Third Year marks section */}
                <h2>Third Year</h2>        
                    {/* <div style={{display:"flex",marginLeft:"80px"}}>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                    </div> */}
                    <table style={{margin:"0 0 30px 0"}}>
                        <tr>
                           { PgEduAndLawTableHeadings.map((each)=><th id={`3rd${each}`}>{each}</th>)}
                        </tr>
                        <tr>
                            {y3a.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3b.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3c.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3d.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'60px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>

                    </table>
{/* Fourth Year marks section */}
                <h2>Betterment</h2>        
                    {/* <div style={{display:"flex",marginLeft:"80px"}}>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                    </div> */}
                    <table style={{marginTop:"0"}}>
                        <tr>
                           { PgEduAndLawBettermentTableHeadings.map((each)=><th id={`4th${each}`}>{each}</th>)}
                        </tr>
                        <tr>
                            {y4a.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'95px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y4b.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'95px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y4c.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'95px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y4d.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'95px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                    </table>
            </div>
{/* Certify section */}
                <FormGroup>
                    <FormControlLabel control={<Checkbox onChange={(event)=>{this.setState({certify:event.target.checked})}} />} 
                    label="I certify that the above facts are true to the best of my knowledge and belief that I subject myself to disciplinary action in the event that the above facts are found to be falsified." />
                </FormGroup>
                {dataSaved?null:<Button onClick={this.saveData} variant="contained" disabled={!certify}>Save Data</Button>}
                
{/* no of files Selection section */}
                {dataSaved?<div style={{width:"80vw",marginTop:"30px", flexWrap:"warp"}}>
                    <h3>File Uploads</h3>
                    <div style={{display:"flex", justifyContent:"flex-start",alignItems:"flex-start"}}>
                        <p>Please Select Number of files to Upload</p>
                        <Select value={noOfFiles} onChange={(event)=>this.setState({noOfFiles:event.target.value},this.fileIdGenerator)} size='small' style={{width:"100px", marginLeft:"10px"}} id="demo-simple-select">
                            {dropDownCounter.map((each)=><MenuItem key={`drop${each}`} value={each}>{each}</MenuItem>)}
                        </Select>
                    </div>

{/* file upload section */}
                    <div style={{display:'flex', justifyContent:"flex-start",alignItems:"flex-start",width:"80vw",flexWrap:"wrap"}}>
                        {memos.map((each)=><IconButton style={{width:"50%"}} color="primary" aria-label="upload picture" component="label">
                                            <input id={each.id} onChange={this.uploadDocs} accept="image/*" hidden type="file" />
                                            <UploadFileIcon style={{fontSize:"60px"}}/>
                                            {each.file===null?<h4>Select file</h4>:<h4>{each.file.name}</h4>}
                                        </IconButton>)} 
                    </div>
                        <div style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
                            {proceedForPaymentBtn?<Button variant="outlined" className="customOutlinedButton" onClick={this.proceedForPayment}>Proceed for Payment</Button>:<Button variant="outlined" className="customOutlinedButton" onClick={this.saveDocs}>Upload Documents</Button> }                       
                    
                        </div>
                     </div>:null}

{/* error dilog box */}
                        <Dialog
                            open={fileUploadingError}
                            onClose={this.fileUploadErrDiologClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Some thing went Wrong"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Please Select all files before uploading documents
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.fileUploadErrDiologClose} autoFocus>
                                    Okay
                                </Button>
                            </DialogActions>
                        </Dialog>
{/* files upload success Notification */}
                        <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={filesUploadedSuccessFully} autoHideDuration={3000} onClose={this.filesUploadedSuccessFullyClose}>
                            <Alert onClose={this.filesUploadedSuccessFullyClose} severity="success" sx={{ width: '100%', backgroundColor:"#2E7D32", color:"white" }}>
                                Files Uploaded successfully!!! Please Proceed for Payment
                            </Alert>
                        </Snackbar>
{/* error Notification on network err */}

                <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={networkErr} autoHideDuration={3000} onClose={this.networkErrClose}>
                    <Alert onClose={this.networkErrClose} severity="error" sx={{ width: '100%', backgroundColor:"orange", color:"white" }}>
                        OOPS!!! Network Error Please Try Again
                    </Alert>
                </Snackbar>
{/* Data saved Notifications */}

                <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={this.state.dataSavedAlert} autoHideDuration={3000} onClose={this.dataSavedAlertClose}>
                    <Alert onClose={this.dataSavedAlertClose} severity="success" sx={{ width: '100%', backgroundColor:"lightgreen", color:"white" }}>
                        Data Uploaded Successfylly. Please upload Required Documents for verification.
                    </Alert>
                </Snackbar>





           </Box>
        )
    }
}

export class Degreecmm extends Component{
    state={y1a:[],
        y1b:[],
        y1c:[],
        y1d:[],
        y1e:[],
        y2a:[],
        y2b:[],
        y2c:[],
        y2d:[],
        y2e:[],
        y3a:[],
        y3b:[],
        y3c:[],
        y3d:[],
        y3e:[],
        memos:[],
        certify:false,
        dropDownCounter:[],
        noOfFiles:1,
        dataSaved:false,
        fileUploadingError:false,
        filesUploadedSuccessFully:false,
        isLoading:false,
        networkErr:false,
        documents:[],
        dataSavedAlert:false,
        proceedForPayment:false,
        proceedForPaymentBtn:false
    }

    SlideTransition=(SlideProps)=> {
        return <Slide {...SlideProps} direction="up" />
    }

    GrowTransition=(GrowProps)=> {
        return <Grow {...GrowProps} />
    }

    componentDidMount(){
        this.initialData()
        this.fileCounterDisplay()
        this.fileIdGenerator()
        this.getStudentData()
    }

    getStudentData=async()=>{
        try{
            const {pinCode}=this.state
            const token = Cookies.get("authToken")
            const options = {
                url:`https://20.235.87.10/capis/od/get-od-details/`,
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${token}`,
                    "Accept":"application/json"
                }
            }
            const studentData = await axios(options)
            const marks = studentData.data.marks
            this.setState({
                y1a:marks[0],
                y1b:marks[1],
                y1c:marks[2],
                y1d:marks[3],
                y1e:marks[4],
                y2a:marks[5],
                y2b:marks[6],
                y2c:marks[7],
                y2d:marks[8],
                y2e:marks[9],
                y3a:marks[10],
                y3b:marks[11],
                y3c:marks[12],
                y3d:marks[13],
                y3e:marks[14],
            })
        }catch(e){
            console.log("new User")
        }
    }

    initialData=()=>{
        let a1 = []
        let b1 =[]
        let c1 = []
        let d1 =[]
        let e1 = []
        let a2 =[]
        let b2 = []
        let c2 =[]
        let d2 = []
        let e2 =[]
        let a3 = []
        let b3 =[]
        let c3 = []
        let d3 =[]
        let e3 = []
        // firstYear
        for(let i=0;i<14;i++){
            a1.push({id:`y1a${i}`,marks:null})
        }
        for(let i=0;i<14;i++){
            b1.push({id:`y1b${i}`,marks:null})
        }
        for(let i=0;i<14;i++){
            c1.push({id:`y1c${i}`,marks:null})
        }
        for(let i=0;i<14;i++){
            d1.push({id:`y1d${i}`,marks:null})
        }
        for(let i=0;i<14;i++){
            e1.push({id:`y1e${i}`,marks:null})
        }
        // Second Year
        for(let i=0;i<14;i++){
            a2.push({id:`y2a${i}`,marks:null})
        }
        for(let i=0;i<14;i++){
            b2.push({id:`y2b${i}`,marks:null})
        }
        for(let i=0;i<14;i++){
            c2.push({id:`y2c${i}`,marks:null})
        }
        for(let i=0;i<14;i++){
            d2.push({id:`y2d${i}`,marks:null})
        }
        for(let i=0;i<14;i++){
            e2.push({id:`y2e${i}`,marks:null})
        }
         // third year
        for(let i=0;i<16;i++){
            a3.push({id:`y3c${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            b3.push({id:`y3d${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            c3.push({id:`y4a${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            d3.push({id:`y4b${i}`,marks:null})
        }
        for(let i=0;i<16;i++){
            e3.push({id:`y4c${i}`,marks:null})
        }
        this.setState({y1a:a1,y1b:b1,y1c:c1,y1d:d1,y1e:e1,
                       y2a:a2,y2b:b2,y2c:c2,y2d:d2,y2e:e2,
                       y3a:a3,y3b:b3,y3c:c3,y3d:d3,y3e:e3})
    }

    fileCounterDisplay=()=>{
        let counter=[]
        for(let i=1;i<=20;i++){
            counter.push(i)
        }
        this.setState({dropDownCounter:counter})
    }
// for initilizing file ids
    fileIdGenerator=()=>{
        const {noOfFiles}=this.state
        let generatedArray=[]
        for(let i=1;i<=noOfFiles;i++){
            generatedArray.push({id:i,file:null})
        }
        this.setState({memos:generatedArray})
    }
// for updating marks
    update=(event)=>{
        const {y1a,y1b,y1c,y1d,y1e,y2a,y2b,y2c,y2d,y2e,y3a,y3b,y3c,y3d,y3e,}=this.state
        event.preventDefault()
        let result=[]
        let Rid=event.target.id
        let refernce = Rid[0]+Rid[1]+Rid[2]
        switch(refernce){
            case "y1a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1a:result})
                break;
            case "y1b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1b:result})
                break;
            case "y1c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1c:result})
                break;
            case "y1d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1d:result})
                break;
            case "y1e":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1e.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2a:result})
                break;
            case "y2a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2b:result})
                break;
            case "y2b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2c:result})
                break;
            case "y2c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2d:result})
                break;
            case "y2d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3a:result})
                break;
            case "y2e":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2e.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3b:result})
                break;
            case "y3a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3c:result})
                break;
            case "y3b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3d:result})
                break;
            case "y3c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4a:result})
                break;
            case "y3d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4b:result})
                break;
            case "y3e":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3e.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value.toUpperCase()})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4c:result})
                break;
            default: console.log("default value printed")
        }
    }
// for updating uploaded documents
    uploadDocs=(event)=>{
       const {memos}=this.state
       const updatedArray=[]
       // eslint-disable-next-line array-callback-return, eqeqeq
       memos.map((each)=>{if(each.id==event.target.id){
        updatedArray.push({id:event.target.id,file:event.target.files[0]})
       }else{
        updatedArray.push(each)
       }})
       this.setState({memos:updatedArray})
    }   

    networkErrClose=()=>{
        this.setState({networkErr:false})
    }
// for uploading to db
    saveData= async()=>{
        this.setState({isLoading:true})
        const {regNo}=this.props
        const token = Cookies.get("authToken")
        const {y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d,networkErr}=this.state
        const temp = localStorage.getItem(`BasicData`)
        const basicData =  JSON.parse(temp)
        const details = {...basicData,marks:[y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d]}
        const options = {
            url:`${process.env.REACT_APP_BASEURL}od/original-degree-application/`,
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${token}`
            },
          data: details
        }
        try{
            const r = await axios(options)
            this.setState({dataSaved:true,isLoading:false,dataSavedAlert:true,proceedForPaymentBtn:true})
        }catch(e){
            console.log(e)
            this.setState({isLoading:false,networkErr:true})            
        }
    }

// save documents

    saveDocs= async()=>{
        try{
        const {memos}=this.state
        const token = Cookies.get("authToken")
        let finalDocsList =[]
        memos.map((each)=>finalDocsList.push(each.file))

        const fd = new FormData()
        finalDocsList.map((each)=>fd.append("files",each))

        const options = {
            url:`${process.env.REACT_APP_BASEURL}file/od-upload/`,
            method: 'POST',
            headers: {   
            'Content-Type': 'multipart/form-data',
            'Authorization':`Bearer ${token}`
            },
          data: fd
        }
        await axios(options)
        this.filesUploadedSuccessFullyOpen()
        // console.log(r)
        }catch(e){
            this.fileUploadErrDiologOpen()
        }
    }
// Files upload Err dilog box click open

    fileUploadErrDiologOpen = () => {
        this.setState({fileUploadingError:true})
    };

//  Files upload Err dilog box click Close
    fileUploadErrDiologClose = () => {
        this.setState({fileUploadingError:false})
    };

// files upload successfull diolog open

    filesUploadedSuccessFullyOpen=()=>{
        this.setState({filesUploadedSuccessFully:true})
    }

// files upload successfull diolog close

    filesUploadedSuccessFullyClose=()=>{
        this.setState({filesUploadedSuccessFully:false})
    }

    dataSavedAlertClose=()=>{
        this.setState({dataSavedAlert:false})
    }

    proceedForPayment=()=>{
        this.setState({proceedForPayment:true})
    }

    render(){
        const {y1a,y1b,y1c,y1d,y1e,y2a,y2b,y2c,y2d,y2e,y3a,y3b,y3c,y3d,y3e,certify,dropDownCounter,noOfFiles,memos,dataSaved,fileUploadingError,filesUploadedSuccessFully,isLoading,networkErr,proceedForPayment,proceedForPaymentBtn}=this.state
        return(
           <Box className="mainContainer">
            {isLoading?<Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
            {proceedForPayment?<Navigate to='student/od/payment'/>:null}
          <CircularProgress color="inherit" />
        </Backdrop>:null}
            <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
            <div className='marksContainer'>
{/* First Year Marks section */}
                <h2>First Year</h2>        
                    <div style={{display:"flex",marginLeft:"160px"}}>
                        <p style={{minWidth:"225px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                        <p style={{minWidth:"778px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                    </div>
                    <table style={{margin:"0 0 30px 0"}}>
                        <tr>
                           { DegreeTableHeadings.map((each)=><th id={`1st${each}`}>{each}</th>)}
                        </tr>
                        <tr>
                            {y1a.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'70px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1b.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'70px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1c.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'70px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1d.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'70px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1e.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'70px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>

                    </table>
{/* Second Year marks section */}
                <h2>Second Year</h2>        
                    <div style={{display:"flex",marginLeft:"160px"}}>
                        <p style={{minWidth:"225px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                        <p style={{minWidth:"778px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                    </div>
                    <table style={{margin:"0 0 30px 0"}}>
                        <tr>
                           { DegreeTableHeadings.map((each)=><th id={`2nd${each}`}>{each}</th>)}
                        </tr>
                        <tr>
                            {y2a.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'70px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2b.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'70px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2c.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'70px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2d.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'70px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2e.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'70px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>

                    </table>
{/* Third Year marks section */}
                <h2>Third Year</h2>        
                    {/* <div style={{display:"flex",marginLeft:"80px"}}>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver", padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Theory</p>
                        <p style={{minWidth:"520px",margin:"0px",height:"25px",border:"2px solid silver",padding:"10px 0 0 10px",textAlign:"center",fontWeight:"bolder"}}>Practicals & Projects</p>
                    </div> */}
                    <table style={{marginTop:"0"}}>
                        <tr>
                           { thirdDegreeTableHeadings.map((each)=><th id={`3rd${each}`}>{each}</th>)}
                        </tr>
                        <tr>
                            {y3a.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"120px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'61.5px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3b.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"120px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'61.5px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3c.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"120px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'61.5px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3d.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"120px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'61.5px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3e.map((each)=><td key={`cell${each.id}`}><input value={each.marks} type={each.id[3]==="0"? "month":"number"} style={each.id[3]==="0"? {width:"120px",border:"1px solid silver",backgroundColor:"white"}:{backgroundColor:"white",border:"1px solid silver",width:'61.5px'}} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                    </table>
            </div>
{/* Certify section */}
                <FormGroup>
                    <FormControlLabel control={<Checkbox onChange={(event)=>{this.setState({certify:event.target.checked})}} />} 
                    label="I certify that the above facts are true to the best of my knowledge and belief that I subject myself to disciplinary action in the event that the above facts are found to be falsified." />
                </FormGroup>
                {dataSaved?null:<Button onClick={this.saveData} variant="contained" disabled={!certify}>Save Data</Button>}
                
{/* no of files Selection section */}
                {dataSaved?<div style={{width:"80vw",marginTop:"30px", flexWrap:"warp"}}>
                    <h3>File Uploads</h3>
                    <div style={{display:"flex", justifyContent:"flex-start",alignItems:"flex-start"}}>
                        <p>Please Select Number of files to Upload</p>
                        <Select value={noOfFiles} onChange={(event)=>this.setState({noOfFiles:event.target.value},this.fileIdGenerator)} size='small' style={{width:"100px", marginLeft:"10px"}} id="demo-simple-select">
                            {dropDownCounter.map((each)=><MenuItem key={`drop${each}`} value={each}>{each}</MenuItem>)}
                        </Select>
                    </div>

{/* file upload section */}
                    <div style={{display:'flex', justifyContent:"flex-start",alignItems:"flex-start",width:"80vw",flexWrap:"wrap"}}>
                        {memos.map((each)=><IconButton style={{width:"50%"}} color="primary" aria-label="upload picture" component="label">
                                            <input id={each.id} onChange={this.uploadDocs} accept="image/*" hidden type="file" />
                                            <UploadFileIcon style={{fontSize:"60px"}}/>
                                            {each.file===null?<h4>Select file</h4>:<h4>{each.file.name}</h4>}
                                        </IconButton>)} 
                    </div>
                        <div style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
                            {proceedForPaymentBtn?<Button variant="outlined" className="customOutlinedButton" onClick={this.proceedForPayment}>Proceed For Payment</Button>:<Button variant="outlined" className="customOutlinedButton" onClick={this.saveDocs}>Upload Documents</Button>}
                        </div>
                     </div>:null}

{/* error dilog box */}
                        <Dialog
                            open={fileUploadingError}
                            onClose={this.fileUploadErrDiologClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"Some thing went Wrong"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Please Select all files before uploading documents
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.fileUploadErrDiologClose} autoFocus>
                                    Okay
                                </Button>
                            </DialogActions>
                        </Dialog>
{/* files upload success Notification */}
                        <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={filesUploadedSuccessFully} autoHideDuration={3000} onClose={this.filesUploadedSuccessFullyClose}>
                            <Alert onClose={this.filesUploadedSuccessFullyClose} severity="success" sx={{ width: '100%', backgroundColor:"#2E7D32", color:"white" }}>
                                Files Uploaded successfully!!! Please Proceed for Payment
                            </Alert>
                        </Snackbar>
{/* error Notification on network err */}

                <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={networkErr} autoHideDuration={3000} onClose={this.networkErrClose}>
                    <Alert onClose={this.networkErrClose} severity="error" sx={{ width: '100%', backgroundColor:"orange", color:"white" }}>
                        OOPS!!! Network Error Please Try Again
                    </Alert>
                </Snackbar>
{/* Data saved Notifications */}

                <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right"}} TransitionComponent={this.SlideTransition} open={this.state.dataSavedAlert} autoHideDuration={3000} onClose={this.dataSavedAlertClose}>
                    <Alert onClose={this.dataSavedAlertClose} severity="success" sx={{ width: '100%', backgroundColor:"lightgreen", color:"white" }}>
                        Data Uploaded Successfylly. Please upload Required Documents for verification.
                    </Alert>
                </Snackbar>
           </Box>
        )
    }
}