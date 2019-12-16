import React from 'react'

import EducationItem from './EducationItem'

export default function Education(){
    return (
        <div className="w3-card-4 margin-top">
            <header className="w3-container primary-color">
                <h3>Formação acadêmica</h3>
            </header>

            <EducationItem />
        </div>
    )
}