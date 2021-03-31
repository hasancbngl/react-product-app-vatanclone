import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
  background: #16697a;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #f8f1f1;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
      color: #ffa62b;
  }

  &:hover {
    color: #ffa62b;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #f8f1f1;

  @media screen and (max-width: 750px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -22px;

  @media screen and (max-width: 750px) {
      display: none;
  }
`;

export const NavBtn = styled.nav`
   display: flex;
   align-items: center;
   margin-right: 22px;

   @media screen and (max-width: 750px) {
    display: none;
}
`;

export const NavBtnLink = styled(Link)`
   border-radius: 4px;
   background: #db6400;
   padding: 10px 22px; 
   color: #f8f1f1; 
   border: none;
   outline: none;
   cursor: pointer;
   text-decoration: none;

   &:hover {
    filter: brightness(95%);
   }
}
`;