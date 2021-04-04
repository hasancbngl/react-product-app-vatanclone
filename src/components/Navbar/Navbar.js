import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavBtnLinkSpan} from './NavbarElements';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ toggle, productNumber }) => {
    return <>
    <Nav>
        <NavLink to="/react-product-app-vatanclone/home">
            <h1>HasEl</h1>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
            <NavLink to="/react-product-app-vatanclone/home">
                Home
            </NavLink>
            <NavLink to="/react-product-app-vatanclone/products">
                Products
            </NavLink>
            <NavLink to="/react-product-app-vatanclone/loginregister">
                Login/Register
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/react-product-app-vatanclone/cart"> Checkout <FaShoppingCart/> <NavBtnLinkSpan>{productNumber}</NavBtnLinkSpan></NavBtnLink>
        </NavBtn>
    </Nav>
        </>
};

export default Navbar;