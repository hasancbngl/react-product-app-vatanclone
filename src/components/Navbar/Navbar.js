import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavBtnLinkSpan} from './NavbarElements';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h1>HasEl</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/products" activeStyle>
                    Products
                </NavLink>
                <NavLink to="/loginregister" activeStyle>
                    Login/Register
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/cart"><FaShoppingCart /> <NavBtnLinkSpan>0</NavBtnLinkSpan></NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar;