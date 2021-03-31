import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <h1>HasBil</h1>
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
                <NavBtnLink to="/shopBox"><FaShoppingCart /></NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar;