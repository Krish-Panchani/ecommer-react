import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CreateProfile from './pages/CreateProfile'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile' // Add this line
import Orders from './pages/Orders' // Add this line
export default function App() {
  return (
    <Router>
      <Routes>
        <>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/CreateProfile' element={<CreateProfile />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/orders' element={<Orders />} /> 
        </>
      </Routes>
    </Router>
  );
}