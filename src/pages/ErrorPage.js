import { Navigate } from "react-router-dom";
import { useContext } from "react"
import UserContext from "../UserContext";
import HomeBanner from "../components/HomeBanner";
import HotDeals from "../components/HotDeals";
import HomeCarousel from "../components/HomeCarousel";
import logo from "../images/logo.jpeg"
import FeaturedProducts from "../components/FeaturedProducts";

export default function ErrorPage(){

	
	const { user } = useContext(UserContext);
	const data = {
		title: "404: ERROR!",
		content: "The product or page you are looking cannot be found.",
		destination: "/",
		label: "Home",
		image: {logo}
	}

	return(
		<>
		{
        (user.isAdmin)
		?
		<Navigate to="/dashboard" />
		:
		<div className="p-5">
			<HomeBanner bannerProp={data}/>
			<FeaturedProducts/>
		</div>
		}
		</>
		
	)
}