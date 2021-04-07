import React from 'react'
import { ColorsButton } from './ColorsStyles';

const Colors = ({ colors}) => {
    return <div>
            {
            colors.map((color, index) => (
            <ColorsButton key={index} style={{background: color}}></ColorsButton>
            ))
            }
            </div>
};

export default Colors;