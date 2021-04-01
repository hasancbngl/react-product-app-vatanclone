import React, { Component } from 'react'

export default class ItemDetails extends Component {
    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                {id}
            </div>
        )
    }
}