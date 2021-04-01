import styled from 'styled-components';


export const StyledButton = styled.button`
border: none;
outline: none;
display: block;
background: #2beeff;
color: #000;
padding: 15px 10px;
cursor: pointer;
font-size: 1.2rem;
margin: auto;
filter: brightness(90%);

&:hover {
   filter: brightness(93%);
   transform: translateY(-2%);
}
`;

export const ColorsButton = styled.button`
   width: 30px;
   height: 30px;
   border: 1px solid #333;
   cursor:pointer;
   outline: none;
   margin-right: 5px;

   &:hover {
       filter: brightness(90%);
   }
`;

export const MainStyle = styled.div`
   display: flex;
   margin: auto;
   margin-top: 10vh;
   max-width: 40vw;
   font-size:1rem;

   @media screen and (max-width: 700px) {
    max-width: 80vw;
    margin-top: 3vh;
    font-size:1rem;
}
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
      object-fit: cover;
      display:flex;
      margin: auto;
   }

   h3 {
      text-align: center;
      margin: 10px 0;
      letter-spacing: 2px;
      font-size: 1.4rem;
   }

   a {
       text-decoration: none;
   }

   p {
       line-height: 1.5;
       margin: 15px 0;
   }

   @media screen and (max-width: 700px) {
    h3 {
        text-align: center;
        margin: 5px 0;
        letter-spacing: 1.2px;
        font-size: 1.1rem;
     }

     p {
        line-height: 1.2;
        margin: 7.5px 0;
    }
}
`;