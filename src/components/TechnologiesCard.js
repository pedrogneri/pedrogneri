import React from 'react'
import TechnologyItem from './TechnologyItem'
import '../style/TechnologiesCard.css'
import technologies from '../data/technologies.json'

export default function TechnologiesCard(){
    const technologyList = technologies.map((technology, index) => 
        <TechnologyItem key={index} technology={technology}/>
    )

    return (
        <div className="w3-margin-top">
            <header className="w3-container round-border-top primary-color">
                <h3>Tecnologias</h3>
            </header>
                
            <div className="w3-container round-border-bottom w3-padding-16 secondary-color">
                <div className="technologies-container">{technologyList}</div>
            </div>
        </div>
    )
}