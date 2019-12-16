import React from 'react'

import '../style/DescriptionCard.css'

export default function DescriptionCard(){
    return (
        <div className="w3-rest w3-container description-card">
            <header className="w3-container main-name">
                <h3>Pedro Guilherme Neri</h3>
            </header>
                
            <div className="w3-container description main-description">
                <p>Estagiário na Dextra e estudante de ciência da computação na UniFAJ</p>
            </div>
        </div>
    )
}