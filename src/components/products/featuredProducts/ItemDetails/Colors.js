import React, { Component } from 'react'

export default class Colors extends Component {
    render() {
        const colors = this.props.colors;
        return (
            <div>
                {
                colors.map((color, index) => (
                    <button key={index} style={{background: color}}>0</button>
                    ))
                    }
            </div>
        )
    }
}
