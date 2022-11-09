import { Navigate } from "react-router-dom";
import { useContext } from "react"
import UserContext from "../UserContext";
import HomeBanner from "../components/HomeBanner";
import HotDeals from "../components/HotDeals";
import HomeCarousel from "../components/HomeCarousel";
import logo from "../images/logo.jpeg"
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home(){

	
	const { user } = useContext(UserContext);
	const data = {
		title: "TechTrends Philippines",
		content: "The #1 Online Tech Shop, made available for everyone!",
		destination: "/products",
		label: "Shop Now!",
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
			<HomeCarousel/>
			<HomeBanner bannerProp={data}/>
			<HotDeals />
			<FeaturedProducts/>
		</div>
		}
		</>
		
	)
}