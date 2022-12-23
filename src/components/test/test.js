import {Component} from 'react'
import {Button,Snackbar,Alert} from '@mui/material';
import "./test.css"

import LoadingView from '../loadingView';

import Cookies from 'js-cookie';
import axios from 'axios';



const tableHeadings = ["Month & Year",1,2,3,4,5,6,7,8,9,'I',"II",'III','IV','V','VI','Sessionals',"Total Marks", "Max Marks"]
const CmmType1yearBtnData = [{id:1,year:"First Year"},{id:2,year:"Second Year"},{id:3,year:"Third Year"},{id:4,year:"Fourth Year"},]

const DegreeTableHeadings =["Month & Year","1",'2','3','4','5','6','7','8','9','10','11','12','13']
const thirdDegreeTableHeadings =["Month & Year",'W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','W*','p*','Total']
const CmmType2yearBtnData = [{id:1,year:"First Year"},{id:2,year:"Second Year"},{id:3,year:"Third Year"}]


const PgEduAndLawTableHeadings = ["Month & Year","P-1","P-2","P-3","P-4",'P-5','P-6','P-7','P-8','P-9','Pr-1','Pr-2','Pr-3','Pr-4',"Proj/ Viva","Total"]
const PgEduAndLawBettermentTableHeadings = ["Month & Year","P-1","P-2","P-3","P-4",'P-5','P-6','P-7','P-8','P-9',"Total"]                      


export class CmmType1 extends Component{
    state={y1:[],
            y2:[],
            y3:[],
            y4:[],
            yearDisplay:1,
            isLoading:false,
            backErr:false,
            backErrMsg:'',
            severity:''
        }

    componentDidMount(){
        this.FirstYearInitialMemos()
        this.SecondYearInitialMemos()
        this.ThirdYearInitialMemos()
        this.FourthYearInitialMemos()
        this.getMarksDetails()
    }

    getMarksDetails=async()=>{
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
            console.log(response)
        }catch(e){
            console.log(e)
        }

    }

     yearBtnData=()=>{
        const {yearDisplay}=this.state
        return(
            <div style={{width:'100%',justifyContent:'space-around',display:'flex'}}>
                 {/* eslint-disable-next-line eqeqeq */}
                {CmmType1yearBtnData.map((each)=><Button color={each.id==yearDisplay?"secondary":"primary"} variant='contained' id={each.id} onClick={(event)=>this.setState({yearDisplay:Number(event.target.id)})}>{each.year}</Button>)}
            </div>
        )
    }

    // save and submit buttons

    saveAndSubmitBtnComponent=()=>{
        return(
            <div style={{display:'flex', justifyContent:'space-around',width:'100%'}}>
                <Button onClick={this.uploadData}>Save Data</Button>
                <Button>Completed</Button>
            </div>
        )
    }


