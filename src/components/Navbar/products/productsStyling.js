import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainDiv = styled.div`
   margin-top: 1rem;
   width: 100%;
   display: flex;
   overflow: hidden;
   justify-content: space-around;
   flex-wrap: wrap;
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
   min-width: 15.5rem;
   min-height: 22rem;
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
      max-width: 15rem;
      max-height: 15rem;
      width: 100%;
      height: 100%;
      display: block;
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
   margin:15px 0;

   &:hover {
      filter: brightness(98%);
      color: #ffa62b;
   }
`;