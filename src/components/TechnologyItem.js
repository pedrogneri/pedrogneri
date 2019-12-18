import React from 'react'

import ProjectTags from './ProjectTags'

export default function TechnologyItem(props){
    const { technology } = props
    return (
        <div className="w3-bar technology-item">
            <span className="title">{technology.name}</span>
            <span className="technology-desc description">{technology.description}</span>
            <ProjectTags projects={technology.projects}/>
        </div>
    )
}