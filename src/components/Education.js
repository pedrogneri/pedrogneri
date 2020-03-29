import React from 'react'
import styled from 'styled-components'

import EducationItem from './EducationItem'
import education from '../data/education.json'

const Separator = styled.hr`
    border-color: #666 !important;
`

export default function Education(){
    const educationList = education.map((educationItem, index) => 
        <>
            <EducationItem key={index} educationItem={educationItem}/>
            {(index !== Object.keys(education).length-1) && <Separator />}
        </>
    )

    return (
        <div className="margin-top">
            <header className="w3-container round-border-top primary-color">
                <h3>Formação acadêmica</h3>
            </header>
            <div className="w3-container round-border-bottom secondary-color">{educationList}</div>
        </div>
    )
}