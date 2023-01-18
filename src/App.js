
import { Component,Suspense, lazy } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { InfinitySpin } from  'react-loader-spinner'

// import Payment from './components/Payments';
// import CeritificateRequest from './components/CertificateRequest'

const SigninForm = lazy(() => import('./components/signInPage'));
const LandingPage = lazy(() => import('./components/LandingPage'));
const Odrequest = lazy(() => import('./components/Requestform'));
const Notfound = lazy(() => import("./components/notFound"));
const VerificationDashBoard = lazy(() => import("./components/verificationView"));
const StudendDashBoard = lazy(() => import("./components/studentDashBoard"));
const SignUpFrom = lazy(() => import("./components/SignupPage"));
const Payment = lazy(() => import("./components/Payments"));
const ForgotPassword = lazy(() => import('./components/forgetPassword'));
const EmployeeSigninForm = lazy(() => import("./components/employeeLogin"));
const ChangePassword = lazy(()=>import ("./components/changePassword"))




class App extends Component {

  componentDidMount() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  };
  
render(){
  return (
   <BrowserRouter>
    <Suspense fallback={<div className='fallbackContainer'><InfinitySpin visible={true}
            width='200'
            color="#4fffff"
            /></div>}>
       <Routes>
         <Route exact path="/" element={<LandingPage/>}/>
         <Route exact path="/student_dash_board" element={<StudendDashBoard/>}/>
         <Route exact path="/student/signin" element={<SigninForm/>}/>
         <Route exact path="/student/signup" element={<SignUpFrom/>}/>
         <Route exact path="/requests/odrequest" element={<Odrequest />} />
         <Route exact path="/approvalsection/dashboard" element={<VerificationDashBoard />} />
         <Route exact path='student/od/payment' element={<Payment/>}/>
         <Route exact path='/student/forgotPassword' element={<ForgotPassword/>}/>
         <Route exact path='/employeelogin' element={<EmployeeSigninForm/>}/>
         <Route exact path="/employee/changePassword" element={<ChangePassword/>}/>
         <Route path="*" element={<Notfound />} />            
       </Routes>
       </Suspense>
     </BrowserRouter>
  )
}
}

export default App;