// data uploading function

    uploadData=async()=>{
        this.setState({isLoading:true})
    try{
        const {y1,y2,y3,y4}=this.state
        const token = Cookies.get("authToken")
        const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/cmm-application/`,
            method:"POST",
            headers:{
                 'Authorization': `Bearer ${token}`,
                 'Content-Type':'application/json'
            },
            data:{"marks":[y1,y2,y3,y4]}
        }
        // console.log(options.data)
        const response =await axios(options)
        if(response.status===200){
            this.setState({backErr:true,severity:'success',backErrMsg:'Data Uploaded Successfully',isLoading:false})
        }
    }catch(e){
        this.setState({backErr:true,severity:'error',backErrMsg:e.message,isLoading:false})
    }
}



// first year initial data

    FirstYearInitialMemos=()=>{
        const {y1}=this.state
        const newRow = []
        for(let i=0;i<=18;i++){
            newRow.push({id:`y1-${y1.length}-${i}`,value:''})
        }
        this.setState({y1:[{rowId:`y1-${y1.length}`,marks:newRow}]})
    }

    addRowInFirstYearMarks=()=>{
        const {y1}=this.state
        const newRow = []
        for(let i=0;i<=18;i++){
            newRow.push({id:`y1-${y1.length}-${i}`,value:''})
        }
        this.setState({y1:[...y1,{rowId:`y1-${y1.length}`,marks:newRow}]})
    }
// Second year initial data

    SecondYearInitialMemos=()=>{
        const {y2}=this.state
        const newRow = []
        for(let i=0;i<=18;i++){
            newRow.push({id:`y2-${y2.length}-${i}`,value:''})
        }
        this.setState({y2:[{rowId:`y2-${y2.length}`,marks:newRow}]})
    }

    addRowInSecondYearMarks=()=>{
        const {y2}=this.state
        const newRow = []
        for(let i=0;i<=18;i++){
            newRow.push({id:`y2-${y2.length}-${i}`,value:''})
        }
        this.setState({y2:[...y2,{rowId:`y2-${y2.length}`,marks:newRow}]})
    }


// third year initial data

    ThirdYearInitialMemos=()=>{
        const {y3}=this.state
        const newRow = []
        for(let i=0;i<=18;i++){
            newRow.push({id:`y3-${y3.length}-${i}`,value:''})
        }
        this.setState({y3:[{rowId:`y3-${y3.length}`,marks:newRow}]})
    }

    addRowInThirdYearMarks=()=>{
        const {y3}=this.state
        const newRow = []
        for(let i=0;i<=18;i++){
            newRow.push({id:`y3-${y3.length}-${i}`,value:''})
        }
        this.setState({y3:[...y3,{rowId:`y3-${y3.length}`,marks:newRow}]})
    }
// fourth year initial data

    FourthYearInitialMemos=()=>{
        const {y4}=this.state
        const newRow = []
        for(let i=0;i<=18;i++){
            newRow.push({id:`y4-${y4.length}-${i}`,value:''})
        }
        this.setState({y4:[{rowId:`y4-${y4.length}`,marks:newRow}]})
    }

    addRowInFourthYearMarks=()=>{
        const {y4}=this.state
        const newRow = []
        for(let i=0;i<=18;i++){
            newRow.push({id:`y4-${y4.length}-${i}`,value:''})
        }
        this.setState({y4:[...y4,{rowId:`y4-${y4.length}`,marks:newRow}]})
    }

// marks updating function into state

    updateMarks=(event)=>{
    const{y1,y2,y3,y4}=this.state
      const baseId=  event.target.id.split("-")
      switch(baseId[0]){
        case "y1":
            const updatedy1=[]
            // eslint-disable-next-line array-callback-return
            y1.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index==baseId[1]){
                    let tempMarks = []
                    const changedFiled = y1[index].marks
                        // eslint-disable-next-line array-callback-return
                        changedFiled.map((each)=>{
                            let i={}
                            if(each.id===event.target.id){
                                i={id:event.target.id,value:event.target.value}
                                tempMarks.push(i)
                            }else{
                                tempMarks.push(each)
                            }
                        })
                    updatedy1.push({rowId:`y1-${baseId[1]}`,marks:tempMarks})
                }else{
                    updatedy1.push(each)
                }
                this.setState({y1:updatedy1})
      })
      break;
        case "y2":
            const updatedy2=[]
            // eslint-disable-next-line array-callback-return
            y2.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index==baseId[1]){
                    let tempMarks = []
                    const changedFiled = y2[index].marks
                        // eslint-disable-next-line array-callback-return
                        changedFiled.map((each)=>{
                            let i={}
                            if(each.id===event.target.id){
                                i={id:event.target.id,value:event.target.value}
                                tempMarks.push(i)
                            }else{
                                tempMarks.push(each)
                            }
                        })
                    updatedy2.push({rowId:`y2-${baseId[1]}`,marks:tempMarks})
                }else{
                    updatedy2.push(each)
                }
                this.setState({y2:updatedy2})
      })
      break;
        case "y3":
            const updatedy3=[]
            // eslint-disable-next-line array-callback-return
            y3.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index==baseId[1]){
                    let tempMarks = []
                    const changedFiled = y3[index].marks
                        // eslint-disable-next-line array-callback-return
                        changedFiled.map((each)=>{
                            let i={}
                            if(each.id===event.target.id){
                                i={id:event.target.id,value:event.target.value}
                                tempMarks.push(i)
                            }else{
                                tempMarks.push(each)
                            }
                        })
                    updatedy3.push({rowId:`y3-${baseId[1]}`,marks:tempMarks})
                }else{
                    updatedy3.push(each)
                }
                this.setState({y3:updatedy3})
      })
      break;
        case "y4":
            const updatedy4=[]
            // eslint-disable-next-line array-callback-return
            y4.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index==baseId[1]){
                    let tempMarks = []
                    const changedFiled = y4[index].marks
                        // eslint-disable-next-line array-callback-return
                        changedFiled.map((each)=>{
                            let i={}
                            if(each.id===event.target.id){
                                i={id:event.target.id,value:event.target.value}
                                tempMarks.push(i)
                            }else{
                                tempMarks.push(each)
                            }
                        })
                    updatedy4.push({rowId:`y4-${baseId[1]}`,marks:tempMarks})
                }else{
                    updatedy4.push(each)
                }
                this.setState({y4:updatedy4})
      })
      break;
      default: 
            return null
      }
    }

// Forms

    firstYearMarksForm=()=>{
        const {y1}=this.state
        return(
            <div className='mainContainer'>
                <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
                <div className='marksContainer'>
    {/* First Year Marks section */}
                    {this.yearBtnData()}
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
                                {y1.map((each)=><tr>{each.marks.map((m,index)=><td><input id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
            
                            <button onClick={this.addRowInFirstYearMarks}>Add row</button>
                        </table>
                    {this.saveAndSubmitBtnComponent()}
                </div>
            </div>
            )
    }

    SecondYearMarksForm=()=>{
        const {y2}=this.state
        return(
            <div className='mainContainer'>
                <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
                <div className='marksContainer'>
    {/* second Year Marks section */}
                    {this.yearBtnData()}
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
                                {y2.map((each)=><tr>{each.marks.map((m,index)=><td><input id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                            <button onClick={this.addRowInSecondYearMarks}>Add row</button>
                        </table>
                        {this.saveAndSubmitBtnComponent()}
                </div>
            </div>
            )
    }

    ThirdYearMarksForm=()=>{
        const {y3}=this.state
        return(
            <div className='mainContainer'>
                <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
                <div className='marksContainer'>
    {/* Third Year Marks section */}
                    {this.yearBtnData()}
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
                                {y3.map((each)=><tr>{each.marks.map((m,index)=><td><input id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
            
                            <button onClick={this.addRowInThirdYearMarks}>Addrow</button>
                        </table>
                        {this.saveAndSubmitBtnComponent()}
                </div>
            </div>
            )
    }

    FourthYearMarksForm=()=>{
        const {y4}=this.state
        return(
            <div className='mainContainer'>
                <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
                <div className='marksContainer'>
    {/* Third Year Marks section */}
                    {this.yearBtnData()}
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
                                {y4.map((each)=><tr>{each.marks.map((m,index)=><td><input id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
            
                            <button onClick={this.addRowInFourthYearMarks}>Addrow</button>
                        </table>
                        {this.saveAndSubmitBtnComponent()}
                </div>
            </div>
            )
    }

// render function
    screenDisplayer=()=>{
        const {yearDisplay}=this.state
        switch(yearDisplay){
            case 1:
                return this.firstYearMarksForm()
            case 2:
                return this.SecondYearMarksForm() 
            case 3:
                return this.ThirdYearMarksForm()
            case 4:
                return this.FourthYearMarksForm()
            default:
                return null
        }
    }

    handleClose=()=>{
        this.setState({backErr:false})
    }

    render(){    
        const{isLoading,backErr,backErrMsg,severity}=this.state
            return(
                <>
                    {this.screenDisplayer()}
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


export class CmmType2 extends Component{
    state={y1:[],
            y2:[],
            y3:[],
            yearDisplay:1,
            isLoading:false,
            backErr:false,
            backErrMsg:'',
            severity:''
        }

    componentDidMount(){
        this.FirstYearInitialMemos()
        this.SecondYearInitialMemos()
        this.ThirdYearInitialMemos()
    }

     yearBtnData=()=>{
        const {yearDisplay}=this.state
        return(
            <div style={{width:'100%',justifyContent:'space-around',display:'flex'}}>
                 {/* eslint-disable-next-line eqeqeq */}
                {CmmType2yearBtnData.map((each)=><Button color={each.id==yearDisplay?"secondary":"primary"} variant='contained' id={each.id} onClick={(event)=>this.setState({yearDisplay:Number(event.target.id)})}>{each.year}</Button>)}
            </div>
        )
    }

    // save and submit buttons

    saveAndSubmitBtnComponent=()=>{
        return(
            <div style={{display:'flex', justifyContent:'space-around',width:'100%'}}>
                <Button onClick={this.uploadData}>Save Data</Button>
                <Button>Completed</Button>
            </div>
        )
    }


// data uploading function

    uploadData=()=>{
        this.setState({isLoading:true})
    try{
        const {y1,y2,y3}=this.state
        const token = Cookies.get("authToken")
        const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/cmm-application/`,
            method:"POST",
            headers:{
                 'Authorization': `Bearer ${token}`,
                 'Content-Type':'application/json'
            },
            data:{"marks":[y1,y2,y3]}
        }
        const response = axios(options)
        if(response.status===200){
            this.setState({backErr:true,severity:'success',backErrMsg:'Data Uploaded Successfully',isLoading:false})
        }
    }catch(e){
        this.setState({backErr:true,severity:'error',backErrMsg:e.message,isLoading:false})
    }
}



