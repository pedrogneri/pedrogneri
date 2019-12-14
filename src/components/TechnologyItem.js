import React from 'react'

import ProjectTags from './ProjectTags'

export default function TechnologyItem(props){
    return (
        <li className="w3-bar w3-col m4">
            <span className="title">{props.name}</span>
            <br/>
            <span className="description">{props.description}</span>
            <br/><br/>
            <ProjectTags projects={props.projects}/>
        </li>
    )
}