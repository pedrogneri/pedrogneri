import React from 'react'

import ProjectTags from './ProjectTags'

export default function TechnologyItem(props){
    return (
        <li className="w3-bar">
            <img src={props.img} alt="Logo" className="w3-bar-item w3-circle" style={ {width: 90 + 'px' }} />
            <span className="w3-large">{props.name}</span>
            <br/>
            <span>{props.description}</span>
            <br/><br/>
            <ProjectTags projects={props.projects}/>
        </li>
    )
}