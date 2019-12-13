import React from 'react'

export default function ProjectTags(props){
    return (
        props.projects.map(project => (
            <span class="w3-tag w3-small primary-color-light">
                <a href={project.url}>{project.name}</a>
            </span>
        ))
    )
}