import styled from 'styled-components';


export const StyledButton = styled.button`
border: none;
outline: none;
display: block;
background: #2beeff;
color: #ff3c2b;
padding: 15px 10px;
cursor: pointer;
font-size: 1.2rem;
margin: auto;
filter: brightness(90%);

&:hover {
   filter: brightness(93%);
   transform: translateY(-2%);
}

@media screen and (max-width: 700px) {
   padding: 7.5px 5px;
   font-size: 1rem;
}
`;

export const MainStyle = styled.div`
   display: flex;
   margin: auto;
   margin-top: 7vh;
   max-width: 38vw;
   font-size:1rem;

   @media screen and (max-width: 700px) {
    max-width: 80vw;
    margin-top: 3vh;
    font-size:1rem;
}
`;

export const CardItemDiv = styled.div`
   width:40vw;
   position: relative;
   border: 1px solid #ddd;
   overflow: hidden;
   padding: 7.5px;
   box-shadow: 2px 8px 20px #bbb;
   margin: auto;
   margin-top:7.5px;
   transition: .5s linear;

   &:hover {
      box-shadow: none;
      filter: brightness(98%);
   }

   img {
      width: 25vw;
      height: 20vh;
      object-fit: contain;
      display:flex;
      margin: auto;
   }

   h3 {
      text-align: center;
      margin: 7px 0;
      letter-spacing: 1px;
      font-size: 1.2rem;
      overflow: hidden;
   }

   a {
       text-decoration: none;
   }

   p {
       line-height: 1.1;
       margin: 15px 0;
       overflow: hidden;
   }

   @media screen and (max-width: 700px) {
      width: 75%;
      padding: 5px;
      box-shadow: 1px 4px 10px #bbb;
      margin: auto;
      margin-top:5px;

    h3 {
        text-align: center;
        margin: 3px 0;
        letter-spacing: 1.2px;
        font-size: 1rem;
     }

     p {
        line-height: 1;
        margin: 5px 0;
    }
}
`;