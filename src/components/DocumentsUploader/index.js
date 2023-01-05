/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import {Component} from 'react';
import {IconButton,Snackbar,Alert,Button} from '@mui/material';

import UploadFileIcon from '@mui/icons-material/UploadFile';
import "./index.css"

import LoadingView from '../loadingView'


// eslint-disable-next-line no-unused-vars
import Cookies from 'js-cookie';
import axios from 'axios';

class DocumentUploader extends Component{
        state={ y1memos:1,y2memos:1,y3memos:1,y4memos:1,
            y1Files:[],y2Files:[],y3Files:[],y4Files:[],
            backErr:false,
            backErrMsg:'',
            severity:'',
            isLoading:false,
            docsUploaded:false
        }

    componentDidMount(){
        this.getMarksDetails()

    }

// get students Marks memos
     getMarksDetails=async()=>{
        const {cmm}=this.props
        try{
        const token = Cookies.get("authToken")
        const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/get-cmm-details/`,
            method:"POST",
            headers:{
                 'Authorization': `Bearer ${token}`,
                 'Content-Type':'application/json'
            }
        }
            const response =await axios(options)
            if(cmm==1){
                this.setState({ y1memos:response.data.marks[0].length,
                                y2memos:response.data.marks[1].length,
                                y3memos:response.data.marks[2].length,
                                y4memos:response.data.marks[3].length
                            },this.fileIdGenerator)   
            }
            if(cmm==2){
                this.setState({ y1memos:response.data.marks[0].length,
                                y2memos:response.data.marks[1].length,
                                y3memos:response.data.marks[2].length,
                                y4memos:0
                            },this.fileIdGenerator)
            }
            if(cmm==3){
                this.setState({ y1memos:response.data.marks[0].length,
                                y2memos:response.data.marks[1].length,
                                y3memos:response.data.marks[2].length,
                                y4memos:response.data.marks[3].length
                            },this.fileIdGenerator)   
            }
            
        }catch(e){
            console.log(e)
        }

    }

// initial file id generator
    fileIdGenerator=()=>{
        const {y1memos,y2memos,y3memos,y4memos}=this.state
        let y1temp=[]
        let y2temp=[]
        let y3temp=[]
        let y4temp=[]
        for(let i=1;i<=y1memos;i++){
            y1temp.push({id:`y1-${i}`,file:null})
        }
        for(let i=1;i<=y2memos;i++){
            y2temp.push({id:`y2-${i}`,file:null})
        }
        for(let i=1;i<=y3memos;i++){
            y3temp.push({id:`y3-${i}`,file:null})
        }
        for(let i=1;i<=y4memos;i++){
            y4temp.push({id:`y4-${i}`,file:null})
        }
        this.setState({ y1Files:y1temp,
                        y2Files:y2temp,
                        y3Files:y3temp,
                        y4Files:y4temp,
                    })
    }

// for updating status in request form
    updateRequestFormStatus=()=>{
        const{statusUpdater}=this.props
        statusUpdater("docs")
    }

// for saving docs in state
    saveDocs=(event)=>{
        const {y1Files,y2Files,y3Files,y4Files}=this.state
       const id  = event.target.id.split("-")[0]
       switch(id){
        case "y1":
                const updatedY1=[]
                // eslint-disable-next-line eqeqeq, array-callback-return
                y1Files.map((each)=>{if(each.id==event.target.id){
                    updatedY1.push({id:event.target.id,file:event.target.files[0]})
                }else{
                    updatedY1.push(each)
                }})
                this.setState({y1Files:updatedY1})
                break;
        case "y2":
                const updatedY2=[]
                // eslint-disable-next-line eqeqeq, array-callback-return
                y2Files.map((each)=>{if(each.id==event.target.id){
                    updatedY2.push({id:event.target.id,file:event.target.files[0]})
                }else{
                    updatedY2.push(each)
                }})
                this.setState({y2Files:updatedY2})
                break;
        case "y3":
                const updatedY3=[]
                // eslint-disable-next-line eqeqeq, array-callback-return
                y3Files.map((each)=>{if(each.id==event.target.id){
                    updatedY3.push({id:event.target.id,file:event.target.files[0]})
                }else{
                    updatedY3.push(each)
                }})
                this.setState({y3Files:updatedY3})
                break;
        case "y4":
                const updatedY4=[]
                // eslint-disable-next-line eqeqeq, array-callback-return
                y4Files.map((each)=>{if(each.id==event.target.id){
                    updatedY4.push({id:event.target.id,file:event.target.files[0]})
                }else{
                    updatedY4.push(each)
                }})
                this.setState({y4Files:updatedY4})
                break;
        default:
            return null

       }

       
    } 

// for uploading memos
    uploadDocs= async()=>{
    const cmm=this.props
    this.setState({isLoading:true})
        try{
        const {y1Files,y2Files,y3Files,y4Files}=this.state
        const token = Cookies.get("authToken")
// Final files containers
        let y1FinalDocsList =[]
        let y2FinalDocsList =[]
        let y3FinalDocsList =[]
        let y4FinalDocsList =[]

// dumping into final files container
        y1Files.map((each)=>y1FinalDocsList.push(each.file))
        y2Files.map((each)=>y2FinalDocsList.push(each.file))
        y3Files.map((each)=>y3FinalDocsList.push(each.file))
        y4Files.map((each)=>y3FinalDocsList.push(each.file))

// creating form data
        const fd = new FormData()
        // eslint-disable-next-line eqeqeq
        if(cmm==2){
            y1FinalDocsList.map((each)=>fd.append('year_1',each))
            y2FinalDocsList.map((each)=>fd.append('year_2',each))
            y3FinalDocsList.map((each)=>fd.append('year_3',each))
        }else{
            y1FinalDocsList.map((each)=>fd.append('year_1',each))
            y2FinalDocsList.map((each)=>fd.append('year_2',each))
            y3FinalDocsList.map((each)=>fd.append('year_3',each))
            y4FinalDocsList.map((each)=>fd.append('year_4',each))
        }
        
        const options = {
            url:`${process.env.REACT_APP_BASEURL}file/od-upload/`,
            method: 'POST',
            headers: {   
            'Content-Type': 'multipart/form-data',
            'Authorization':`Bearer ${token}`
            },
          data: fd
        }
        const response = await axios(options)
        if(response.status===200){
            this.setState({backErr:true,severity:'success',backErrMsg:'Files Uploaded Successfully',isLoading:false,docsUploaded:true})
            setTimeout(() => {
                this.updateRequestFormStatus()
            }, 3000);
        }
        }catch(e){
            if(e.response.status===422){
                this.setState({backErr:true,severity:'error',backErrMsg:"Please Select all files and Submit",isLoading:false})
            }
            if(e.response.status===401){
                this.setState({backErr:true,severity:'error',backErrMsg:"Please Login again",isLoading:false})
            }
            else{
                this.setState({backErr:true,severity:'error',backErrMsg:e.message,isLoading:false})
            }
            console.log(e.response.status)
        }
    }

// snackbar handler
    handleClose=()=>{
        this.setState({backErr:false})
    }


    render(){
        const {y1Files,y2Files,y3Files,y4Files,y4memos,backErr,backErrMsg,isLoading,severity}=this.state
        return(
            <>
            <div className='filesContailner'>
                <h1 style={{textAlign:"center"}}>Upload documents</h1>
                <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
                    <div className='memosContainer'>
                        <h2 style={{margin:'10px 0 10px 0'}}>First year Docs</h2>
                        {y1Files.map((each)=><IconButton style={{width:"50%"}} color="primary" aria-label="upload picture" component="label">
                                            <input id={each.id} onChange={this.saveDocs} accept="image/*" hidden type="file" />
                                            <UploadFileIcon style={{fontSize:"60px"}}/>
                                            {each.file===null?<h4>Select file</h4>:<h4>{each.file.name}</h4>}
                                            </IconButton>)}
                    </div>
                    <div className='memosContainer'>
                        <h2 style={{margin:'10px 0 10px 0'}}>Second year Docs</h2>
                        {y2Files.map((each)=><IconButton style={{width:"50%"}} color="primary" aria-label="upload picture" component="label">
                                            <input id={each.id} onChange={this.saveDocs} accept="image/*" hidden type="file" />
                                            <UploadFileIcon style={{fontSize:"60px"}}/>
                                            {each.file===null?<h4>Select file</h4>:<h4>{each.file.name}</h4>}
                                            </IconButton>)}
                    </div>
                    <div className='memosContainer'>
                        <h2 style={{margin:'10px 0 10px 0'}}>Third year Docs</h2>
                        {y3Files.map((each)=><IconButton style={{width:"50%"}} color="primary" aria-label="upload picture" component="label">
                                            <input id={each.id} onChange={this.saveDocs} accept="image/*" hidden type="file" />
                                            <UploadFileIcon style={{fontSize:"60px"}}/>
                                            {each.file===null?<h4>Select file</h4>:<h4>{each.file.name}</h4>}
                                            </IconButton>)}
                    </div>
                   {y4memos>=1?<div className='memosContainer'>
                        <h2 style={{margin:'10px 0 10px 0'}}>Fourth year Docs</h2>
                        {y4Files.map((each)=><IconButton style={{width:"50%"}} color="primary" aria-label="upload picture" component="label">
                                            <input id={each.id} onChange={this.saveDocs} accept="image/*" hidden type="file" />
                                            <UploadFileIcon style={{fontSize:"60px"}}/>
                                            {each.file===null?<h4>Select file</h4>:<h4>{each.file.name}</h4>}
                                            </IconButton>)}
                    </div>:null}
                </div>
                <Button className="muiButton" style={{alignSelf:'center'}} variant='contained' onClick={this.uploadDocs}>Upload Files</Button>
            </div>
            <Snackbar open={backErr}
                        autoHideDuration={6000} 
                        onClose={this.handleClose} 
                        anchorOrigin={{vertical:"top",horizontal:"right"}} 
                        >
                    <Alert onClose={this.handleClose} severity={severity} sx={{ width: '100%' }}>
                    {backErrMsg}
                    </Alert>
            </Snackbar>
            <LoadingView isLoading={isLoading}/>
            </>
        )
    }
}

export default DocumentUploader