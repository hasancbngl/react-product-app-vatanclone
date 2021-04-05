import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataConText } from '../../container/context/Context';
import {Header, MainDiv, CardItemDiv, CardLink, ProductsDiv, CardButton, StyledSpan, StyledH2} from '../featuredProducts/featuredProductsStyling';

export default class BestSellerProducts extends Component {
    static contextType = DataConText;

    render() {
        const products = this.context.state.bestSellerProducts;
        let items;
        const { allProducts, featuredTitle, number } = this.props;
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
