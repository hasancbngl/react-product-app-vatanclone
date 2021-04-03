import React, { Component } from 'react';
import {CardItemDiv} from '../../container/ItemDetails/ItemDetailsStyles';
import { Link } from 'react-router-dom';
import { DataConText } from '../../container/context/Context';
import {StyledH2, StyledSpan } from '../featuredProducts/featuredProductsStyling';
import Colors from '../colorsComponent/Colors';
import { CountButton, TotalDiv, CountSpan, DeleteButton } from './cartStyle';

export default class Cart extends Component {
    static contextType = DataConText;

    componentDidMount() {
        this.context.calculateTotalPrice();
    }

    render() {
        const cart = this.context.state.cart;
         if(cart.length===0) {
           return <StyledH2 style={{textAlign:"center"}}>No product!</StyledH2>
        } else {
            return ( 
                <>
                    {
                        cart.map(item => (
                        <CardItemDiv key={item.id}>
                        <img src={item.src} alt={item.title} />
                        <>
                        <div>
                            <h3>{item.title}</h3>
                            <StyledSpan >₺{item.price * item.count}</StyledSpan>
                        </div>
                        <Colors colors={item.colors}/>
                        <p>Morbi in ligula lacus. Cras feugiat lacus ipsum, quis gravida elit commodo ut. Ut posuere fermentum elit, eget aliquet ante consectetur quis. Quisque magna ipsum, molestie ac elit eu, tempor dictum urna.</p>
                        <>
                            <CountButton onClick={()=> this.context.reduceAmount(item.id)}>-</CountButton>
                            <CountSpan>{item.count}</CountSpan>
                            <CountButton onClick={()=> this.context.increaseAmount(item.id)}>+</CountButton>
                        </>
                        </>
                        <DeleteButton onClick={()=> this.context.removeProduct(item.id)}>X</DeleteButton>
                    </CardItemDiv>
                    ))
                    }
                    <TotalDiv>
                    <Link to="/payment">Payment</Link>
                    <h3>Total:₺ {this.context.state.totalPrice}</h3>
                   </TotalDiv>
                </>
                )
        }
    }
}