import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavBtnLinkSpan } from '../Navbar/NavbarElements';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, 
    SideBarMenu, SideBarBtnWrap,SideBarBtnLink, SideBarLink } from './SideBarStyles';

const SideBar = ({ isOpen, toggle, productNumber }) => {
    return (
        <SideBarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/home" onClick={toggle}>
                    Home
                    </SideBarLink>
                    <SideBarLink to="/products" onClick={toggle}>
                    Products
                    </SideBarLink>
                    <SideBarLink to="/loginregister" onClick={toggle}>
                    Login/Register
                    </SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrap>
                <SideBarBtnLink to="/cart" onClick={toggle}>Checkout <FaShoppingCart/> <NavBtnLinkSpan>{productNumber}</NavBtnLinkSpan></SideBarBtnLink>
                </SideBarBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;