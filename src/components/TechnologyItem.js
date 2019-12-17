import React from 'react'

import ProjectTags from './ProjectTags'

export default function TechnologyItem(props){
    return (
        <div className="w3-bar technology-item">
            <span className="title">{props.name}</span>
            <span className="technology-desc description">{props.description}</span>
            <div className="project-tags">
                <ProjectTags projects={props.projects}/>
            </div>
        </div>
    )
}