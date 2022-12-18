import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import SigninForm from './components/signInPage';
import Odrequest from './components/Requestform';
import Notfound from "./components/notFound";
import VerificationDashBoard from "./components/verificationView/verificationDashboard"
import StudendDashBoard from "./components/studentDashBoard"
import SignUpFrom from "./components/SignupPage"
import Payment from "./components/Payments"



import { Component } from 'react';

class App extends Component {
  state={activeNetwork:true}


render(){
  return (
  //  <BrowserRouter>
  //      <Routes>
  //       <Route exact path="/" element={<StudendDashBoard/>}/>
  //        <Route exact path="/student/signin" element={<SigninForm/>}/>
  //        <Route exact path="/student/signup" element={<SignUpFrom/>}/>
  //        <Route exact path="/requests/odrequest" element={<Odrequest />} />
  //        <Route exact path="/approvalsection/dashboard" element={<VerificationDashBoard />} />
  //        <Route exact path='student/payment' element={<Payment/>}/>
  //        <Route path="*" element={<Notfound />} />
  //      </Routes>
  //    </BrowserRouter>
        <Payment/>
  )
}
}

export default App;