// first year initial data

    FirstYearInitialMemos=()=>{
        const {y1}=this.state
        const newRow = []
        for(let i=0;i<=13;i++){
            newRow.push({id:`y1-${y1.length}-${i}`,value:''})
        }
        this.setState({y1:[{rowId:`y1-${y1.length}`,marks:newRow}]})
    }

    addRowInFirstYearMarks=()=>{
        const {y1}=this.state
        const newRow = []
        for(let i=0;i<=13;i++){
            newRow.push({id:`y1-${y1.length}-${i}`,value:''})
        }
        this.setState({y1:[...y1,{rowId:`y1-${y1.length}`,marks:newRow}]})
    }
// Second year initial data

    SecondYearInitialMemos=()=>{
        const {y2}=this.state
        const newRow = []
        for(let i=0;i<=13;i++){
            newRow.push({id:`y2-${y2.length}-${i}`,value:''})
        }
        this.setState({y2:[{rowId:`y2-${y2.length}`,marks:newRow}]})
    }

    addRowInSecondYearMarks=()=>{
        const {y2}=this.state
        const newRow = []
        for(let i=0;i<=13;i++){
            newRow.push({id:`y2-${y2.length}-${i}`,value:''})
        }
        this.setState({y2:[...y2,{rowId:`y2-${y2.length}`,marks:newRow}]})
    }


