import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
   background-color: #16697a;
   margin-top: auto;
`;

export const FooterWrap = styled.div`
   padding: 48px 24px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 1100px;
   margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
   display: flex;
   justify-content: center;

   @media screen and (max-width: 700px) {
       padding-top: 32px;
   }
`;

export const FooterLinksWrapper = styled.div`
   display: flex;

   @media screen and (max-width: 700px) {
    flex-direction: column;
}
`;

export const FooterLinkItems = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin: 16px;
   text-align: left;
   width: 160px;
   box-sizing: border-box;
   color: #f8f1f1;

   @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
}
`;

export const FooterLinkTitle = styled.h1`
   font-size: 14px;
   margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
   color: #fff;
   text-decoration: none;
   cursor: pointer;
   margin-bottom: 0.5rem;
   font-size: 14px;

   &:hover {
       color: #ffa62b;
       transition: 0.3s ease-out;
   }
`;