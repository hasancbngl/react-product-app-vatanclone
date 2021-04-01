import styled from 'styled-components';


export const StyledItemRow = styled.div`
   
`;

export const MainStyle = styled.div`
   display: flex;
   width: 70vw;
   margin: auto;
   margin-top: 10vh;
`;

export const CardItemDiv = styled.div`
   min-width: 17.5rem;
   min-height: 23rem;
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
      max-width: 18rem;
      max-height: 18rem;
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
      font-size: 1.3rem;
   }

   a {
       text-decoration: none;
   }
`;