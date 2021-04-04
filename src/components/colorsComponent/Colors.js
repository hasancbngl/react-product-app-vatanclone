import React, { Component } from 'react'
import { ColorsButton } from './ColorsStyles';

export default class Colors extends Component {
    render() {
        const { colors } = this.props;
        return (
            <div>
                {
                colors.map((color, index) => (
                    <ColorsButton key={index} style={{background: color}}></ColorsButton>
                    ))
                    }
            </div>
        )
    }
}
