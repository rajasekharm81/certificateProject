"use strict";(self.webpackChunkodrequest=self.webpackChunkodrequest||[]).push([[129],{9129:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var s=a(4165),r=a(5861),n=a(5671),i=a(3144),o=a(136),c=a(7277),l=a(2791),d=a(1898),u=a(120),p=a(7265),h=a(2900),g=a(6321),x=a(5017),m=a(5596),f=a(9407),v=a(1647),k=a(1508),y=a(7205),Z=a(2388),b=a(8329),j=a(5627),w=a(184),C=function(e){(0,o.Z)(a,e);var t=(0,c.Z)(a);function a(){var e;(0,n.Z)(this,a);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isTatkal:0,name:"",courseCategory:"",studentName:"",degree:"",studentBranch:"",registrationNumber:"",examYear:"",feesDetails:{certificate_fee:0,processing_fee:0,total_payable:0},isLoading:!1,backErr:!1,backErrMsg:"test",severity:"error",feesDetailsRecieved:!1,Degrees:[],Branchs:[],confirmPayment:!1,paymentLink:""},e.getStudentData=(0,r.Z)((0,s.Z)().mark((function t(){var a,r,n,i,o;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),a=b.Z.get("authToken"),t.prev=2,r={url:"".concat("https://20.235.87.10/capis/","certificate/get-od-details/"),method:"GET",headers:{Authorization:"Bearer ".concat(a),Accept:"application/json"}},t.next=6,(0,Z.Z)(r);case 6:void 0!==(n=t.sent)&&(i=n.data.program_details,o=n.data.student_details,e.setState({courseCategory:i.is_ug,studentName:o.studentName,degree:i.prog_ID,studentBranch:i.studentBranch_id,registrationNumber:i.registrationNumber,examYear:i.examYear},e.getDistricts,e.getBranchs,e.getPrograms)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),401===t.t0.response.status?e.setState({backErr:!0,backErrMsg:"Invalid User... Please login to Continue",isLoading:!1}):e.setState({backErr:!0,backErrMsg:t.t0.message,isLoading:!1});case 13:case"end":return t.stop()}}),t,null,[[2,10]])}))),e.getPrograms=(0,r.Z)((0,s.Z)().mark((function t(){var a,r,n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),t.prev=1,a=b.Z.get("authToken"),r={url:"".concat("https://20.235.87.10/capis/","list/programs/"),method:"GET",headers:{Authorization:"Bearer ".concat(a)}},t.next=6,(0,Z.Z)(r);case 6:n=t.sent,e.setState({Degrees:n.data.data,isLoading:!1}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),401===t.t0.response.status?e.setState({backErr:!0,backErrMsg:"Invalid User... Please login to Continue",isLoading:!1}):e.setState({backErr:!0,backErrMsg:t.t0.message,isLoading:!1});case 13:case"end":return t.stop()}}),t,null,[[1,10]])}))),e.getBranchs=(0,r.Z)((0,s.Z)().mark((function t(){var a,r,n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),t.prev=1,a=b.Z.get("authToken"),r={url:"".concat("https://20.235.87.10/capis/","list/program-categories/"),method:"GET",headers:{Authorization:"Bearer ".concat(a)}},t.next=6,(0,Z.Z)(r);case 6:n=t.sent,e.setState({Branchs:n.data.data,isLoading:!1}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.setState({isLoading:!1});case 13:case"end":return t.stop()}}),t,null,[[1,10]])}))),e.isTatkal=function(t){e.setState({isTatkal:t.target.value,feesDetailsRecieved:!1})},e.updateCertificateId=function(t){e.setState({certificateId:t.target.value})},e.updateNoOfCopies=function(t){e.setState({copies:t.target.value})},e.GetFeeDetailsonClick=(0,r.Z)((0,s.Z)().mark((function t(){var a,r,n,i,o;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.isTatkal,e.setState({isLoading:!0}),r=b.Z.get("authToken"),t.prev=3,n={url:"".concat("https://20.235.87.10/capis/","certificate/get-fee-details/"),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",Authorization:"Bearer ".concat(r)},data:{is_tatkal:a,certificate_id:1,copies:1}},t.next=7,(0,Z.Z)(n);case 7:i=t.sent,o={certificate_fee:i.data.certificate_fee,processing_fee:i.data.processing_fee,total_payable:i.data.total_payable},e.setState({feesDetails:o,feesDetailsRecieved:!0,isLoading:!1}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),"Network Error"===t.t0.message&&e.setState({backErr:!0,backErrMsg:t.t0.message,isLoading:!1}),401===t.t0.response.status?(e.setState({backErr:!0,backErrMsg:"Invalid User... Please login to Continue",isLoading:!1}),setTimeout((function(){b.Z.remove("authToken"),window.location.replace("/student/signin")}),4e3)):e.setState({backErr:!0,backErrMsg:t.t0.message,isLoading:!1});case 16:case"end":return t.stop()}}),t,null,[[3,12]])}))),e.getFeeDetailsView=function(){var t=e.state,a=t.otherCertificates,s=t.isTatkal,r=t.studentName,n=t.registrationNumber,i=t.Degrees,o=t.degree,c=t.Branchs,l=t.studentBranch;return(0,w.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"20px 0 20px 0",padding:"20px",height:"auto",fontSize:"18px"},children:[(0,w.jsx)("h1",{style:{textAlign:"center",fontSize:"26px"},children:"Application Fee Process"}),(0,w.jsxs)("form",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[(0,w.jsxs)(d.Z,{disabled:a,onChange:e.isTatkal,style:{margin:"20px 0 10px 0"},children:[(0,w.jsx)(u.Z,{id:"demo-row-radio-buttons-group-label",children:"Application Category"}),(0,w.jsxs)(p.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",value:s,children:[(0,w.jsx)(h.Z,{value:0,control:(0,w.jsx)(g.Z,{}),label:"Normal"}),(0,w.jsx)(h.Z,{value:1,control:(0,w.jsx)(g.Z,{}),label:"Tatkal"})]})]}),(0,w.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around",width:"100%"},children:[(0,w.jsxs)("div",{style:{width:"48%",margin:"0"},children:[(0,w.jsx)("p",{children:"Name"}),(0,w.jsx)(x.Z,{disabled:!0,size:"small",id:"reg-student-name",style:{margin:"5px 0 0 0",width:"95%"},value:r})]}),(0,w.jsxs)("div",{style:{width:"48%"},children:[(0,w.jsx)("p",{children:"Registration Number"}),(0,w.jsx)(x.Z,{disabled:!0,size:"small",id:"reg-student-name",style:{margin:"5px 0 0 0",width:"95%"},value:n})]}),(0,w.jsxs)("div",{style:{width:"48%",margin:"10px 0 0 0"},children:[(0,w.jsx)("p",{children:"Course"}),(0,w.jsx)(d.Z,{style:{width:"95%",margin:"5px 0 0 0"},size:"small",children:(0,w.jsx)(m.Z,{disabled:!0,value:o,children:i.map((function(e){return(0,w.jsx)(f.Z,{value:e.program_id,children:e.program_name})}))})})]}),(0,w.jsxs)("div",{style:{width:"48%",margin:"10px 0 0 0"},children:[(0,w.jsx)("p",{children:"Branch"}),(0,w.jsx)(d.Z,{style:{width:"95%",margin:"5px 0 0 0"},size:"small",children:(0,w.jsx)(m.Z,{disabled:!0,value:l,children:c.map((function(e){return(0,w.jsx)(f.Z,{value:e.program_category_id,children:e.name})}))})})]}),(0,w.jsxs)("div",{style:{width:"100%",margin:"10px"},children:[(0,w.jsx)("p",{children:"Applying For"}),(0,w.jsx)(x.Z,{disabled:!0,size:"small",id:"reg-student-name",style:{margin:"5px 0 0 0",width:"98%"},value:"ORIGINAL DEGREE CERTIFICATE"})]})]})]}),e.feeDetailsView()]})},e.feeDetailsView=function(){var t=e.state.feesDetails;return(0,w.jsxs)("div",{style:{margin:"20px 0 20px 0",padding:"20px"},children:[(0,w.jsxs)("h1",{style:{fontSize:"28px"},children:["Certificate Fees\u2003\xa0:\xa0",t.certificate_fee]}),(0,w.jsxs)("h1",{style:{fontSize:"28px",marginBottom:"30px"},children:["Processing Fees\u2003:\xa0",t.processing_fee]}),(0,w.jsx)("hr",{}),(0,w.jsxs)("h1",{style:{fontSize:"28px"},children:["Total Payable \u2003\xa0\xa0\xa0:\xa0",t.total_payable]})]})},e.handleClose=function(){e.setState({backErr:!1})},e.payment=(0,r.Z)((0,s.Z)().mark((function t(){var a,r,n,i;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.isTatkal,e.setState({isLoading:!0}),r=b.Z.get("authToken"),t.prev=3,n={url:"".concat("https://20.235.87.10/capis/","certificate/apply-certificate/"),method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8",Authorization:"Bearer ".concat(r)},data:{is_tatkal:a,certificate_id:1,copies:1}},t.next=7,(0,Z.Z)(n);case 7:200===(i=t.sent).status&&e.setState({confirmPayment:!0,isLoading:!1,paymentLink:i.data.payment_link}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),401===t.t0.response.status?e.setState({backErr:!0,backErrMsg:"Invalid User... Please login to Continue",isLoading:!1}):e.setState({backErr:!0,backErrMsg:t.t0.message,isLoading:!1});case 14:case"end":return t.stop()}}),t,null,[[3,11]])}))),e}return(0,i.Z)(a,[{key:"componentDidMount",value:function(){this.getStudentData(),this.getPrograms(),this.getBranchs()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.backErr,s=e.backErrMsg,r=e.severity,n=e.feesDetailsRecieved,i=e.confirmPayment,o=e.paymentLink;return(0,w.jsxs)(w.Fragment,{children:[i&&window.location.replace("".concat(o)),(0,w.jsx)(j.Z,{isLoading:t}),(0,w.jsx)(v.Z,{open:a,autoHideDuration:3e3,onClose:this.handleClose,anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,w.jsx)(k.Z,{onClose:this.handleClose,severity:r,sx:{width:"100%"},children:s})}),(0,w.jsx)("div",{className:"PaymentsMain",children:(0,w.jsxs)("div",{className:"paymentContainer",children:[this.getFeeDetailsView(),n?(0,w.jsx)(y.Z,{onClick:this.payment,variant:"contained",children:"Pay Now"}):(0,w.jsx)(y.Z,{onClick:this.GetFeeDetailsonClick,variant:"contained",children:"Get Fees details"})]})})]})}}]),a}(l.Component),S=C},5627:function(e,t,a){var s=a(5671),r=a(3144),n=a(136),i=a(7277),o=a(2791),c=a(5112),l=a(6580),d=a(184),u=function(e){(0,n.Z)(a,e);var t=(0,i.Z)(a);function a(){return(0,s.Z)(this,a),t.apply(this,arguments)}return(0,r.Z)(a,[{key:"render",value:function(){var e=this.props.isLoading;return(0,d.jsx)(c.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:e,children:(0,d.jsx)(l.Z,{color:"inherit"})})}}]),a}(o.Component);t.Z=u}}]);
//# sourceMappingURL=129.a548a503.chunk.js.map