import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataConText } from '../../context/context';
import { CardItemDiv, CardLink, ProductsDiv, CardButton, StyledSpan, MainDiv, StyledH2, Header} from './featuredProductsStyling';

export default class FeaturedProducts extends Component {
    static contextType = DataConText;

    render() {
        const products = this.context.products;
        let items;
        return (
            <>
            <Header>
             <StyledH2>{this.props.featuredTitle}</StyledH2>
             {this.props.allProducts}
             </Header>
        <MainDiv>
        <ProductsDiv>
            {
                products.map((product) =>{
                    if(Number(product.id) <this.props.number) {
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
