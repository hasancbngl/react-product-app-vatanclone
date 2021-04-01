import React, { Component } from 'react'
import { ColorsButton } from './ItemDetailsStyles';

export default class Colors extends Component {
    render() {
        const colors = this.props.colors;
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
