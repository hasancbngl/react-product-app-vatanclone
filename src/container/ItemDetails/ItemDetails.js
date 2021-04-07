import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { DataConText } from '../context/Context';
import {StyledSpan } from '../../components/featuredProducts/featuredProductsStyling';
import Colors from '../../components/colorsComponent/Colors';
import { CardItemDiv, MainStyle, StyledButton} from './ItemDetailsStyles';

export default class ItemDetails extends Component {
    static contextType = DataConText;
    state= {
        product:[]
    }

    getProduct=() => {
        const { id } = this.props.match.params;
        const { products, bestSellerProducts} = this.context.state;

        if(id) {
            const res = id <10 ? products : bestSellerProducts;
            const data = res.filter(item=> {
                return item.id === id;
            });
            this.setState({product: data});
        }
    };

    componentDidMount() {
        this.getProduct();
    }

    render() {
        const { product } = this.state;
        const { addToCart } = this.context;
        return (
            <MainStyle>
        {
            product.map(item => (
                <CardItemDiv key={item.id}>
                    <img src={item.src} alt={item.title} />
                    <>
                        <div>
                            <h3>{item.title}</h3>
                            <StyledSpan >₺{item.price}</StyledSpan>
                        </div>
                        <Colors colors={item.colors}/>
                        <p>Morbi in ligula lacus. Cras feugiat lacus ipsum, quis gravida elit commodo ut.</p>
                        <Link to={`/cart`} onClick={()=>addToCart(item.id)}>
                            <StyledButton>Add to Cart</StyledButton>
                        </Link>
                    </>
                </CardItemDiv>
            ))
        }
        </MainStyle>
        )
    }
}