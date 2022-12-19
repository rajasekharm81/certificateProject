
import { Component,Suspense, lazy } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { Vortex } from  'react-loader-spinner'


const SigninForm = lazy(() => import('./components/signInPage'));
const Odrequest = lazy(() => import('./components/Requestform'));
const Notfound = lazy(() => import("./components/notFound"));
const VerificationDashBoard = lazy(() => import("./components/verificationView/verificationDashboard"));
const StudendDashBoard = lazy(() => import("./components/studentDashBoard"));
const SignUpFrom = lazy(() => import("./components/SignupPage"));
const Payment = lazy(() => import("./components/Payments"));
const ForgotPassword = lazy(() => import('./components/forgetPassword'));
const EmployeeSigninForm = lazy(() => import("./components/employeeLogin"));


class App extends Component {
render(){
  return (
   <BrowserRouter>
    <Suspense fallback={<div className='fallbackContainer'><Vortex visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}/></div>}>
       <Routes>
        <Route exact path="/" element={<StudendDashBoard/>}/>
         <Route exact path="/student/signin" element={<SigninForm/>}/>
         <Route exact path="/student/signup" element={<SignUpFrom/>}/>
         <Route exact path="/requests/odrequest" element={<Odrequest />} />
         <Route exact path="/approvalsection/dashboard" element={<VerificationDashBoard />} />
         <Route exact path='student/payment' element={<Payment/>}/>
         <Route exact path='/student/forgotPassword' element={<ForgotPassword/>}/>
         <Route exact path='/employeelogin' element={<EmployeeSigninForm/>}/>
         <Route path="*" element={<Notfound />} />            
       </Routes>
       </Suspense>
     </BrowserRouter>

  )
}
}

export default App;
