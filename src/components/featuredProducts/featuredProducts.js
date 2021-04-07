import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataConText } from '../../container/context/Context';
import { CardItemDiv, CardLink, ProductsDiv, CardButton, StyledSpan, MainDiv, StyledH2, Header} from './featuredProductsStyling';

const FeaturedProducts = ({ featuredTitle, allProducts, number }) => {
    const context = useContext(DataConText);
    const { products } =  context.state;
    const { addToCart } = context;
    let items;

    return <>
            <Header>
                <StyledH2>{featuredTitle}</StyledH2>
                {allProducts}
            </Header>
            <MainDiv>
            <ProductsDiv>
                {
                products.map((product) =>{
                    if(Number(product.id) <number) {
                        items = <CardItemDiv key={product.id}>
                        <Link to={`/${product.id}`}>
                        <img src={product.src} alt={product.title}/>
                        </Link>
                        <>
                        <h3>
                        <CardLink to={`/${product.id}`}>
                            {product.title}
                        </CardLink>
                        </h3>
                        <StyledSpan >₺{product.price}</StyledSpan>
                        <CardButton onClick={()=>addToCart(product.id)}>Add to Cart</CardButton>
                        </>
                        </CardItemDiv>
                return items;
            } else return '';
        })
        }
            </ProductsDiv>
            </MainDiv>
        </>
}

export default FeaturedProducts;