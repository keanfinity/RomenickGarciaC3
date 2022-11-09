import { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import ProductCard from "../components/ProductCard";
import UserContext from "../UserContext";
import logo from "../images/logo.jpeg"
import {Row} from "react-bootstrap"

export default function Products() {

	const data = {
		title: "TechTrends Philippines",
		content: "The #1 Online Tech Shop, made available for everyone!",
		destination: "/products",
		label: "Shop Now!",
		image: {logo}
	}

	const { user } = useContext(UserContext);


	const [products, setProducts] = useState([]);

	useEffect(() =>{

		fetch(`${process.env.REACT_APP_API_URL}/products/`)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			setProducts(data.map(products =>{
				return(
                        <ProductCard key={products._id} props={products}/>
				);
			}));
		})
	}, []);


	return(
		(user.isAdmin)
		?
			<Navigate to="/dashboard" />
		:	
		<>
        <div className="p-5">
		<HomeBanner bannerProp={data}/>
			<h1>TechTrends Products</h1>
			<Row className="my-3 text-dark h-100">
			{products}
			</Row>
        </div>
		</>
	)
}