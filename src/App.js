import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import SigninForm from './components/AuthPage';
import Odrequest from './components/Requestform';
import Notfound from "./components/notFound";
import VerificationDashBoard from "./components/verificationView/verificationDashboard"
import StudendDashBoard from "./components/studentDashBoard"
import { Component } from 'react';
// import {BtechCmm} from "./components/Cmm/index"

class App extends Component {
  state={activeNetwork:true}


render(){
  const {activeNetwork} = this.state
  return (
    activeNetwork?<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StudendDashBoard/>}/>
        <Route exact path="/requests/login" element={<SigninForm/>}/>
        <Route exact path="/requests/odrequest" element={<Odrequest />} />
        <Route exact path="/approvalsection/dashboard" element={<VerificationDashBoard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>:<div><h1>No Network</h1></div>

  )
}
}

export default App;
