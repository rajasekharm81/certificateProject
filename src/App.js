import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import SigninForm from './components/AuthPage';
import Odrequest from './components/Requestform';
import Notfound from "./components/notFound";
import VerificationDashBoard from "./components/verificationView/verificationDashboard"
import StudendDashBoard from "./components/studentDashBoard"
import SignUpFrom from "./components/SignupPage"



import { Component } from 'react';

class App extends Component {
  state={activeNetwork:true}


render(){
  // const {activeNetwork} = this.state
  return (
    // activeNetwork?<BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={<StudendDashBoard/>}/>
    //     <Route exact path="/requests/login" element={<SigninForm/>}/>
    //     <Route exact path="/requests/odrequest" element={<Odrequest />} />
    //     <Route exact path="/approvalsection/dashboard" element={<VerificationDashBoard />} />
    //     <Route path="*" element={<Notfound />} />
    //   </Routes>
    // </BrowserRouter>:<div><h1>No Network</h1></div>
    <SignUpFrom/>
  )
}
}

export default App;