// third year initial data

    ThirdYearInitialMemos=()=>{
        const {y3}=this.state
        const newRow = []
        for(let i=0;i<=15;i++){
            newRow.push({id:`y3-${y3.length}-${i}`,value:''})
        }
        this.setState({y3:[{rowId:`y3-${y3.length}`,marks:newRow}]})
    }

    addRowInThirdYearMarks=()=>{
        const {y3}=this.state
        const newRow = []
        for(let i=0;i<=15;i++){
            newRow.push({id:`y3-${y3.length}-${i}`,value:''})
        }
        this.setState({y3:[...y3,{rowId:`y3-${y3.length}`,marks:newRow}]})
    }

// marks updating function into state

    updateMarks=(event)=>{
    const{y1,y2,y3}=this.state
      const baseId=  event.target.id.split("-")
      switch(baseId[0]){
        case "y1":
            const updatedy1=[]
            // eslint-disable-next-line array-callback-return
            y1.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index==baseId[1]){
                    let tempMarks = []
                    const changedFiled = y1[index].marks
                        // eslint-disable-next-line array-callback-return
                        changedFiled.map((each)=>{
                            let i={}
                            if(each.id===event.target.id){
                                i={id:event.target.id,value:event.target.value}
                                tempMarks.push(i)
                            }else{
                                tempMarks.push(each)
                            }
                        })
                    updatedy1.push({rowId:`y1-${baseId[1]}`,marks:tempMarks})
                }else{
                    updatedy1.push(each)
                }
                this.setState({y1:updatedy1})
      })
      break;
        case "y2":
            const updatedy2=[]
            // eslint-disable-next-line array-callback-return
            y2.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index==baseId[1]){
                    let tempMarks = []
                    const changedFiled = y2[index].marks
                        // eslint-disable-next-line array-callback-return
                        changedFiled.map((each)=>{
                            let i={}
                            if(each.id===event.target.id){
                                i={id:event.target.id,value:event.target.value}
                                tempMarks.push(i)
                            }else{
                                tempMarks.push(each)
                            }
                        })
                    updatedy2.push({rowId:`y2-${baseId[1]}`,marks:tempMarks})
                }else{
                    updatedy2.push(each)
                }
                this.setState({y2:updatedy2})
      })
      break;
        case "y3":
            const updatedy3=[]
            // eslint-disable-next-line array-callback-return
            y3.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index==baseId[1]){
                    let tempMarks = []
                    const changedFiled = y3[index].marks
                        // eslint-disable-next-line array-callback-return
                        changedFiled.map((each)=>{
                            let i={}
                            if(each.id===event.target.id){
                                i={id:event.target.id,value:event.target.value}
                                tempMarks.push(i)
                            }else{
                                tempMarks.push(each)
                            }
                        })
                    updatedy3.push({rowId:`y3-${baseId[1]}`,marks:tempMarks})
                }else{
                    updatedy3.push(each)
                }
                this.setState({y3:updatedy3})
      })
      break;
        default: 
            return null
      }
    }

