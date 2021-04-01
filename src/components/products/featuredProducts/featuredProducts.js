import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataConText } from '../../../context/context';
import { CardItemDiv, CardLink, ProductsDiv, CardButton, StyledSpan, MainDiv, StyledH2, StyledH3} from './featuredProductsStyling';
import { MdArrowForward } from 'react-icons/md';

export default class FeaturedProducts extends Component {
    static contextType = DataConText;

    render() {
        const products = this.context;
        let items;
        return (
            <>
             <StyledH2> Featured Products</StyledH2>
             <StyledH3>All Featured Products <StyledSpan><MdArrowForward /></StyledSpan></StyledH3>
        <MainDiv>
        <ProductsDiv>
            {
                products.map((product) =>{
                    if(Number(product.id) <this.props.number) {
                    items = <CardItemDiv key={product.id}>
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
