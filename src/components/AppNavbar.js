import { useContext } from "react"
import UserContext from "../UserContext";
import { NavLink } from "react-router-dom";


import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";


export default function AppNavbar(){

    const { user } = useContext(UserContext);
    const userFullName = `${user.firstName} ${user.lastName}`
    console.log(user);
    return(
        <Navbar expand="lg"  className="shadow bg-white sticky-top m-0 px-2 text-white">
        <Container fluid>
            <Navbar.Brand as={ NavLink } to="/" end className="font-weight-bold">
            <img
            alt=""
            src={require('../images/logo.jpeg')}
            width="30"
            height="30"
            className="d-inline-block align-top rounded"
            />{' '}
            TechTrends
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
            {
                (user.isAdmin)
                ?
                <Nav.Link as={ NavLink } to="/dashboard" end>Dashboard</Nav.Link>
                :
                <>
                <Nav.Link as={ NavLink } to="/" end>Home</Nav.Link>
                <Nav.Link as={ NavLink } to="/products" end>Products</Nav.Link>
                </>
            }
            {
                (user.id !== null)
                ?
                    <>
                    
                    
                    <NavDropdown title={userFullName} align="end" id="collasible-nav-dropdown" end>
                    <NavDropdown.Item as={ NavLink } to="/settings" end>Account Settings</NavDropdown.Item>
                    <NavDropdown.Item as={ NavLink } to="/report" end>Report</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={ NavLink } to="/logout" end>Logout</NavDropdown.Item>
                    </NavDropdown>
                    </>
                :
                <>
                    <Nav.Link as={ NavLink } to="/login" end>Login</Nav.Link>
                    <Nav.Link as={ NavLink } to="/register" end>Register</Nav.Link>
                </>
            }
        </Nav>

            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

