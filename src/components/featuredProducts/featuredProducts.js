import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataConText } from '../../container/context/Context';
import { CardItemDiv, CardLink, ProductsDiv, CardButton, StyledSpan, MainDiv, StyledH2, Header} from './featuredProductsStyling';

export default class FeaturedProducts extends Component {
    static contextType = DataConText;

    render() {
        const { products } = this.context.state;
        const { featuredTitle, allProducts, number } = this.props;
        let items;
        const { addToCart } = this.context;

        return (
            <>
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
                        <Link to={`/react-product-app-vatanclone/${product.id}`}>
                            <img src={product.src} alt={product.title}/>
                        </Link>
                        <>
                            <h3>
                            <CardLink to={`/react-product-app-vatanclone/${product.id}`}>
                                {product.title}
                            </CardLink>
                            </h3>
                            <StyledSpan >₺{product.price}</StyledSpan>
                            <CardButton onClick={()=>addToCart(product.id)}>Add to Card</CardButton>
                        </>
                    </CardItemDiv>
                    return items;
                    } else return '';
                })
            }
        </ProductsDiv>
        </MainDiv>
        </>
        )
    }
}
