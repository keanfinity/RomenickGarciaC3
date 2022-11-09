import { useContext } from "react"
import UserContext from "../UserContext";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import {Container, Col, Row} from "react-bootstrap"
import AppSideNav from "../components/AppSideNav";
import { Navigate } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import logo from "../images/logo.jpeg"
import HotDeals from "../components/HotDeals";


export default function Dashboard(){
     const { user } = useContext(UserContext);
    console.log(user);

    const data = {
		title: "WELCOME TO YOUR DASHBOARD!",
		content: "Here is where you can control things. Let's work together!",
		destination: "/products/allProducts",
		label: "PRODUCTS",
		image: {logo}
	}
   

	return(
        <>
        {
        (user.isAdmin )
		?
        <Container fluid className="w-100 m-0 p-0">
        <Row className="w-100 m-0 p-0">
        <Col className="bg-white vh-100 pt-3 m-0 shadow" xs={12} md={2} lg={2}>
        <AppSideNav/>
        </Col>
        <Col className="colr-bg vh-100 m-0 p-5" xs={12} md={10} lg={10}>
        <HomeBanner bannerProp={data}/>
        <HotDeals/>
        </Col>
        
        </Row>
     </Container>
        :
        <Navigate to={"/"}/>
        }
   </>
	)
}