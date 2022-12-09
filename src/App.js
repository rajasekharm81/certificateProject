import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import SigninForm from './components/AuthPage';
import Odrequest from './components/Requestform';
import Notfound from "./components/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/requests/login" element={<SigninForm/>}/>
        <Route exact path="/requests/odrequest" element={<Odrequest />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
