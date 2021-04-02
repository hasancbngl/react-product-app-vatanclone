import {React, Component} from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavBtnLinkSpan} from './NavbarElements';
import { FaShoppingCart } from "react-icons/fa";
import DataConText from '../../context/context';

export default class Navbar extends Component {
    static contextType = DataConText;
    render() {
      /*  const cart = this.context.state.cart;
        let number = 0;
        if(cart) number = cart.length;
        else number = 0;*/
        return (
            <>
        <Nav>
            <NavLink to="/">
                <h1>HasEl</h1>
            </NavLink>
            <Bars />
            <NavMenu>
            <NavLink to="/home">
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/products">
                    Products
                </NavLink>
                <NavLink to="/loginregister">
                    Login/Register
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/cart"><FaShoppingCart/> <NavBtnLinkSpan>0</NavBtnLinkSpan></NavBtnLink>
            </NavBtn>
        </Nav>
        </>
        );
    }
}