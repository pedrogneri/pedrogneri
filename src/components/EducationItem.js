import React from 'react'

export default function EducationItem(){
    return (
        <div className="w3-container secondary-color w3-padding-16 w3-row">
            <div className="w3-container w3-half w3-margin-bottom">
                <span className="title"><b>Etec João Belarmino</b></span> 
                <br/>
                <span className="description">Ensino médio | Técnico de informática</span>
                <br/>
                <span className="description"><i>2017 - 2019</i></span>
            </div>
            <div className="w3-container w3-rest w3-leftbar">
                <span className="description">
                    Me formei no ensino médio integrado ao técnico de informática,
                    aprendendo diversas tecnologias referentes ao desenvolvimento de aplicações web, mobile e desktop
                    como Html, css, javascript, PHP, java, kotlin, SQL e MySQL
                </span>
            </div>
        </div>
    )
}