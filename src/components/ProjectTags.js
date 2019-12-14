import React from 'react'
import './ProjectTags.css'

export default function ProjectTags(props){
    return (
        props.projects.map(project => (
            <span className="tag w3-small primary-color-light">
                <a rel="noopener noreferrer" target="_blank" href={project.url}>{project.name}</a>
            </span>
        ))
    )
}