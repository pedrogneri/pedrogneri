import React from 'react'

export default function TechnologyItem(props){
    return (
        <li className="w3-bar">
            <img src={props.img} className="w3-bar-item w3-circle" style={ {width: 85 + 'px' }} />
            <div className="w3-bar-item">
                <span className="w3-large">{props.name}</span>
                <br/>
                <span>{props.description}</span>
                <br/>
            </div>
        </li>
    )
}