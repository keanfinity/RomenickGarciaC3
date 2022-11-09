import './App.css';
import Register from "./pages/Register";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";
import AppNavbar from "./components/AppNavbar";
import { UserProvider } from "./UserContext";
import Home from "./pages/Home"
import Login from './pages/Login';
import { useState, useEffect } from "react";
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import AllProducts from './pages/AllProducts';
import Products from './pages/Products';
import CheckOut from './pages/CheckOut';
import ErrorPage from './pages/ErrorPage';


function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });

  const unsetUser = () =>{
    localStorage.clear(); 
  }

  useEffect(()=>{
    console.log(user);
    console.log(localStorage);
  }, [user])
  useEffect(()=>{

    fetch(`${process.env.REACT_APP_API_URL}/users/profile`, {
      headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if(data._id !== undefined){
        console.log(" makuha");
        setUser({
            id: data._id,
            firstName : data.firstName,
            lastName : data.lastName,
            email : data.email,
            mobileNo : data.mobileNumber,
            isAdmin: data.isAdmin
        });
      }
      else{
        console.log("di makuha");
        setUser({
          
          id: null,
          isAdmin: null
        });
      }
      
    })

  }, [])
  return (
    <>
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
        <AppNavbar />
        <Container fluid className='p-0 m-0'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/products/allProducts" element={<AllProducts/>} />
            <Route exact path="/products" element={<Products/>} />
            <Route exact path="/products/buy/:productId" element={<CheckOut />} />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
        </Router>
    </UserProvider>
    </>
    

  );
}

export default App;
