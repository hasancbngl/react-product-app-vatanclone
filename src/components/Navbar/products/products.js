import React, { Component } from 'react';
import { DataConText } from '../../../context/context';
import { CardItemDiv, CardItemLink, ProductsDiv } from './productsStyling';

export default class products extends Component {
    static contextType = DataConText;

    render() {
        const products = this.context;
        return (
        <>
        <ProductsDiv>
            {
                products.map(product =>(
                    <CardItemDiv key={product.id}>
                        <CardItemLink to={`products/${product.id}`}>
                            <img src={product.src} alt={product.title}/>
                        </CardItemLink>
                    </CardItemDiv>
                ))
            }
        </ProductsDiv>
        </>
        )
    }
}