// Forms

    firstYearMarksForm=()=>{
        const {y1}=this.state
        return(
            <div className='mainContainer'>
                <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
                <div className='marksContainer'>
    {/* First Year Marks section */}
                    {this.yearBtnData()}
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
                                {y1.map((each)=><tr>{each.marks.map((m,index)=><td><input id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
            
                            <button onClick={this.addRowInFirstYearMarks}>Add row</button>
                        </table>
                    {this.saveAndSubmitBtnComponent()}
                </div>
            </div>
            )
    }

    SecondYearMarksForm=()=>{
        const {y2}=this.state
        return(
            <div className='mainContainer'>
                <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
                <div className='marksContainer' >
    {/* second Year Marks section */}
                    {this.yearBtnData()}
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
                                {y2.map((each)=><tr>{each.marks.map((m,index)=><td><input id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                            <button onClick={this.addRowInSecondYearMarks}>Add row</button>
                        </table>
                        {this.saveAndSubmitBtnComponent()}
                </div>
            </div>
            )
    }

    ThirdYearMarksForm=()=>{
        const {y3}=this.state
        return(
            <div className='mainContainer'>
                <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
                <div className='marksContainer'>
    {/* Third Year Marks section */}
                    {this.yearBtnData()}
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
                                {y3.map((each)=><tr>{each.marks.map((m,index)=><td><input id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
            
                            <button onClick={this.addRowInThirdYearMarks}>Addrow</button>
                        </table>
                        {this.saveAndSubmitBtnComponent()}
                </div>
            </div>
            )
    }

// render function
    screenDisplayer=()=>{
        const {yearDisplay}=this.state
        switch(yearDisplay){
            case 1:
                return this.firstYearMarksForm()
            case 2:
                return this.SecondYearMarksForm() 
            case 3:
                return this.ThirdYearMarksForm()
            default:
                return null
        }
    }

    render(){
         const{isLoading,backErr,backErrMsg,severity}=this.state    
            return(
                <>
                    {this.screenDisplayer()}
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


export class CmmType3 extends Component{
    state={y1:[],
            y2:[],
            y3:[],
            y4:[],
            yearDisplay:1,
            isLoading:false,
            backErr:false,
            backErrMsg:'',
            severity:''
        }

    componentDidMount(){
        this.FirstYearInitialMemos()
        this.SecondYearInitialMemos()
        this.ThirdYearInitialMemos()
        this.FourthYearInitialMemos()
    }

     yearBtnData=()=>{
        const {yearDisplay}=this.state
        return(
            <div style={{width:'100%',justifyContent:'space-around',display:'flex'}}>
                 {/* eslint-disable-next-line eqeqeq */}
                {CmmType1yearBtnData.map((each)=><Button color={each.id==yearDisplay?"secondary":"primary"} variant='contained' id={each.id} onClick={(event)=>this.setState({yearDisplay:Number(event.target.id)})}>{each.year}</Button>)}
            </div>
        )
    }

    // save and submit buttons

    saveAndSubmitBtnComponent=()=>{
        return(
            <div style={{display:'flex', justifyContent:'space-around',width:'100%'}}>
                <Button onClick={this.uploadData}>Save Data</Button>
                <Button>Completed</Button>
            </div>
        )
    }


// data uploading function

    uploadData=()=>{
        this.setState({isLoading:true})
    try{
        const {y1,y2,y3,y4}=this.state
        const token = Cookies.get("authToken")
        const options = {
            url:`${process.env.REACT_APP_BASEURL}certificate/cmm-application/`,
            method:"POST",
            headers:{
                 'Authorization': `Bearer ${token}`,
                 'Content-Type':'application/json'
            },
            data:{"marks":[y1,y2,y3,y4]}
        }
        const response = axios(options)
        if(response.status===200){
            this.setState({backErr:true,severity:'success',backErrMsg:'Data Uploaded Successfully',isLoading:false})
        }
    }catch(e){
        this.setState({backErr:true,severity:'error',backErrMsg:e.message,isLoading:false})
    }
}



// first year initial data

    FirstYearInitialMemos=()=>{
        const {y1}=this.state
        const newRow = []
        for(let i=0;i<=15;i++){
            newRow.push({id:`y1-${y1.length}-${i}`,value:''})
        }
        this.setState({y1:[{rowId:`y1-${y1.length}`,marks:newRow}]})
    }

    addRowInFirstYearMarks=()=>{
        const {y1}=this.state
        const newRow = []
        for(let i=0;i<=15;i++){
            newRow.push({id:`y1-${y1.length}-${i}`,value:''})
        }
        this.setState({y1:[...y1,{rowId:`y1-${y1.length}`,marks:newRow}]})
    }
// Second year initial data

    SecondYearInitialMemos=()=>{
        const {y2}=this.state
        const newRow = []
        for(let i=0;i<=15;i++){
            newRow.push({id:`y2-${y2.length}-${i}`,value:''})
        }
        this.setState({y2:[{rowId:`y2-${y2.length}`,marks:newRow}]})
    }

    addRowInSecondYearMarks=()=>{
        const {y2}=this.state
        const newRow = []
        for(let i=0;i<=15;i++){
            newRow.push({id:`y2-${y2.length}-${i}`,value:''})
        }
        this.setState({y2:[...y2,{rowId:`y2-${y2.length}`,marks:newRow}]})
    }


// third year initial data

    ThirdYearInitialMemos=()=>{
        const {y3}=this.state
        const newRow = []
        for(let i=0;i<=15;i++){
            newRow.push({id:`y3-${y3.length}-${i}`,value:''})
        }
        this.setState({y3:[{rowId:`y3-${y3.length}`,marks:newRow}]})
    }

    addRowInThirdYearMarks=()=>{
        const {y3}=this.state
        const newRow = []
        for(let i=0;i<=15;i++){
            newRow.push({id:`y3-${y3.length}-${i}`,value:''})
        }
        this.setState({y3:[...y3,{rowId:`y3-${y3.length}`,marks:newRow}]})
    }
// fourth year initial data

    FourthYearInitialMemos=()=>{
        const {y4}=this.state
        const newRow = []
        for(let i=0;i<=10;i++){
            newRow.push({id:`y4-${y4.length}-${i}`,value:''})
        }
        this.setState({y4:[{rowId:`y4-${y4.length}`,marks:newRow}]})
    }

    addRowInFourthYearMarks=()=>{
        const {y4}=this.state
        const newRow = []
        for(let i=0;i<=10;i++){
            newRow.push({id:`y4-${y4.length}-${i}`,value:''})
        }
        this.setState({y4:[...y4,{rowId:`y4-${y4.length}`,marks:newRow}]})
    }

// marks updating function into state

    updateMarks=(event)=>{
    const{y1,y2,y3,y4}=this.state
      const baseId=  event.target.id.split("-")
      switch(baseId[0]){
        case "y1":
            const updatedy1=[]
            // eslint-disable-next-line array-callback-return
            y1.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index==baseId[1]){
                    let tempMarks = []
                    const changedFiled = y1[index].marks
                        // eslint-disable-next-line array-callback-return
                        changedFiled.map((each)=>{
                            let i={}
                            if(each.id===event.target.id){
                                i={id:event.target.id,value:event.target.value}
                                tempMarks.push(i)
                            }else{
                                tempMarks.push(each)
                            }
                        })
                    updatedy1.push({rowId:`y1-${baseId[1]}`,marks:tempMarks})
                }else{
                    updatedy1.push(each)
                }
                this.setState({y1:updatedy1})
      })
      break;
        case "y2":
            const updatedy2=[]
            // eslint-disable-next-line array-callback-return
            y2.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index==baseId[1]){
                    let tempMarks = []
                    const changedFiled = y2[index].marks
                        // eslint-disable-next-line array-callback-return
                        changedFiled.map((each)=>{
                            let i={}
                            if(each.id===event.target.id){
                                i={id:event.target.id,value:event.target.value}
                                tempMarks.push(i)
                            }else{
                                tempMarks.push(each)
                            }
                        })
                    updatedy2.push({rowId:`y2-${baseId[1]}`,marks:tempMarks})
                }else{
                    updatedy2.push(each)
                }
                this.setState({y2:updatedy2})
      })
      break;
        case "y3":
            const updatedy3=[]
            // eslint-disable-next-line array-callback-return
            y3.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index==baseId[1]){
                    let tempMarks = []
                    const changedFiled = y3[index].marks
                        // eslint-disable-next-line array-callback-return
                        changedFiled.map((each)=>{
                            let i={}
                            if(each.id===event.target.id){
                                i={id:event.target.id,value:event.target.value}
                                tempMarks.push(i)
                            }else{
                                tempMarks.push(each)
                            }
                        })
                    updatedy3.push({rowId:`y3-${baseId[1]}`,marks:tempMarks})
                }else{
                    updatedy3.push(each)
                }
                this.setState({y3:updatedy3})
      })
      break;
        case "y4":
            const updatedy4=[]
            // eslint-disable-next-line array-callback-return
            y4.map((each,index)=>{
                // eslint-disable-next-line eqeqeq
                if(index==baseId[1]){
                    let tempMarks = []
                    const changedFiled = y4[index].marks
                        // eslint-disable-next-line array-callback-return
                        changedFiled.map((each)=>{
                            let i={}
                            if(each.id===event.target.id){
                                i={id:event.target.id,value:event.target.value}
                                tempMarks.push(i)
                            }else{
                                tempMarks.push(each)
                            }
                        })
                    updatedy4.push({rowId:`y4-${baseId[1]}`,marks:tempMarks})
                }else{
                    updatedy4.push(each)
                }
                this.setState({y4:updatedy4})
      })
      break;
      default: 
            return null
      }
    }

// Forms

    firstYearMarksForm=()=>{
        const {y1}=this.state
        return(
            <div className='mainContainer'>
                <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
                <div className='marksContainer'>
    {/* First Year Marks section */}
                    {this.yearBtnData()}
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
                                {y1.map((each)=><tr>{each.marks.map((m,index)=><td><input id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
            
                            <button onClick={this.addRowInFirstYearMarks}>Add row</button>
                        </table>
                    {this.saveAndSubmitBtnComponent()}
                </div>
            </div>
            )
    }

    SecondYearMarksForm=()=>{
        const {y2}=this.state
        return(
            <div className='mainContainer'>
                <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
                <div className='marksContainer'>
    {/* second Year Marks section */}
                    {this.yearBtnData()}
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
                                {y2.map((each)=><tr>{each.marks.map((m,index)=><td><input id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
                            <button onClick={this.addRowInSecondYearMarks}>Add row</button>
                        </table>
                        {this.saveAndSubmitBtnComponent()}
                </div>
            </div>
            )
    }

    ThirdYearMarksForm=()=>{
        const {y3}=this.state
        return(
            <div className='mainContainer'>
                <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
                <div className='marksContainer'>
    {/* Third Year Marks section */}
                    {this.yearBtnData()}
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
                                {y3.map((each)=><tr>{each.marks.map((m,index)=><td><input id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
            
                            <button onClick={this.addRowInThirdYearMarks}>Addrow</button>
                        </table>
                        {this.saveAndSubmitBtnComponent()}
                </div>
            </div>
            )
    }

    FourthYearMarksForm=()=>{
        const {y4}=this.state
        return(
            <div className='mainContainer'>
                <h1 style={{alignSelf:"center"}}>Consolidated Marks</h1>
                <div className='marksContainer'>
    {/* Fourth Year Marks section */}
                    {this.yearBtnData()}
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
                                {y4.map((each)=><tr>{each.marks.map((m,index)=><td><input id={m.id} onChange={this.updateMarks} type={index==0?"month":"number"} className='cell' style={index=="0"? {width:"150px",border:"1px solid silver",backgroundColor:"white",padding:"2px"}:{width:"53px",backgroundColor:"white",border:"1px solid silver",padding:"2px"}} value={m.value}/></td>)}</tr>)}
            
                            <button onClick={this.addRowInFourthYearMarks}>Addrow</button>
                        </table>
                        {this.saveAndSubmitBtnComponent()}
                </div>
            </div>
            )
    }

// render function
    screenDisplayer=()=>{
        const {yearDisplay}=this.state
        switch(yearDisplay){
            case 1:
                return this.firstYearMarksForm()
            case 2:
                return this.SecondYearMarksForm() 
            case 3:
                return this.ThirdYearMarksForm()
            case 4:
                return this.FourthYearMarksForm()
            default:
                return null
        }
    }

    render(){ 
        const{isLoading,backErr,backErrMsg,severity}=this.state       
            return(
                <>
                    {this.screenDisplayer()}
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
