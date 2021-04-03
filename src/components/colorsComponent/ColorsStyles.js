import styled from 'styled-components';

export const ColorsButton = styled.button`
   width: 1.5vw;
   height: 1.5vw;
   border: 1px solid #333;
   cursor:pointer;
   outline: none;
   margin-right: 5px;

   &:hover {
       filter: brightness(90%);
   }

   @media screen and (max-width: 700px) {
      width: 2.5vw;
      height: 2.5vw;
   }
`;