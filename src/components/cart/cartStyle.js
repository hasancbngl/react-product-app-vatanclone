import styled from 'styled-components';

export const MainDiv = styled.div`
   width: 40vw;
   margin: auto;
`;

export const CountSpan = styled.span`
   color: crimson;
   padding: 0 20px;

   @media screen and (max-width: 700px) {
      padding: px 10px;
   }
`;

export const CountButton = styled.button`
   width: 2rem;
   height: 1.8rem;
   border: 1px solid #555;
   outline: none;
   background: transparent;
   cursor: pointer;
`;

export const DeleteButton = styled.div`
   position: absolute;
   top: 0;
   right: 5px;
   color: crimson;
   cursor: pointer;
   font-weight: 900;

   &hover {
      filter: brightness(90%);
      color:red;
   }
`;

export const TotalDiv = styled.div`
   width: 100%;
   height: 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   overflow: hidden;

   a {
      text-decoration: none;
      background: #333;
      color:white;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 1.5rem 2rem;
   }

   h3{
      margin-right: 2.5vw;
      color: crimson;
   }
`;
