import { useContext } from "react"
import UserContext from "../UserContext";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import  Icon  from "awesome-react-icons";
import { NavLink } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";



export default function AppSideNav(){

    const { user } = useContext(UserContext);
    console.log(user);
    return(
        <div className="fixed">
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId=""
            onSelect={({itemId}) => {
            // maybe push to the route
            }}
            items={[
            {
                title: 'User Management',
                itemId: '/user',
                elemBefore: () => <Icon name="users" />,
                subNav: [
                {
                    title: 'All Users',
                    itemId: '/users',
                },
                {
                    title: 'Archived Users',
                    itemId: '/users/archived',
                },
                ],
            },
            {
                title: 'Product Management',
                itemId: '/products',
                elemBefore: () => <Icon name="inbox" />,
                subNav: [{
                    title: <Nav.Link as={ NavLink } to="/products/allProducts" end>All Products</Nav.Link>,
                    itemId: '/products/allProducts',
                },
                {
                    title:<Nav.Link as={ NavLink } to="/products/archivedProducts" end>Archived Products</Nav.Link>,
                    itemId: '/products/archivedProducts',
                },
                ],
            },
            {
                title: 'Analytics',
                itemId: '/analytics',
                elemBefore: () => <Icon name="activity" />,
                subNav: [
                {
                    title: 'User Orders',
                    itemId: '/users/orders',
                },
                {
                    title: 'Products Statistics',
                    itemId: '/products/statistics',
                },
                 {
                    title: 'Reports',
                    itemId: '/reports',
                }
                ],
            },
            ]}
        />
        </div>
    )
}