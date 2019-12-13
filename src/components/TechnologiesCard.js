import React from 'react'
import TechnologyItem from './TechnologyItem'

import NodeLogo from '../assets/nodejs.png'

const nodeProjects = [{name: "Le derp bot", url: "https://github.com/pedrogneri/le-derp-bot"}, {name: "Blog", url: "https://github.com/pedrogneri/blog-webApp"}]

export default function TechnologiesCard(){
    return (
        <div className="w3-card-4 w3-margin-top">
            <header className="w3-container primary-color">
                <h3>Tecnologias</h3>
            </header>
                
            <div className="w3-container secondary-color">
                <ul className="w3-ul">
                   <TechnologyItem name="Node js" description="Aprendi node.js com vídeos no youtube e já fiz algumas aplicações simples" 
                   img={NodeLogo} projects={nodeProjects}/>
                    <TechnologyItem name="Java" description="Aprendi node.js com vídeos no youtube e já fiz algumas aplicações simples" 
                   img={NodeLogo} projects={nodeProjects}/>
                </ul>
            </div>
        </div>
    )
}