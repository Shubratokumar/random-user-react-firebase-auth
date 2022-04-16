import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home></Home>}/>/
        <Route path="users" element={<Users></Users>}/>/
        <Route path="login" element={<Login></Login>}/>/
      </Routes>
    </div>
  );
}

export default App;
