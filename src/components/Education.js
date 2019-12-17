import React from 'react'

import EducationItem from './EducationItem'

export default function Education(){
    return (
        <div className="margin-top">
            <header className="w3-container round-border-top primary-color">
                <h3>Formação acadêmica</h3>
            </header>

            <div className="w3-container round-border-bottom secondary-color w3-padding-16">
                <EducationItem />
            </div>
        </div>
    )
}