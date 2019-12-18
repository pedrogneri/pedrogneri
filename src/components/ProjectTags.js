import React from 'react'
import '../style/ProjectTags.css'

export default function ProjectTags(props){
    const projects = props.projects;
    const listTags = projects.map((project, index) => 
        <span key={index} className="tag w3-small primary-color-light">
            <a rel="noopener noreferrer" target="_blank" href={project.url}>{project.name}</a>
        </span>
    )
    return <div className="project-tags">{listTags}</div>
}