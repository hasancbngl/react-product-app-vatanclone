import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr); 
   margin: 1rem 0 1rem 17vw;
   grid-gap:33vw;
   @media screen and (max-width: 700px) {

      width: 90%;
      grid-gap: 7vw;
      grid-template-columns: repeat(2, 1fr);
}
`;

export const StyledH2 = styled.h2`
   font-size: 1.4rem;
   color: #444;
`;

export const StyledH3 = styled.h3`
   font-size: 1rem;
   color: #000;
   display: flex;
   &:hover {
      cursor:pointer;
      color:#444;
   }
`;

export const MainDiv = styled.div`
   margin-top: -15px;
   width: 68vw;
   margin: auto;
`;

export const ProductsDiv = styled.div`
   display:grid;
   grid-gap: 10px;
   grid-template-columns: repeat(3, 1fr);

   @media screen and (max-width: 700px) {
      width: 90%;
      grid-gap: 5px;
      grid-template-columns: repeat(1, 1fr);
}
`;

export const CardItemDiv = styled.div`
   min-width: 10rem;
   min-height: 16rem;
   border: 1px solid #ddd;
   overflow: hidden;
   padding: 10px;
   box-shadow: 2px 8px 20px #bbb;
   margin: 10px;
   transition: .5s linear;

   &:hover {
      box-shadow: none;
      filter: brightness(98%);
   }

   img {
      max-width: 8rem;
      max-height: 8rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
      display:flex;
      margin: auto;
   }

   h3 {
      text-align: center;
      margin: 10px 0;
   }
`;

export const CardLink = styled(Link)`
   text-decoration: none;
   color: #333;
   text-align: center;
   &:hover {
      transform: scaleX(0.5);
      color:#16697a;
   }
`;

export const StyledSpan = styled.span`
   color: #16697a;
   display: flex;
   justify-content: center;
   font-size: 1.1rem;
`;

export const CardButton = styled.button`
   width: 100%;
   border: none;
   outline: none;
   display: block;
   text-transform: uppercase;
   background: #16697a;
   color: #f8f1f1;
   padding: 5px 2px;
   cursor: pointer;
   font-size: 1rem;
   letter-spacing: 2px;
   margin:10px 0;

   &:hover {
      filter: brightness(98%);
      color: #ffa62b;
   }
`;