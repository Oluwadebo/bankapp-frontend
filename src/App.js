import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './component/MiniPOS';
import Won from './component/Won';
import NotFound from './component/NotFound';
import Dashboard from './component/Dashboard';
import Histroy from './component/Histroy';
import Signup from './component/Signup';
import SignIn from './component/Signin';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Won />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/History' element={<Histroy />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
