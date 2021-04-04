import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

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
/*  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; */
  top:0;
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
   
`;

export const SideBarMenu = styled.div`
   
`;

export const SideBarLink = styled.div`
   
`;

export const SideBarBtnWrap = styled.div`
   
`;

export const SideBarBtnLink = styled.div`
   
`;

export const SideBarBtnLinkSpan = styled.div`
   
`;