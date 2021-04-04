import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #16697a;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
   color:#f8f1f1;
`;

export const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   cursor: pointer;
   outline: none;
`;

export const SideBarWrapper = styled.div`
   color: #f8f1f1;
`;

export const SideBarMenu = styled.ul`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(6, 9vh);
   text-align: center;
`;

export const SideBarLink = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-decoration: none;
   list-style: none;
   transition: 0.2s ease-in-out;
   color: #f8f1f1;
   cursor: pointer;

   &:hover {
    color: #ffa62b;
    transition: 0.2s ease-in-out;
   }
`;

export const SideBarBtnWrap = styled.div`
   display: flex;
   justify-content: center;
`;

export const SideBarBtnLink = styled(Link)`
   display: flex;
   border-radius: 50px;
   background: #db6400;
   white-space: nowrap;
   padding: 16px 64px; 
   color: #f8f1f1; 
   transition: all 0.2s ease-in-out;
   border: none;
   outline: none;
   cursor: pointer;
   text-decoration: none;

&:hover {
 filter: brightness(95%);
 transition: all 0.2s ease-in-out;
}
`;
