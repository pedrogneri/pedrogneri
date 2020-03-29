import React from 'react'

export default function EducationItem(props){
    const { educationItem } = props

    return (
        <div className="w3-container w3-row w3-padding-16">
            <div className="w3-container w3-half w3-margin-bottom">
                <span className="title"><b>{educationItem.name}</b></span> 
                <br/>
                <span className="description">{educationItem.graduation}</span>
                <br/>
                <span className="description"><i>{educationItem.duration}</i></span>
            </div>
            <div className="w3-container w3-rest">
                <span className="description">{educationItem.description}</span>
            </div>
        </div>
    )
}