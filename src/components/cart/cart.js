import React, { Component } from 'react';
import {CardItemDiv, StyledButton} from '../ItemDetails/ItemDetailsStyles';
import { Link } from 'react-router-dom';
import { DataConText } from '../../context/context';
import {StyledSpan } from '../featuredProducts/featuredProductsStyling';
import Colors from '../ItemDetails/Colors';
import { MainDiv } from './cartStyle';

export default class Cart extends Component {
    static contextType = DataConText;
    render() {
        const cart = this.context.state.cart;
        return (
        <MainDiv>
            {
                cart.map(item => (
                <CardItemDiv key={item.id}>
                <img src={item.src} alt={item.title} />
                <>
                <div>
                    <h3>{item.title}</h3>
                    <StyledSpan >₺{item.price}</StyledSpan>
                </div>
                <Colors colors={item.colors}/>
                <p>{item.brand}</p>
                <p>Morbi in ligula lacus. Cras feugiat lacus ipsum, quis gravida elit commodo ut. Ut posuere fermentum elit, eget aliquet ante consectetur quis. Quisque magna ipsum, molestie ac elit eu, tempor dictum urna.</p>
                <div>
                    <button onClick={()=> this.context.reduceAmount(item.id)}>-</button>
                    <span>{item.count}</span>
                    <button onClick={()=> this.context.increaseAmount(item.id)}>+</button>
                </div>
                </>
            </CardItemDiv>
            ))
            }
        </MainDiv>
        )
    }
}