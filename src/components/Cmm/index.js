/* eslint-disable no-unused-vars */
import {Component} from 'react';
import {Box,FormControlLabel,Checkbox,Button,FormGroup,MenuItem,Select,IconButton,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Snackbar,Alert} from '@mui/material';
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
        memos:[{id:`_doc`,file:null}],
        certify:false,
        dropDownCounter:[],
        noOfFiles:1,
        dataSaved:false,
        fileUploadingError:false,
        filesUploadedSuccessFully:false
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
        const {regNo}=this.props
        let generatedArray=[]
        for(let i=1;i<=noOfFiles;i++){
            generatedArray.push({id:`${regNo}_doc_${i}`,file:null})
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
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1a:result})
                break;
            case "y1b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1b:result})
                break;
            case "y1c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1c:result})
                break;
            case "y1d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y1d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y1d:result})
                break;
            case "y2a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2a:result})
                break;
            case "y2b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2b:result})
                break;
            case "y2c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2c:result})
                break;
            case "y2d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y2d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y2d:result})
                break;
            case "y3a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3a:result})
                break;
            case "y3b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3b:result})
                break;
            case "y3c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3c:result})
                break;
            case "y3d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y3d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y3d:result})
                break;
            case "y4a":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4a.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4a:result})
                break;
            case "y4b":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4b.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4b:result})
                break;
            case "y4c":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4c.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
                }
                else {
                    result.push(each)
                }})
                this.setState({y4c:result})
                break;
            case "y4d":
                // eslint-disable-next-line array-callback-return, eqeqeq
                y4d.map((each)=>{if(each.id==event.target.id){
                result.push({id:event.target.id,marks:event.target.value})
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
        let updatedMemosArray=[]
        // eslint-disable-next-line array-callback-return
        memos.map((each)=>{
            if(each.id===event.target.id){
                updatedMemosArray.push({id:event.target.id,file:event.target.files[0]})
            }
            else{
                updatedMemosArray.push(each)
            }
            this.setState({memos:updatedMemosArray})
        })
    }   
// for storing in local storage
    saveData= async()=>{
        console.log("Clicked")
        const {regNo}=this.props
        const token = Cookies.get("authToken")
        const {y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d}=this.state
        const temp = localStorage.getItem(`${regNo}_BasicData`)
        const basicData =  JSON.parse(temp)
        const details = {...basicData,marks:[y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d]}
        console.log(details)
        const upload = JSON.stringify(details)
        const options = {
            url:"https://20.235.87.10/capis/od/original-degree-application/",
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

            console.log(r)

            this.setState({dataSaved:true})
        }catch(e){
            console.log(e)
        }
    }

// save documents

 saveDocs=()=>{
        try{
        const {memos}=this.state
        const {regNo}=this.props
        const fd = new FormData()
        // eslint-disable-next-line array-callback-return
        memos.map((each)=>{
            fd.append(`${regNo}_memo_${each.id}`,each.file,each.file.name)
        })
        localStorage.setItem(`${regNo}_documents`,{id:`${regNo}_Memos`,documents:fd})
        this.filesUploadedSuccessFullyOpen()
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

    render(){
        const {y1a,y1b,y1c,y1d,y2a,y2b,y2c,y2d,y3a,y3b,y3c,y3d,y4a,y4b,y4c,y4d,certify,dropDownCounter,noOfFiles,memos,dataSaved,fileUploadingError,filesUploadedSuccessFully}=this.state
        // const {degree,name,regNo,clzName,branch}=this.props
        return(
           <Box className="mainContainer">
            <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
            <div className='marksContainer'>
{/* First Year Marks section */}
                <p>First Year</p>        
                    <div style={{display:"flex",marginLeft:"65px"}}>
                        <p style={{minWidth:"525px",margin:"0px",height:"25px",border:"1px solid black", padding:"10px 0 0 10px"}}>Theory</p>
                        <p style={{minWidth:"525px",margin:"0px",height:"25px",border:"1px solid black",padding:"10px 0 0 10px"}}>Practicals & Projects</p>
                    </div>
                    <table style={{marginTop:"0"}}>
                        <tr>
                            <th>Month & Year</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>I</th>
                            <th>II</th>
                            <th>III</th>
                            <th>IV</th>
                            <th>V</th>
                            <th>VI</th>
                            <th>Sessionals</th>
                            <th>Total Marks</th>
                            <th>Max Marks</th>
                        </tr>
                        <tr>
                            {y1a.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1b.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1c.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y1d.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>

                    </table>
{/* Second Year marks section */}
                <p>Second Year</p>        
                    <div style={{display:"flex",marginLeft:"65px"}}>
                        <p style={{minWidth:"525px",margin:"0px",height:"25px",border:"1px solid black", padding:"10px 0 0 10px"}}>Theory</p>
                        <p style={{minWidth:"525px",margin:"0px",height:"25px",border:"1px solid black",padding:"10px 0 0 10px"}}>Practicals & Projects</p>
                    </div>
                    <table style={{marginTop:"0"}}>
                        <tr>
                            <th>Month & Year</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>I</th>
                            <th>II</th>
                            <th>III</th>
                            <th>IV</th>
                            <th>V</th>
                            <th>VI</th>
                            <th>Sessionals</th>
                            <th>Total Marks</th>
                            <th>Max Marks</th>
                        </tr>
                        <tr>
                            {y2a.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2b.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2c.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y2d.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>

                    </table>
{/* Third Year marks section */}
                <p>Third Year</p>        
                    <div style={{display:"flex",marginLeft:"65px"}}>
                        <p style={{minWidth:"525px",margin:"0px",height:"25px",border:"1px solid black", padding:"10px 0 0 10px"}}>Theory</p>
                        <p style={{minWidth:"525px",margin:"0px",height:"25px",border:"1px solid black",padding:"10px 0 0 10px"}}>Practicals & Projects</p>
                    </div>
                    <table style={{marginTop:"0"}}>
                        <tr>
                            <th>Month & Year</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>I</th>
                            <th>II</th>
                            <th>III</th>
                            <th>IV</th>
                            <th>V</th>
                            <th>VI</th>
                            <th>Sessionals</th>
                            <th>Total Marks</th>
                            <th>Max Marks</th>
                        </tr>
                        <tr>
                            {y3a.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3b.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3c.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y3d.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>

                    </table>
{/* Fourth Year marks section */}
                <p>Fourth Year</p>        
                    <div style={{display:"flex",marginLeft:"65px"}}>
                            <p style={{minWidth:"525px",margin:"0px",height:"25px",border:"1px solid black", padding:"10px 0 0 10px"}}>Theory</p>
                            <p style={{minWidth:"525px",margin:"0px",height:"25px",border:"1px solid black",padding:"10px 0 0 10px"}}>Practicals & Projects</p>
                    </div>
                    <table style={{marginTop:"0"}}>
                        <tr>
                            <th>Month & Year</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>I</th>
                            <th>II</th>
                            <th>III</th>
                            <th>IV</th>
                            <th>V</th>
                            <th>VI</th>
                            <th>Sessionals</th>
                            <th>Total Marks</th>
                            <th>Max Marks</th>
                        </tr>
                        <tr>
                            {y4a.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y4b.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y4c.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
                        </tr>
                        <tr>
                            {y4d.map((each)=><td key={`cell${each.id}`}><input type={each.id[3]==="0"? "text":"number"} onChange={this.update} className='cell' id={each.id}/></td>)}
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
                            <Button variant="outlined" className="customOutlinedButton" onClick={this.saveDocs}>Upload Documents</Button>
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
                                Files Uploaded successfully!!!
                            </Alert>
                        </Snackbar>
           </Box>
        )
    }
}

export class DegreeCmm extends Component{
    render(){
        return(
            <div>
                <h1>Consolidated Marks</h1>
            </div>
        )
    }
}