import './App.css';
import {Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Registration from './components/Registration';
// import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1 style={{color:'white' ,marginBottom:'10px'}}>USER MANAGEMENT SYSTEM</h1>
      <BrowserRouter>
      <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            </ul>
      <Routes>
        <Route path='/register' element={<Registration/>}/>
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='/passwordreset' element={<Password/>}/>
        <Route path='/profile' element={<Registration/>}/> */}
      </Routes>
      </BrowserRouter>
      hlo

      <Registration/>
      <Header/>
    </div>
  );
}

export default App;
