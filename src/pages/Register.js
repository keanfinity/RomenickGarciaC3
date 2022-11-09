import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import {Form, Button, Container} from "react-bootstrap";
import Swal from "sweetalert2";
import UserContext from "../UserContext";
import {Col, Row} from "react-bootstrap"

export default function Register(){
    
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [isActive, setIsActive] = useState(false);


    useEffect(() =>{


        if((fName !== '' && lName !=='' && email !== '' && mobileNo !== '' && password1 !== '' && password2 !=='') && (password1 === password2)){
            setIsActive(true);
        }
        else{
            setIsActive(false);
        }

    }, [fName, lName, email, mobileNo, password1, password2])

    function registerUser(e){
        e.preventDefault();

        fetch(`${process.env.REACT_APP_API_URL}/users/checkEmail`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);

            if(data){
                Swal.fire({
                    title: "THE USER IS ALREADY REGISTERED",
                    icon: "error",
                    text: "Kindly provide another email to complete the registration."
                })
            }
            else{

                fetch(`${process.env.REACT_APP_API_URL}/users/register`,{
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        firstName: fName,
                        lastName: lName,
                        email: email,
                        password: password1,
                        mobileNumber: mobileNo
                    })
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if(data){
                        Swal.fire({
                            title: "YOU ARE NOW REGISTERED!",
                            icon: "success",
                            text: "Please login to check your account."
                        });
                        setFName('');
                        setLName('');
                        setEmail('');
                        setMobileNo('');
                        setPassword1('');
                        setPassword2('');
                        navigate("/login");
                    }
                    else{

                        Swal.fire({
                            title: "REGISTRATION NOT SUCCESSFUL",
                            icon: "error",
                            text: "Please try again later."
                        });

                    }
                })


            }
        })
    }

    return(
        (user.id !== null)
    ?
        <Navigate to="/" />
    :
    <>
        <Container fluid className="w-100 m-0 p-0">
        <Row className="w-100 m-0 p-0">
         <Col className="banner-bg vh-100 m-0 text-light d-flex flex-column align-items-center justify-content-center text-center p-5" xs={12} md={12} lg={6}>
            <h1 className='display-1'>REGISTER NOW,</h1>
            <h1 className='display-5'>We're sure you don't want to miss our surprises for you.</h1>
        </Col>
            <Col xs={12} md={12} lg={6} className="d-flex flex-column align-items-center justify-content-center m-0 colr-bg">
            <div className='w-75 my-5 py-5 shadow-sm shadow-lg rounded bg-white  d-flex flex-column align-items-center justify-content-center'>
            <h1 className=" text-center">REGISTER</h1>
            
            <Form className="w-75" onSubmit={e => registerUser(e)}>

            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={fName}
                    onChange={e => setFName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={lName}
                    onChange={e => setLName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="emailAddress">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mobileNo">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="09xxxxxxxxx"
                    value={mobileNo}
                    onChange={e => setMobileNo(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password" 
                    placeholder="Enter Password"
                    value={password1}
                    onChange={e => setPassword1(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password2">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control
                    type="password" 
                    placeholder="Verify Password"
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}
                    required
                />
            </Form.Group>
            {
                isActive
                ?
                    <Button variant="primary" type="submit" id="submitBtn">
                    Submit
                    </Button>
                :
                    <Button variant="danger" type="submit" id="submitBtn" disabled>
                    Submit
                    </Button>
            }
            <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className='mt-5'>Already have an account? <Link to={"/login"}><strong>Login Here!</strong></Link></p>
            </div>
            </Form>
            </div>
            </Col>
        </Row>
        </Container>
        </>
    )
}