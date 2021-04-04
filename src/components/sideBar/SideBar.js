import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, 
    SideBarMenu, SideBarBtnWrap,SideBarBtnLink, 
    SideBarLink, SideBarBtnLinkSpan } from './SideBarStyles';

const SideBar = () => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/home">
                    Home
                    </SideBarLink>
                    <SideBarLink to="/products">
                    Products
                    </SideBarLink>
                    <SideBarLink to="/loginregister">
                    Login/Register
                    </SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrap>
                <SideBarBtnLink to="/cart">Checkout <FaShoppingCart/> <SideBarBtnLinkSpan>0</SideBarBtnLinkSpan></SideBarBtnLink>
                </SideBarBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;