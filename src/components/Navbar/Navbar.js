import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavBtnLinkSpan} from './NavbarElements';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ toggle, productNumber }) => {
    return <>
    <Nav>
        <NavLink to="/">
            <h1>HasEl</h1>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
            <NavLink to="/home">
                Home
            </NavLink>
            <NavLink to="/products">
                Products
            </NavLink>
            <NavLink to="/loginregister">
                Login/Register
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/cart"> Checkout <FaShoppingCart/> <NavBtnLinkSpan>{productNumber}</NavBtnLinkSpan></NavBtnLink>
        </NavBtn>
    </Nav>
        </>
};

export default Navbar;