import React from 'react'
import TechnologyItem from './TechnologyItem'

import NodeLogo from '../assets/nodejs.png'

export default function TechnologiesCard(){
    return (
        <div className="w3-card-4 w3-margin-top">
            <header className="w3-container primary-color">
                <h1>Tecnologias</h1>
            </header>
                
            <div className="w3-container secondary-color">
                <ul className="w3-ul">
                   <TechnologyItem name="Node js" description="Aprendi node.js com vídeos no youtube e já fiz algumas aplicações simples" img={NodeLogo} />
                </ul>
            </div>
        </div>
    )
}