import React from 'react'
import TechnologyItem from './TechnologyItem'
import '../style/TechnologiesCard.css'

const nodeProjects = [{name: "Le derp bot", url: "https://github.com/pedrogneri/le-derp-bot"}, 
    {name: "Blog", url: "https://github.com/pedrogneri/blog-webApp"}]
const javaProjects = [{name: "Gereco", url: "https://github.com/gerecoteco/gereco"}, 
    {name: "Urna eletrônica", url: "https://github.com/pedrogneri/simulador-urna-eletronica"}]
const reactProjects = [{name: "pedrogneri.github.io", url: "https://github.com/pedrogneri/pedrogneri"}]

export default function TechnologiesCard(){
    return (
        <div className="w3-margin-top">
            <header className="w3-container round-border-top primary-color">
                <h3>Tecnologias</h3>
            </header>
                
            <div className="w3-container round-border-bottom w3-padding-16 secondary-color">
                <div className="technologies-container">
                    <TechnologyItem name="Node js" description="Aprendi node.js com vídeos no youtube e já fiz algumas aplicações simples" projects={nodeProjects}/>
                    <TechnologyItem name="Java" description="Aprendi java no curso técnico e com essa tecnologia desenvolvi meu TCC e alguns outros projetos" projects={javaProjects}/>
                    <TechnologyItem name="React" description="Sei o básico de React e aprendi na prática principalmente no desenvolvimento dessa aplicação" projects={reactProjects}/>
                </div>
            </div>
        </div>
    )
}