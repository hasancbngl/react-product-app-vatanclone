import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataConText } from '../../../context/context';
import { CardItemDiv, CardLink, ProductsDiv, CardButton, StyledSpan, MainDiv} from './productsStyling';

export default class Products extends Component {
    static contextType = DataConText;

    render() {
        const products = this.context;
        return (
        <MainDiv>
        <ProductsDiv>
            {
                products.map(product =>(
                    <CardItemDiv key={product.id}>
                        <Link to={`products/${product.id}`}>
                            <img src={product.src} alt={product.title}/>
                        </Link>
                        <>
                            <h3>
                            <CardLink to={`products/${product.id}`}>
                                {product.title}
                            </CardLink>
                            </h3>
                            <StyledSpan >₺{product.price}</StyledSpan>
                            <CardButton>Add to Card</CardButton>
                        </>
                    </CardItemDiv>
                ))
            }
        </ProductsDiv>
        </MainDiv>
        )
    }
}
